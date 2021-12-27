import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/Pages/login/login.component';
import { NotFoundComponent } from './authentication/Pages/not-found/not-found.component';
import { ForgotPasswordComponent } from './authentication/Pages/forgot-password/forgot-password.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    RadioButtonModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
