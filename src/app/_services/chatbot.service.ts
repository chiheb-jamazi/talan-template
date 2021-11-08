import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';


const apiUrl = 'http://localhost:9090/';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  chatbotData$: Observable<any>;
  private chatbotDataSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.chatbotData$ = this.chatbotDataSubject.asObservable();
  }

  send_message(message: string) {
    return this.http.get(apiUrl + "/api/search/smart-agent/search/" + message)
  }

  send_data_to_map_component(data: any) {
    this.chatbotDataSubject.next(data);
  }
}