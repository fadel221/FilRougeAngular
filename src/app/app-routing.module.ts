import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    
      {
        path:'profils', component: ProfilComponent, canActivate:[AuthGuard]
      },

  
    {
      path: 'users' , component: UserComponent, canActivate:[AuthGuard]
     
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
