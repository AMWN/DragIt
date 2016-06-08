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
        this.paginaService.getPagina().subscribe(function (data) { return _this.pagina = data; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{pagina.titel}}</h1>\n      <!--Begin Pagina-->\n      <div class=\"part clear\" style=\"padding:0px 0px 10px 0px;\">\n        <webpart *ngFor='let webpart of pagina.webparts' [webpart]=\"webpart\">\n        </webpart>\n      </div>\n      <pre>{{pagina | json}}</pre>\n    ",
            directives: [webpart_component_1.webpartComponent],
            providers: [pagina_service_1.PaginaService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, Window, pagina_service_1.PaginaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map