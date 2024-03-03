import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

async function getScore(username: string) {
  const docRef = doc(db, "yourCollectionName", username);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().score.toFixed(2);
  } else {
    return 0;
  }
}

export default getScore;
