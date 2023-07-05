!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t = t || self).Sweetalert2 = e());
  }) this, function (){
    "use strict";
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    function a(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    function c(t, e, n) {
      return e && o(t.prototype, e), n && o(t, n), t;
    }
    function s() {
      return (s =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }).apply(this, arguments);
    }
    function u(t) {
      return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          })(t);
    }
    function l(t, e) {
      return (l =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        })(t, e);
    }
    function d() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    function i(t, e, n) {
      return (i = d()
        ? Reflect.construct
        : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new (Function.bind.apply(t, o))();
            return n && l(i, n.prototype), i;
          }).apply(null, arguments);
    }
    function p(t, e) {
      return !e || ("object" != typeof e && "function" != typeof e)
        ? (function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return t;
          })(t)
        : e;
    }
    function f(t, e, n) {
      return (f =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, n) {
              var o = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = u(t));
  
                );
                return t;
              })(t, e);
              if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value;
              }
            })(t, e, n || t);
    }
    function m(e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    }
    function h(t) {
      return Array.prototype.slice.call(t);
    }
    function g(t, e) {
      var n;
      (n = '"'
        .concat(
          t,
          '" is deprecated and will be removed in the next major release. Please use "'
        )
        .concat(e, '" instead.')),
        -1 === z.indexOf(n) && (z.push(n), _(n));
    }
    function v(t) {
      return t && "function" == typeof t.toPromise;
    }
    function b(t) {
      return v(t) ? t.toPromise() : Promise.resolve(t);
    }
    function y(t) {
      return t && Promise.resolve(t) === t;
    }
    function w(t) {
      return t instanceof Element || ("object" === r((e = t)) && e.jquery);
      var e;
    }
    function t(t) {
      var e = {};
      for (var n in t) e[t[n]] = "swal2-" + t[n];
      return e;
    }
    function C(t) {
      var e = Q();
      return e ? e.querySelector(t) : null;
    }
    function e(t) {
      return C(".".concat(t));
    }
    function n() {
      var t = $();
      return h(t.querySelectorAll(".".concat(Y.icon)));
    }
    function k() {
      var t = n().filter(function (t) {
        return vt(t);
      });
      return t.length ? t[0] : null;
    }
    function x() {
      return e(Y.title);
    }
    function P() {
      return e(Y.content);
    }
    function A() {
      return e(Y.image);
    }
    function B() {
      return e(Y["progress-steps"]);
    }
    function S() {
      return e(Y["validation-message"]);
    }
    function E() {
      return C(".".concat(Y.actions, " .").concat(Y.confirm));
    }
    function O() {
      return C(".".concat(Y.actions, " .").concat(Y.cancel));
    }
  }
  function T() {
    return e(Y.actions);
  }
  function L() {
    return e(Y.header);
  }
  function j() {
    return e(Y.footer);
  }
  function q() {
    return e(Y["timer-progress-bar"]);
  }
  function I() {
    return e(Y.close);
  }
  function V() {
    var t = h(
        $().querySelectorAll(
          '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
        )
      ).sort(function (t, e) {
        return (
          (t = parseInt(t.getAttribute("tabindex"))),
          (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
        );
      }),
      e = h(
        $().querySelectorAll(
          '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
        )
      ).filter(function (t) {
        return "-1" !== t.getAttribute("tabindex");
      });
    return (function (t) {
      for (var e = [], n = 0; n < t.length; n++)
        -1 === e.indexOf(t[n]) && e.push(t[n]);
      return e;
    })(t.concat(e)).filter(function (t) {
      return vt(t);
    });
  }
  function M() {
    return !J() && !document.body.classList.contains(Y["no-backdrop"]);
  }
  function R() {
    return $().hasAttribute("data-loading");
  }
  function H(e, t) {
    var n;
    (e.textContent = ""),
      t &&
        ((n = new DOMParser().parseFromString(t, "text/html")),
        h(n.querySelector("head").childNodes).forEach(function (t) {
          e.appendChild(t);
        }),
        h(n.querySelector("body").childNodes).forEach(function (t) {
          e.appendChild(t);
        }));
  }
  function D(t, e) {
    if (e) {
      for (var n = e.split(/\s+/), o = 0; o < n.length; o++)
        if (!t.classList.contains(n[o])) return;
      return 1;
    }
  }
  function N(t, e, n) {
    var o, i;
    if (
      ((i = e),
      h((o = t).classList).forEach(function (t) {
        -1 === m(Y).indexOf(t) &&
          -1 === m(Z).indexOf(t) &&
          -1 === m(i.showClass).indexOf(t) &&
          o.classList.remove(t);
      }),
      e.customClass && e.customClass[n])
    ) {
      if ("string" != typeof e.customClass[n] && !e.customClass[n].forEach)
        return _(
          "Invalid type of customClass."
            .concat(n, '! Expected string or iterable object, got "')
            .concat(r(e.customClass[n]), '"')
        );
      mt(t, e.customClass[n]);
    }
  }
  var U = "SweetAlert2:",
    _ = function (t) {
      console.warn("".concat(U, " ").concat(t));
    },
    F = function (t) {
      console.error("".concat(U, " ").concat(t));
    },
    z = [],
    W = function (t) {
      return "function" == typeof t ? t() : t;
    },
    K = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer",
    }),
    Y = t([
      "container",
      "shown",
      "height-auto",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "no-transition",
      "toast",
      "toast-shown",
      "toast-column",
      "show",
      "hide",
      "close",
      "title",
      "header",
      "content",
      "html-container",
      "actions",
      "confirm",
      "cancel",
      "footer",
      "icon",
      "icon-content",
      "image",
      "input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "label",
      "textarea",
      "inputerror",
      "validation-message",
      "progress-steps",
      "active-progress-step",
      "progress-step",
      "progress-step-line",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
      "rtl",
      "timer-progress-bar",
      "timer-progress-bar-container",
      "scrollbar-measure",
      "icon-success",
      "icon-warning",
      "icon-info",
      "icon-question",
      "icon-error",
    ]),
    Z = t(["success", "warning", "info", "question", "error"]),
    Q = function () {
      return document.body.querySelector(".".concat(Y.container));
    },
    $ = function () {
      return e(Y.popup);
    },
    J = function () {
      return document.body.classList.contains(Y["toast-shown"]);
    },
    X = { previousBodyPadding: null };
  function G(t, e) {
    if (!e) return null;
    switch (e) {
      case "select":
      case "textarea":
      case "file":
        return gt(t, Y[e]);
      case "checkbox":
        return t.querySelector(".".concat(Y.checkbox, " input"));
      case "radio":
        return (
          t.querySelector(".".concat(Y.radio, " input:checked")) ||
          t.querySelector(".".concat(Y.radio, " input:first-child"))
        );
      case "range":
        return t.querySelector(".".concat(Y.range, " input"));
      default:
        return gt(t, Y.input);
    }
  }
  function tt(t) {
    var e;
    t.focus(),
      "file" !== t.type && ((e = t.value), (t.value = ""), (t.value = e));
  }
  function et(t, e, n) {
    t &&
      e &&
      ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)),
      e.forEach(function (e) {
        t.forEach
          ? t.forEach(function (t) {
              n ? t.classList.add(e) : t.classList.remove(e);
            })
          : n
          ? t.classList.add(e)
          : t.classList.remove(e);
      }));
    }
    function nt(t, e, n) {
      n || 0 === parseInt(n)
        ? (t.style[e] = "number" == typeof n ? "".concat(n, "px") : n)
        : t.style.removeProperty(e);
    }
    function ot(t, e) {
      var n = 1 < arguments.length && void 0 !== e ? e : "flex";
      (t.style.opacity = ""), (t.style.display = n);
    }
    function it(t) {
      (t.style.opacity = ""), (t.style.display = "none");
    }
    function rt(t, e, n) {
      e ? ot(t, n) : it(t);
    }
    function at(t) {
      return !!(t.scrollHeight > t.clientHeight);
    }
    function ct(t) {
      var e = window.getComputedStyle(t),
        n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
        o = parseFloat(e.getPropertyValue("transition-duration") || "0");
      return 0 < n || 0 < o;
    }
    function st(t, e) {
      var n = 1 < arguments.length && void 0 !== e && e,
        o = q();
      vt(o) &&
        (n && ((o.style.transition = "none"), (o.style.width = "100%")),
        setTimeout(function () {
          (o.style.transition = "width ".concat(t / 1e3, "s linear")),
            (o.style.width = "0%");
        }, 10));
    }
    function ut() {
      return "undefined" == typeof window || "undefined" == typeof document;
    }
    function lt(t) {
      sn.isVisible() && ft !== t.target.value && sn.resetValidationMessage(),
        (ft = t.target.value);
    }
    function dt(t, e) {
      t instanceof HTMLElement
        ? e.appendChild(t)
        : "object" === r(t)
        ? wt(t, e)
        : t && H(e, t);
    }
    function pt(t, e) {
      var n = T(),
        o = E(),
        i = O();
      e.showConfirmButton || e.showCancelButton || it(n),
        N(n, e, "actions"),
        xt(o, "confirm", e),
        xt(i, "cancel", e),
        e.buttonsStyling
          ? (function (t, e, n) {
              mt([t, e], Y.styled),
                n.confirmButtonColor &&
                  (t.style.backgroundColor = n.confirmButtonColor);
              n.cancelButtonColor &&
                (e.style.backgroundColor = n.cancelButtonColor);
              {
                var o;
                R() ||
                  ((o = window
                    .getComputedStyle(t)
                    .getPropertyValue("background-color")),
                  (t.style.borderLeftColor = o),
                  (t.style.borderRightColor = o));
              }
            })(o, i, e)
          : (ht([o, i], Y.styled),
            (o.style.backgroundColor =
              o.style.borderLeftColor =
              o.style.borderRightColor =
                ""),
            (i.style.backgroundColor =
              i.style.borderLeftColor =
              i.style.borderRightColor =
                "")),
        e.reverseButtons && o.parentNode.insertBefore(i, o);
    }
    var ft,
      mt = function (t, e) {
        et(t, e, !0);
      },
      ht = function (t, e) {
        et(t, e, !1);
      },
      gt = function (t, e) {
        for (var n = 0; n < t.childNodes.length; n++)
          if (D(t.childNodes[n], e)) return t.childNodes[n];
      },
      vt = function (t) {
        return !(
          !t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        );
      },
      bt = '\n <div aria-labelledby="'
        .concat(Y.title, '" aria-describedby="')
        .concat(Y.content, '" class="')
        .concat(Y.popup, '" tabindex="-1">\n   <div class="')
        .concat(Y.header, '">\n     <ul class="')
        .concat(Y["progress-steps"], '"></ul>\n     <div class="')
        .concat(Y.icon, " ")
        .concat(Z.error, '"></div>\n     <div class="')
        .concat(Y.icon, " ")
        .concat(Z.question, '"></div>\n     <div class="')
        .concat(Y.icon, " ")
        .concat(Z.warning, '"></div>\n     <div class="')
        .concat(Y.icon, " ")
        .concat(Z.info, '"></div>\n     <div class="')
        .concat(Y.icon, " ")
        .concat(Z.success, '"></div>\n     <img class="')
        .concat(Y.image, '" />\n     <h2 class="')
        .concat(Y.title, '" id="')
        .concat(Y.title, '"></h2>\n     <button type="button" class="')
        .concat(Y.close, '"></button>\n   </div>\n   <div class="')
        .concat(Y.content, '">\n     <div id="')
        .concat(Y.content, '" class="')
        .concat(Y["html-container"], '"></div>\n     <input class="')
        .concat(Y.input, '" />\n     <input type="file" class="')
        .concat(Y.file, '" />\n     <div class="')
        .concat(
          Y.range,
          '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
        )
        .concat(Y.select, '"></select>\n     <div class="')
        .concat(Y.radio, '"></div>\n     <label for="')
        .concat(Y.checkbox, '" class="')
        .concat(
          Y.checkbox,
          '">\n       <input type="checkbox" />\n       <span class="'
        )
        .concat(Y.label, '"></span>\n     </label>\n     <textarea class="')
        .concat(Y.textarea, '"></textarea>\n     <div class="')
        .concat(Y["validation-message"], '" id="')
        .concat(Y["validation-message"], '"></div>\n   </div>\n   <div class="')
        .concat(Y.actions, '">\n     <button type="button" class="')
        .concat(Y.confirm, '">OK</button>\n     <button type="button" class="')
        .concat(Y.cancel, '">Cancel</button>\n   </div>\n   <div class="')
        .concat(Y.footer, '"></div>\n   <div class="')
        .concat(Y["timer-progress-bar-container"], '">\n     <div class="')
        .concat(Y["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
        .replace(/(^|\n)\s*/g, ""),
      yt = function (t) {
        var e,
          n,
          o,
          i,
          r,
          a,
          c,
          s,
          u,
          l,
          d,
          p,
          f,
          m,
          h,
          g =
            !!(e = Q()) &&
            (e.parentNode.removeChild(e),
            ht(
              [document.documentElement, document.body],
              [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]
            ),
            !0);
        ut()
          ? F("SweetAlert2 requires document to initialize")
          : (((n = document.createElement("div")).className = Y.container),
            g && mt(n, Y["no-transition"]),
            H(n, bt),
            (o =
              "string" == typeof (i = t.target)
                ? document.querySelector(i)
                : i).appendChild(n),
            (r = t),
            (a = $()).setAttribute("role", r.toast ? "alert" : "dialog"),
            a.setAttribute("aria-live", r.toast ? "polite" : "assertive"),
            r.toast || a.setAttribute("aria-modal", "true"),
            (c = o),
            "rtl" === window.getComputedStyle(c).direction && mt(Q(), Y.rtl),
            (s = P()),
            (u = gt(s, Y.input)),
            (l = gt(s, Y.file)),
            (d = s.querySelector(".".concat(Y.range, " input"))),
            (p = s.querySelector(".".concat(Y.range, " output"))),
            (f = gt(s, Y.select)),
            (m = s.querySelector(".".concat(Y.checkbox, " input"))),
            (h = gt(s, Y.textarea)),
            (u.oninput = lt),
            (l.onchange = lt),
            (f.onchange = lt),
            (m.onchange = lt),
            (h.oninput = lt),
            (d.oninput = function (t) {
              lt(t), (p.value = d.value);
            }),
            (d.onchange = function (t) {
              lt(t), (d.nextSibling.value = d.value);
            }));
      },
      wt = function (t, e) {
        t.jquery ? Ct(e, t) : H(e, t.toString());
      },
      Ct = function (t, e) {
        if (((t.textContent = ""), 0 in e))
          for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0));
        else t.appendChild(e.cloneNode(!0));
      },
      kt = (function () {
        if (ut()) return !1;
        var t = document.createElement("div"),
          e = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd oanimationend",
            animation: "animationend",
          };
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && void 0 !== t.style[n])
            return e[n];
        return !1;
      })();
    function xt(t, e, n) {
      var o;
      rt(
        t,
        n["show".concat((o = e).charAt(0).toUpperCase() + o.slice(1), "Button")],
        "inline-block"
      ),
        H(t, n["".concat(e, "ButtonText")]),
        t.setAttribute("aria-label", n["".concat(e, "ButtonAriaLabel")]),
        (t.className = Y[e]),
        N(t, n, "".concat(e, "Button")),
        mt(t, n["".concat(e, "ButtonClass")]);
    }
    function Pt(t, e) {
      var n,
        o,
        i,
        r,
        a,
        c,
        s,
        u,
        l = Q();
      l &&
        ((n = l),
        "string" == typeof (o = e.backdrop)
          ? (n.style.background = o)
          : o || mt([document.documentElement, document.body], Y["no-backdrop"]),
        !e.backdrop &&
          e.allowOutsideClick &&
          _(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          ),
        (i = l),
        (r = e.position) in Y
          ? mt(i, Y[r])
          : (_('The "position" parameter is not valid, defaulting to "center"'),
            mt(i, Y.center)),
        (a = l),
        !(c = e.grow) ||
          "string" != typeof c ||
          ((s = "grow-".concat(c)) in Y && mt(a, Y[s])),
        N(l, e, "container"),
        (u = document.body.getAttribute("data-swal2-queue-step")) &&
          (l.setAttribute("data-queue-step", u),
          document.body.removeAttribute("data-swal2-queue-step")));
    }
    function At(t, e) {
      (t.placeholder && !e.inputPlaceholder) ||
        (t.placeholder = e.inputPlaceholder);
    }
    var Bt = {
        promise: new WeakMap(),
        innerParams: new WeakMap(),
        domCache: new WeakMap(),
      },
      St = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
      Et = function (t) {
        if (!jt[t.input])
          return F(
            'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
              t.input,
              '"'
            )
          );
        var e = Lt(t.input),
          n = jt[t.input](e, t);
        ot(n),
          setTimeout(function () {
            tt(n);
          });
      },
      Ot = function (t, e) {
        var n = G(P(), t);
        if (n)
          for (var o in (!(function (t) {
            for (var e = 0; e < t.attributes.length; e++) {
              var n = t.attributes[e].name;
              -1 === ["type", "value", "style"].indexOf(n) &&
                t.removeAttribute(n);
            }
          })(n),
          e))
            ("range" === t && "placeholder" === o) || n.setAttribute(o, e[o]);
      },
      Tt = function (t) {
        var e = Lt(t.input);
        t.customClass && mt(e, t.customClass.input);
      },
      Lt = function (t) {
        var e = Y[t] ? Y[t] : Y.input;
        return gt(P(), e);
      },
      jt = {};
    (jt.text =
      jt.email =
      jt.password =
      jt.number =
      jt.tel =
      jt.url =
        function (t, e) {
          return (
            "string" == typeof e.inputValue || "number" == typeof e.inputValue
              ? (t.value = e.inputValue)
              : y(e.inputValue) ||
                _(
                  'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                    r(e.inputValue),
                    '"'
                  )
                ),
            At(t, e),
            (t.type = e.input),
            t
          );
        }),
      (jt.file = function (t, e) {
        return At(t, e), t;
      }),
      (jt.range = function (t, e) {
        var n = t.querySelector("input"),
          o = t.querySelector("output");
        return (
          (n.value = e.inputValue),
          (n.type = e.input),
          (o.value = e.inputValue),
          t
        );
      }),
      (jt.select = function (t, e) {
        var n;
        return (
          (t.textContent = ""),
          e.inputPlaceholder &&
            ((n = document.createElement("option")),
            H(n, e.inputPlaceholder),
            (n.value = ""),
            (n.disabled = !0),
            (n.selected = !0),
            t.appendChild(n)),
          t
        );
      }),
      (jt.radio = function (t) {
        return (t.textContent = ""), t;
      }),
      (jt.checkbox = function (t, e) {
        var n = G(P(), "checkbox");
        (n.value = 1), (n.id = Y.checkbox), (n.checked = Boolean(e.inputValue));
        var o = t.querySelector("span");
        return H(o, e.inputPlaceholder), t;
      }),
      (jt.textarea = function (e, t) {
        var n, o;
        return (
          (e.value = t.inputValue),
          At(e, t),
          "MutationObserver" in window &&
            ((n = parseInt(window.getComputedStyle($()).width)),
            (o =
              parseInt(window.getComputedStyle($()).paddingLeft) +
              parseInt(window.getComputedStyle($()).paddingRight)),
            new MutationObserver(function () {
              var t = e.offsetWidth + o;
              $().style.width = n < t ? "".concat(t, "px") : null;
            }).observe(e, { attributes: !0, attributeFilter: ["style"] })),
          e
        )