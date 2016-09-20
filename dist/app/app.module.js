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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var components_1 = require('angular2-fontawesome/components');
var pagina_service_1 = require('./services/pagina.service');
var webpart_component_1 = require('./webpart.component');
var slideout_component_1 = require('./slideout.component');
var generatedownloadurl_pipe_1 = require('./pipes/generatedownloadurl.pipe');
var datum_component_1 = require('./controls/datum.component');
var tekst_component_1 = require('./controls/tekst.component');
var nummer_component_1 = require('./controls/nummer.component');
var url_component_1 = require('./controls/url.component');
var memo_component_1 = require('./controls/memo.component');
var bijlage_component_1 = require('./controls/bijlage.component');
var janee_component_1 = require('./controls/janee.component');
var url2_component_1 = require('./controls/url2.component');
var core_2 = require('@angular/core');
core_2.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent,
                components_1.FaComponent,
                generatedownloadurl_pipe_1.generateDownloadurl,
                webpart_component_1.webpartComponent,
                slideout_component_1.slideoutComponent,
                datum_component_1.datumComponent,
                tekst_component_1.tekstComponent,
                nummer_component_1.nummerComponent,
                url_component_1.urlComponent,
                url2_component_1.url2Component,
                memo_component_1.memoComponent,
                bijlage_component_1.bijlageComponent,
                janee_component_1.janeeComponent
            ],
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, ng2_dragula_1.DragulaModule, forms_1.FormsModule],
            providers: [pagina_service_1.PaginaService, Window],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map