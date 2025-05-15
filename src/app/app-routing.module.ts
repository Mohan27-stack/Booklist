import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';


const routes: Routes = [
  { path: '', component: BooklistComponent },                // Default route
  { path: 'bookdetail', component: BookdetailsComponent},          // /about
  { path: '**', component: BooklistComponent },      // Wildcard route (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }