import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WheatService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get<any[]>('https://your-backend-url.onrender.com/api/wheat');
  }
}
