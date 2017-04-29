import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TwitterserviceService {
private _url: string = "http://localhost:8888/data";
private _urlstop: string = "http://localhost:8888/stoptwitter";
//private _urlclearDB: string = "http://localhost:8888/dbclear";

  constructor(private _http: Http) { }
    
    startTwitterCrawl(hashtag){
        let body = JSON.stringify({'hashtag': hashtag.value});
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });
        this._http.post(this._url, body, options).subscribe();
    }

    stopTwitterService()
    {
        this._http.get(this._urlstop).subscribe();
        //this._http.get(this._urlclearDB).subscribe();
    }
}
