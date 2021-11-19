import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class GenerosService {

    constructor(private _http: HttpClient) {
        
    }

    getGeneros(): Observable<any> {
        var request = "api/generos";
        var url = Global.url + request;
        return this._http.get(url);
    }

}