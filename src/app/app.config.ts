import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { loaderInterceptorInterceptor } from './Services/Helpers/loader-interceptor.interceptor';
import { provideEffects } from '@ngrx/effects';
import {  provideStore } from '@ngrx/store';
import { UserEffects } from './State/effect';
import { userReducer } from './State/reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([loaderInterceptorInterceptor])),
    provideAnimationsAsync(),
    provideEffects(UserEffects),
    provideStore({ users: userReducer }),
    // provideEffects([EffectsModule]),
    //{ provide: HTTP_INTERCEPTORS, useValue: loaderInterceptorInterceptor, multi: true },
  ],
};
