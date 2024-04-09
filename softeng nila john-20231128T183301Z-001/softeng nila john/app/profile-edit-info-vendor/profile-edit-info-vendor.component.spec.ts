import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditInfoVendorComponent } from './profile-edit-info-vendor.component';

describe('ProfileEditInfoVendorComponent', () => {
  let component: ProfileEditInfoVendorComponent;
  let fixture: ComponentFixture<ProfileEditInfoVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditInfoVendorComponent]
    });
    fixture = TestBed.createComponent(ProfileEditInfoVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
