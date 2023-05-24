import { Component, Input } from '@angular/core';
import { Tools } from '../tools';

@Component({
  selector: 'app-filtered-list',
  templateUrl: './filtered-list.component.html',
  styleUrls: ['./filtered-list.component.scss'],
})
export class FilteredListComponent {
  @Input() list: Tools[] = [];
}
