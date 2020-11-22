import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypePieChartComponent } from './type-pie-chart/type-pie-chart.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CostPieChartComponent } from './cost-pie-chart/cost-pie-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    SubscriptionDetailComponent,
    DashboardComponent,
    TypePieChartComponent,
    CostPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
