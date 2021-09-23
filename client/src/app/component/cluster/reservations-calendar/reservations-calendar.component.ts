import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-reservations-calendar',
  templateUrl: './reservations-calendar.component.html',
  styleUrls: ['./reservations-calendar.component.css'],
})
export class ReservationsCalendarComponent implements OnInit {
  @Output() newTransit = new EventEmitter<void>();

  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  onClickNew(): void {
    this.newTransit.emit();
  }
}
