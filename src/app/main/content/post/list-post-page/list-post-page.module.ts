import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../../../../components/navbar/navbar.module';
import { Routes, RouterModule } from '@angular/router';
import { ListPostPageComponent } from './list-post-page.component';

const routes: Routes = [
  { path: '', component: ListPostPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
  ],
  declarations: [ListPostPageComponent]
})
export class ListPostPageModule { }
