import { Component, OnInit } from "@angular/core";
import { JobService } from "../../services/jobs.service";
import { Jobs } from "../../types/types";
@Component({
  selector: "app-jobs-list",
  templateUrl: "./jobs-list.component.html",
  styleUrls: ["./jobs-list.component.css"]
})
export class JobsListComponent implements OnInit {
  public jobs: Jobs[];
  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(j => {
      this.jobs = j.SearchResult.SearchResultItems.map(item => ({
        MatchedObjectId: item.MatchedObjectId,
        OrganizationName: item.MatchedObjectDescriptor.OrganizationName,
        PositionTitle: item.MatchedObjectDescriptor.PositionTitle,
        PositionURI: item.MatchedObjectDescriptor.PositionURI,
        PositionStartDate: item.MatchedObjectDescriptor.PositionStartDate,
        PositionEndDate: item.MatchedObjectDescriptor.PositionEndDate,
        PositionLocationDisplay:
          item.MatchedObjectDescriptor.PositionLocationDisplay
      }));
    });
  }
}
