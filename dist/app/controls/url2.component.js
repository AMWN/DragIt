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
var url2Component = (function () {
    function url2Component() {
        this.onDelete = new core_1.EventEmitter();
    }
    url2Component.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    url2Component.prototype.deleteVeld = function (veld) {
        this.onDelete.emit(veld);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], url2Component.prototype, "veld", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], url2Component.prototype, "pagina", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], url2Component.prototype, "onDelete", void 0);
    url2Component = __decorate([
        core_1.Component({
            selector: 'url2',
            templateUrl: 'app/controls/url2.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], url2Component);
    return url2Component;
}());
exports.url2Component = url2Component;
//# sourceMappingURL=url2.component.js.map