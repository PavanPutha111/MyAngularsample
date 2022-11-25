import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const router: Routes = [
  {component:AdminComponent, path:"admin",
  children:[{ component: ListComponent, path: 'list' },
  { component: LoginComponent, path: 'login' }]}
];

@NgModule({
  declarations: [ListComponent, LoginComponent, AdminComponent],
  imports: [RouterModule.forChild(router), CommonModule, AdminRoutingModule],
})
export class AdminModule {}
