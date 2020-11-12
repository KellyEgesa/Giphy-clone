import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  newSearch = new Search('');
  @Output() searchParam = new EventEmitter<Search>();
  constructor() {}

  submitSearch(): void {
    this.searchParam.emit(this.newSearch);
    this.newSearch = new Search('');
  }

  ngOnInit(): void {}
}
