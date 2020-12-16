import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detail-user',
  templateUrl: './dialog-detail-user.component.html',
  styleUrls: ['./dialog-detail-user.component.css']
})
export class DialogDetailUserComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogDetailUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any ) 
  { 

  }

  ngOnInit(): void {
  }

}
