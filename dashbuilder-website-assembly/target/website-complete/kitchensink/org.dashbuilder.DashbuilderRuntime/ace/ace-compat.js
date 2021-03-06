define(
  "pilot/index",
  [
    "require",
    "exports",
    "module",
    "pilot/browser_focus",
    "pilot/dom",
    "pilot/event",
    "pilot/event_emitter",
    "pilot/fixoldbrowsers",
    "pilot/keys",
    "pilot/lang",
    "pilot/oop",
    "pilot/useragent",
    "pilot/canon",
  ],
  function (a, b, c) {
    a("pilot/browser_focus"),
      a("pilot/dom"),
      a("pilot/event"),
      a("pilot/event_emitter"),
      a("pilot/fixoldbrowsers"),
      a("pilot/keys"),
      a("pilot/lang"),
      a("pilot/oop"),
      a("pilot/useragent"),
      a("pilot/canon");
  }
),
  define("pilot/browser_focus", ["require", "exports", "module", "ace/lib/browser_focus"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/browser_focus' is deprecated. Use 'ace/lib/browser_focus' instead"),
      (c.exports = a("ace/lib/browser_focus"));
  }),
  define("pilot/dom", ["require", "exports", "module", "ace/lib/dom"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/dom' is deprecated. Use 'ace/lib/dom' instead"), (c.exports = a("ace/lib/dom"));
  }),
  define("pilot/event", ["require", "exports", "module", "ace/lib/event"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/event' is deprecated. Use 'ace/lib/event' instead"),
      (c.exports = a("ace/lib/event"));
  }),
  define("pilot/event_emitter", ["require", "exports", "module", "ace/lib/event_emitter"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/event_emitter' is deprecated. Use 'ace/lib/event_emitter' instead"),
      (c.exports = a("ace/lib/event_emitter"));
  }),
  define("pilot/fixoldbrowsers", ["require", "exports", "module", "ace/lib/fixoldbrowsers"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/fixoldbrowsers' is deprecated. Use 'ace/lib/fixoldbrowsers' instead"),
      (c.exports = a("ace/lib/fixoldbrowsers"));
  }),
  define("pilot/keys", ["require", "exports", "module", "ace/lib/keys"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/keys' is deprecated. Use 'ace/lib/keys' instead"), (c.exports = a("ace/lib/keys"));
  }),
  define("pilot/lang", ["require", "exports", "module", "ace/lib/lang"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/lang' is deprecated. Use 'ace/lib/lang' instead"), (c.exports = a("ace/lib/lang"));
  }),
  define("pilot/oop", ["require", "exports", "module", "ace/lib/oop"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/oop' is deprecated. Use 'ace/lib/oop' instead"), (c.exports = a("ace/lib/oop"));
  }),
  define("pilot/useragent", ["require", "exports", "module", "ace/lib/useragent"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/useragent' is deprecated. Use 'ace/lib/useragent' instead"),
      (c.exports = a("ace/lib/useragent"));
  }),
  define("pilot/canon", ["require", "exports", "module"], function (a, b, c) {
    console.warn("DEPRECATED: 'pilot/canon' is deprecated."),
      (b.addCommand = function () {
        console.warn(
          "DEPRECATED: 'canon.addCommand()' is deprecated. Use 'editor.commands.addCommand(command)' instead."
        ),
          console.trace();
      }),
      (b.removeCommand = function () {
        console.warn(
          "DEPRECATED: 'canon.removeCommand()' is deprecated. Use 'editor.commands.removeCommand(command)' instead."
        ),
          console.trace();
      });
  }),
  (function () {
    window.require(["ace/ace"], function (a) {
      window.ace || (window.ace = {});
      for (var b in a) a.hasOwnProperty(b) && (ace[b] = a[b]);
    });
  })();
