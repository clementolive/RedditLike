import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '../interfaces/thread';
import { ThreadPage } from '../interfaces/thread-page';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  constructor(private http: HttpClient) { }

  getThread(threadId: number) {
    return this.http.get<ThreadPage>("../assets/thread.json");
  }

  getThreads(): Observable<Thread[]>{
      return this.http.get<Thread[]>("../assets/threads.json");
  }

  getSubredditInfo(){
    return this.http.get<any>("../assets/subredditInfo.json");
  }

}
