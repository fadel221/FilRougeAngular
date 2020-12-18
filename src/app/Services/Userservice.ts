import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private url='http://localhost:8000/api/admin/users';
 // private headers: HttpHeaders
  constructor (private http: HttpClient, )
  {
    //const token= localStorage.getItem('token');
   // this.headers= new HttpHeaders().set('Authorization', 'Bearer '+ token)
  }

  getUsers(): any
  {
      return this.http.get(this.url);
  }

  RegisterUser(data:any)
  {
    return this.http.post(this.url,data);
  }

  updateUser(data:any)
  {
    return this.http.put(this.url+'/'+data.id,data);
  }

  
}
