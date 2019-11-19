"use strict";

// using .set to our properties and values on the elements in JS instead of in our CSS. You could also set these in CSS
TweenMax.set("#mac", {
  transformOrigin: 'bottom 0%',
  scale: 0
});
TweenMax.set("#ipad", {
  transformOrigin: 'bottom 0%',
  autoAlpha: 0,
  scale: 0
});
TweenMax.set("#phone", {
  autoAlpha: 0,
  transformOrigin: 'bottom 0%',
  scale: 0
});
TweenMax.set("#stuff-on-mac", {
  autoAlpha: 0,
  transformOrigin: 'bottom 0%',
  scale: 0
});
TweenMax.set("#stuff-on-iphone", {
  autoAlpha: 0,
  transformOrigin: 'bottom 0%',
  scale: 0
});
TweenMax.set("#stuff-on-ipad", {
  autoAlpha: 0,
  transformOrigin: 'right 0%',
  scale: 0
}); // functions allows you to generate animations and glue them // all together into a single timeline.
// You must remember to return them. 
// this function is reusable because of our item parameter. 
// I am using it to make several of the elements in my svg scale and become visible.

var visible = function visible(item) {
  var tl = new TimelineMax();
  tl.to(item, .5, {
    scale: 1,
    //autoAlpha is a GSAPs special property, that combines opacity and visibility into one property. 
    autoAlpha: 1,
    ease: Elastic.easeOut.config(1, 0.75)
  });
  return tl;
};

var bars = function bars(item) {
  var tl = new TimelineMax();
  tl.staggerTo(item, 4, {
    scaleY: 0,
    transformOrigin: 'bottom 0%',
    yoyo: true,
    repeat: -1,
    ease: Power0.easeNone,
    stagger: {
      amount: 1.5
    }
  });
  return tl;
};

var lines = function lines(item) {
  var tl = new TimelineMax();
  tl.staggerTo(item, 2, {
    autoAlpha: 0,
    transformOrigin: 'center center',
    yoyo: true,
    repeat: -1,
    ease: Power0.easeNone,
    stagger: {
      amount: 1.5
    }
  });
  return tl;
};

var device = function device(item) {
  var tl = new TimelineMax();
  tl.to(item, 2, {
    transformStyle: "preserve-3d",
    force3D: true,
    y: -10,
    z: -10,
    yoyo: true,
    repeat: -1,
    ease: Power0.easeNone
  });
  return tl;
}; // After returning all of the tl's you can create a master timeline to run all of the animations.
//master timeline


var master = new TimelineMax({
  delay: .5
});
master.timeScale(1.5);
master.add('s');
master.add(visible('#mac'), 's+=1.1').add(visible('#phone'), 's+1.2').add(visible('#ipad'), 's+1.3').add(visible('#stuff-on-mac'), 's+1.4').add(visible('#stuff-on-iphone'), 's+1.5').add(visible('#stuff-on-ipad'), 's+1.6').add(bars('.bar'), 's+1.6').add(bars('.shade'), 's+1.6').add(lines('.line'), 's+1.6').add(lines('.line2'), 's+1.6').add(device('.device'), 's+1.6').add(device('.device2'), 's+1.6'); // GSDevTools.create({});