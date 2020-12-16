import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-archive-user',
  templateUrl: './dialog-archive-user.component.html',
  styleUrls: ['./dialog-archive-user.component.css']
})
export class DialogArchiveUserComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogArchiveUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) 
  { 

  }

  ngOnInit(): void {
  }

}
