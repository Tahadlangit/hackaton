import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditPageComponent } from './vendor-edit-page.component';

describe('VendorEditPageComponent', () => {
  let component: VendorEditPageComponent;
  let fixture: ComponentFixture<VendorEditPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorEditPageComponent]
    });
    fixture = TestBed.createComponent(VendorEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
