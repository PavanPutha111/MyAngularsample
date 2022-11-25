import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiurl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient) {}

  isLogin() {
    return localStorage.getItem('username') != null;
  }

  getEmplist() {
    return this.http.get(this.apiurl);
  }
}
