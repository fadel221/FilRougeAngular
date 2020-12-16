import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogArchiveUserComponent } from '../dialog-archive-user/dialog-archive-user.component';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogArchiveUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any ) 
  { 

  }

  ngOnInit(): void {
  }

}
