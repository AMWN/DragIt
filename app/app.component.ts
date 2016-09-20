import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    public pagina = {
        "titel": "Titel",
        "omschrijving": "Omschrijving (nummer)",
        "webparts": [{
            "id": 1,
            "volgnummer": 1,
            "omschrijving": "Algemeen",
            "velden": [{
                "id": 1,
                "volgnummer": 1,
                "type": "datum",
                "label": "Datum",
                "waarde": "15-01-1985"
            }, {
                    "id": 2,
                    "volgnummer": 2,
                    "type": "tekst",
                    "label": "Omschrijving",
                    "omschrijving": "Omschrijving"
                }]
        }],
        "edit": true
    };

    private errorMessage;
    public data: string;
    private edit;
    
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

    //ondersteunende functies voor ophalen van CSS stylesheet InSite
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
            return "0";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };


    constructor(http: Http,
        private dragulaService: DragulaService,
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

        //ophalen van stylesheet en javascript InSite of OutSite
        if (this.getParameterByName("dataurl") !== "0" ) {
            http.get(this.getParameterByName("dataurl") + "?callback=JSON_CALLBACK")
                .map(this.extractData)
                .subscribe(this.appendTohead)
        }
    }

}
