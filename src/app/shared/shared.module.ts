import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

const components = [HeaderComponent, SideMenuComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, IonicModule],
  exports: components,
})
export class SharedModule {}
