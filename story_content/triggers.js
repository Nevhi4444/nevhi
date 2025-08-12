function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kNMBKVD4rl":
        Script1();
        break;
      case "5iLhKAmGEpZ":
        Script2();
        break;
      case "62PQ95ftofN":
        Script3();
        break;
      case "6VCbQ2t570w":
        Script4();
        break;
      case "5eoLfZ2d4zE":
        Script5();
        break;
      case "6889lzpFRgG":
        Script6();
        break;
      case "64YY1Ka4aKk":
        Script7();
        break;
      case "6hsLmFcfgpC":
        Script8();
        break;
      case "5qtJ5d2I1Ah":
        Script9();
        break;
      case "5fOX5JoEAEP":
        Script10();
        break;
      case "5v4opXVwC0u":
        Script11();
        break;
      case "5hNSMz1oR6x":
        Script12();
        break;
      case "6649HaqdIJT":
        Script13();
        break;
      case "5nMwNDl8LYz":
        Script14();
        break;
      case "5ycctlYGr9y":
        Script15();
        break;
      case "5vzVouVTdtj":
        Script16();
        break;
      case "5bcopHH8dqw":
        Script17();
        break;
      case "5dsyutAmFJE":
        Script18();
        break;
      case "67V70u5UdcP":
        Script19();
        break;
      case "6SDca71OFDq":
        Script20();
        break;
      case "5eLowi9lmac":
        Script21();
        break;
      case "5X87MJPJKll":
        Script22();
        break;
      case "6pmkisrwpmn":
        Script23();
        break;
      case "6CN60hMb2wI":
        Script24();
        break;
      case "5tR272WKeEn":
        Script25();
        break;
      case "5cY77MdloNI":
        Script26();
        break;
      case "5qb7hDmWYxE":
        Script27();
        break;
      case "6YLmk3JWiNX":
        Script28();
        break;
      case "6KCYENTmPVw":
        Script29();
        break;
      case "5c08SOATb4l":
        Script30();
        break;
      case "5VbJuve2EIR":
        Script31();
        break;
      case "6PjJ2D58acu":
        Script32();
        break;
      case "6LoxCj3GXVq":
        Script33();
        break;
      case "6RGbD12oUB3":
        Script34();
        break;
      case "6RBIRPXQDoI":
        Script35();
        break;
      case "6NStF5j2cqK":
        Script36();
        break;
      case "6nm3PJPdOqC":
        Script37();
        break;
      case "68BIdAS76VA":
        Script38();
        break;
      case "5YwV7uAEISX":
        Script39();
        break;
      case "6Io1vGZVtfE":
        Script40();
        break;
      case "6OQtTvIlihp":
        Script41();
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
