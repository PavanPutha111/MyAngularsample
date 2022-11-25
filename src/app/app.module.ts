import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import {  AuthGuard } from './guard/auth.guard';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AboutComponent } from './about/about.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistComponent } from './emplist/emplist.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
  {path:'loginpage',component:LoginpageComponent},
  { path: 'about', component: AboutComponent,canActivate:[AuthGuard]},
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [{ path: 'Edit/:name', component: EmpaddComponent }],canActivate:[AuthGuard]
  },
  { component: AboutComponent, path:"**" }
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AdminModule
  ],
  declarations: [
    AppComponent,
    ChildComponent,
    AboutComponent,
    EmployeeComponent,
    EmpaddComponent,
    EmplistComponent,
    LoginpageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
