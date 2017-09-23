import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NewpostComponent } from './newpost/newpost.component';
import {PostService} from './post.service';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import {AuthService} from './auth/auth.service';


const routes:Routes = [{path:'newpost', component:NewpostComponent},{path:'login',component:LoginComponent},{path:'register',component:RegisterComponent}];

@NgModule({
  declarations: [
    AppComponent,
    NewpostComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
