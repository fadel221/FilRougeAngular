import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
public login: string="admin";
public pwd: string="admin";
public message: string="";
  
connexion (login:string,pwd:string)
{
  if (this.login==login && this.pwd==pwd)
  {
    return this.message= "Connexion Fait avec succées";
  }
  return this.message= "Echec de connexion";
  
}

alert(a:any)
{
  alert (a);
}
  ngOnInit(): void {
    
  }

}
