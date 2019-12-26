import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './components/views/home-view/home-view.component';

const routes: Routes = [
  { path: 'home', component: HomeViewComponent },
  { path: '**', component: HomeViewComponent },
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
