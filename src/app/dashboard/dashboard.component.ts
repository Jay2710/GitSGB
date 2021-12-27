import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  chartOptions: any;


  constructor() { }
  today: number = Date.now();
  totalL: number = 18;
  takenL: number = 12;
  pendingLR: number = 2;
  totalLR: number = 0;

  ngOnInit(): void {
    this.totalLR = (this.totalL - (this.takenL + this.pendingLR));

    this.data = {
      labels: ['Total Leaves', 'Leaves Taken', 'Pending Leave', 'Total Leave Remained'],
      datasets: [
        {
          data: [this.totalL, this.takenL, this.pendingLR, this.totalLR],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00FF00"]
        }
      ]
    };

    // console.log(this.totalL);
    // console.log(this.takenL);
    // console.log(this.pendingLR);
    // console.log(this.totalLR);

  }



}
