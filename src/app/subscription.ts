import { SubscriptionTypes } from './subscription-types';

export interface Subscription {
    name: string;
    type: SubscriptionTypes;
    costpm: number;
    lastpay: Date;
    nextpay: Date;
    notification: Date;
    link: string;
    months: number;
}