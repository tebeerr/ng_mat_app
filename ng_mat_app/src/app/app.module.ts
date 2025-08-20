import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard-module/dashboard/dashboard.component';
import { ProfileContainerComponent } from './profile-module/profile-container/profile-container.component';
import { ProfileComponent } from './profile-module/profile/profile.component';
import { DashboardContainerComponent } from './dashboard-module/dashboard-container/dashboard-container.component';
import { TableListContainerComponent } from './table-list-module/table-list-container/table-list-container.component';
import { TableListComponent } from './table-list-module/table-list/table-list.component';
import { SideNavbarComponent } from './side-navbar-module/side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileContainerComponent,
    ProfileComponent,
    TableListContainerComponent,
    TableListComponent,
    SideNavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardContainerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
