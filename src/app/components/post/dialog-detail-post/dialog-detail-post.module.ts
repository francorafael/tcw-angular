import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatIconModule, MatToolbarModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogDetailPostComponent } from './dialog-detail-post.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  declarations: [DialogDetailPostComponent],
  entryComponents:[DialogDetailPostComponent]
})
export class DialogDetailPostModule { }
