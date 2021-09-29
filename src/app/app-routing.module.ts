import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';

const routes: Routes = [
  {path:"",redirectTo:"employees",pathMatch:"full"},
{path:"employees",component:EmployeeListComponent},
{path:"add-emp",component:CreateEmployeeComponent},
{path:"emp-details/:id",component:EmployeeDetailsComponent},
{path:"update-emp/:id",component:UpdateEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
