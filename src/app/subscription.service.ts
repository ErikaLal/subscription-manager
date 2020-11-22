import { Injectable } from '@angular/core';
import { Subscription } from './subscription';
import { SUBSCRIPTIONS } from './mock-subscriptions';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor() { }

  getSubscriptions(): Observable<Subscription[]> {
    return of(SUBSCRIPTIONS);
  }

  getSubscription(name: string): Observable<Subscription> {
    return of(SUBSCRIPTIONS.find(subscription => subscription.name === name));
  }

  activeThisMonth(subscription) {
    var now = new Date();
    var active = subscription.lastpay <= now && subscription.nextpay >= now;
    return active;
  }
}
