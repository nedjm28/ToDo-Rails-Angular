import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  notice;
  constructor() { }


  public sendNotice(noticeC: any): void{
    this.notice = noticeC;
  }

  public getNotice(): Observable<any>{
    return this.notice;
  }
}


