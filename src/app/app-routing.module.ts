import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'profils' , component: ProfilComponent
  }
  ,
  {
    path: 'users' , component: UserComponent
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
