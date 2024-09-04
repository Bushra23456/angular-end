import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface users {
  id : number;
  name : string;
  email : string;
  password : string;
  
}
@Injectable({
  providedIn: 'root'
})
export class AddService {
 private api = 'http://localhost:82/edit/data.php';
  constructor(private http : HttpClient) { }
  addData(data: any) {
    const headers = new HttpHeaders();
 
    return this.http.post(this.api,data);
  }
  getdata(){
    return this.http.get(this.api);
  }
  updatedata(update : any){
    const headers = new HttpHeaders();
    return this.http.put(this.api, JSON.stringify(update),{headers}); 

  }
  deletedata(id: number){
   
    return this.http.delete(this.api,{body:{id}});
  }

}
