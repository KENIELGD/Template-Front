import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() title = '';

  constructor(private menuController: MenuController) { }

  showSideMenu(){
    this.menuController.toggle();
  }
}
