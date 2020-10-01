(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+MIp":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-articles/list/list.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2 class=\"title-block\">Articles</h2>\r\n  <div class=\"horizontal-thumb two-col\">\r\n    <a [routerLink]=\"['/cat-articles/article-1']\" class=\"img-thumb\">\r\n      <img src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-11/Friendliest%20cat%20breeds%201.jpg\" alt=\"The Most Affectionate and Friendliest Cat Breeds\" class=\"img-thumb_img\">\r\n    </a>\r\n    <div class=\"horizontal-thumb-desc\">\r\n      <a [routerLink]=\"['/cat-articles/article-1']\" class=\"horizontal-thumb-desc_title\">\r\n        <h3>The Most Affectionate and Friendliest Cat Breeds</h3>\r\n      </a>\r\n      <p class=\"horizontal-thumb-desc_txt\">We’re often relieved to see the friendly side of our feline companions, but did you know that some breeds show it off more often than others? Here are some of the friendliest cat breeds you can wish for.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"horizontal-thumb two-col\">\r\n    <a [routerLink]=\"['/cat-articles/article-2']\" class=\"img-thumb\">\r\n      <img src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-08/Cat%20Eating%20From%20Bowl%20Banner%20Photo_0.jpg\" alt=\"5 Reasons Why Cats Meow\" class=\"img-thumb_img\">\r\n    </a>\r\n    <div class=\"horizontal-thumb-desc\">\r\n      <a [routerLink]=\"['/cat-articles/article-2']\" class=\"horizontal-thumb-desc_title\">\r\n        <h3>5 Reasons Why Cats Meow</h3>\r\n      </a>\r\n      <p class=\"horizontal-thumb-desc_txt\">Whether you enjoy a soothing meow every now and then or you’re growing impatient with all your cat’s attempts to make conversation, the reasons why cats meow are just as fascinating as the kittens themselves. Find out more here.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"horizontal-thumb two-col\">\r\n    <a [routerLink]=\"['/cat-articles/article-3']\" class=\"img-thumb\">\r\n      <img src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-11/Friendliest%20cat%20breeds%201.jpg\" alt=\"The Most Affectionate and Friendliest Cat Breeds\" class=\"img-thumb_img\">\r\n    </a>\r\n    <div class=\"horizontal-thumb-desc\">\r\n      <a [routerLink]=\"['/cat-articles/article-3']\" class=\"horizontal-thumb-desc_title\">\r\n        <h3>The Most Affectionate and Friendliest Cat Breeds</h3>\r\n      </a>\r\n      <p class=\"horizontal-thumb-desc_txt\">We’re often relieved to see the friendly side of our feline companions, but did you know that some breeds show it off more often than others? Here are some of the friendliest cat breeds you can wish for.</p>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MyProjects\Angular\gallery\src\main.ts */"zUnb");


/***/ }),

/***/ "0OIl":
/*!**************************************************!*\
  !*** ./src/app/user-cats/user-cats.component.ts ***!
  \**************************************************/
/*! exports provided: UserCatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCatsComponent", function() { return UserCatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_cats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-cats.component.html */ "gB/o");
/* harmony import */ var _user_cats_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-cats.component.scss */ "NW/4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "yTNM");





var UserCatsComponent = /** @class */ (function () {
    function UserCatsComponent(apiService) {
        this.apiService = apiService;
        this.userID = sessionStorage.getItem("LoggedInUser");
        this.user = [];
        this.cats = [];
        this.catsItems = [];
        this.ownCats = [];
    }
    UserCatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsersById(this.userID).subscribe(function (user) {
            _this.user = user;
            if (_this.user.own_cats) {
                _this.ownCats = _this.user.own_cats;
                for (var _i = 0, _a = _this.ownCats; _i < _a.length; _i++) {
                    var o_cI = _a[_i];
                    _this.apiService.getCatsById(o_cI.breed_id, o_cI.id).subscribe(function (cats) {
                        _this.cats = cats;
                        _this.catsItems.push(cats);
                    });
                }
            }
        });
    };
    UserCatsComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    UserCatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-cats',
            template: _raw_loader_user_cats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_cats_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], UserCatsComponent);
    return UserCatsComponent;
}());



/***/ }),

/***/ "0yI1":
/*!*****************************************************!*\
  !*** ./src/app/cat-articles/list/list.component.ts ***!
  \*****************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.component.html */ "+MIp");
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component.scss */ "hoQi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.ctorParameters = function () { return []; };
    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "1+bU":
/*!*************************************************!*\
  !*** ./src/app/breeds/breed/breed.component.ts ***!
  \*************************************************/
/*! exports provided: BreedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreedComponent", function() { return BreedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_breed_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./breed.component.html */ "Pptx");
/* harmony import */ var _breed_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breed.component.scss */ "GZ6N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api.service */ "yTNM");






var BreedComponent = /** @class */ (function () {
    function BreedComponent(actRoute, apiService) {
        this.actRoute = actRoute;
        this.apiService = apiService;
    }
    BreedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.actRoute.snapshot.params['id'];
        this.apiService.getAllCats().subscribe(function (breeds) {
            _this.breeds = breeds.find(function (item) { return (item.id === _this.id); });
        });
    };
    BreedComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
    ]; };
    BreedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-breed',
            template: _raw_loader_breed_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_breed_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], BreedComponent);
    return BreedComponent;
}());



/***/ }),

/***/ "17HW":
/*!************************************************!*\
  !*** ./src/app/album/list/list.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  padding: 15px;\n  background-color: #444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbGJ1bS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "3tRt":
/*!*****************************************!*\
  !*** ./src/app/createEdit-cat/index.ts ***!
  \*****************************************/
/*! exports provided: createEditCatComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditCatComponents", function() { return createEditCatComponents; });
/* harmony import */ var _create_create_cat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create/create-cat.component */ "wHZH");

var createEditCatComponents = [
    _create_create_cat_component__WEBPACK_IMPORTED_MODULE_0__["CreateCatComponent"],
];


/***/ }),

/***/ "5yk5":
/*!**********************************************************!*\
  !*** ./src/app/album-filter/album-filter.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".album-filters {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0tZmlsdGVyL2FsYnVtLWZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbGJ1bS1maWx0ZXIvYWxidW0tZmlsdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYnVtLWZpbHRlcnMge1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "7UCR":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "yJqC");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "KX+F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-svg-icon-sprite */ "xLfj");







var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_6__["IconSpriteModule"]
            ],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "7jLF":
/*!*************************************************************!*\
  !*** ./src/app/createEdit-cat/edit/edit-cat.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZUVkaXQtY2F0L2VkaXQvZWRpdC1jYXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "9Vco":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar-profile/sidebar-profile.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"leftColumn\">\r\n    <div class=\"sidebar-profile\">\r\n      <div class=\"circle-img\">\r\n        <img *ngIf=\"userImg\" src=\"{{ userImg }}\" alt=\"{{ username }}\">\r\n        <img *ngIf=\"!userImg\" src=\"../assets/img/default.png\" alt=\"{{ username }}\" width=\"92\" height=\"92\">\r\n      </div>\r\n      <div class=\"sidebar-profile-name\">\r\n        <p class=\"name\">{{ username }}</p>\r\n        <a [routerLink]=\"['/profile']\" class=\"btn primary-btn\">Change profile</a>\r\n      </div>\r\n      <div class=\"end-btn\">\r\n        <a (click)=\"auth.logout()\" class=\"btn primary-btn\">\r\n          <span class=\"icon\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#logout'\" [width]=\"'20px'\" [height]=\"'20px'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite></span>\r\n          Logout\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <ul class=\"sidebar-list\">\r\n      <li class=\"sidebar-list-item\"><a [routerLink]=\"['/my-cats']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">My cats</a></li>\r\n      <li class=\"sidebar-list-item\"><a [routerLink]=\"['/create-cat']\" routerLinkActive=\"active\">Create cat</a></li>\r\n      <li class=\"sidebar-list-item\"><a [routerLink]=\"['/favourite-cats']\" routerLinkActive=\"active\">Favourite cats</a></li>\r\n    </ul>\r\n    <div class=\"slider\"><div class=\"indicator\"></div></div>\r\n\r\n</div>");

/***/ }),

/***/ "9v8f":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user/user.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-user\">\r\n  <div class=\"two-col\">\r\n    <div class=\"user-img circle-img\">\r\n      <img *ngIf=\"user.img\" src=\"{{user.img}}\" alt=\"{{ user.username }}\">\r\n      <img *ngIf=\"!user.img\" src=\"../assets/img/default.png\" alt=\"\" width=\"200\" height=\"200\">\r\n    </div>\r\n    <div class=\"block-desc\">\r\n      <h2 class=\"title-block\">{{ user.username }}</h2>\r\n      <p class=\"block-info\"> <span class=\"type\">Name:</span> <span>{{ user.name }}</span></p>\r\n      <p class=\"block-info\"> <span class=\"type\">Email:</span> <a href=\"mailto:{{user.email}}\">{{ user.email }}</a></p>\r\n      <p class=\"block-info social\"> \r\n        <span class=\"type\">Social links:</span>\r\n        <a href=\"{{user.facebook}}\" target=\"_blank\" class=\"link\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#facebook'\" [width]=\"'22px'\" [height]=\"'22px'\" [viewBox]=\"'0 0 22 22'\"></svg-icon-sprite></a>\r\n        <a href=\"{{user.instagram}}\" target=\"_blank\" class=\"link\">\r\n          \r\n          <img  class=\"icon\" src=\"assets/icons/instagram.svg\" alt=\"Instagram\"/>\r\n        </a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"user-cats\" *ngIf=\"hasCats\">\r\n    <h3 class=\"title-block\">{{ user.username }}<span>`s cats</span></h3>\r\n    <div class=\"three-equal-col\">\r\n      <figure class=\"vertical-thumb_img\" *ngFor=\"let cat of catsItems\">\r\n        <div>\r\n          <div class=\"img-thumb\">\r\n            <img src=\"{{ cat.main_img }}\" alt=\"\" class=\"img-thumb_img\">\r\n          </div>\r\n          <figcaption class=\"text-thumb bottom-text bottom-text-left\"> \r\n            {{ cat.name }}\r\n          </figcaption>\r\n        </div>\r\n        <a class=\"bottom-text bottom-text-right\" [routerLink]=\"['/cat-profile', cat.id_breed, cat.id]\">\r\n          <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#eye'\" [width]=\"'28px'\" [height]=\"'28px'\" [viewBox]=\"'0 0 28 28'\"></svg-icon-sprite>\r\n        </a>\r\n      </figure>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyC8DTE1GVxrylct0nmHzmt91NVtXKe50-k",
        authDomain: "cats-99c7b.firebaseapp.com",
        databaseURL: "https://cats-99c7b.firebaseio.com",
        projectId: "cats-99c7b",
        storageBucket: "cats-99c7b.appspot.com",
        messagingSenderId: "620974985283",
        appId: "1:620974985283:web:a41a9d7a395df61d6584f6",
        measurementId: "G-6XP91MLKPJ"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BXVH":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album-filter/album-filter.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"album-filters two-equal-col\">\r\n  <form #selectCat=\"ngForm\" (change)=\"selectCatHandler(selectCat)\" class=\"form\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group\">\r\n        <label for=\"breed\">Choose breed</label>\r\n        <select #breedInput=\"ngModel\" ngModel name=\"breed\" class=\"form-input\" id=\"breed\" placeholder=\"Choose Breed\">\r\n          <option [value]=\"default\"></option>\r\n          <option *ngFor=\"let catBreed of catsBreed | keyvalue\" [value]=\"catBreed.key\">\r\n            {{ catBreed.value }}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <form #selectBest=\"ngForm\" (change)=\"selectBestHandler(selectBest)\" class=\"form\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group\">\r\n        <label for=\"filterBest\">Choose the most</label>\r\n        <select #filterBestInput=\"ngModel\" ngModel name=\"filterBest\" class=\"form-input\" id=\"filterBest\" placeholder=\"Choose\">\r\n          <option [value]=\"default\"></option>\r\n          <option [value]=\"1\">The most like</option>\r\n          <option [value]=\"2\">The most view</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n </div>\r\n  \r\n");

/***/ }),

/***/ "CPKB":
/*!**********************************************************!*\
  !*** ./src/app/carousel-cats/carousel-cats.component.ts ***!
  \**********************************************************/
/*! exports provided: CarouselCatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCatsComponent", function() { return CarouselCatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carousel_cats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carousel-cats.component.html */ "vFQZ");
/* harmony import */ var _carousel_cats_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-cats.component.scss */ "s4Fk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service.js */ "oirq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var CarouselCatsComponent = /** @class */ (function () {
    function CarouselCatsComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.topLiked = [];
        this.customOptions = {
            loop: false,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 4
                }
            },
            nav: false
        };
        this.cats = [];
        this.catsItems = [];
        this.mostLiked = [];
    }
    CarouselCatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllCats().subscribe(function (cats) {
            _this.cats = cats;
            for (var _i = 0, _a = _this.cats; _i < _a.length; _i++) {
                var cat = _a[_i];
                if (cat.cats) {
                    for (var _b = 0, _c = cat.cats; _b < _c.length; _b++) {
                        var c = _c[_b];
                        _this.catsItems.push(c);
                    }
                }
            }
            _this.mostLiked = _this.catsItems;
            console.log(_this.mostLiked);
            _this.mostLiked.sort(function (a, b) {
                return (b.countLikes - a.countLikes);
            });
            _this.topLiked = _this.mostLiked.slice(0, 3);
        });
    };
    CarouselCatsComponent.ctorParameters = function () { return [
        { type: _api_service_js__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CarouselCatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-carousel-cats',
            template: _raw_loader_carousel_cats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_carousel_cats_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service_js__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CarouselCatsComponent);
    return CarouselCatsComponent;
}());



/***/ }),

/***/ "Cml7":
/*!**************************************************************!*\
  !*** ./src/app/favourite-cats/favourite-cats.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZS1jYXRzL2Zhdm91cml0ZS1jYXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Ez0v":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/list/list.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #loader>\r\n  Loading...\r\n</ng-template>\r\n<ng-template #list>\r\n  <div class=\"content\">\r\n    <div class=\"col-auto\">\r\n      <div class=\"vertical-thumb\" *ngFor = \"let user of users\">\r\n        <div class=\"vertical-thumb-wrap\">\r\n          <a class=\"vertical-thumb-img circle-img\" [routerLink]=\"['/user', user.id]\">\r\n            <img *ngIf=\"!user.img\" src=\"../assets/img/default.png\" alt=\"\" width=\"92\" height=\"92\">\r\n            <img *ngIf=\"user.img\" src=\"{{user.img}}\" alt=\"\" width=\"92\" height=\"92\">\r\n          </a>\r\n          <div class=\"vertical-thumb-desc\">\r\n            <p class=\"text\">{{user.username}}</p>\r\n          </div>\r\n          <div class=\"vertical-thumb-social-icons\">\r\n            <div class=\"icons\"><a href=\"mailto:{{user.email}}\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#mail'\" [width]=\"'22px'\" [height]=\"'22px'\" [viewBox]=\"'0 0 22 22'\"></svg-icon-sprite></a></div>\r\n            <div class=\"icons\"><a href=\"{{user.facebook}}\" target=\"_blank\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#facebook'\" [width]=\"'22px'\" [height]=\"'22px'\" [viewBox]=\"'0 0 22 22'\"></svg-icon-sprite></a></div>\r\n            <div class=\"icons\"><a href=\"{{user.instagram}}\" target=\"_blank\">\r\n              <img  class=\"icon\" src=\"assets/icons/instagram.svg\" alt=\"Instagram\"/>\r\n            </a></div>\r\n          </div>\r\n          <a [routerLink]=\"['/user', user.id]\" class=\"btn primary-btn\">View profile</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-container *ngTemplateOutlet=\"users ? list : loader\"></ng-container>");

/***/ }),

