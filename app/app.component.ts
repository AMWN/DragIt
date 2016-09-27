import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Pagina } from './startpage';
import { Jsonp  } from '@angular/http';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
    public pagina: Object = Pagina;
    private errorMessage;
    public data: string;
    private edit: boolean;

    constructor(http: Http,
        dragulaService: DragulaService,
        private jsonp: Jsonp
    ) {

        dragulaService.setOptions('bag-one', {
            copy: function(el, source) {
                return el.className === 'copy-me';
            }
        })

        dragulaService.setOptions('bag-webpart', {
            moves: function(el, source, handle, sibling) {
                return handle.classList.contains('headertext') || el.className === 'copy-me';
            },
            copy: function(el, source) {
                return el.className === 'copy-me';
            }
        })
    }

    ngOnInit(){
      //ophalen van stylesheet en javascript InSite of OutSite
      if (this.getParameterByName("dataurl") !== "0") {
        this.jsonp
             .get(this.getParameterByName("dataurl") + "?callback=JSONP_CALLBACK")
             .map(response => <string[]> response.json())
             .subscribe(data => this.appendTohead(data));
      }
    }

    private toggleEdit() {
        this.edit = !this.edit;
    }

    //change listener voor upload van JSON definitie
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
            return "0";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };



}
