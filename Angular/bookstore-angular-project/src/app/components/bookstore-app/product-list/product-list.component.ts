import { Component, OnInit } from '@angular/core';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros: Array<any> = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.bookService.getBook().subscribe(data => {
      this.livros = data.books;
    })
  }



}
