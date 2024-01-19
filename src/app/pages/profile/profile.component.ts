import { Component } from '@angular/core';
import { ThreadService } from 'src/app/services/thread.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
styleAvatar() {
throw new Error('Method not implemented.');
}
addSocial() {
throw new Error('Method not implemented.');
}

  myName: string = "myName";  

  newPost() {
  throw new Error('Method not implemented.');
  }
  threads$: any;
  constructor(private threadService: ThreadService){}
  
  ngOnInit(){
    this.threads$ = this.threadService.getThreads();
  }

}
