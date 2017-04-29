import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyserviceService } from './myservice.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwitterserviceService } from './twitterservice.service';
import { DashboardService } from './dashservice.service';
import { DashboardbarService } from './dashbarservice.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardbarComponent } from './dashboardbar/dashboardbar.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [MyserviceService, TwitterserviceService,DashboardService,DashboardbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
