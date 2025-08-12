function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65lEqNfzscH":
        Script1();
        break;
      case "6Unu5mvKHnH":
        Script2();
        break;
      case "6VkkDkGSjRi":
        Script3();
        break;
      case "6HWgkykKUQ5":
        Script4();
        break;
      case "5ptcOhBhd2s":
        Script5();
        break;
      case "67VB7HwQuIv":
        Script6();
        break;
      case "5itCSUmfQf9":
        Script7();
        break;
      case "6FpoRyKhQEJ":
        Script8();
        break;
      case "6HKc1dXx3Cv":
        Script9();
        break;
      case "6MzkgKFghL3":
        Script10();
        break;
      case "6Erz17n9UTS":
        Script11();
        break;
      case "6cKasWrZIKC":
        Script12();
        break;
      case "6luBkW1ytbv":
        Script13();
        break;
      case "6RZEk58G95s":
        Script14();
        break;
      case "6Yd8pk4fXp5":
        Script15();
        break;
      case "657jOSeoXvh":
        Script16();
        break;
      case "6RLjn89M5th":
        Script17();
        break;
      case "6IetEw6MoYJ":
        Script18();
        break;
      case "6Y2WdnxUJCa":
        Script19();
        break;
      case "5cKD4kljj3N":
        Script20();
        break;
      case "67xVdZhXy0s":
        Script21();
        break;
      case "6nonWOiOEsw":
        Script22();
        break;
      case "6qgsRwgcDgT":
        Script23();
        break;
      case "5dttE9v4c1B":
        Script24();
        break;
      case "5VgYpnr4lxy":
        Script25();
        break;
      case "64ac2vdqE3A":
        Script26();
        break;
      case "6DqrIIEMvqY":
        Script27();
        break;
      case "699tus7PASB":
        Script28();
        break;
      case "6F8bnIiMAyo":
        Script29();
        break;
      case "5lrtp745fyr":
        Script30();
        break;
      case "62WZtUpsF4j":
        Script31();
        break;
      case "5fEScBQuAnY":
        Script32();
        break;
      case "6Goga2mXqr4":
        Script33();
        break;
      case "6qbnD9sh4tB":
        Script34();
        break;
      case "5z80ZP88XxF":
        Script35();
        break;
      case "6GDBOiGEH2W":
        Script36();
        break;
      case "5armuiQG95e":
        Script37();
        break;
      case "5uflAnlcyRi":
        Script38();
        break;
      case "6WcnWvXjXfY":
        Script39();
        break;
      case "6XMZbZJjMsw":
        Script40();
        break;
      case "5gXn78yNs9V":
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
