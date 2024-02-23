import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/interfaces/thread';
import { ThreadService } from 'src/app/services/thread.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
styleAvatar() {
throw new Error('Method not implemented.');
}
addSocial() {
throw new Error('Method not implemented.');
}

  myName = "myName";  

  newPost() {
  throw new Error('Method not implemented.');
  }
  threads$!: Observable<Thread[]>;
  constructor(private threadService: ThreadService){}
  
  ngOnInit(){
    this.threads$ = this.threadService.getThreads();
  }

}
