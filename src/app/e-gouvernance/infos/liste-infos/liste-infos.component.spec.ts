import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInfosComponent } from './liste-infos.component';

describe('ListeInfosComponent', () => {
  let component: ListeInfosComponent;
  let fixture: ComponentFixture<ListeInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeInfosComponent]
    });
    fixture = TestBed.createComponent(ListeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
