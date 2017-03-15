import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeactivationDialogComponent } from './confirm-deactivation-dialog.component';

describe('ConfirmDeactivationDialogComponent', () => {
  let component: ConfirmDeactivationDialogComponent;
  let fixture: ComponentFixture<ConfirmDeactivationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeactivationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeactivationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
