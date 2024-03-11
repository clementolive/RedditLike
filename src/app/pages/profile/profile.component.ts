import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/interfaces/thread';
import { ThreadService } from 'src/app/services/thread.service';
import { collection, addDoc } from "firebase/firestore"; 
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit{


  myName = "myName";  

  threads$!: Observable<Thread[]>;
  constructor(private threadService: ThreadService,
    private firebaseService: FirebaseService){}
  
  async ngOnInit(){
    this.threads$ = this.threadService.getThreads();

try {
  const docRef = await addDoc(collection(this.firebaseService.db, "spaceship"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }




  styleAvatar() {
    throw new Error('Method not implemented.');
    }
    addSocial() {
    throw new Error('Method not implemented.');
    }
  newPost() {
  throw new Error('Method not implemented.');
  }

}
