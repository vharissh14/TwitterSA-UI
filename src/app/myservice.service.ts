import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MyserviceService {
  private _url: string = "http://localhost:8888/myapp";
  constructor(private _http: Http) { }
    getDetails(){
      return Observable.interval(5000)
  .mergeMap(() => this._http.get(this._url).map((r:Response)=>r.json()));
    }
}