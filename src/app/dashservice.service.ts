import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DashboardService {
 private _url: string = "http://localhost:8888/dash";
  constructor(private _http: Http) { }
    
    getStats(){
        return Observable.interval(10000)
   .mergeMap(() => this._http.get(this._url).map((r:Response)=>r.json()));
 // return this._http.get(this._url).map((r:Response)=>r.json());
    }
}
