import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-update-user',
  templateUrl: './dialog-update-user.component.html',
  styleUrls: ['./dialog-update-user.component.css']
})
export class DialogUpdateUserComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogUpdateUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any ) 
  { 

  }

  ngOnInit(): void {
  }

}
