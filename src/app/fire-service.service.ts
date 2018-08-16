import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  data=[{
      name:"Archana",
      empId:6136,
      contactno:766555555


  }]

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get("https://fir-practice-d95bf.firebaseio.com/Aarchu.json").pipe(map(data => data));

  }
  setData():Observable<any>{
    return this.http.put("https://fir-practice-d95bf.firebaseio.com/Aarchu.json",this.data);
  }
}