/***/ "FOoA":
/*!********************************************************!*\
  !*** ./src/app/createEdit-cat/catCreateEdit.module.ts ***!
  \********************************************************/
/*! exports provided: CatCreateEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatCreateEditModule", function() { return CatCreateEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "3tRt");
/* harmony import */ var _edit_edit_cat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit-cat.component */ "eumR");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-svg-icon-sprite */ "xLfj");








var CatCreateEditModule = /** @class */ (function () {
    function CatCreateEditModule() {
    }
    CatCreateEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_5__["createEditCatComponents"],
                _edit_edit_cat_component__WEBPACK_IMPORTED_MODULE_6__["EditCatComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_7__["IconSpriteModule"]
            ]
        })
    ], CatCreateEditModule);
    return CatCreateEditModule;
}());

;


/***/ }),

/***/ "GZ6N":
/*!***************************************************!*\
  !*** ./src/app/breeds/breed/breed.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breed-characters {\n  margin-top: 30px;\n}\n.breed-characters_type {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnJlZWRzL2JyZWVkL2JyZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2JyZWVkcy9icmVlZC9icmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVlZC1jaGFyYWN0ZXJzIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAmX3R5cGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "GgGG":
/*!*****************************************************************!*\
  !*** ./src/app/cat-articles/articles/cat-articles.component.ts ***!
  \*****************************************************************/
/*! exports provided: CatArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatArticlesComponent", function() { return CatArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cat_articles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cat-articles.component.html */ "WBrp");
/* harmony import */ var _cat_articles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat-articles.component.scss */ "Vd/S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var CatArticlesComponent = /** @class */ (function () {
    function CatArticlesComponent(activeRoutedService) {
        this.activeRoutedService = activeRoutedService;
        this.articleFirst = false;
        this.articleSecond = false;
        this.articleThird = false;
    }
    CatArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoutedService.data.subscribe(function (data) {
            // this.kind = Object.values(data);
            // console.log(this.kind)
            switch (data.kind) {
                case "1": {
                    //statements; 
                    _this.articleFirst = !_this.articleFirst;
                    break;
                }
                case "2": {
                    //statements;
                    _this.articleSecond = !_this.articleSecond;
                    break;
                }
                case "3": {
                    //statements;
                    _this.articleThird = !_this.articleThird;
                    break;
                }
                default: {
                    //statements; 
                    break;
                }
            }
        });
    };
    CatArticlesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    CatArticlesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cat-articles',
            template: _raw_loader_cat_articles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cat_articles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CatArticlesComponent);
    return CatArticlesComponent;
}());



/***/ }),

/***/ "H8dG":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer\">\r\n  <p class=\"footer-text\">\r\n    “Time spent with cats is never wasted.” – Sigmund Freud.\r\n  </p>\r\n</div>\r\n");

/***/ }),

/***/ "I0nY":
/*!*************************************************!*\
  !*** ./src/app/album/filterPipe/filter.pipe.ts ***!
  \*************************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, args) {
        if (args == undefined) {
            return values;
        }
        return values.filter(function (val) { return val.id_breed == args; });
    };
    FilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "Jh13":
/*!**********************************************!*\
  !*** ./src/app/album/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.component.html */ "q6J5");
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component.scss */ "17HW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api.service.js */ "oirq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







// import { FilterPipe } from '../filter.pipe';
var ListComponent = /** @class */ (function () {
    function ListComponent(lightbox, apiService, router, ActivetedRoute) {
        this.lightbox = lightbox;
        this.apiService = apiService;
        this.router = router;
        this.ActivetedRoute = ActivetedRoute;
        this.cats = [];
        this.catsBreed = [];
        this.catsItems = [];
        this.albumCats = [];
        this.userID = sessionStorage.getItem("LoggedInUser");
        this.count = 0;
    }
    ListComponent.prototype.open = function (cat) {
        // popup images
        this.albumCats = [];
        var allImages = cat.img.concat(cat.main_img);
        for (var _i = 0, allImages_1 = allImages; _i < allImages_1.length; _i++) {
            var img = allImages_1[_i];
            var album = {
                src: img,
                caption: cat.name
            };
            this.albumCats.push(album);
        }
        // open lightbox
        this.lightbox.open(this.albumCats, cat.id, { centerVertically: true });
    };
    ListComponent.prototype.close = function () {
        // close lightbox programmatically
        this.lightbox.close();
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllCats().subscribe(function (cats) {
            _this.cats = cats;
            for (var _i = 0, _a = _this.cats; _i < _a.length; _i++) {
                var cat = _a[_i];
                _this.catsBreed.push(cat.breeds_name);
                if (cat.cats) {
                    var _loop_1 = function (c) {
                        c.isLike = false;
                        c.likeId = null;
                        _this.apiService.getUsersById(c.user_id).subscribe(function (user) {
                            _this.user = user;
                            c.username = _this.user.username;
                            c.user_img = _this.user.img;
                        });
                        _this.catsItems.push(c);
                    };
                    for (var _b = 0, _c = cat.cats; _b < _c.length; _b++) {
                        var c = _c[_b];
                        _loop_1(c);
                    }
                }
            }
            if (_this.userID) {
                _this.apiService.getUsersById(_this.userID).subscribe(function (user) {
                    _this.user = user;
                    if (_this.user.cats_like) {
                        _this.catsLikes = _this.user.cats_like;
                        var _loop_2 = function (c_l) {
                            if (_this.catsLikes[c_l]) {
                                _this.idLike = Number(c_l);
                                _this.apiService.getCatsById(_this.catsLikes[c_l].breed_id, _this.catsLikes[c_l].id).subscribe(function (cats) {
                                    _this.cats = cats;
                                    for (var _i = 0, _a = _this.catsItems; _i < _a.length; _i++) {
                                        var catIt = _a[_i];
                                        if (cats.id_breed == catIt.id_breed && cats.id == catIt.id) {
                                            catIt.isLike = true;
                                            catIt.likeId = Number(c_l);
                                            _this.showCatList = true;
                                        }
                                    }
                                });
                            }
                        };
                        for (var c_l in _this.catsLikes) {
                            _loop_2(c_l);
                        }
                    }
                    else {
                        _this.catsLikes = [];
                        _this.catsLikes.length = 0;
                        _this.showCatList = true;
                    }
                });
            }
            else {
                _this.showCatList = true;
            }
            console.log(_this.catsItems);
        });
    };
    ListComponent.prototype.change = function (cat) {
        if (cat.isLike) {
            this.count = cat.countLikes - 1;
            this.apiService.delUserLikeCats(this.userID, cat.id_breed, cat.id, this.count, cat.likeId);
        }
        else {
            this.idLike += 1;
            cat.likeId = this.idLike;
            this.count = cat.countLikes + 1;
            this.apiService.postUserLikeCats(this.userID, cat.id_breed, this.idLike, this.count, cat.id);
        }
        cat.isLike = !cat.isLike;
    };
    ListComponent.prototype.displayBreedId = function (id) {
        this.breedId = id;
    };
    ListComponent.prototype.displayBestId = function (id) {
        this.bestId = id;
    };
    ListComponent.ctorParameters = function () { return [
        { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"] },
        { type: _api_service_js__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"],
            _api_service_js__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "KX+F":
/*!*********************************************!*\
  !*** ./src/app/user/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "9v8f");
/* harmony import */ var _user_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.scss */ "wA4T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api.service */ "yTNM");






var UserComponent = /** @class */ (function () {
    function UserComponent(ActivetedRoute, apiService, route) {
        this.ActivetedRoute = ActivetedRoute;
        this.apiService = apiService;
        this.route = route;
        this.user = [];
        this.cats = [];
        this.catsItems = [];
        this.ownCats = [];
        this.hasCats = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsersById(this.ActivetedRoute.snapshot.params.id).subscribe(function (user) {
            _this.user = user;
            if (_this.user.own_cats) {
                _this.ownCats = _this.user.own_cats;
                _this.hasCats = true;
                for (var _i = 0, _a = _this.ownCats; _i < _a.length; _i++) {
                    var o_cI = _a[_i];
                    _this.apiService.getCatsById(o_cI.breed_id, o_cI.id).subscribe(function (cats) {
                        _this.cats = cats;
                        _this.catsItems.push(cats);
                    });
                }
            }
        });
    };
    UserComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user',
            template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_user_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "LVAF":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-names/cat-names.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div class=\"alphabet-list\">\r\n      <p class=\"letter\" *ngFor=\"let letter of alphabets\" (click)=\"getLetter(letter)\">{{ letter }}</p>\r\n  </div>\r\n\r\n  <div class=\"\">\r\n    <div class=\"list-names\" *ngFor=\"let name of catNamesGroup | filterLetter:letter\">\r\n      <h3 class=\"letter-names\">{{ name.letter }}</h3>\r\n      <div *ngIf=\"isEmptyObject(name.names | keyvalue)\" class=\"grid-names item-name\">\r\n        <div *ngFor=\"let n of name.names | keyvalue\">\r\n          {{ n.value }}\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!isEmptyObject(name.names | keyvalue)\" class=\"item-name\">\r\n        <p>Not found names</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "MnNR":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel-articles/carousel-articles.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\r\n  <owl-carousel-o [options]=\"customOptions\">\r\n    <ng-template carouselSlide>\r\n      <div class=\"main-carousel\">\r\n        <div class=\"main-carousel_img\">\r\n          <img class=\"img-thumb_img\" src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-11/Friendliest%20cat%20breeds%201.jpg\">\r\n        </div>\r\n        <div class=\"main-carousel_text\">\r\n          <h2>The Most Affectionate and Friendliest Cat Breeds</h2>\r\n          <a [routerLink]=\"[{outlets: \r\n            {primary: ['cat-articles', 'article-1'], sidebar: null}\r\n          }]\" class=\"btn secondary-btn\">\r\n            View \r\n            <svg-icon-sprite class=\"icon right bounce-right\" [src]=\"'assets/sprites/sprite.svg#arrow-next'\" [width]=\"'12px'\" [height]=\"'12px'\" [attr.style]=\"'color: #ffffff'\" [viewBox]=\"'0 0 12 12'\"></svg-icon-sprite>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-template>  \r\n    <ng-template carouselSlide>\r\n      <div class=\"main-carousel\">\r\n        <div class=\"main-carousel_img\">\r\n          <img class=\"img-thumb_img\" src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-08/Cat%20Eating%20From%20Bowl%20Banner%20Photo_0.jpg\">\r\n        </div>\r\n        <div class=\"main-carousel_text\">\r\n          <h2>5 Reasons Why Cats Meow</h2>\r\n          <a [routerLink]=\"[{outlets: \r\n            {primary: ['cat-articles', 'article-2'], sidebar: null}\r\n          }]\" class=\"btn secondary-btn\">\r\n            View \r\n            <svg-icon-sprite class=\"icon right bounce-right\" [src]=\"'assets/sprites/sprite.svg#arrow-next'\" [width]=\"'12px'\" [height]=\"'12px'\" [attr.style]=\"'color: #ffffff'\" [viewBox]=\"'0 0 12 12'\"></svg-icon-sprite>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-template>  \r\n    <ng-template carouselSlide>\r\n      <div class=\"main-carousel\">\r\n        <div class=\"main-carousel_img\">\r\n          <img class=\"img-thumb_img\" src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-11/Friendliest%20cat%20breeds%201.jpg\">\r\n        </div>\r\n        <div class=\"main-carousel_text\">\r\n          <h2>The Most Affectionate and Friendliest Cat Breeds</h2>\r\n          <a [routerLink]=\"[{outlets: \r\n            {primary: ['cat-articles', 'article-3'], sidebar: null}\r\n          }]\" class=\"btn secondary-btn\">\r\n            View\r\n            <svg-icon-sprite class=\"icon right bounce-right\" [src]=\"'assets/sprites/sprite.svg#arrow-next'\" [width]=\"'12px'\" [height]=\"'12px'\" [attr.style]=\"'color: #ffffff'\" [viewBox]=\"'0 0 12 12'\"></svg-icon-sprite>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </ng-template>  \r\n  </owl-carousel-o>\r\n</div>\r\n");

/***/ }),

/***/ "NW/4":
/*!****************************************************!*\
  !*** ./src/app/user-cats/user-cats.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY2F0cy91c2VyLWNhdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Pptx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/breeds/breed/breed.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-breed two-col\">\r\n  <div class=\"img-thumb\">\r\n    <img src=\"{{ breeds?.img_url }}\" alt=\"\" class=\"img-thumb_img\"/>\r\n  </div>\r\n  <div>\r\n    <div>\r\n      <h2 class=\"title-block\">{{ breeds?.breeds_name }}</h2>\r\n      <p>{{ breeds?.desc }}</p>\r\n    </div>\r\n    <div class=\"breed-characters two-equal-col\">\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Adaptability</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.adaptability}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Affection level</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.affection_level}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Child friendly</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.child_friendly}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Dog friendly</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.dog_friendly}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Energy level</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.energy_level}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Grooming</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.grooming}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Health issue</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.health_issue}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Intelligence</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.intelligence}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Shedding level</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.shedding_level}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Social needs</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.social_needs}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Stranger friendly</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.stranger_friendly}}\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"\">\r\n          <p class=\"breed-characters_type\">Vocalisation</p>\r\n          <div class=\"meter-bar\">\r\n              <span class=\"meter-bar_inner\"></span>\r\n              <span class=\"meter-bar_range meter-bar_range_{{breeds?.vocalisation}}\"></span>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'gallery';
        this.showCarousel = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                if (e.url.indexOf("cat-articles/article") > -1) {
                    _this.showCarousel = false;
                }
                else {
                    _this.showCarousel = true;
                }
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Tubv":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/breeds/list/list.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n<div class=\"col-auto\">\r\n  <div class=\"vertical-thumb_img\" *ngFor=\"let breed of breeds\">\r\n    <a [routerLink]=\"['/breed', breed.id]\">\r\n      <figure class=\"overlay-img-effect\">\r\n        <div class=\"img-thumb\">\r\n          <img src=\"{{ breed.img_url }}\" alt=\"\" class=\"img-thumb_img\"/>\r\n        </div>\r\n        <figcaption class=\"text-thumb bottom-text overlay-text\">\r\n          <p class=\"text-thumb_txt\">{{ breed.breeds_name }}</p>\r\n        </figcaption>\r\n      </figure>\r\n    </a>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "Vd/S":
/*!*******************************************************************!*\
  !*** ./src/app/cat-articles/articles/cat-articles.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdC1hcnRpY2xlcy9hcnRpY2xlcy9jYXQtYXJ0aWNsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "VsXt":
/*!*****************************************************************!*\
  !*** ./src/app/createEdit-cat/create/create-cat.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZUVkaXQtY2F0L2NyZWF0ZS9jcmVhdGUtY2F0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <app-photos></app-photos> -->\r\n\r\n\r\n  <app-nav></app-nav>\r\n  <div class=\"global-overlay\"></div>\r\n  <section class=\"main-wrapper\">\r\n    <div class=\"main-carousel\" *ngIf=\"showCarousel\">\r\n      <app-carousel-articles></app-carousel-articles>\r\n    </div>\r\n    <!-- <app-carousel-cats></app-carousel-cats> -->\r\n    <div>\r\n      <router-outlet name=\"sidebar\"></router-outlet>\r\n    </div>\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </section>\r\n  <app-footer></app-footer>\r\n");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "bygX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validator_directive_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validator-directive/validator */ "YmkB");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, apiService) {
        this.apiService = apiService;
        this.userID = JSON.parse(sessionStorage.getItem("LoggedInUser"));
        this.editProfileForm = fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            passwords: fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                password_repeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
            }, { validators: [_validator_directive_validator__WEBPACK_IMPORTED_MODULE_6__["passwordMatch"]] }),
            facebook: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            img: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsersById(this.userID).subscribe(function (user) {
            _this.user = user;
            _this.editProfileForm.patchValue({
                username: _this.user.username,
                name: _this.user.name,
                email: _this.user.email,
                password: _this.user.password,
                facebook: _this.user.facebook,
                instagram: _this.user.instagram,
                img: _this.user.img
            });
            // this.username = user.username;
            // this.userImg = user.img;
        });
    };
    ProfileComponent.prototype.onFormSubmit = function (editProfileForm) {
        this.apiService.postUsers(editProfileForm.value.email, editProfileForm.value.facebook, editProfileForm.value.instagram, editProfileForm.value.name, editProfileForm.value.username, editProfileForm.value.image, editProfileForm.value.passwords.password, this.userID);
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profile',
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "WBrp":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-articles/articles/cat-articles.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>\r\n  {{ this.kind }}\r\n</p> -->\r\n<div *ngIf=\"articleFirst\" class=\"article-body\">\r\n  <h2>The Most Affectionate and Friendliest Cat Breeds</h2>\r\n  <p>We’re often relieved to see the friendly side of our feline companions, but did you know that some breeds show it off more often than others? Here are some of the friendliest cat breeds you can wish for.</p>\r\n  <div class=\"article-main-img\">\r\n    <img src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-11/Friendliest%20cat%20breeds%201.jpg\" alt=\"The Most Affectionate and Friendliest Cat Breeds\" class=\"\">\r\n  </div>\r\n  <p>“Does my cat love me?” Many cat owners have asked themselves this question, feeling slightly apprehensive to find out the honest answer. But while the mystery of a cat’s true feelings is likely to endure, we know that they do have a friendly, affectionate side. Felines might not win the dog’s long-time title as “a human’s best friend” anytime soon, but some cat breeds come pretty close.</p>\r\n  <p>Whether you’re looking for the friendliest cat breed you can bring into your life or you already have a lovely cat to come home to and want to see how they measure up against other feline friends, here are some of the most affectionate cat breeds.</p>\r\n</div>\r\n<div *ngIf=\"articleSecond\" class=\"article-body\">\r\n  <h2>5 Reasons Why Cats Meow</h2>\r\n  <div class=\"article-main-img\">\r\n    <img src=\"https://www.purina.co.uk/sites/g/files/mcldtz2481/files/2019-08/Cat%20Eating%20From%20Bowl%20Banner%20Photo_0.jpg\" alt=\"5 Reasons Why Cats Meow\" class=\"\">\r\n  </div>\r\n</div>\r\n<div *ngIf=\"articleThird\" class=\"article-body\">\r\n  3\r\n  <h2></h2>\r\n  <div class=\"article-main-img\">\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "X9vk":
/*!********************************************************!*\
  !*** ./src/app/cat-profile/cat-profile.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-cat-profile .title-block_title {\n  margin-bottom: 10px;\n}\n.wrap-cat-profile .subtitle-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.wrap-cat-profile .subtitle-block .owner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 20px;\n}\n.wrap-cat-profile .subtitle-block .owner-img {\n  margin-left: 10px;\n  margin-right: 5px;\n}\n.wrap-cat-profile .subtitle-block .circle-img {\n  width: 32px;\n  height: 32px;\n}\n.wrap-cat-profile .wrap-gallery {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LXByb2ZpbGUvY2F0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQUFKO0FBR0U7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBQURKO0FBR0k7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FBRE47QUFHTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUtJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFITjtBQU1FO0VBQ0UsZ0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2NhdC1wcm9maWxlL2NhdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAtY2F0LXByb2ZpbGUge1xyXG4gIC50aXRsZS1ibG9ja190aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc3VidGl0bGUtYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAub3duZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAmLWltZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNpcmNsZS1pbWcge1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAud3JhcC1nYWxsZXJ5IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "XJmD":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "XgRU":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "YKja":
/*!**************************************************!*\
  !*** ./src/app/cat-names/cat-names.component.ts ***!
  \**************************************************/
/*! exports provided: CatNamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatNamesComponent", function() { return CatNamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cat_names_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cat-names.component.html */ "LVAF");
/* harmony import */ var _cat_names_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat-names.component.scss */ "hbnD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "yTNM");





var CatNamesComponent = /** @class */ (function () {
    function CatNamesComponent(apiService) {
        this.apiService = apiService;
        this.catNamesGroup = [];
        this.alphabets = [];
    }
    CatNamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getCatNames().subscribe(function (names) {
            _this.catNames = names;
            var _loop_1 = function (i) {
                _this.alphabets.push(String.fromCharCode(i));
                var letterName = {
                    letter: String.fromCharCode(i),
                    names: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.catNames.filter(function (name) { return name.startsWith(String.fromCharCode(i)); }))
                };
                _this.catNamesGroup.push(letterName);
            };
            for (var i = 65; i <= 90; i++) {
                _loop_1(i);
            }
        });
    };
    CatNamesComponent.prototype.getLetter = function (letter) {
        this.letter = letter;
    };
    CatNamesComponent.prototype.isEmptyObject = function (obj) {
        return (obj.length > 0);
    };
    CatNamesComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    CatNamesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cat-names',
            template: _raw_loader_cat_names_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cat_names_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CatNamesComponent);
    return CatNamesComponent;
}());



