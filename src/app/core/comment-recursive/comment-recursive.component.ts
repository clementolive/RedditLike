import { Component, Input } from '@angular/core';
import { _Comment } from 'src/app/interfaces/-comment';

@Component({
  selector: 'app-comment-recursive',
  styleUrls: ['./comment-recursive.component.scss'],
  template: `
     <div *ngFor="let comment of comments">
      <ul>
          <li class="text-secondary">
            <img src={{comment.image}} alt="" class="comment-image rounded-circle">
              {{comment.user}} made {{comment.date}}
          </li>
          <li class="threadline">  <span class="ps-2">{{comment.content}}</span>
              <ul class="p-1">
                  <li class="text-secondary">
                      <i class="bi bi-caret-up"></i>
                      <span class="text-white">{{comment.upvotes}}</span>
                      <i class="bi bi-caret-down pe-2"></i>
                      <i class="bi bi-chat-left pe-1"></i>
                      <span class="pe-2 ">Reply</span>
                      <span class="pe-2">Share</span>
                      <i class="bi bi-three-dots"></i>
                </li>
              </ul>
             
              <app-comment-recursive class="pe-2 ps-3" [comments]="comment.comments" *ngIf="comment.comments"></app-comment-recursive>
          </li>
         
      </ul>
    </div>
  `,
})
export class CommentRecursiveComponent {
  @Input() comments!: _Comment[];
}
