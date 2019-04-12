import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CarNewComponent } from './components/car-new/car-new.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const appRoutes: Routes = [
  { path      : 'login', 
    component : LoginComponent },

  { path      : 'register', 
    component : RegisterComponent },

  { path      : 'home',
    component : HomeComponent},

  {path       : 'logout/:sure',
    component : LoginComponent},

  { path      : 'carnew', 
    component : CarNewComponent },

  { path      : 'caredit/:id', 
    component : CarEditComponent },
  
  { path      : 'cardetail',
    component : CarDetailComponent},

  { path      : 'cardetail/:id', 
    component : CarDetailComponent },

  { path      : '', 
    component : HomeComponent},

  { path      : '**', 
    component : HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CarNewComponent,
    CarEditComponent,
    CarDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