/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "i6m5");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "qXBG");







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _index__WEBPACK_IMPORTED_MODULE_5__["authComponents"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());

;


/***/ }),

/***/ "YmkB":
/*!**************************************************!*\
  !*** ./src/app/validator-directive/validator.ts ***!
  \**************************************************/
/*! exports provided: passwordMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatch", function() { return passwordMatch; });
function passwordMatch(c) {
    return c.value.password === c.value.password_repeat ? null : { passwordMatch: true };
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "u+pc");
/* harmony import */ var _album_album_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./album/album.module */ "zyHg");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.module */ "7UCR");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "wCP4");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _breeds_list_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./breeds/list/list.component */ "s0G2");
/* harmony import */ var _breeds_breed_breed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./breeds/breed/breed.component */ "1+bU");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2 */ "MMa0");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/database */ "6233");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _user_cats_user_cats_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-cats/user-cats.component */ "0OIl");
/* harmony import */ var _favourite_cats_favourite_cats_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./favourite-cats/favourite-cats.component */ "fC7V");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-svg-icon-sprite */ "xLfj");
/* harmony import */ var _createEdit_cat_catCreateEdit_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./createEdit-cat/catCreateEdit.module */ "FOoA");
/* harmony import */ var _cat_profile_cat_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cat-profile/cat-profile.component */ "z2+o");
/* harmony import */ var _cat_names_cat_names_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cat-names/cat-names.component */ "YKja");
/* harmony import */ var _cat_names_filterPipe_filter_letter_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cat-names/filterPipe/filter-letter.pipe */ "gJIc");
/* harmony import */ var _cat_articles_articles_modules__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cat-articles/articles.modules */ "kuS6");
/* harmony import */ var _carousel_articles_carousel_articles_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./carousel-articles/carousel-articles.component */ "cq9E");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");















// import { CarouselCatsComponent } from './carousel-cats/carousel-cats.component';


// import { FilterPipe } from './album/filter.pipe';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                // CarouselCatsComponent,
                _breeds_list_list_component__WEBPACK_IMPORTED_MODULE_15__["ListComponent"],
                _breeds_breed_breed_component__WEBPACK_IMPORTED_MODULE_16__["BreedComponent"],
                _user_cats_user_cats_component__WEBPACK_IMPORTED_MODULE_21__["UserCatsComponent"],
                _favourite_cats_favourite_cats_component__WEBPACK_IMPORTED_MODULE_22__["FavouriteCatsComponent"],
                _cat_profile_cat_profile_component__WEBPACK_IMPORTED_MODULE_25__["CatProfileComponent"],
                _cat_names_cat_names_component__WEBPACK_IMPORTED_MODULE_26__["CatNamesComponent"],
                _cat_names_filterPipe_filter_letter_pipe__WEBPACK_IMPORTED_MODULE_27__["FilterLetterPipe"],
                _carousel_articles_carousel_articles_component__WEBPACK_IMPORTED_MODULE_29__["CarouselArticlesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"]
                //FilterPipe,
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_8__["UserModule"],
                _album_album_module__WEBPACK_IMPORTED_MODULE_7__["AlbumModule"],
                _cat_articles_articles_modules__WEBPACK_IMPORTED_MODULE_28__["ArticlesModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_12__["SidebarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _createEdit_cat_catCreateEdit_module__WEBPACK_IMPORTED_MODULE_24__["CatCreateEditModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                ngx_lightbox__WEBPACK_IMPORTED_MODULE_17__["LightboxModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase, 'cats'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_23__["IconSpriteModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZGml":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "hnEC");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss */ "XgRU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validator_directive_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../validator-directive/validator */ "YmkB");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.users = [];
        this.registerForm = fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            photo: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            facebook: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            instagram: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            passwords: fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                password_repeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            }, { validators: [_validator_directive_validator__WEBPACK_IMPORTED_MODULE_5__["passwordMatch"]] })
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsers().subscribe(function (users) {
            _this.users = users;
            _this.length = _this.users.length;
            //console.log(this.users)
        });
    };
    RegisterComponent.prototype.onFormSubmit = function (registerForm) {
        //console.log(registerForm.value.passwords.password)
        //console.log(this.users.length)
        //console.log(this.password)
        if (registerForm.valid) {
            this.apiService.postUsers(registerForm.value.email, registerForm.value.facebook, registerForm.value.instagram, registerForm.value.name, registerForm.value.username, registerForm.value.photo, registerForm.value.passwords.password, this.users.length);
            this.route.navigate([{ outlets: { primary: ['login'], sidebar: null } }]);
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "b9Aq":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createEdit-cat/edit/edit-cat.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-form two-col\">\r\n  <div class=\"left-col-form\"></div>\r\n  <div class=\"right-col-form\">\r\n    <h2>Edit cat</h2>\r\n    <form #editCatForm=\"ngForm\" (ngSubmit)=\"editCatHandler(editCatForm)\" class=\"form\">\r\n      <div class=\"form-row col-auto\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input #nameInput=\"ngModel\" ngModel=\"{{this.cat.name}}\" class=\"form-input\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"Enter Name\" [value]=\"this.cat.name\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"breed\">Breed</label>\r\n          <select #breedInput=\"ngModel\" ngModel=\"{{this.breedModel}}\" name=\"breed\" class=\"form-input\" id=\"breed\" placeholder=\"Choose Breed\"> \r\n            <option *ngFor=\"let catBreed of breeds; let i = index\" [ngValue]=\"catBreed.breed_id\" [selected]=\"i == this.cat.id_breed\">{{ catBreed.name }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"age\">Age</label>\r\n          <input #ageInput=\"ngModel\" ngModel=\"{{this.cat.age}}\" name=\"age\" class=\"form-input\" id=\"age\" type=\"text\" placeholder=\"Enter Age\" [value]=\"this.cat.age\"/>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"sex\">Breed</label>\r\n          <select #sexInput=\"ngModel\" ngModel=\"{{this.cat.sex}}\" name=\"sex\" class=\"form-input\" id=\"sex\" placeholder=\"Choose Sex\"> \r\n            <option value=\"\" disabled>Choose a sex</option>\r\n            <option value=\"Male\">Male</option>\r\n            <option value=\"Female\">Female</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"mainImg\">Main Image</label>\r\n          <input #mainImgInput=\"ngModel\" ngModel=\"{{this.cat.main_img}}\" name=\"mainImg\" (input)=\"inputImgChange($event.target.value)\" class=\"form-input\" id=\"mainImg\" type=\"text\" placeholder=\"Enter Main Img\" />\r\n          <div class=\"main-img img-thumb\">\r\n            <img src=\"{{this.cat.main_img}}\" alt=\"\" class=\"img-thumb_img\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row col-auto\">\r\n          <!-- Gallery: -->\r\n          <div class=\"form-group\" *ngFor=\"let inputImg of inputsImg; let i = index;\" #img>\r\n            <label for=\"image\">Image</label>\r\n            <input #imageInput=\"ngModel\" ngModel=\"{{inputImg}}\" name=\"image {{i}}\" (input)=\"inputImgsChange($event.target.value,i)\" class=\"form-input\" id=\"image\" type=\"text\" placeholder=\"Enter Image\" [value]=\"inputImg\"/>\r\n            <span class=\"del-icon\" (click)=\"delComponent(ev,i,img)\" *ngIf=\"isRemoveInput\">\r\n              <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#minus'\" [width]=\"'20px'\" [height]=\"'20px'\" [attr.style]=\"'color: #d72e2e'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite>\r\n            </span>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"btn-pos\">\r\n          <div (click)=\"addComponent()\" class=\"btn primary-btn\">\r\n            <span class=\"icon\">\r\n              <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#more'\" [width]=\"'12px'\" [height]=\"'12px'\" [viewBox]=\"'0 0 12 12'\"></svg-icon-sprite>\r\n            </span>\r\n            Add image\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group-img three-equal-col\">\r\n          <div class=\"group-img img-thumb\"  *ngFor=\"let img of inputsImg\">\r\n            <img src=\"{{ img }}\" alt=\"\" class=\"img-thumb_img\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"btn-pos\">\r\n          <button type=\"submit\" class=\"btn primary-btn\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- {{editCatForm.value | json}} -->");

/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "zu2e");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "H8dG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "qXBG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api.service */ "yTNM");




//import { NgForm } from '@angular/forms';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, route, apiService) {
        this.auth = auth;
        this.route = route;
        this.apiService = apiService;
        this.users = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginHandler = function (loginForm) {
        var _this = this;
        this.apiService.getUsers().subscribe(function (users) {
            _this.users = users;
            console.log(_this.users);
            for (var _i = 0, _a = _this.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.email == loginForm.value.email && user.password == loginForm.value.password) {
                    console.log(1111);
                    if (loginForm.valid) {
                        //this.auth.sendToken(loginForm.value.email);
                        _this.auth.sendToken(user.id);
                        console.log(user.id);
                        console.log(user.email);
                        console.log(user.password);
                        //this.route.navigate(['profile']);
                        _this.route.navigate([{ outlets: { primary: ['profile'], sidebar: ['sidebar-profile'] } }]);
                    }
                }
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "bygX":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrap-user .user-img {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcC11c2VyIHtcclxuICAudXNlci1pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "cmL0":
/*!*************************************************!*\
  !*** ./src/app/breeds/list/list.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyZWVkcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "cq9E":
/*!******************************************************************!*\
  !*** ./src/app/carousel-articles/carousel-articles.component.ts ***!
  \******************************************************************/
/*! exports provided: CarouselArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselArticlesComponent", function() { return CarouselArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carousel_articles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carousel-articles.component.html */ "MnNR");
/* harmony import */ var _carousel_articles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-articles.component.scss */ "tf7+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CarouselArticlesComponent = /** @class */ (function () {
    function CarouselArticlesComponent() {
        this.customOptions = {
            loop: true,
            items: 1,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: ['', ''],
            nav: false
        };
    }
    CarouselArticlesComponent.prototype.ngOnInit = function () {
    };
    CarouselArticlesComponent.ctorParameters = function () { return []; };
    CarouselArticlesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-carousel-articles',
            template: _raw_loader_carousel_articles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_carousel_articles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CarouselArticlesComponent);
    return CarouselArticlesComponent;
}());



