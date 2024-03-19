import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequesterComponent } from './components/requester/requester.component';
import { HomeComponent } from './components/home/home.component';
import { WarehousemanComponent } from './components/warehouseman/warehouseman.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'requester', component: RequesterComponent },
  { path: 'warehouseman', component: WarehousemanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
