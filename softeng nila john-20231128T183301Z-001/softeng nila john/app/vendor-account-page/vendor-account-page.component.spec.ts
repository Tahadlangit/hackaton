import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAccountPageComponent } from './vendor-account-page.component';

describe('VendorAccountPageComponent', () => {
  let component: VendorAccountPageComponent;
  let fixture: ComponentFixture<VendorAccountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorAccountPageComponent]
    });
    fixture = TestBed.createComponent(VendorAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
