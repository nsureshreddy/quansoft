webpackJsonp(["main"],{

/***/ "../../../../../ng/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../ng/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ng/app/angular-material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                material_1.MatToolbarModule,
                material_1.MatSidenavModule,
                material_1.MatMenuModule,
                material_1.MatTabsModule,
                material_1.MatButtonModule,
                material_1.MatDialogModule,
                material_1.MatTableModule,
                material_1.MatPaginatorModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatProgressBarModule,
                material_1.MatCardModule,
                material_1.MatNativeDateModule,
                material_1.MatDatepickerModule,
                material_1.MatGridListModule,
                material_1.MatListModule,
                material_1.MatTooltipModule,
                material_1.MatStepperModule,
                material_1.MatSnackBarModule,
                material_1.MatChipsModule,
                material_1.MatIconModule,
                material_1.MatAutocompleteModule
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());
exports.AngularMaterialModule = AngularMaterialModule;


/***/ }),

/***/ "../../../../../ng/app/app-models/paymentTerms.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PaymentTerm = /** @class */ (function () {
    function PaymentTerm() {
    }
    return PaymentTerm;
}());
exports.PaymentTerm = PaymentTerm;


/***/ }),

/***/ "../../../../../ng/app/app-models/project.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());
exports.Project = Project;


/***/ }),

/***/ "../../../../../ng/app/app-models/scopeItem.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScopeItem = /** @class */ (function () {
    function ScopeItem() {
    }
    return ScopeItem;
}());
exports.ScopeItem = ScopeItem;
exports.SCOPE_ITEMS = [
    {
        name: 'Cost Estimates',
        workItems: [
            { name: 'Quantity Take of Civil works', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Quantity Take of Finishes', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Quantity Take of Rebar', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Quantity Take of Interiors', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Quantity Take of MEP', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Cost Estimates', uom: '', rate: 0, quantity: 0, amount: 0 }
        ]
    },
    {
        name: 'Bill Auditing',
        workItems: [
            { name: 'Valuation of Running Account bills', uom: '', rate: 0, quantity: 0, amount: 0, },
            { name: 'Change Orders if any', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Cash Flow Projections', uom: '', rate: 0, quantity: 0, amount: 0, },
            { name: 'Settlement of Claims if any', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Project Closure report', uom: '', rate: 0, quantity: 0, amount: 0 },
        ]
    },
    {
        name: 'Contracts Management',
        workItems: [
            { name: 'Preparation of Tender Document', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Prequalification of Vendors', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Issue of Request for Proposal for shortlisted vendors', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Floating of Tenders to shortlisted vendors', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Conducting Pre-bid Meetings', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Conducting Negotiation Meetings', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Evaluation of Bids on Technical & Commercial', uom: '', rate: 0, quantity: 0, amount: 0 },
            { name: 'Note for Record and Draft Order to sign off', uom: '', rate: 0, quantity: 0, amount: 0 }
        ]
    }
];


/***/ }),

/***/ "../../../../../ng/app/app-models/termsAndConditions.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TermsAndConditions = /** @class */ (function () {
    function TermsAndConditions() {
    }
    return TermsAndConditions;
}());
exports.TermsAndConditions = TermsAndConditions;


/***/ }),

/***/ "../../../../../ng/app/app-models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../ng/app/app-pipes/app-pipes.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var filter_pipe_1 = __webpack_require__("../../../../../ng/app/app-pipes/filter.pipe.ts");
var keys_pipe_1 = __webpack_require__("../../../../../ng/app/app-pipes/keys.pipe.ts");
var AppPipesModule = /** @class */ (function () {
    function AppPipesModule() {
    }
    AppPipesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                filter_pipe_1.FilterPipe,
                keys_pipe_1.KeysPipe
            ],
            exports: [
                filter_pipe_1.FilterPipe,
                keys_pipe_1.KeysPipe
            ]
        })
    ], AppPipesModule);
    return AppPipesModule;
}());
exports.AppPipesModule = AppPipesModule;


/***/ }),

/***/ "../../../../../ng/app/app-pipes/filter.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        var key = filter.key;
        if (!items) {
            return [];
        }
        if (!filter) {
            return items;
        }
        return items.filter(function (it) {
            return it['' + key] == filter.value;
        });
    };
    FilterPipe = __decorate([
        core_1.Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
exports.FilterPipe = FilterPipe;


/***/ }),

/***/ "../../../../../ng/app/app-pipes/keys.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (key != '_id') {
                keys.push(key);
            }
        }
        return keys;
    };
    KeysPipe = __decorate([
        core_1.Pipe({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());
exports.KeysPipe = KeysPipe;


/***/ }),

/***/ "../../../../../ng/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../ng/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../ng/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../ng/app/app.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../ng/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_component_1 = __webpack_require__("../../../../../ng/app/app.component.ts");
var dashboard_module_1 = __webpack_require__("../../../../../ng/app/dashboard/dashboard.module.ts");
var app_routing_module_1 = __webpack_require__("../../../../../ng/app/app-routing.module.ts");
var authguard_1 = __webpack_require__("../../../../../ng/app/authguard.ts");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                dashboard_module_1.DashboardModule
            ],
            providers: [
                authguard_1.AlwaysAuthGuard,
                proposal_service_1.ProposalService
            ],
            entryComponents: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../ng/app/authguard.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AlwaysAuthGuard = /** @class */ (function () {
    function AlwaysAuthGuard(router) {
        this.router = router;
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        this.user = localStorage.getItem('user');
        if (this.user) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AlwaysAuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], AlwaysAuthGuard);
    return AlwaysAuthGuard;
}());
exports.AlwaysAuthGuard = AlwaysAuthGuard;


/***/ }),

