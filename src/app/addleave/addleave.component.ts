import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';




@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {
  checked: boolean = false;
  minDate = new Date();
  isSubmitted = false;
  LeaveForm: FormGroup = new FormGroup({});
  range: FormGroup = new FormGroup({});
  leaveT = [{ 'id': 1, 'name': 'One Day' }, { 'id': 2, 'name': 'Multiple Days' }];
  apperson = [{ 'id': 11, 'name': 'Hardik Gondalia' }, { 'id': 12, 'name': 'A' }, { 'id': 13, 'name': 'B' }];
  notperson = [{ 'id': 14, 'name': 'Parth Bhuta' }, { 'id': 15, 'name': 'Dhvani Shah' }, { 'id': 16, 'name': 'Bhagyesh Borale' }];
  type: number = 1;





  constructor(private primengconfig: PrimeNGConfig) {
  }

  ngOnInit(): void {
    this.primengconfig.ripple = true;
    this.LeaveForm = new FormGroup({
      leaveType: new FormControl("", [Validators.required]),
      halfDay: new FormControl(""),
      date: new FormControl("", [Validators.required]),
      reason: new FormControl(""),
      approvP: new FormControl(""),
      notifyMe: new FormControl("")
    });
    // console.log(this.type);
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.LeaveForm.valid) {
      console.log(this.LeaveForm);
    }
    // this.LeaveForm.reset();
  }

  onChange(Value: any) {
    this.type = Value;
  }


}





