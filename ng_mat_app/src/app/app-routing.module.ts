import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardContainerComponent } from './dashboard-module/dashboard-container/dashboard-container.component';
import { ProfileContainerComponent } from './profile-module/profile-container/profile-container.component';
import { TableListContainerComponent } from './table-list-module/table-list-container/table-list-container.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardContainerComponent },
      { path: 'profile', component: ProfileContainerComponent },
      { path: 'table-list', component: TableListContainerComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}


