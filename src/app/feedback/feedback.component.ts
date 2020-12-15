import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required,]),
    number: new FormControl('', [Validators.required,]),
    feedback: new FormControl('', [Validators.required,]),
  });
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.profileForm.value);
    localStorage.setItem('data', JSON.stringify(this.profileForm.value))
    console.log(localStorage.getItem(this.profileForm.value));

  }

}
