import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterUserComponentComponent } from './dialog-register-user-component';

describe('DialogRegisterUserComponentComponent', () => {
  let component: DialogRegisterUserComponentComponent;
  let fixture: ComponentFixture<DialogRegisterUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegisterUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
