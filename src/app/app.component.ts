import { Component } from "@angular/core";
import { JobService } from "./services/jobs.service";
import { Jobs } from "./types/types";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private query: string;
  public dataSource: Jobs[];
  private searching: boolean = false;
  private dataFound: boolean = false;

  private imageStyle = {
    position: "relative"
  };

  constructor(private _jobService: JobService) {}

  handleSearch(query) {
    this._jobService
      .getJobs(query)
      .subscribe(
        jobsInfo => this.handlResolve(jobsInfo),
        err => this.handleReject(err)
      );
  }

  handlResolve(jobsInfo): void {
    const jobs = jobsInfo.SearchResult.SearchResultItems.map(job => ({
      MatchedObjectId: job.MatchedObjectId,
      OrganizationName: job.MatchedObjectDescriptor.OrganizationName,
      PositionTitle: job.MatchedObjectDescriptor.PositionTitle,
      PositionURI: job.MatchedObjectDescriptor.PositionURI,
      PositionStartDate: job.MatchedObjectDescriptor.PositionStartDate,
      PositionEndDate: job.MatchedObjectDescriptor.PositionEndDate,
      PositionLocationDisplay:
        job.MatchedObjectDescriptor.PositionLocationDisplay
    }));
    this.dataSource = jobs;
    this.searching = true;
    this.dataSource.length !== 0
      ? (this.dataFound = true)
      : (this.dataFound = false);
  }

  handleReject(err): void {
    console.log(err);
  }
}
