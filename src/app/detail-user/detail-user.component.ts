import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDetailUserComponent } from '../dialog-detail-user/dialog-detail-user.component';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogDetailUserComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) 
  { 

  }

  ngOnInit(): void {
  }

}
