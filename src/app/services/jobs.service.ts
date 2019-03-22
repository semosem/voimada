import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Jobs } from "../types/types";

@Injectable({
  providedIn: "root"
})
export class JobService {
  jobUrl = "https://data.usajobs.gov/api/search";

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    return this.http.get(this.jobUrl, {
      headers: new HttpHeaders({
        Host: "data.usajobs.gov",
        "User-Agent": "dwell.sem@gmail.com",
        "Authorization-Key": "wKoA29OWnW6AVmRLxMQohSXRPFgGyb0Sk6RDZDdRXGQ="
      })
    });
  }
}
