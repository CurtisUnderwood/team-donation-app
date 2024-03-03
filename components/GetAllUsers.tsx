// fetchFirestoreData.js

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

const fetchFirestoreData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "yourCollectionName"));
    const data = querySnapshot.docs.map((doc) => ({
      username: doc.id, // Assuming username is the document ID
      treesPlanted: doc.data().score.toFixed(2), // Mapping score to treesPlanted
    }));
    return data;
  } catch (error) {
    console.error("Error fetching Firestore data:", error);
    return [];
  }
};

export default fetchFirestoreData;
