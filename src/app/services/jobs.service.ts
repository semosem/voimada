import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Jobs } from "../types/types";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class JobService {
  jobUrl = "https://data.usajobs.gov/api/search?";

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(this.jobUrl, {
      headers: new HttpHeaders({
        Host: environment.host,
        "User-Agent": environment.userAgent,
        "Authorization-Key": environment.authorizationKey
      })
    });
  }
}
