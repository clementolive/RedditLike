import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from 'src/app/interfaces/thread';
import { ThreadService } from 'src/app/services/thread.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {

  constructor(private router: Router,
    private threadService: ThreadService,
    private userService: UserService) { }



  @Input() thread!: Thread;
  upvoted = 0;

  goToThread(id: number) {
    this.router.navigate(["threadPage", id]);
  }

  goToSubreddit(subreddit: string) {
    this.router.navigate(["subredditPage", subreddit]);
  }

  goToProfile(username: string) {
    this.router.navigate(["profilePage", username]);
  }

  upvote() {
    switch (this.upvoted) {
      case -1:
        this.upvoted = 1;
        this.thread.upvotes += 2;
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

  downvote() {
    switch (this.upvoted) {
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
        this.thread.upvotes -= 2;
        break;
    }
  }
}
