import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierInfosComponent } from './modifier-infos.component';

describe('ModifierInfosComponent', () => {
  let component: ModifierInfosComponent;
  let fixture: ComponentFixture<ModifierInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierInfosComponent]
    });
    fixture = TestBed.createComponent(ModifierInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
