"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var AppComponent = (function () {
    function AppComponent(http, dragulaService) {
        this.dragulaService = dragulaService;
        this.pagina = {
            "titel": "Paginatitel",
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
                        }, {
                            "type": "nummer",
                            "label": "Nummer",
                            "waarde": "1200,00",
                            "regels": 5,
                            "omschrijving": "",
                            "icon": "euro"
                        }, {
                            "type": "memo",
                            "label": "Memo",
                            "waarde": "Lorem Khaled Ipsum is a major key to success. Celebrate success right, the only way, apple. Another one. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Fan luv. Mogul talk. Wraith talk.",
                            "regels": 3,
                            "omschrijving": "",
                            "icon": "commenting"
                        }, {
                            "type": "url",
                            "label": "Link1",
                            "waarde": "www.afas.nl",
                            "regels": 1,
                            "omschrijving": "Omschrijving",
                            "icon": "link"
                        }, {
                            "type": "url2",
                            "label": "Link2",
                            "waarde": "1",
                            "regels": 1,
                            "omschrijving": "Omschrijving",
                            "icon": "unlink"
                        }, {
                            "type": "janee",
                            "label": "Janee",
                            "waarde": "1",
                            "regels": 1,
                            "omschrijving": "",
                            "icon": "check-square"
                        }, {
                            "type": "bijlage",
                            "label": "Bijlage",
                            "waarde": "Factuur 20160001.pdf",
                            "regels": 1,
                            "omschrijving": "",
                            "icon": "file"
                        }
                    ]
                }, {
                    "omschrijving": "Algemeen",
                    "velden": [{
                            "type": "tekst",
                            "label": "Label",
                            "waarde": "Omschrijving",
                            "regels": 1,
                            "omschrijving": ""
                        }
                    ],
                    "icon": "wpforms"
                }
            ],
            "edit": true
        };
        dragulaService.setOptions('bag-one', {
            copy: function (el, source) {
                return el.className === 'copy-me';
            }
        });
        dragulaService.setOptions('bag-webpart', {
            moves: function (el, source, handle, sibling) {
                return handle.classList.contains('headertext') || el.className === 'copy-me';
            },
            copy: function (el, source) {
                return el.className === 'copy-me';
            }
        });
        //ophalen van stylesheet en javascript InSite of OutSite
        if (this.getParameterByName("dataurl") !== "0") {
            http.get(this.getParameterByName("dataurl") + "?callback=JSON_CALLBACK")
                .map(this.extractData)
                .subscribe(this.appendTohead);
        }
    }
    AppComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    //change listener voor upload van JSON definitie
    AppComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    AppComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.pagina = JSON.parse(myReader.result);
        };
        myReader.readAsText(file);
    };
    //ondersteunende functies voor ophalen van CSS stylesheet InSite
    AppComponent.prototype.extractData = function (res) {
        var body = res.text().split("(")[1];
        body = body.substring(0, body.length - 1);
        body = JSON.parse(body);
        return body || {};
    };
    AppComponent.prototype.appendTohead = function (res) {
        var neutralStyleSheet = res.cssUrl.replace("integration", "neutraal");
        var ss = document.createElement("link");
        var js = document.createElement("script");
        ss.type = "text/css";
        ss.rel = "stylesheet";
        ss.href = neutralStyleSheet;
        document.getElementsByTagName("head")[0].appendChild(ss);
        js.src = res.scriptUrl;
        document.getElementsByTagName("head")[0].appendChild(js);
    };
    AppComponent.prototype.getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results === null)
            return "0";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, ng2_dragula_1.DragulaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map