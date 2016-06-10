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
var pagina_service_1 = require('./pagina.service');
var webpart_component_1 = require('./webpart.component');
var AppComponent = (function () {
    function AppComponent(http, window, paginaService) {
        this.paginaService = paginaService;
        this.pagina = {};
        this.pagina2 = {};
        var getParameterByName = function (name) {
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
            .subscribe(this.appendTohead);
    }
    AppComponent.prototype.onClickMe = function ($event) {
        var page = document.getElementById("textarea1").value;
        this.pagina = JSON.parse(page.substring(0, page.length - 1));
    };
    AppComponent.prototype.changeListener = function ($event) {
        this.readThis($event.target);
    };
    AppComponent.prototype.readThis = function (inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            this.pagina = myReader.result;
            //document.getElementById("textarea1").value = this.pagina;
            console.log(JSON.parse(this.pagina));
        };
        myReader.readAsText(file);
    };
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
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paginaService.getPagina().subscribe(function (data) { return _this.pagina = data; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <!--Begin Pagina-->\n      <!--Begin titel-->\n\t\t<div class=\"part pagetitle clear\">\n\t\t\t<div class=\"content\">\n\t\t\t\t<h1>\n\t\t\t\t\t{{pagina.titel}}\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Eind titel-->\n\t\t<!--Begin omschrijving-->\n\t\t<div class=\"part processsubtitle clear\">\n\t\t\t<div class=\"content\">\n\t\t\t\t{{pagina.omschrijving}}\n\t\t\t</div>\n\t\t</div>\n\t\t<!--Eind omschrijving-->\n      <div class=\"part clear\" style=\"padding:0px 0px 10px 0px;\">\n        <webpart *ngFor='let webpart of pagina.webparts' [webpart]=\"webpart\">\n        </webpart>\n      <div class=\"partheader\" style=\"height:25px;white-space:nowrap;\">\n\n\n        <h2 class=\"headertext\">\n          Pagina definitie\n        </h2>\n      </div>\n      <div class=\"content\">\n        <table class=\"properties\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n          <tbody>\n          <div class=\"content\">\n            <table class=\"properties\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n              <tbody>\n                <tr>\n                  <td class=\"label\" valign=\"top\">\n                    <label style=\"white-space:nowrap;\">Definitie JSON</label>\n                  </td>\n                  <td class=\"value valuerows0\" valign=\"top\">\n                    <div>\n                    <textarea id=\"textarea1\" style=\" width: 95%; height: 300px \">{{pagina | json}}}</textarea>\n                    <input type=\"file\" (change)=\"changeListener($event)\">\n                    <button (click)=\"onClickMe($event)\">Save</button>\n\n                    </div>\n                  </td>\n                </tr>\n            </tbody>\n        </table>\n      </div>\n      </tbody>\n      </table>\n    </div>\n    </div>\n    <div *ngIf=\"errorMessage\" class=\"error\">{{errorMessage}}</div>\n    ",
            directives: [webpart_component_1.webpartComponent],
            providers: [pagina_service_1.PaginaService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, Window, pagina_service_1.PaginaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map