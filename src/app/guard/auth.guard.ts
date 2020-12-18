import { Injectable } from '@angular/core';
import { CanActivate, Router,   } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from '../Services/connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router:Router,private con:ConnexionService)
  {

  }
  canActivate (): boolean
  {
    if (this.con.loggedIn())
    {
      return true
    }
    this.router.navigate(["connexion"]);
    return false
  }
  
  
}
