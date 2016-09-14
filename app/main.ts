import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);


// import { bootstrap }    from '@angular/platform-browser-dynamic';
// import { AppComponent } from './app.component';
// import { provide } from '@angular/core';
// import { HTTP_PROVIDERS } from '@angular/http';
//
// bootstrap(AppComponent,[HTTP_PROVIDERS, provide(Window, {useValue: window})]);
