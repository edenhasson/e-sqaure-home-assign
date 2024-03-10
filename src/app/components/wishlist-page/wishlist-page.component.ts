import { Component, OnInit } from '@angular/core';
import {WishlistService} from "../../services/wishlist.service";
import {Book} from "../../interfaces/Book.interface";

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css']
})
export class WishlistPageComponent implements OnInit {
  wishlistBooks: Book[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistBooks = this.wishlistService.wishlistBooks;
  }

  updateWishlist() {
    this.wishlistBooks = this.wishlistService.wishlistBooks;
  }
}
