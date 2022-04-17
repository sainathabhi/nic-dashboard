import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardreportComponent } from './reports/dashboardreport/dashboardreport.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  // canActivate: [PublicauthGuard]
},
{
  path: 'dashboard',
  component: DashboardreportComponent,
  // canActivate: [PublicauthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
