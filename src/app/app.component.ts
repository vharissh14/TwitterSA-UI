import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employee = []
  constructor(private _emp: MyserviceService){}
  ngOnInit(){
    this._emp.getDetails().subscribe(res => {this.employee = res;
  console.log(this.employee);  
  });
  }
}