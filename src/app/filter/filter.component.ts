import { Component } from '@angular/core';
import { DbService } from '../db.service';
import { Tools } from '../tools';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  list: Tools[] = [];
  constructor(private toolsService: DbService) {
    this.list = toolsService.getTools();
  }
}
