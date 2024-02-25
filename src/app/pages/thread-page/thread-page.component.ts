import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SubredditInfo } from 'src/app/interfaces/subredditInfo';
import { ThreadPage } from 'src/app/interfaces/thread-page';
import { ThreadService } from 'src/app/services/thread.service';


@Component({
  selector: 'app-thread-page',
  templateUrl: './thread-page.component.html',
  styleUrls: ['./thread-page.component.scss']
})
export class ThreadPageComponent {
  constructor(private threadService: ThreadService){}

  thread$: Observable<ThreadPage> = this.threadService.getThread();
  subInfo$: Observable<SubredditInfo> = this.threadService.getSubredditInfo();
}
