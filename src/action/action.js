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
      console.log(
        new Intl.DateTimeFormat("en-US", {
          dateStyle: "full",
        }).format(date.date[0])
      );
      queryReview.greaterThanOrEqualTo("createdAt", date.date[0]);
      queryReview.lessThanOrEqualTo("createdAt", date.date[1]);
    } else {
      const tempdate = new Date(date.date);
      tempdate.setDate(tempdate.getDate() + 1);
      queryReview.greaterThanOrEqualTo("createdAt", new Date(date.date));
      queryReview.lessThanOrEqualTo("createdAt", tempdate);
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
