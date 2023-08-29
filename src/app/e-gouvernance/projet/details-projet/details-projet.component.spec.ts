import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProjetComponent } from './details-projet.component';

describe('DetailsProjetComponent', () => {
  let component: DetailsProjetComponent;
  let fixture: ComponentFixture<DetailsProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProjetComponent]
    });
    fixture = TestBed.createComponent(DetailsProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
