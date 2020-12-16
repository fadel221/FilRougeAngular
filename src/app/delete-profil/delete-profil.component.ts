import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogArchiveProfilComponent } from '../dialog-archive-profil/dialog-archive-profil.component';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.css']
})
export class DeleteProfilComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogArchiveProfilComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any) 
  { 

  }

  ngOnInit(): void {
  }

}
