/*! jQuery UI - v1.10.3 - 2013-09-19
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.tabs.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function (e, t){
	function i(t, i){
		var s, n, r, o = t.nodeName.toLowerCase();
		return "area" === o ? (s = t.parentNode, n = s.name, t.href && n && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !! r && a(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && a(t)
	}
	function a(t){
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function (){
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var s = 0,
		n = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.3",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function (t){
			return function (i, a){
				return "number" == typeof i ? this.each(function (){
					var t = this;
					setTimeout(function (){
						e(t).focus(), a && a.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function (){
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function (){
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function (){
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function (i){
			if(i !== t) return this.css("zIndex", i);
			if(this.length) for(var a, s, n = e(this[0] ); n.length && n[0] !== document;){
				if(a = n.css("position"), ("absolute" === a || "relative" === a || "fixed" === a) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
				n = n.parent()
			}
			return 0
		},
		uniqueId: function (){
			return this.each(function (){
				this.id || (this.id = "ui-id-" + ++s)
			})
		},
		removeUniqueId: function (){
			return this.each(function (){
				n.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t){
			return function (i){
				return !!e.data(i, t)
			}
		}) : function (t, i, a){
			return !!e.data(t, a[3])
		},
		focusable: function (t){
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function (t){
			var a = e.attr(t, "tabindex"),
				s = isNaN(a);
			return (s || a >= 0) && i(t, !s)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, a){
		function s(t, i, a, s){
			return e.each(n, function (){
				i -= parseFloat(e.css(t, "padding" + this)) || 0, a && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === a ? ["Left", "Right"] : ["Top", "Bottom"],
			r = a.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + a] = function (i){
			return i === t ? o["inner" + a].call(this) : this.each(function (){
				e(this).css(r, s(this, i) + "px")
			})
		}, e.fn["outer" + a] = function (t, i){
			return "number" != typeof t ? o["outer" + a].call(this, t) : this.each(function (){
				e(this).css(r, s(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function (e){
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t){
		return function (i){
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function (){
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e){
				e.preventDefault()
			})
		},
		enableSelection: function (){
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function (t, i, a){
				var s, n = e.ui[t].prototype;
				for(s in a) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([i, a[s]])
			},
			call: function (e, t, i){
				var a, s = e.plugins[t];
				if(s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for(a = 0; s.length > a; a++) e.options[s[a][0]] && s[a][1].apply(e.element, i)
			}
		},
		hasScroll: function (t, i){
			if("hidden" === e(t).css("overflow")) return !1;
			var a = i && "left" === i ? "scrollLeft" : "scrollTop",
				s = !1;
			return t[a] > 0 ? !0 : (t[a] = 1, s = t[a] > 0, t[a] = 0, s)
		}
	})
})(jQuery);
(function (e, t){
	var i = 0,
		s = Array.prototype.slice,
		a = e.cleanData;
	e.cleanData = function (t){
		for(var i, s = 0; null != (i = t[s] ); s++) try {
			e(i).triggerHandler("remove")
		} catch (n){}
		a(t)
	}, e.widget = function (i, s, a){
		var n, r, o, h, l = {},
			u = i.split(".")[0];
		i = i.split(".")[1], n = u + "-" + i, a || (a = s, s = e.Widget), e.expr[":"][n.toLowerCase()] = function (t){
			return !!e.data(t, n)
		}, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function (e, i){
			return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
		}, e.extend(o, r, {
			version: a.version,
			_proto: e.extend({}, a),
			_childConstructors: []
		}), h = new s, h.options = e.widget.extend({}, h.options), e.each(a, function (i, a){
			return e.isFunction(a) ? (l[i] = function (){
				var e = function (){
						return s.prototype[i].apply(this, arguments)
					},
					t = function (e){
						return s.prototype[i].apply(this, e)
					};
				return function (){
					var i, s = this._super,
						n = this._superApply;
					return this._super = e, this._superApply = t, i = a.apply(this, arguments), this._super = s, this._superApply = n, i
				}
			}(), t) : (l[i] = a, t)
		}), o.prototype = e.widget.extend(h, {
			widgetEventPrefix: r ? h.widgetEventPrefix : i
		}, l, {
			constructor: o,
			namespace: u,
			widgetName: i,
			widgetFullName: n
		}), r ? (e.each(r._childConstructors, function (t, i){
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
	}, e.widget.extend = function (i){
		for(var a, n, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++) for(a in r[o]) n = r[o][a], r[o].hasOwnProperty(a) && n !== t && (i[a] = e.isPlainObject(n) ? e.isPlainObject(i[a]) ? e.widget.extend({}, i[a], n) : e.widget.extend({}, n) : n);
		return i
	}, e.widget.bridge = function (i, a){
		var n = a.prototype.widgetFullName || i;
		e.fn[i] = function (r){
			var o = "string" == typeof r,
				h = s.call(arguments, 1),
				l = this;
			return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function (){
				var s, a = e.data(this, n);
				return a ? e.isFunction(a[r]) && "_" !== r.charAt(0) ? (s = a[r].apply(a, h), s !== a && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
			}) : this.each(function (){
				var t = e.data(this, n);
				t ? t.option(r || {})._init() : e.data(this, n, new a(r, this))
			}), l
		}
	}, e.Widget = function (){}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (t, s){
			s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (e){
					e.target === s && this.destroy()
				}
			}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function (){
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function (){
			return this.element
		},
		option: function (i, s){
			var a, n, r, o = i;
			if(0 === arguments.length) return e.widget.extend({}, this.options);
			if("string" == typeof i) if(o = {}, a = i.split("."), i = a.shift(), a.length){
				for(n = o[i] = e.widget.extend({}, this.options[i]), r = 0; a.length - 1 > r; r++) n[a[r]] = n[a[r]] || {}, n = n[a[r]];
				if(i = a.pop(), s === t) return n[i] === t ? null : n[i];
				n[i] = s
			} else {
				if(s === t) return this.options[i] === t ? null : this.options[i];
				o[i] = s
			}
			return this._setOptions(o), this
		},
		_setOptions: function (e){
			var t;
			for(t in e) this._setOption(t, e[t] );
			return this
		},
		_setOption: function (e, t){
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function (){
			return this._setOption("disabled", !1)
		},
		disable: function (){
			return this._setOption("disabled", !0)
		},
		_on: function (i, s, a){
			var n, r = this;
			"boolean" != typeof i && (a = s, s = i, i = !1), a ? (s = n = e(s), this.bindings = this.bindings.add(s)) : (a = s, s = this.element, n = this.widget()), e.each(a, function (a, o){
				function h(){
					return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
				}
				"string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
				var l = a.match(/^(\w+)\s*(.*)$/),
					u = l[1] + r.eventNamespace,
					d = l[2];
				d ? n.delegate(d, u, h) : s.bind(u, h)
			})
		},
		_off: function (e, t){
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function (e, t){
			function i(){
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function (t){
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function (t){
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (t){
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (t){
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function (t){
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (t){
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (t, i, s){
			var a, n, r = this.options[t];
			if(s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for(a in n) a in i || (i[a] = n[a] );
			return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (t, i){
		e.Widget.prototype["_" + t] = function (s, a, n){
			"string" == typeof a && (a = {
				effect: a
			});
			var r, o = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
			a = a || {}, "number" == typeof a && (a = {
				duration: a
			}), r = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), r && e.effects && e.effects.effect[o] ? s[t](a) : o !== t && s[o] ? s[o](a.duration, a.easing, n) : s.queue(function (i){
				e(this)[t](), n && n.call(s[0]), i()
			})
		}
	})
})(jQuery);
(function (e, t){
	function i(){
		return ++a
	}
	function s(e){
		return e.hash.length > 1 && decodeURIComponent(e.href.replace(n, "")) === decodeURIComponent(location.href.replace(n, ""))
	}
	var a = 0,
		n = /#.*$/;
	e.widget("ui.tabs", {
		version: "1.10.3",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function (){
			var t = this,
				i = this.options;
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (t){
				e(this).is(".ui-state-disabled") && t.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function (){
				e(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e){
				return t.tabs.index(e)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function (){
			var i = this.options.active,
				s = this.options.collapsible,
				a = location.hash.substring(1);
			return null === i && (a && this.tabs.each(function (s, n){
				return e(n).attr("aria-controls") === a ? (i = s, !1) : t
			}), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
		},
		_getCreateEventData: function (){
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : e()
			}
		},
		_tabKeydown: function (i){
			var s = e(this.document[0].activeElement).closest("li"),
				a = this.tabs.index(s),
				n = !0;
			if(!this._handlePageNav(i)){
				switch(i.keyCode){
				case e.ui.keyCode.RIGHT:
				case e.ui.keyCode.DOWN:
					a++;
					break;
				case e.ui.keyCode.UP:
				case e.ui.keyCode.LEFT:
					n = !1, a--;
					break;
				case e.ui.keyCode.END:
					a = this.anchors.length - 1;
					break;
				case e.ui.keyCode.HOME:
					a = 0;
					break;
				case e.ui.keyCode.SPACE:
					return i.preventDefault(), clearTimeout(this.activating), this._activate(a), t;
				case e.ui.keyCode.ENTER:
					return i.preventDefault(), clearTimeout(this.activating), this._activate(a === this.options.active ? !1 : a), t;
				default:
					return
				}
				i.preventDefault(), clearTimeout(this.activating), a = this._focusNextTab(a, n), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(a).attr("aria-selected", "true"), this.activating = this._delay(function (){
					this.option("active", a)
				}, this.delay))
			}
		},
		_panelKeydown: function (t){
			this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
		},
		_handlePageNav: function (i){
			return i.altKey && i.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : t
		},
		_findNextTab: function (t, i){
			function s(){
				return t > a && (t = 0), 0 > t && (t = a), t
			}
			for(var a = this.tabs.length - 1; - 1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
			return t
		},
		_focusNextTab: function (e, t){
			return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
		},
		_setOption: function (e, i){
			return "active" === e ? (this._activate(i), t) : "disabled" === e ? (this._setupDisabled(i), t) : (this._super(e, i), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(i), "heightStyle" === e && this._setupHeightStyle(i), t)
		},
		_tabId: function (e){
			return e.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector: function (e){
			return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function (){
			var t = this.options,
				i = this.tablist.children(":has(a[href])");
			t.disabled = e.map(i.filter(".ui-state-disabled"), function (e){
				return i.index(e)
			}), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
		},
		_refresh: function (){
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function (){
			var t = this;
			
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function (){
				return e("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = e(), this.anchors.each(function (i, a){
				var n, r, o, h = e(a).uniqueId().attr("id"),
					l = e(a).closest("li"),
					u = l.attr("aria-controls");
				s(a) ? (n = a.hash, r = t.element.find(t._sanitizeSelector(n))) : (o = t._tabId(l), n = "#" + o, r = t.element.find(n), r.length || (r = t._createPanel(o), r.insertAfter(t.panels[i - 1] || t.tablist)), r.attr("aria-live", "polite")), r.length && (t.panels = t.panels.add(r)), u && l.data("ui-tabs-aria-controls", u), l.attr({
					"aria-controls": n.substring(1),
					"aria-labelledby": h
				}), r.attr("aria-labelledby", h)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function (){
			return this.element.find(".tabs ol,.tabs ul").eq(0)
		},
		_createPanel: function (t){
			return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function (t){
			e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
			for(var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = t
		},
		_setupEvents: function (t){
			var i = {
				click: function (e){
					e.preventDefault()
				}
			};
			t && e.each(t.split(" "), function (e, t){
				i[t] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function (t){
			var i, s = this.element.parent();
			"fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function (){
				var t = e(this),
					s = t.css("position");
				"absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function (){
				i -= e(this).outerHeight(!0)
			}), this.panels.each(function (){
				e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function (){
				i = Math.max(i, e(this).height("").height())
			}).height(i))
		},
		_eventHandler: function (t){
			var i = this.options,
				s = this.active,
				a = e(t.currentTarget),
				n = a.closest("li"),
				r = n[0] === s[0],
				o = r && i.collapsible,
				h = o ? e() : this._getPanelForTab(n),
				l = s.length ? this._getPanelForTab(s) : e(),
				u = {
					oldTab: s,
					oldPanel: l,
					newTab: o ? e() : n,
					newPanel: h
				};
			t.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || r && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = o ? !1 : this.tabs.index(n), this.active = r ? e() : n, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(n), t), this._toggle(t, u))
		},
		_toggle: function (t, i){
			function s(){
				n.running = !1, n._trigger("activate", t, i)
			}
			function a(){
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), r.length && n.options.show ? n._show(r, n.options.show, s) : (r.show(), s())
			}
			var n = this,
				r = i.newPanel,
				o = i.oldPanel;
			this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function (){
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o.hide(), a()), o.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), i.oldTab.attr("aria-selected", "false"), r.length && o.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function (){
				return 0 === e(this).attr("tabIndex")
			}).attr("tabIndex", -1), r.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}), i.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function (t){
			var i, s = this._findActive(t );
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: e.noop
			}))
		},
		_findActive: function (t){
			return t === !1 ? e() : this.tabs.eq(t)
		},
		_getIndex: function (e){
			return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
		},
		_destroy: function (){
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function (){
				e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function (){
				var t = e(this),
					i = t.data("ui-tabs-aria-controls");
				i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function (i){
			var s = this.options.disabled;
			s !== !1 && (i === t ? s = !1 : (i = this._getIndex(i), s = e.isArray(s) ? e.map(s, function (e){
				return e !== i ? e : null
			}) : e.map(this.tabs, function (e, t){
				return t !== i ? t : null
			})), this._setupDisabled(s))
		},
		disable: function (i){
			var s = this.options.disabled;
			if(s !== !0){
				if(i === t) s = !0;
				else {
					if(i = this._getIndex(i), -1 !== e.inArray(i, s)) return;
					s = e.isArray(s) ? e.merge([i], s).sort() : [i]
				}
				this._setupDisabled(s)
			}
		},
		load: function (t, i){
			t = this._getIndex(t );
			var a = this,
				n = this.tabs.eq(t),
				r = n.find(".ui-tabs-anchor"),
				o = this._getPanelForTab(n),
				h = {
					tab: n,
					panel: o
				};
			s(r[0]) || (this.xhr = e.ajax(this._ajaxSettings(r, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.success(function (e){
				setTimeout(function (){
					o.html(e), a._trigger("load", i, h)
				}, 1)
			}).complete(function (e, t){
				setTimeout(function (){
					"abort" === t && a.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === a.xhr && delete a.xhr
				}, 1)
			})))
		},
		_ajaxSettings: function (t, i, s){
			var a = this;
			return {
				url: t.attr("href"),
				beforeSend: function (t, n){
					return a._trigger("beforeLoad", i, e.extend({
						jqXHR: t,
						ajaxSettings: n
					}, s))
				}
			}
		},
		_getPanelForTab: function (t){
			var i = e(t).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
})(jQuery);