import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfosComponent } from './create-infos.component';

describe('CreateInfosComponent', () => {
  let component: CreateInfosComponent;
  let fixture: ComponentFixture<CreateInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInfosComponent]
    });
    fixture = TestBed.createComponent(CreateInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
