import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^.+@gmail.com$')]),
    name: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z]*'), Validators.required])),
    number: new FormControl('', [Validators.pattern('[6-9]\\d{9}'), Validators.required,]),
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
