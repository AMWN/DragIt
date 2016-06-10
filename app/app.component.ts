import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { PaginaService } from './pagina.service';
import { webpartComponent } from './webpart.component'

@Component({
    selector: 'my-app',
    template: `
      <!--Begin Pagina-->
      <!--Begin titel-->
		<div class="part pagetitle clear">
			<div class="content">
				<h1>
					{{pagina.titel}}
				</h1>
			</div>
		</div>
		<!--Eind titel-->
		<!--Begin omschrijving-->
		<div class="part processsubtitle clear">
			<div class="content">
				{{pagina.omschrijving}}
			</div>
		</div>
		<!--Eind omschrijving-->
      <div class="part clear" style="padding:0px 0px 10px 0px;">
        <webpart *ngFor='let webpart of pagina.webparts' [webpart]="webpart">
        </webpart>
      <div class="partheader" style="height:25px;white-space:nowrap;">


        <h2 class="headertext">
          Pagina definitie
        </h2>
      </div>
      <div class="content">
        <table class="properties" width="100%" cellpadding="0" cellspacing="0">
          <tbody>
          <div class="content">
            <table class="properties" width="100%" cellpadding="0" cellspacing="0">
              <tbody>
                <tr>
                  <td class="label" valign="top">
                    <label style="white-space:nowrap;">Definitie JSON</label>
                  </td>
                  <td class="value valuerows0" valign="top">
                    <div>
                    <textarea id="textarea1" style=" width: 95%; height: 300px ">{{pagina | json}}}</textarea>
                    <input type="file" (change)="changeListener($event)">
                    <button (click)="onClickMe($event)">Save</button>

                    </div>
                  </td>
                </tr>
            </tbody>
        </table>
      </div>
      </tbody>
      </table>
    </div>
    </div>
    <div *ngIf="errorMessage" class="error">{{errorMessage}}</div>
    `,
    directives: [webpartComponent],
    providers: [PaginaService]
})

export class AppComponent implements OnInit {
    public pagina = {};
    public pagina2 = {};
    private errorMessage;

    onClickMe($event) {
        var page = document.getElementById("textarea1").value;
        this.pagina = JSON.parse(page.substring(0, page.length - 1));
    }

    changeListener($event) {
      this.readThis($event.target)
    }

    readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = function(e) {
            this.pagina = myReader.result
            //document.getElementById("textarea1").value = this.pagina;
            console.log(JSON.parse(this.pagina));
        }

        myReader.readAsText(file);
    }

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

    constructor(http: Http,
        window: Window,
        private paginaService: PaginaService) {

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
            data => this.pagina = data,
            error => this.errorMessage = <any>error
        );

    }


}
