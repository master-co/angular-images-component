import { NgModule } from '@angular/core';
import { SortablejsModule } from 'ngx-sortablejs';
import { ImagesComponent } from './images.component';
import { FileModule } from '@master/file-center.angular';

@NgModule({
  declarations: [ImagesComponent],
  imports: [
      SortablejsModule,
      FileModule
  ],
  exports: [ImagesComponent]
})
export class AngularImagesComponentModule { }