/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "eumR":
/*!***********************************************************!*\
  !*** ./src/app/createEdit-cat/edit/edit-cat.component.ts ***!
  \***********************************************************/
/*! exports provided: EditCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCatComponent", function() { return EditCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_cat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-cat.component.html */ "b9Aq");
/* harmony import */ var _edit_cat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-cat.component.scss */ "7jLF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var EditCatComponent = /** @class */ (function () {
    function EditCatComponent(ActivetedRoute, apiService, route) {
        this.ActivetedRoute = ActivetedRoute;
        this.apiService = apiService;
        this.route = route;
        this.userID = sessionStorage.getItem("LoggedInUser");
        this.user = [];
        this.cat = [];
        this.cats = [];
        this.ownCats = [];
        this.breeds = [];
        this.images = [];
        this.inputsImg = [''];
        this.newImg = [];
        this.isRemoveInput = true;
        this.hasMainImg = false;
    }
    EditCatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getCatsById(this.ActivetedRoute.snapshot.params.breed_id, this.ActivetedRoute.snapshot.params.id).subscribe(function (cat) {
            _this.cat = cat;
            _this.inputsImg = _this.cat.img;
            _this.breedModel = _this.cat.id_breed;
        });
        this.apiService.getAllCats().subscribe(function (cats) {
            _this.cats = cats;
            for (var key in _this.cats) {
                _this.breedID = key;
                var breed = {
                    breed_id: _this.breedID,
                    name: _this.cats[key].breeds_name
                };
                _this.breeds.push(breed);
            }
        });
        this.apiService.getUsersById(this.userID).subscribe(function (user) {
            _this.user = user;
            _this.ownCats = _this.user.own_cats;
        });
    };
    EditCatComponent.prototype.inputImgChange = function (src) {
        this.cat.main_img = src;
    };
    EditCatComponent.prototype.inputImgsChange = function (src, i) {
        if (!(this.inputsImg.indexOf(src) > -1)) {
            this.inputsImg[i] = src;
        }
        else {
            this.inputsImg[i] = "This image already exist!";
        }
    };
    EditCatComponent.prototype.addComponent = function (img) {
        this.inputsImg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.inputsImg, [""]);
        this.isRemoveInput = true;
    };
    EditCatComponent.prototype.delComponent = function (el, index, input) {
        this.inputsImg.splice(index, 1);
        input.remove();
        if ((this.inputsImg.length - 1) == 0) {
            this.isRemoveInput = false;
        }
    };
    EditCatComponent.prototype.editCatHandler = function (editCatForm) {
        var _this = this;
        for (var prop in editCatForm.value) {
            if (prop.includes("image")) {
                this.images.push(editCatForm.value[prop]);
            }
        }
        var differenceImages = Object.keys(this.inputsImg).filter(function (k) { return _this.images[k] == _this.inputsImg[k]; });
        var diff = Object.keys(differenceImages).filter(function (k) { return differenceImages[k] == _this.images[k]; });
        //this.apiService.editCats(this.userID, editCatForm.value.breed, this.cat.id, editCatForm.value.age, editCatForm.value.sex, editCatForm.value.name, editCatForm.value.mainImg, this.images, this.cat.id)
        this.route.navigate([{ outlets: { primary: ['cat-profile', this.cat.id_breed, this.cat.id], sidebar: ['sidebar-profile'] } }]);
    };
    EditCatComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    EditCatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-cat',
            template: _raw_loader_edit_cat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_cat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], EditCatComponent);
    return EditCatComponent;
}());



/***/ }),

/***/ "f53y":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cat-profile/cat-profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div class=\"wrap-cat-profile\">\r\n    <div class=\"two-equal-col\">\r\n      <div class=\"wrap-img\">\r\n        <div class=\"img-thumb\">\r\n          <img src=\"{{ cat.main_img }}\" alt=\"{{ cat.name }}\" class=\"img-thumb_img\">\r\n        </div>\r\n      </div>\r\n      <div class=\"block-desc\">\r\n        <div class=\"title-block\">\r\n          <h2 class=\"title-block_title\">{{ cat.name }} \r\n            <span class=\"icon-sex\" *ngIf=\"checkSex(cat.sex)\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#male'\" [width]=\"'20px'\" [height]=\"'20px'\" [attr.style]=\"'color: #d72e2e'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite></span>\r\n            <span class=\"icon-sex\" *ngIf=\"!checkSex(cat.sex)\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#female'\" [width]=\"'20px'\" [height]=\"'20px'\" [attr.style]=\"'color: #d72e2e'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite></span>\r\n          </h2>\r\n          <div class=\"subtitle-block\">\r\n            <a [routerLink]=\"['/user', user.id]\" class=\"owner\">\r\n              <span>by</span>\r\n              <div class=\"owner-img circle-img\">\r\n                <img *ngIf=\"cat.user_img\" src=\"{{ cat.user_img }}\" alt=\"{{ cat.username }}\">\r\n                <img *ngIf=\"!cat.user_img\" src=\"../assets/img/default.png\" alt=\"\" width=\"32\" height=\"32\">\r\n              </div>\r\n              <span>{{ cat.username }}</span>\r\n            </a>\r\n            <div class=\"likes heart\" [class.like]=\"countLikes(cat.countLikes)\">\r\n              <span>{{ cat.countLikes }}</span>\r\n            </div>\r\n          </div>\r\n        </div>  \r\n        <p class=\"block-info\"><span class=\"type\">Breed:</span>{{ breedName }}</p>\r\n        <p class=\"block-info\"><span class=\"type\">Age:</span>{{ cat.age }}</p>\r\n        <div *ngIf=\"hasBtnEdit\" class=\"btn-pos\">\r\n          <a class=\"btn primary-btn\" [routerLink]=\"['/edit-cat', cat.id_breed, cat.id]\">Edit</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"hasGallery\" class=\"wrap-gallery\">\r\n      <h3 class=\"title-block\">Gallery</h3>\r\n      <div class=\"col-auto\">\r\n        <div class=\"img-thumb\" *ngFor=\"let img of cat.img\">\r\n          <img src=\"{{ img }}\" alt=\"{{ cat.name }}\" class=\"img-thumb_img\" (click)=\"open(cat)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "fC7V":
/*!************************************************************!*\
  !*** ./src/app/favourite-cats/favourite-cats.component.ts ***!
  \************************************************************/
/*! exports provided: FavouriteCatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteCatsComponent", function() { return FavouriteCatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_favourite_cats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./favourite-cats.component.html */ "fQ+M");
/* harmony import */ var _favourite_cats_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourite-cats.component.scss */ "Cml7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "yTNM");





var FavouriteCatsComponent = /** @class */ (function () {
    function FavouriteCatsComponent(apiService) {
        this.apiService = apiService;
        this.userID = sessionStorage.getItem("LoggedInUser");
        this.user = [];
        this.cats = [];
        this.catsItems = [];
        this.catsLikes = [];
    }
    FavouriteCatsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsersById(this.userID).subscribe(function (user) {
            _this.user = user;
            if (_this.user.cats_like) {
                _this.catsLikes = _this.user.cats_like;
                for (var _i = 0, _a = _this.catsLikes; _i < _a.length; _i++) {
                    var c_l = _a[_i];
                    if (c_l) {
                        _this.apiService.getCatsById(c_l.breed_id, c_l.id).subscribe(function (cats) {
                            _this.cats = cats;
                            _this.catsItems.push(cats);
                        });
                    }
                }
            }
        });
    };
    FavouriteCatsComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    FavouriteCatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-favourite-cats',
            template: _raw_loader_favourite_cats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_favourite_cats_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], FavouriteCatsComponent);
    return FavouriteCatsComponent;
}());



/***/ }),

/***/ "fQ+M":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourite-cats/favourite-cats.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div class=\"col-auto\">\r\n    <figure class=\"vertical-thumb_img\" *ngFor=\"let cat of catsItems\">\r\n      <div>\r\n        <div class=\"img-thumb\">\r\n          <img src=\"{{ cat.main_img }}\" alt=\"\" class=\"img-thumb_img\">\r\n        </div>\r\n        <figcaption class=\"text-thumb bottom-text bottom-text-left\"> \r\n          {{ cat.name }}\r\n        </figcaption>\r\n      </div>\r\n      <a class=\"bottom-text bottom-text-right\" [routerLink]=\"['/cat-profile', cat.id_breed, cat.id]\">\r\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#eye'\" [width]=\"'28px'\" [height]=\"'28px'\" [viewBox]=\"'0 0 28 28'\"></svg-icon-sprite>\r\n      </a>\r\n    </figure>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "pUeC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "gB/o":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-cats/user-cats.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div class=\"col-auto\">\r\n    <figure class=\"vertical-thumb_img\" *ngFor=\"let cat of catsItems\">\r\n      <div>\r\n        <div class=\"img-thumb\">\r\n          <img src=\"{{ cat.main_img }}\" alt=\"\" class=\"img-thumb_img\">\r\n        </div>\r\n        <figcaption class=\"text-thumb bottom-text bottom-text-left\"> \r\n          {{ cat.name }}\r\n        </figcaption>\r\n      </div>\r\n      <a class=\"bottom-text bottom-text-right\" [routerLink]=\"['/cat-profile', cat.id_breed, cat.id]\">\r\n        <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#eye'\" [width]=\"'28px'\" [height]=\"'28px'\" [viewBox]=\"'0 0 28 28'\"></svg-icon-sprite>\r\n      </a>\r\n    </figure>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "gJIc":
/*!************************************************************!*\
  !*** ./src/app/cat-names/filterPipe/filter-letter.pipe.ts ***!
  \************************************************************/
/*! exports provided: FilterLetterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterLetterPipe", function() { return FilterLetterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FilterLetterPipe = /** @class */ (function () {
    function FilterLetterPipe() {
    }
    FilterLetterPipe.prototype.transform = function (values, args) {
        if (args == undefined) {
            return values;
        }
        return values.filter(function (name) { return name.letter == args; });
    };
    FilterLetterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterLetter'
        })
    ], FilterLetterPipe);
    return FilterLetterPipe;
}());



/***/ }),

/***/ "hbnD":
/*!****************************************************!*\
  !*** ./src/app/cat-names/cat-names.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Adventuring\";\n  src: url('adventuring-webfont.eot');\n  src: url('adventuring-webfont.eot') format(\"embedded-opentype\"), url('adventuring-webfont.woff2') format(\"woff2\"), url('adventuring-webfont.woff') format(\"woff\"), url('adventuring-webfont.ttf') format(\"truetype\"), url('adventuring-webfont.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: normal;\n}\n.alphabet-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.alphabet-list .letter {\n  border: 2px solid #28145e;\n  padding: 5px;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 7px;\n  margin-right: 5px;\n  cursor: pointer;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n.alphabet-list .letter:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  border: 2px solid #d72e2e;\n}\n.list-names {\n  margin: 20px 0;\n}\n.list-names .letter-names {\n  color: #d72e2e;\n  margin-bottom: 10px;\n}\n.list-names .grid-names {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  -webkit-column-gap: 10px;\n     -moz-column-gap: 10px;\n          column-gap: 10px;\n  grid-gap: 15px;\n}\n.list-names .item-name {\n  border: 2px solid #e9e9e9;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n@media only screen and (min-width: 576px) {\n  .list-names .grid-names {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media only screen and (min-width: 768px) {\n  .list-names .grid-names {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}\n@media only screen and (min-width: 992px) {\n  .list-names .grid-names {\n    grid-template-columns: repeat(6, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY2F0LW5hbWVzL2NhdC1uYW1lcy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvYWJzdHJhY3RzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0E7RUFDRSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa1FBQUE7RUFLQSxnQkFBQTtFQUNBLGtCQUFBO0FDckNGO0FBSEE7RUFDRSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtBQUtGO0FBSEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO01BQUEscUJBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQUtKO0FBSEk7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7QUFLTjtBQUFBO0VBQ0UsY0FBQTtBQUdGO0FBREU7RUFDRSxjRDNCYztFQzRCZCxtQkFBQTtBQUdKO0FBQUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxjQUFBO0FBRUo7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtVQUFBLHdDQUFBO0VBQ0EsYUFBQTtBQUNKO0FDeENFO0VENkNFO0lBQ0UscUNBQUE7RUFESjtBQUNGO0FDdENFO0VENkNFO0lBQ0UscUNBQUE7RUFKSjtBQUNGO0FDbkNFO0VENkNFO0lBQ0UscUNBQUE7RUFQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY2F0LW5hbWVzL2NhdC1uYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRtYWluLWNvbG9yLWRhcms6ICMyODE0NWU7XHJcbiRhY2NlbnQtY29sb3I6ICNmZmJiNjQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNkNzJlMmU7XHJcbiRib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcblxyXG4kdmliZXItY29sb3I6ICM4MzQ5OTU7XHJcblxyXG5cclxuXHJcbi5vdGhlci10aGVtZSB7XHJcbiAgJHdoaXRlOiAjZmZmO1xyXG4gICRibGFjazogIzAwMDtcclxuICAkbWFpbi1jb2xvci1kYXJrOiAjMTQ1ZTI3O1xyXG4gICRtYWluLWNvbG9yLW1lZGl1bTogIzQ2ZmM0ZjtcclxuICAkbWFpbi1jb2xvci1saWdodDogIzliZjZhMDtcclxuICAkYWNjZW50LWNvbG9yOiAjMmZkZGZjO1xyXG4gICRzZWNvbmRhcnktY29sb3I6ICNjZWNkZmQ7XHJcbiAgJHNlY29uZGFyeS1jb2xvci1tZWRpdW06ICNhZGIyZjc7XHJcbiAgJGJvcmRlci1jb2xvcjogIzE4MDQwNDtcclxuICAkbGlnaHQtYmx1ZTogI2ZkZmZmMjtcclxuICAkdGV4dC1jb2xvcjogIzIxMjMyNDtcclxuICAkZ3JheS10ZXh0OiAjNWI1YjViO1xyXG4gICRncmF5LWJnOiAjZmFmYWZhO1xyXG4gICRncmVlbjogIzE2Yzk3ZDtcclxuICAkdmliZXItY29sb3I6ICM4MzQ5OTU7XHJcbiAgJGZiLWNvbG9yOiAjMTg3N0YyO1xyXG59XHJcblxyXG4vLyBGb250c1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBZHZlbnR1cmluZyc7XHJcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdCcpO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnN2ZycpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4kZm9udC1iYXNlOiAnQWR2ZW50dXJpbmcnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC10ZXh0OiAnVGltZXMgTmV3IFJvbWFuJztcclxuLy8gJGZvbnQtc2Vjb25kYXJ5OiAnRlMgSm9leSBDeXJpbGxpYycsXHJcbi8vIHNhbnMtc2VyaWY7IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkdmVudHVyaW5nXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuc3ZnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmFscGhhYmV0LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uYWxwaGFiZXQtbGlzdCAubGV0dGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzI4MTQ1ZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5hbHBoYWJldC1saXN0IC5sZXR0ZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkNzJlMmU7XG59XG5cbi5saXN0LW5hbWVzIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4ubGlzdC1uYW1lcyAubGV0dGVyLW5hbWVzIHtcbiAgY29sb3I6ICNkNzJlMmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubGlzdC1uYW1lcyAuZ3JpZC1uYW1lcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG4gIGdyaWQtZ2FwOiAxNXB4O1xufVxuLmxpc3QtbmFtZXMgLml0ZW0tbmFtZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlOWU5ZTk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmxpc3QtbmFtZXMgLmdyaWQtbmFtZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3QtbmFtZXMgLmdyaWQtbmFtZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmxpc3QtbmFtZXMgLmdyaWQtbmFtZXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG4gIH1cbn0iLCIvLyBAaW5jbHVkZSBzbWFsbCB7fSAtIG1pbi13aWR0aDogNTc2cHhcclxuLy8gQGluY2x1ZGUgbWVkaXVtIHt9IC0gbWluLXdpZHRoOiA3NjhweFxyXG4vLyBAaW5jbHVkZSBsYXJnZSB7fSAtIG1pbi13aWR0aDogOTkycHhcclxuLy8gQGluY2x1ZGUgZXh0cmEtbGFyZ2Uge30gLSBtaW4td2lkdGg6IDEyODBweFxyXG4vLyBAaW5jbHVkZSBtYXgtd2lkdGgoJGJwKSB7fSAtICRicCBpcyB0aGUgd2lkdGggeW91IHdhbnRcclxuLy8gQGluY2x1ZGUgbWluLXdpZHRoKCRicCkge30gLSAkYnAgaXMgdGhlIHdpZHRoIHlvdSB3YW50XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWl4aW4gbWVkaXVtIHtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1peGluIGxhcmdlIHtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1peGluIGV4dHJhLWxhcmdlIHtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtaXhpbiBtYXgtd2lkdGgoJGJwKSB7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWl4aW4gbWluLXdpZHRoKCRicCkge1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gQ2xlYXJmaXhcclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEZvbnQgc2l6ZSBpbiByZW1cclxuLy8gQGluY2x1ZGUgZm9udC1zaXplKCRzaXplKTsgLSAkc2l6ZSBpcyBpbiBweDtcclxuXHJcbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcclxuICAkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xyXG4gIEByZXR1cm4gJHJlbVNpemUgKiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XHJcbn1cclxuXHJcblxyXG4vLyBQbGFjZWhvbGRlciBzdHlsaW5nXHJcbi8vXHJcbi8vIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHt9IC0gc3R5bGUgdGhlIHBsYWNlaG9sZGVyXHJcbi8vIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzIHt9IC0gc3R5bGUgdGhlIHBsYWNlaG9sZGVyIG9uIGZvY3VzXHJcblxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudDt9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnQ7fVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50O31cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudDt9XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cyB7XHJcbiAgJjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnQ7fVxyXG4gICY6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50O31cclxuICAmOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudDt9XHJcbiAgJjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnQ7fVxyXG59Il19 */");

