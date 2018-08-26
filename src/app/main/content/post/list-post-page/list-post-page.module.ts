import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../../../../components/navbar/navbar.module';
import { Routes, RouterModule } from '@angular/router';
import { ListPostPageComponent } from './list-post-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostServiceModule } from '../../../services/post/post-service.module';
import { MatTableModule, MatMenuModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule, MatSnackBarModule, MatButtonModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: ListPostPageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
    NavbarModule,
    PostServiceModule
  ],
  declarations: [ListPostPageComponent],

})
export class ListPostPageModule { }
