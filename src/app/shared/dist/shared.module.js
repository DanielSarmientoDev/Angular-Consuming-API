"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var animations_1 = require("@angular/platform-browser/animations");
var toolbar_1 = require("@angular/material/toolbar");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [header_component_1.HeaderComponent, footer_component_1.FooterComponent],
            imports: [common_1.CommonModule, animations_1.BrowserAnimationsModule, toolbar_1.MatToolbarModule],
            exports: [header_component_1.HeaderComponent, common_1.CommonModule, footer_component_1.FooterComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
