import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginpageComponent } from '../loginpage/loginpage.component';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiurl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient, private login: LoginpageComponent) {}

  isLogin() {
    return localStorage.getItem('userdata')!=null;
  }

  getEmplist() {
    return this.http.get(this.apiurl);
  }
}
