import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { SidebarComponent } from '../Common/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddleaveComponent } from '../addleave/addleave.component';
import { HttpClientModule } from '@angular/common/http';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavbarComponent } from '../Common/navbar/navbar.component';






@NgModule({
  declarations: [SidebarComponent, HomeComponent, DashboardComponent, AddleaveComponent, MasterComponent, NavbarComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    DropdownModule,
    RadioButtonModule,
    ToggleButtonModule,
    InputTextareaModule,
    MultiSelectModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    InputSwitchModule,
    ChartModule,
    CollapseModule

  ]
})
export class MasterModule { }
