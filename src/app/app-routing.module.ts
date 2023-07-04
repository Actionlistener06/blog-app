import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';

const approutes: Routes = [
  {path:'users',component:UserListTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
