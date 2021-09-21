import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-version-chip',
  templateUrl: './product-version-chip.component.html',
  styleUrls: ['./product-version-chip.component.css'],
})
export class ProductVersionChipComponent implements OnInit {
  @Input() version!: string;

  constructor() {}

  ngOnInit(): void {}
}
