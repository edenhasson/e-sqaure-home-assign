import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchString: string;
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  triggerSearch($event: string) {
    this.searchQuery.emit($event)
  }

}