/***/ "../../../../../ng/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("../../../../../ng/app/dashboard/dashboard.component.ts");
var projects_component_1 = __webpack_require__("../../../../../ng/app/dashboard/projects.component.ts");
var proposal_component_1 = __webpack_require__("../../../../../ng/app/dashboard/proposal.component.ts");
var project_signup_component_1 = __webpack_require__("../../../../../ng/app/dashboard/project-signup.component.ts");
var project_detail_component_1 = __webpack_require__("../../../../../ng/app/dashboard/project-detail.component.ts");
var routes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: [
            { path: '', redirectTo: 'proposals', pathMatch: 'full' },
            { path: 'proposals', component: projects_component_1.ProposalsComponent, pathMatch: 'full' },
            { path: 'project-signup', component: project_signup_component_1.ProjectSignupComponent },
            { path: 'proposal/:jobId', component: proposal_component_1.ProposalComponent },
            { path: 'proposal-detail/:jobId', component: project_detail_component_1.ProjectDetailComponent }
        ]
        //canActivate: [AlwaysAuthGuard]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;


/***/ }),

/***/ "../../../../../ng/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-drawer-container {\r\n  background-color: #fff;\r\n  min-height: 100vh;\r\n}\r\n.mat-toolbar.mat-primary {\r\n  background-color:#fff;\r\n  color: dimgray;\r\n}\r\n.mat-toolbar-multiple-rows,\r\n.mat-toolbar-row {\r\n  height: 56px;\r\n  min-height: 56px;\r\n}\r\n.mat-drawer {\r\n  background-color: #2a2b3c;\r\n  width: 5rem;\r\n}\r\n.brand {\r\n  padding: .875rem 1.875rem;\r\n}\r\n.left-nav ul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.left-nav ul li{\r\n  color: #fff;\r\n  padding: .875rem;\r\n  margin: 0;\r\n  color: #fff;\r\n  padding: .875rem;\r\n  margin: 0;\r\n}\r\n.left-nav ul li.active {\r\n  background-color: steelblue;\r\n}\r\n.left-nav ul li {\r\n  text-align: center;\r\n}\r\n.left-nav ul li span {\r\n  font-size: 12px;\r\n}\r\n.right-nav {\r\n  font-size: 14px;\r\n}\r\n.right-nav li {\r\n  list-style-type: none;\r\n  float: left;\r\n  margin: 0 0 0 16px;\r\n}\r\n.right-nav li.user-name {\r\n  line-height: 24px;\r\n}\r\n.user-menu {\r\n  padding: 0 16px;\r\n  float: left;\r\n  width: 280px;\r\n}\r\n.user-menu .avatar {\r\n  float: left;\r\n  margin: 0 17px 0 0;\r\n  padding: 10px;\r\n  background-color: #eee;\r\n  border-radius: 50%;\r\n}\r\n.user-menu .avatar .initials {\r\n  font-size: 24px;\r\n}\r\n.user-menu .user-name {\r\n  float: left;\r\n  width: 180px;\r\n}\r\n.user-menu .user-name h1 {\r\n  font-size: 16px;\r\n  color: #4b5362;\r\n  font-weight: 400;\r\n  line-height: 19px;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.user-menu .user-name p {\r\n  color: #8799b6;\r\n  font-size: 12px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n.user-menu .nav-items {\r\n  border-top: 1px solid #e8e9ea;\r\n  float: left;\r\n  width: 100%;\r\n  padding: 12px 0 0;\r\n}\r\n.user-menu .nav-items li {\r\n  float: left;\r\n  clear: both;\r\n  width: 100%;\r\n  padding: 8px;\r\n}\r\n.user-menu .nav-items li:hover {\r\n  background-color: #ccc;\r\n  cursor: pointer;\r\n}\r\n.user-menu .nav-items li a {\r\n  font-size: 12px;\r\n  color: #6f7685;\r\n  font-weight: 400;\r\n  letter-spacing: .8px;\r\n}\r\n.add-another {\r\n  position: fixed;\r\n  top: 72px;\r\n  right: 18px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\" *ngIf=\"currentBool\">\n</mat-progress-bar>\n<mat-drawer-container autosize>\n  <mat-drawer #drawer opened=\"true\" mode=\"side\">\n    <div class=\"brand\">\n      <a routerLink=\"../dashboard/projects\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" width=\"24\" height=\"24\">\n          <path d=\"M 4 4 L 44 4 L 44 44 Z\" fill=\"#F5F5F5\"></path>\n          <path d=\"M 4 4 L 34 4 L 24 24 Z\" fill=\"rgba(0,0,0,0.15)\"></path>\n          <path d=\"M 4 4 L 24 4 L 4  44 Z\" fill=\"#f44455\"></path>\n        </svg>\n      </a>\n    </div>\n    <nav class=\"left-nav\">\n      <ul>\n        <li class=\"active\">\n          <i class=\"material-icons\">dashboard</i>\n          <span>Dashboard</span>\n        </li>\n        <li>\n          <i class=\"material-icons\">book</i>\n          <span>Masters</span>\n        </li>\n        <li>\n          <i class=\"material-icons\">settings</i>\n          <span>Settings</span>\n        </li>\n        <li>\n          <i routerLink=\"../dashboard/drawings\" class=\"material-icons\">photo_album</i>\n          <span>Drawings</span>\n        </li>        \n      </ul>\n    </nav>\n  </mat-drawer>\n  \n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <p class=\"brand-name p-l-1\">QUANSOFT</p>\n      <div class=\"flex-spacer\"></div>\n      <ul class=\"right-nav\">\n        <li>\n          <i class=\"material-icons\">notifications</i>\n        </li>\n        <li class=\"user-name\" [matMenuTriggerFor]=\"menu\">\n          <span>{{user.name}}</span>\n        </li>\n      </ul>\n      <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n        <div class=\"user-menu clear-fix\">\n          <div class=\"avatar\">\n            <span class=\"initials\">SR</span>\n          </div>\n          <div class=\"user-name\">\n            <h1>{{user.name}}</h1>\n            <p class=\"n-m-t\">{{user.email}}</p>\n            <button mat-raised-button color=\"primary\">View Profile</button>\n          </div>\n          <ul class=\"nav-items\">\n            <li class=\"list-item\">\n              <a>Settings</a>\n            </li>\n            <li (click)=\"logout()\" class=\"list-item\">\n              <a>Logout</a>\n            </li>\n          </ul>\n        </div>\n      </mat-menu>\n    </mat-toolbar-row>\n  </mat-toolbar>\n    \n  <router-outlet></router-outlet>\n\n</mat-drawer-container>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../ng/app/app-models/user.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = Object.assign(new user_1.User, JSON.parse(localStorage.getItem('user')));
    };
    DashboardComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../ng/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/dashboard.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var dashboard_routing_module_1 = __webpack_require__("../../../../../ng/app/dashboard/dashboard-routing.module.ts");
