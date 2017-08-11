/* Dependencies */
import * as firebase from "firebase";

class Firebase {
  static initialise() {
    firebase.initializeApp({
      apiKey: "AIzaSyBIWl_X8wBJYFVqxswgfqNiZoZiZcJAnzk",
      authDomain: "acknowledge-bc776.firebaseapp.com",
      databaseURL: "https://acknowledge-bc776.firebaseio.com/",
      storageBucket: "gs://acknowledge-bc776.appspot.com/",
    });
  }
}

module.exports = Firebase;