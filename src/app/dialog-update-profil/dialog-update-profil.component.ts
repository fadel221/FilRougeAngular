import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-update-profil',
  templateUrl: './dialog-update-profil.component.html',
  styleUrls: ['./dialog-update-profil.component.css']
})
export class DialogUpdateProfilComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogUpdateProfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { 

  }

  ngOnInit(): void {
  }

}
