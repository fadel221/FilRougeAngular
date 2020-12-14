import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil } from 'src/entity/Profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  private url='http://localhost:8000/api/admin/profils';
 // private headers: HttpHeaders
  constructor (private http: HttpClient, )
  {
    //const token= localStorage.getItem('token');
    //this.headers= new HttpHeaders().set('Authorization', 'Bearer '+ token)
    
  }

  getProfils(): Observable<Profil []>
  {
     
      return this.http.get<Profil[]>(this.url) //{ headers: this.headers});
    
    
  }

  
  
  
}
