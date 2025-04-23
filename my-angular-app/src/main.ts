import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
//import { provideReactiveForms } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//bootstrapApplication(AppComponent, appConfig)
//  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()
    //,provideReactiveForms()
    ,ReactiveFormsModule
  ]
});
