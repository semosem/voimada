import { Component, Input, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Jobs } from "../../types/types";
import { MatPaginator, MatTableDataSource } from "@angular/material";

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
  private displayedColumns: string[] = [
    "title",
    "name",
    "startDate",
    "endDate",
    "location"
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnChanges() {
    this.data = new MatTableDataSource<Jobs>(this.data);
    this.data.paginator = this.paginator;
  }
}
