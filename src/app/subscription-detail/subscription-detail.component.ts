import { Component, OnInit, OnChanges } from '@angular/core';
import { Subscription } from '../subscription';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubscriptionService } from '../subscription.service';
@Component({
  selector: 'app-subscription-detail',
  templateUrl: './subscription-detail.component.html',
  styleUrls: ['./subscription-detail.component.scss']
})

export class SubscriptionDetailComponent implements OnInit {

  subscription: Subscription;
  editing: boolean;
  editText: string;
  imagesrc: string;

  lastpay: string;
  nextpay: string;
  notification: string;

  constructor(
    private route: ActivatedRoute,
    private subscriptionService: SubscriptionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSubscription();
    this.editing = false;
    this.editText = "Edit";
    this.imagesrc = "assets/" + this.subscription.name.toLowerCase() + ".png";
    this.lastpay = this.subscription.lastpay.toISOString().slice(0, 10);
    this.nextpay = this.subscription.nextpay.toISOString().slice(0, 10);
    this.notification = this.subscription.notification.toISOString().slice(0, 10);
  }

  getSubscription(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.subscriptionService.getSubscription(name)
      .subscribe(subscription => this.subscription = subscription);
  }

  toggleEdit(): void {
    this.editing = !this.editing;
    this.editing ? this.editText = "Save" : this.editText = "Edit";
  }

  goBack(): void {
    this.location.back();
  }
}
