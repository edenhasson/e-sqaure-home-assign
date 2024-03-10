import {Injectable} from '@angular/core';
import {Book} from "../interfaces/Book.interface";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistBooks: Book[] = [];

  constructor() {
  }

  addToWishlist(book: Book): void {
    this.wishlistBooks.push(book);
  }

  removeFromWishlist(id: string): void {
    this.wishlistBooks = this.wishlistBooks.filter(book => book.id !== id);
  }

  isBookChecked(id: string): boolean {
    return !!this.wishlistBooks.find(book => book.id === id);
  }
}
