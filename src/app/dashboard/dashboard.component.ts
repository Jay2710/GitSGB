import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }
  today: number = Date.now();
  totalL: number = 18;
  takenL: number = 12;
  pendingLR: number = 2;
  totalLR: number = 0;

  ngOnInit(): void {
    this.totalLR = (this.totalL - (this.takenL + this.pendingLR));
    // console.log(this.totalL);
    // console.log(this.takenL);
    // console.log(this.pendingLR);
    // console.log(this.totalLR);
    console.log(localStorage.getItem("auth"))

  }

}
