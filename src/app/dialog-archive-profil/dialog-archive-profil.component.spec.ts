import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArchiveProfilComponent } from './dialog-archive-profil.component';

describe('DialogArchiveProfilComponent', () => {
  let component: DialogArchiveProfilComponent;
  let fixture: ComponentFixture<DialogArchiveProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogArchiveProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArchiveProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
