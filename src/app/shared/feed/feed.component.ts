import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'geekwise-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public feed = [];

  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.feedService.feeds.subscribe(list => {
      this.feed = list;
    })
  }

}
