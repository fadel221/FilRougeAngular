import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DeleteProfilComponent } from './delete-profil/delete-profil.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DetailProfilComponent } from './detail-profil/detail-profil.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'profils' ,children:
    [
      {
        path:'', component: ProfilComponent
      },
      {
        path:'delete/:id', component: DeleteProfilComponent
      },
      {
        path:'add', component: AddProfilComponent
      },
      {
        path:':id', component: DetailProfilComponent
      },
    ]
  }
  ,
  {
    path: 'users' ,children:
     [
      {
        path:'', component: UserComponent
      },
      {
        path:'delete/:id', component: DeleteUserComponent
      },
      {
        path:'add', component: AddUserComponent
      },
      {
        path:':id', component: DetailUserComponent
      },
    ]
  },
    
  
  {
    path: 'connexion' , component: ConnexionComponent
  },

  {
    path: '' , component: ConnexionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
