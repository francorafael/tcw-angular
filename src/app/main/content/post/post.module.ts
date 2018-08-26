import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren:'app/main/content/post/list-post-page/list-post-page.module#ListPostPageModule' },
  { path: 'add', loadChildren:'app/main/content/post/post-add-page/post-add-page.module#PostAddPageModule' },
  { path: 'edi/:id', loadChildren:'app/main/content/post/post-edi-page/post-edi-page.module#PostEdiPageModule' },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PostModule { }
