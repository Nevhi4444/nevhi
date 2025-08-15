function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5g7MIukI00D":
        Script1();
        break;
      case "6KOCGxj1JYH":
        Script2();
        break;
      case "6AFSfIUdoPS":
        Script3();
        break;
      case "6hmIShvrsvg":
        Script4();
        break;
      case "6R2glzYzKaG":
        Script5();
        break;
      case "5Y0Qbijr5d7":
        Script6();
        break;
      case "6kvZVjB8C4C":
        Script7();
        break;
      case "694ByK9fKTB":
        Script8();
        break;
      case "69MXMLkuYCo":
        Script9();
        break;
      case "5evdjxbOVZq":
        Script10();
        break;
      case "5cvxiKEL1w3":
        Script11();
        break;
      case "6ETsflWZOjo":
        Script12();
        break;
      case "6RCBaZ9nJhO":
        Script13();
        break;
      case "5kezOLlaTPm":
        Script14();
        break;
      case "5h7ViuGsCvR":
        Script15();
        break;
      case "6Y0XIZzXpNH":
        Script16();
        break;
      case "6IEW4Ujv3h2":
        Script17();
        break;
      case "5v22WhjuIi9":
        Script18();
        break;
      case "5udOSjOChhe":
        Script19();
        break;
      case "6IJzCCm9Wt4":
        Script20();
        break;
      case "6hV4FpD8c9Y":
        Script21();
        break;
      case "6G1P1wRhVWE":
        Script22();
        break;
      case "6mQuWBQBxK7":
        Script23();
        break;
      case "5b003yB9NWr":
        Script24();
        break;
      case "6Py3czClLEj":
        Script25();
        break;
      case "5kUwy5e8v7a":
        Script26();
        break;
      case "6o2cD0FKB8k":
        Script27();
        break;
      case "6q9puctIajS":
        Script28();
        break;
      case "5lbBbAf61Xl":
        Script29();
        break;
      case "6co9KFmw3vF":
        Script30();
        break;
      case "69ZBVQp6qZS":
        Script31();
        break;
      case "6AR7hssW3ZZ":
        Script32();
        break;
      case "5qaUDUS6x4u":
        Script33();
        break;
      case "6bWfu5qFfPa":
        Script34();
        break;
      case "5lRhFDnUd8U":
        Script35();
        break;
      case "6mf9iLzjMbt":
        Script36();
        break;
      case "6Op1u83CtnZ":
        Script37();
        break;
      case "63pQFExZqz0":
        Script38();
        break;
      case "5ncG3FsGpde":
        Script39();
        break;
      case "6P1JCQqpECp":
        Script40();
        break;
      case "5kwXcfRBzPB":
        Script41();
        break;
      case "5xAK4M5iANw":
        Script42();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6LGYknsEJW4');
const duration = 750;
const easing = 'ease-out';
const id = '5Xf4rG24NAs';
const pulseAmount = 0.07;
const delay = 30656;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5fNTEdrQCQi');
const duration = 750;
const easing = 'ease-out';
const id = '68uUpqYI2Qx';
const pulseAmount = 0.07;
const delay = 31812;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6aoJbpxkqjY');
const duration = 750;
const easing = 'ease-out';
const id = '6UWbvVJIzzr';
const pulseAmount = 0.07;
const delay = 32781;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5kzSQOtGvZS');
const duration = 750;
const easing = 'ease-out';
const id = '5vx1oOjRidv';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6IUNyYuRmGQ');
const duration = 750;
const easing = 'ease-out';
const id = '5s4FO8HjCYB';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6IUNyYuRmGQ');
const duration = 750;
const easing = 'ease-out';
const id = '6pjfs0p5f4P';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6IUNyYuRmGQ');
const duration = 750;
const easing = 'ease-out';
const id = '5sutkSRiVZo';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6IUNyYuRmGQ');
const duration = 750;
const easing = 'ease-out';
const id = '5sutkSRiVZo_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6WTqyj8aPtH');
const duration = 750;
const easing = 'ease-out';
const id = '5leKyZ8aqO9';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('6WTqyj8aPtH');
const duration = 750;
const easing = 'ease-out';
const id = '6r1Xcyg6c0r';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6WTqyj8aPtH');
const duration = 750;
const easing = 'ease-out';
const id = '6fO3Wm2Vzmv';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('6WTqyj8aPtH');
const duration = 750;
const easing = 'ease-out';
const id = '6fO3Wm2Vzmv_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('6qhYGKnLL1H');
const duration = 750;
const easing = 'ease-out';
const id = '63z6Wrc2UnS';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('6qhYGKnLL1H');
const duration = 750;
const easing = 'ease-out';
const id = '6MIUqon9BZX';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  const target = object('6qhYGKnLL1H');
const duration = 750;
const easing = 'ease-out';
const id = '69PFRDe2B2R';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script16 = function()
{
  const target = object('6qhYGKnLL1H');
const duration = 750;
const easing = 'ease-out';
const id = '69PFRDe2B2R_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
