(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/s1f":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "Orwr");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "XWzO");
/* harmony import */ var _why_me_why_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./why-me/why-me.component */ "OeLj");





class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-why-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jakub Jereczek \u00A9 maj 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _why_me_why_me_component__WEBPACK_IMPORTED_MODULE_4__["WhyMeComponent"]], styles: ["#single-section-page {\n  height: 100vh;\n  width: 100vw;\n}\n#single-section-page > #section-content {\n  margin: 10px;\n}\nfooter {\n  height: 30px;\n  width: 100vw;\n  line-height: 30px;\n  padding: 50px 0;\n  text-align: center;\n  background-color: #fff;\n  box-shadow: 0px -10px 15px 0px rgba(0, 0, 0, 0.1);\n}\n.section-title {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNJLFlBQUE7QUFBUjtBQUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQ2ZjO0VEZ0JkLGlEQUFBO0FBREo7QUFLQTtFQUNJLGVDbEJlO0FEZ0JuQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3NoYXJlZC92YXJpYWJsZXMuc2Nzc1wiO1xyXG4jc2luZ2xlLXNlY3Rpb24tcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG5cclxuICAgICYgPiAjc2VjdGlvbi1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjEwKTtcclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZWRpdW07XHJcbn1cclxuXHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjOTk2QUQ0OyAvLyM5OTZBRDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7IC8vIGZmZlxyXG5cclxuJGZvbnQtc2l6ZS1iaWc6IDNyZW07XHJcbiRmb250LXNpemUtbWVkaXVtOiAycmVtO1xyXG4kZm9udC1zaXplLXNtYWxsOiAxLjI1cmVtO1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgJGZvbnQtc2l6ZS1iaWc6IDIuNHJlbTtcclxuICAgICRmb250LXNpemUtbWVkaXVtOiAxLjhyZW07XHJcbiAgICAkZm9udC1zaXplLXNtYWxsOiAxcmVtO1xyXG59XHJcblxyXG5cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Kursy\Angular.js\angular\intern-profile\src\main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "open": a0 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class MenuComponent {
    constructor() {
        this.isMenuOpen = false;
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
    scrollIntoView(id) {
        this.toggleMenu();
        const element = document.querySelector(id);
        const headerOffset = 55;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;
        console.log(offsetPosition);
        window.scrollTo({
            top: window.scrollY + offsetPosition,
            behavior: "smooth"
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 12, vars: 9, consts: [["id", "menu_bar", 3, "ngClass"], [1, "hamburger", 3, "ngClass", "click"], [1, "hamburger__line"], [1, "menu_wrapper", 3, "ngClass"], [1, "menu_content"], [3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_1_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_6_listener() { return ctx.scrollIntoView("#aboutme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "O mnie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_8_listener() { return ctx.scrollIntoView("#projects"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projekty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_10_listener() { return ctx.scrollIntoView("#whyme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dlaczego ja?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isMenuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isMenuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.isMenuOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["#menu_bar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100vw;\n  height: 55px;\n  background-color: #fff;\n  z-index: 6;\n  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.15);\n}\n#menu_bar.open[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0);\n}\n.menu_wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: -100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  z-index: 4;\n  transition: 1s;\n}\n.menu_wrapper.active[_ngcontent-%COMP%] {\n  top: 0%;\n  left: 0;\n}\n.hamburger[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  visibility: visible;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  transition: 0.6s;\n  z-index: 2;\n}\n.hamburger[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.hamburger__line[_ngcontent-%COMP%] {\n  display: relative;\n  background-color: #996AD4;\n  width: 26px;\n  height: 3px;\n  border-radius: 5px;\n}\n.hamburger__line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  background-color: #996AD4;\n  width: 26px;\n  height: 3px;\n  border-radius: 5px;\n  transform: translateY(-6px);\n  transition: 0.6s;\n}\n.hamburger__line[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  background-color: #996AD4;\n  width: 26px;\n  height: 3px;\n  border-radius: 5px;\n  transform: translateY(6px);\n  transition: 0.6s;\n}\n.hamburger.open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%] {\n  background-color: transparent;\n  box-shadow: none;\n}\n.hamburger.open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]:after {\n  transform: rotate(45deg);\n}\n.hamburger.open[_ngcontent-%COMP%]   .hamburger__line[_ngcontent-%COMP%]:before {\n  transform: rotate(-45deg);\n}\n.hamburger.inside[_ngcontent-%COMP%] {\n  z-index: 6;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n}\nli[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  transition: transform 0.6s;\n}\nli.activate[_ngcontent-%COMP%] {\n  color: #996AD4;\n  font-weight: 500;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: #996AD4;\n  transform: translateX(5px);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQ05jO0VET2QsVUFBQTtFQUNBLGlEQUFBO0FBRko7QUFJSTtFQUNJLDhDQUFBO0FBRlI7QUFPQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkN6QmM7RUQwQmQsVUFBQTtFQUNBLGNBQUE7QUFKSjtBQU9JO0VBQ0ksT0FBQTtFQUNBLE9BQUE7QUFMUjtBQVVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUdBLGdCQUFBO0VBQ0EsVUFBQTtBQVZKO0FBWUk7RUFDSSxlQUFBO0FBVlI7QUFhQTtFQUNFLGlCQUFBO0VBQ0EseUJDNURjO0VENkRkLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQVlFO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDcEVVO0VEcUVWLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBVk47QUFjRTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2hGVTtFRGlGVixXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQVpOO0FBaUJBO0VBQ00sNkJBQUE7RUFDQSxnQkFBQTtBQWROO0FBZ0JNO0VBQ0ksd0JBQUE7QUFkVjtBQWlCTTtFQUNJLHlCQUFBO0FBZlY7QUFxQkE7RUFDSSxVQUFBO0FBbEJKO0FBcUJBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFsQko7QUFzQkE7RUFDSSxlQ2pIZTtFRGtIZiwwQkFBQTtBQW5CSjtBQW9CSTtFQUNJLGNDeEhRO0VEeUhSLGdCQUFBO0FBbEJSO0FBcUJJO0VBQ0ksY0M3SFE7RUQ4SFIsMEJBQUE7RUFDQSxlQUFBO0FBbkJSIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCBcIi4uLy4uL3NoYXJlZC92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuI21lbnVfYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB6LWluZGV4OiA2O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIC8vIHRyYW5zaXRpb246IDFzO1xyXG4gICAgJi5vcGVuIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IDBweCByZ2JhKDAsMCwwLDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLm1lbnVfd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcblxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaGFtYnVyZ2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAvL2JvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjZzO1xyXG4gICAgei1pbmRleDogMjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmhhbWJ1cmdlcl9fbGluZSB7XHJcbiAgZGlzcGxheTogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcblxyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbi5oYW1idXJnZXIub3BlbiAuaGFtYnVyZ2VyX19saW5le1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbn1cclxuXHJcbi5oYW1idXJnZXIuaW5zaWRlIHtcclxuICAgIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxubGkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnM7XHJcbiAgICAmLmFjdGl2YXRlIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIkcHJpbWFyeS1jb2xvcjogIzk5NkFENDsgLy8jOTk2QUQ0O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmZmOyAvLyBmZmZcclxuXHJcbiRmb250LXNpemUtYmlnOiAzcmVtO1xyXG4kZm9udC1zaXplLW1lZGl1bTogMnJlbTtcclxuJGZvbnQtc2l6ZS1zbWFsbDogMS4yNXJlbTtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICRmb250LXNpemUtYmlnOiAyLjRyZW07XHJcbiAgICAkZm9udC1zaXplLW1lZGl1bTogMS44cmVtO1xyXG4gICAgJGZvbnQtc2l6ZS1zbWFsbDogMXJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


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
const environment = {
    production: false
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

/***/ "OeLj":
/*!*******************************************************!*\
  !*** ./src/app/pages/main/why-me/why-me.component.ts ***!
  \*******************************************************/
/*! exports provided: WhyMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyMeComponent", function() { return WhyMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function () { return { "background-image": "url(assets/images/background_photo2.png)" }; };
class WhyMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WhyMeComponent.ɵfac = function WhyMeComponent_Factory(t) { return new (t || WhyMeComponent)(); };
WhyMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhyMeComponent, selectors: [["app-why-me"]], decls: 22, vars: 2, consts: [["id", "whyme", 1, "section-title"], ["id", "single-section-page"], ["id", "section-content"], [1, "whyme_description"], [1, "h2-title"], [1, "p-describe"], [1, "whyme_technologies"], [1, "background_photo2", 3, "ngStyle"]], template: function WhyMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#whyme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dlaczego ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "warto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " na mnie postawi\u0107?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wi\u0119kszo\u015B\u0107 swojego wolnego czasu w trakcie studi\u00F3w poswi\u0119cam na szlifowanie umiejetno\u015Bci oraz samorozw\u00F3j w obszarze programowania (g\u0142\u00F3wnie aplikacji webowych). Jestem osob\u0105 zoorganizowana, odpowiedzialn\u0105 oraz pracownit\u0105. Praca z nowymi technologami motywuj\u0119 mnie, a nie odstrasza. Moim g\u0142\u00F3wnym atutem jest dobra znajomo\u015B\u0107 JavaScript (React.js, Angular, Node.js, Express.js). Rozwijam si\u0119 w kontek\u015Bcie programowania aplikacji internetowych (front oraz backend). Sta\u017C umo\u017Cliwi mi zdobycie komercyjnego do\u015Bwiadczenia w dziedzinie programowania. Projekty, kt\u00F3re zaprezentowa\u0142em wy\u017Cej s\u0105 napisane w r\u00F3\u017Cnych technologiach co pokazuje moj\u0105 zdolno\u015B\u0107 do uczenia si\u0119 nowych rzeczy. My\u015Ble, \u017Ce by\u0142bym warto\u015Bciowym pracownikiem, a w przypadku dostania si\u0119 wsp\u00F3\u0142praca nie sko\u0144czy\u0142a by si\u0119 na sta\u017Cu a na pe\u0142noprawnej pracy po jego uko\u0144czeniu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Technologie/J\u0119zyki programowania w ktorych pracuj\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " HTML, CSS, JavaScript, TypeScript, React, Angular, Node.js, MongoDB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["#single-section-page[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#section-content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  z-index: 1;\n}\n\n#section-content[_ngcontent-%COMP%]    > .whyme_description[_ngcontent-%COMP%], #section-content[_ngcontent-%COMP%]   .whyme_technologies[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#section-content[_ngcontent-%COMP%]    > .whyme_description[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1), #section-content[_ngcontent-%COMP%]   .whyme_technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n  flex-basis: 25%;\n}\n\n#section-content[_ngcontent-%COMP%]    > .whyme_description[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2), #section-content[_ngcontent-%COMP%]   .whyme_technologies[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n  flex-basis: 75%;\n}\n\n@media (max-width: 768px) {\n  #section-content[_ngcontent-%COMP%]    > .whyme_description[_ngcontent-%COMP%], #section-content[_ngcontent-%COMP%]   .whyme_technologies[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.h2-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #fff;\n  margin: 10px;\n  text-align: center;\n  font-weight: 300;\n}\n\n@media (max-width: 768px) {\n  .h2-title[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n}\n\n.h2-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.p-describe[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #fff;\n  margin: 10px;\n  text-align: justify;\n}\n\n.background_photo2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9%;\n  top: calc(50% - 200px);\n  max-width: 400px;\n  max-height: 400px;\n  min-width: 100px;\n  min-height: 100px;\n  width: 45%;\n  height: 45%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 0;\n}\n\n@media (max-width: 768px) {\n  .background_photo2[_ngcontent-%COMP%] {\n    left: 0%;\n    top: 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2h5LW1lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQWdCQSxVQUFBO0FBaEJKOztBQUVJO0VBQ0ksYUFBQTtBQUFSOztBQUNRO0VBQ0ksZUFBQTtBQUNaOztBQUNRO0VBQ0ksZUFBQTtBQUNaOztBQUNRO0VBUko7SUFTUSxzQkFBQTtFQUVWO0FBQ0Y7O0FBTUE7RUFDSSxlQ2hDWTtFRGlDWixXQ25DYztFRG9DZCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKOztBQUlJO0VBTko7SUFPUSxnQkFBQTtFQUROO0FBQ0Y7O0FBRUk7RUFDSSxpQkFBQTtBQUFSOztBQUlBO0VBQ0ksa0JDNUNjO0VENkNkLFdDakRjO0VEa0RkLFlBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFJSTtFQWRKO0lBZVEsUUFBQTtJQUNBLE9BQUE7RUFETjtBQUNGIiwiZmlsZSI6IndoeS1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbiNzaW5nbGUtc2VjdGlvbi1wYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3NlY3Rpb24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG5cclxuICAgICYgPiAud2h5bWVfZGVzY3JpcHRpb24sIC53aHltZV90ZWNobm9sb2dpZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAgICAgICYgPiBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMjUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmID4gZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDc1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgei1pbmRleDogMTtcclxuXHJcbn1cclxuXHJcbi5oMi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtYmlnO1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLnAtZGVzY3JpYmUge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmRfcGhvdG8yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC05JTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiA0NSU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgei1pbmRleDogMDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICB0b3A6IDAlO1xyXG4gICAgfVxyXG5cclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjOTk2QUQ0OyAvLyM5OTZBRDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7IC8vIGZmZlxyXG5cclxuJGZvbnQtc2l6ZS1iaWc6IDNyZW07XHJcbiRmb250LXNpemUtbWVkaXVtOiAycmVtO1xyXG4kZm9udC1zaXplLXNtYWxsOiAxLjI1cmVtO1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgJGZvbnQtc2l6ZS1iaWc6IDIuNHJlbTtcclxuICAgICRmb250LXNpemUtbWVkaXVtOiAxLjhyZW07XHJcbiAgICAkZm9udC1zaXplLXNtYWxsOiAxcmVtO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Orwr":
/*!***********************************************************!*\
  !*** ./src/app/pages/main/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function () { return { "background-image": "url(assets/images/profile.png)" }; };
const _c1 = function () { return { "background-image": "url(assets/images/background_photo1.png)" }; };
class AboutMeComponent {
    constructor() {
        this.descriptions = [
            "Miło, że tutaj jesteś:)",
            "Przygodę z programowaniem webowym rozpocząłem prawie półtorej roku temu.",
            "Każdą wolną chwile od tego czasu poświęcam na rozwijanie umięjętności, a programowanie sprawia mi niezwykła przyjemność.",
            "Poniżej przedstawie Ci projekty, które wyróżniłem w swoim portfolio",
            "Poszukuję pracy jako Frontend Developer bądz JavaScript developer"
        ];
        this.text = "";
        this.isCursorHidden = false;
        this.textIndex = 0;
        this.letterIndex = 0;
    }
    ngOnInit() {
        this.changeLetters();
        this.changeCursorVisibility();
    }
    changeLetters() {
        if (this.textIndex < this.descriptions.length) {
            if (this.letterIndex === this.descriptions[this.textIndex].length) {
                this.letterIndex = 0;
                this.textIndex++;
                setTimeout(() => {
                    this.text = " ";
                    this.changeLetters();
                }, 2000);
                return;
            }
            this.text += this.descriptions[this.textIndex][this.letterIndex];
            this.letterIndex++;
        }
        else {
            this.textIndex = 0;
        }
        setTimeout(() => this.changeLetters(), 100);
    }
    changeCursorVisibility() {
        this.isCursorHidden = !this.isCursorHidden;
        setTimeout(() => this.changeCursorVisibility(), 400);
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 19, vars: 7, consts: [["id", "aboutme", 1, "section-title"], ["id", "single-section-page"], ["id", "section-content"], [1, "image-profile-container"], [1, "image-profile", 3, "ngStyle"], [1, "description"], [1, "cursor"], [1, "background_photo1", 3, "ngStyle"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "#aboutme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cze\u015B\u0107, jestem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kuba");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". \uD83D\uDC4B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Intern/Junior Frontend developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.isCursorHidden ? 1 : 0.05);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["#single-section-page[_ngcontent-%COMP%] {\n  height: calc(100vh + 55px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n#single-section-page[_ngcontent-%COMP%]    > #section-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column;\n  width: 60%;\n  min-height: 60%;\n  margin: 10px;\n  text-align: center;\n  z-index: 1;\n}\n@media (max-width: 768px) {\n  #single-section-page[_ngcontent-%COMP%]    > #section-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 400;\n}\nh2[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media (min-width: 1025px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 3.75rem;\n  }\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 100;\n  color: #fff;\n}\np.section-title[_ngcontent-%COMP%] {\n  color: #fff;\n  padding-top: 55px;\n}\np[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 100;\n}\n@media (min-width: 1025px) {\n  .description[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.image-profile-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 126px;\n  height: 126px;\n  border-radius: 50%;\n  background-color: #fff;\n  padding: 5px;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n}\n@media (min-width: 1025px) {\n  .image-profile-container[_ngcontent-%COMP%] {\n    width: 186px;\n    height: 186px;\n  }\n}\n.image-profile-container[_ngcontent-%COMP%]    > .image-profile[_ngcontent-%COMP%] {\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.background_photo1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: calc(50% - 150px);\n  max-width: 400px;\n  max-height: 400px;\n  min-width: 100px;\n  min-height: 100px;\n  width: 40%;\n  height: 40%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUlJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGUjtBQUlRO0VBVko7SUFXUSxXQUFBO0lBQ0EsWUFBQTtFQURWO0FBQ0Y7QUFNQTtFQUNJLGVDMUJZO0VEMkJaLGdCQUFBO0FBSEo7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFLSTtFQVBKO0lBUVEsa0JBQUE7RUFGTjtBQUNGO0FBS0E7RUFDSSxrQkNwQ2M7RURxQ2QsZ0JBQUE7RUFDQSxXQzFDYztBRHdDbEI7QUFJQTtFQUNJLFdDN0NjO0VEOENkLGlCQUFBO0FBREo7QUFJQTtFQUNJLFdDbERjO0FEaURsQjtBQUlBO0VBQ0ksZUNuRGU7RURvRGYsZ0JBQUE7QUFESjtBQUdJO0VBSko7SUFLUSxpQkFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQVFBLGtCQUFBO0VBQ0Esc0JDM0VjO0VENEVkLFlBQUE7RUU1RUEsaURBQUE7QUZzRUo7QUFESTtFQVBKO0lBUVEsWUFBQTtJQUNBLGFBQUE7RUFJTjtBQUNGO0FBRUk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQU1BO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7QUFKSiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zaGFyZWQvbWl4aW5zLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuI3NpbmdsZS1zZWN0aW9uLXBhZ2Uge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgNTVweCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmID4gI3NlY3Rpb24tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87ICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtYmlnO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjUgKiAkZm9udC1zaXplLWJpZztcclxuICAgIH1cclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcbnAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIHBhZGRpbmctdG9wOiA1NXB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLW1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNSokZm9udC1zaXplLW1lZGl1bTtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXByb2ZpbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogMTI2cHg7XHJcbiAgICBoZWlnaHQ6IDEyNnB4O1xyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDE4NnB4O1xyXG4gICAgICAgIGhlaWdodDogMTg2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAmID4gLmltYWdlLXByb2ZpbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBiZy1zaGFkb3c7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kX3Bob3RvMSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTUwcHgpO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgei1pbmRleDogMDtcclxuXHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzk5NkFENDsgLy8jOTk2QUQ0O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmZmOyAvLyBmZmZcclxuXHJcbiRmb250LXNpemUtYmlnOiAzcmVtO1xyXG4kZm9udC1zaXplLW1lZGl1bTogMnJlbTtcclxuJGZvbnQtc2l6ZS1zbWFsbDogMS4yNXJlbTtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICRmb250LXNpemUtYmlnOiAyLjRyZW07XHJcbiAgICAkZm9udC1zaXplLW1lZGl1bTogMS44cmVtO1xyXG4gICAgJGZvbnQtc2l6ZS1zbWFsbDogMXJlbTtcclxufVxyXG5cclxuXHJcbiIsIkBtaXhpbiBiZy1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogLTFweCA2cHggMTRweCAwcHggcmdiYSgwLDAsMCwwLjI1KTtcclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'intern-profile';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["id", "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["#container[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #996AD4;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDTFk7RURNWixnQkFBQTtBQURKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzaGFyZWQvdmFyaWFibGVzXCI7XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4iLCIkcHJpbWFyeS1jb2xvcjogIzk5NkFENDsgLy8jOTk2QUQ0O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZmZmOyAvLyBmZmZcclxuXHJcbiRmb250LXNpemUtYmlnOiAzcmVtO1xyXG4kZm9udC1zaXplLW1lZGl1bTogMnJlbTtcclxuJGZvbnQtc2l6ZS1zbWFsbDogMS4yNXJlbTtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAgICRmb250LXNpemUtYmlnOiAyLjRyZW07XHJcbiAgICAkZm9udC1zaXplLW1lZGl1bTogMS44cmVtO1xyXG4gICAgJGZvbnQtc2l6ZS1zbWFsbDogMXJlbTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "XWzO":
/*!***********************************************************!*\
  !*** ./src/app/pages/main/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_data_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/data-base */ "ZLJp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_github_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/github-http.service */ "ptFG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["projectsSection"];
const _c1 = function (a0) { return { "background-image": a0 }; };
const _c2 = function () { return { "background-image": "url(assets/images/link.png)" }; };
const _c3 = function (a1) { return ["/project", a1]; };
function ProjectsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Wyswietl wi\u0119cej");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, "url(" + project_r4.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c3, project_r4.id));
} }
const _c4 = function () { return { "background-image": "url(assets/images/github.png)" }; };
function ProjectsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProjectsComponent_div_18_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const repo_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.moveToGithubProject(repo_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const repo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", repo_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 4, repo_r5.created_at, "mediumDate"), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", repo_r5.description, " ");
} }
class ProjectsComponent {
    constructor(router, githubHttp) {
        this.githubHttp = githubHttp;
        this.projects = src_app_models_data_base__WEBPACK_IMPORTED_MODULE_2__["PROJECTS"];
        this.isMessageAlertVisible = false;
        // Wykorzystane w przypadku wyjścia z widoku projektu. 
        // Wrocimy do sekcji #projects.
        router.events.subscribe(s => {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true);
                    }
                }
            }
        });
    }
    ngOnInit() {
        this.getRepos();
    }
    onWindowScroll() {
        const scrollWidth = window.pageYOffset;
        const projectSectionWidth = this.projectsSection.nativeElement.offsetTop;
        if (scrollWidth > projectSectionWidth - 250) {
            return this.isMessageAlertVisible = true;
        }
        return this.isMessageAlertVisible = false;
    }
    getRepos() {
        this.githubRepos$ = this.githubHttp.getRepos().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(results => results.sort((a, b) => {
            return a.created_at > b.created_at ? 1 : a.created_at === b.created_at ? 0 : -1;
        })));
    }
    moveToGithubProject(repo) {
        window.location.href = repo.html_url;
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_github_http_service__WEBPACK_IMPORTED_MODULE_4__["GithubHttpService"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], viewQuery: function ProjectsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.projectsSection = _t.first);
    } }, hostBindings: function ProjectsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function ProjectsComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } }, decls: 20, vars: 5, consts: [["id", "single-section-page"], ["id", "projects", 1, "section-title"], ["projectsSection", ""], ["id", "header"], ["id", "section-content"], [1, "title"], [1, "message-alert-container"], [1, "message-alert", 3, "ngClass"], ["messageAlert", ""], ["class", "project-container", 4, "ngFor", "ngForOf"], [1, "github-links"], ["class", "github-repo", 4, "ngFor", "ngForOf"], [1, "project-container"], [1, "project-content", 3, "ngStyle"], [1, "project-title"], [1, "project-shadow-effect"], [1, "link", 3, "ngStyle", "routerLink"], [1, "github-repo"], [1, "github-repo-icon", 3, "ngStyle"], [1, "github-repo-content", 3, "click"], [1, "github-repo-content-title"], [1, "repo-title"], [1, "repo-date"], [1, "github-repo-content-subtitle"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "#projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Projekty na kt\u00F3re chcia\u0142bym zwr\u00F3ci\u0107 szczeg\u00F3ln\u0105 uwag\u0119: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Najedz na miniatur\u0119 projektu aby przej\u015B\u0107 do szczeg\u00F3\u0142owego okna projektu!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ProjectsComponent_div_14_Template, 8, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Lista wszystkich projekt\u00F3w na moim Githubie posortowanych wzgl\u0119dem dat utworzenia projektu: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProjectsComponent_div_18_Template, 11, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isMessageAlertVisible ? "enable" : "disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 3, ctx.githubRepos$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["#single-section-page[_ngcontent-%COMP%] {\n  background-color: #fff;\n  height: auto;\n  padding-bottom: 20px;\n}\n\n#section-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: flex-start;\n  height: 100%;\n  padding: 0px 20px;\n}\n\n@media (max-width: 768px) {\n  #section-content[_ngcontent-%COMP%] {\n    padding: auto;\n  }\n}\n\n#section-content[_ngcontent-%COMP%]    > .project-container[_ngcontent-%COMP%] {\n  flex-basis: calc(100vw / 4);\n  height: calc(100vw / 4);\n  min-height: 200px;\n  min-width: 200px;\n  border: 4px solid #996AD4;\n  margin: 10px;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n}\n\n@media (max-width: 768px) {\n  #section-content[_ngcontent-%COMP%]    > .project-container[_ngcontent-%COMP%] {\n    min-height: 80vw;\n    min-width: 80vw;\n  }\n}\n\n#section-content[_ngcontent-%COMP%]    > .project-container[_ngcontent-%COMP%]    > .project-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  background-size: cover;\n  border-radius: 10px;\n  top: 8px;\n  left: 8px;\n}\n\n.project-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.project-content[_ngcontent-%COMP%]    > .project-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 10px;\n  width: auto;\n  color: #996AD4;\n  text-shadow: -2px 0 #fff, 0 2px #fff, 2px 0 #fff, 0 -2px #fff;\n  font-weight: bold;\n  z-index: 1;\n}\n\n.project-content[_ngcontent-%COMP%]    > .project-shadow-effect[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  top: 80%;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(180deg, transparent 5%, rgba(255, 250, 255, 0.75) 25%, rgba(255, 255, 255, 0.85) 100%);\n  transition: 1.2s;\n}\n\n.project-content[_ngcontent-%COMP%]    > .project-shadow-effect[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n\n.project-content[_ngcontent-%COMP%]    > .project-shadow-effect[_ngcontent-%COMP%]    > .link[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  background-size: cover;\n  transition: 0.6s;\n}\n\n.project-content[_ngcontent-%COMP%]    > .project-shadow-effect[_ngcontent-%COMP%]    > .link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.project-content[_ngcontent-%COMP%]:hover    > .project-shadow-effect[_ngcontent-%COMP%] {\n  left: 0;\n  top: 0;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n  width: 50%;\n  font-weight: 100;\n}\n\n.message-alert-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -150px;\n  width: 100vw;\n  height: 200px;\n  overflow: hidden;\n}\n\n.message-alert[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  right: -10px;\n  padding: 10px 20px;\n  min-width: 220px;\n  height: 100px;\n  width: 20%;\n  background-color: #996AD4;\n  color: #fff;\n  z-index: 3;\n  transition: 1.2s;\n}\n\n.message-alert[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: -50px;\n  top: 0;\n  display: block;\n  width: 100px;\n  height: 120px;\n  border-radius: 50%;\n  background-color: #996AD4;\n  z-index: -1;\n}\n\n.message-alert[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: -36px;\n  top: calc(50 - 18) px;\n  display: block;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: #fff;\n  z-index: 0;\n  background-image: url(\"/assets/images/link.png\");\n  background-size: contain;\n  border: 4px solid #fff;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n}\n\n.message-alert.enable[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.message-alert.disable[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n\n.github-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0px 100px;\n}\n\n@media (max-width: 768px) {\n  .github-links[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n\n.github-links[_ngcontent-%COMP%]    > .github-repo[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-grow: 1;\n  background-color: #6A737D;\n  min-width: 100px;\n  border-radius: 20px;\n  padding: 10px 20px;\n  margin: 5px;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n  transition: 0.6s;\n  cursor: pointer;\n}\n\n.github-links[_ngcontent-%COMP%]    > .github-repo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.github-links[_ngcontent-%COMP%]    > .github-repo[_ngcontent-%COMP%]    > .github-repo-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(50% - 14px);\n  left: 10px;\n  width: 28px;\n  height: 28px;\n  background-size: contain;\n}\n\n.github-links[_ngcontent-%COMP%]    > .github-repo[_ngcontent-%COMP%]   .github-repo-content[_ngcontent-%COMP%] {\n  padding-left: 28px;\n}\n\nh2.title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 400;\n  padding: 20px 0px;\n}\n\n.repo-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.repo-date[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxzQkNIYztFRElkLFlBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNSTtFQVhKO0lBWVEsYUFBQTtFQUhOO0FBQ0Y7O0FBSUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFRTVCSixpREFBQTtBRjJCSjs7QUFJUTtFQVRKO0lBVVEsZ0JBQUE7SUFDQSxlQUFBO0VBRFY7QUFDRjs7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkN4Q007RUR5Q04sc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRFo7O0FBT0E7RUFDSSxnQkFBQTtBQUpKOztBQU1JO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQzNEUTtFRDREUiw2REFBQTtFQUNBLGlCQUFBO0VBRUEsVUFBQTtBQUxSOztBQU9JO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtIQUFBO0VBQ0EsZ0JBQUE7QUFMUjs7QUFPUTtFQUNJLGVDM0VPO0VENEVQLG1CQUFBO0VBQ0EsZ0JBQUE7QUFMWjs7QUFRUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQU5aOztBQU9ZO0VBQ0kscUJBQUE7QUFMaEI7O0FBVUk7RUFDSSxPQUFBO0VBQ0EsTUFBQTtBQVJSOztBQVlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBVko7O0FBYUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFFQSx5QkNoSVk7RURpSVosV0NoSWM7RURpSWQsVUFBQTtFQWdDQSxnQkFBQTtBQTNDSjs7QUFhSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkM3SVE7RUQ4SVIsV0FBQTtBQVhSOztBQWNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkN6SlU7RUQwSlYsVUFBQTtFQUNBLGdEQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFRTdKSixpREFBQTtBRmtKSjs7QUFtQkE7RUFDSSx3QkFBQTtBQWhCSjs7QUFrQkE7RUFDSSwyQkFBQTtBQWZKOztBQWtCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7QUFoQko7O0FBaUJJO0VBTEo7SUFNUSxlQUFBO0VBZE47QUFDRjs7QUFnQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VFN0xKLGlEQUFBO0VGK0xJLGdCQUFBO0VBQ0EsZUFBQTtBQWRSOztBQWdCUTtFQUNJLHNCQUFBO0FBZFo7O0FBaUJRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBZlo7O0FBa0JRO0VBQ0ksa0JBQUE7QUFoQlo7O0FBcUJBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7QUFuQko7O0FBdUJBO0VBQ0ksZ0JBQUE7QUFwQko7O0FBc0JBO0VBQ0ksV0NqT2M7QUQ4TWxCIiwiZmlsZSI6InByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3NoYXJlZC92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc2hhcmVkL21peGlucy5zY3NzXCI7XHJcblxyXG4jc2luZ2xlLXNlY3Rpb24tcGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNzZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAvLyBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogYXV0bztcclxuICAgIH1cclxuICAgICYgPiAucHJvamVjdC1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IGNhbGMoMTAwdncgLyA0KTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdncgLyA0KTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA4MHZ3O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwdnc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gLnByb2plY3QtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgYmctc2hhZG93O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJiA+IC5wcm9qZWN0LXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogLTJweCAwICNmZmYsIDAgMnB4ICNmZmYsIDJweCAwICNmZmYsIDAgLTJweCAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgJiA+IC5wcm9qZWN0LXNoYWRvdy1lZmZlY3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0b3A6IDgwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCA1JSwgcmdiYSgyNTUsMjUwLDI1NSwwLjc1KSAyNSUsIHJnYmEoMjU1LDI1NSwyNTUsMC44NSkgMTAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMS4ycztcclxuXHJcbiAgICAgICAgJiA+IHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IC5saW5rIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciA+IC5wcm9qZWN0LXNoYWRvdy1lZmZlY3Qge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYWxlcnQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTE1MHB4O1xyXG5cclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWVzc2FnZS1hbGVydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHRvcDogLTE1MHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC0zNnB4O1xyXG4gICAgICAgIHRvcDogY2FsYyg1MCAtIDE4KXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2xpbmsucG5nXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLXNoYWRvdztcclxuXHJcbiAgICB9XHJcbiAgICB0cmFuc2l0aW9uOiAxLjJzO1xyXG5cclxufVxyXG5cclxuLm1lc3NhZ2UtYWxlcnQuZW5hYmxlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG4ubWVzc2FnZS1hbGVydC5kaXNhYmxlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLmdpdGh1Yi1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIHBhZGRpbmc6IDBweCAxMDBweDtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmID4gLmdpdGh1Yi1yZXBvIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZBNzM3RDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLXNoYWRvdztcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gLmdpdGh1Yi1yZXBvLWljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxNHB4KTtcclxuICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjhweDsgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIC5naXRodWItcmVwby1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaDIudGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5yZXBvLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnJlcG8tZGF0ZSB7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjOTk2QUQ0OyAvLyM5OTZBRDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7IC8vIGZmZlxyXG5cclxuJGZvbnQtc2l6ZS1iaWc6IDNyZW07XHJcbiRmb250LXNpemUtbWVkaXVtOiAycmVtO1xyXG4kZm9udC1zaXplLXNtYWxsOiAxLjI1cmVtO1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgJGZvbnQtc2l6ZS1iaWc6IDIuNHJlbTtcclxuICAgICRmb250LXNpemUtbWVkaXVtOiAxLjhyZW07XHJcbiAgICAkZm9udC1zaXplLXNtYWxsOiAxcmVtO1xyXG59XHJcblxyXG5cclxuIiwiQG1peGluIGJnLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDZweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_main_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/main/about-me/about-me.component */ "Orwr");
/* harmony import */ var _pages_main_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/main/projects/projects.component */ "XWzO");
/* harmony import */ var _pages_main_why_me_why_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main/why-me/why-me.component */ "OeLj");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/project/project.component */ "ysFv");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/pl */ "BAOO");
/* harmony import */ var _angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__);















Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_pl__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: "pl-PL" }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _pages_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _pages_main_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
        _pages_main_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
        _pages_main_why_me_why_me_component__WEBPACK_IMPORTED_MODULE_9__["WhyMeComponent"],
        _pages_project_project_component__WEBPACK_IMPORTED_MODULE_10__["ProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"]] }); })();


