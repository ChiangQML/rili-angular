import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiliProxyService {
  // where to get database data from
  hostUrl = 'http://localhost:8080';

  // xml data to grab data from api
  constructor(private httpClient: HttpClient) { }

  // methods below to grab content from database

  post_event(eventData: any){
    return this.httpClient.post<any>(this.hostUrl,eventData);
  }
  
  // get all events
  getEvents() {
    return this.httpClient.get<any[]>( this.hostUrl + '/app/rili');
  }

}
