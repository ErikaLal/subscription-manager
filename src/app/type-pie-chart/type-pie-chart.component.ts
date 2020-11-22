import { Component, OnInit, OnChanges } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Subscription } from '../subscription';
import { SubscriptionService } from '../subscription.service'
@Component({
  selector: 'app-type-pie-chart',
  templateUrl: './type-pie-chart.component.html',
  styleUrls: ['./type-pie-chart.component.scss']
})
export class TypePieChartComponent implements OnInit, OnChanges {
  subscriptions: Subscription[];

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return value;
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
      backgroundColor: ['rgb(255, 165, 0)', 'rgb(147, 112, 219)', 'rgb(219, 112, 147)', 'rgb(95, 158, 160)', 'rgb(218, 165, 32)']
    },
  ];

  constructor(private subscriptionService: SubscriptionService) {
  }

  ngOnInit(): void {
    this.getSubscriptions();
    this.pieChartLabels = [];
    this.pieChartData = []
    for (let sub of this.subscriptions) {
      if (this.pieChartLabels.includes(sub.type)) {
        var index = this.pieChartLabels.indexOf(sub.type);
        this.pieChartData[index]++;
      } else {
        this.pieChartLabels.push(sub.type);
        this.pieChartData.push(1)  
      }
    }  
  }

  ngOnChanges(): void {
    this.pieChartLabels = [];
    this.pieChartData = []
    for (let sub of this.subscriptions) {
      if (!this.pieChartLabels.includes(sub.type)) {
        this.pieChartLabels.push(sub.type);
        this.pieChartData.push(0);
      } else {
        var index = this.pieChartLabels.indexOf(sub.type);
        this.pieChartData[index] += 1;
      }
    }  

  }

  getSubscriptions(): void {
    this.subscriptionService.getSubscriptions()
      .subscribe(subscriptions => this.subscriptions = subscriptions);
    this.subscriptions = this.subscriptions.filter(sub => this.subscriptionService.activeThisMonth(sub));
  }
}
