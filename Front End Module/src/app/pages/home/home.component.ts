import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  featuredPostsArray: Array<object> |any;
  latestPostsArray: Array<object> | any;

  constructor( private postServices: PostsService) {

   
  }
  ngOnInit(): void {
    this.postServices.loadFeatured().subscribe ( val=>{
      this.featuredPostsArray = val;
      
    });

    this.postServices.loadLatest().subscribe(val=> {
        this.latestPostsArray = val;
    })
  }
  
  }