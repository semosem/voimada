import { Component, Input, ViewChild } from "@angular/core";
import { Jobs } from "../../types/types";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { JobService } from "../../services/jobs.service";

const ELEMENT_DATA: any = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "app-table",
  styleUrls: ["table.component.css"],
  templateUrl: "table.component.html"
})
export class TableComponent {
  public jobs: Jobs[];
  private dataSource: any;
  private displayedColumns: string[] = [
    "title",
    "name",
    "startDate",
    "endDate",
    "location"
  ];

  constructor(private jobService: JobService) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobsInfo => {
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
      this.dataSource = new MatTableDataSource<Jobs>(jobs);
      this.dataSource.paginator = this.paginator;
    });
  }
}
