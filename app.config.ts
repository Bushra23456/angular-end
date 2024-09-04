import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { format } from 'node:path';
import { FormComponent } from './form/form.component';
import { FetchComponent } from './fetch/fetch.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([{path:'' , redirectTo:'form' , pathMatch :'full'},
  {path:'form',component:FormComponent},
  {path :'fetch',component:FetchComponent}

 
  ]), provideAnimationsAsync()]
};