var dashboard_component_1 = __webpack_require__("../../../../../ng/app/dashboard/dashboard.component.ts");
var angular_material_module_1 = __webpack_require__("../../../../../ng/app/angular-material.module.ts");
var projects_component_1 = __webpack_require__("../../../../../ng/app/dashboard/projects.component.ts");
var project_signup_component_1 = __webpack_require__("../../../../../ng/app/dashboard/project-signup.component.ts");
var price_schedule_component_1 = __webpack_require__("../../../../../ng/app/dashboard/price-schedule.component.ts");
var project_detail_component_1 = __webpack_require__("../../../../../ng/app/dashboard/project-detail.component.ts");
var app_pipes_module_1 = __webpack_require__("../../../../../ng/app/app-pipes/app-pipes.module.ts");
var terms_conditions_component_1 = __webpack_require__("../../../../../ng/app/dashboard/terms-conditions.component.ts");
var proposal_component_1 = __webpack_require__("../../../../../ng/app/dashboard/proposal.component.ts");
var payment_terms_component_1 = __webpack_require__("../../../../../ng/app/dashboard/payment-terms.component.ts");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_pipes_module_1.AppPipesModule,
                angular_material_module_1.AngularMaterialModule,
                dashboard_routing_module_1.DashboardRoutingModule
            ],
            declarations: [
                dashboard_component_1.DashboardComponent,
                projects_component_1.ProposalsComponent,
                proposal_component_1.ProposalComponent,
                project_signup_component_1.ProjectSignupComponent,
                price_schedule_component_1.PriceScheduleComponent,
                project_detail_component_1.ProjectDetailComponent,
                terms_conditions_component_1.TermsConditionsComponent,
                payment_terms_component_1.PaymentTermsComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ }),

