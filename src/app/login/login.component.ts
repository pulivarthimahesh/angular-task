import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }
  profileForm = new FormGroup({
    username: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z]*'), Validators.required])),
    password: new FormControl('', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z]*'), Validators.required])),
  });

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/list'], { queryParams: { sortType: 'hightolow' } })
  }

}
