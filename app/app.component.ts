import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { PaginaService } from './pagina.service';
import { webpartComponent } from './webpart.component'

@Component({
    selector: 'my-app',
    template: `<h1>{{pagina.titel}}</h1>
      <!--Begin Pagina-->
      <div class="part clear" style="padding:0px 0px 10px 0px;">
        <webpart *ngFor='let webpart of pagina.webparts' [webpart]="webpart">
        </webpart>
      </div>
      <pre>{{pagina | json}}</pre>
    `,
    directives: [webpartComponent],
    providers: [PaginaService]
})

export class AppComponent implements OnInit {
    public pagina = {};

    private extractData(res: Response) {
        let body = res.text().split("(")[1];
        body = body.substring(0, body.length - 1);
        body = JSON.parse(body);
        return body || {};
    }

    private appendTohead(res) {
        var neutralStyleSheet = res.cssUrl.replace("integration", "neutraal");
        var ss = document.createElement("link");
        var js = document.createElement("script");

        ss.type = "text/css";
        ss.rel = "stylesheet";
        ss.href = neutralStyleSheet;
        document.getElementsByTagName("head")[0].appendChild(ss);

        js.src = res.scriptUrl;
        document.getElementsByTagName("head")[0].appendChild(js);

    }

    constructor(  http: Http,
                  window: Window,
                private paginaService : PaginaService ) {

        var getParameterByName = function(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);

            if (results === null)
                return "";
            else
                return decodeURIComponent(results[1].replace(/\+/g, " "));
        };

        http.get(getParameterByName("dataurl") + "?callback=JSON_CALLBACK")
            .map(this.extractData)
            .subscribe(this.appendTohead)

    }

    ngOnInit() {
      this.paginaService.getPagina().subscribe(
        data => this.pagina = data
      );
    }


}
