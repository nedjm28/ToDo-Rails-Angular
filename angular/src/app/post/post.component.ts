import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts;
  loading = true;
  nothing = false;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      if (!data.empty){
        this.posts = data;
        this.loading = false;
      }else{
        this.loading = false;
        this.nothing = true;
      }
    });
  }
  fetchdata(): void{
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  deletePost(id: number): void{

      this.apiService.destroyPost(id).subscribe( {
        next: data => {
            console.log(data);
            alert('Your Deleting successfly');
            this.fetchdata();
          },
          error: error => {
            alert('Your Deleting successfly');
            console.log(error);
            this.fetchdata();
          },
        });
    }

}
