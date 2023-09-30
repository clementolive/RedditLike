import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '../interfaces/thread.interface';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(private http: HttpClient) { }

  getThreads(): Observable<Thread[]>{
      return this.http.get<Thread[]>("../assets/threads.json");
  }

//   getThread(): Observable<Thread[]>{
//     return this.http.get<Thread[]>("../assets/threads.json", 1);
// }
}
