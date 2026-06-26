/*
 * Ezra's Games — shared reward system (stars + sticker book).
 * Wholesome by design: you can only ever GAIN stars/stickers — nothing is lost,
 * no countdown timers, no "energy". All games share one localStorage on the
 * same origin. A game includes this with:
 *   <script src="../rewards.js" data-game="galaxia"></script>
 * The home page includes it with:
 *   <script src="rewards.js" data-hub="1"></script>
 */
(function () {
  "use strict";

  var KEY = "ezra_rewards_v1";
  var GAMES = {
    spacewaves: "Space Waves", ballmaster: "Ball Master", starblaster: "Star Blaster",
    balloonpop: "Balloon Pop", colorhole: "Color Hole", slicemaster: "Slice Master",
    galaxia: "Galaxia", numberrun: "Number Run", survivor: "Tower Survivor"
  };

  function blank() { return { stars: 0, plays: {}, totalPlays: 0, bests: {}, stickers: {}, lastDay: null, days: 0 }; }
  function load() {
    try { var d = JSON.parse(localStorage.getItem(KEY)); if (!d || typeof d !== "object") return blank();
      var b = blank(); for (var k in b) if (!(k in d)) d[k] = b[k];
      d.plays = d.plays || {}; d.bests = d.bests || {}; d.stickers = d.stickers || {}; return d;
    } catch (e) { return blank(); }
  }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function today() { var t = new Date(); return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate(); }

  // ---- Sticker catalog: each unlocks once, forever ----
  var STICKERS = [
    { id: "first",    emoji: "🚀", name: "First Flight",   desc: "Play your first game",        test: function (d) { return d.totalPlays >= 1; } },
    { id: "play10",   emoji: "🎮", name: "Getting Good",   desc: "Play 10 games",               test: function (d) { return d.totalPlays >= 10; } },
    { id: "play30",   emoji: "👑", name: "Game Master",    desc: "Play 30 games",               test: function (d) { return d.totalPlays >= 30; } },
    { id: "explorer", emoji: "🧭", name: "Explorer",       desc: "Try all 7 games",             test: function (d) { return Object.keys(GAMES).every(function (g) { return d.plays[g]; }); } },
    { id: "star25",   emoji: "⭐", name: "Star Collector", desc: "Earn 25 stars",               test: function (d) { return d.stars >= 25; } },
    { id: "star50",   emoji: "🌟", name: "Star Champ",     desc: "Earn 50 stars",               test: function (d) { return d.stars >= 50; } },
    { id: "star100",  emoji: "💫", name: "Star Hero",      desc: "Earn 100 stars",              test: function (d) { return d.stars >= 100; } },
    { id: "star250",  emoji: "🏆", name: "Star Legend",    desc: "Earn 250 stars",              test: function (d) { return d.stars >= 250; } },
    { id: "day3",     emoji: "📅", name: "Three Days",     desc: "Play on 3 different days",     test: function (d) { return d.days >= 3; } },
    { id: "day7",     emoji: "🗓️", name: "Week of Play",   desc: "Play on 7 different days",     test: function (d) { return d.days >= 7; } },
    { id: "sw_play",  emoji: "🌊", name: "Wave Rider",     desc: "Play Space Waves",            test: function (d) { return d.plays.spacewaves; } },
    { id: "sw_lvl5",  emoji: "✈️", name: "Sky Pilot",      desc: "Reach Space Waves level 5",   test: function (d) { return (d.bests["spacewaves:level"] || 0) >= 5; } },
    { id: "bm_play",  emoji: "🫧", name: "Bubble Buddy",   desc: "Play Ball Master",            test: function (d) { return d.plays.ballmaster; } },
    { id: "bm_lvl5",  emoji: "🎯", name: "Bubble Pro",     desc: "Reach Ball Master level 5",   test: function (d) { return (d.bests["ballmaster:level"] || 0) >= 5; } },
    { id: "sb_play",  emoji: "🛸", name: "Space Cadet",    desc: "Play Star Blaster",           test: function (d) { return d.plays.starblaster; } },
    { id: "sb_30",    emoji: "🎖️", name: "Sharp Shooter",  desc: "Score 30 in Star Blaster",    test: function (d) { return (d.bests.starblaster || 0) >= 30; } },
    { id: "bp_play",  emoji: "🎈", name: "Pop Star",       desc: "Play Balloon Pop",            test: function (d) { return d.plays.balloonpop; } },
    { id: "bp_30",    emoji: "🎉", name: "Big Popper",     desc: "Score 30 in Balloon Pop",     test: function (d) { return (d.bests.balloonpop || 0) >= 30; } },
    { id: "ch_play",  emoji: "🕳️", name: "Hole Digger",    desc: "Play Color Hole",             test: function (d) { return d.plays.colorhole; } },
    { id: "ch_50",    emoji: "😋", name: "Big Muncher",    desc: "Score 50 in Color Hole",      test: function (d) { return (d.bests.colorhole || 0) >= 50; } },
    { id: "sl_play",  emoji: "🍉", name: "Fruit Friend",   desc: "Play Slice Master",           test: function (d) { return d.plays.slicemaster; } },
    { id: "sl_20",    emoji: "🔪", name: "Combo King",     desc: "Score 20 in Slice Master",    test: function (d) { return (d.bests.slicemaster || 0) >= 20; } },
    { id: "gx_play",  emoji: "👾", name: "Alien Hunter",   desc: "Play Galaxia",                test: function (d) { return d.plays.galaxia; } },
    { id: "gx_w3",    emoji: "💥", name: "Wave Crusher",   desc: "Reach wave 3 in Galaxia",     test: function (d) { return (d.bests["galaxia:level"] || 0) >= 3; } },
    { id: "nr_play",  emoji: "🔢", name: "Number Runner",  desc: "Play Number Run",             test: function (d) { return d.plays.numberrun; } },
    { id: "nr_200",   emoji: "🧮", name: "Math Whiz",      desc: "Reach 200 in Number Run",     test: function (d) { return (d.bests.numberrun || 0) >= 200; } },
    { id: "sv_play",  emoji: "🛡️", name: "Brave Knight",   desc: "Play Tower Survivor",         test: function (d) { return d.plays.survivor; } },
    { id: "sv_60",    emoji: "🏰", name: "Castle Guardian", desc: "Survive 60 sec in Tower Survivor", test: function (d) { return (d.bests.survivor || 0) >= 60; } }
  ];

  // ---- Core: record the end of a run ----
  function report(gameId, stats) {
    var d = load(); stats = stats || {};
    d.plays[gameId] = (d.plays[gameId] || 0) + 1; d.totalPlays += 1;

    var earned = 1; // always at least one for playing
    var newBest = false;
    if (typeof stats.score === "number" && !isNaN(stats.score)) {
      earned += Math.min(5, Math.floor(stats.score / 10));
      if ((d.bests[gameId] || 0) < stats.score) { d.bests[gameId] = stats.score; newBest = true; earned += 3; }
    }
    if (stats.win) earned += Math.max(1, stats.stars || 1);
    if (typeof stats.level === "number" && !isNaN(stats.level)) {
      var lk = gameId + ":level";
      if ((d.bests[lk] || 0) < stats.level) d.bests[lk] = stats.level;
    }
    d.stars += earned;

    var dailyStar = false;
    var t = today();
    if (d.lastDay !== t) { d.lastDay = t; d.days = (d.days || 0) + 1; d.stars += 2; dailyStar = true; }

    var newly = [];
    for (var i = 0; i < STICKERS.length; i++) {
      var s = STICKERS[i];
      if (!d.stickers[s.id] && s.test(d)) { d.stickers[s.id] = t; newly.push(s); }
    }
    save(d);
    popup({ earned: earned, newBest: newBest, dailyStar: dailyStar, newly: newly, total: d.stars });
    return { earned: earned, newly: newly };
  }

  // ---- Celebratory popup (short, non-blocking) ----
  var styled = false;
  function injectStyle() {
    if (styled) return; styled = true;
    var css = document.createElement("style");
    css.textContent =
      "@keyframes ezrPop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.06)}100%{transform:scale(1);opacity:1}}" +
      "@keyframes ezrFall{0%{transform:translateY(-20px) rotate(0);opacity:1}100%{transform:translateY(80px) rotate(220deg);opacity:0}}" +
      ".ezr-wrap{position:fixed;left:0;right:0;top:18px;z-index:99999;display:flex;justify-content:center;pointer-events:none;font-family:'Trebuchet MS',system-ui,sans-serif}" +
      ".ezr-card{pointer-events:auto;background:linear-gradient(160deg,#fff7df,#ffe6a8);color:#5a3c00;border-radius:20px;padding:14px 20px;min-width:230px;max-width:90vw;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.4);animation:ezrPop .35s ease both;border:3px solid #ffd166}" +
      ".ezr-star{font-size:30px;font-weight:bold;letter-spacing:1px}" +
      ".ezr-sub{font-size:14px;opacity:.85;margin-top:2px}" +
      ".ezr-stk{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:8px}" +
      ".ezr-stk div{background:#fff;border-radius:14px;padding:6px 10px;font-size:13px;font-weight:bold;color:#7a5200;box-shadow:0 3px 0 #e0b94a}" +
      ".ezr-stk .e{font-size:22px;display:block}" +
      ".ezr-conf{position:absolute;top:0;font-size:20px;animation:ezrFall 1.1s ease-in forwards}";
    document.head.appendChild(css);
  }

  function popup(info) {
    try {
      injectStyle();
      var wrap = document.createElement("div"); wrap.className = "ezr-wrap";
      var card = document.createElement("div"); card.className = "ezr-card";
      var line = "+" + info.earned + " ⭐";
      if (info.newBest) line += "  ·  New Best! 🏅";
      var html = '<div class="ezr-star">' + line + '</div>';
      var sub = info.dailyStar ? "Daily star! Total " + info.total + " ⭐" : "Total " + info.total + " ⭐";
      html += '<div class="ezr-sub">' + sub + '</div>';
      if (info.newly && info.newly.length) {
        html += '<div class="ezr-sub" style="margin-top:6px;color:#a86b00"><b>New sticker' + (info.newly.length > 1 ? "s" : "") + "!</b></div>";
        html += '<div class="ezr-stk">';
        info.newly.forEach(function (s) { html += '<div><span class="e">' + s.emoji + "</span>" + s.name + "</div>"; });
        html += "</div>";
      }
      card.innerHTML = html;
      // confetti
      for (var i = 0; i < 10; i++) {
        var c = document.createElement("span"); c.className = "ezr-conf";
        c.textContent = ["⭐", "🎉", "✨", "🌟"][i % 4];
        c.style.left = (8 + Math.random() * 84) + "%";
        c.style.animationDelay = (Math.random() * 0.3) + "s";
        card.appendChild(c);
      }
      wrap.appendChild(card);
      document.body.appendChild(wrap);
      var dismiss = function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); };
      card.addEventListener("pointerdown", dismiss);
      setTimeout(function () { card.style.transition = "opacity .4s"; card.style.opacity = "0"; setTimeout(dismiss, 400); }, info.newly && info.newly.length ? 4200 : 2600);
    } catch (e) {}
  }

  // ---- Auto-wire a game page by watching its end-of-run overlays ----
  function num(id) { var el = document.getElementById(id); return el ? (parseInt((el.textContent || "").replace(/[^0-9-]/g, ""), 10) || 0) : 0; }
  function starCount(id) { var el = document.getElementById(id); if (!el) return 1; var m = (el.textContent || "").match(/⭐/g); return m ? m.length : 1; }

  var PAGES = {
    spacewaves: [ { id: "winScreen", get: function () { return { win: true, level: num("hudLevel"), stars: starCount("winStars") }; } } ],
    ballmaster: [ { id: "winScreen", get: function () { return { win: true, level: num("hudLevel"), stars: starCount("winStars") }; } } ],
    starblaster:[ { id: "overScreen", get: function () { return { score: num("finalScore") }; } } ],
    balloonpop: [ { id: "overScreen", get: function () { return { score: num("finalScore") }; } } ],
    colorhole:  [ { id: "overScreen", get: function () { return { score: num("finalScore") }; } } ],
    slicemaster:[ { id: "overScreen", get: function () { return { score: num("finalScore") }; } } ],
    galaxia:    [ { id: "overScreen", get: function () { return { score: num("finalScore"), level: num("finalWave") }; } } ],
    numberrun:  [ { id: "overScreen", get: function () { return { score: num("finalScore") }; } } ],
    survivor:   [ { id: "overScreen", get: function () { return { score: num("finalScore"), level: num("finalLevel") }; } } ]
  };

  function wireGame(gameId) {
    var defs = PAGES[gameId]; if (!defs) return;
    function setup() {
      defs.forEach(function (def) {
        var el = document.getElementById(def.id); if (!el) return;
        var wasHidden = el.classList.contains("hidden");
        var obs = new MutationObserver(function () {
          var hidden = el.classList.contains("hidden");
          if (wasHidden && !hidden) { try { report(gameId, def.get()); } catch (e) {} }
          wasHidden = hidden;
        });
        obs.observe(el, { attributes: true, attributeFilter: ["class"] });
      });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup);
    else setup();
  }

  // ---- Public API (used by the home page shelf) ----
  var Rewards = {
    data: load,
    games: GAMES,
    stickers: STICKERS,
    report: report,
    summary: function () {
      var d = load(); var unlocked = 0;
      STICKERS.forEach(function (s) { if (d.stickers[s.id]) unlocked++; });
      return { stars: d.stars, plays: d.totalPlays, days: d.days || 0, unlocked: unlocked, total: STICKERS.length, bests: d.bests, d: d };
    },
    shelfHTML: function () {
      var d = load();
      var html = '<div class="rw-top"><div class="rw-stars">' + d.stars + ' ⭐</div>' +
        '<div class="rw-meta">' + (d.totalPlays || 0) + ' games played · ' + (d.days || 0) + ' day' + ((d.days || 0) === 1 ? "" : "s") + '</div></div>';
      var unlocked = 0; STICKERS.forEach(function (s) { if (d.stickers[s.id]) unlocked++; });
      html += '<div class="rw-meta" style="margin:4px 0 14px">Stickers: ' + unlocked + ' / ' + STICKERS.length + '</div>';
      html += '<div class="rw-grid">';
      STICKERS.forEach(function (s) {
        var got = !!d.stickers[s.id];
        html += '<div class="rw-stk ' + (got ? "got" : "locked") + '">' +
          '<div class="rw-e">' + (got ? s.emoji : "❓") + '</div>' +
          '<div class="rw-n">' + (got ? s.name : "???") + '</div>' +
          '<div class="rw-d">' + s.desc + '</div></div>';
      });
      html += "</div>";
      return html;
    }
  };
  window.Rewards = Rewards;

  // ---- Bootstrap from the script tag's data attributes ----
  var me = document.currentScript;
  if (me && me.dataset && me.dataset.game) wireGame(me.dataset.game);
})();
