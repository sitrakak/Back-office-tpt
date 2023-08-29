import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGouvernanceComponent } from './e-gouvernance.component';

describe('EGouvernanceComponent', () => {
  let component: EGouvernanceComponent;
  let fixture: ComponentFixture<EGouvernanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EGouvernanceComponent]
    });
    fixture = TestBed.createComponent(EGouvernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
