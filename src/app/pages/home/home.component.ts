
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeDropdown } from 'src/app/interfaces/home-dropdown';
import { Thread } from 'src/app/interfaces/thread';
import { NavbarService } from 'src/app/services/navbar.service';
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


