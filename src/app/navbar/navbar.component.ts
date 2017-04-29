import { Component, OnInit } from '@angular/core';
import { TwitterserviceService } from '../twitterservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(private _twitterservice: TwitterserviceService) { }

  startTwitterStreaming(hashtag)
  {
    this._twitterservice.startTwitterCrawl(hashtag);
  }

  stopTwitter()
  {
    this._twitterservice.stopTwitterService();
  }
}
