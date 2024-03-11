/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThreadService } from 'src/app/services/thread.service';

@Component({
  selector: 'app-subreddit-page',
  templateUrl: './subreddit-page.component.html',
  styleUrls: ['./subreddit-page.component.scss']
})
export class SubredditPageComponent implements OnInit{

  constructor(private threadService: ThreadService,
    private route: ActivatedRoute){}

  threads$!: Observable<any>;

  ngOnInit(): void {
    const sub = this.route.snapshot.params['subreddit'];
    this.threads$ = this.threadService.getSubredditThreads(sub);
  }

 
}