/***/ "../../../../../ng/app/dashboard/payment-terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".payment-terms {\r\n  padding: 0!important;\r\n}\r\n\r\n.payment-terms mat-form-field {\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/payment-terms.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"payment-terms\">\n  <form (ngSubmit)=\"updatePaymentTerms()\" #termsForm=\"ngForm\">\n    <mat-form-field *ngFor=\"let term of terms; let i=index\">\n      <input matInput type=\"text\" placeholder=\"Activity Name\" name=\"activity\" [(ngModel)]=\"terms[i].description\">\n    </mat-form-field>\n\n    <div class=\"text-right\">\n        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"addActivity()\">Add Activity</button>\n        <button type=\"submit\" mat-raised-button color=\"primary\">Save & Continue</button>\n    </div>\n  </form>\n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/payment-terms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var paymentTerms_1 = __webpack_require__("../../../../../ng/app/app-models/paymentTerms.ts");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var PaymentTermsComponent = /** @class */ (function () {
    function PaymentTermsComponent(route, proposalService) {
        this.route = route;
        this.proposalService = proposalService;
        this.terms = new Array();
    }
    PaymentTermsComponent.prototype.ngOnInit = function () {
        this.jobId = +this.route.snapshot.paramMap.get('jobId');
    };
    PaymentTermsComponent.prototype.addActivity = function () {
        var term = Object.assign(new paymentTerms_1.PaymentTerm, { description: '' });
        this.terms.push(term);
    };
    PaymentTermsComponent.prototype.updatePaymentTerms = function () {
        var _this = this;
        this.proposalService.updatePaymentTerms(this.terms, this.jobId)
            .subscribe(function (resp) {
            _this.stepper.next();
        }, function (err) {
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PaymentTermsComponent.prototype, "stepper", void 0);
    PaymentTermsComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-terms',
            template: __webpack_require__("../../../../../ng/app/dashboard/payment-terms.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/payment-terms.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, proposal_service_1.ProposalService])
    ], PaymentTermsComponent);
    return PaymentTermsComponent;
}());
exports.PaymentTermsComponent = PaymentTermsComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/price-schedule.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".price-schedule-form {\r\n  padding: 0!important;\r\n}\r\ntable {\r\n  width: 100%; \r\n\tborder-collapse: collapse;\r\n\t-webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n\t        box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\nth { \r\n  background: steelblue; \r\n  color: white; \r\n  font-weight: bold; \r\n}\r\nth { \r\n  padding: 10px; \r\n  text-align: left; \r\n}\r\ntd .mat-input-wrapper {\r\n\tpadding-bottom: .875rem;\r\n}\r\ntd:first-child {\r\n\tmin-width: 376px;;\r\n}\r\ntd {\r\n\tfont-size: .875rem;\r\n\tpadding-left: 10px;\r\n}\r\n@media \r\nonly screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px)  {\r\n\ttable { \r\n\t  width: 100%; \r\n\t}\r\n\r\n  table, thead, tbody, th, td, tr { \r\n    display: block; \r\n  }\r\n\t\r\n\tthead tr { \r\n\t\tposition: absolute;\r\n\t\ttop: -9999px;\r\n\t\tleft: -9999px;\r\n\t}\r\n\t\r\n\ttr { border: 1px solid #ccc; }\r\n\t\r\n\ttd { \r\n\t\tborder: none;\r\n\t\tborder-bottom: 1px solid #eee; \r\n\t\tposition: relative;\r\n\t\tpadding-left: 50%; \r\n\t}\r\n\r\n\ttd:before { \r\n\t\tposition: absolute;\r\n\t\ttop: 6px;\r\n\t\tleft: 6px;\r\n\t\twidth: 45%; \r\n\t\tpadding-right: 10px; \r\n\t\twhite-space: nowrap;\r\n\t\tcontent: attr(data-column);\r\n\t\tcolor: #000;\r\n\t\tfont-weight: bold;\r\n\t}\r\n}\r\n.remove-activity {\r\n\tcursor: pointer;\r\n  color: #cc0000;\r\n  font-size: 18px;\r\n\tfont-weight: bold;\r\n\tmargin-right: 10px;\r\n}\r\n.add-activity {\r\n\tmargin: .5rem;\r\n\tbackground-color: steelblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/price-schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"price-schedule-form\">\r\n  <ng-container *ngFor=\"let scope of scopeItems\">\r\n    <p class=\"_700 t-d-u\">{{scope.name}}</p>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Activity</th>\r\n          <th>UOM</th>\r\n          <th>Quantity</th>\r\n          <th>Rate</th>\r\n          <th>Amount</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of scope.workItems\">\r\n          <td>\r\n            <span *ngIf=\"!item.custom\">{{item.name}}</span>\r\n            <mat-form-field *ngIf=\"item.custom\">\r\n              <input matInput placeholder=\"Custom Activity\" name=\"name\" [(ngModel)]=\"item.name\">\r\n            </mat-form-field>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput name=\"uom\" [(ngModel)]=\"item.uom\">\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput name=\"quantity\" [(ngModel)]=\"item.quantity\">\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput name=\"rate\" [(ngModel)]=\"item.rate\">\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field>\r\n              <input matInput name=\"amount\" (change)=\"calculateAmount($event)\" [(ngModel)]=\"item.amount\">\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n              <i (click)=\"removeActivity(scope,item)\" class=\"material-icons remove-activity\">close</i>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <button (click)=\"addActivity(scope)\" class=\"add-activity\" mat-raised-button color=\"primary\">Add New Activity</button>\r\n    </table>\r\n    \r\n  </ng-container>\r\n\r\n  <div class=\"m-t text-right\">\r\n    <P class=\"bold\" [hidden]=\"!totalAmount\">Total {{totalAmount}}</P>\r\n    <button (click)=\"savePriceSchedule()\" mat-raised-button color=\"primary\">Save & Continue</button>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/price-schedule.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var scopeItem_1 = __webpack_require__("../../../../../ng/app/app-models/scopeItem.ts");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var PriceScheduleComponent = /** @class */ (function () {
    function PriceScheduleComponent(route, router, proposalService, snackbar) {
        this.route = route;
        this.router = router;
        this.proposalService = proposalService;
        this.snackbar = snackbar;
    }
    PriceScheduleComponent.prototype.removeActivity = function (scope, item) {
        var index = scope.workItems.findIndex(function (activity) {
            return activity.name === item.name;
        });
        scope.workItems.splice(index, 1);
    };
    PriceScheduleComponent.prototype.addActivity = function (scope) {
        var newActivity = { name: '', uom: '', rate: 0, quantity: 0, amount: 0, custom: true };
        scope.workItems.push(newActivity);
    };
    PriceScheduleComponent.prototype.savePriceSchedule = function () {
        var _this = this;
        var jobId = +this.route.snapshot.paramMap.get('jobId');
        this.proposalService.updateProjectProposal(this.scopeItems, jobId)
            .subscribe(function (resp) {
            _this.snackbar.open('Price Schedule Updated.', '', { duration: 3000 });
            _this.stepper.next();
        }, function (err) {
        });
    };
    PriceScheduleComponent.prototype.ngOnChanges = function (model) {
        this.project = model.project && model.project.currentValue;
        if (this.project && Object.keys(this.project).length > 0) {
            var scope_1 = this.project.scope;
            var scopeItems = this.project.scopeItems;
            this.scopeItems = scopeItems && scopeItems.length > 0 ? scopeItems : scopeItem_1.SCOPE_ITEMS.filter(function (item) {
                return scope_1.indexOf(item.name) >= 0 ? true : false;
            });
        }
    };
    PriceScheduleComponent.prototype.calculateAmount = function () {
        var totalAmount = 0;
        this.scopeItems.forEach(function (scope) {
            scope.workItems.forEach(function (work) {
                totalAmount += +work.amount;
            });
        });
        this.totalAmount = totalAmount;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PriceScheduleComponent.prototype, "stepper", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PriceScheduleComponent.prototype, "project", void 0);
    PriceScheduleComponent = __decorate([
        core_1.Component({
            selector: 'price-schedule',
            template: __webpack_require__("../../../../../ng/app/dashboard/price-schedule.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/price-schedule.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, proposal_service_1.ProposalService, material_1.MatSnackBar])
    ], PriceScheduleComponent);
    return PriceScheduleComponent;
}());
exports.PriceScheduleComponent = PriceScheduleComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/project-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row .col-12 div,\r\n.row .col-4 div,\r\n.row .col-3 div,\r\n.row .col-2 div  {\r\n  font-size: 14px;\r\n}\r\n.terms-detail .text-muted {\r\n  text-transform: capitalize;\r\n}\r\n.proposal-detail .scope-item {\r\n  padding-left: .75rem;\r\n}\r\nh3 {\r\n  margin: 16px 12px;\r\n  padding: 0;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.download-as-pdf {\r\n  position: absolute;\r\n  top: 36px;\r\n  right: 36px;\r\n  cursor: pointer;\r\n}\r\n.proposal-doc {\r\n  background-color: #fff;\r\n  text-align: left;\r\n  padding: 16px 100px;\r\n}\r\n.proposal-doc h3 {\r\n  text-transform: uppercase;\r\n  color: rgb(33,88,104);\r\n  margin-left: 0;\r\n}\r\n.proposal-doc .doc-header {\r\n  color: rgb(152,72,6);\r\n  font-size: 20px;\r\n}\r\n.proposal-text {\r\n  padding-top: 100px;\r\n  color: rgb(33,88,104);\r\n  font-size: 24px;\r\n}\r\n.doc-footer {\r\n  color: rgb(152,72,6);\r\n  font-size: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card id=\"project-detail\" *ngIf=\"project\">\n  <a class=\"download-as-pdf\" matTooltip=\"Download As PDF\" (click)=\"download()\">\n    <i class=\"material-icons\">picture_as_pdf</i>\n  </a>\n  <div id=\"page-1\" class=\"proposal-doc\">\n    <div class=\"doc-header\">Quansys Consulting | Prooosal for {{project.name}}</div>\n    <div class=\"proposal-text\">PROPOSAL FOR COST CONSULTING SERVICES</div>\n  </div>\n  <div id=\"page-2\" class=\"proposal-doc\">\n    <div class=\"doc-header\">Quansys Consulting | Proposal for {{project.name}}</div>\n    <h3>Profile</h3>\n    <p>\n      Quansys Consulting is an Indian; Bangalore based Professional Cost Consulting Firm. We are inimitably qualified to provide\n      proficient Project Management & Cost consultancy services to the Residential, Office, Hospitality buildings to the developers,\n      and corporate companies. We provide clients assistance in the areas of Quantity Survey, Cost Consulting & Project Management.\n    </p>\n    <p>\n      We have assisted a wide range of clients on a multitude of projects all over South Consultants and engineering professionals\n      comprehensively trained and experienced in ample of projects. From Cost consulting, Quantity Surveying to Project Managemen\n      have successfully provided proactive and cost effective project support on most multifaceted projects.\n    </p>\n    <p>\n      We offer clients cost effective high fidelity total consulting solutions that are fined tuned to each client’s specific requirement\n      to face the growing business challenges. We drive efficiency at every stage of the project by balancing the Cost, Time\n      and Quality, we’re able to use the latest methodologies to analyse cost, risk and results whilst ensuring sustainable\n      and attainable outcomes for every project and client.\n    </p>\n    <img src=\"/assets/images/pdf-1.png\">\n    <p class=\"doc-footer\">\n      <span>(c) Quansys Consulting, All Rights Reserved.</span>\n      <span class=\"pull-right\">Quansys/Prop/17-18-0303/028R1</span>\n    </p>\n  </div>\n  <div id=\"page-3\" class=\"proposal-doc\">\n    <div class=\"doc-header\">Quansys Consulting | Profosal for {{project.name}}</div>\n    <h3>Overview</h3>\n    <p>\n      Quansys India manages the complete development of the facility from its concept & design to till the commission and handing\n      over to client. We work as a client representative and coordinating all other consultants and contractors involved in\n      the Project. Apart from the coordination we shall ensure the project is delivered within stipulated cost & time with\n      highly intended quality of the work.\n    </p>\n    <p>\n      We provide our services for the project with a detailed review of the project scope and development of a brief which details\n      all of the project requirements. After the agreement sign- off on the same we follow the processes outlined in the SCOPE\n      OF SERVICES in wide to coordinate responsibilities, Selection of Consultants & sub-Contractors, Provide BOQ, Budget Preparation,\n      Construction Contracts, Bill Management, Change Management, Project Scheduling, Cash flow Planning, Resource Planning\n      (Manpower & Material) , Site review meetings, Quality Audit, Quantity Audit, Value Engineering, Cost Monitoring & Control,\n      Progress Monitoring & reporting (from Back office).\n    </p>\n\n    <h3>Project Information</h3>\n    <p><i class=\"material-icons\">check</i> Project Name: {{project.name}}</p>\n    <p><i class=\"material-icons\">check</i> Location: {{project.location}}</p>\n    <p><i class=\"material-icons\">check</i> Built-up Area in Sqft: {{project.builtupArea}}</p>\n    <p><i class=\"material-icons\">check</i> No of Building: {{project.noOfBuildings}}</p>\n    <p><i class=\"material-icons\">check</i> No of Floors: {{project.numberOfFloors}}</p>\n    <p>As per the understandings the above given are the Project details and we outlined our scope of\n        services to your project specific given under Scope of services.</p>\n    <p class=\"doc-footer\">\n      <span>(c) Quansys Consulting, All Rights Reserved.</span>\n      <span class=\"pull-right\">Quansys/Prop/17-18-0303/028R1</span>\n    </p>\n  </div>\n  <div id=\"page-4\" class=\"proposal-doc payment-terms\">\n      <div class=\"doc-header\">Quansys Consulting | Profosal for {{project.name}}</div>\n      <h3>Scope Of Services</h3>\n      \n        <div *ngFor=\"let scope of project.scopeItems\" class=\"row\">\n            <div class=\"col-12\" *ngFor=\"let activity of scope.workItems\">\n              <div class=\"_500\">{{activity.name}}</div>\n            </div>\n          </div>\n      <h3>PAYMENT TERMS:</h3>\n      <div *ngFor=\"let term of project.paymentTerms\" class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"_500\">{{term.description}}</div>\n          </div>\n        </div>\n        <p class=\"doc-footer\">\n          <span>(c) Quansys Consulting, All Rights Reserved.</span>\n          <span class=\"pull-right\">Quansys/Prop/17-18-0303/028R1</span>\n        </p>\n  </div>\n  <div id=\"page-5\" class=\"proposal-doc terms-detail\">\n    <div class=\"doc-header\">Quansys Consulting | Profosal for {{project.name}}</div>\n    <h3>Terms & Conditions</h3>\n    <div *ngFor=\"let key of project.termsAndonditions | keys\" class=\"row\">\n      <div class=\"col-12\">\n        <small class=\"text-muted\">{{key}}</small>\n        <div class=\"_500\">{{project.termsAndonditions[key]}}</div>\n      </div>\n    </div>\n    <p class=\"doc-footer\">\n      <span>(c) Quansys Consulting, All Rights Reserved.</span>\n      <span class=\"pull-right\">Quansys/Prop/17-18-0303/028R1</span>\n    </p>\n  </div>   \n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/project-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var project_1 = __webpack_require__("../../../../../ng/app/app-models/project.ts");
var jsPDF = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, router, proposalService) {
        this.route = route;
        this.router = router;
        this.proposalService = proposalService;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jobId = +this.route.snapshot.paramMap.get('jobId');
        this.proposalService.getProject(jobId).subscribe(function (resp) {
            if (!resp) {
                _this.router.navigate(['dashboard/projects']);
            }
            _this.project = Object.assign(new project_1.Project, resp);
        }, function (err) {
        });
    };
    ProjectDetailComponent.prototype.download = function () {
        var _this = this;
        var elementToPrint = document.getElementById('page-1');
        var pdf = new jsPDF('landscape');
        pdf.addHTML(elementToPrint, function () {
            pdf.addPage();
            pdf.addHTML(document.getElementById('page-2'), function () {
                pdf.addPage();
                pdf.addHTML(document.getElementById('page-3'), function () {
                    pdf.addPage();
                    pdf.addHTML(document.getElementById('page-4'), function () {
                        pdf.addPage();
                        pdf.addHTML(document.getElementById('page-5'), function () {
                            pdf.save(_this.project.name + '_' + _this.project.jobId + '.pdf');
                        });
                    });
                });
            });
        });
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-project-detail',
            template: __webpack_require__("../../../../../ng/app/dashboard/project-detail.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/project-detail.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, proposal_service_1.ProposalService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/project-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-signup {\r\n  min-height: 480px;\r\n}\r\n.project-signup .header {\r\n  padding: 16px 24px 0;\r\n  margin: 0;\r\n}\r\n.project-signup mat-form-field {\r\n  width: 50%;\r\n}\r\n.signup-button {\r\n  margin-top: 16px;\r\n}\r\n@media only screen and (max-width:900px) {\r\n  .project-signup mat-form-field {\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/project-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"project-signup mat-elevation-z8\">\r\n      <h3 class=\"header\">New Project</h3>\r\n      <mat-horizontal-stepper [linear]=\"isLinear\" #stepper=\"matHorizontalStepper\">\r\n        <mat-step [stepControl]=\"orgForm\">\r\n          <ng-template matStepLabel>Organization Details</ng-template>\r\n          <form [formGroup]=\"orgForm\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Project Name\" formControlName=\"name\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Client Name\" formControlName=\"client\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Location\" formControlName=\"location\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Region\" formControlName=\"region\" required>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-raised-button matStepperNext color=\"primary\">Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"orderForm\">\r\n          <ng-template matStepLabel>Project Details</ng-template>\r\n          <form [formGroup]=\"orderForm\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"startDate\" placeholder=\"Start Date\" formControlName=\"startDate\" required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #startDate></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"endDate\" placeholder=\"End Date\" formControlName=\"endDate\" required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n              <mat-datepicker #endDate></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Site Area\" formControlName=\"siteArea\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Builtup Area\" formControlName=\"builtupArea\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"No. Of Buildings\" formControlName=\"numberOfBuildings\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"No. Of Floors\" formControlName=\"numberOfFloors\" required>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-raised-button matStepperPrevious>Back</button>\r\n              <button mat-raised-button matStepperNext color=\"primary\">Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"scopeForm\">\r\n          <ng-template matStepLabel>Scope Of Work</ng-template>\r\n          <form [formGroup]=\"scopeForm\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Type\" formControlName=\"type\" required>\r\n                <mat-option value=\"Residential\">Residential</mat-option>\r\n                <mat-option value=\"Commercial\">Commercial</mat-option>\r\n                <mat-option value=\"Institutional\">Institutional</mat-option>\r\n                <mat-option value=\"Hospitality\">Hospitality</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-select [disabled]=\"true\" placeholder=\"Stage\" formControlName=\"stage\" required>\r\n                <mat-option value=\"New\">New</mat-option>\r\n                <mat-option value=\"Proposal\">Proposal</mat-option>\r\n                <mat-option value=\"Execution\">Execution</mat-option>\r\n                <mat-option value=\"Completed\">Completed</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Scope\" formControlName=\"scope\" multiple>\r\n                <mat-select-trigger>\r\n                  {{scope.value ? scope.value[0] : ''}}\r\n                  <span *ngIf=\"scope.value?.length > 1\">\r\n                    (+{{scope.value.length - 1}} others)\r\n                  </span>\r\n                </mat-select-trigger>\r\n                <mat-option *ngFor=\"let scopeItem of scopeList\" [value]=\"scopeItem\">{{scopeItem}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"FSI\" formControlName=\"fsi\" required>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Participants\" formControlName=\"participants\" multiple>\r\n                <mat-select-trigger>\r\n                  {{participants.value ? participants.value[0] : ''}}\r\n                  <span *ngIf=\"participants.value?.length > 1\">\r\n                    (+{{participants.value.length - 1}} others)\r\n                  </span>\r\n                </mat-select-trigger>\r\n                <mat-option *ngFor=\"let participant of participantsList\" [value]=\"participant\">{{participant}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-raised-button matStepperPrevious>Back</button>\r\n              <button mat-raised-button color=\"primary\" (click)=\"signup()\">Save</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n      </mat-horizontal-stepper>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/project-signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var project_1 = __webpack_require__("../../../../../ng/app/app-models/project.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var ProjectSignupComponent = /** @class */ (function () {
    function ProjectSignupComponent(_formBuilder, snackBar, router, proposalService) {
        this._formBuilder = _formBuilder;
        this.snackBar = snackBar;
        this.router = router;
        this.proposalService = proposalService;
        this.isLinear = true;
        this.participants = new forms_1.FormControl();
        this.scope = new forms_1.FormControl();
        this.participantsList = ['Architect', 'Fire Fighting', 'Structural', 'Landscape', 'Electrical', 'Plumbing', 'Traffic'];
        this.scopeList = ['Cost Estimates', 'Contracts Management', 'Bill Auditing'];
        this.orgForm = this._formBuilder.group({
            name: ['', forms_1.Validators.required],
            client: ['', forms_1.Validators.required],
            region: ['', forms_1.Validators.required],
            location: ['', forms_1.Validators.required]
        });
        this.orderForm = this._formBuilder.group({
            siteArea: ['', forms_1.Validators.required],
            builtupArea: ['', forms_1.Validators.required],
            numberOfFloors: ['', forms_1.Validators.required],
            numberOfBuildings: ['', forms_1.Validators.required],
            startDate: ['', forms_1.Validators.required],
            endDate: ['', forms_1.Validators.required]
        });
        this.scopeForm = this._formBuilder.group({
            type: ['', forms_1.Validators.required],
            stage: ['New', forms_1.Validators.required],
            scope: [[], forms_1.Validators.required],
            fsi: ['', forms_1.Validators.required],
            participants: [[], forms_1.Validators.required]
        });
    }
    ProjectSignupComponent.prototype.signup = function () {
        var _this = this;
        this.project = Object.assign(new project_1.Project, this.orgForm.value, this.orderForm.value, this.scopeForm.value);
        this.proposalService.projectSignup(this.project).subscribe(function (resp) {
            _this.snackBar.open('Project Created Successfully.', '', {
                duration: 3000,
            });
            _this.router.navigate(['dashboard/projects']);
        }, function (err) {
        });
    };
    ProjectSignupComponent = __decorate([
        core_1.Component({
            selector: 'project-signup',
            template: __webpack_require__("../../../../../ng/app/dashboard/project-signup.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/project-signup.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            material_1.MatSnackBar,
            router_1.Router,
            proposal_service_1.ProposalService])
    ], ProjectSignupComponent);
    return ProjectSignupComponent;
}());
exports.ProjectSignupComponent = ProjectSignupComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first-project-msg {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.add-another {\r\n  position: fixed;\r\n  top: 66px;\r\n  right: 16px;\r\n}\r\n\r\n.project-list .header {\r\n  padding: 16px 24px 0;\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div [hidden]=\"!projectsDataSource.data.length\" class=\"project-list mat-elevation-z8\">\r\n\r\n\r\n    <h3 class=\"header\">Project List</h3>\r\n\r\n    <mat-table #table [dataSource]=\"projectsDataSource\">\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef> Project Name </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"client\">\r\n        <mat-header-cell *matHeaderCellDef> Client </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.client}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"location\">\r\n        <mat-header-cell *matHeaderCellDef> Location </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.location}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"region\">\r\n        <mat-header-cell *matHeaderCellDef> Region </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.region}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"type\">\r\n        <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"stage\">\r\n        <mat-header-cell *matHeaderCellDef> Stage </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.stage}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"scope\">\r\n        <mat-header-cell *matHeaderCellDef> Scope </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element.scope}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"jobId\">\r\n        <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\" class=\"project-actions\">\r\n          <i matTooltip=\"Add Proposal\" routerLink=\"../proposal/{{element.jobId}}\" class=\"material-icons link\">library_add</i>\r\n          <i matTooltip=\"View Proposal\" routerLink=\"../proposal-detail/{{element.jobId}}\" class=\"material-icons link\">insert_drive_file</i>\r\n          <i matTooltip=\"Assign Users\" routerLink=\"../proposal/{{element.jobId}}/assign-users\" class=\"material-icons link\">assignment_ind</i>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator #paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" [showFirstLastButtons]=\"true\">\r\n    </mat-paginator>\r\n\r\n    <button routerLink=\"../project-signup\" matTooltip=\"Add Another Project\" class=\"add-another\" mat-mini-fab color=\"warn\">\r\n      <i class=\"material-icons link\" mat-button>add</i>\r\n    </button>\r\n  </div>\r\n  <div [hidden]=\"projectsDataSource.data.length\" class=\"first-project-msg\">\r\n    <img src=\"/assets/images/no-proposals-illustration.png\">\r\n    <div>\r\n      <h2>Create your first project</h2>\r\n      <p>\r\n        You haven't added any project yet.\r\n        <br/> Sign-up a project to start submitting proposals.</p>\r\n      <button class=\"add-project\" routerLink=\"../project-signup\" mat-raised-button color=\"primary\">\r\n        CREATE A PROJECT\r\n      </button>\r\n    </div>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/projects.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var project_1 = __webpack_require__("../../../../../ng/app/app-models/project.ts");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var ProposalsComponent = /** @class */ (function () {
    function ProposalsComponent(proposalService) {
        this.proposalService = proposalService;
        this.projects = [];
        this.displayedColumns = ['name', 'client', 'location', 'region', 'type', 'stage', 'scope', 'jobId'];
    }
    ProposalsComponent.prototype.ngOnInit = function () {
        this.get();
    };
    ProposalsComponent.prototype.get = function () {
        var _this = this;
        this.dataTable();
        this.proposalService.getProjects().subscribe(function (resp) {
            _this.projects = resp;
            _this.dataTable();
        }, function (err) {
        });
    };
    ProposalsComponent.prototype.delete = function () {
    };
    ProposalsComponent.prototype.dataTable = function () {
        this.projectsDataSource = new material_1.MatTableDataSource(this.projects);
        this.projectsDataSource.paginator = this.paginator;
    };
    ProposalsComponent.prototype.deserialize = function (json) {
        var projects = [];
        json.forEach(function (project) {
            project = Object.assign(new project_1.Project, project);
            projects.push(project);
        });
        return projects;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], ProposalsComponent.prototype, "paginator", void 0);
    ProposalsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../ng/app/dashboard/projects.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/projects.component.css")]
        }),
        __metadata("design:paramtypes", [proposal_service_1.ProposalService])
    ], ProposalsComponent);
    return ProposalsComponent;
}());
exports.ProposalsComponent = ProposalsComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/proposal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".proposal-form .header{\r\n  padding: 16px 24px 0;\r\n  margin: 0;\r\n}\r\n.proposal-form .mat-horizontal-content-container {\r\n  padding: 0!important;\r\n}\r\n.scope-section {\r\n  display: -ms-inline-grid;\r\n  display: inline-grid;\r\n  width: 25%;\r\n}\r\n.scope-section .title {\r\n  margin: 0 0 16px;\r\n  font-weight: 700;\r\n}\r\n.scope-section label {\r\n  margin: 0 0 8px;\r\n  font-size: .875rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/proposal.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <div class=\"proposal-form mat-elevation-z8\">\r\n    <h3 class=\"header\">Proposal Details</h3>\r\n    <mat-horizontal-stepper  #stepper=\"matHorizontalStepper\">\r\n      <mat-step [stepControl]=\"priceSchedule\">\r\n        <ng-template matStepLabel>Price Schedule</ng-template>\r\n        <price-schedule [project]=\"project\" [stepper]=\"stepper\"></price-schedule>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"paymentTerms\">\r\n        <ng-template matStepLabel>Payment Terms</ng-template>\r\n        <app-payment-terms [stepper]=\"stepper\"></app-payment-terms>\r\n      </mat-step>\r\n      <mat-step [stepControl]=\"Terms\">\r\n        <ng-template matStepLabel>Terms & Conditions</ng-template>\r\n        <app-terms-conditions [project]=\"project\"></app-terms-conditions>\r\n      </mat-step>\r\n    </mat-horizontal-stepper>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/proposal.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var project_1 = __webpack_require__("../../../../../ng/app/app-models/project.ts");
var ProposalComponent = /** @class */ (function () {
    function ProposalComponent(router, route, proposalService) {
        this.router = router;
        this.route = route;
        this.proposalService = proposalService;
        this.project = new project_1.Project();
    }
    ProposalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var jobId = +this.route.snapshot.paramMap.get('jobId');
        this.proposalService.getProject(jobId).subscribe(function (data) {
            if (!data) {
                _this.router.navigate(['dashboard/proposals']);
                return;
            }
            _this.project = Object.assign(new project_1.Project, data);
        }, function (err) {
        });
    };
    ProposalComponent = __decorate([
        core_1.Component({
            selector: 'new-proposal',
            template: __webpack_require__("../../../../../ng/app/dashboard/proposal.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/proposal.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, proposal_service_1.ProposalService])
    ], ProposalComponent);
    return ProposalComponent;
}());
exports.ProposalComponent = ProposalComponent;


/***/ }),

