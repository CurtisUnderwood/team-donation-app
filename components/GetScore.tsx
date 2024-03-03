import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

async function getScore(user: any) {
  const firebaseName = (user.username ?? user.nickname).toString();

  const docRef = doc(db, "yourCollectionName", firebaseName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().score.toFixed(2);
  } else {
    return 0;
  }
}

export default getScore;