/***/ }),

/***/ "hnEC":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-form two-col\">\r\n  <div class=\"left-col-form\"></div>\r\n  <div class=\"right-col-form\">\r\n    <h2>Register</h2>\r\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onFormSubmit(registerForm)\" class=\"form\">\r\n      <div class=\"form-row one-col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Username</label>\r\n          <input type=\"text\" class=\"form-input\" placeholder=\"Enter Username\" id=\"username\" name=\"username\" formControlName=\"username\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-input\" placeholder=\"Enter Name\" id=\"name\" name=\"name\" formControlName=\"name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"photo\">Photo</label>\r\n          <input type=\"text\" class=\"form-input\" placeholder=\"Enter Photo link\" id=\"photo\" name=\"photo\" formControlName=\"photo\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" class=\"form-input\" placeholder=\"Enter Email\" id=\"email\" name=\"email\" formControlName=\"email\">\r\n        </div>\r\n        <div formGroupName=\"passwords\">\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-input\" placeholder=\"Enter Password\" id=\"password\" name=\"password\" formControlName=\"password\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password_repeat\">Repeat Password</label>\r\n            <input type=\"password\" class=\"form-input\" placeholder=\"Repeat Password\" id=\"password_repeat\" name=\"password_repeat\" formControlName=\"password_repeat\">\r\n          </div>\r\n          <div *ngIf=\"registerForm.get('passwords')?.errors?.passwordMatch\">Password don`t match</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"facebook\">Facebook link</label>\r\n          <input type=\"text\" class=\"form-input\" placeholder=\"Enter Facebook\" id=\"facebook\" name=\"facebook\" formControlName=\"facebook\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"instagram\">Instagram link</label>\r\n          <input type=\"text\" class=\"form-input\" placeholder=\"Enter Instagram\" id=\"instagram\" name=\"instagram\" formControlName=\"instagram\">\r\n        </div>\r\n\r\n        <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"btn-pos\">\r\n          <button type=\"submit\" class=\"registerbtn btn primary-btn\">Register</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- {{registerForm.value | json}} -->");

/***/ }),

/***/ "hoQi":
/*!*******************************************************!*\
  !*** ./src/app/cat-articles/list/list.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdC1hcnRpY2xlcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "i6m5":
/*!*******************************!*\
  !*** ./src/app/auth/index.ts ***!
  \*******************************/
/*! exports provided: authComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authComponents", function() { return authComponents; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "ZGml");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "bsvf");
/* harmony import */ var _validator_directive_validators_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator-directive/validators.directive */ "tROc");



var authComponents = [
    _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
    _validator_directive_validators_directive__WEBPACK_IMPORTED_MODULE_2__["ValidatorsDirective"]
];


/***/ }),

/***/ "kuS6":
/*!**************************************************!*\
  !*** ./src/app/cat-articles/articles.modules.ts ***!
  \**************************************************/
/*! exports provided: ArticlesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesModule", function() { return ArticlesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "0yI1");
/* harmony import */ var _articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/cat-articles.component */ "GgGG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var ArticlesModule = /** @class */ (function () {
    function ArticlesModule() {
    }
    ArticlesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_4__["CatArticlesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_4__["CatArticlesComponent"]]
        })
    ], ArticlesModule);
    return ArticlesModule;
}());



/***/ }),

/***/ "m82V":
/*!***********************************************!*\
  !*** ./src/app/user/list/list.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".primary-btn {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWJ0biB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */");

/***/ }),

/***/ "m8TL":
/*!******************************************************!*\
  !*** ./src/app/album/filterPipe/filter-best.pipe.ts ***!
  \******************************************************/
/*! exports provided: FilterBestPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterBestPipe", function() { return FilterBestPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var FilterBestPipe = /** @class */ (function () {
    function FilterBestPipe() {
    }
    FilterBestPipe.prototype.transform = function (values, args) {
        if (args == undefined) {
            return values;
        }
        var mostLiked = values;
        mostLiked.sort(function (a, b) {
            return b.countLikes - a.countLikes;
        });
        return mostLiked;
    };
    FilterBestPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterBest'
        })
    ], FilterBestPipe);
    return FilterBestPipe;
}());



/***/ }),

/***/ "mQpj":
/*!**********************************************************************!*\
  !*** ./src/app/sidebar/sidebar-profile/sidebar-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarProfileComponent", function() { return SidebarProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sidebar-profile.component.html */ "9Vco");
/* harmony import */ var _sidebar_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-profile.component.scss */ "sVQy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api.service */ "yTNM");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");







var SidebarProfileComponent = /** @class */ (function () {
    function SidebarProfileComponent(route, apiService, auth) {
        this.route = route;
        this.apiService = apiService;
        this.auth = auth;
        this.userID = JSON.parse(sessionStorage.getItem("LoggedInUser"));
    }
    SidebarProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsersById(this.userID).subscribe(function (user) {
            _this.user = user;
            _this.username = user.username;
            _this.userImg = user.img;
        });
    };
    SidebarProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    SidebarProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sidebar-profile',
            template: _raw_loader_sidebar_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_sidebar_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], SidebarProfileComponent);
    return SidebarProfileComponent;
}());



/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "s2In");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "XJmD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.ctorParameters = function () { return []; };
    NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-not-found',
            template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "oirq":
/*!********************************!*\
  !*** ./src/app/api.service.js ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




var ApiService =
/** @class */
function () {
  // link = 'https://jsonplaceholder.typicode.com/';
  function ApiService(httpClient) {
    this.httpClient = httpClient;
  }

  ApiService.prototype.getUsers = function () {
    //return this.httpClient.get<any[] | any>(`${this.link}users${id ? `/${id}` : ''}`);
    return this.httpClient.get("https://cats-99c7b.firebaseio.com/users.json");
  };

  ApiService.prototype.getUsersById = function (id) {
    return this.httpClient.get("https://cats-99c7b.firebaseio.com/users/" + id + ".json");
  };

  ApiService.prototype.postUsers = function (email, fb, insta, name, username, img, password, id) {
    this.httpClient.patch("https://cats-99c7b.firebaseio.com/users/" + id + ".json", {
      'email': email,
      'facebook': fb,
      'instagram': insta,
      'name': name,
      'username': username,
      'img': img,
      'password': password,
      'id': id
    }).subscribe();
  };

  ApiService.prototype.getAllCats = function () {
    return this.httpClient.get("https://cats-99c7b.firebaseio.com/cats.json");
  };

  ApiService.prototype.getCatsById = function (id_breed, id) {
    return this.httpClient.get("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json");
  };

  ApiService.prototype.postCats = function (user_id, id_breed, id, age, sex, name, mainImg, img, length) {
    this.httpClient.put("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json", {
      'id_breed': id_breed,
      'id': id,
      'age': age,
      'sex': sex,
      'name': name,
      'main_img': mainImg,
      'img': img,
      'user_id': user_id
    }).subscribe();
    this.httpClient.put("https://cats-99c7b.firebaseio.com/users/" + user_id + "/own_cats/" + length + ".json", {
      'breed_id': id_breed,
      'id': id
    }).subscribe();
  };

  ApiService.prototype.editCats = function (user_id, id_breed, id, age, sex, name, mainImg, img, length) {
    this.httpClient.patch("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json", {
      'id_breed': id_breed,
      'id': id,
      'age': age,
      'sex': sex,
      'name': name,
      'main_img': mainImg,
      'img': img,
      'user_id': user_id
    }).subscribe();
  };

  ApiService.prototype.delUserLikeCats = function (id_user, id_breed, cat_id, countLikes, id) {
    this.httpClient.delete("https://cats-99c7b.firebaseio.com/users/" + id_user + "/cats_like/" + id + ".json", {// 'isLike': isLike      
    }).subscribe();
    this.httpClient.patch("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + cat_id + ".json", {
      'countLikes': countLikes
    }).subscribe();
  };

  ApiService.prototype.postUserLikeCats = function (id_user, id_breed, length, countLikes, id) {
    this.httpClient.put("https://cats-99c7b.firebaseio.com/users/" + id_user + "/cats_like/" + length + ".json", {
      'breed_id': id_breed,
      'id': id
    }).subscribe();
    this.httpClient.patch("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json", {
      'countLikes': countLikes
    }).subscribe();
  };

  ApiService.prototype.getCatNames = function () {
    return this.httpClient.get("https://cats-99c7b.firebaseio.com/cats_name.json");
  };

  ApiService.ctorParameters = function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];
  };

  ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
    providedIn: 'root'
  }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
  return ApiService;
}();



/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "r88A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-svg-icon-sprite */ "xLfj");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_5__["IconSpriteModule"]
            ],
            exports: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "pUeC":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "q6J5":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/list/list.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-carousel-cats></app-carousel-cats>\r\n<div class=\"content\">\r\n  <app-album-filter [catsBreed]=\"catsBreed\" (breedId)=\"displayBreedId($event)\" (bestId)=\"displayBestId($event)\"></app-album-filter>\r\n  <ng-template #loader>\r\n    <div class=\"loader\">\r\n      <img src=\"assets/img/loader.gif\" alt=\"\">\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #catList>\r\n  <div class=\"col-auto\">\r\n    <div class=\"vertical-thumb_img border\" *ngFor=\"let cat of catsItems | filter:breedId | filterBest:bestId; let i=index\">\r\n      <a [routerLink]=\"['/user', cat.user_id]\" class=\"img-text\">\r\n        <img *ngIf=\"cat.user_img\" class=\"img-circle\" src=\"{{cat.user_img}}\" alt=\"{{cat.username}}\">\r\n        <img *ngIf=\"!cat.user_img\" src=\"../assets/img/default.png\" alt=\"\" width=\"30\" height=\"30\">\r\n        <span>{{cat.username}}</span>\r\n      </a>\r\n      <figure>\r\n        <div class=\"img-thumb\">\r\n          <img src=\"{{ cat.main_img }}\" alt=\"\" class=\"img-thumb_img\" [routerLink]=\"['/cat-profile', cat.id_breed, cat.id]\">\r\n        </div>\r\n        <figcaption class=\"text-thumb bottom-text bottom-text-left\">\r\n           {{ cat.name }} , {{ cat.age }}\r\n        </figcaption>\r\n      </figure>\r\n      <div class=\"vertical-thumb_img-icons\">\r\n        <p class=\"heart\" (click)=\"change(cat)\" [class.like]=\"cat.isLike\">\r\n          <span>{{ cat.countLikes}}</span>\r\n        </p>\r\n        <div>\r\n          <a class=\"link-icon\" href=\"javascript:(void)\" alt=\"Images\" (click)=\"open(cat)\">\r\n            <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#photo'\" [width]=\"'28px'\" [height]=\"'28px'\" [viewBox]=\"'0 0 28 28'\"></svg-icon-sprite>\r\n          </a>\r\n          <a class=\"link-icon\" [routerLink]=\"['/cat-profile', cat.id_breed, cat.id]\" alt=\"View\">\r\n            <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#eye'\" [width]=\"'28px'\" [height]=\"'28px'\" [viewBox]=\"'0 0 28 28'\"></svg-icon-sprite>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </ng-template>\r\n  <ng-container *ngTemplateOutlet=\"showCatList ? catList : loader\"></ng-container>\r\n</div>");

/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



