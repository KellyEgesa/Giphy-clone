import { Component, OnInit } from '@angular/core';
import { GiphyRequestService } from '../giphy-http/giphy-request.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Giphy } from '../giphy';

@Component({
  selector: 'app-show-giphy',
  templateUrl: './show-giphy.component.html',
  styleUrls: ['./show-giphy.component.css'],
})
export class ShowGiphyComponent implements OnInit {
  giphy;
  search;
  load = 'trending';
  loadMore() {
    this.giphyService.giphyRequest(this.load, this.search, 0);
    this.giphy = this.giphyService.giphy;
  }

  searchNewParam(quote) {
    this.load = 'search';
    this.search = quote.parameter;
    this.giphyService.giphyRequest(this.load, this.search, 1);
    this.giphy = this.giphyService.giphy;
  }

  constructor(private giphyService: GiphyRequestService) {}

  ngOnInit(): void {
    this.giphyService.giphyRequest('trending', '', 0);
    this.giphy = this.giphyService.giphy;
    console.log(this.giphy);
  }
}
