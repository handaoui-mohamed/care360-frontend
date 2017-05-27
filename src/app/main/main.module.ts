import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './main.routes';

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  providers: []
})
export class MainModule { }
