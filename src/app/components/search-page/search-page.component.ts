import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../../services/search.service";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {Books} from "../../interfaces/Books.interface";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchResult$: Observable<Books>;
  searchValue: string;
  constructor(private route: ActivatedRoute, public searchService: SearchService) {
  }

  ngOnInit(): void {
  }


  onInputValueChange($event: string) {//first search so values always be on default
    this.searchValue = $event;
    this.searchResult$ = this.searchService.triggerSearch($event, 0 , 20);
  }
}
