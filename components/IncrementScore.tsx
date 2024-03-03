import { db } from "@/firebaseConfig";
import { doc, updateDoc, increment } from "firebase/firestore";

async function incrementUserScore(user: any, amount: number = 0.01) {
  const firebaseName = (user.username ?? user.nickname).toString();
  const userDocRef = doc(db, "yourCollectionName", firebaseName);

  try {
    await updateDoc(userDocRef, {
      score: increment(amount),
    });
    console.log(`Score of ${firebaseName} incremented by ${amount}.`);
  } catch (error) {
    console.error("Error incrementing user's score:", error);
  }
}

export default incrementUserScore;
