import { Component, OnInit } from '@angular/core';
import { Subscription } from '../subscription'
import { SubscriptionService } from '../subscription.service';
@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  subscriptions: Subscription[];
  selectedSubscription: Subscription;

  constructor(private subscriptionService: SubscriptionService) { }

  ngOnInit(): void {
    this.getSubscriptions();
  }

  getSubscriptions(): void {
    this.subscriptionService.getSubscriptions()
      .subscribe(subscriptions => this.subscriptions = subscriptions);
  }

  calcToDate(subscription) {
    return (subscription.costpm * subscription.months).toFixed(2);
  }
}
