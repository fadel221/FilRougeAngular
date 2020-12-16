import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profil } from 'src/entity/Profil';
import { ConnexionComponent } from '../connexion/connexion.component';
import { DetailProfilComponent } from '../detail-profil/detail-profil.component';
import { DialogArchiveProfilComponent } from '../dialog-archive-profil/dialog-archive-profil.component';
import { DialogUpdateProfilComponent } from '../dialog-update-profil/dialog-update-profil.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ProfilService } from '../profil-service.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

dataSource:any;
displayedColumns=['id','libelle','action']
  constructor(private profil:ProfilService,public dialog:MatDialog) {
    
   }

   

  ngOnInit(): void {
    this.profil.getProfils().subscribe(
      
      (response: any) => { 
        this.dataSource=(response["hydra:member"]);
        console.log(this.dataSource)
      },

      (error :any)=>{
        console.log(error); 
      }
      )
  }

  DialogProfilDetail(row:any): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height:'500px',
      backdropClass:'backgroundDialog',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      row = result;
    });
  }

  DialogProfilUpdate(row:any): void {
    let dialogRef = this.dialog.open(DialogUpdateProfilComponent, {
      width: '500px',
      height:'500px',
      backdropClass:'backgroundDialog',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      row = result;
    });
  }

  DialogProfilArchive(row:any): void {
    let dialogRef = this.dialog.open(DialogArchiveProfilComponent, {
      width: '500px',
      height:'500px',
      backdropClass:'backgroundDialog',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      row = result;
    });
  }

  OnclickedRow(row:any)
  {
    console.log(row.libelle)
  }
  
  
  

}
