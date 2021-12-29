import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorMessageResolverService } from '@shared/service/error-message-resolver.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  statusCode: number = this.route.snapshot.queryParams.status_code || 500;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private errorMessageResolverService: ErrorMessageResolverService
  ) {}

  ngOnInit(): void {
    this.errorMessage = this.errorMessageResolverService.resolve(this.statusCode);
  }
}
