import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService{
	
	user:string;
	exists=false;
    constructor(private router:Router){

    }

	token:string;
	signUp(email:string,password:string){
	    this.exists = false;
       
       firebase.auth().createUserWithEmailAndPassword(email,password).then(response => alert('you have been registered...please log in now')).catch(
            error=> alert('an error occured...a user by this name may already exist or the password may not meet minimum length of 6 characters')
       );
       
	}

	signIn(email:string,password:string)
	{   this.router.navigate(['/']);
	     this.user = email;
	   firebase.auth().signInWithEmailAndPassword(email,password).then(
           response=> {
             firebase.auth().currentUser.getToken().then(
                (token:string)=> this.token = token
             )
           }
	   ).catch(
	   error=>alert('you could not be logged in..please check username and password')
	   );
	}

	getToken()
	{
        firebase.auth().currentUser.getToken().then(
                (token:string)=> this.token = token
             );
         return this.token; 
	}

	isAuth()
	{
	   return this.token!=null;
	}

	logOut()
	{
	    firebase.auth().signOut();
	    this.token = null;
	    this.router.navigate(['/']);
	}
}