import { useEffect, useState } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../Firebase/config";

const UseStorage = (image) => {
  // states that will handle progress, error and url
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null); //fetched after image has fully uploaded

  //   Create a useEffect that fires everytime there is an image file

  useEffect(() => {
    // Create a reference to where the image will be stored
    const storageRef = projectStorage.ref(image.name); //this simply grabs the image name
    const collectionRef = projectFirestore.collection("images"); //create a collectio images where we will store our urls

    // We use a put method to store the image and attach a listner that fires since its asych.using on
    storageRef.put(image).on(
      "state_changed", //event we will listen to
      (snap) => {
        // We can track the progress of the upload
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //the % upload
        setProgress(percentage);
      }, //function that fires when state is changed
      (err) => {
        setError(err); //second parameter that fires incase of an error
      },
      async () => {
        //third parameter firses in cases of successfull upload
        // Get the url after upload
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        // store url in our collectionref
        setUrl(url);
        collectionRef.add({ url, createdAt });
      }
    );
  }, [image]);

  return { progress, url, error };
};

export default UseStorage;
