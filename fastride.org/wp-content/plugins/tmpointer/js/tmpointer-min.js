! function(C) {
    "use strict";
    C.fn.tmpointer = function(e) {
        var s, o, i, n, l = C(this),
            r = C.extend({
                id: 1,
                icon: "disable",
                click_anim: "none",
                image: "disable",
                cursor_class: "tm-cursor tm-pointer-simple",
                node_class: "tm-node tm-pointer-simple",
                cursor: "enable",
                node: "enable",
                cursor_velocity: 1,
                node_velocity: .1,
                native_cursor: "disable",
                elements_to_hover: ["a"],
                cursor_class_hover: "tm-expand",
                node_class_hover: "tm-expand",
                hide_mode: "disable",
                hide_timing: 3e3
            }, e);
        "enable" === r.cursor && ("disable" !== r.icon ? C("body").append('<div id="tm-cursor-' + r.id + '" class="' + r.cursor_class + '"><i class="' + r.icon + '"></i></div>') : "disable" !== r.image ? C("body").append('<div id="tm-cursor-' + r.id + '" class="' + r.cursor_class + '"><img src="' + r.image + '" /></div>') : C("body").append('<div id="tm-cursor-' + r.id + '" class="' + r.cursor_class + '"></div>')), "enable" === r.node && C("body").append('<div id="tm-node-' + r.id + '" class="' + r.node_class + '"></div>'), l.is("body") || l.addClass("tm-pointer-wrapper");
        var t, a, c, d, m = !1,
            v = 0,
            b = 0,
            u = 0,
            _ = 0,
            h = 0,
            y = 0,
            p = 0,
            f = 0;

        function w() {
            m = !1
        }
        o = C("body").find("#tm-cursor-" + r.id), s = C("body").find("#tm-node-" + r.id), "enable" === r.cursor && (t = o.width() / 2, a = o.width() / 2), "enable" === r.node && (c = s.width() / 2, d = s.width() / 2), "disable" == r.native_cursor && l.addClass("tm-cursor-none"), "ontouchstart" in window && (o.remove(), s.remove(), l.removeClass("tm-cursor-none")), C("body").on("mousemove", function(e) {
            m = !0, "enable" === r.cursor && (v = e.clientX - t, b = e.clientY - a), "enable" === r.node && (u = e.clientX - c, _ = e.clientY - d), "enable" === r.hide_mode && (clearTimeout(i), i = setTimeout(w, r.hide_timing)), l.is("body") && (C("body").find(".tm-pointer-wrapper").on("mouseenter", function() {
                o.css("visibility", "hidden"), s.css("visibility", "hidden")
            }), C("body").find(".tm-pointer-wrapper").on("mouseleave", function() {
                o.css("visibility", "visible"), s.css("visibility", "visible")
            }))
        }), l.is("body") ? (l.one("mousemove", function() {
            o.css("visibility", "visible"), s.css("visibility", "visible")
        }), C("#wpadminbar").on("mouseenter", function() {
            o.css("visibility", "hidden"), s.css("visibility", "hidden"), o.removeClass(r.cursor_class_hover), s.removeClass(r.node_class_hover)
        }), C("#wpadminbar").on("mouseleave", function() {
            o.css("visibility", "visible"), s.css("visibility", "visible"), o.removeClass(r.cursor_class_hover), s.removeClass(r.node_class_hover)
        })) : (l.on("mouseenter", function() {
            o.css("visibility", "visible"), s.css("visibility", "visible")
        }), l.on("mouseleave", function() {
            o.css("visibility", "hidden"), s.css("visibility", "hidden")
        })), "dark" !== r.click_anim && "light" !== r.click_anim || l.on("mousedown", function(e) {
            var i = e.clientX,
                e = e.clientY;
            C(this).append('<div class="tm-click tm-click-' + r.click_anim + '" style="top:' + e + "px;left:" + i + 'px;"></div>'), setTimeout(function() {
                C(this).find(".tm-click:first-of-type").remove()
            }, 1e3)
        }), "disable" !== r.elements_to_hover && C.isArray(r.elements_to_hover) && C.each(r.elements_to_hover, function(e, i) {
            l.find(i).on("mouseenter", function(e) {
                "enable" === r.cursor && "visible" == o.css("visibility") && "disable" !== r.cursor_class_hover && o.addClass(r.cursor_class_hover), "enable" === r.node && "visible" == s.css("visibility") && "disable" !== r.node_class_hover && s.addClass(r.node_class_hover)
            }), l.find(i).on("mouseleave", function(e) {
                "enable" === r.cursor && "visible" == o.css("visibility") && o.hasClass(r.cursor_class_hover) && o.removeClass(r.cursor_class_hover), "enable" === r.node && "visible" == s.css("visibility") && s.hasClass(r.node_class_hover) && s.removeClass(r.node_class_hover)
            })
        }), n = requestAnimationFrame(function e() {
            !0 === m ? ("enable" === r.cursor && (o.addClass("moving"), h += (v - h) * r.cursor_velocity, y += (b - y) * r.cursor_velocity, o.css({
                left: h + "px",
                top: y + "px"
            })), "enable" === r.node && (s.addClass("moving"), p += (u - p) * r.node_velocity, f += (_ - f) * r.node_velocity, s.css({
                left: p + "px",
                top: f + "px"
            }))) : ("enable" === r.cursor && o.removeClass("moving"), "enable" === r.node && s.removeClass("moving"), cancelAnimationFrame(n)), n = requestAnimationFrame(e)
        }), window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame
    }
}(jQuery);