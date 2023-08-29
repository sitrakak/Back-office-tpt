import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent} , 
  {
    path:'admin',component:AdminComponent ,
    children: [
    ]

  } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,AdminComponent];