var AuthService = /** @class */ (function () {
    function AuthService(route) {
        this.route = route;
    }
    AuthService.prototype.sendToken = function (token) {
        sessionStorage.setItem("LoggedInUser", token);
    };
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem("LoggedInUser");
    };
    AuthService.prototype.login = function () {
        //return !!localStorage.getItem('token');
        return this.getToken() !== null;
    };
    AuthService.prototype.logout = function () {
        console.log(111);
        sessionStorage.removeItem('LoggedInUser');
        // TODO: navigate to home page
        this.route.navigate([{ outlets: { primary: ['login'], sidebar: null }
            }]);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "r88A":
/*!*******************************************!*\
  !*** ./src/app/core/nav/nav.component.ts ***!
  \*******************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "tvOE");
/* harmony import */ var _nav_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.scss */ "w05e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");






var NavComponent = /** @class */ (function () {
    function NavComponent(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-nav',
            template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_nav_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "s0G2":
/*!***********************************************!*\
  !*** ./src/app/breeds/list/list.component.ts ***!
  \***********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.component.html */ "Tubv");
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component.scss */ "cmL0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api.service */ "yTNM");





var ListComponent = /** @class */ (function () {
    function ListComponent(apiService) {
        this.apiService = apiService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllCats().subscribe(function (breeds) {
            _this.breeds = breeds;
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "s2In":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  not-found works!\r\n</p>\r\n");

/***/ }),

/***/ "s4Fk":
/*!************************************************************!*\
  !*** ./src/app/carousel-cats/carousel-cats.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhcm91c2VsLWNhdHMvY2Fyb3VzZWwtY2F0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "sI5Y":
/*!********************************************************!*\
  !*** ./src/app/album-filter/album-filter.component.ts ***!
  \********************************************************/
/*! exports provided: AlbumFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumFilterComponent", function() { return AlbumFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_album_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./album-filter.component.html */ "BXVH");
/* harmony import */ var _album_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-filter.component.scss */ "5yk5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AlbumFilterComponent = /** @class */ (function () {
    function AlbumFilterComponent() {
        this.catsBreed = [];
        this.breedId = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.bestId = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    AlbumFilterComponent.prototype.ngOnInit = function () {
    };
    AlbumFilterComponent.prototype.selectCatHandler = function (selectCatForm) {
        this.breedId.emit(selectCatForm.value.breed);
    };
    AlbumFilterComponent.prototype.selectBestHandler = function (selectBestForm) {
        this.bestId.emit(selectBestForm.value.filterBest);
    };
    AlbumFilterComponent.ctorParameters = function () { return []; };
    AlbumFilterComponent.propDecorators = {
        catsBreed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        breedId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        bestId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    AlbumFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-album-filter',
            template: _raw_loader_album_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_album_filter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AlbumFilterComponent);
    return AlbumFilterComponent;
}());



/***/ }),

/***/ "sVQy":
/*!************************************************************************!*\
  !*** ./src/app/sidebar/sidebar-profile/sidebar-profile.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Adventuring\";\n  src: url('adventuring-webfont.eot');\n  src: url('adventuring-webfont.eot') format(\"embedded-opentype\"), url('adventuring-webfont.woff2') format(\"woff2\"), url('adventuring-webfont.woff') format(\"woff\"), url('adventuring-webfont.ttf') format(\"truetype\"), url('adventuring-webfont.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: normal;\n}\n.sidebar-profile {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.sidebar-profile-name {\n  margin-left: 20px;\n}\n.sidebar-profile-name .name {\n  margin-bottom: 15px;\n}\n.sidebar-profile .end-btn {\n  margin-left: auto;\n  display: none;\n}\n.sidebar-profile .end-btn .icon {\n  vertical-align: sub;\n}\n@media only screen and (min-width: 768px) {\n  .sidebar-profile .end-btn {\n    margin-left: auto;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLXByb2ZpbGUvc2lkZWJhci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy9hYnN0cmFjdHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNFLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrUUFBQTtFQUtBLGdCQUFBO0VBQ0Esa0JBQUE7QUNyQ0Y7QUFIQTtFQUNFLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0FBS0Y7QUFIRTtFQUNFLGlCQUFBO0FBS0o7QUFISTtFQUNFLG1CQUFBO0FBS047QUFERTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQUdKO0FBREk7RUFDRSxtQkFBQTtBQUdOO0FDTEU7RURTRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQUFKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXItcHJvZmlsZS9zaWRlYmFyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbWFpbi1jb2xvci1kYXJrOiAjMjgxNDVlO1xyXG4kYWNjZW50LWNvbG9yOiAjZmZiYjY0O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZDcyZTJlO1xyXG4kYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG5cclxuJHZpYmVyLWNvbG9yOiAjODM0OTk1O1xyXG5cclxuXHJcblxyXG4ub3RoZXItdGhlbWUge1xyXG4gICR3aGl0ZTogI2ZmZjtcclxuICAkYmxhY2s6ICMwMDA7XHJcbiAgJG1haW4tY29sb3ItZGFyazogIzE0NWUyNztcclxuICAkbWFpbi1jb2xvci1tZWRpdW06ICM0NmZjNGY7XHJcbiAgJG1haW4tY29sb3ItbGlnaHQ6ICM5YmY2YTA7XHJcbiAgJGFjY2VudC1jb2xvcjogIzJmZGRmYztcclxuICAkc2Vjb25kYXJ5LWNvbG9yOiAjY2VjZGZkO1xyXG4gICRzZWNvbmRhcnktY29sb3ItbWVkaXVtOiAjYWRiMmY3O1xyXG4gICRib3JkZXItY29sb3I6ICMxODA0MDQ7XHJcbiAgJGxpZ2h0LWJsdWU6ICNmZGZmZjI7XHJcbiAgJHRleHQtY29sb3I6ICMyMTIzMjQ7XHJcbiAgJGdyYXktdGV4dDogIzViNWI1YjtcclxuICAkZ3JheS1iZzogI2ZhZmFmYTtcclxuICAkZ3JlZW46ICMxNmM5N2Q7XHJcbiAgJHZpYmVyLWNvbG9yOiAjODM0OTk1O1xyXG4gICRmYi1jb2xvcjogIzE4NzdGMjtcclxufVxyXG5cclxuLy8gRm9udHNcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWR2ZW50dXJpbmcnO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3QnKTtcclxuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuJGZvbnQtYmFzZTogJ0FkdmVudHVyaW5nJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtdGV4dDogJ1RpbWVzIE5ldyBSb21hbic7XHJcbi8vICRmb250LXNlY29uZGFyeTogJ0ZTIEpvZXkgQ3lyaWxsaWMnLFxyXG4vLyBzYW5zLXNlcmlmOyIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBZHZlbnR1cmluZ1wiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnN2Z1wiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5zaWRlYmFyLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNpZGViYXItcHJvZmlsZS1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uc2lkZWJhci1wcm9maWxlLW5hbWUgLm5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLnNpZGViYXItcHJvZmlsZSAuZW5kLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNpZGViYXItcHJvZmlsZSAuZW5kLWJ0biAuaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNpZGViYXItcHJvZmlsZSAuZW5kLWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIvLyBAaW5jbHVkZSBzbWFsbCB7fSAtIG1pbi13aWR0aDogNTc2cHhcclxuLy8gQGluY2x1ZGUgbWVkaXVtIHt9IC0gbWluLXdpZHRoOiA3NjhweFxyXG4vLyBAaW5jbHVkZSBsYXJnZSB7fSAtIG1pbi13aWR0aDogOTkycHhcclxuLy8gQGluY2x1ZGUgZXh0cmEtbGFyZ2Uge30gLSBtaW4td2lkdGg6IDEyODBweFxyXG4vLyBAaW5jbHVkZSBtYXgtd2lkdGgoJGJwKSB7fSAtICRicCBpcyB0aGUgd2lkdGggeW91IHdhbnRcclxuLy8gQGluY2x1ZGUgbWluLXdpZHRoKCRicCkge30gLSAkYnAgaXMgdGhlIHdpZHRoIHlvdSB3YW50XHJcblxyXG5AbWl4aW4gc21hbGwge1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWl4aW4gbWVkaXVtIHtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1peGluIGxhcmdlIHtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1peGluIGV4dHJhLWxhcmdlIHtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtaXhpbiBtYXgtd2lkdGgoJGJwKSB7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJwKSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWl4aW4gbWluLXdpZHRoKCRicCkge1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gQ2xlYXJmaXhcclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEZvbnQgc2l6ZSBpbiByZW1cclxuLy8gQGluY2x1ZGUgZm9udC1zaXplKCRzaXplKTsgLSAkc2l6ZSBpcyBpbiBweDtcclxuXHJcbkBmdW5jdGlvbiBjYWxjdWxhdGVSZW0oJHNpemUpIHtcclxuICAkcmVtU2l6ZTogJHNpemUgLyAxNnB4O1xyXG4gIEByZXR1cm4gJHJlbVNpemUgKiAxcmVtO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udC1zaXplKCRzaXplKSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBmb250LXNpemU6IGNhbGN1bGF0ZVJlbSgkc2l6ZSk7XHJcbn1cclxuXHJcblxyXG4vLyBQbGFjZWhvbGRlciBzdHlsaW5nXHJcbi8vXHJcbi8vIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHt9IC0gc3R5bGUgdGhlIHBsYWNlaG9sZGVyXHJcbi8vIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzIHt9IC0gc3R5bGUgdGhlIHBsYWNlaG9sZGVyIG9uIGZvY3VzXHJcblxyXG5cclxuQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudDt9XHJcbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnQ7fVxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50O31cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudDt9XHJcbn1cclxuXHJcbkBtaXhpbiBwbGFjZWhvbGRlci1mb2N1cyB7XHJcbiAgJjpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnQ7fVxyXG4gICY6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50O31cclxuICAmOmZvY3VzOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudDt9XHJcbiAgJjpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnQ7fVxyXG59Il19 */");

/***/ }),

/***/ "tROc":
/*!*************************************************************!*\
  !*** ./src/app/validator-directive/validators.directive.ts ***!
  \*************************************************************/
/*! exports provided: ValidatorsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorsDirective", function() { return ValidatorsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "YmkB");




var ValidatorsDirective = /** @class */ (function () {
    function ValidatorsDirective() {
    }
    ValidatorsDirective_1 = ValidatorsDirective;
    ValidatorsDirective.prototype.validate = function (control) {
        return Object(_validator__WEBPACK_IMPORTED_MODULE_3__["passwordMatch"])(control);
    };
    var ValidatorsDirective_1;
    ValidatorsDirective.ctorParameters = function () { return []; };
    ValidatorsDirective = ValidatorsDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appValidators][ngModel]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: ValidatorsDirective_1,
                    multi: true
                }
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ValidatorsDirective);
    return ValidatorsDirective;
}());



/***/ }),

/***/ "tf7+":
/*!********************************************************************!*\
  !*** ./src/app/carousel-articles/carousel-articles.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Adventuring\";\n  src: url('adventuring-webfont.eot');\n  src: url('adventuring-webfont.eot') format(\"embedded-opentype\"), url('adventuring-webfont.woff2') format(\"woff2\"), url('adventuring-webfont.woff') format(\"woff\"), url('adventuring-webfont.ttf') format(\"truetype\"), url('adventuring-webfont.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: normal;\n}\n.main-carousel {\n  position: relative;\n}\n.main-carousel_text {\n  position: absolute;\n  top: 18%;\n  right: 0;\n  width: 40%;\n  color: #fff;\n}\n.main-carousel_text h2 {\n  margin: 0 20px 20px;\n}\nowl-carousel-o ::ng-deep .owl-carousel .owl-dots {\n  position: absolute;\n  left: 50%;\n  z-index: 21;\n  bottom: 2%;\n}\nowl-carousel-o ::ng-deep .owl-carousel .owl-dots .owl-dot span {\n  background: transparent;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0 2px #fff;\n          box-shadow: 0 0 0 2px #fff;\n  width: 15px;\n  height: 15px;\n}\nowl-carousel-o ::ng-deep .owl-carousel .owl-dots .owl-dot.active span {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY2Fyb3VzZWwtYXJ0aWNsZXMvY2Fyb3VzZWwtYXJ0aWNsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NBO0VBQ0UsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtRQUFBO0VBS0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3JDRjtBQUpBO0VBQ0Usa0JBQUE7QUFNRjtBQUhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXRFRNO0FDZVI7QUFKRTtFQUNFLG1CQUFBO0FBTUo7QUFFUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQ1Y7QUFFWTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFkO0FBR1U7RUFDRSxnQkRyQ0o7QUNvQ1IiLCJmaWxlIjoic3JjL2FwcC9jYXJvdXNlbC1hcnRpY2xlcy9jYXJvdXNlbC1hcnRpY2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRtYWluLWNvbG9yLWRhcms6ICMyODE0NWU7XHJcbiRhY2NlbnQtY29sb3I6ICNmZmJiNjQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNkNzJlMmU7XHJcbiRib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcblxyXG4kdmliZXItY29sb3I6ICM4MzQ5OTU7XHJcblxyXG5cclxuXHJcbi5vdGhlci10aGVtZSB7XHJcbiAgJHdoaXRlOiAjZmZmO1xyXG4gICRibGFjazogIzAwMDtcclxuICAkbWFpbi1jb2xvci1kYXJrOiAjMTQ1ZTI3O1xyXG4gICRtYWluLWNvbG9yLW1lZGl1bTogIzQ2ZmM0ZjtcclxuICAkbWFpbi1jb2xvci1saWdodDogIzliZjZhMDtcclxuICAkYWNjZW50LWNvbG9yOiAjMmZkZGZjO1xyXG4gICRzZWNvbmRhcnktY29sb3I6ICNjZWNkZmQ7XHJcbiAgJHNlY29uZGFyeS1jb2xvci1tZWRpdW06ICNhZGIyZjc7XHJcbiAgJGJvcmRlci1jb2xvcjogIzE4MDQwNDtcclxuICAkbGlnaHQtYmx1ZTogI2ZkZmZmMjtcclxuICAkdGV4dC1jb2xvcjogIzIxMjMyNDtcclxuICAkZ3JheS10ZXh0OiAjNWI1YjViO1xyXG4gICRncmF5LWJnOiAjZmFmYWZhO1xyXG4gICRncmVlbjogIzE2Yzk3ZDtcclxuICAkdmliZXItY29sb3I6ICM4MzQ5OTU7XHJcbiAgJGZiLWNvbG9yOiAjMTg3N0YyO1xyXG59XHJcblxyXG4vLyBGb250c1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBZHZlbnR1cmluZyc7XHJcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdCcpO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnN2ZycpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4kZm9udC1iYXNlOiAnQWR2ZW50dXJpbmcnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC10ZXh0OiAnVGltZXMgTmV3IFJvbWFuJztcclxuLy8gJGZvbnQtc2Vjb25kYXJ5OiAnRlMgSm9leSBDeXJpbGxpYycsXHJcbi8vIHNhbnMtc2VyaWY7IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkdmVudHVyaW5nXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuc3ZnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLm1haW4tY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLWNhcm91c2VsX3RleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTglO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQwJTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFpbi1jYXJvdXNlbF90ZXh0IGgyIHtcbiAgbWFyZ2luOiAwIDIwcHggMjBweDtcbn1cblxub3dsLWNhcm91c2VsLW8gOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHotaW5kZXg6IDIxO1xuICBib3R0b206IDIlO1xufVxub3dsLWNhcm91c2VsLW8gOjpuZy1kZWVwIC5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzIC5vd2wtZG90IHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmY7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5vd2wtY2Fyb3VzZWwtbyA6Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "tvOE":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/nav/nav.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"wrapper-header\">\r\n  <div class=\"navbar-logo\">\r\n    <a [routerLink]=\"[{outlets: {primary: ['album'], sidebar: null}}]\" class=\"logo\">\r\n      <img src=\"assets/icons/logo.svg\" width=\"100%\"  height=\"100%\" alt=\"\">\r\n    </a>\r\n  </div>\r\n  <div class=\"hamburger-btn\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n  </div>\r\n  <nav class=\"navbar\">\r\n    <ul class=\"navbar-list\">\r\n      <li class=\"navbar-list-item\"><a [routerLink]=\"[{outlets: \r\n        {primary: ['album'], sidebar: null}\r\n      }]\">Album</a></li>\r\n      <li class=\"navbar-list-item\"><a [routerLink]=\"[{outlets: \r\n        {primary: ['breed', 'list'], sidebar: null}\r\n      }]\">Breeds</a></li>\r\n      <li class=\"navbar-list-item\"><a [routerLink]=\"[{outlets: \r\n        {primary: ['cat-names'], sidebar: null}\r\n      }]\">Cat Names</a></li>\r\n      <li class=\"navbar-list-item\"><a [routerLink]=\"[{outlets: \r\n        {primary: ['cat-articles'], sidebar: null}\r\n      }]\">Articles</a></li>\r\n      <li class=\"navbar-list-item\"><a [routerLink]=\"[{outlets: \r\n        {primary: ['user', 'list'], sidebar: null}\r\n      }]\">Users</a></li>\r\n      <li *ngIf=\"!auth.getToken()\" class=\"header-btn shape\"><a  [routerLink]=\"[{outlets: \r\n        {primary: ['login'], sidebar: null}\r\n      }]\" class=\"\"> Login </a>\r\n      </li>\r\n      <li *ngIf=\"auth.getToken()\" class=\"header-btn border-top shape\">\r\n        <a [routerLink]=\"[{outlets: {primary: ['my-cats'], sidebar: ['sidebar-profile']}}]\" class=\"\">\r\n          <!-- <span class=\"icon\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#gear'\" [width]=\"'20px'\" [height]=\"'20px'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite></span>  -->\r\n            For me\r\n        </a>\r\n      </li>\r\n      <li *ngIf=\"auth.getToken()\" class=\"header-btn logout-btn\">\r\n        <a routerLink=\"\" (click)=\"auth.logout()\">\r\n          <span class=\"icon\"><svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#logout'\" [width]=\"'20px'\" [height]=\"'20px'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite></span>\r\n          Logout\r\n        </a></li>\r\n    </ul>\r\n  </nav>\r\n  <!-- <a  *ngIf=\"auth.getToken()\" routerLink=\"\" (click)=\"auth.logout()\" class=\"btn header-btn primary-btn\">Logout</a> -->\r\n</header>");

/***/ }),

