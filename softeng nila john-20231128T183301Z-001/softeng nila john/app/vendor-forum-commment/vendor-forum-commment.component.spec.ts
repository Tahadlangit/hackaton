import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorForumCommmentComponent } from './vendor-forum-commment.component';

describe('VendorForumCommmentComponent', () => {
  let component: VendorForumCommmentComponent;
  let fixture: ComponentFixture<VendorForumCommmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorForumCommmentComponent]
    });
    fixture = TestBed.createComponent(VendorForumCommmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
