import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistrationNavigationComponent } from './modal-registration-navigation.component';

describe('ModalRegistrationNavigationComponent', () => {
  let component: ModalRegistrationNavigationComponent;
  let fixture: ComponentFixture<ModalRegistrationNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistrationNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistrationNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
