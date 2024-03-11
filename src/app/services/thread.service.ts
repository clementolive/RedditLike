import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { Thread } from '../interfaces/thread';
import { ThreadPage } from '../interfaces/thread-page';
import { SubredditInfo } from '../interfaces/subredditInfo';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  constructor(private http: HttpClient) { }

  getThread(id: number) {
    return this.http.get<ThreadPage>("../assets/thread.json").pipe(
      filter(data => data.thread.id === id)
    );
  }

  getThreads(): Observable<Thread[]>{
      return this.http.get<Thread[]>("../assets/threads.json");
  }

  getSubredditInfo(id:number){
    return this.http.get<SubredditInfo>("../assets/subredditInfo.json");
  }

}