/***/ "u+pc":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _album_list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../album/list/list.component */ "Jh13");
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/list/list.component */ "yJqC");
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user/user.component */ "KX+F");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../not-found/not-found.component */ "nod/");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/register/register.component */ "ZGml");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.component */ "W6KJ");
/* harmony import */ var _user_cats_user_cats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-cats/user-cats.component */ "0OIl");
/* harmony import */ var _favourite_cats_favourite_cats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../favourite-cats/favourite-cats.component */ "fC7V");
/* harmony import */ var _createEdit_cat_create_create_cat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../createEdit-cat/create/create-cat.component */ "wHZH");
/* harmony import */ var _createEdit_cat_edit_edit_cat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../createEdit-cat/edit/edit-cat.component */ "eumR");
/* harmony import */ var _cat_profile_cat_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cat-profile/cat-profile.component */ "z2+o");
/* harmony import */ var _cat_articles_articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cat-articles/articles/cat-articles.component */ "GgGG");
/* harmony import */ var _cat_articles_list_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cat-articles/list/list.component */ "0yI1");
/* harmony import */ var _sidebar_sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../sidebar/sidebar-profile/sidebar-profile.component */ "mQpj");
/* harmony import */ var _breeds_breed_breed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../breeds/breed/breed.component */ "1+bU");
/* harmony import */ var _cat_names_cat_names_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cat-names/cat-names.component */ "YKja");
/* harmony import */ var _breeds_list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../breeds/list/list.component */ "s0G2");



















var routes = [
    {
        path: 'album',
        pathMatch: 'full',
        component: _album_list_list_component__WEBPACK_IMPORTED_MODULE_1__["ListComponent"]
    },
    {
        path: 'breed',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/breed/list'
            },
            {
                path: 'list',
                component: _breeds_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"]
            },
            {
                path: ':id',
                component: _breeds_breed_breed_component__WEBPACK_IMPORTED_MODULE_16__["BreedComponent"]
            }
        ]
    },
    {
        path: 'user',
        // canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/user/list'
            },
            {
                path: 'list',
                component: _user_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
            },
            {
                path: ':id',
                component: _user_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
            }
        ]
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'registration',
        pathMatch: 'full',
        component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
    },
    {
        path: 'profile',
        pathMatch: 'full',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    },
    {
        path: 'sidebar-profile',
        component: _sidebar_sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_15__["SidebarProfileComponent"],
        outlet: 'sidebar'
    },
    {
        path: 'my-cats',
        component: _user_cats_user_cats_component__WEBPACK_IMPORTED_MODULE_8__["UserCatsComponent"]
    },
    {
        path: 'favourite-cats',
        component: _favourite_cats_favourite_cats_component__WEBPACK_IMPORTED_MODULE_9__["FavouriteCatsComponent"]
    },
    {
        path: 'create-cat',
        component: _createEdit_cat_create_create_cat_component__WEBPACK_IMPORTED_MODULE_10__["CreateCatComponent"]
    },
    {
        path: 'edit-cat/:breed_id/:id',
        component: _createEdit_cat_edit_edit_cat_component__WEBPACK_IMPORTED_MODULE_11__["EditCatComponent"]
    },
    {
        path: 'cat-profile/:breed_id/:id',
        component: _cat_profile_cat_profile_component__WEBPACK_IMPORTED_MODULE_12__["CatProfileComponent"]
    },
    {
        path: 'cat-names',
        component: _cat_names_cat_names_component__WEBPACK_IMPORTED_MODULE_17__["CatNamesComponent"]
    },
    {
        path: 'cat-articles',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/cat-articles/list'
            },
            {
                path: 'list',
                component: _cat_articles_list_list_component__WEBPACK_IMPORTED_MODULE_14__["ListComponent"]
            },
            { path: 'article-1', component: _cat_articles_articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_13__["CatArticlesComponent"], data: { kind: '1' } },
            { path: 'article-2', component: _cat_articles_articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_13__["CatArticlesComponent"], data: { kind: '2' } },
            { path: 'article-3', component: _cat_articles_articles_cat_articles_component__WEBPACK_IMPORTED_MODULE_13__["CatArticlesComponent"], data: { kind: '3' } }
        ]
    },
    {
        path: "**",
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "uECB":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createEdit-cat/create/create-cat.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-form two-col\">\r\n  <div class=\"left-col-form\"></div>\r\n  <div class=\"right-col-form\">\r\n    <h2>Create cat</h2>\r\n    <form #addCatForm=\"ngForm\" (ngSubmit)=\"addCatHandler(addCatForm)\" class=\"form\">\r\n      <div class=\"form-row col-auto\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input #nameInput=\"ngModel\" ngModel class=\"form-input\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"Enter Name\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"breed\">Breed</label>\r\n          <select  #breedInput=\"ngModel\" ngModel name=\"breed\" class=\"form-input\" id=\"breed\" placeholder=\"Choose Breed\">\r\n            <option value=\"\" disabled>Choose a breed</option>\r\n            <option *ngFor=\"let catBreed of breeds\" [value]=\"catBreed.breed_id\">{{ catBreed.name }}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"age\">Age</label>\r\n          <input #ageInput=\"ngModel\" ngModel name=\"age\" class=\"form-input\" id=\"age\" type=\"text\" placeholder=\"Enter Age\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"sex\">Sex</label>\r\n          <select  #sexInput=\"ngModel\" ngModel name=\"sex\" class=\"form-input\" id=\"sex\" placeholder=\"Choose Sex\">\r\n            <option value=\"\" disabled>Choose a sex</option>\r\n            <option value=\"Male\">Male</option>\r\n            <option value=\"Female\">Female</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group\">\r\n          <label for=\"mainImg\">Main Image</label>\r\n          <input #mainImgInput=\"ngModel\" ngModel name=\"mainImg\" (input)=\"inputImgChange($event.target.value)\" class=\"form-input\" id=\"mainImg\" type=\"text\" placeholder=\"Enter Main Img\" />\r\n          <div *ngIf=\"hasMainImg\" class=\"main-img img-thumb\">\r\n            <img src=\"{{this.newMainImg}}\" alt=\"\" class=\"img-thumb_img\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row col-auto\">\r\n        <!-- Gallery: -->\r\n          <div class=\"form-group\" *ngFor=\"let inputImg of inputsImg; let i = index;\" #img>\r\n            <label for=\"image\">Image</label>\r\n            <input #imageInput=\"ngModel\" ngModel name=\"image {{i}}\" (input)=\"inputImgsChange($event.target.value)\" class=\"form-input\" id=\"image\" type=\"text\" placeholder=\"Enter Image\" />\r\n            <span class=\"del-icon\" (click)=\"delComponent(ev,i,img)\" *ngIf=\"isRemoveInput\">\r\n              <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#minus'\" [width]=\"'20px'\" [height]=\"'20px'\" [attr.style]=\"'color: #d72e2e'\" [viewBox]=\"'0 0 20 20'\"></svg-icon-sprite>\r\n            </span>\r\n          </div>  \r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"btn-pos\">\r\n          <div (click)=\"addComponent()\" class=\"btn primary-btn\">\r\n            <span class=\"icon\">\r\n              <svg-icon-sprite [src]=\"'assets/sprites/sprite.svg#more'\" [width]=\"'12px'\" [height]=\"'12px'\" [viewBox]=\"'0 0 12 12'\"></svg-icon-sprite>\r\n            </span>\r\n            Add image\r\n          </div>\r\n        </div>\r\n       \r\n          <div class=\"form-group-img three-equal-col\">\r\n            <div class=\"group-img img-thumb\" *ngFor=\"let img of newImg\">\r\n              <img src=\"{{ img }}\" alt=\"\" class=\"img-thumb_img\">\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"btn-pos\">\r\n          <button type=\"submit\" class=\"btn primary-btn\">Save</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- {{addCatForm.value | json}} -->");

/***/ }),

/***/ "vFQZ":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carousel-cats/carousel-cats.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <h2 class=\"title-block\">Top 3 most liked cats</h2>\r\n  <owl-carousel-o [options]=\"customOptions\">\r\n    <ng-template carouselSlide *ngFor=\"let cats of topLiked\">\r\n      <div class=\"img-thumb\">\r\n        <img class=\"img-thumb_img\" src=\"{{ cats.main_img }}\">\r\n      </div>\r\n    </ng-template>  \r\n  </owl-carousel-o>\r\n</div>");

/***/ }),

/***/ "w05e":
/*!*********************************************!*\
  !*** ./src/app/core/nav/nav.component.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Adventuring\";\n  src: url('adventuring-webfont.eot');\n  src: url('adventuring-webfont.eot') format(\"embedded-opentype\"), url('adventuring-webfont.woff2') format(\"woff2\"), url('adventuring-webfont.woff') format(\"woff\"), url('adventuring-webfont.ttf') format(\"truetype\"), url('adventuring-webfont.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29yZS9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNFLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrUUFBQTtFQUtBLGdCQUFBO0VBQ0Esa0JBQUE7QUNyQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2xvcnNcclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGJsYWNrOiAjMDAwO1xyXG4kbWFpbi1jb2xvci1kYXJrOiAjMjgxNDVlO1xyXG4kYWNjZW50LWNvbG9yOiAjZmZiYjY0O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZDcyZTJlO1xyXG4kYm9yZGVyLWNvbG9yOiAjZTllOWU5O1xyXG5cclxuJHZpYmVyLWNvbG9yOiAjODM0OTk1O1xyXG5cclxuXHJcblxyXG4ub3RoZXItdGhlbWUge1xyXG4gICR3aGl0ZTogI2ZmZjtcclxuICAkYmxhY2s6ICMwMDA7XHJcbiAgJG1haW4tY29sb3ItZGFyazogIzE0NWUyNztcclxuICAkbWFpbi1jb2xvci1tZWRpdW06ICM0NmZjNGY7XHJcbiAgJG1haW4tY29sb3ItbGlnaHQ6ICM5YmY2YTA7XHJcbiAgJGFjY2VudC1jb2xvcjogIzJmZGRmYztcclxuICAkc2Vjb25kYXJ5LWNvbG9yOiAjY2VjZGZkO1xyXG4gICRzZWNvbmRhcnktY29sb3ItbWVkaXVtOiAjYWRiMmY3O1xyXG4gICRib3JkZXItY29sb3I6ICMxODA0MDQ7XHJcbiAgJGxpZ2h0LWJsdWU6ICNmZGZmZjI7XHJcbiAgJHRleHQtY29sb3I6ICMyMTIzMjQ7XHJcbiAgJGdyYXktdGV4dDogIzViNWI1YjtcclxuICAkZ3JheS1iZzogI2ZhZmFmYTtcclxuICAkZ3JlZW46ICMxNmM5N2Q7XHJcbiAgJHZpYmVyLWNvbG9yOiAjODM0OTk1O1xyXG4gICRmYi1jb2xvcjogIzE4NzdGMjtcclxufVxyXG5cclxuLy8gRm9udHNcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWR2ZW50dXJpbmcnO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3QnKTtcclxuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuJGZvbnQtYmFzZTogJ0FkdmVudHVyaW5nJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtdGV4dDogJ1RpbWVzIE5ldyBSb21hbic7XHJcbi8vICRmb250LXNlY29uZGFyeTogJ0ZTIEpvZXkgQ3lyaWxsaWMnLFxyXG4vLyBzYW5zLXNlcmlmOyIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJBZHZlbnR1cmluZ1wiO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnN2Z1wiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn0iXX0= */");

/***/ }),

/***/ "wA4T":
/*!***********************************************!*\
  !*** ./src/app/user/user/user.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n  font-family: \"Adventuring\";\n  src: url('adventuring-webfont.eot');\n  src: url('adventuring-webfont.eot') format(\"embedded-opentype\"), url('adventuring-webfont.woff2') format(\"woff2\"), url('adventuring-webfont.woff') format(\"woff\"), url('adventuring-webfont.ttf') format(\"truetype\"), url('adventuring-webfont.svg') format(\"svg\");\n  font-weight: 800;\n  font-style: normal;\n}\n.wrap-user .user-img {\n  width: 200px;\n  height: 200px;\n  margin: 0 auto;\n}\n.wrap-user .user-cats {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMvYWJzdHJhY3RzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NBO0VBQ0UsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtRQUFBO0VBS0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3JDRjtBQUhFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBS0o7QUFGRTtFQUNFLGdCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbG9yc1xyXG5cclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRtYWluLWNvbG9yLWRhcms6ICMyODE0NWU7XHJcbiRhY2NlbnQtY29sb3I6ICNmZmJiNjQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNkNzJlMmU7XHJcbiRib3JkZXItY29sb3I6ICNlOWU5ZTk7XHJcblxyXG4kdmliZXItY29sb3I6ICM4MzQ5OTU7XHJcblxyXG5cclxuXHJcbi5vdGhlci10aGVtZSB7XHJcbiAgJHdoaXRlOiAjZmZmO1xyXG4gICRibGFjazogIzAwMDtcclxuICAkbWFpbi1jb2xvci1kYXJrOiAjMTQ1ZTI3O1xyXG4gICRtYWluLWNvbG9yLW1lZGl1bTogIzQ2ZmM0ZjtcclxuICAkbWFpbi1jb2xvci1saWdodDogIzliZjZhMDtcclxuICAkYWNjZW50LWNvbG9yOiAjMmZkZGZjO1xyXG4gICRzZWNvbmRhcnktY29sb3I6ICNjZWNkZmQ7XHJcbiAgJHNlY29uZGFyeS1jb2xvci1tZWRpdW06ICNhZGIyZjc7XHJcbiAgJGJvcmRlci1jb2xvcjogIzE4MDQwNDtcclxuICAkbGlnaHQtYmx1ZTogI2ZkZmZmMjtcclxuICAkdGV4dC1jb2xvcjogIzIxMjMyNDtcclxuICAkZ3JheS10ZXh0OiAjNWI1YjViO1xyXG4gICRncmF5LWJnOiAjZmFmYWZhO1xyXG4gICRncmVlbjogIzE2Yzk3ZDtcclxuICAkdmliZXItY29sb3I6ICM4MzQ5OTU7XHJcbiAgJGZiLWNvbG9yOiAjMTg3N0YyO1xyXG59XHJcblxyXG4vLyBGb250c1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBZHZlbnR1cmluZyc7XHJcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdCcpO1xyXG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpLFxyXG4gICAgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXHJcbiAgICB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnN2ZycpIGZvcm1hdCgnc3ZnJyk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4kZm9udC1iYXNlOiAnQWR2ZW50dXJpbmcnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC10ZXh0OiAnVGltZXMgTmV3IFJvbWFuJztcclxuLy8gJGZvbnQtc2Vjb25kYXJ5OiAnRlMgSm9leSBDeXJpbGxpYycsXHJcbi8vIHNhbnMtc2VyaWY7IiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkFkdmVudHVyaW5nXCI7XG4gIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuZW90XCIpO1xuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi9hc3NldHMvZm9udHMvQWR2ZW50dXJpbmcvYWR2ZW50dXJpbmctd2ViZm9udC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy9BZHZlbnR1cmluZy9hZHZlbnR1cmluZy13ZWJmb250LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnRzL0FkdmVudHVyaW5nL2FkdmVudHVyaW5nLXdlYmZvbnQuc3ZnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLndyYXAtdXNlciAudXNlci1pbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLndyYXAtdXNlciAudXNlci1jYXRzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "wCP4":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-profile/sidebar-profile.component */ "mQpj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-svg-icon-sprite */ "xLfj");






