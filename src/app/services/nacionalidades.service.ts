import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../Global";

@Injectable()
export class NacionalidadesService {

    constructor(private _http: HttpClient) {
        
    }

    getNacionalidades(): Observable<any> {
        var request = "api/nacionalidades";
        var url = Global.url + request;
        return this._http.get(url);
    }

}