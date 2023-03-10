(self.webpackChunk = self.webpackChunk || []).push([[7013, 7933], {
    4152: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return v
            }
        });
        var a = n(9894)
          , s = n(3443)
          , i = n(6596)
          , r = e=>{
            let {item: t} = e;
            return '\n  <span style="width: 100px; height: 4px;" class="inline-block bg-gray-mid relative">\n    <span style="width: '.concat(t.completedSteps / t.steps * 100, '%; height: 4px;" class="inline-block bg-blue-mid absolute left top"></span>\n  </span>\n  <p class="text-4 color-gray margin-left-xsmall">\n    ').concat(t.completedSteps == t.steps ? "".concat(i.s.csr.navigation.lists_dropdown.steps_completed()) : "".concat(i.s.csr.navigation.lists_dropdown.step_count({
                currentStep: t.currentStep,
                totalSteps: t.steps
            })), "\n  </p>\n")
        }
          , l = e=>{
            let {item: t} = e;
            return '\n  <input\n    data-name=""\n    name="url"\n    aria-label="'.concat(i.s.csr.navigation.lists_dropdown.url_input_label(), '"\n    placeholder="').concat(i.s.csr.navigation.lists_dropdown.url_input_placeholder(), '"\n    class="input-white width-100 input-large"\n    type="url"\n    value="').concat(t.url, '"\n  />\n  <button\n    style="top: 6px;"\n    data-track-ga=\'{ "category": "Lists", "action": "Url Next", "label": "Navbar"}\'\n    class="btn-blue btn-medium margin-right-xxsmall absolute right ').concat("processing" === t.action ? "processing" : "", '"\n  >\n    ').concat("processing" === t.action ? '\n      <span\n        class="loader-bars loader-white loader-small absolute"\n        style="left: 50%; margin-left: -3px;"\n      ></span>\n      <span class="invisible">'.concat(i.s.csr.navigation.lists_dropdown.next_button(), "</span>") : "\n        ".concat(i.s.csr.navigation.lists_dropdown.next_button(), "\n      "), "\n  </button>\n")
        }
        ;
        const o = e=>({
            web: "globe",
            list: "list",
            video: "video",
            reading: "article",
            course: "course",
            book: "book",
            header: "header",
            degree: "degree",
            document: "paper"
        }[e] || "globe")
          , c = e=>{
            const t = ["web", "video", "reading", "degree", "course", "list", "book", "header", "document"].includes(e) ? e : "web";
            return i.s.csr.lists.item_types[t]()
        }
        ;
        var p = e=>{
            let {isTranscript: t, selectMenuActive: n, item: a, size: s="large", prefix: r=""} = e;
            return '\n  <button\n    data-name="'.concat(r, 'ITEM_TYPE_DROPDOWN"\n    data-detail=\'{ "selectMenuActive": ').concat(!!n, ', "id": "').concat(a.id, '" }\'\n    class="btn-white btn-').concat(s, ' icon-right-small icon-small-right icon-chevron-down-charcoal"\n  >\n    <span class="upper text-3 color-gray-dark margin-right-xsmall">').concat(i.s.csr.navigation.lists_dropdown.item_type_label(), '</span>\n    <span class="text-2 icon-left-xsmall icon-xsmall-left icon-').concat(o(a.type), "-").concat(t ? "gold" : "blue", " color-").concat(t ? "yellow" : "blue", ' weight-semi">').concat(c(a.type), "</span>\n  </button>\n  ").concat(n ? '<ul class="list-no-style bg-white z-top padding-vert-small absolute width-100 border-box left border-all border-gray-light shadow-light" style="top: 51px;">\n    '.concat(["course", "book", "document", "video", "web"].map((e=>'<li>\n        <button\n          data-name="'.concat(r, 'ITEM_TYPE_SELECT"\n          data-detail=\'{ "type": "').concat(e, '", "id": "').concat(a.id, '" }\'\n          class="width-100 row vert-align-middle padding-vert-xxsmall padding-horz-small hover-bg-').concat(t ? "yellow-xlight" : "blue-xlight", '"\n        >\n          <span class="icon-left-small icon-small-left icon-').concat(o(e), '-charcoal text-3">\n            ').concat(c(e), "\n          </span>\n        </button>\n      </li>"))).join(""), "\n  </ul>") : "", "\n")
        }
          , d = n(8858)
          , u = n(681)
          , m = e=>{
            let {available: t, item: n} = e;
            return '\n  <form data-name="NAV_ITEM_SAVE">\n    '.concat(n.error ? '\n      <div\n        style="background-color: #fff2f2; border-color: #FFE5E5;"\n        class="text-2 margin-vert-small radius-small border-all color-red padding-xsmall"\n      >\n        '.concat(n.error, "\n      </div>\n    ") : "", '\n    <div class="').concat("success" == n.action ? "invisible" : "", '">\n      <input type="hidden" name="item_id" value="').concat(n.form.id, '" />\n      <fieldset class="relative">\n        <label class="upper text-4 color-gray absolute top left padding-left-medium padding-top-xsmall">').concat(i.s.csr.navigation.lists_dropdown.list_select_label(), '</label>\n        <select\n          name="list"\n          class="text-left width-100 truncate btn-white btn-large icon-right-small icon-small-right icon-chevron-down-charcoal"\n          style="padding-top: 30px; max-width: 325px;"\n        >\n          ').concat(t.map((e=>"\n            <option\n              ".concat(n.listId == e.id ? "selected" : "", '\n              value=\'{ "id": "').concat(e.id, '", "slug": "').concat(e.slug, "\"}'\n            >\n              ").concat(e.name, "\n            </option>\n          "))).join(""), '\n        </select>\n      </fieldset>\n\n      <div class="row nowrap vert-align-middle margin-vert-small">\n        <fieldset class="fill-space relative" data-template="item-select-type-navbar">\n          ').concat(p({
                item: n.form,
                size: "small",
                prefix: "NAV_"
            }), '\n        </fieldset>\n        <div class="text-3 horz-align-right text-right">\n          <span class="small-down-hidden color-gray inline-block margin-right-xxsmall italic">').concat((0,
            s.en)(n.url).hostname.substring(0, 19), '&hellip;</span>\n          <a rel="noopener nofollow ugc" href="').concat(n.url, '" class="text-3 icon-left-xsmall icon-xsmall-left icon-external-link-blue" target="_blank">\n            ').concat((0,
            u.sprintf)((0,
            d.T)(i.s.csr.lists.view_link()), '<span class="medium-up-hidden">', "</span>"), '\n          </a>\n        </div>\n      </div>\n\n      <fieldset class="fill-space relative margin-vert-small">\n        <label class="text-4 upper color-gray absolute margin-top-xsmall margin-left-small left top">').concat(i.s.csr.lists.title_input_label(), '</label>\n        <input\n          name="itemTitle"\n          type="text"\n          value="').concat(n.form.title || "", '"\n          class="input-medium padding-top-small width-100 input-white" style="height: 60px;"\n        />\n      </fieldset>\n\n      <fieldset class="width-100 relative margin-vert-small">\n        <label class="text-4 upper color-gray absolute margin-top-xsmall margin-left-small left top">').concat(i.s.csr.lists.creator_input_label(), '</label>\n        <input\n          type="text"\n          name="creator"\n          value="').concat(n.form.creator || "", '"\n          class="input-medium padding-top-small width-100 input-white" style="height: 60px;" />\n      </fieldset>\n    </div>\n\n    <div class="row vert-align-middle">\n      ').concat("success" == n.action ? '\n        <button data-name="NAV_ITEM_CANCEL" class="horz-align-right btn-white">+ '.concat(i.s.csr.lists.add_another_item(), "</button>\n        ") : '\n        <button data-name="NAV_ITEM_CANCEL" class="horz-align-right btn-white">'.concat(i.s.csr.lists.cancel(), '</button>\n        <button type="submit" class="btn-blue btn-medium margin-left-xsmall relative ').concat("processing" == n.action ? "processing" : "", '">\n          ').concat("processing" == n.action ? '\n            <span\n              class="loader-bars loader-white loader-small absolute"\n              style="left: 50%; margin-left: -3px;"\n            ></span>\n            <span class="invisible">'.concat(i.s.csr.lists.save(), "</span>") : "\n              ".concat(i.s.csr.lists.save(), "\n            "), "\n        </button>\n      "), "\n    </div>\n  </form>\n  ").concat("success" == n.action ? '\n    <div class="text-center border-box padding-large absolute width-100" style="top: 40px;">\n      <i class="icon-checkmark icon-large"></i>\n      <h6><span class="text-1">'.concat(i.s.csr.lists.added_success(), "</span></h6>\n      ").concat((0,
            u.sprintf)((0,
            d.T)(i.s.csr.lists.go_to_list()), '<a href="/list/' + n.list.slug + '" class="inline-block">', "</a>"), "\n    </div>\n  ") : "", "\n")
        }
          , g = n(8785)
          , b = n(3253);
        const f = ()=>(0,
        a.y0)().lists
          , h = e=>(0,
        a.IW)({
            lists: {
                ...f(),
                ...e
            }
        });
        h({
            available: window.CC.data.lists || [],
            item: {
                completedSteps: 0,
                currentStep: 1,
                steps: 2,
                form: {},
                error: null,
                url: "",
                action: null
            }
        });
        var v = e=>{
            switch (e.name) {
            case "load:NAV_LISTS":
                (0,
                s.px)("[data-name=NAV_ITEM_ADD_URL] input[type=url]").then((e=>[e.focus()]));
                break;
            case "click:NAV_ITEM_TYPE_SELECT":
                {
                    e.originalEvent.preventDefault();
                    const t = f();
                    t.item.form.type = e.detail.type,
                    h(t),
                    (0,
                    a.sY)("item-select-type-navbar", p({
                        prefix: "NAV_",
                        size: "small",
                        item: f().item.form,
                        selectMenuActive: !1
                    }));
                    break
                }
            case "click:NAV_ITEM_TYPE_DROPDOWN":
                e.originalEvent.preventDefault(),
                (0,
                a.sY)("item-select-type-navbar", p({
                    prefix: "NAV_",
                    size: "small",
                    item: f().item.form,
                    selectMenuActive: !e.detail.selectMenuActive
                }));
                break;
            case "click:NAV_ITEM_CANCEL":
                h({
                    item: {
                        completedSteps: 0,
                        currentStep: 1,
                        steps: 2,
                        url: "",
                        form: {},
                        action: null,
                        error: null
                    }
                }),
                (0,
                a.sY)("nav-item-steps", r(f())),
                (0,
                a.sY)("nav-item-form", (e=>'\n  <div class="row nowrap vert-align-top">\n    <span>\n      <span class="bg-yellow-mid weight-semi upper text-4 color-white padding-horz-xxsmall">'.concat(i.s.csr.global.label_new(), '</span>\n    </span>\n    <p class="text-3 padding-left-xsmall line-tight">').concat(i.s.csr.navigation.lists_dropdown.external_resources_copy(), '</p>\n  </div>\n  <form data-template="nav-item-url-form" data-name="NAV_ITEM_ADD_URL" class="width-100 border-box relative margin-top-small">\n    ').concat(l(e), "\n  </form>\n"))(f()));
                break;
            case "submit:NAV_ITEM_ADD_URL":
                {
                    e.originalEvent.preventDefault();
                    const t = new FormData(e.originalEvent.target);
                    h({
                        item: {
                            ...f().item,
                            action: "processing",
                            url: t.get("url")
                        }
                    }),
                    (0,
                    a.sY)("nav-item-steps", r(f())),
                    (0,
                    a.sY)("nav-item-url-form", l(f())),
                    (0,
                    g.Z)("LISTS/METADATA_GET", {
                        data: {
                            url: t.get("url")
                        },
                        parameters: {
                            context: "navbar"
                        }
                    });
                    break
                }
            case "submit:NAV_ITEM_SAVE":
                {
                    e.originalEvent.preventDefault();
                    const t = new FormData(e.originalEvent.target)
                      , n = JSON.parse(t.get("list"));
                    h({
                        item: {
                            ...f().item,
                            error: null,
                            action: "processing",
                            list: n,
                            listId: n.id,
                            context: "navbar",
                            form: {
                                ...f().item.form,
                                creator: (0,
                                s.ox)(t.get("creator")),
                                title: (0,
                                s.ox)(t.get("itemTitle"))
                            }
                        }
                    }),
                    (0,
                    a.sY)("nav-item-form", m(f())),
                    (0,
                    g.Z)("LIST_ITEMS/CREATE_ITEM", {
                        parameters: {
                            listId: n.id,
                            context: "navbar"
                        },
                        data: (0,
                        b.default)(f().item.form)
                    });
                    break
                }
            case "request:LISTS/METADATA_GET_ERROR":
            case "request:LISTS/METADATA_GET_SUCCESS":
                {
                    if ("navbar" !== e.detail.originalParameters.context)
                        return;
                    const t = e.detail.json
                      , n = f().item.url || null;
                    h({
                        item: {
                            ...f().item,
                            action: null,
                            currentStep: 2,
                            completedSteps: 1,
                            form: {
                                ...e.name.match(/ERROR/) ? {
                                    type: "web",
                                    platform: n ? (0,
                                    s.en)(n).hostname.replace(/www\./, "") : "",
                                    url: n
                                } : t
                            }
                        }
                    }),
                    (0,
                    a.sY)("nav-item-steps", r(f())),
                    (0,
                    a.sY)("nav-item-form", m(f()));
                    break
                }
            case "request:LIST_ITEMS/CREATE_ITEM_SUCCESS":
                if ("navbar" !== e.detail.originalParameters.context)
                    return;
                201 === e.detail.status ? (h({
                    item: {
                        ...f().item,
                        error: null,
                        action: "success",
                        currentStep: 2,
                        completedSteps: 2
                    }
                }),
                (0,
                a.sY)("nav-item-steps", r(f())),
                (0,
                a.sY)("nav-item-form", m(f()))) : (h({
                    item: {
                        ...f().item,
                        error: "Our apologies. Your item was not saved due to an issue on our end. Please try again. If the problem persists please contact us.",
                        action: null
                    }
                }),
                (0,
                a.sY)("nav-item-form", m(f())))
            }
        }
    },
    3253: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = (e,t)=>{
            const n = {};
            if (n.type = e.type,
            e.isNew && Array.isArray(t)) {
                const a = function(e, t) {
                    if (1 === e.length)
                        return null;
                    const n = e.indexOf(t);
                    return 0 === n ? {
                        position: "before",
                        sibling: e[1]
                    } : {
                        position: "after",
                        sibling: e[n - 1]
                    }
                }(t, e.id);
                null !== a && (n.position = a.position,
                n.sibling = a.sibling)
            }
            e.metadata && e.metadata.user && e.metadata.user.completedStartDate && (n.completedStartDate = e.metadata.user.completedStartDate),
            e.metadata && e.metadata.user && e.metadata.user.completedEndDate && (n.completedEndDate = e.metadata.user.completedEndDate);
            let a = ["title", "url", "creator", "platform"];
            return "list" === e.type && (a = []),
            n.values = Object.keys(e).filter((e=>a.includes(e))).reduce(((t,n)=>(t[n] = e[n],
            t)), {}),
            n
        }
    },
    681: function(e, t, n) {
        var a;
        !function() {
            "use strict";
            var s = {
                not_string: /[^s]/,
                not_bool: /[^t]/,
                not_type: /[^T]/,
                not_primitive: /[^v]/,
                number: /[diefg]/,
                numeric_arg: /[bcdiefguxX]/,
                json: /[j]/,
                not_json: /[^j]/,
                text: /^[^\x25]+/,
                modulo: /^\x25{2}/,
                placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                key: /^([a-z_][a-z_\d]*)/i,
                key_access: /^\.([a-z_][a-z_\d]*)/i,
                index_access: /^\[(\d+)\]/,
                sign: /^[+-]/
            };
            function i(e) {
                return l(c(e), arguments)
            }
            function r(e, t) {
                return i.apply(null, [e].concat(t || []))
            }
            function l(e, t) {
                var n, a, r, l, o, c, p, d, u, m = 1, g = e.length, b = "";
                for (a = 0; a < g; a++)
                    if ("string" == typeof e[a])
                        b += e[a];
                    else if ("object" == typeof e[a]) {
                        if ((l = e[a]).keys)
                            for (n = t[m],
                            r = 0; r < l.keys.length; r++) {
                                if (null == n)
                                    throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"', l.keys[r], l.keys[r - 1]));
                                n = n[l.keys[r]]
                            }
                        else
                            n = l.param_no ? t[l.param_no] : t[m++];
                        if (s.not_type.test(l.type) && s.not_primitive.test(l.type) && n instanceof Function && (n = n()),
                        s.numeric_arg.test(l.type) && "number" != typeof n && isNaN(n))
                            throw new TypeError(i("[sprintf] expecting number but found %T", n));
                        switch (s.number.test(l.type) && (d = n >= 0),
                        l.type) {
                        case "b":
                            n = parseInt(n, 10).toString(2);
                            break;
                        case "c":
                            n = String.fromCharCode(parseInt(n, 10));
                            break;
                        case "d":
                        case "i":
                            n = parseInt(n, 10);
                            break;
                        case "j":
                            n = JSON.stringify(n, null, l.width ? parseInt(l.width) : 0);
                            break;
                        case "e":
                            n = l.precision ? parseFloat(n).toExponential(l.precision) : parseFloat(n).toExponential();
                            break;
                        case "f":
                            n = l.precision ? parseFloat(n).toFixed(l.precision) : parseFloat(n);
                            break;
                        case "g":
                            n = l.precision ? String(Number(n.toPrecision(l.precision))) : parseFloat(n);
                            break;
                        case "o":
                            n = (parseInt(n, 10) >>> 0).toString(8);
                            break;
                        case "s":
                            n = String(n),
                            n = l.precision ? n.substring(0, l.precision) : n;
                            break;
                        case "t":
                            n = String(!!n),
                            n = l.precision ? n.substring(0, l.precision) : n;
                            break;
                        case "T":
                            n = Object.prototype.toString.call(n).slice(8, -1).toLowerCase(),
                            n = l.precision ? n.substring(0, l.precision) : n;
                            break;
                        case "u":
                            n = parseInt(n, 10) >>> 0;
                            break;
                        case "v":
                            n = n.valueOf(),
                            n = l.precision ? n.substring(0, l.precision) : n;
                            break;
                        case "x":
                            n = (parseInt(n, 10) >>> 0).toString(16);
                            break;
                        case "X":
                            n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase()
                        }
                        s.json.test(l.type) ? b += n : (!s.number.test(l.type) || d && !l.sign ? u = "" : (u = d ? "+" : "-",
                        n = n.toString().replace(s.sign, "")),
                        c = l.pad_char ? "0" === l.pad_char ? "0" : l.pad_char.charAt(1) : " ",
                        p = l.width - (u + n).length,
                        o = l.width && p > 0 ? c.repeat(p) : "",
                        b += l.align ? u + n + o : "0" === c ? u + o + n : o + u + n)
                    }
                return b
            }
            var o = Object.create(null);
            function c(e) {
                if (o[e])
                    return o[e];
                for (var t, n = e, a = [], i = 0; n; ) {
                    if (null !== (t = s.text.exec(n)))
                        a.push(t[0]);
                    else if (null !== (t = s.modulo.exec(n)))
                        a.push("%");
                    else {
                        if (null === (t = s.placeholder.exec(n)))
                            throw new SyntaxError("[sprintf] unexpected placeholder");
                        if (t[2]) {
                            i |= 1;
                            var r = []
                              , l = t[2]
                              , c = [];
                            if (null === (c = s.key.exec(l)))
                                throw new SyntaxError("[sprintf] failed to parse named argument key");
                            for (r.push(c[1]); "" !== (l = l.substring(c[0].length)); )
                                if (null !== (c = s.key_access.exec(l)))
                                    r.push(c[1]);
                                else {
                                    if (null === (c = s.index_access.exec(l)))
                                        throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    r.push(c[1])
                                }
                            t[2] = r
                        } else
                            i |= 2;
                        if (3 === i)
                            throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                        a.push({
                            placeholder: t[0],
                            param_no: t[1],
                            keys: t[2],
                            sign: t[3],
                            pad_char: t[4],
                            align: t[5],
                            width: t[6],
                            precision: t[7],
                            type: t[8]
                        })
                    }
                    n = n.substring(t[0].length)
                }
                return o[e] = a
            }
            t.sprintf = i,
            t.vsprintf = r,
            "undefined" != typeof window && (window.sprintf = i,
            window.vsprintf = r,
            void 0 === (a = function() {
                return {
                    sprintf: i,
                    vsprintf: r
                }
            }
            .call(t, n, t, e)) || (e.exports = a))
        }()
    },
    8858: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return s
            }
        });
        const a = e=>e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        function s(e, ...t) {
            if ("string" == typeof e)
                return a(e);
            let n = e[0];
            for (const [s,i] of t.entries())
                n = n + a(String(i)) + e[s + 1];
            return n
        }
    }
}]);
