import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCalcuVendorComponent } from './currency-calcu-vendor.component';

describe('CurrencyCalcuVendorComponent', () => {
  let component: CurrencyCalcuVendorComponent;
  let fixture: ComponentFixture<CurrencyCalcuVendorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyCalcuVendorComponent]
    });
    fixture = TestBed.createComponent(CurrencyCalcuVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
