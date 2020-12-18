import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfilService } from '../profil-service.service';

@Component({
  selector: 'app-dialog-update-profil',
  templateUrl: './dialog-update-profil.component.html',
  styleUrls: ['./dialog-update-profil.component.css']
})
export class DialogUpdateProfilComponent implements OnInit {

  constructor(public dialog:MatDialog,public dialogRef: MatDialogRef<DialogUpdateProfilComponent>,private profil:ProfilService,
    @Inject (MAT_DIALOG_DATA) public data: any) 
  { 

  }
  

  
  Updatelibelle(libelle:any)
  {
    console.log(libelle)
    console.log(this.data);
    if (confirm('Etes vous sure de vouloir aplliquer cette modification'))
    {
      this.data.libelle=libelle
      this.profil.UpdateProfil(this.data).subscribe(
        (response:any)=>
        {
          console.log(this.data)
        },
        (error)=>
        {
          console.log(this.data)
        }
      )
      
      

    }
    
  }

  ngOnInit(): void {
  }

}
