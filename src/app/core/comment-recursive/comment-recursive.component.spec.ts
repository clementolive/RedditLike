import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentRecursiveComponent } from './comment-recursive.component';

describe('CommentRecursiveComponent', () => {
  let component: CommentRecursiveComponent;
  let fixture: ComponentFixture<CommentRecursiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentRecursiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentRecursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
