import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NotFoundComponent } from './layout/not-found/not-found.component';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations:[ NotFoundComponent]
})
export class CoreModule {}
