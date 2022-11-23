import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  apiurl = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) {}

  getEmplist() {
    return this.http.get(this.apiurl);
  }
}
