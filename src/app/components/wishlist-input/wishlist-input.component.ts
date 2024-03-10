import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {WishlistService} from "../../services/wishlist.service";
import {Book} from "../../interfaces/Book.interface";

@Component({
  selector: 'app-wishlist-input',
  templateUrl: './wishlist-input.component.html',
  styleUrls: ['./wishlist-input.component.css']
})
export class WishlistInputComponent implements OnInit {
  isBookChecked: boolean = false;
  @Input() book: Book;
  @Output() bookRemoved: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.isBookChecked = this.wishlistService.isBookChecked(this.book.id);
  }

  @ViewChild("mycheckbox") mycheckbox: ElementRef;
  onChange(){
    if(this.mycheckbox?.nativeElement?.checked) {
      this.wishlistService.addToWishlist(this.book);
    } else {
      this.wishlistService.removeFromWishlist(this.book.id);
      this.bookRemoved.emit(true);
    }
  }
}