/***/ }),

/***/ "ZLJp":
/*!*************************************!*\
  !*** ./src/app/models/data-base.ts ***!
  \*************************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
const PROJECTS = [
    {
        id: 1,
        name: "Day planner",
        image: 'assets/images/projects/dayplanner.png',
        images: [{ link: 'assets/images/screenshots/dayplanner1.png', caption: "Widok logowania" }, { link: 'assets/images/screenshots/dayplanner2.png', caption: "Widok rejestracji" }, { link: 'assets/images/screenshots/dayplanner3.png', caption: "Widok zmiany hasła" }, { link: 'assets/images/screenshots/dayplanner4.png', caption: "Widok profilu po zalogowaniu" }, { link: 'assets/images/screenshots/dayplanner5.png', caption: "Szczegolowa informacja o dodanym elemencie" }, { link: 'assets/images/screenshots/dayplanner6.png', caption: "Lista elementow - podział" }, { link: 'assets/images/screenshots/dayplanner7.png', caption: "Tryb nocny!" }],
        description: "Aplikacja frontendowa korzystajaca z API Firebase Google autoryzacji. Dane zapisywane są w localStorage i ładowane za pomocą Reduxa (Aplikacja początkowo miałabyć tylko treningiem Reacta dopiero z czasem rozszerzyłem je o funkcjonalność autoryzacji, a miejsca przechowywania danych już nie zmieniałem). W czasie budowania tego projektu chciałem skupić się na frontendowym aspekcie budowania aplikacji internetowych. Aplikacja zaimplementowana ma wszystkie widoki związane z autoryzacja (logowanie, przypomnij hasło, rejestracja, zmień dane). Aplikacja pozwala na zapisywanie dniowych 24-godzinnych celów – po ukływie tego czasu zmieniają one kolor w aplikacji oraz są przeniesione do sekcji wygaśnietych. Aplikacja umożliwia wyświetlenie pojedyńczego zadania oraz usunięcie go. ",
        technologies: ["JavaScript", "HTML", "CSS"],
        demo: 'https://jakubjereczek.github.io/react-redux-dayplanner/',
        github: 'https://github.com/jakubjereczek/react-redux-dayplanner'
    },
    {
        id: 2,
        name: "Save place on map",
        image: 'assets/images/projects/saveplaceonmap.png',
        images: [{ link: 'assets/images/screenshots/saveplaceonmap1.png', caption: "Widok dodanej lokalizacji" }, { link: 'assets/images/screenshots/saveplaceonmap2.png', caption: "Lista dodanych lokalizacji" }, { link: 'assets/images/screenshots/saveplaceonmap3.png', caption: "Logo aplikacji" }],
        description: "Aplikacja napisana w środowisku Android Studio, której głównym celem jest zapisywanie punktów (markerów) na mapie względem kategorii. Każda z kategorii reprezenuję inną ikonę na mapie. Panel głównym aplikacji daję nam dwie opcje – przejścia do mapy oraz przejścia do listy zapisanych lokalizacji. W przypadku wybrania mapy zostanie odpalona mapa w lokalizacji jakiej znajduję się nasz telefon oraz zostana załadowane wszystkie dotychas dodane markery. Po naciśnięciu na dany marker wyświetli się informacja o nazwie, opisie i kategorii oraz możliwośc usunięcia. Dane punktu przechowywane są na lokalnej pamieci telefonu. Dodanie nowego markera odbywa się za pomocą dłuższego przytrzymania ekranu. A lista dodanych lokalizacji – wraz z odnosnikiem do nich znajduję się menu głównym. Aplikacja jest dwujęzyczna – (język polski oraz angielski).",
        technologies: ["Java", "biblioteka Osmdroid"],
        demo: 'https://play.google.com/store/apps/details?id=pl.edu.ug.saveplaceonmap',
        github: 'https://github.com/jakubjereczek/android-app-saveplaceonmap'
    },
    {
        id: 3,
        name: "Chat app",
        image: 'assets/images/projects/chatapp.png',
        images: [{ link: 'assets/images/screenshots/chatapp1.png', caption: "Widok startowy" }, { link: 'assets/images/screenshots/chatapp2.png', caption: "Widok listy dostepnych pokojow" }, { link: 'assets/images/screenshots/chatapp3.png', caption: "Popup dodawania pokoju" }, { link: 'assets/images/screenshots/chatapp4.png', caption: "Popup przy wejsciu do pokoju z haslem" }, { link: 'assets/images/screenshots/chatapp5.png', caption: "Widok pokoju chatu" }, { link: 'assets/images/screenshots/chatapp6.png', caption: "Widok pokoju chatu" }, { link: 'assets/images/screenshots/chatapp7.png', caption: "Popup dodawania pokoju - mobilny" }],
        description: "Fullstackowa aplikacja grupowego chatu. Jest to moja największa aplikacja. Pełnoprawny system krótkoterminowych pokojów chatu. Użytkownik gdy dołączy do aplikacji istnieje do momentu wyjścia z karty przerglądraki. Aplikacja umożliwia tworzenie pokojów prywatnych (chronionych hasłem) oraz publicznych. Wiadomości oraz komunikaty o między innymi ilości dostępnych użytkowników są wysyłane w czasie rzeczywistym dzięki użyciu Socket.io. Gdy użytkownik utworzy pokój chatu jest on aktywny do momentu gdy jest w nim przynajmniej jeden uzytnikownik. Zaimplementowałem emotikony, powiadomienia o tym, ze użytkownik piszę oraz historie wpisów, które pojawiły przed dołączeniem użytkownika.",
        technologies: ["JavaScript", "ReactJS oraz liczne dependencies", "Socket.io", "Node.js", "Express.js"],
        demo: 'https://socketio-chat-app-client.herokuapp.com/',
        github: 'https://github.com/jakubjereczek/socket.io-chat-app'
    },
    {
        id: 4,
        name: "Snake",
        image: 'assets/images/projects/snake.png',
        images: [{ link: 'assets/images/screenshots/snake1.png', caption: "Menu aplikacji - wybór gry z uzyciem klawiatury lub dotyku (mobilny)" }, { link: 'assets/images/screenshots/snake2.png', caption: "Przedstawienie gry" }],
        description: "Jest to mój najstarszy projekt. Myśle, że warto go pokazać dlatego, że logika została napisana całkowicie w czystym JS. Snake napisany stosujac się do podejścia OPP. Zaimplementowałem wersję na telefony, które responsywnie dostosowuje szerokość oraz wysokość do ekranu telefonu. W moim Snaku zaimplementowałem funkcje algorytmu liczącego detekcje kolizji oraz zaniechania generowania punktów na zajętych pozycjach przez postać. Dodatkowo wprowadziłem „supermoce” – które działają na zachowania postaci, typu przyśpieszenie, spowolnienie czy dodatkowe punkty. W przypadku wjechania w ogon, zostaje on „ucięty” a punkty odjęte.",
        technologies: ["Czysty JavaScript", "HTML", "CSS"],
        demo: 'https://jakubjereczek.github.io/js-snake/',
        github: 'https://github.com/jakubjereczek/js-snake'
    },
    {
        id: 5,
        name: "Library Rest API",
        image: 'assets/images/projects/libraryapi.png',
        images: [{ link: 'assets/images/screenshots/api1.png', caption: "Schemat API" }],
        description: "REST API napisane w Node.js bilioteki. API implemenuje RESTowe metody dla zapytania /books/ oraz /users/. Autor relacyjnie powiązany jest z książkami. W przypadku dodania dla nowej ksiązki nieistniejacego autora tworzymy go w bazie danych. W tablicy Authors w polu books zostaje dodane _id książki a w Books w polu author zastępuje przypisanie _id autora. Jeśli usuniemy książke to automatycznie z tablicy books (Authors) zostaję usunięta ta pozycja. Również jeśli usuniemy autora to wszystkie jego książki zostaną usunięte. Niektóre z metod potrzebują uwierzytelnienia. Pełna dokumentacja znajduję się na Githubie w pliku dokumentacjaPL.docs.",
        technologies: ["JavaScript", "Node.js", "Express.js", "jsonwebtoken", "mongodb", "mongoose", "bcrypt"],
        demo: 'https://github.com/jakubjereczek/express-restapi-library/blob/main/DokumentacjaPL.docx',
        github: 'https://github.com/jakubjereczek/express-restapi-library'
    },
    {
        id: 6,
        name: "jwt tokens auth",
        image: 'assets/images/projects/reactjwt.png',
        images: [],
        description: "Project jest w czasie tworzenia. Dotychczasowa praca pozwala na rejestrację oraz logowanie. Celem projektu jest stworzenie własnego systemu rejestracji. Aplikcja pozwala na autoryzacje uzytkownika za pomocą Tokenów (wykorzystuje AccessToken oraz Refresh token). W przyszłości chciałbym zaimplementować wysyłanie maili potwierdzających utworzenie oraz odzyskiwanie konta. W planach jest rownież implementacja przenoszenia tokenów między serwerem a klientem w Cookie only-http (aktualnie robie to w sposob nie zapewniajacy pełnego bezpieczeństwa).",
        technologies: ["JavaScript", "Node.js", "Express.js (bcrypt, body-parser, cors, jsonwebtoken, mongoose)", "mongoDB", "ReactJS"],
        demo: null,
        github: 'https://github.com/jakubjereczek/react-jwt-auth'
    },
];


/***/ }),

