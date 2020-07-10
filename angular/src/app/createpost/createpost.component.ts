import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})



export class CreatepostComponent implements OnInit {
  showMsgS = false;
  showMsgE = false;
  notic = '';
  title = '';
  category = '';
  post = {
    title: '' ,
    category: '',
  };
  errorpost: Array <any> = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  insertPost(): void{
    this.showMsgE = false;
    this.errorpost = [];
    this.post.title = this.title;
    this.post.category = this.category;
    this.apiService.createPost(this.post).subscribe(
      {
        next: data => {
          this.showMsgS = true;
          this.notic = 'Your adding post -- ' + data.title + '-- Successfly ';
          this.title = '';
          this.category = '';
        },
        error: error => {
          this.showMsgE = true;
          if (error.error.title) { this.errorpost.push('Title filed ' + error.error.title[0]);  }
          if (error.error.category) { this.errorpost.push('Category filed ' + error.error.category[0]); }
        }

      }
    );

  }

}

