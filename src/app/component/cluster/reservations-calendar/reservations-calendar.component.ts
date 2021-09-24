import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarView,
  CalendarEventTimesChangedEvent,
} from 'angular-calendar';
import { Subject } from 'rxjs';
import { ReservationModel } from 'src/app/model/reservation.model';
import { UserModel } from 'src/app/model/user.model';
import { ReservationColorEnum } from 'src/app/enums/reservation-color.enum';
import { ReservationService } from 'src/app/shared/service/reservation.service';
import { UserService } from 'src/app/shared/service/user.service';

export class CalendarEventWithReservation implements CalendarEvent {
  reservation!: ReservationModel;
  start!: Date;
  end!: Date;
  title!: string;
  color!: { primary: string; secondary: string };
  actions!: CalendarEventAction[];
  resizable!: { beforeStart: boolean; afterEnd: boolean };
  draggable!: boolean;
}

@Component({
  selector: 'app-reservations-calendar',
  templateUrl: './reservations-calendar.component.html',
  styleUrls: ['./reservations-calendar.component.css'],
})
export class ReservationsCalendarComponent implements OnInit, OnChanges {
  @Input() reservations!: ReservationModel[];
  @Input() loginUser!: UserModel;

  @Output() reservationEdit = new EventEmitter<ReservationModel>();
  @Output() reservationDelete = new EventEmitter<ReservationModel>();
  @Output() reservationNew = new EventEmitter<void>();

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  events!: CalendarEventWithReservation[];

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: any }): void => {
        this.deleteEvent(event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  constructor(private reservationService: ReservationService, private userService: UserService) {}

  ngOnInit(): void {
    // イベントを取得
    this.buildEvents();
  }

  buildEvents(): void {
    this.events = [];

    this.reservations.map((reservation) => {
      const editable =
        this.loginUser.id === reservation.user.id || this.userService.checkAdmin(this.loginUser);

      this.events.push({
        reservation: reservation,
        start: new Date(reservation.startAt),
        end: new Date(reservation.finishAt),
        title: `${reservation.user.lastName} ${reservation.user.firstName}`,
        color:
          this.loginUser.id === reservation.user.id
            ? ReservationColorEnum.BLUE
            : ReservationColorEnum.YELLOW,
        actions: this.actions,
        resizable: {
          beforeStart: editable,
          afterEnd: editable,
        },
        draggable: editable,
      });
    });

    // イベント一覧
  }

  onClickNew(): void {
    this.reservationNew.emit();
  }

  eventTimesChanged(changedEvent: CalendarEventTimesChangedEvent): void {
    this.events.map((event) => {
      if (event === changedEvent.event) {
        const reservation = event.reservation;
        reservation.startAt = changedEvent.newStart as Date;
        reservation.finishAt = changedEvent.newEnd as Date;
        this.reservationEdit.emit(reservation);
      }
    });
  }

  deleteEvent(eventToDelete: CalendarEventWithReservation) {
    this.reservationDelete.emit(eventToDelete.reservation);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.reservations !== undefined) {
      this.reservations = changes.reservations.currentValue;
      this.ngOnInit();
    }

    if (changes.loginUser !== undefined) {
      this.ngOnInit();
    }
  }
}