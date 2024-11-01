import { LoaderService } from './loader.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
export const loaderInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoaderService);
  loadingService.show();
  return next(req).pipe(
    finalize(() => {
      loadingService.hide();
    })
  );
};
