import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
       loadChildren: () =>
        import('../../../modules/tabs/tabs.module').then(
        (m) => m.TabsPageModule
      ),
      },
      {
        path: '',
        redirectTo: 'tabs/qr',
        pathMatch: 'full'
      },
      {
        path: 'payment-methods',
       loadChildren: () =>
        import('../../../modules/tabs/tabs.module').then(
        (m) => m.TabsPageModule
      ),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
