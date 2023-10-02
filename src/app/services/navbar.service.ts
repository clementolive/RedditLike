import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thread } from '../interfaces/thread';
import { HomeDropdown } from '../interfaces/home-dropdown';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private http: HttpClient) { }

  getHomeDropdown(): Observable<HomeDropdown>{
      return this.http.get<HomeDropdown>("../assets/homeDropdown.json");
  }
}
