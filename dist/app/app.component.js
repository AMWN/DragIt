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
var startpage_1 = require('./startpage');
var http_2 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent(http, dragulaService, jsonp) {
        this.jsonp = jsonp;
        this.pagina = startpage_1.Pagina;
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
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //ophalen van stylesheet en javascript InSite of OutSite
        if (this.getParameterByName("dataurl") !== "0") {
            this.jsonp
                .get(this.getParameterByName("dataurl") + "?callback=JSONP_CALLBACK")
                .map(function (response) { return response.json(); })
                .subscribe(function (data) { return _this.appendTohead(data); });
        }
    };
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
        __metadata('design:paramtypes', [http_1.Http, ng2_dragula_1.DragulaService, http_2.Jsonp])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map