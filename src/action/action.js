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
    return { error: error.message };
  }
};
