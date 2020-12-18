import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../Services/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {


constructor (private con: ConnexionService,private router: Router )
{

}
 
login(credentials :any)
{
  
  this.con.GetToken(credentials).subscribe(
    (response : any) => 
    {
      const token= response.token;
      localStorage.setItem('token',token);
      this.router.navigate(['profils']);
    },
    (error: any) =>
    {
      console.log(error)
    }
  )
}

  ngOnInit(): void {
    
  }

}
