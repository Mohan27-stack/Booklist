import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  isLoading = false;
  title = 'booklist';
  BooklistForm: FormGroup;
  boolistarr: any = [];
  defaultbooksearch = {};
  errorMessage:any;
  constructor(private apiService: BooklistService, private router: Router) {
    this.BooklistForm = new FormGroup({
      'searchbook': new FormControl("fouling")
    })
  }
  items = ['First', 'Second', 'Third'];



  async ngOnInit() {
    this.isLoading = true;
    setTimeout(async () => {
      await this.getBooklistfn();
    }, 2000)
  }
  getBooklistfn() {
    this.defaultbooksearch = {
      "flag": this.BooklistForm.get('searchbook')?.value
    };
    this.apiService.getbooklist(this.defaultbooksearch).subscribe({
      next: (data: any) => {
        if (data.items && data.items.length > 0) {
          this.isLoading = false;
          this.boolistarr = data.items;
        }
        console.log("Data received:", data);
      },
      error: (err: any) => {
        this.isLoading = false; // Stop loader on error
        console.error("Error occurred:", err);
        this.errorMessage = 'Failed to load book list. Please try again later.';
      }
    });

  }

  getbooklist() {
    this.isLoading = true;
    setTimeout(async () => {
      await this.getBooklistfn();
    }, 2000);
  }

  async getbookdetails(detail: any) {
    this.isLoading = true;
    await this.setData(detail);
    setTimeout(async () => {
      this.router.navigate(['/bookdetail']);
    }, 1000)
  }

  setData(newValue: string): void {
    this.apiService.setSelectedBook(newValue);
  }
}
