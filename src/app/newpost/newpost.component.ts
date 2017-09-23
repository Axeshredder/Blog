import { Component, OnInit,ViewChild } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  @ViewChild('f') form:NgForm;
  constructor(private service:PostService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

     const title = this.form.value.title;
     const desc = this.form.value.desc;
     this.service.add(title,desc).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );;
     this.router.navigate(['/']);

  }

  method()
  {
     this.router.navigate(['/']);
  }

}
