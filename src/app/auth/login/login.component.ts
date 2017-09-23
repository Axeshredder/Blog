import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 @ViewChild('l') form:NgForm;
  constructor(private router:Router,private service:AuthService) { }

  ngOnInit() {
  }
 
 reg(){
     this.router.navigate(['./register']);
 }

 on(){
    const username = this.form.value.username;
    const password = this.form.value.password;
    this.service.signIn(username,password);

 }
}
