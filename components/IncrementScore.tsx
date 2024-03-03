import { db } from "../firebaseConfig";
import { doc, updateDoc, increment } from "firebase/firestore";

async function incrementUserScore(username: string) {
  const userDocRef = doc(db, "yourCollectionName", username);

  try {
    await updateDoc(userDocRef, {
      score: increment(0.01),
    });
    console.log(`Score of ${username} incremented by 0.01.`);
  } catch (error) {
    console.error("Error incrementing user's score:", error);
  }
}

export default incrementUserScore;
