import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { DisplayOutputComponent } from './display-output/display-output.component';

@NgModule( {
  declarations: [
    HeaderComponent,
    HomeViewComponent,
    ButtonComponent,
    DisplayOutputComponent
  ],
  exports: [
    HeaderComponent,
    HomeViewComponent,
    ButtonComponent,
    DisplayOutputComponent
  ],
  imports: [
    CommonModule
  ]
} )
export class ComponentsModule { }
