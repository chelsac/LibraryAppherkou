import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address:string='api';

  constructor(private http:HttpClient) { }

  loginUser(data:any){
    return this.http.post<any>(`${this.server_address}/login`,data);
  }

  loggedin(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
