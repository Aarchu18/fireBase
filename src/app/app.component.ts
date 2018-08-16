import { Component,OnInit } from '@angular/core';
import{FireServiceService} from './fire-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private fireSevice:FireServiceService){}
  ngOnInit(){
    this.fireSevice.setData().subscribe(res=>{
      console.log(res);
    }),err=>
    {
      console.log(err);
    }
    this.fireSevice.getData().subscribe(res=>{
      console.log(res,"ddd");
    }),err=>
    {
      console.log(err);
    }


  }
  title = 'fireBase';
}
