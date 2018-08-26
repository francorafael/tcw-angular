import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { TwcApiServiceModule } from '../../../core/services/tcw-api/twc-api.module';

@NgModule({
  imports: [
    CommonModule,
    TwcApiServiceModule
  ],
  providers: [
    PostService
  ]
})
export class PostServiceModule { }
