/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import { onRequest } from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import {https} from "firebase-functions";
import {firestore, initializeApp} from "firebase-admin";

initializeApp();

exports.createUserRecord = https.onRequest(async (req: any, res: any) => {
  // Ensure you only accept POST requests for security reasons
  if (req.method !== "POST") {
    res.status(400).send("Please send a POST request");
    return;
  }

  try {
    const {email} = req.body;
    if (!email) {
      res.status(400).send("Email is required");
      return;
    }

    const userRef = firestore().collection("users").doc(email);
    await userRef.set({
      email,
      trees_planted: 0,
    });

    res.status(200).send(`User record created for ${email}`);
  } catch (error) {
    console.error("Error creating user record:", error);
    res.status(500).send("Internal Server Error");
  }
});
