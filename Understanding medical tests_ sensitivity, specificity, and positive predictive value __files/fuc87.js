if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
(function(window, document, $){
'use strict';
var cache={
filterId: 0
},
$body=$('body');
var Vague=function(elm, customOptions){
var defaultOptions={
intensity: 5,
forceSVGUrl: false,
animationOptions: {
duration: 1000,
easing: 'linear'
}},
options=$.extend(defaultOptions, customOptions),
_browserPrefixes=' -webkit- -moz- -o- -ms- '.split(' '),
_cssPrefixString={},
_cssPrefix=function(property){
if(_cssPrefixString[property]||_cssPrefixString[property]==='') return _cssPrefixString[property] + property;
var e=document.createElement('div');
var prefixes=['', 'Moz', 'Webkit', 'O', 'ms', 'Khtml'];
for (var i in prefixes){
if(typeof e.style[prefixes[i] + property]!=='undefined'){
_cssPrefixString[property]=prefixes[i];
return prefixes[i] + property;
}}
return property.toLowerCase();
},
_support={
cssfilters: function(){
var el=document.createElement('div');
el.style.cssText=_browserPrefixes.join('filter' + ':blur(2px); ');
return !!el.style.length&&((document.documentMode===undefined||document.documentMode > 9));
}(),
svgfilters: function(){
var result=false;
try {
result=typeof SVGFEColorMatrixElement!==undefined &&
SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE==2;
} catch (e){}
return result;
}()
},
_blurred=false,
_cssFilterProp=_cssPrefix('Filter'),
_svgGaussianFilter,
_filterId,
_animation,
_createSvgElement=function(tagName){
return document.createElementNS('http://www.w3.org/2000/svg', tagName);
},
_appendSVGFilter=function(){
var svg=_createSvgElement('svg'),
filter=_createSvgElement('filter');
_svgGaussianFilter=_createSvgElement('feGaussianBlur');
svg.setAttribute('style', 'position:absolute');
svg.setAttribute('width', '0');
svg.setAttribute('height', '0');
filter.setAttribute('id', 'blur-effect-id-' + cache.filterId);
filter.appendChild(_svgGaussianFilter);
svg.appendChild(filter);
$body.append(svg);
};
this.$elm=elm instanceof $ ? elm:$(elm);
this.init=function(){
if(_support.svgfilters){
_appendSVGFilter();
}
_filterId=cache.filterId;
cache.filterId++;
return this;
};
this.blur=function(){
var cssFilterValue,
loc=window.location,
svgUrl=options.forceSVGUrl ? loc.protocol + '//' + loc.host + loc.pathname:'';
if(_support.cssfilters){
cssFilterValue='blur(' + options.intensity + 'px)';
}else if(_support.svgfilters){
_svgGaussianFilter.setAttribute('stdDeviation', options.intensity);
cssFilterValue='url(' + svgUrl + '#blur-effect-id-' + _filterId + ')';
}else{
cssFilterValue='progid:DXImageTransform.Microsoft.Blur(pixelradius=' + options.intensity + ')';
}
this.$elm[0].style[_cssFilterProp]=cssFilterValue;
_blurred=true;
return this;
};
this.animate=function(newIntensity, customAnimationOptions){
if(typeof newIntensity!=='number'){
throw (typeof newIntensity + ' is not a valid number to animate the blur');
}else if(newIntensity < 0){
throw ('I can animate only positive numbers');
}
var dfr=new $.Deferred();
if(_animation){
_animation.stop(true, true);
}
_animation=new $.Animation(options, {
intensity: newIntensity
}, $.extend(options.animationOptions, customAnimationOptions))
.progress($.proxy(this.blur, this))
.done(dfr.resolve);
return dfr.promise();
};
this.unblur=function(){
this.$elm.css(_cssFilterProp, 'none');
_blurred=false;
return this;
};
this.toggleblur=function(){
if(_blurred){
this.unblur();
}else{
this.blur();
}
return this;
};
this.destroy=function(){
if(_support.svgfilters){
$('filter#blur-effect-id-' + _filterId).parent().remove();
}
this.unblur();
for (var prop in this){
delete this[prop];
}
return this;
};
return this.init();
};
$.fn.Vague=function(options){
return new Vague(this, options);
};}(window, document, jQuery));
(function($){
$.extend($,{ placeholder: {
browser_supported: function(){
return this._supported!==undefined ?
this._supported :
(this._supported = !!('placeholder' in $('<input type="text">')[0]));
},
shim: function(opts){
var config={
color: '#AAA',
cls: 'placeholder',
selector: 'input[placeholder], textarea[placeholder]'
};
$.extend(config,opts);
return !this.browser_supported()&&$(config.selector)._placeholder_shim(config);
}}});
$.extend($.fn,{
_placeholder_shim: function(config){
function calcPositionCss(target){
var op=$(target).offsetParent().offset();
var ot=$(target).offset();
return {
top: ot.top - op.top,
left: ot.left - op.left,
width: $(target).width()
};}
function adjustToResizing(label){
var $target=label.data('target');
if(typeof $target!=="undefined"){
label.css(calcPositionCss($target));
$(window).one("resize", function (){ adjustToResizing(label); });
}}
return this.each(function(){
var $this=$(this);
if($this.is(':visible')){
if($this.data('placeholder')){
var $ol=$this.data('placeholder');
$ol.css(calcPositionCss($this));
return true;
}
var possible_line_height={};
if(!$this.is('textarea')&&$this.css('height')!='auto'){
possible_line_height={ lineHeight: $this.css('height'), whiteSpace: 'nowrap' };}
var isBorderBox=($this.css('box-sizing')==='border-box');
var isTextarea=$this.is('textarea');
var ol=$('<label />')
.text($this.attr('placeholder'))
.addClass(config.cls)
.css($.extend({
position:'absolute',
display: 'inline',
'float':'none',
overflow:'hidden',
textAlign: 'left',
color: config.color,
cursor: 'text',
paddingTop: !isTextarea&&isBorderBox ? '0':$this.css('padding-top'),
paddingRight: $this.css('padding-right'),
paddingBottom: !isTextarea&&isBorderBox ? '0':$this.css('padding-bottom'),
paddingLeft: $this.css('padding-left'),
fontSize: $this.css('font-size'),
fontFamily: $this.css('font-family'),
fontStyle: $this.css('font-style'),
fontWeight: $this.css('font-weight'),
textTransform: $this.css('text-transform'),
backgroundColor: 'transparent',
zIndex: 99
}, possible_line_height))
.css(calcPositionCss(this))
.attr('for', this.id)
.data('target',$this)
.click(function(){
if(!$(this).data('target').is(':disabled')){
$(this).data('target').focus();
}})
.insertBefore(this);
$this
.data('placeholder',ol)
.focus(function(){
ol.hide();
})
.blur(function(){
ol[$this.val().length ? 'hide':'show']();
}).triggerHandler('blur');
$(window).one("resize", function (){ adjustToResizing(ol); });
}});
}});
})(jQuery);
jQuery(document).add(window).bind('ready load', function(){
if(jQuery.placeholder){
jQuery.placeholder.shim();
}});
!function(a,b,c){"use strict";var d=function(d,e){var f=!!b.getComputedStyle;f||(b.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var g,h,i,j,k,l,m=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},n=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},o=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},p=function(a,b){for(var c in b)a.setAttribute(c,b[c])},q=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},r=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},t=a.createElement("style"),u=a.documentElement,v=function(b,c){var d;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(d in c)this.options[d]=c[d];if(q(u,this.options.jsClass),this.wrapperEl=b.replace("#",""),a.getElementById(this.wrapperEl))this.wrapper=a.getElementById(this.wrapperEl);else{if(!a.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=a.querySelector(this.wrapperEl)}this.wrapper.inner=o(this.wrapper),h=this.options,g=this.wrapper,this._init(this)};return v.prototype={destroy:function(){this._removeStyles(),r(g,"closed"),r(g,"opened"),r(g,h.navClass),r(g,h.navClass+"-"+this.index),r(u,h.navActiveClass),g.removeAttribute("style"),g.removeAttribute("aria-hidden"),n(b,"resize",this,!1),n(b,"focus",this,!1),n(a.body,"touchmove",this,!1),n(i,"touchstart",this,!1),n(i,"touchend",this,!1),n(i,"mouseup",this,!1),n(i,"keyup",this,!1),n(i,"click",this,!1),h.customToggle?i.removeAttribute("aria-hidden"):i.parentNode.removeChild(i)},toggle:function(){j===!0&&(l?this.close():this.open(),this._enablePointerEvents())},open:function(){l||(r(g,"closed"),q(g,"opened"),q(u,h.navActiveClass),q(i,"active"),g.style.position=h.openPos,p(g,{"aria-hidden":"false"}),l=!0,h.open())},close:function(){l&&(q(g,"closed"),r(g,"opened"),r(u,h.navActiveClass),r(i,"active"),p(g,{"aria-hidden":"true"}),h.animate?(j=!1,setTimeout(function(){g.style.position="absolute",j=!0},h.transition+10)):g.style.position="absolute",l=!1,h.close())},resize:function(){"none"!==b.getComputedStyle(i,null).getPropertyValue("display")?(k=!0,p(i,{"aria-hidden":"false"}),g.className.match(/(^|\s)closed(\s|$)/)&&(p(g,{"aria-hidden":"true"}),g.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,p(i,{"aria-hidden":"true"}),p(g,{"aria-hidden":"false"}),g.style.position=h.openPos,this._removeStyles())},handleEvent:function(a){var c=a||b.event;switch(c.type){case"touchstart":this._onTouchStart(c);break;case"touchmove":this._onTouchMove(c);break;case"touchend":case"mouseup":this._onTouchEnd(c);break;case"click":this._preventDefault(c);break;case"keyup":this._onKeyUp(c);break;case"focus":case"resize":this.resize(c)}},_init:function(){this.index=c++,q(g,h.navClass),q(g,h.navClass+"-"+this.index),q(g,"closed"),j=!0,l=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var d=this;setTimeout(function(){d.resize()},20),m(b,"resize",this,!1),m(b,"focus",this,!1),m(a.body,"touchmove",this,!1),m(i,"touchstart",this,!1),m(i,"touchend",this,!1),m(i,"mouseup",this,!1),m(i,"keyup",this,!1),m(i,"click",this,!1),h.init()},_createStyles:function(){t.parentNode||(t.type="text/css",a.getElementsByTagName("head")[0].appendChild(t))},_removeStyles:function(){t.parentNode&&t.parentNode.removeChild(t)},_createToggle:function(){if(h.customToggle){var b=h.customToggle.replace("#","");if(a.getElementById(b))i=a.getElementById(b);else{if(!a.querySelector(b))throw new Error("The custom nav toggle you are trying to select doesn't exist");i=a.querySelector(b)}}else{var c=a.createElement("a");c.innerHTML=h.label,p(c,{href:"#","class":"nav-toggle"}),"after"===h.insert?g.parentNode.insertBefore(c,g.nextSibling):g.parentNode.insertBefore(c,g),i=c}},_closeOnNavClick:function(){if(h.closeOnNavClick){var a=g.getElementsByTagName("a"),b=this;s(a,function(c){m(a[c],"click",function(){k&&b.toggle()},!1)})}},_preventDefault:function(a){return a.preventDefault?(a.stopImmediatePropagation&&a.stopImmediatePropagation(),a.preventDefault(),a.stopPropagation(),!1):void(a.returnValue=!1)},_onTouchStart:function(b){this._preventDefault(b),q(a.body,"disable-pointer-events"),this.startX=b.touches[0].clientX,this.startY=b.touches[0].clientY,this.touchHasMoved=!1,n(i,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this._enablePointerEvents(),this.touchHasMoved=!0)},_onTouchEnd:function(c){if(this._preventDefault(c),k&&!this.touchHasMoved){if("touchend"===c.type)return this.toggle(),void("after"===h.insert&&setTimeout(function(){r(a.body,"disable-pointer-events")},h.transition+300));var d=c||b.event;3!==d.which&&2!==d.button&&this.toggle()}},_onKeyUp:function(a){var c=a||b.event;13===c.keyCode&&this.toggle()},_enablePointerEvents:function(){r(a.body,"disable-pointer-events")},_transitions:function(){if(h.animate){var a=g.style,b="max-height "+h.transition+"ms";a.WebkitTransition=b,a.MozTransition=b,a.OTransition=b,a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<g.inner.length;b++)a+=g.inner[b].offsetHeight;var c="."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened{max-height:"+a+"px !important} ."+h.jsClass+" .disable-pointer-events{pointer-events:none !important} ."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";t.styleSheet?t.styleSheet.cssText=c:t.innerHTML=c,c=""}},new v(d,e)};b.responsiveNav=d}(document,window,0);
!function(a){"function"==typeof define&&define.amd?define(["window","document"],a):a(window,document)}(function(a,b){function c(a,b){return function(){return a.apply(b,arguments)}}function d(a,b){var c;for(c in b)b.hasOwnProperty(c)&&(a.style[c]=b[c])}function e(a){v(function(){var b,c;for(b=0;b<a.length;b++)c=a[b],d(c.el,c.css)})}function f(a){return a.replace(/^\s+|\s+$/g,"").toLowerCase()}function g(a,b,c){a.removeEventListener?a.removeEventListener(b,c):a.detachEvent("on"+b,c)}function h(a,b,c){g(a,b,c),a.addEventListener?a.addEventListener(b,c):a.attachEvent("on"+b,function(){c.call(a)})}function i(a){return null===a.offsetParent}function j(a){return a.offsetHeight}function k(a){return a.offsetWidth}function l(a,b){return a.classList?a.classList.contains(b):new RegExp("(^|)"+b+"(|$)","gi").test(a.className)}function m(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function n(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function o(a,b,c,d){void 0===d&&(d="wookmark-");var e=a.getAttribute("data-"+d+b);return c===!0?parseInt(e,10):e}function p(a,b,c,d){void 0===d&&(d="wookmark-"),a.setAttribute("data-"+d+b,c)}function q(a){for(var b,c={},d=[],e=a.length;e--;)b=o(a[e],"id",!0),c.hasOwnProperty(b)||(c[b]=1,d.push(a[e]));return d}function r(b,c){return void 0!==a.getComputedStyle?a.getComputedStyle(b,null).getPropertyValue(c):b.currentStyle[c]}function s(a,b){var c,d=a.length;for(c=0;d>c;c++)if(a[c]===b)return c;return-1}function t(d,e){e=e||{},"string"==typeof d&&(d=b.querySelector(d)),this.container=d,this.columns=this.containerWidth=this.resizeTimer=null,this.activeItemCount=0,this.placeholders=[],this.itemHeightsInitialized=!1,this.itemHeightsDirty=!1,this.elementTag="div",this.initItems=c(this.initItems,this),this.updateOptions=c(this.updateOptions,this),this.onResize=c(this.onResize,this),this.onRefresh=c(this.onRefresh,this),this.getItemWidth=c(this.getItemWidth,this),this.layout=c(this.layout,this),this.layoutFull=c(this.layoutFull,this),this.layoutColumns=c(this.layoutColumns,this),this.filter=c(this.filter,this),this.clear=c(this.clear,this),this.getActiveItems=c(this.getActiveItems,this),this.refreshPlaceholders=c(this.refreshPlaceholders,this),this.sortElements=c(this.sortElements,this),this.updateFilterClasses=c(this.updateFilterClasses,this),this.initItems(),this.container.style.display="block",this.updateOptions(e),this.updateFilterClasses(),this.autoResize&&h(a,"resize",this.onResize),h(this.container,"refreshWookmark",this.onRefresh)}var u={align:"center",autoResize:!0,comparator:null,direction:void 0,ignoreInactiveItems:!0,inactiveClass:"wookmark-inactive",itemSelector:void 0,itemWidth:0,fillEmptySpace:!1,flexibleWidth:0,offset:5,outerOffset:0,onLayoutChanged:void 0,placeholderClass:"wookmark-placeholder",possibleFilters:[],resizeDelay:50,verticalOffset:void 0},v=a.requestAnimationFrame||function(a){a()};return t.prototype.initItems=function(){if(void 0===this.itemSelector){for(var a,b=[],c=this.container.children,d=c.length;d--;)a=c[d],8!==a.nodeType&&(a.style.display="",p(a,"id",d),b.unshift(a));this.items=b}else this.items=this.container.querySelectorAll(this.itemSelector);this.items.length&&(this.elementTag=this.items[0].tagName),this.itemHeightsDirty=!0},t.prototype.updateFilterClasses=function(){for(var a,b,c,d,e,g=this.items.length,h={},i=this.possibleFilters,j=i.length;g--;)if(c=this.items[g],b=JSON.parse(o(c,"filter-class",!1,"")),b&&"object"==typeof b)for(a=b.length;a--;)d=f(b[a]),h.hasOwnProperty(d)||(h[d]=[]),h[d].push(c);for(;j--;)e=f(i[j]),h.hasOwnProperty(e)||(h[e]=[]);this.filterClasses=h},t.prototype.updateOptions=function(a){var b;this.itemHeightsDirty=!0,a=a||{};for(b in u)u.hasOwnProperty(b)&&(a.hasOwnProperty(b)?this[b]=a[b]:this.hasOwnProperty(b)||(this[b]=u[b]));this.verticalOffset=this.verticalOffset||this.offset,this.layout(!0)},t.prototype.onResize=function(){clearTimeout(this.resizeTimer),this.itemHeightsDirty=0!==this.flexibleWidth,this.resizeTimer=setTimeout(this.layout,this.resizeDelay)},t.prototype.onRefresh=function(){this.itemHeightsDirty=!0,this.layout()},t.prototype.filter=function(a,b,c){var d,e,g,h,i,j=[],k=[];if(a=a||[],b=b||"or",c=c||!1,a.length){for(e=0;e<a.length;e++)i=f(a[e]),this.filterClasses.hasOwnProperty(i)&&j.push(this.filterClasses[i]);if(e=d=j.length,"or"===b||1===d)for(;e--;)k=k.concat(j[e]);else if("and"===b){for(var l,o,p,r=j[0],t=!0;e--;)j[e].length<r.length&&(r=j[e]);for(r=r||[],e=r.length;e--;){for(o=r[e],g=d,t=!0;g--&&t;)if(p=j[g],r!==p){for(l=!1,h=p.length;h--&&!l;)l=p[h]===o;t&=l}t&&(k=k.concat(r[e]))}}if(d>1&&(k=q(k)),!c)for(e=this.items.length;e--;)-1===s(k,this.items[e])&&m(this.items[e],this.inactiveClass)}else k=this.items;if(!c){for(e=k.length;e--;)n(k[e],this.inactiveClass);this.columns=null,this.layout()}return k},t.prototype.refreshPlaceholders=function(a,b){var c,e,f,g,h,i,k,l=j(this.container),m=this.columns.length,n="";if(this.placeholders.length<m){for(c=0;c<m-this.placeholders.length;c++)n+="<"+this.elementTag+' class="'+this.placeholderClass+'"/>';this.container.insertAdjacentHTML("beforeend",n),this.placeholders=this.container.querySelectorAll("."+this.placeholderClass)}for(g=this.offset+2*parseInt(r(this.placeholders[0],"border-left-width"),10)||0,g+=2*parseInt(r(this.placeholders[0],"padding-left"),10)||0,c=0;c<this.placeholders.length;c++)i=this.placeholders[c],e=this.columns[c],c>=m||0===e.length?i.style.display="none":(h=e[e.length-1],k=o(h,"top",!0)+o(h,"height",!0)+this.verticalOffset,f=Math.max(0,l-k-g),d(i,{position:"absolute",display:f>0?"block":"none",left:c*a+b+"px",top:k+"px",width:a-g+"px",height:f+"px"}))},t.prototype.getActiveItems=function(){var a,b,c=this.inactiveClass,d=[],e=this.items;if(this.ignoreInactiveItems)for(a=0;a<e.length;a++)b=e[a],l(b,c)||d.push(b);return d},t.prototype.getItemWidth=function(){var a=this.itemWidth,b=k(this.container)-2*this.outerOffset,c=this.flexibleWidth;if("function"==typeof a&&(a=this.itemWidth()),this.items.length>0&&(void 0===a||0===a&&!this.flexibleWidth)?a=k(this.items[0]):"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(this.itemWidth)/100*b),c){"function"==typeof c&&(c=c()),"string"==typeof c&&c.indexOf("%")>=0&&(c=parseFloat(c)/100*b);var d=b+this.offset,e=Math.floor(.5+d/(c+this.offset)),f=Math.floor(d/(a+this.offset)),g=Math.max(e,f),h=Math.min(c,Math.floor((b-(g-1)*this.offset)/g));a=Math.max(a,h)}return a},t.prototype.layout=function(a,b){if(!i(this.container)){var c,d=this.getItemWidth(),e=d+this.offset,f=k(this.container),g=f-2*this.outerOffset,h=Math.floor((g+this.offset)/e),j=0,l=0,m=this.getActiveItems(),n=m.length,o=n;if(this.itemHeightsDirty||!this.itemHeightsInitialized){for(;o--;)c=m[o],this.flexibleWidth&&(c.style.width=d+"px"),p(c,"height",c.offsetHeight);this.itemHeightsDirty=!1,this.itemHeightsInitialized=!0}h=Math.max(1,Math.min(h,n)),j=this.outerOffset,"center"===this.align&&(j+=Math.floor(.5+(g-(h*e-this.offset))>>1)),this.direction=this.direction||("right"===this.align?"right":"left"),l=a||null===this.columns||this.columns.length!==h||this.activeItemCount!==n?this.layoutFull(e,h,j):this.layoutColumns(e,j),this.activeItemCount=n,this.container.style.height=l+"px",this.fillEmptySpace&&this.refreshPlaceholders(e,j),void 0!==this.onLayoutChanged&&"function"==typeof this.onLayoutChanged&&this.onLayoutChanged(),"function"==typeof b&&b()}},t.prototype.sortElements=function(a){return"function"==typeof this.comparator?a.sort(this.comparator):a},t.prototype.layoutFull=function(a,b,c){var d,f,g,h,i=0,j=0,k=null,l=null,m=[],n=[],q="left"===this.align;for(this.columns=[],f=this.sortElements(this.getActiveItems()),g=f.length;m.length<b;)m.push(this.outerOffset),this.columns.push([]);for(;g>j;){for(d=f[j],k=m[0],l=0,i=0;b>i;i++)m[i]<k&&(k=m[i],l=i);p(d,"top",k),h=c,(l>0||!q)&&(h+=l*a),n[j]={el:d,css:{position:"absolute",top:k+"px"}},n[j].css[this.direction]=h+"px",m[l]+=o(d,"height",!0)+this.verticalOffset,this.columns[l].push(d),j++}return e(n),Math.max.apply(Math,m)},t.prototype.layoutColumns=function(a,b){for(var c,d,f,g,h=[],i=[],j=0,k=0,l=this.columns.length;l--;){for(c=this.outerOffset,h.push(c),d=this.columns[l],g=l*a+b,j=0;j<d.length;j++,k++)f=d[j],p(f,"top",c),i[k]={el:f,css:{top:c+"px"}},i[k].css[this.direction]=g+"px",c+=o(f,"height",!0)+this.verticalOffset;h[l]=c}return e(i),Math.max.apply(Math,h)},t.prototype.clear=function(){clearTimeout(this.resizeTimer);for(var b=this.placeholders.length;b--;)this.container.removeChild(this.placeholders[b]);g(a,"resize",this.onResize),g(this.container,"refreshWookmark",this.onRefresh)},void 0!==a.jQuery&&(jQuery.fn.wookmark=function(a){var b=this.length;if(void 0!==a&&a.container instanceof jQuery&&(a.container=a.container[0]),b>1)for(;b--;)this[b].wookmark(a);else 1===b&&(this.wookmarkInstance?this.wookmarkInstance.update(a||{}):this.wookmarkInstance=new t(this[0],a||{}));return this}),a.Wookmark=t,t});
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if((I()||V())||(P()||aX())){if(I()||V()){bc=aF(bd,bb,l)}if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.preventDefaultEvents===false){return}if(av.allowPageScroll===m){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
var $win,
$header;
function labelList(){
$('li:first-child, .item:first-child').addClass('first');
$('li:last-child, .item:last-child').addClass('last');
}
function featuredStories(e){
if($(e).length > 0){
$(e).find('.slide').each(function(){
var slideLink=$(this).find('.slide-content').find('a').attr('href'),
slideWidth=$(this).width(),
slideWidthImg=$(this).find('.slide-img').width();
$(this).attr('onclick','window.location.href="'+slideLink+'"');
if(slideWidthImg > slideWidth){
var slideOffset=0 - (slideWidthImg / 2);
$(this).find('.slide-img').css({
'left':'50%',
'margin-left':slideOffset
});
}});
if($win.width() <=767){
$(e).find('.slide:first-child').addClass('active');
$(e).find('.slide-nav li:first-child').addClass('active');
var headerHeight=$('header').height(),
windowHeight=$win.height(),
windowWidth=$win.width(),
slideHeight=windowHeight - headerHeight,
slideLeft=0,
slideWidthTotal=0,
count=0;
$(e).find('.slides-container').css({
'height':slideHeight
});
$(e).find('.slide').each(function(){
slideLeft=count * windowWidth;
$(this).css({
'width':windowWidth,
'left':slideLeft
});
count++;
if($(this).is(':last-child')){
slideWidthTotal=count * windowWidth;
$(e).find('.slides-container').css({
'width':slideWidthTotal
});
}});
var IMG_WIDTH=windowWidth,
currentImg=0,
maxImages=3,
speed=500,
imgs,
swipeOptions={
triggerOnTouchEnd: true,
swipeStatus: swipeStatus,
allowPageScroll: "vertical",
threshold: 75
};
$(function (){
imgs=$(".slides-container");
imgs.swipe(swipeOptions);
});
function swipeStatus(event, phase, direction, distance){
var activeNav=$('.slide-nav li.active'),
prevNav=activeNav.prev(),
nextNav=activeNav.next();
if(phase=="move"&&(direction=="left"||direction=="right")){
var duration=0;
if(direction=="left"){
scrollImages((IMG_WIDTH * currentImg) + distance, duration);
}else if(direction=="right"){
scrollImages((IMG_WIDTH * currentImg) - distance, duration);
}}else if(phase=="cancel"){
scrollImages(IMG_WIDTH * currentImg, speed);
}else if(phase=="end"){
if(direction=="right"){
previousImage();
if(prevNav.length > 0){
activeNav.removeClass('active');
prevNav.addClass('active');
}}else if(direction=="left"){
nextImage();
if(nextNav.length > 0){
activeNav.removeClass('active');
nextNav.addClass('active');
}}
}}
function previousImage(){
currentImg=Math.max(currentImg - 1, 0);
scrollImages(IMG_WIDTH * currentImg, speed);
}
function nextImage(){
currentImg=Math.min(currentImg + 1, maxImages - 1);
scrollImages(IMG_WIDTH * currentImg, speed);
}
function scrollImages(distance, duration){
imgs.css("transition-duration", (duration / 1000).toFixed(1) + "s");
var value=(distance < 0 ? "":"-") + Math.abs(distance).toString();
imgs.css("transform", "translate(" + value + "px,0)");
}}
}}
function toolkitTips(t){
if($(t).length > 0){
$(t).find('.tip-box').each(function(){
var tipBoxHeight=$(this).outerHeight(),
tipBoxContentHeight=$(this).find('h4').height(),
tipBoxHeightOffset=(tipBoxHeight - tipBoxContentHeight) / 2;
$(this).css({
'padding-top':tipBoxHeightOffset,
'padding-bottom':tipBoxHeightOffset
});
});
}}
function feedAlign(f){
if(($(f).length > 0&&$win.width() > 991)||($(f).length > 0&&$('.feed-search').length > 0&&$win.width() > 767)){
var wookmark=new Wookmark('.feeds-review', {
autoResize: true,
container: $('.feeds-review'),
offset: 30,
outerOffset: 0
});
}}
function feedLoader(f){
if($(f).length > 0&&$win.width() > 767){
$(window).load(function(){
$(f).find('.loader').fadeOut().remove();
});
}else{
$(f).find('.loader').remove();
}}
function navHover(n){
$(n).children('li').each(function(){
if($(this).hasClass('menu-item-has-children')){
$(this).append('<span class="carat"></span>');
}});
}
var initialOffset;
function loadMorePosts(page_id,btn){
var ajaxLocation=window.location.origin+'/wp-admin/admin-ajax.php',
initialOffset=$('.item-review').length,
filterLink,
filterActive;
if(btn.indexOf('filter-link')=='0'){
filterLink=true;
}else{
filterLink=false;
}
if(filterLink==true){
$(document.getElementsByClassName(btn)).parent().parent().children().each(function(){
$(this).removeClass('active');
});
$(document.getElementsByClassName(btn)).parent().addClass('active');
$('.feeds-review').html('<span class="loader"><span class="spinner"></span></span>');
}else{
$(document.getElementsByClassName(btn)).addClass('loading').append('<span class="loader"><span class="spinner"></span></span>');
}
if($('.filter .active').children('a').hasClass('latest')){
filterActive='latest';
}
if($('.filter .active').children('a').hasClass('popular')){
filterActive='popular';
}
if($('.filter .active').children('a').hasClass('rated')){
filterActive='rated';
}
$.ajax({
type: "POST",
url: ajaxLocation,
dataType: 'html',
data: {
action: 'viewMore',
current_offset: initialOffset,
page_id: page_id,
btn: btn,
active_filter: filterActive
},
success: function(data){
if(filterLink==true){
$('.feeds-review').html(data);
}else{
$('.feeds-review').append(data);
$(document.getElementsByClassName(btn)).removeClass('loading').children('.loader').remove();
}
feedAlign('.feeds-review');
initialOffset=initialOffset + 4;
},
error: function(data){
if(filterLink==true){
}else{
$(document.getElementsByClassName(btn)).removeClass('loading').children('.loader').remove();
}
return false;
}});
}
function bootstrapElements(){
$('.tool-tip').tooltip('hide');
}
function mobileLoad(){
if($win.width() <=767){
$('body').addClass('modal-open');
$(window).load(function(){
$('body').removeClass('modal-open').find('.loader-mobile').fadeOut();
});
}else{
$('body').find('.loader-mobile').remove();
}}
function externalLinks(link){
if($(link).length > 0){
$(link).each(function(){
var homeDomain=window.location.hostname.replace('https://','').replace('http://','').split('/');
homeDomain=homeDomain[0],
linkHrefFull=$(this).attr('href'),
disableOutgoing=$(this).attr('data-disable-leaving');
if(typeof linkHrefFull!=='undefined'&&linkHrefFull!==false&&linkHrefFull.length > 0&&disableOutgoing!=='true'&&linkHrefFull.indexOf('mailto') < 0){
var linkHref=linkHrefFull.replace('https://','').replace('http://','');
if(linkHref.indexOf(homeDomain)&&linkHref.indexOf('#')&&linkHref.indexOf('?')){
$(this).click(function(e){
e.preventDefault();
window.open($(this).attr('href'),'_blank');
});
}}
});
}}
jQuery(document).ready(function($){
$win=$(window);
$header=$('header');
labelList();
featuredStories('.featured');
toolkitTips('.toolkit');
navHover('#menu-main');
bootstrapElements();
mobileLoad();
feedLoader('.feeds');
externalLinks('a');
$(window).load(function(){
feedAlign('.feeds-review');
});
if(Function('/*@cc_on return document.documentMode===10@*/')()){
document.documentElement.className+=' ie10 ie';
}
var nav=responsiveNav(".nav-collapse", {
animate: true,
transition: 284,
label: "Menu",
insert: "before",
customToggle: "nav-toggle",
closeOnNavClick: false,
openPos: "relative",
navClass: "nav-collapse",
navActiveClass: "js-nav-active",
jsClass: "js",
init: function(){},
open: function(){},
close: function(){}});
});