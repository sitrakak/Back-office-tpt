import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMembreComponent } from './liste-membre.component';

describe('ListeMembreComponent', () => {
  let component: ListeMembreComponent;
  let fixture: ComponentFixture<ListeMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMembreComponent]
    });
    fixture = TestBed.createComponent(ListeMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
