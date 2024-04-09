import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditInfoComponent } from './profile-edit-info.component';

describe('ProfileEditInfoComponent', () => {
  let component: ProfileEditInfoComponent;
  let fixture: ComponentFixture<ProfileEditInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileEditInfoComponent]
    });
    fixture = TestBed.createComponent(ProfileEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
