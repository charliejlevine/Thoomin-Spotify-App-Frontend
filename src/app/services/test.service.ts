import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = 'https://us-central1-thoomin-spotify-app.cloudfunctions.net';
  constructor(private http: HttpClient) {}

  getHelloWorld() {
    return this.http.get(`${this.url}/api/helloworld`);
  }
}
