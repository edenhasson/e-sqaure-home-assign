import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Book} from "../../interfaces/Book.interface";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: Book;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
