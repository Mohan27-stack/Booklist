import { Component, HostListener, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

 selectedBook: string = '';
 formDirty = true;
 book:any;
 isLoading:boolean=false;
  constructor(private apiService: BooklistService,private dialog: MatDialog,private router:Router) {}

  ngOnInit(): void {
    this.apiService.selectedBook$.subscribe(book => {
      this.book = book;
      this.selectedBook = book;
      console.log("this.selectedBook",this.selectedBook);
      console.log("typeof this.selectedBook",typeof(this.selectedBook));
      if(this.selectedBook == '' && typeof this.selectedBook == 'string')
      {
        this.openConfirmDialog();
      }
    });

   
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      height:'150px',
      data: { message: 'Are you sure you want to refresh this page ?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed
        this.isLoading=true;
        console.log('Confirmed!');
        setTimeout(() => {
        this.isLoading=false;
        this.router.navigate([''])
        }, 2000);
      } else {
        // User canceled
        console.log('Cancelled');
      }
    });
  }

  getISBN(identifiers: any[]): string {
    const isbn13 = identifiers.find(id => id.type === 'ISBN_13');
    return isbn13 ? isbn13.identifier : identifiers[0]?.identifier || 'N/A';
  }

}
