import { Component, OnInit, OnChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service'
@Component({
  selector: 'app-cost-pie-chart',
  templateUrl: './cost-pie-chart.component.html',
  styleUrls: ['./cost-pie-chart.component.scss']
})
export class CostPieChartComponent implements OnInit {

  subscriptions: Subscription[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = '$' + value.toFixed(2);
          return label;
        },
        color: 'white'
      },
    }
  };

  public pieChartLabels: Label[];
  public pieChartData: number[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColours = [
    {
      backgroundColor: ['rgb(255, 165, 0)', 'rgb(255, 165, 0)', 'rgb(147, 112, 219)', 'rgb(219, 112, 147)', 'rgb(95, 158, 160)']
    },
  ];

  constructor(private subscriptionService: SubscriptionService) {
  }

  ngOnInit(): void {
    this.getSubscriptions();
    this.pieChartLabels = [];
    this.pieChartData = []
    for (let sub of this.subscriptions) {
      this.pieChartLabels.push(sub.name);
      this.pieChartData.push(sub.costpm);
    }  
  }

  ngOnChanges(): void {
    this.pieChartLabels = [];
    this.pieChartData = []
    for (let sub of this.subscriptions) {
      this.pieChartLabels.push(sub.name);
      this.pieChartData.push(sub.costpm);
    }   
  }

  getSubscriptions(): void {
    this.subscriptionService.getSubscriptions()
      .subscribe(subscriptions => this.subscriptions = subscriptions);
    this.subscriptions = this.subscriptions.filter(sub => this.subscriptionService.activeThisMonth(sub));
  }
}
