import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from '../../../../components/navbar/navbar.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSnackBarModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { PostServiceModule } from '../../../services/post/post-service.module';
import { PostEdiPageComponent } from './post-edi-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes : Routes = [
  {path:'', component:PostEdiPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    PostServiceModule,
    MatSnackBarModule,
    RouterModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [PostEdiPageComponent]
})
export class PostEdiPageModule { }
