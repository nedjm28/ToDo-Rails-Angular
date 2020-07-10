import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  // this def for fetch all posts data

  public getPosts(): Observable<any>{
    return this.httpClient.get('http://127.0.0.1:3000/post/fetchall');
  }
  public getOnePost(id: number): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/post/getpost/'+ id.toString());
  }

  public createPost(pdata: any): Observable<any>{

    console.log(pdata);
    return this.httpClient.post<any>('http://127.0.0.1:3000/post/create', pdata, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'Cache-Control',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin,X-Requested-With,content-type',
      })},

    );
  }

  public updatePost(pdata: any, id: number): Observable<any>{

    console.log(pdata);
    return this.httpClient.put<any>('http://127.0.0.1:3000/post/update/' + id.toString(), pdata, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'Cache-Control',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin,X-Requested-With,content-type',
      })},

    );
  }

    public destroyPost(id: number): Observable<any> {
      return this.httpClient.delete('http://127.0.0.1:3000/post/delete/'+ id.toString());
    }
}
