import { useEffect, useState } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collection) => {
  // State that stores fetched documents from firestore
  const [docs, setDocs] = useState([]);

  //   Communicate with the db inside use effect to fire everytime there is a change in collection

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      //   order befre retrival
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //takes a snapshot of the whole database when there is a change in collection
        let documents = []; //stores document fetched from the snapS
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id }); //takes image data and id and stores them in documents as an array.
        });
        setDocs(documents);
      });
    return () => unsub(); //unmouunts after fetching
  }, [collection]);

  return { docs };
};

export default useFirestore;
