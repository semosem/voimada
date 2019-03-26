import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent {
  @Output() onSearch = new EventEmitter();

  searchJobs(searchQuery) {
    this.onSearch.emit(searchQuery);
  }
}
