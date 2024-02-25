import { Component, EventEmitter, Input, Output } from '@angular/core';
import { _Comment } from 'src/app/interfaces/-comment';

@Component({
  selector: 'app-comment-recursive',
  styleUrls: ['./comment-recursive.component.scss'],
  templateUrl: './comment-recursive.component.html',
})
export class CommentRecursiveComponent {
  
  @Input() comment!: _Comment;
  @Output() voteEvent = new EventEmitter<number>();
  upvoted = 0; 

  upvote() {
    switch(this.upvoted){
      case -1: 
        this.upvoted = 1; 
        this.comment.upvotes+=2; 
      break;
      case 0: 
       this.upvoted = 1; 
       this.comment.upvotes+=1; 
       this.voteEvent.emit(1);
      break; 
      case 1: 
        this.upvoted = 0; 
        this.comment.upvotes--; 
        this.voteEvent.emit(-1);
      break; 
    }
  }

  downvote(){
    switch(this.upvoted){
      case -1: 
        this.upvoted = 0; 
        this.comment.upvotes+=1; 
        this.voteEvent.emit(-1);
      break;
      case 0: 
       this.upvoted = -1; 
       this.comment.upvotes--; 
       this.voteEvent.emit(1);
      break; 
      case 1: 
        this.upvoted = -1; 
        this.comment.upvotes-=2; 
      break; 
    }
  }
}
