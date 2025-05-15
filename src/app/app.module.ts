import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistComponent } from './booklist/booklist.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; // If you're using mat-button
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    BookdetailsComponent,
    BooklistComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbAccordionModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
