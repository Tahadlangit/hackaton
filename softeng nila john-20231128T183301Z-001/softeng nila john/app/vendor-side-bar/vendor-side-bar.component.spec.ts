import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorSideBarComponent } from './vendor-side-bar.component';

describe('VendorSideBarComponent', () => {
  let component: VendorSideBarComponent;
  let fixture: ComponentFixture<VendorSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorSideBarComponent]
    });
    fixture = TestBed.createComponent(VendorSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
