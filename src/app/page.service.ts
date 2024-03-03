import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  selectedPage: string = '';

  constructor() { }

  setSelectedPage(page: string) {
    this.selectedPage = page;
  }

  getSelectedPage() {
    return this.selectedPage;
  }
}
