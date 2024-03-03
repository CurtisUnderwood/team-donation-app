import { db } from "@/firebaseConfig";
import { doc, updateDoc, increment } from "firebase/firestore";

async function incrementUserScore(user: any) {
  const firebaseName = (user.username ?? user.nickname).toString();
  const userDocRef = doc(db, "yourCollectionName", firebaseName);

  try {
    await updateDoc(userDocRef, {
      score: increment(0.01),
    });
    console.log(`Score of ${firebaseName} incremented by 0.01.`);
  } catch (error) {
    console.error("Error incrementing user's score:", error);
  }
}

export default incrementUserScore;
