import { PageService } from './../page.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  selectedPage: string = '';

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.selectedPage = this.pageService.getSelectedPage();
  }
}
