import { Component, OnInit, Input } from "@angular/core";
import { Jobs } from "../../../types/types";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  @Input() job: Jobs;

  constructor() {}

  ngOnInit() {}
}