var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_3__["SidebarProfileComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_5__["IconSpriteModule"]
            ],
            exports: [_sidebar_profile_sidebar_profile_component__WEBPACK_IMPORTED_MODULE_3__["SidebarProfileComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "wHZH":
/*!***************************************************************!*\
  !*** ./src/app/createEdit-cat/create/create-cat.component.ts ***!
  \***************************************************************/
/*! exports provided: CreateCatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCatComponent", function() { return CreateCatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_cat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-cat.component.html */ "uECB");
/* harmony import */ var _create_cat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-cat.component.scss */ "VsXt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "yTNM");





var CreateCatComponent = /** @class */ (function () {
    function CreateCatComponent(apiService) {
        this.apiService = apiService;
        this.userID = sessionStorage.getItem("LoggedInUser");
        this.user = [];
        this.cats = [];
        this.catsItems = [];
        this.ownCats = [];
        this.breeds = [];
        this.images = [];
        this.inputsImg = [''];
        this.newImg = [];
        this.isRemoveInput = true;
        this.hasMainImg = false;
    }
    CreateCatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllCats().subscribe(function (cats) {
            _this.cats = cats;
            for (var key in _this.cats) {
                _this.breedID = key;
                var breed = {
                    breed_id: _this.breedID,
                    name: _this.cats[key].breeds_name
                };
                _this.breeds.push(breed);
            }
        });
        this.apiService.getUsersById(this.userID).subscribe(function (user) {
            _this.user = user;
            _this.ownCats = _this.user.ownCats;
        });
    };
    CreateCatComponent.prototype.inputImgChange = function (src) {
        src ? this.hasMainImg = true : "";
        this.newMainImg = src;
    };
    CreateCatComponent.prototype.inputImgsChange = function (src) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i');
        if (pattern.test(src)) {
            this.newImg.push(src);
        }
    };
    CreateCatComponent.prototype.addComponent = function () {
        this.inputsImg = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.inputsImg, [""]);
        this.isRemoveInput = true;
    };
    CreateCatComponent.prototype.delComponent = function (el, index, input) {
        this.inputsImg.splice(index, 1);
        input.remove();
        if ((this.inputsImg.length - 1) == 0) {
            this.isRemoveInput = false;
        }
    };
    CreateCatComponent.prototype.addCatHandler = function (addCatForm) {
        for (var prop in addCatForm.value) {
            if (prop.includes("image")) {
                this.images.push(addCatForm.value[prop]);
            }
        }
        if (this.cats[addCatForm.value.breed].cats) {
            this.apiService.postCats(this.userID, addCatForm.value.breed, this.cats[addCatForm.value.breed].cats.length, addCatForm.value.age, addCatForm.value.sex, addCatForm.value.name, addCatForm.value.mainImg, this.images, this.ownCats.length);
        }
        else {
            this.apiService.postCats(this.userID, addCatForm.value.breed, 0, addCatForm.value.age, addCatForm.value.sex, addCatForm.value.name, addCatForm.value.mainImg, this.images, this.ownCats.length);
        }
    };
    CreateCatComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
    ]; };
    CreateCatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-create-cat',
            template: _raw_loader_create_cat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_create_cat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], CreateCatComponent);
    return CreateCatComponent;
}());



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-user\">\r\n  <div class=\"two-col\">\r\n    <div class=\"user-img circle-img\">\r\n      <img *ngIf=\"user?.img\" src=\"{{user?.img}}\" alt=\"{{ user?.username }}\">\r\n      <img *ngIf=\"!user?.img\" src=\"../assets/img/default.png\" alt=\"\" width=\"200\" height=\"200\">\r\n    </div>\r\n      <form [formGroup]=\"editProfileForm\" (ngSubmit)=\"onFormSubmit(editProfileForm)\" class=\"form\">\r\n        <div class=\"form-row col-auto\">\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input formControlName=\"username\" class=\"form-input\" id=\"username\" type=\"text\" name=\"username\" placeholder=\"Enter Username\"/>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input formControlName=\"name\" class=\"form-input\" id=\"name\" type=\"text\" name=\"name\" placeholder=\"Enter Name\"/>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input formControlName=\"email\" class=\"form-input\" id=\"email\" type=\"text\" name=\"email\" placeholder=\"Enter Email\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row col-auto\" formGroupName=\"passwords\">\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input formControlName=\"password\" class=\"form-input\" id=\"password\" type=\"password\" name=\"password\" placeholder=\"Enter New Password\"/>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password_repeat\">Password Repeat</label>\r\n            <input formControlName=\"password_repeat\" class=\"form-input\" id=\"password_repeat\" type=\"password\" name=\"password_repeat\" placeholder=\"Enter Repeat Password\"/>\r\n            <div *ngIf=\"editProfileForm.get('passwords')?.errors?.passwordMatch\">Password don`t match</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row col-auto\">\r\n          <div class=\"form-group\">\r\n            <label for=\"facebook\">Facebook</label>\r\n            <input formControlName=\"facebook\" class=\"form-input\" id=\"facebook\" type=\"text\" name=\"facebook\" placeholder=\"Enter Facebook\"/>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"instagram\">Instagram</label>\r\n            <input formControlName=\"instagram\" class=\"form-input\" id=\"instagram\" type=\"text\" name=\"instagram\" placeholder=\"Enter Instagram\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group\">\r\n            <div class=\"form-group\">\r\n              <label for=\"iimg\">Image</label>\r\n              <input formControlName=\"img\" class=\"form-input\" id=\"img\" type=\"text\" name=\"image\" placeholder=\"Enter Image\"/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"btn-pos\">\r\n            <button type=\"submit\" class=\"btn primary-btn\">Save</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "yJqC":
/*!*********************************************!*\
  !*** ./src/app/user/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.component.html */ "Ez0v");
/* harmony import */ var _list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component.scss */ "m82V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "yTNM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






var ListComponent = /** @class */ (function () {
    function ListComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.users = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-list',
            template: _raw_loader_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "yTNM":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var ApiService = /** @class */ (function () {
    // link = 'https://jsonplaceholder.typicode.com/';
    function ApiService(httpClient) {
        this.httpClient = httpClient;
    }
    ApiService.prototype.getUsers = function () {
        //return this.httpClient.get<any[] | any>(`${this.link}users${id ? `/${id}` : ''}`);
        return this.httpClient.get("https://cats-99c7b.firebaseio.com/users.json");
    };
    ApiService.prototype.getUsersById = function (id) {
        return this.httpClient.get("https://cats-99c7b.firebaseio.com/users/" + id + ".json");
    };
    ApiService.prototype.postUsers = function (email, fb, insta, name, username, img, password, id) {
        this.httpClient.patch("https://cats-99c7b.firebaseio.com/users/" + id + ".json", {
            'email': email,
            'facebook': fb,
            'instagram': insta,
            'name': name,
            'username': username,
            'img': img,
            'password': password,
            'id': id
        }).subscribe();
    };
    ApiService.prototype.getAllCats = function () {
        return this.httpClient.get("https://cats-99c7b.firebaseio.com/cats.json");
    };
    ApiService.prototype.getCatsById = function (id_breed, id) {
        return this.httpClient.get("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json");
    };
    ApiService.prototype.postCats = function (user_id, id_breed, id, age, sex, name, mainImg, img, length) {
        this.httpClient.put("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json", {
            'id_breed': id_breed,
            'id': id,
            'age': age,
            'sex': sex,
            'name': name,
            'main_img': mainImg,
            'img': img,
            'user_id': user_id
        }).subscribe();
        this.httpClient.put("https://cats-99c7b.firebaseio.com/users/" + user_id + "/own_cats/" + length + ".json", {
            'breed_id': id_breed,
            'id': id,
        })
            .subscribe();
    };
    ApiService.prototype.editCats = function (user_id, id_breed, id, age, sex, name, mainImg, img, length) {
        this.httpClient.patch("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json", {
            'id_breed': id_breed,
            'id': id,
            'age': age,
            'sex': sex,
            'name': name,
            'main_img': mainImg,
            'img': img,
            'user_id': user_id
        }).subscribe();
    };
    ApiService.prototype.delUserLikeCats = function (id_user, id_breed, cat_id, countLikes, id) {
        this.httpClient.delete("https://cats-99c7b.firebaseio.com/users/" + id_user + "/cats_like/" + id + ".json", {
        // 'isLike': isLike      
        })
            .subscribe();
        this.httpClient.patch("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + cat_id + ".json", {
            'countLikes': countLikes
        }).subscribe();
    };
    ApiService.prototype.postUserLikeCats = function (id_user, id_breed, length, countLikes, id) {
        this.httpClient.put("https://cats-99c7b.firebaseio.com/users/" + id_user + "/cats_like/" + length + ".json", {
            'breed_id': id_breed,
            'id': id
        })
            .subscribe();
        this.httpClient.patch("https://cats-99c7b.firebaseio.com/cats/" + id_breed + "/cats/" + id + ".json", {
            'countLikes': countLikes
        }).subscribe();
    };
    ApiService.prototype.getCatNames = function () {
        return this.httpClient.get("https://cats-99c7b.firebaseio.com/cats_name.json");
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "z2+o":
/*!******************************************************!*\
  !*** ./src/app/cat-profile/cat-profile.component.ts ***!
  \******************************************************/
/*! exports provided: CatProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatProfileComponent", function() { return CatProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cat_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cat-profile.component.html */ "f53y");
/* harmony import */ var _cat_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat-profile.component.scss */ "X9vk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api.service */ "yTNM");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__);







var CatProfileComponent = /** @class */ (function () {
    function CatProfileComponent(ActivetedRoute, apiService, lightbox) {
        this.ActivetedRoute = ActivetedRoute;
        this.apiService = apiService;
        this.lightbox = lightbox;
        this.userID = sessionStorage.getItem("LoggedInUser");
        this.user = [];
        this.cat = [];
        this.cats = [];
        this.albumCats = [];
        this.hasBtnEdit = false;
        this.hasGallery = false;
    }
    CatProfileComponent.prototype.open = function (cat) {
        // popup images
        var allImages = cat.img.concat(cat.main_img);
        for (var _i = 0, allImages_1 = allImages; _i < allImages_1.length; _i++) {
            var img = allImages_1[_i];
            var album = {
                src: img,
                caption: cat.name
            };
            this.albumCats.push(album);
        }
        // open lightbox
        this.lightbox.open(this.albumCats, cat.id, { centerVertically: true });
    };
    CatProfileComponent.prototype.close = function () {
        // close lightbox programmatically
        this.lightbox.close();
    };
    CatProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getCatsById(this.ActivetedRoute.snapshot.params.breed_id, this.ActivetedRoute.snapshot.params.id).subscribe(function (cat) {
            _this.cat = cat;
            if (_this.cat.img.length) {
                _this.hasGallery = true;
            }
            if (_this.cat.user_id == _this.userID) {
                _this.hasBtnEdit = true;
            }
            _this.apiService.getUsersById(_this.cat.user_id).subscribe(function (user) {
                _this.user = user;
                _this.cat.username = _this.user.username;
                _this.cat.user_img = _this.user.img;
            });
            _this.apiService.getAllCats().subscribe(function (cats) {
                _this.cats = cats;
                for (var key in _this.cats) {
                    _this.breedName = _this.cats[_this.cat.id_breed].breeds_name;
                }
            });
        });
    };
    CatProfileComponent.prototype.countLikes = function (count) {
        return count > 0;
    };
    CatProfileComponent.prototype.checkSex = function (sex) {
        return sex == 'Male' ? true : false;
    };
    CatProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
        { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__["Lightbox"] }
    ]; };
    CatProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cat-profile',
            template: _raw_loader_cat_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cat_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_6__["Lightbox"]])
    ], CatProfileComponent);
    return CatProfileComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zu2e":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrap-form two-col\">\r\n  <div class=\"left-col-form\"></div>\r\n  <div class=\"right-col-form\">\r\n    <h2>Login</h2>\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"loginHandler(loginForm)\" class=\"form\">\r\n      <div class=\"form-row one-col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"username\">Email</label>\r\n          <input #emailInput=\"ngModel\" ngModel type=\"text\" class=\"form-input\" placeholder=\"Enter Email\" name=\"email\" required email pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\">\r\n          <div *ngIf=\"emailInput.invalid && emailInput.touched\">Please enter a valid email!</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input #passInput=\"ngModel\" ngModel type=\"password\" class=\"form-input\" placeholder=\"Enter Password\" name=\"password\" required minlength=\"6\">\r\n          <div *ngIf=\"passInput.errors?.required && passInput.touched\">Please enter a password!</div>\r\n          <div *ngIf=\"passInput.errors?.minlength?.actualLength && passInput.touched\">The password should contains at least 6 symbols.</div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"btn-pos\">\r\n          <button type=\"submit\" class=\"btn primary-btn\" [disabled]=\"loginForm.invalid\">Login</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <a [routerLink]=\"['/registration']\" class=\"btn primary-btn\">Register</a>\r\n  </div>\r\n</div>\r\n\r\n<!-- {{loginForm.value | json}} -->\r\n<!-- слагаме въпросителните за сучаите когато нямаме грешки -->");

/***/ }),

/***/ "zyHg":
/*!***************************************!*\
  !*** ./src/app/album/album.module.ts ***!
  \***************************************/
/*! exports provided: AlbumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumModule", function() { return AlbumModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "Jh13");
/* harmony import */ var _filterPipe_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterPipe/filter.pipe */ "I0nY");
/* harmony import */ var _album_filter_album_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../album-filter/album-filter.component */ "sI5Y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-routing/app-routing.module */ "u+pc");
/* harmony import */ var _filterPipe_filter_best_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filterPipe/filter-best.pipe */ "m8TL");
/* harmony import */ var ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-svg-icon-sprite */ "xLfj");
/* harmony import */ var _carousel_cats_carousel_cats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../carousel-cats/carousel-cats.component */ "CPKB");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");












var AlbumModule = /** @class */ (function () {
    function AlbumModule() {
    }
    AlbumModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _filterPipe_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _album_filter_album_filter_component__WEBPACK_IMPORTED_MODULE_5__["AlbumFilterComponent"], _filterPipe_filter_best_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterBestPipe"], _carousel_cats_carousel_cats_component__WEBPACK_IMPORTED_MODULE_10__["CarouselCatsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                ng_svg_icon_sprite__WEBPACK_IMPORTED_MODULE_9__["IconSpriteModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"]
            ],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]]
        })
    ], AlbumModule);
    return AlbumModule;
}());



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map