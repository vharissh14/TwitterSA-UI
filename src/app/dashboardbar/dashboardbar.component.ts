import { Component } from '@angular/core';
import { DashboardbarService } from '../dashbarservice.service';
 
@Component({
  selector: 'app-dashbar',
  templateUrl: './dashboardbar.component.html',
  styleUrls: ['./dashboardbar.component.css']
})
export class DashboardbarComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   public lab:string[] = [];
    public dash:number[] = [];
     public lab1:string[] = [];
    public dash1:number[] = [];
  public barChartLabels:string[] = [];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [], label: 'Tweet Count'}
  ];

constructor(private _dash: DashboardbarService){}
  ngOnInit(){
    this._dash.getStats().subscribe(res =>{ 
      this.lab=[];
        this.dash=[];
    for(let datum of res){
        this.barChartLabels.push(datum.location);
        this.dash.push(datum.lcount);      
    }   
this.lab1=this.lab;
this.dash1=this.dash;
  console.log(this.dash1);
   console.log(this.lab1);
   this.barChartLabels=this.lab1;
   this.barChartData=[{data: this.dash1,label: 'Tweet Count'}];
   //this.isDataAvailable = true;
  });
     
    
  } 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
}