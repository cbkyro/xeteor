webpackJsonp([12],{410:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),c=n(63),u=n(1),s=n.n(u),f=n(156),l=function(t){function e(){return o(this,e),r(this,t.apply(this,arguments))}return a(e,t),e.prototype.loaded=function(){this.registerContactFormValidation()},e.prototype.registerContactFormValidation=function(){var t="form[data-contact-form]",e=Object(c.a)({submit:t+' input[type="submit"]'}),n=s()(t);e.add([{selector:t+' input[name="contact_email"]',validate:function(t,e){t(f.a.email(e))},errorMessage:this.context.contactEmail},{selector:t+' textarea[name="contact_question"]',validate:function(t,e){t(f.a.notEmpty(e))},errorMessage:this.context.contactQuestion}]),n.submit(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()})},e}(i.a);e.default=l}});
