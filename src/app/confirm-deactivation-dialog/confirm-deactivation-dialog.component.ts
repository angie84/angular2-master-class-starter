import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'trm-confirm-deactivation-dialog',
  templateUrl: './confirm-deactivation-dialog.component.html',
  styleUrls: ['./confirm-deactivation-dialog.component.css']
})
export class ConfirmDeactivationDialogComponent implements OnInit {
  constructor(public dialogRef: MdDialogRef<ConfirmDeactivationDialogComponent>) { }
  ngOnInit() {}

}
