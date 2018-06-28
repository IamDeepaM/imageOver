webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page-container {\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n\n.header-wrap {\n    min-height: 20px;\n    background: #37474F;\n    color: #fff;\n    font-size: 20px;\n    padding: 8px 0 10px 5px;\n    line-height: 1;\n}\n\n.view-container {\n    width: 100vw;\n    height: calc(100vh - 20px);\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.section-left {\n    width: 48%;\n}\n\n.section-right {\n    width: 48%;\n}\n\n.over-here {\n    display: inline-block;\n    border-bottom: 1px dashed #000;\n}\n\n.over-image {\n    width: 80%;\n    height: auto;\n    margin: 0 auto 10px;\n    display: block;\n}\n\n.over-data {\n    font-size: 16px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.over-data span {\n    display: block;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"header-wrap\">\n    Demo\n  </div>\n  <div class=\"view-container\">\n    <div class=\"section-left\">      \n      <ul>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Assign Passwords and Maintain Database Access</li>\n        <li link=\"https://www.computerhope.com/jargon/a/agile-development-methods.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Agile Development</li>\n        <li link=\"https://www.techmaish.com/wp-content/uploads/2017/05/agile-project-management.png\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Agile Project Methodology</li>\n        <li link=\"https://www.iserveradmin.com/wp-content/uploads/2017/05/aws-cloud-computing.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Amazon Web Services (AWS)</li>\n        <li link=\"https://edkentmedia.com/wp-content/uploads/2017/08/web-marketing-analytics.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analytics</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analytical</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analyze and Recommend Database Improvements</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analyze Impact of Database Changes to the Business</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Audit Database Access and Requests</li>\n        <li link=\"http://dselva.co.in/blog/wp-content/uploads/2017/09/Web-APIs.png\" desc=\"a set of functions and procedures that allow the creation of applications which access the features or data of an operating system, application, or other service.\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">APIs</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Application and Server Monitoring Tools</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Applications</li>\n        <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Application Development</li>\n      </ul>      \n    </div>\n    <div class=\"section-right\">\n      <img src=\"{{imgUrl}}\" class=\"over-image\" *ngIf=\"imgUrl\">\n      <div class=\"over-data\" *ngIf=\"description\">\n        <span>Description :</span>\n        <span>{{description}}</span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onDataOver = function (event) {
        var vm = this;
        vm.imgUrl = event.target.attributes.link.value;
        vm.description = event.target.attributes.desc.value;
    };
    AppComponent.prototype.onClear = function () {
        var vm = this;
        vm.description = '';
        vm.imgUrl = null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map