import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLinksComponent } from './side-links.component';

describe('SideLinksComponent', () => {
  let component: SideLinksComponent;
  let fixture: ComponentFixture<SideLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
