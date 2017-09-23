export class PostModel{
	
	user:string;
	title:string;
	description:string;
	likes:number;
	id:number;
	isLikedBy:string[];
	
	

	constructor(user:string,title:string,description:string,likes:number,id:number,isLikedBy:string[]){
	      this.user = user;
	      this.title = title;
	      this.description = description;
	      this.likes = likes;
	      this.id = id;
	      this.isLikedBy = isLikedBy;
	      
	      
	}
}