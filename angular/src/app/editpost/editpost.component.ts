import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  showMsgS = false;
  showMsgE = false;
  title = '';
  category = '';
  errorpost: Array <any> = [];
  notic;
  post = {
    title : '',
    category : ''
  };
  id;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.apiService.getOnePost(this.id).subscribe((data) => {
      console.log(data);
      this.title = data.title;
      this.category = data.category;
      this.post = data;
    });
  }

  updatetPost(): void{
    this.showMsgE = false;
    this.errorpost = [];
    if (this.title === '' || this.category === ''){
      console.log('hey');
      if (this.title === '' ){ this.errorpost.push('Title filed cant be blank '); }
      if ( this.category === '' ){ this.errorpost.push('Category filed cant be blank '); }
      this.showMsgE = true;
    }else{
      this.post.title = this.title;
      this.post.category = this.category;
      this.apiService.updatePost(this.post, this.id).subscribe(
        {
          next: data => {
            this.showMsgS = true;
            this.notic = 'Your Update post -- ' + data.title + '-- Successfly ';
          },
          error: error => {
            console.log(error);
          }
        }
      );
    }



  }
}
