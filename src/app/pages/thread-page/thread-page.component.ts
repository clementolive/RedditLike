import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SubredditInfo } from 'src/app/interfaces/subredditInfo';
import { ThreadPage } from 'src/app/interfaces/thread-page';
import { ThreadService } from 'src/app/services/thread.service';


@Component({
  selector: 'app-thread-page',
  templateUrl: './thread-page.component.html',
  styleUrls: ['./thread-page.component.scss']
})
export class ThreadPageComponent implements OnInit{

  constructor(private threadService: ThreadService,
    private route: ActivatedRoute){}

  thread$!: Observable<ThreadPage>; 
  subInfo$!: Observable<SubredditInfo>;

  userVotes = 0;
  threadId!: number;

  ngOnInit(): void {
    const routeId = +this.route.snapshot.params['id'];
    this.thread$ = this.threadService.getThread(routeId);
    this.subInfo$ = this.threadService.getSubredditInfo(routeId);
  }

  countVotes(newVote: number) {
    this.userVotes += newVote;
  }
}
