import { Injectable } from '@angular/core';
import{ HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicebookService {

  server_address:string='api';
  constructor(private http:HttpClient) { }

  addbooks(data:any){
    return this.http.post<any>(`${this.server_address}/addbook`,data);
  }

  getBook(){
    return this.http.get(`${this.server_address}/books`);
  }
  geteditBook(_id:any){

    return this.http.get(`${this.server_address}/`+_id);
  }
  
  deleteBook(id:any){
    console.log(id);
    return this.http.delete(`${this.server_address}/delete/`+id);
  }

  updateBook(book:any){
    console.log(book);
    return this.http.put(`${this.server_address}/edit`, {book})
    .subscribe(data=> {console.log(data)})
  }

  
}
