import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RequestInterceptorProvider } from './Interceptors/TokenAddInterceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { DetailProfilComponent } from './detail-profil/detail-profil.component';
import { DeleteProfilComponent } from './delete-profil/delete-profil.component';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogUpdateProfilComponent } from './dialog-update-profil/dialog-update-profil.component';
import { DialogArchiveProfilComponent } from './dialog-archive-profil/dialog-archive-profil.component';
import { DialogArchiveUserComponent } from './dialog-archive-user/dialog-archive-user.component';
import { DialogDetailUserComponent } from './dialog-detail-user/dialog-detail-user.component';
import { DialogUpdateUserComponent } from './dialog-update-user/dialog-update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    ProfilComponent,
    UserComponent,
    HeaderComponent,
    DetailProfilComponent,
    DeleteProfilComponent,
    AddProfilComponent,
    DetailUserComponent,
    AddUserComponent,
    DeleteUserComponent,
    DialogComponent,
    DialogUpdateProfilComponent,
    DialogArchiveProfilComponent,
    DialogArchiveUserComponent,
    DialogDetailUserComponent,
    DialogUpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  entryComponents:[
    DialogComponent,
    DialogArchiveProfilComponent,
    DialogUpdateProfilComponent,
    DialogUpdateUserComponent,
    DialogArchiveUserComponent,
    DialogDetailUserComponent
  ],
  providers: [RequestInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
