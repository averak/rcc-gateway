import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservations-content',
  templateUrl: './reservations-content.component.html',
  styleUrls: ['./reservations-content.component.css'],
})
export class ReservationsContentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleNewTransit(): void {
    this.router.navigate(['cluster', 'reservations', 'new']);
  }
}
