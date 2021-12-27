import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddleaveComponent } from '../addleave/addleave.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MasterComponent } from './master/master.component';
import { AuthGuard } from '../authentication/auth.guard';

const approutes: Routes = [
  {
    path: '', component: MasterComponent, canActivate: [AuthGuard], children: [
      { path: '', component: DashboardComponent },
      { path: 'addleave', component: AddleaveComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(approutes)
  ]
})
export class MasterRoutingModule { }
