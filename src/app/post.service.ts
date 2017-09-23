import {PostModel} from './posts.model';
import {Http,Headers,Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth/auth.service';

@Injectable()
export class PostService{
	
     constructor(private http:Http,private auth:AuthService){
        
     }
	 posts:PostModel[] = [];
   id:number;

	 add(title:string,desc:string)
	 {   this.id= this.posts.length;
       const post = new PostModel(this.auth.user,title,desc,0,this.id,[]);
        console.log(post);
	     this.posts.push(post);
       const token = this.auth.getToken();
	     return this.http.post('https://posts-bd3d4.firebaseio.com/data.json?auth='+token, post);
     
	 }

	 get()
	 {
	     this.http.get('https://posts-bd3d4.firebaseio.com/data.json').map(
         (response:Response) =>{
           const data = response.json();
           return data;
         }
         ).catch(
              (error:Response) => Observable.throw('An error occured'),
         ).subscribe(
        (data:any)=> { this.posts = [];
                       
         for(var dataItem in data)
        {  var k = data[dataItem];
             console.log(k.comments);
        this.posts.push(new PostModel(k.user, k.title,k.description,k.likes,k.id,k.isLikedBy));
          }
          }
         
        
     );

	 }

   update(data:any){
           
            var checked = false;
            var newone:Array<PostModel> = [];
            
            
            this.http.get('https://posts-bd3d4.firebaseio.com/data.json').map(
         (response:Response) =>{
           const info = response.json();
           return info;
         }
         ).catch(
              (error:Response) => Observable.throw('An error occured'),
         ).subscribe(
        (info:any)=> { 
                       
         for(var dataItem in info)
        {  var k = info[dataItem];
            if(k.id===data.id)
             k = data;
           
            newone.push(k);}
            
           
             
             const token = this.auth.getToken();
             this.http.put('https://posts-bd3d4.firebaseio.com/data.json?auth='+token,newone).subscribe(
                (response)=>console.log(response),
                (error) =>console.log(error)
             );
        
          });
         
       
        

   }

   
}