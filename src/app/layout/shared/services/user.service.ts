import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public BaseUrl = "http://localhost:9090";
  constructor(private https: HttpClient) { }


  public getUsernameById(id : number): Observable<any> {
    return this.https.get(this.BaseUrl+'/users/username/'+id);
  }
}
