import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from 'src/app/interfaces/thread';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {


  @Input() thread!: Thread;
  upvoted = 0; 

  constructor(private router:Router){}

  goToThread(id: number) {
    this.router.navigate(["threadPage", id]);
  }

  upvote() {
    switch(this.upvoted){
      case -1: 
        this.upvoted = 1; 
        this.thread.upvotes+=2; 
      break;
      case 0: 
       this.upvoted = 1; 
       this.thread.upvotes++; 
      break; 
      case 1: 
        this.upvoted = 0; 
        this.thread.upvotes--; 
      break; 
    }
  }

  downvote(){
    switch(this.upvoted){
      case -1: 
        this.upvoted = 0; 
        this.thread.upvotes++; 
      break;
      case 0: 
       this.upvoted = -1; 
       this.thread.upvotes--; 
      break; 
      case 1: 
        this.upvoted = -1; 
        this.thread.upvotes-=2; 
      break; 
    }
  }
}
