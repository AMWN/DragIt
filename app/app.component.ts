import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { PaginaService } from './services/pagina.service';
import { webpartComponent } from './webpart.component';
import { Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';
import { slideoutComponent } from './slideout.component';
import { generateDownloadurl } from './pipes/generatedownloadurl.pipe';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [webpartComponent, Dragula, slideoutComponent],
    viewProviders: [DragulaService, PaginaService],
    pipes: [generateDownloadurl]
})

export class AppComponent implements OnInit {
    public pagina = {};
    private errorMessage;
    public data : string;
    private edit;

    public changeListener($event) {
        this.readThis($event.target)
    }

    private readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.pagina = JSON.parse(myReader.result);
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

    private toggleEdit(){
      this.edit = !this.edit;
    }

    constructor(http: Http,
        window: Window,
        private paginaService: PaginaService,
        private dragulaService: DragulaService) {

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

        dragulaService.setOptions('bag-head', {
            moves: function(el, source, handle, sibling) {
                return handle.classList.contains('headertext');
            }
        })

    }


    ngOnInit() {
        this.paginaService.getPagina().subscribe(
            data => this.pagina = data,
            error => this.errorMessage = <any>error
        );

    }
}
