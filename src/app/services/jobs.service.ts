import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Jobs } from "../types/types";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class JobService {
  private query: string;
  private baseUrl: string = "https://data.usajobs.gov/api/search?";
  private reqURL: string = `${this.baseUrl}Keyword=`;
  private _HOST: string = environment._HOST;
  private _USER_AGENT: string = environment.USER_AGENT;
  private _API_KEY: string = environment.AUTHORIZATION_KEY;

  constructor(private _http: HttpClient) {}

  getJobs(q): Observable<any> {
    return this._http.get(this.reqURL + q, {
      headers: new HttpHeaders({
        Host: this._HOST,
        "User-Agent": this._USER_AGENT,
        "Authorization-Key": this._API_KEY
      })
    });
  }
}
