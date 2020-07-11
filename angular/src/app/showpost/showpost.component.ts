import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {
  notic;
  post;
  id;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private messages: MessagesService) { }

  ngOnInit(): void {
    this.notic = this.messages.getNotice();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.apiService.getOnePost(this.id).subscribe((data) => {
      console.log(data);
      this.post = data;
    });
    setTimeout(() => {
      this.notic = '';
    }, 2000);
  }


}
