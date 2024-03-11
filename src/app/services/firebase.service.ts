import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  
  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://support.google.com/firebase/answer/7015592
   firebaseConfig = {
    apiKey: "AIzaSyChNV5RoeX0SgeJIGqqNDbWUvQEqAgUQU0",
    authDomain: "redditlike-3da45.firebaseapp.com",
    projectId: "redditlike-3da45",
    storageBucket: "redditlike-3da45.appspot.com",
    messagingSenderId: "809621302833",
    appId: "1:809621302833:web:766a872b4cbeabbe03af10"
  };
  
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(this.app);

}
