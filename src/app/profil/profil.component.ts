import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/entity/Profil';
import { ProfilService } from '../profil-service.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


dataSource:any;
displayedColumns=['id','libelle','action']
  constructor(private profil:ProfilService) {
    
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
  
  
  

}
