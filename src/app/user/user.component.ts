import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/Userservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
private users: any[]=[];

constructor (private userservice: UserService)
{

}

  ngOnInit(): void {
  }

  showUsers():any
  {
    
    this.userservice.getUsers().subscribe(
      
      (response: any) => {
        console.log(response["hydra:member"])
        this.users=response["hydra:member"];
      },

      (error :any)=>{
        console.log(error);
        
      }
      )
    
  }
  
}
