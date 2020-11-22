import { Subscription } from './subscription';
import { SubscriptionTypes } from './subscription-types';

export const SUBSCRIPTIONS: Subscription[] = [
    { name: 'Netflix', type: SubscriptionTypes.ENTERTAINMENT, costpm: 9.99, nextpay: new Date("2020-12-30"), lastpay: new Date("2020-09-30"), notification: new Date("2020-12-27"), link: "https://www.netflix.com/ca/", months:23},
    { name: 'Spotify', type: SubscriptionTypes.ENTERTAINMENT, costpm: 4.99, nextpay: new Date("2020-11-28"), lastpay: new Date("2020-10-28"), notification: new Date("2020-11-25"), link: "https://www.spotify.com/ca-en/", months:32}, 
    { name: 'Photoshop', type: SubscriptionTypes.SOFTWARE, costpm: 27.99, nextpay: new Date("2021-04-15"), lastpay: new Date("2020-10-15"), notification: new Date("2021-04-01"), link: "https://www.adobe.com/ca/creativecloud/plans.html", months: 3},
    { name: 'Amazon Prime', type: SubscriptionTypes.SHOPPING, costpm: 7.99, nextpay: new Date("2021-01-07"), lastpay: new Date("2020-07-07"), notification: new Date("2021-01-01"), link: "https://www.amazon.ca/amazonprime/", months: 11},
    { name: 'Peloton', type: SubscriptionTypes.HEALTH, costpm: 20.00, nextpay: new Date("2020-12-04"), lastpay: new Date("2020-11-04"), notification: new Date("2020-12-01"), link: "https://www.onepeloton.ca/", months: 8},
    { name: 'PC Gamer', type: SubscriptionTypes.ENTERTAINMENT, costpm: 13.20, nextpay: new Date("2019-12-03"), lastpay: new Date("2018-12-04"), notification: null, link: "https://www.magazinesdirect.com/", months: 3}
]