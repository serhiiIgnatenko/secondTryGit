import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContaktComponent } from './components/contakt/contakt.component';
import { JobComponent } from './components/job/job.component';

const myRoutes: Routes = [
  {path: '', component: CarComponent},
  {path: 'contakt', component: ContaktComponent},  
  {path: 'job', component: JobComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContaktComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
