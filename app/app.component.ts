import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { PaginaService } from './services/pagina.service';
import { Webpart } from './controls/webpart'

const WEBPARTS: Webpart[] = [
  {  omschrijving : "Algemeen",
      velden: [{
        type: "tekst",
        label: "Label",
        waarde: "Omschrijving",
        regels: 1,
        omschrijving: ""
      }],
      icon: 'wpforms'
},{
      omschrijving : "Algemeen",
      velden: [{
        type: "tekst",
        label: "Label",
        waarde: "Omschrijving",
        regels: 1,
        omschrijving: ""
      }],
      icon: 'wpforms'
}
]

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    public pagina = {};
    private errorMessage;
    public data : string;
    private edit;
    public webparts = WEBPARTS;

    private toggleEdit(){
      this.edit = !this.edit;
    }

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

    private getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);

        if (results === null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    constructor(http: Http,
        private paginaService: PaginaService,
        private dragulaService: DragulaService
      ) {
        dragulaService.setOptions('bag-one', {
          // moves: function(el, source, handle, sibling) {
          //    console.log('move one');
          //    console.log(el, source, handle, sibling);
          //    el.className === 'copy-me';;
          // },
            copy: function(el, source) {
                console.log('copy one');
                console.log(el)
                return el.className === 'copy-me';
            }
        })

        dragulaService.setOptions('bag-webpart', {
            moves: function(el, source, handle, sibling) {
               console.log('move wp');
               console.log(el, source, handle, sibling);
               return handle.classList.contains('headertext') || el.className === 'copy-me';
            },
            copy: function(el, source) {
                console.log(el)
                return el.className === 'copy-me';
            }
        })
        // http.get(this.getParameterByName("dataurl") + "?callback=JSON_CALLBACK")
        //     .map(this.extractData)
        //     .subscribe(this.appendTohead)
    }


    ngOnInit() {
        this.paginaService.getPagina().subscribe(
            data => this.pagina = data,
            error => this.errorMessage = <any>error
        );

    }
}
