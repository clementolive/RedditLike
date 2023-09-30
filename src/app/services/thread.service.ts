import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '../interfaces/thread.interface';
import { ThreadPage } from '../interfaces/thread-page';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {
  getThread(threadId: number) {
    return this.http.get<ThreadPage>("../assets/thread.json");
  }

  constructor(private http: HttpClient) { }

  getThreads(): Observable<Thread[]>{
      return this.http.get<Thread[]>("../assets/threads.json");
  }

}
