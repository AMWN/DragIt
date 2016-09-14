import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpModule }    from '@angular/http';
import { DragulaModule  } from 'ng2-dragula/ng2-dragula';
import { FaComponent } from 'angular2-fontawesome/components';

import { PaginaService } from './services/pagina.service';
import { webpartComponent } from './webpart.component';
import { slideoutComponent } from './slideout.component';
import { generateDownloadurl } from './pipes/generatedownloadurl.pipe';
import { Webpart } from './controls/webpart'

import { datumComponent } from './controls/datum.component';
import { tekstComponent } from './controls/tekst.component';
import { nummerComponent } from './controls/nummer.component';
import { urlComponent } from './controls/url.component';
import { memoComponent } from './controls/memo.component';
import { bijlageComponent } from './controls/bijlage.component';
import { janeeComponent } from './controls/janee.component';
import { url2Component } from './controls/url2.component';
import {enableProdMode} from '@angular/core';

// enableProdMode();

@NgModule({
    declarations: [ AppComponent,
                    FaComponent,
                    generateDownloadurl,
                    webpartComponent,
                    slideoutComponent,
                    datumComponent,
                    tekstComponent,
                    nummerComponent,
                    urlComponent,
                    url2Component,
                    memoComponent,
                    bijlageComponent,
                    janeeComponent
                    ],
    imports:      [BrowserModule, HttpModule, DragulaModule, FormsModule ],
    providers:    [PaginaService, Window],
    bootstrap:    [AppComponent],
})

export class AppModule {}
