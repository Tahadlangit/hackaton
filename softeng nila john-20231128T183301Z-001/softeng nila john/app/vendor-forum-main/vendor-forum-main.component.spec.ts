import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorForumMainComponent } from './vendor-forum-main.component';

describe('VendorForumMainComponent', () => {
  let component: VendorForumMainComponent;
  let fixture: ComponentFixture<VendorForumMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorForumMainComponent]
    });
    fixture = TestBed.createComponent(VendorForumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
