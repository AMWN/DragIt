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
var webpartComponent = (function () {
    function webpartComponent() {
    }
    webpartComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    webpartComponent.prototype.eventDelete = function (velden, veld) {
        var index = velden.findIndex(function (x) { return x == veld; });
        velden.splice(index, 1);
    };
    webpartComponent.prototype.onDelete = function (veld) {
        console.log(veld);
        var index = this.webpart.velden.findIndex(function (x) { return x == veld; });
        this.webpart.velden.splice(index, 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], webpartComponent.prototype, "webpart", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], webpartComponent.prototype, "pagina", void 0);
    webpartComponent = __decorate([
        core_1.Component({
            selector: 'webpart',
            templateUrl: 'app/webpart.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], webpartComponent);
    return webpartComponent;
}());
exports.webpartComponent = webpartComponent;
//# sourceMappingURL=webpart.component.js.map