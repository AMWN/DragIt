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
var pagina_service_1 = require('./services/pagina.service');
var webpart_component_1 = require('./webpart.component');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var slideout_component_1 = require('./slideout.component');
var generatedownloadurl_pipe_1 = require('./pipes/generatedownloadurl.pipe');
var AppComponent = (function () {
    function AppComponent(http, window, paginaService, dragulaService) {
        this.paginaService = paginaService;
        this.dragulaService = dragulaService;
        this.pagina = {};
        http.get(this.getParameterByName("dataurl") + "?callback=JSON_CALLBACK")
            .map(this.extractData)
            .subscribe(this.appendTohead);
        dragulaService.setOptions('bag-webpart', {
            moves: function (el, source, handle, sibling) {
                console.log('move wp');
                console.log(el, source, handle, sibling);
                return handle.classList.contains('headertext') || el.className === 'copy-me';
            },
            copy: function (el, source) {
                return el.className === 'copy-me';
            }
        });
    }
    AppComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
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
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paginaService.getPagina().subscribe(function (data) { return _this.pagina = data; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [webpart_component_1.webpartComponent, ng2_dragula_1.Dragula, slideout_component_1.slideoutComponent],
            viewProviders: [ng2_dragula_1.DragulaService, pagina_service_1.PaginaService],
            pipes: [generatedownloadurl_pipe_1.generateDownloadurl]
        }), 
        __metadata('design:paramtypes', [http_1.Http, Window, pagina_service_1.PaginaService, ng2_dragula_1.DragulaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map