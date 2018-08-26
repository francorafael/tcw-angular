import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../../../../components/navbar/navbar.module';
import { PostAddPageComponent } from './post-add-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { PostServiceModule } from '../../../services/post/post-service.module';

const routes : Routes = [
  {path:'', component:PostAddPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    PostServiceModule,
    MatSnackBarModule,
    RouterModule
  ],
  declarations: [PostAddPageComponent]
})
export class PostAddPageModule { }
