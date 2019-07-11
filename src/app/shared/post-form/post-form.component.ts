import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { Feed } from '../../models/feed.model';

@Component({
  selector: 'geekwise-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  public postImgSrc: string;
  public description: string;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    
  }

  public postToFeed() {
    this.feedService.postToFeed(new Feed(this.postImgSrc, this.description));
  }

}
