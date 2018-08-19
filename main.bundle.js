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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"header-wrap\">\n    Demo\n  </div>\n  <router-outlet></router-outlet>\n</div>"

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
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surgical_surgical_component__ = __webpack_require__("./src/app/surgical/surgical.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    {
        path: 'index',
        component: __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'surgical',
        component: __WEBPACK_IMPORTED_MODULE_5__surgical_surgical_component__["a" /* SurgicalComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_5__surgical_surgical_component__["a" /* SurgicalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view-container\">\n  <div class=\"section-left\">      \n    <ul>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Assign Passwords and Maintain Database Access</li>\n      <li class=\"over-here\" link=\"https://www.computerhope.com/jargon/a/agile-development-methods.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Agile Development</li>\n      <li class=\"over-here\" link=\"https://www.techmaish.com/wp-content/uploads/2017/05/agile-project-management.png\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Agile Project Methodology</li>\n      <li class=\"over-here\" link=\"https://www.iserveradmin.com/wp-content/uploads/2017/05/aws-cloud-computing.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Amazon Web Services (AWS)</li>\n      <li class=\"over-here\" link=\"https://edkentmedia.com/wp-content/uploads/2017/08/web-marketing-analytics.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analytics</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analytical</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analyze and Recommend Database Improvements</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analyze Impact of Database Changes to the Business</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Audit Database Access and Requests</li>\n      <li class=\"over-here\" link=\"http://dselva.co.in/blog/wp-content/uploads/2017/09/Web-APIs.png\" desc=\"a set of functions and procedures that allow the creation of applications which access the features or data of an operating system, application, or other service.\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">APIs</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Application and Server Monitoring Tools</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Applications</li>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Application Development</li>\n    </ul>      \n  </div>\n  <div class=\"section-right\">\n    <img src=\"{{imgUrl}}\" class=\"over-image\" *ngIf=\"imgUrl\">\n    <div class=\"over-data\" *ngIf=\"description\">\n      <span>Description :</span>\n      <span>{{description}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.onDataOver = function (event) {
        var vm = this;
        vm.imgUrl = event.target.attributes.link.value;
        vm.description = event.target.attributes.desc.value;
    };
    MainComponent.prototype.onClear = function () {
        var vm = this;
        vm.description = '';
        vm.imgUrl = null;
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/surgical/surgical.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/surgical/surgical.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view-container\">\n  <div class=\"section-left\">\n    <p>Amazon prohibits hypodermic needles. A hypodermic needle is a hollow needle commonly used with a syringe to inject substances into the body or extract fluids from it. They may also be used to take liquid samples from the body, for example taking blood from a vein in venipuncture. Large bore hypodermic intervention is especially useful in catastrophic blood loss or shock. It is at times difficult to tell whether the product contains a needle intended to pierce the skin.  You may need to view the products image in order to determine if the product contains a needle and, therefore, should be restricted.</p>\n    <h4>RESTRICT:</h4>\n    <ol>\n      <li class=\"over-here\" link=\"http://omnisurge.co.za/wp-content/uploads/2015/04/hypodermic-38.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Hypodermic needles</li>\n      <li class=\"over-here\" link=\"http://www.medicore.com/images/PenNeedleCorePage3.png\" desc=\"An insulin pen is composed of an insulin cartridge that can either be part of the pen or bought separately, a dial that measures the dose and a pen needle that delivers the dose\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Insulin pen needles</li>\n    </ol>\n\n    <h4>PLEASE ALSO RESTRICT:</h4>\n    <ol>\n      <li>If the detail page indicates a needle is for \"professional use only\" then should RESTRICT regardless of marketing</li>\n      <li><span class=\"over-here\" link=\"https://www.healthykin.com/images/Product/large/4634.jpg\" desc=\"Often used to collect blood.\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Vacutainer Brand Eclipse Blood Collection Needles</span> (e.g.B01DME1PAY)</li>\n      <li><span class=\"over-here\" link=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl46TCSFCdUW0jhnFIXZgzUHjgoG9eJ2nDTu4v3AQ6CfZY54eu\" desc=\"Used for filtering medications that are drawn into a syringe before administration\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Filter needles</span> (e.g., B00XZD7OK8)</li>\n      <li>Products that identify as <span class=\"over-here\" link=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvH8Vk0NPju-cZfmxKLk9tCQT84tubm4bnwRrm6wmrC-7zilMrw\" desc=\"Consist of a hollow needle attached to a syringe. They are also used to extract liquid such as blood from the body\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">\"hypodermic dispensing needles\"</span> (eg. B01HZWS1NS, B01HQF3G84)</li>\n      <li>Exel Comfortpoint Insulin Pen Needle</li>\n      <li><span class=\"over-here\" link=\"http://www.buykorea.org/images/files_new/mp/gd/2015/01/22/20150122171840526_025_RE.JPG\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Feel Fine Insulin Pen Needle</span> (e.g. B016BJESGK)</li>\n      <li><span class=\"over-here\" link=\"http://img.weiku.com/waterpicture/2011/6/22/22/Insulin_pen_needle_FINE_JECT_634446015931573303.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Fine Ject Insulin</span> Pen Needle manufactured by Twobiens (http://wk101203755.company.weiku.com/item/Insulin-pen-needle-FINE-JECT-4014581.html)</li>\n      <li>ShinaPen</li>\n      <li><span class=\"over-here\" link=\"http://web.tradekorea.com/product/226/1718226/insulin%20pen%20needle_pen%20needle_needle_sungshim%20pen%20needle_1.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Sungshim Insulin Pen Needle</span> (https://sungmedi.en.ec21.com/Insulin-Pen-Needle--10042530_10042570.html)</li>\n      <li>JSM Insulin Pen Needle</li>\n      <li>CPL Insulin Pen Needle</li>\n      <li>Tuberculin (TB) needles sold without a syringe (if sold with a tuberculin syringe please see okay for sale section)</li>\n    </ol>\n\n    <!-- <ul>\n      <li link=\"\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Assign Passwords and Maintain Database Access</li>\n      <li class=\"over-here\" link=\"https://www.computerhope.com/jargon/a/agile-development-methods.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Agile Development</li>\n      <li class=\"over-here\" link=\"https://www.techmaish.com/wp-content/uploads/2017/05/agile-project-management.png\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Agile Project Methodology</li>\n      <li class=\"over-here\" link=\"https://www.iserveradmin.com/wp-content/uploads/2017/05/aws-cloud-computing.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Amazon Web Services (AWS)</li>\n      <li class=\"over-here\" link=\"https://edkentmedia.com/wp-content/uploads/2017/08/web-marketing-analytics.jpg\" desc=\"\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">Analytics</li>\n      <li class=\"over-here\" link=\"http://dselva.co.in/blog/wp-content/uploads/2017/09/Web-APIs.png\" desc=\"a set of functions and procedures that allow the creation of applications which access the features or data of an operating system, application, or other service.\" (mouseenter)=\"onDataOver($event)\" (mouseleave)=\"onClear()\">APIs</li>\n    </ul>       -->\n  </div>\n  <div class=\"section-right\">\n    <img src=\"{{imgUrl}}\" class=\"over-image\" *ngIf=\"imgUrl\">\n    <div class=\"over-data\" *ngIf=\"description\">\n      <span>Description :</span>\n      <span>{{description}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/surgical/surgical.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgicalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SurgicalComponent = /** @class */ (function () {
    function SurgicalComponent() {
    }
    SurgicalComponent.prototype.onDataOver = function (event) {
        var vm = this;
        vm.imgUrl = event.target.attributes.link.value;
        vm.description = event.target.attributes.desc.value;
    };
    SurgicalComponent.prototype.onClear = function () {
        var vm = this;
        vm.description = '';
        vm.imgUrl = null;
    };
    SurgicalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-surgical',
            template: __webpack_require__("./src/app/surgical/surgical.component.html"),
            styles: [__webpack_require__("./src/app/surgical/surgical.component.css")]
        })
    ], SurgicalComponent);
    return SurgicalComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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