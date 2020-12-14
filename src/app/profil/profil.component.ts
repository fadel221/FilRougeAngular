import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../profil-service.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

private profils:any ;

  constructor(private profil:ProfilService) {
    
   }

  ngOnInit(): void {
  }

  showProfils():any
  {
    
    this.profil.getProfils().subscribe(
      
      (response: any) => { 
        this.profils=(response["hydra:member"]);
        console.log(this.profils)
      },

      (error :any)=>{
        console.log(error); 
      }
      )
    
  }
  

}
