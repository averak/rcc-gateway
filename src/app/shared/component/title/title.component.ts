import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/service/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  title!: string;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.getTitle().subscribe((title) => (this.title = title));
  }
}