/***/ "../../../../../ng/app/dashboard/terms-conditions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".terms-conditions {\r\n    padding: 0!important;\r\n}\r\n\r\n@media only screen and (min-width:901px) {\r\n    .terms-conditions .mat-form-field {\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:900px) {\r\n    .terms-conditions .mat-form-field {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.terms-conditions .mat-input-wrapper {\r\n  padding-bottom: .875rem!important;\r\n  font-size: 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../ng/app/dashboard/terms-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"terms-conditions\">\n  <form (ngSubmit)=\"updateTerms(termsForm)\" #termsForm=\"ngForm\">\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Duration\" name=\"duration\" [(ngModel)]=\"terms.duration\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Penalty\" name=\"penalty\" [(ngModel)]=\"terms.penalty\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Bonus Clause\" name=\"bonusClause\" [(ngModel)]=\"terms.bonusClause\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Staff Deployment\" name=\"staffDeployment\" [(ngModel)]=\"terms.staffDeployment\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Payments Terms\" name=\"paymentsTerms\" [(ngModel)]=\"terms.paymentsTerms\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Account Details\" name=\"accountDetails\" [(ngModel)]=\"terms.accountDetails\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Termination\" name=\"termination\" [(ngModel)]=\"terms.termination\">\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput type=\"text\" placeholder=\"Arbitration\" name=\"arbitration\" [(ngModel)]=\"terms.arbitration\">\n    </mat-form-field>\n    <div>\n        <button type=\"submit\" mat-raised-button color=\"primary\">Submit</button>\n    </div>\n  </form>\n</mat-card>"

/***/ }),

/***/ "../../../../../ng/app/dashboard/terms-conditions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var termsAndConditions_1 = __webpack_require__("../../../../../ng/app/app-models/termsAndConditions.ts");
var proposal_service_1 = __webpack_require__("../../../../../ng/app/proposal.service.ts");
var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent(route, router, proposalService, snackbar) {
        this.route = route;
        this.router = router;
        this.proposalService = proposalService;
        this.snackbar = snackbar;
        this.terms = new termsAndConditions_1.TermsAndConditions();
    }
    TermsConditionsComponent.prototype.ngOnChanges = function (model) {
        this.project = model.project && model.project.currentValue;
        if (this.project && Object.keys(this.project).length > 0) {
            this.terms = this.project.termsAndonditions;
        }
    };
    TermsConditionsComponent.prototype.updateTerms = function () {
        var _this = this;
        var jobId = +this.route.snapshot.paramMap.get('jobId');
        this.proposalService.updateProjectTerms(this.terms, jobId).subscribe(function (resp) {
            _this.snackbar.open('Terms & Conditions Updated.', '', { duration: 3000 });
            _this.router.navigate(['dashboard/proposals']);
        }, function (err) {
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TermsConditionsComponent.prototype, "project", void 0);
    TermsConditionsComponent = __decorate([
        core_1.Component({
            selector: 'app-terms-conditions',
            template: __webpack_require__("../../../../../ng/app/dashboard/terms-conditions.component.html"),
            styles: [__webpack_require__("../../../../../ng/app/dashboard/terms-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, proposal_service_1.ProposalService, material_1.MatSnackBar])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
}());
exports.TermsConditionsComponent = TermsConditionsComponent;


/***/ }),

/***/ "../../../../../ng/app/proposal.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var ProposalService = /** @class */ (function () {
    function ProposalService(http) {
        this.http = http;
    }
    ProposalService.prototype.getProject = function (jobId) {
        return this.http.get('/api/project/' + jobId);
    };
    ProposalService.prototype.projectSignup = function (project) {
        return this.http.post('/api/project-signup', project);
    };
    ProposalService.prototype.getProjects = function () {
        return this.http.get('/api/projects');
    };
    ProposalService.prototype.updateProjectProposal = function (scopeItems, jobId) {
        return this.http.post('/api/project/update-proposal/' + jobId, scopeItems);
    };
    ProposalService.prototype.updatePaymentTerms = function (terms, jobId) {
        return this.http.post('/api/project/update-payment-terms/' + jobId, terms);
    };
    ProposalService.prototype.updateProjectTerms = function (terms, jobId) {
        return this.http.post('/api/project/update-terms/' + jobId, terms);
    };
    ProposalService.prototype.getAllUsers = function () {
        return this.http.get('/api/users');
    };
    ProposalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProposalService);
    return ProposalService;
}());
exports.ProposalService = ProposalService;


/***/ }),

/***/ "../../../../../ng/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ng/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../ng/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../ng/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ng/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map