import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashservice.service';


@Component({
  selector: 'app-dash',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    public lab:string[] = [];
    public dash:number[] = [];
     public lab1:string[] = [];
    public dash1:number[] = [];
    public doughnutChartLabels:string[] = ["negative","positive","neutral"];
    public doughnutChartData:number[] = [1,1,1];
    public doughnutChartType:string = 'doughnut';
    //public isDataAvailable:boolean = false;
    data = [];
  constructor(private _dash: DashboardService){}
  ngOnInit(){
    this._dash.getStats().subscribe(res =>{ 
      this.lab=[];
        this.dash=[];
    for(let datum of res){
        this.lab.push(datum.sentiment);
        this.dash.push(datum.count);      
    }   
this.lab1=this.lab;
this.dash1=this.dash;
  console.log(this.dash1);
   console.log(this.lab1);
   this.doughnutChartLabels=this.lab1;
   this.doughnutChartData=this.dash1;
   //this.isDataAvailable = true;
  });
     
    
  }
  



  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}