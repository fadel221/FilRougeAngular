import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogArchiveUserComponent } from '../dialog-archive-user/dialog-archive-user.component';
import { DialogDetailUserComponent } from '../dialog-detail-user/dialog-detail-user.component';
import { DialogRegisterUserComponent} from '../dialog-register-user-component/dialog-register-user-component';
import { DialogUpdateUserComponent } from '../dialog-update-user/dialog-update-user.component';
import { UserService } from '../Services/Userservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 dataSource:any;
displayedColumns=['Id','avatar','username','prenom','nom','email','action'];
constructor (private userservice: UserService,public dialog:MatDialog)
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

  DialogUserDetail(row:any): void {
    let dialogRef = this.dialog.open(DialogDetailUserComponent, {
      width: '300px',
      height:'300px',
      backdropClass:'backgroundDialog',
      data: row
      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      row = result;
      
    });
  }

  DialogUserUpdate(row:any): void {
    let dialogRef = this.dialog.open(DialogUpdateUserComponent, {
      width: '500px',
      height:'600px',
      backdropClass:'backgroundDialog',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      row = result;
    });
  }

  DialogUserRegister(): void {
    let dialogRef = this.dialog.open(DialogRegisterUserComponent, {
      width: '500px',
      height:'600px',
      backdropClass:'backgroundDialog',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  DialogUserArchive(row:any): void {
    let dialogRef = this.dialog.open(DialogArchiveUserComponent, {
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

  

  }

    
      

