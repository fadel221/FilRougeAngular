import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/Userservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 dataSource:any;
displayedColumns=['avatar','username','prenom','nom','email','action'];
constructor (private userservice: UserService)
{

}

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      
      (response: any) => {
        console.log(response["hydra:member"])
        this.dataSource=response["hydra:member"];
      },

      (error :any)=>{
        console.log(error);
      }
      )
    
  }

  }

    
      