/***/ "ptFG":
/*!*************************************************!*\
  !*** ./src/app/services/github-http.service.ts ***!
  \*************************************************/
/*! exports provided: GithubHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubHttpService", function() { return GithubHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class GithubHttpService {
    constructor(http) {
        this.http = http;
        this.URL = "https://api.github.com/users/jakubjereczek/repos";
    }
    getRepos() {
        console.log("Repos");
        return this.http.get(this.URL);
    }
}
GithubHttpService.ɵfac = function GithubHttpService_Factory(t) { return new (t || GithubHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GithubHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GithubHttpService, factory: GithubHttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main/main.component */ "/s1f");
/* harmony import */ var _pages_project_project_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/project/project.component */ "ysFv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: 'project/:id', component: _pages_project_project_component__WEBPACK_IMPORTED_MODULE_2__["ProjectComponent"] },
    { path: '**', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] } // not found
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "ysFv":
/*!****************************************************!*\
  !*** ./src/app/pages/project/project.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_data_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/data-base */ "ZLJp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);






const _c0 = function () { return { "background-image": "url(assets/images/github2.png)" }; };
function ProjectComponent_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_div_3_ng_container_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.moveToProject(project_r1, "github"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { "background-image": "url(assets/images/link.png)" }; };
function ProjectComponent_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_div_3_ng_container_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.moveToProject(project_r1, "demo"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function ProjectComponent_div_3_img_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_div_3_img_7_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const i_r12 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.open(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r11.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c2 = function (a0) { return { "open": a0 }; };
function ProjectComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectComponent_div_3_ng_container_3_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProjectComponent_div_3_ng_container_4_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProjectComponent_div_3_img_7_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Zastosowane technologie: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", project_r1.github);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", project_r1.demo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, !ctx_r0.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c2, !ctx_r0.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0._album);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c2, !ctx_r0.loading));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.technologies.join(", "));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.description);
} }
class ProjectComponent {
    constructor(route, location, router, _lightbox) {
        this.route = route;
        this.location = location;
        this.router = router;
        this._lightbox = _lightbox;
        this._album = [];
        this.loading = true;
    }
    ngOnInit() {
        // Pobieranie danych z listy na podstawie przekazanego ID.
        this.projectDetails = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((params) => src_app_models_data_base__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"].filter(project => project.id === Number(params.get('id')))));
        this.initGallery();
        setTimeout(() => {
            this.loading = false;
        }, 0);
    }
    initGallery() {
        // Inizjalizaja galerii.
        this.projectDetails.subscribe((movie) => {
            const images = movie.images;
            for (let i = 0; i < images.length; i++) {
                const src = images[i].link;
                const caption = images[i].caption;
                const thumb = images[i].link;
                const album = {
                    src: src,
                    caption: caption,
                    thumb: thumb
                };
                this._album.push(album);
            }
        });
    }
    open(index) {
        // open lightbox
        this._lightbox.open(this._album, index);
    }
    close() {
        // close lightbox programmatically
        this._lightbox.close();
    }
    back() {
        // this.location.back();
        this.router.navigate(['main']
        // ,
        //  { fragment: 'projects' }
        );
        // TODO:  Poprawić!
    }
    moveToProject(project, type) {
        let url = null;
        switch (type) {
            case 'github':
                url = project.github;
                break;
            case 'demo':
                url = project.demo;
                break;
        }
        window.open(url, "_blank");
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 5, vars: 6, consts: [["id", "single-section-page"], ["id", "section-content", 3, "ngClass"], ["id", "project-container-bg"], ["id", "project-container", 4, "ngIf"], ["id", "project-container"], [3, "click"], [1, "links", "buttons"], [4, "ngIf"], ["id", "project-images", 3, "ngClass"], [1, "project-images-content", 3, "ngClass"], [3, "src", "click", 4, "ngFor", "ngForOf"], ["id", "project-content-container"], ["id", "project-content", 3, "ngClass"], [1, "project-content-title"], [1, "project-content-technologies"], [1, "project-content-description"], [1, "github", "btn", 3, "ngStyle", "click"], [1, "demo", "btn", 3, "ngStyle", "click"], [3, "src", "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProjectComponent_div_3_Template, 18, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, !ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, ctx.projectDetails));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["#single-section-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n}\n#single-section-page[_ngcontent-%COMP%]    > #section-content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  transition: 1.2s;\n  top: -100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n  width: 80%;\n  height: 90%;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n}\n#single-section-page[_ngcontent-%COMP%]    > #section-content.open[_ngcontent-%COMP%] {\n  top: 0;\n}\n@media (max-width: 768px) {\n  #single-section-page[_ngcontent-%COMP%]    > #section-content[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\n#project-container-bg[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #996AD4;\n  width: 80%;\n  height: 80%;\n}\n@media (max-width: 768px) {\n  #project-container-bg[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 90%;\n  }\n}\n#project-container-bg[_ngcontent-%COMP%]    > #project-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  top: -10px;\n  left: -10px;\n  width: 100%;\n  height: 100%;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n}\n#project-images[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  width: 35%;\n  height: calc(100% + 200px);\n  background-color: #996AD4;\n  overflow-y: scroll;\n  transition: 1.2s 1.2s;\n  top: -200vh;\n}\n#project-images.open[_ngcontent-%COMP%] {\n  top: -200px;\n}\n@media (max-width: 768px) {\n  #project-images[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n#project-images[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n#project-images[_ngcontent-%COMP%]    > .project-images-content[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  padding: 5px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  transition: 1.2s 2.4s;\n  transform: scale(0);\n}\n#project-images[_ngcontent-%COMP%]    > .project-images-content.open[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n#project-images[_ngcontent-%COMP%]    > .project-images-content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 45%;\n  height: 45%;\n  margin: 5px;\n  cursor: pointer;\n  box-shadow: -1px 6px 14px 0px rgba(0, 0, 0, 0.25);\n}\n@media (max-width: 768px) {\n  #project-images[_ngcontent-%COMP%]    > .project-images-content[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -32px;\n  right: 0px;\n  width: 46px;\n  height: 46px;\n  background-color: #fff;\n  border: 2px solid #000;\n  border-radius: 50%;\n  padding: 10px 5px;\n  transition: 0.6s;\n}\nbutton[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 9px);\n  background-color: #000;\n  width: 18px;\n  height: 2px;\n  transform: rotate(45deg);\n}\nbutton[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 9px);\n  background-color: #000;\n  width: 18px;\n  height: 2px;\n  transform: rotate(-45deg);\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03) rotate(45deg);\n}\n#project-content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n#project-content[_ngcontent-%COMP%] {\n  min-height: 100px;\n  height: 100%;\n  transform: scale(0);\n  transition: 1.2s 2.4s;\n  margin-left: calc(35% + 30px);\n  overflow-y: scroll;\n}\n#project-content.open[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n@media (max-width: 768px) {\n  #project-content[_ngcontent-%COMP%] {\n    margin-left: calc(45% + 15px);\n  }\n}\n#project-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n#project-content[_ngcontent-%COMP%]    > .project-content-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n#project-content[_ngcontent-%COMP%]    > .project-content-description[_ngcontent-%COMP%], #project-content[_ngcontent-%COMP%]    > .project-content-technologies[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.project-content-title[_ngcontent-%COMP%], .project-content-description[_ngcontent-%COMP%], .project-content-technologies[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px;\n}\n.project-content-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .project-content-description[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .project-content-technologies[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #996AD4;\n  font-weight: bold;\n}\n.buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 26px;\n  width: auto;\n  top: -35px;\n  right: 84px;\n}\n.buttons[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  z-index: 2;\n  border-radius: 50%;\n  padding: 5px;\n  transition: 0.6s;\n}\n.buttons[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03) translateY(-2px);\n}\n.buttons[_ngcontent-%COMP%]    > .demo[_ngcontent-%COMP%] {\n  background-size: contain;\n  left: -36px;\n}\n.buttons[_ngcontent-%COMP%]    > .github[_ngcontent-%COMP%] {\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRko7QUFJSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFLQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQ3JCVTtFRHNCVixVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFRXpCSixpREFBQTtBRm9CSjtBQU5RO0VBQ0ksTUFBQTtBQVFaO0FBSVE7RUFsQko7SUFtQlEsV0FBQTtJQUNBLFlBQUE7RUFEVjtBQUNGO0FBUUE7RUFDSSxrQkFBQTtFQUNBLHlCQ3hDWTtFRDBDWixVQUFBO0VBQ0EsV0FBQTtBQU5KO0FBT0k7RUFOSjtJQU9RLFdBQUE7SUFDQSxXQUFBO0VBSk47QUFDRjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxzQkNsRFU7RURtRFYsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFRXRESixpREFBQTtBRm1ESjtBQVNBO0VBQ0ksa0JBQUE7RUFFQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJDbkVZO0VEb0VaLGtCQUFBO0VBRUEscUJBQUE7RUFDQSxXQUFBO0FBUko7QUFTSTtFQUNJLFdBQUE7QUFQUjtBQVVJO0VBZko7SUFnQlEsVUFBQTtFQVBOO0FBQ0Y7QUFTSTtFQUNJLGFBQUE7QUFQUjtBQVdJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7QUFWUjtBQVdRO0VBQ0ksbUJBQUE7QUFUWjtBQVlRO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VFdEdSLGlEQUFBO0FGNkZKO0FBV1k7RUFQSjtJQVFRLFdBQUE7SUFDQSxZQUFBO0VBUmQ7QUFDRjtBQWVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JDeEhjO0VEeUhkLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQXVCQSxnQkFBQTtBQWxDSjtBQWFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBWFI7QUFhSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQVhSO0FBZUk7RUFDSSxvQ0FBQTtBQWJSO0FBaUJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFkSjtBQWtCQTtFQUNJLGlCQUFBO0VBRUEsWUFBQTtFQUVBLG1CQUFBO0VBQ0EscUJBQUE7RUFLQSw2QkFBQTtFQUlBLGtCQUFBO0FBeEJKO0FBZ0JJO0VBQ0ksbUJBQUE7QUFkUjtBQWtCSTtFQVpKO0lBYVEsNkJBQUE7RUFmTjtBQUNGO0FBaUJJO0VBQ0ksYUFBQTtBQWZSO0FBa0JJO0VBQ0ksZUNoTFc7QURnS25CO0FBa0JJO0VBQ0ksa0JDbExVO0FEa0tsQjtBQXNCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQW5CSjtBQXFCSTtFQUNJLGNDbE1RO0VEbU1SLGlCQUFBO0FBbkJSO0FBdUJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBcEJKO0FBdUJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXJCUjtBQXNCUTtFQUNJLHVDQUFBO0FBcEJaO0FBd0JJO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0FBdEJSO0FBeUJJO0VBQ0ksd0JBQUE7QUF2QlIiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zaGFyZWQvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uL3NoYXJlZC9taXhpbnMuc2Nzc1wiO1xyXG5cclxuI3NpbmdsZS1zZWN0aW9uLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgJiA+ICNzZWN0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDEuMnM7XHJcbiAgICAgICAgdG9wOiAtMTAwdmg7XHJcbiAgICAgICAgJi5vcGVuIHtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBiZy1zaGFkb3c7XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuI3Byb2plY3QtY29udGFpbmVyLWJnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG5cclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAjcHJvamVjdC1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLXNoYWRvdztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiNwcm9qZWN0LWltYWdlcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IC0yMDBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAyMDBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiAxLjJzIDEuMnM7XHJcbiAgICB0b3A6IC0yMDB2aDtcclxuICAgICYub3BlbiB7XHJcbiAgICAgICAgdG9wOiAtMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICYgPiAucHJvamVjdC1pbWFnZXMtY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDEuMnMgMi40cztcclxuXHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IGltZyB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDUlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBiZy1zaGFkb3c7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMzJweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGhlaWdodDogNDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMTBweCA1cHg7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gOXB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gOXB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMykgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuI3Byb2plY3QtY29udGVudC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbiNwcm9qZWN0LWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxLjJzIDIuNHM7XHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMzUlICsgMzBweCk7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyg0NSUgKyAxNXB4KTtcclxuICAgIH1cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAucHJvamVjdC1jb250ZW50LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbWVkaXVtO1xyXG4gICAgfVxyXG4gICAgJiA+IC5wcm9qZWN0LWNvbnRlbnQtZGVzY3JpcHRpb24sICYgPiAucHJvamVjdC1jb250ZW50LXRlY2hub2xvZ2llcyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtYWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbi5wcm9qZWN0LWNvbnRlbnQtdGl0bGUsIC5wcm9qZWN0LWNvbnRlbnQtZGVzY3JpcHRpb24sIC5wcm9qZWN0LWNvbnRlbnQtdGVjaG5vbG9naWVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAmID4gc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRvcDogLTM1cHg7XHJcbiAgICByaWdodDogODRweDtcclxuICAgIFxyXG5cclxuICAgICYgPiAuYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpIHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZGVtbyB7IFxyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBsZWZ0OiAtMzZweDtcclxuXHJcbiAgICAgfVxyXG4gICAgJiA+IC5naXRodWIgeyBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICB9XHJcblxyXG5cclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjOTk2QUQ0OyAvLyM5OTZBRDQ7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNmZmY7IC8vIGZmZlxyXG5cclxuJGZvbnQtc2l6ZS1iaWc6IDNyZW07XHJcbiRmb250LXNpemUtbWVkaXVtOiAycmVtO1xyXG4kZm9udC1zaXplLXNtYWxsOiAxLjI1cmVtO1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG4gICAgJGZvbnQtc2l6ZS1iaWc6IDIuNHJlbTtcclxuICAgICRmb250LXNpemUtbWVkaXVtOiAxLjhyZW07XHJcbiAgICAkZm9udC1zaXplLXNtYWxsOiAxcmVtO1xyXG59XHJcblxyXG5cclxuIiwiQG1peGluIGJnLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDZweCAxNHB4IDBweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG59Il19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map