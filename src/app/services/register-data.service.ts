import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RegisterDataService {

  hostserver = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  registerData(data) {
    return this.http.post(this.hostserver + '/register', JSON.stringify(data), {headers: this.headers})
      .map(res => res);

  }

  getallData() {
    return this.http.get(this.hostserver + '/getalldata', {headers: this.headers})
      .map(res => res);
  }
  searchData(strparam) {
    return this.http.get(this.hostserver + '/search',  {headers: this.headers, params: strparam})
      .map(res => res);
  }
}
