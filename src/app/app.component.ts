import { Component,OnInit,DoCheck,AfterContentInit,ViewChild} from '@angular/core';
import {PostModel} from './posts.model';
import {PostService} from './post.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  liked = false;
  
  constructor(private service:PostService, private router:Router,private auth:AuthService){
      this.service.get();
  }

  ngOnInit()
  { 
    this.posts = this.service.posts;
    firebase.initializeApp({
      apiKey: "AIzaSyDQt1GlgJ9bzHIWBTMKGH1dbm7uHH-fgj8",
    authDomain: "posts-bd3d4.firebaseapp.com",

    });

   
  }

  

  


  posts:PostModel[];
  title = 'app works!';
  @ViewChild('f') form:NgForm;
  
  onLike(data:PostModel)
  {
      data.likes++;
      data.isLikedBy.push(this.auth.user);
      this.liked = true;
      console.log(data);
      this.service.update(data);
  }

  new()
  {  
     this.router.navigate(['./newpost']);

  }

  isLiked(data:PostModel){
     for(var value of data.isLikedBy)
       {
             if(value === this.auth.user)
             { console.log(value);
             return true;
               }

       }
  }

  
}
