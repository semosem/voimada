import { Component, Input, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Jobs } from "../../types/types";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { JobService } from "../../services/jobs.service";

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "app-table",
  styleUrls: ["table.component.css"],
  templateUrl: "table.component.html"
})
export class TableComponent {
  @Input() data: any;
  private dataSource: any;
  private displayedColumns: string[] = [
    "title",
    "name",
    "startDate",
    "endDate",
    "location"
  ];

  constructor(
    private jobService: JobService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.changeDetectorRefs.detectChanges();

    this.data = new MatTableDataSource<Jobs>(this.data);
    this.data.paginator = this.paginator;
    console.log(this.data);
  }
  ngAfterViewInit() {
    this.paginator.page.subscribe(event => console.log(event));
  }
}
