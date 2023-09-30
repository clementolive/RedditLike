import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortBannerComponent } from './sort-banner.component';

describe('SortBannerComponent', () => {
  let component: SortBannerComponent;
  let fixture: ComponentFixture<SortBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
