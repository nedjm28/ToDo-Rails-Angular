import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {
  notic;
  post;
  id;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.apiService.getOnePost(this.id).subscribe((data) => {
      console.log(data);
      this.post = data;
    });
  }

  public sendnotice(value: string): void{
    this.notic = value;
  }

}
