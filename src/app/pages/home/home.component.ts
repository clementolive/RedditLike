
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from 'src/app/interfaces/thread';
import { ThreadService } from 'src/app/services/thread.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  threads$! : Observable<Thread[]>;
  pageYoffset!: number;

  constructor(private threadService: ThreadService){}
  
  ngOnInit(){
    this.threads$ = this.threadService.getThreads();
  }

  scrollToTop(){
    window.scrollTo(0,0);
  }
}


