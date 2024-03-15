import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/interfaces/thread';
import { ThreadService } from 'src/app/services/thread.service';
import { collection, addDoc } from "firebase/firestore";
import { FirebaseService } from 'src/app/services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  myName = "myName";
  threads$!: Observable<Thread[]>;
  user$!: Observable<User>;

  constructor(private threadService: ThreadService,
    private userService: UserService,
    private firebaseService: FirebaseService,
    private route:ActivatedRoute) { }

  async ngOnInit() {
    const username = this.route.snapshot.params['username'];
    console.log("username", username);
    this.threads$ = this.threadService.getThreads();
    this.user$ = this.userService.getUserByName(username);

    // try {
    //   const docRef = await addDoc(collection(this.firebaseService.db, "spaceship"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
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
