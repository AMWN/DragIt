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
var datumComponent = (function () {
    function datumComponent() {
    }
    datumComponent = __decorate([
        core_1.Component({
            selector: 'datum-veld',
            template: "<!--Datum control-->\n  <tr>\n    <td class=\"label\" valign=\"top\">\n      <label style=\"white-space:nowrap;\">Datum</label>\n    </td>\n    <td class=\"value valuerows0\" valign=\"top\">\n      <div>\n        <span title=\"Instuurdatum\">01-01-1970 00:00</span>\n      </div>\n    </td>\n  </tr><!--Datum control-->"
        }), 
        __metadata('design:paramtypes', [])
    ], datumComponent);
    return datumComponent;
}());
exports.datumComponent = datumComponent;
//# sourceMappingURL=datum.component.js.map