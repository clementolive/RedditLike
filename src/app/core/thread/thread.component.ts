import { Component, Input } from '@angular/core';
import { Thread } from 'src/app/interfaces/thread.interface';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent {

  // @Input() title!: string;
  // @Input() user!: string;
  // @Input() date!: string;
  // @Input() subreddit!: string;
  // @Input() upvotes!: number;
  // @Input() comments!: number;

  @Input() thread!: Thread;


}
