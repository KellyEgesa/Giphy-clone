import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { rejects } from 'assert';
import { Giphy } from '../giphy';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root',
})
export class GiphyRequestService {
  giphy: Giphy[] = [];
  request = 0;
  constructor(public http: HttpClient) {}

  giphyRequest(parameters: string, query: string, show: number): any {
    interface ApiResponse {
      data: any;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          environment.apiUrl +
            parameters +
            '?' +
            environment.apiKey +
            '&limit=8&rating=g' +
            `&offset=${this.request}` +
            '&q=' +
            query
        )
        .toPromise()
        .then(
          (response) => {
            const giphys = response.data;
            if (show) {
              this.giphy.splice(0, this.giphy.length);
            }
            for (const item of giphys) {
              const data = new Giphy(
                item.id,
                item.username,
                item.title,
                item.images.original.url
              );
              this.giphy.push(data);
            }
            this.request = this.request + 8;
            resolve();
          },
          (err) => {
            rejects(err);
          }
        );
    });
    return promise;
  }
}
