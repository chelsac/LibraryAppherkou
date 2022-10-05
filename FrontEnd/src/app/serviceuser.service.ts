import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  server_address:string='api';

  constructor(private http:HttpClient) { }

  addusers(data:any){
    // return this.http.post<any>(`{$this.server_address}/adduser`,data);
    return this.http.post<any>(`${this.server_address}/adduser`,data);
  }
}
