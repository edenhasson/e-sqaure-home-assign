import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Books} from "../../interfaces/Books.interface";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  @Input() searchResult$: Observable<Books>;
  @Input() searchValue: string;
  startIndex: number = 0;
  maxResults: number = 20;

  constructor(public searchService: SearchService) { }

  ngOnInit(): void {
  }

  onPageChange(pageNumber: number): void {
    if(this.startIndex !== this.maxResults * (pageNumber - 1)) {
      this.startIndex = this.maxResults * (pageNumber - 1);
      this.searchResult$ = this.searchService.triggerSearch(this.searchValue, this.maxResults * (pageNumber - 1), this.maxResults);
    }
  }
}
