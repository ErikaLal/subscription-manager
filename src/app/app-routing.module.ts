import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionDetailComponent } from './subscription-detail/subscription-detail.component'
const routes: Routes = [
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:name', component: SubscriptionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
