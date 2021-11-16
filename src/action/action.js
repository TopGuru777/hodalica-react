import Parse from "parse/dist/parse.min.js";
import keys from "../config/keys";

Parse.initialize(keys.APP_ID, keys.JS_KEY);
Parse.serverURL = keys.API_URL;

export const signinAction = async (data) => {
  try {
    var username = "hodalicaPartner_" + data.username;
    const user = await Parse.User.logIn(username, data.password);
    console.log(user);
    return { success: true };
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
};

export const logoutAction = async () => {
  Parse.User.logOut().then(() => {
    const currentUser = Parse.User.current();
    console.log(currentUser);
    return true;
  });
};

export const getProfileAction = async () => {
  const Partner = Parse.Object.extend("Partner");
  const queryPartner = new Parse.Query(Partner);
  queryPartner.equalTo("objectId", Parse.User.current().get("partner").id);
  queryPartner.include("city");
  queryPartner.include("category");

  try {
    const partner = await queryPartner.first();
    return partner;
  } catch (error) {
    return { error: error.message };
  }
};

export const getReviewData = async (date) => {
  const Review = Parse.Object.extend("Review");
  const partner = await getProfileAction();
  const queryReview = new Parse.Query(Review);

  if (date !== "all") {
    if (date.key === "range") {
      queryReview.greaterThanOrEqualTo("createdAt", date.date[0]);
      queryReview.lessThanOrEqualTo("createdAt", date.date[1]);
    } else {
      const fromdate = new Date(date.date);
      fromdate.setHours(0);
      fromdate.setMinutes(0);
      fromdate.setSeconds(0);
      fromdate.setDate(fromdate.getDate() + 1);
      queryReview.greaterThanOrEqualTo("createdAt", fromdate);
      queryReview.lessThanOrEqualTo("createdAt", new Date());
    }
  }

  queryReview.equalTo("partner", partner);
  queryReview.equalTo("available", true);
  queryReview.include("user");
  queryReview.limit(1000);

  try {
    const reviews = await queryReview.find();
    return reviews;
  } catch (error) {
    return { error: error.message };
  }
};

export const getStats = async () => {
  const partner = await getProfileAction();
  try {
    var results = await Parse.Cloud.run("getDealsUsedForPartner", {
      partnerId: partner.id,
    });
    console.log(results);
    var totalDealRedeemed = 0;
    var clients = 0;
    var newclients = 0;
    var existingClients = 0;

    // Pi 1
    var bosnianId = 0;
    var nonBosnianId = 0;

    //Pi 2
    var iosUser = 0;
    var androidUser = 0;

    //Pi 3
    var age12_18 = 0;
    var age19_25 = 0;
    var age26_35 = 0;
    var age35_plus = 0;

    for (var i = 0; i < results.length; i++) {
      var used = results[i].used;

      for (let j = 0; j < used.length; j++) {
        const dealUsed = used[j];
        var user = dealUsed.get("user");

        //We will add the date range filter after, on dealUsed.get("date")

        totalDealRedeemed += 1;
        clients += 1;

        if (
          dealUsed.get("firstTime") !== undefined &&
          dealUsed.get("firstTime") === false
        ) {
          existingClients += 1;
        } else {
          newclients += 1;
        }

        if (
          user.get("bosnianId") !== undefined &&
          user.get("bosnianId") === false
        ) {
          nonBosnianId += 1;
        } else {
          bosnianId += 1;
        }

        if (
          user.get("model") !== undefined &&
          user.get("model").includes("iPhone")
        ) {
          iosUser += 1;
        } else {
          androidUser += 1;
        }

        if (
          user.get("ageRange") !== undefined &&
          user.get("ageRange") === "12-18"
        ) {
          age12_18 += 1;
        } else if (
          user.get("ageRange") !== undefined &&
          user.get("ageRange") === "26-35"
        ) {
          age26_35 += 1;
        } else if (
          user.get("ageRange") !== undefined &&
          user.get("ageRange") === "35+"
        ) {
          age35_plus += 1;
        } else {
          age19_25 += 1;
        }
      }
    }

    var percentNewClients = (100 * newclients) / (newclients + existingClients);
    var percentExistingClients = 100 - percentNewClients;

    const resData = {
      redeemed: {
        total: totalDealRedeemed,
        clients: clients,
        newClients: percentNewClients + "% | " + newclients,
        existingClients: percentExistingClients + "% | " + existingClients,
      },
      charts: {
        chart1: {
          bosnian: bosnianId,
          foreigner: nonBosnianId,
        },
        chart2: {
          ios: iosUser,
          android: androidUser,
        },
        chart3: {
          age12_18,
          age19_25,
          age26_35,
          age35_plus,
        },
      },
      stats: results,
    };

    return resData;
  } catch (error) {
    return {
      error: error.message,
    };
  }
};
