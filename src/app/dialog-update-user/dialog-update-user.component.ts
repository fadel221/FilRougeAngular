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
    @Inject(MAT_DIALOG_DATA) public data: any ) 
  { 
    
  }

  avatar:any;
  url='data:image/jpg;base64,'+ this.data.avatar
  UpdateUser(data:any)
  {
   const formdata=new FormData();
    formdata.append('username',data.username)
    formdata.append('prenom',data.prenom)
    formdata.append('nom',data.nom)
    formdata.append('email',data.email)
    formdata.append('profil_id',"1")
    formdata.append('avatar', this.avatar, this.avatar.name)
    formdata.append("_method","PUT")
    if (confirm('Etes vous sure de vouloir appliquer ces modifications'))
    {
      
      this.userservice.updateUser(formdata,this.data.id).subscribe(
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

  selectedFile(files: FileList,event:any)
  {
    this.avatar=files.item(0);
    let reader=new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload =(event:any) =>
    {
      this.url=event.target.result
    }
    
  }

  

  ngOnInit(): void {
  }

}
