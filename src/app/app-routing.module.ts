import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/authentication/Pages/login/login.component'
import { ForgotPasswordComponent } from './authentication/Pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from './authentication/Pages/not-found/not-found.component';
import { AuthGuard } from './authentication/auth.guard';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from 'src/app/authentication/common/auth.guard';
// import { HomeComponent } from './home/home.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { AddleaveComponent } from './addleave/addleave.component';
// import { MasterComponent } from './shared/master/master.component';

const approutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./shared/master.module').then(m => m.MasterModule) },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
