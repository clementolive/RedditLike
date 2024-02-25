import { Component } from '@angular/core';

@Component({
  selector: 'app-side-links',
  templateUrl: './side-links.component.html',
  styleUrls: ['./side-links.component.scss']
})
export class SideLinksComponent {
  getPremium() {
    console.log("get premium"); 
  }

}
