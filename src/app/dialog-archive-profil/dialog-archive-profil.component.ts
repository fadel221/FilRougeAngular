import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-archive-profil',
  templateUrl: './dialog-archive-profil.component.html',
  styleUrls: ['./dialog-archive-profil.component.css']
})
export class DialogArchiveProfilComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogArchiveProfilComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any ) 
  { 

  }

  ngOnInit(): void {
  }

}
