import { Component } from '@angular/core';
import { PageService } from './../page.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedPage: string = '';

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.selectedPage = this.pageService.getSelectedPage();
  }
}
