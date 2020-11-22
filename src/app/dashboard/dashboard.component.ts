import { Component, OnInit } from '@angular/core';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions(): void {
    this.subscriptionService.getSubscriptions()
      .subscribe(subscriptions => this.subscriptions = subscriptions);
  }

  getTotal() {
    var total = 0;
    for (let sub of this.subscriptions) {
      total += sub.costpm;
    }
    return total.toPrecision(4);
  }
}
