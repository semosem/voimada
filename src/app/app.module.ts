import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule
} from "@angular/material/";
import { CdkTableModule } from "@angular/cdk/table";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { JobsListComponent } from "./components/jobs-list/jobs-list.component";
import { ListItemComponent } from "./components/jobs-list/list-item/list-item.component";
import { TableComponent } from "./components/table/table.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JobsListComponent,
    ListItemComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
