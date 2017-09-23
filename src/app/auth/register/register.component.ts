import { Component, OnInit ,ViewChild} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @ViewChild('r') form:NgForm;
  isInvalid= false;
  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }

  submit()
  {   console.log(this.form);
     const username = this.form.value.username;
     const password = this.form.value.password;
     if(password.length<6)
     {
        this.isInvalid= true;
        return;
     }
     this.isInvalid= false;
     this.service.signUp(username,password);
     
  }


}
