import { Injectable } from '@angular/core';
import tools, { Tools } from './tools';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  tools: Tools[] = tools;

  getTools() {
    return this.tools;
  }
}
