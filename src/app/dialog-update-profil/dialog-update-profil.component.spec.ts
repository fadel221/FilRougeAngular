import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateProfilComponent } from './dialog-update-profil.component';

describe('DialogUpdateProfilComponent', () => {
  let component: DialogUpdateProfilComponent;
  let fixture: ComponentFixture<DialogUpdateProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
