function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6rbtz2AOd7g":
        Script1();
        break;
      case "6ml4eBbv6OP":
        Script2();
        break;
      case "5kS1NMKo1QZ":
        Script3();
        break;
      case "6GIGL3HWdEB":
        Script4();
        break;
      case "6IrwQxbflY2":
        Script5();
        break;
      case "5pO6B7vBt5I":
        Script6();
        break;
      case "6PrcTAG0tv1":
        Script7();
        break;
      case "6EdSVyVfPxF":
        Script8();
        break;
      case "5cjrh4LumGn":
        Script9();
        break;
      case "6Rex0taXhw5":
        Script10();
        break;
      case "6OA4EFPtEdC":
        Script11();
        break;
      case "66e0xmMEAW1":
        Script12();
        break;
      case "6rRCcxynfyD":
        Script13();
        break;
      case "6dXdTKd0ap4":
        Script14();
        break;
      case "6E3OPf9NFGH":
        Script15();
        break;
      case "65XnwOdUvmP":
        Script16();
        break;
      case "6C7D2qUU7yo":
        Script17();
        break;
      case "5mYXA1GqTmx":
        Script18();
        break;
      case "6YpmPtAQHpi":
        Script19();
        break;
      case "5sAorhLC8Xe":
        Script20();
        break;
      case "6XfENDSXdDQ":
        Script21();
        break;
      case "6QIO5VkwQI6":
        Script22();
        break;
      case "5YOiE2MTWJ7":
        Script23();
        break;
      case "65qrSuVTnn5":
        Script24();
        break;
      case "6ANnqdiNtA8":
        Script25();
        break;
      case "6bsK1xBZ2Po":
        Script26();
        break;
      case "5nrNodayGLb":
        Script27();
        break;
      case "6HNGU1c29gT":
        Script28();
        break;
      case "6c3BWfez8fa":
        Script29();
        break;
      case "5nlKWERECOp":
        Script30();
        break;
      case "6AqLmsTy4l1":
        Script31();
        break;
      case "5YzeXGu4ovK":
        Script32();
        break;
      case "6KHjWH5JL4B":
        Script33();
        break;
      case "69zfBFrnDQz":
        Script34();
        break;
      case "6OOspNKmuMz":
        Script35();
        break;
      case "5XCjFZi7jIm":
        Script36();
        break;
      case "6YB1TXODtjp":
        Script37();
        break;
      case "5XCICyKmv3L":
        Script38();
        break;
      case "5VdgjaR7IlZ":
        Script39();
        break;
      case "5bW0JtrW3aW":
        Script40();
        break;
      case "5h3mOP2umo6":
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
