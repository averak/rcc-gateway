import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from 'src/app/shared/service/title.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  title!: Observable<string>;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.title = this.titleService.title;
  }
}
