(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page {\r\n  margin: auto;\r\n  max-width: 250mm;\r\n  padding: 10px;\r\n}\r\n\r\nheader {\r\n  text-align: center;\r\n  margin-bottom: 3mm;\r\n}\r\n\r\nh1 {\r\n  margin: 1mm 0;\r\n}\r\n\r\nh2 {\r\n  margin: 1mm 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAyNTBtbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzbW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDFtbSAwO1xyXG59XHJcbmgyIHtcclxuICBtYXJnaW46IDFtbSAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"page\">\r\n  <header>\r\n      <h1>\r\n        {{title}}\r\n      </h1>\r\n      <h2>\r\n        the Angular test project\r\n      </h2>\r\n  </header>\r\n\r\n  <app-converter></app-converter>\r\n\r\n  <footer>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Currency converter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _converter_converter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./converter/converter.component */ "./src/app/converter/converter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _converter_converter_component__WEBPACK_IMPORTED_MODULE_5__["ConverterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/converter/converter.component.css":
/*!***************************************************!*\
  !*** ./src/app/converter/converter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inputBox {\r\n  text-align: center;\r\n  margin: auto;\r\n  max-width: 200mm;\r\n}\r\n\r\n#explanation {\r\n  font-style: italic;\r\n}\r\n\r\n#searchBar { /* Safari/Chrome, other WebKit */    /* Firefox, other Gecko */\r\n  box-sizing: border-box;         /* Opera/IE 8+ */\r\n  height: inherit;\r\n  width: inherit;\r\n  min-width: 50mm;\r\n  padding: 1mm 2mm 1mm 2mm;\r\n  border: 1px solid grey;\r\n  border-radius: 2mm;\r\n  font-size: 5mm;\r\n}\r\n\r\n#resultBox {\r\n  text-align: center;\r\n  margin: auto;\r\n  max-width: 200mm;\r\n  padding: 3mm 2mm 1mm 2mm;\r\n}\r\n\r\n#currencyOrigin {\r\n  text-align: left;\r\n  font-size: 7mm;\r\n}\r\n\r\nli {\r\n  text-align: right;\r\n  font-size: 6mm;\r\n  padding: 1mm;\r\n  border-radius: 3mm;\r\n  list-style-type: none;\r\n}\r\n\r\nli:hover {\r\n  background-color: #eee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udmVydGVyL2NvbnZlcnRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsYUFDa0MsZ0NBQWdDLEtBQ2hDLHlCQUF5QjtFQUN6RCxzQkFBc0IsVUFBVSxnQkFBZ0I7RUFDaEQsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbnZlcnRlci9jb252ZXJ0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnB1dEJveCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDIwMG1tO1xyXG59XHJcblxyXG4jZXhwbGFuYXRpb24ge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuI3NlYXJjaEJhciB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgICAgICAvKiBPcGVyYS9JRSA4KyAqL1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBtaW4td2lkdGg6IDUwbW07XHJcbiAgcGFkZGluZzogMW1tIDJtbSAxbW0gMm1tO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMm1tO1xyXG4gIGZvbnQtc2l6ZTogNW1tO1xyXG59XHJcblxyXG4jcmVzdWx0Qm94IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMjAwbW07XHJcbiAgcGFkZGluZzogM21tIDJtbSAxbW0gMm1tO1xyXG59XHJcblxyXG4jY3VycmVuY3lPcmlnaW4ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiA3bW07XHJcbn1cclxuXHJcbmxpIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXNpemU6IDZtbTtcclxuICBwYWRkaW5nOiAxbW07XHJcbiAgYm9yZGVyLXJhZGl1czogM21tO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxubGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/converter/converter.component.html":
/*!****************************************************!*\
  !*** ./src/app/converter/converter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"inputBox\" class=\"row\">\r\n  <p id=\"explanation\">Write the amount and the currency code. For example \"100 USD\"</p>\r\n  <input id=\"searchBar\" [(ngModel)]=\"search\" placeholder=\"type here...\" (keyup)=\"smartSearch(search)\" autofocus>\r\n</div>\r\n\r\n<div id=\"resultBox\" class=\"row\">\r\n  <div *ngIf=\"conversionResult.length > 0\" id=\"currencyOrigin\">\r\n    {{conversionResult[0].value}} {{conversionResult[0].code | uppercase}} =\r\n  </div>\r\n  <li *ngFor=\"let result of conversionResult | slice:1 \" (click)=\"onSelect(result)\">\r\n    {{result.value | currency: result.code}}\r\n  </li>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/converter/converter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/converter/converter.component.ts ***!
  \**************************************************/
/*! exports provided: ConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterComponent", function() { return ConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../currency.service */ "./src/app/currency.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ConverterComponent = /** @class */ (function () {
    function ConverterComponent(currencyService) {
        this.currencyService = currencyService;
        this.rates = [];
        this.conversionResult = [];
    }
    ConverterComponent.prototype.ngOnInit = function () {
        // Add the CZK
        this.rates = this.rates.concat({
            country: 'Česká Republika',
            currency: 'koruna',
            amount: 1,
            code: 'CZK',
            rate: 1
        });
        // Get the data
        this.getCurrencyRates();
    };
    ConverterComponent.prototype.onSelect = function (result) {
        this.search = result.value + ' ' + result.code;
        this.smartSearch(this.search);
    };
    ConverterComponent.prototype.getCurrencyRates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    /* Gets the currency rate data from the service */
                    return [4 /*yield*/, this.currencyService.getCurrencyRates()
                            .subscribe(function (data) {
                            _this.rates = _this.rates.concat(data);
                        }, function (err) {
                            console.log('Could not load Currency Rates Data \n', err.message);
                        })];
                    case 1:
                        /* Gets the currency rate data from the service */
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConverterComponent.prototype.smartSearch = function (search) {
        var convert = {
            from: null,
            to: null,
            value: 0,
        };
        if (search) {
            var numberToConvert = void 0;
            // Delete the previous results
            this.conversionResult = [];
            // Set searched currency as conversion origin
            convert.from = this.getRateByCode(search);
            // Find a numeric value and convert it to a number; also replace decimal comma by a dot
            var valueToConvert = search.replace(/,/g, '.').match(/\d+((\.)\d{1,2})?/g);
            if (valueToConvert) {
                numberToConvert = +valueToConvert[0];
            }
            // Check to see if both a value and a currency have been found
            if (convert.from && numberToConvert) {
                convert.value = numberToConvert;
                this.convertAll(convert);
            }
            else {
                // In case the search conditions are not met or the term is deleted, empty the result
                this.emptyResults();
            }
        }
        else {
            this.emptyResults();
        }
    };
    ConverterComponent.prototype.getRateByCode = function (code) {
        // Return the currency rate class that is suitable to the imput code (i.e. "USD")
        code = code.trim() // Remove whitespace
            .toUpperCase() // Currency codes are stored as uppercase
            .match(/[a-zA-Z ]*/g) // Filter characters only
            .join('') // Join array of matched strings
            .slice(0, 5); // Use only the first 5 letters to filter out mutiple curency codes
        return this.rates.find(function (value) {
            return code.indexOf(value.code) >= 0;
        });
    };
    ConverterComponent.prototype.convertAll = function (convert) {
        this.conversionResult.push({
            value: convert.value.toFixed(2),
            code: convert.from.code,
            currencyName: ''
        });
        // Convert to all the possible currencies found in this.rates
        for (var i = 0; i < this.rates.length - 1; i++) {
            if (this.rates[i].code !== convert.from.code) {
                convert.to = this.rates[i];
                this.conversionResult.push({
                    value: this.convertOne(convert).toFixed(2),
                    code: convert.to.code,
                    currencyName: ''
                });
            }
        }
    };
    ConverterComponent.prototype.convertOne = function (convert) {
        // Do a conversion according to values set in this.convert
        var that = convert;
        var result;
        result = that.value / that.from.amount * that.from.rate;
        // Convert from origin ('.from') to CZK
        if (that.to.code !== 'CZK') {
            // Convert from CZK to target ('.to')
            result = result * that.to.amount / that.to.rate;
        }
        return result;
    };
    ConverterComponent.prototype.emptyResults = function () {
        this.conversionResult = [];
    };
    ConverterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-converter',
            template: __webpack_require__(/*! ./converter.component.html */ "./src/app/converter/converter.component.html"),
            styles: [__webpack_require__(/*! ./converter.component.css */ "./src/app/converter/converter.component.css")]
        }),
        __metadata("design:paramtypes", [_currency_service__WEBPACK_IMPORTED_MODULE_1__["CurrencyService"]])
    ], ConverterComponent);
    return ConverterComponent;
}());



/***/ }),

/***/ "./src/app/currency.service.ts":
/*!*************************************!*\
  !*** ./src/app/currency.service.ts ***!
  \*************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this._ratesUrl = '/api/rates';
    }
    CurrencyService.prototype.getCurrencyRates = function () {
        return this.http.get(this._ratesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
        // rates => console.log('fetched rates'),
        // error => console.log(error || 'Server Error')
        ));
    };
    CurrencyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\Other\currency-converter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map