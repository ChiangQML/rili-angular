import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiliProxyService {
  hostUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  events:any=[]

  post_event(eventData: any) {
    return this.httpClient.post<any>(`${this.hostUrl}/events`, eventData);
  }

  getEvents() {
    return this.httpClient.get<any[]>(`${this.hostUrl}/all-events`);
  }
}
