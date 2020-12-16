import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogArchiveUserComponent } from './dialog-archive-user.component';

describe('DialogArchiveUserComponent', () => {
  let component: DialogArchiveUserComponent;
  let fixture: ComponentFixture<DialogArchiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogArchiveUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogArchiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
