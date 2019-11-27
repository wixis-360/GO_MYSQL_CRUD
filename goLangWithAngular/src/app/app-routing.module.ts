import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './view/customer/customer.component';


const routes: Routes = [
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'customer', component: CustomerComponent},
  { path: '', pathMatch: 'full', redirectTo: '/customer' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
