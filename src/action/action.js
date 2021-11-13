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
