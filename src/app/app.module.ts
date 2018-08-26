
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

const routes: Routes = [
  { path: '', redirectTo: '/posts/list', pathMatch: 'full' },
  { path: 'posts', loadChildren:'app/main/content/post/post.module#PostModule' },
];

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule      
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
