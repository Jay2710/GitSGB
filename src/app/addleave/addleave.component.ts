import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-addleave',
  templateUrl: './addleave.component.html',
  styleUrls: ['./addleave.component.css']
})
export class AddleaveComponent implements OnInit {


  isSubmitted = false;
  LeaveForm: FormGroup = new FormGroup({});
  range: FormGroup = new FormGroup({});
  leaveType = [{ 'id': 1, 'name': 'One Day' }, { 'id': 2, 'name': 'Multiple Days' }, { 'id': 3, 'name': 'Half Day' }];
  apperson = [{ 'id': 11, 'name': 'Hardik Gondalia' }, { 'id': 12, 'name': 'Parth Bhuta' }];
  notperson = [{ 'id': 13, 'name': 'Dhvani Shah' }, { 'id': 14, 'name': 'Bhagyesh Borale' }];
  type: number = 1;




  constructor() {


  }

  ngOnInit(): void {

    this.LeaveForm = new FormGroup({
      empId: new FormControl("", [Validators.required]),
      leaveT: new FormControl("", [Validators.required]),
      date: new FormControl(""),
      reason: new FormControl(""),
      approvP: new FormControl(""),
      notifyMe: new FormControl("")
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.LeaveForm.valid) {
      console.log(this.LeaveForm);
    }
  }

  onChange(data: number) {
    this.type = data;
  }


}





