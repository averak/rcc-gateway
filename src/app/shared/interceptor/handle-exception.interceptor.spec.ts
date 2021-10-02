import { TestBed } from '@angular/core/testing';

import { HandleExceptionInterceptor } from './handle-exception.interceptor';

describe('HandleExceptionInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HandleExceptionInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: HandleExceptionInterceptor = TestBed.inject(HandleExceptionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
