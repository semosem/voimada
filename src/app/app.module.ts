import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule
} from "@angular/material/";
import { CdkTableModule } from "@angular/cdk/table";
import { JobService } from "./services/jobs.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { TableComponent } from "./components/table/table.component";
import { MatSortModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, SearchBarComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule {}
