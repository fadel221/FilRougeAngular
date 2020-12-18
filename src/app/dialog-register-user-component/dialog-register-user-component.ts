import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogUpdateProfilComponent } from '../dialog-update-profil/dialog-update-profil.component';
import { UserService } from '../Services/Userservice';

@Component({
  selector: 'app-dialog-register-user-component',
  templateUrl: './dialog-register-user-component.component.html',
  styleUrls: ['./dialog-register-user-component.component.css']
})
export class DialogRegisterUserComponent implements OnInit {
  
private  avatar: any;

  constructor(private userservice: UserService,public dialog:MatDialog) 
    { 

    }

  ngOnInit(): void {
  }

  RegisterUser(data:any)
  {
    const  formdata=new FormData();
    formdata.append('username',data.username)
    formdata.append('prenom',data.prenom)
    formdata.append('nom',data.nom)
    formdata.append('email',data.email)
    formdata.append('profil_id',"1");
    formdata.append('avatar', this.avatar, this.avatar.name);
    formdata.append('password',data.password)
    alert('ok')
    console.log(formdata);
    
   this.userservice.RegisterUser(formdata).subscribe(
      (response)=>
      {
        console.log(response)
      },
      (error)=>
      {
        console.log(error)
      }
    )
  }

  selectedFile(files: FileList)
  {
    this.avatar =files.item(0);
  }
  

}
