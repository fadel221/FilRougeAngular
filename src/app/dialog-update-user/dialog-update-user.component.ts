import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../Services/Userservice';

@Component({
  selector: 'app-dialog-update-user',
  templateUrl: './dialog-update-user.component.html',
  styleUrls: ['./dialog-update-user.component.css']
})
export class DialogUpdateUserComponent implements OnInit {

  constructor(private userservice: UserService ,public dialog:MatDialog,public dialogRef: MatDialogRef<DialogUpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public Data: any ) 
  { 
    
  }

  avatar:any;
  data=this.Data;

  UpdateUser(data:any)
  {
   const  formdata=new FormData();
    data.avatar=this.avatar
    if (confirm('Etes vous sure de vouloir appliquer ces modifications'))
    {
      formdata.append('username',data.username)
      formdata.append('prenom',data.prenom)
      formdata.append('nom',data.nom)
      formdata.append('email',data.email)
      formdata.append('profil_id',"1");
      formdata.append('avatar', this.avatar, this.avatar.name);
      this.userservice.updateUser(formdata).subscribe(
        (response:any)=>
        {
          console.log(response)
        },
        (error)=>
        {
          console.log(error)
        }
      )
    }
    
  }

  selectedFile(files: FileList)
  {
    this.avatar=files.item(0);
  }

  

  ngOnInit(): void {
  }

}
