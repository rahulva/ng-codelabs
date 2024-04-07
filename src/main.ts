import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import routeConfig from './app/routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, appConfig)
.catch(err => console.error(err));