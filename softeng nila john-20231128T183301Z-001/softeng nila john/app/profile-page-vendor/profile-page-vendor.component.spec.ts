import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageVendorComponent } from './profile-page-vendor.component';

describe('ProfilePageVendorComponent', () => {
  let component: ProfilePageVendorComponent;
  let fixture: ComponentFixture<ProfilePageVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageVendorComponent]
    });
    fixture = TestBed.createComponent(ProfilePageVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
