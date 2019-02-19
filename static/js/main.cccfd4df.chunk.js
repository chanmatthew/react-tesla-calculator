(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/logo.99c8f204.svg"},26:function(e,t,n){e.exports=n(54)},31:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(22),l=n.n(r),i=(n(31),n(10)),o=n(11),s=n(15),u=n(12),m=n(16),f=n(13),p=n(1),d=(n(38),function(e){var t=e.wheelSize;return c.a.createElement("div",{className:"tesla-car"},c.a.createElement("div",{className:"tesla-wheels"},c.a.createElement("div",{className:"tesla-wheel tesla-wheel--front tesla tesla-wheel--".concat(t)}),c.a.createElement("div",{className:"tesla-wheel tesla-wheel--rear tesla-wheel--".concat(t)})))}),E=Object(p.b)(function(e){return{wheelSize:e.config.wheelSize}},null)(d),v=(n(40),function(e){return c.a.createElement("div",{className:"tesla-climate"},c.a.createElement("label",{className:"tesla-climate__item".concat(e.value?" tesla-climate__item--active":"").concat(e.limit?"":" tesla-heat"),"data-testid":"tesla-climate"},c.a.createElement("p",null,e.limit?"ac":"heat"," ",e.value?"on":"off"),c.a.createElement("i",{className:"tesla-climate__icon"}),c.a.createElement("input",{name:"climate",type:"checkbox",checked:e.value,onChange:function(){e.handleClimateChange()}})))}),h={speed:{title:"Speed",unit:"mph",step:5,min:45,max:70},temperature:{title:"Outside Temperature",unit:"\xb0",step:10,min:-10,max:40}},_={SPEED_UP:"SPEED_UP",SPEED_DOWN:"SPEED_DOWN",TEMPERATURE_UP:"TEMPERATURE_UP",TEMPERATURE_DOWN:"TEMPERATURE_DOWN",CHANGE_CLIMATE:"CHANGE_CLIMATE",CHANGE_WHEEL:"CHANGE_WHEEL",UPDATE_STATS:"UPDATE_STATS"},b=Object(p.b)(function(e){var t=e.config;return{value:t.climate,limit:t.temperature>10}},function(e){return{handleClimateChange:function(){e({type:_.CHANGE_CLIMATE})}}})(v),g=(n(42),function(e){return c.a.createElement("div",{className:"tesla-counter"},c.a.createElement("p",{className:"tesla-counter__title"},e.initValues.title),c.a.createElement("div",{className:"tesla-counter__container"},c.a.createElement("div",{className:"tesla-counter__item"},c.a.createElement("p",{className:"tesla-counter__number"},e.currentValue,c.a.createElement("span",null,e.initValues.unit)),c.a.createElement("div",{className:"tesla-counter__controls"},c.a.createElement("button",{onClick:function(t){return e.increment(t,e.currentValue)},disabled:e.currentValue>=e.initValues.max}),c.a.createElement("button",{onClick:function(t){return e.decrement(t,e.currentValue)},disabled:e.currentValue<=e.initValues.min})))))}),w=Object(p.b)(function(e){return{currentValue:e.config.speed,initValues:h.speed}},function(e){return{increment:function(t,n){t.preventDefault(),e(function(e){return{type:_.SPEED_UP,value:e,step:h.speed.step,maxValue:h.speed.max}}(n))},decrement:function(t,n){t.preventDefault(),e(function(e){return{type:_.SPEED_DOWN,value:e,step:h.speed.step,minValue:h.speed.min}}(n))}}})(g),N=(n(44),function(e){var t=e.carStats;return c.a.createElement("div",{className:"tesla-stats"},c.a.createElement("ul",null,t.map(function(e){return c.a.createElement("li",{key:e.model},c.a.createElement("div",{className:"tesla-stats-icon tesla-stats-icon--".concat(e.model.toLowerCase())}),c.a.createElement("p",null,e.miles))})))}),D=Object(p.b)(function(e){return{carStats:e.carStats}},null)(N),O=Object(p.b)(function(e){return{currentValue:e.config.temperature,initValues:h.temperature}},function(e){return{increment:function(t,n){t.preventDefault(),e(function(e){return{type:_.TEMPERATURE_UP,value:e,step:h.temperature.step,maxValue:h.temperature.max}}(n))},decrement:function(t,n){t.preventDefault(),e(function(e){return{type:_.TEMPERATURE_DOWN,value:e,step:h.temperature.step,minValue:h.temperature.min}}(n))}}})(g),P=(n(46),[19,21]),j=function(e){var t=e.wheels,n=t.value,a=t.handleWheelsChange;return c.a.createElement("div",null,P.map(function(e){return c.a.createElement("label",{key:e,className:"tesla-wheels__item tesla-wheels__item--".concat(e).concat(n===e?" tesla-wheels__item--active":"")},c.a.createElement("input",{type:"radio",name:"wheelSize",value:e,checked:n===e,onChange:function(){a(e)}}),c.a.createElement("p",null,e,'"'))}))},y=function(e){return c.a.createElement("div",{className:"tesla-wheels-option"},c.a.createElement("p",{className:"tesla-wheels__title"},"Wheels"),c.a.createElement("div",{className:"tesla-wheels__container"},c.a.createElement(j,{wheels:e})))},T=Object(p.b)(function(e){return{value:e.config.wheelSize}},function(e){return{handleWheelsChange:function(t){var n;e((n=t,{type:_.CHANGE_WHEEL,value:n}))}}})(y),S=n(5),A=n(2);var C={60:{19:{on:{speed:{45:{"-10":224,0:255,10:287,20:289,30:287,40:258},50:{"-10":211,0:238,10:264,20:267,30:267,40:244},55:{"-10":198,0:221,10:242,20:246,30:245,40:228},60:{"-10":184,0:204,10:222,20:225,30:226,40:212},65:{"-10":170,0:187,10:202,20:206,30:208,40:195},70:{"-10":156,0:172,10:185,20:189,30:190,40:179}}},off:{speed:{45:{"-10":297,0:312,10:318,20:325,30:329,40:333},50:{"-10":269,0:283,10:288,20:294,30:298,40:304},55:{"-10":245,0:256,10:261,20:267,30:269,40:277},60:{"-10":221,0:231,10:236,20:242,30:243,40:252},65:{"-10":200,0:209,10:214,20:219,30:222,40:230},70:{"-10":181,0:189,10:194,20:199,30:202,40:209}}}},21:{on:{speed:{45:{"-10":220,0:251,10:283,20:285,30:282,40:284},50:{"-10":208,0:234,10:260,20:262,30:262,40:240},55:{"-10":194,0:216,10:238,20:241,30:240,40:224},60:{"-10":180,0:199,10:217,20:220,30:221,40:208},65:{"-10":166,0:183,10:198,20:202,30:203,40:191},70:{"-10":152,0:167,10:180,20:184,30:185,40:174}}},off:{speed:{45:{"-10":292,0:307,10:314,20:320,30:324,40:328},50:{"-10":265,0:278,10:283,20:289,30:293,40:298},55:{"-10":240,0:251,10:256,20:261,30:264,40:272},60:{"-10":217,0:226,10:231,20:236,30:238,40:247},65:{"-10":196,0:204,10:209,20:214,30:217,40:225},70:{"-10":177,0:184,10:189,20:194,30:197,40:204}}}}},"60D":{19:{on:{speed:{45:{"-10":227,0:258,10:291,20:293,30:292,40:264},50:{"-10":215,0:242,10:269,20:271,30:272,40:250},55:{"-10":201,0:224,10:247,20:250,30:251,40:235},60:{"-10":187,0:207,10:226,20:229,30:232,40:217},65:{"-10":172,0:191,10:207,20:211,30:213,40:201},70:{"-10":158,0:175,10:189,20:193,30:195,40:185}}},off:{speed:{45:{"-10":301,0:317,10:323,20:330,30:336,40:339},50:{"-10":275,0:288,10:294,20:301,30:306,40:311},55:{"-10":249,0:260,10:266,20:273,30:278,40:283},60:{"-10":225,0:236,10:241,20:248,30:251,40:258},65:{"-10":204,0:214,10:219,20:225,30:229,40:236},70:{"-10":184,0:193,10:198,20:205,30:207,40:215}}}},21:{on:{speed:{45:{"-10":223,0:255,10:287,20:289,30:288,40:260},50:{"-10":211,0:238,10:264,20:267,30:267,40:246},55:{"-10":197,0:220,10:242,20:246,30:246,40:230},60:{"-10":183,0:203,10:221,20:225,30:227,40:212},65:{"-10":168,0:186,10:202,20:206,30:208,40:196},70:{"-10":155,0:171,10:184,20:188,30:190,40:181}}},off:{speed:{45:{"-10":297,0:312,10:319,20:326,30:331,40:335},50:{"-10":270,0:283,10:289,20:296,30:301,40:306},55:{"-10":244,0:256,10:261,20:268,30:272,40:278},60:{"-10":221,0:231,10:236,20:242,30:246,40:253},65:{"-10":199,0:209,10:214,20:220,30:223,40:231},70:{"-10":180,0:188,10:193,20:200,30:202,40:210}}}}},75:{19:{on:{speed:{45:{"-10":271,0:309,10:347,20:350,30:347,40:312},50:{"-10":256,0:288,10:320,20:323,30:323,40:295},55:{"-10":240,0:267,10:293,20:297,30:297,40:276},60:{"-10":222,0:246,10:268,20:272,30:273,40:257},65:{"-10":205,0:227,10:245,20:250,30:252,40:236},70:{"-10":189,0:206,10:224,20:228,30:230,40:216}}},off:{speed:{45:{"-10":359,0:377,10:385,20:393,30:398,40:403},50:{"-10":326,0:342,10:349,20:356,30:360,40:368},55:{"-10":296,0:309,10:316,20:323,30:326,40:335},60:{"-10":268,0:280,10:286,20:292,30:295,40:305},65:{"-10":242,0:253,10:259,20:265,30:268,40:278},70:{"-10":219,0:229,10:234,20:241,30:244,40:253}}}},21:{on:{speed:{45:{"-10":267,0:304,10:342,20:344,30:342,40:308},50:{"-10":251,0:283,10:314,20:317,30:317,40:290},55:{"-10":235,0:262,10:287,20:291,30:291,40:271},60:{"-10":218,0:241,10:262,20:266,30:267,40:251},65:{"-10":201,0:222,10:239,20:244,30:246,40:231},70:{"-10":184,0:203,10:218,20:223,30:224,40:211}}},off:{speed:{45:{"-10":353,0:372,10:379,20:387,30:392,40:397},50:{"-10":320,0:336,10:343,20:350,30:354,40:361},55:{"-10":290,0:303,10:309,20:316,30:319,40:329},60:{"-10":262,0:274,10:279,20:286,30:288,40:299},65:{"-10":237,0:247,10:253,20:259,30:262,40:272},70:{"-10":214,0:223,10:229,20:235,30:238,40:247}}}}},"75D":{19:{on:{speed:{45:{"-10":227,0:316,10:356,20:358,30:357,40:323},50:{"-10":262,0:296,10:328,20:332,30:332,40:305},55:{"-10":246,0:274,10:302,20:306,30:307,40:287},60:{"-10":228,0:253,10:276,20:280,30:283,40:265},65:{"-10":211,0:233,10:253,20:257,30:260,40:246},70:{"-10":194,0:214,10:231,20:236,30:238,40:226}}},off:{speed:{45:{"-10":368,0:387,10:395,20:404,30:410,40:415},50:{"-10":335,0:351,10:359,20:367,30:374,40:380},55:{"-10":304,0:318,10:325,20:334,30:339,40:346},60:{"-10":275,0:288,10:294,20:303,30:307,40:316},65:{"-10":249,0:261,10:267,20:275,30:279,40:289},70:{"-10":225,0:236,10:242,20:250,30:253,40:263}}}},21:{on:{speed:{45:{"-10":273,0:311,10:351,20:354,30:352,40:318},50:{"-10":258,0:291,10:323,20:326,30:327,40:300},55:{"-10":241,0:269,10:296,20:300,30:301,40:281},60:{"-10":223,0:248,10:270,20:275,30:277,40:259},65:{"-10":206,0:228,10:247,20:252,30:254,40:240},70:{"-10":189,0:209,10:225,20:230,30:232,40:221}}},off:{speed:{45:{"-10":363,0:382,10:390,20:398,30:405,40:409},50:{"-10":330,0:346,10:353,20:361,30:368,40:373},55:{"-10":299,0:312,10:319,20:327,30:333,40:340},60:{"-10":270,0:282,10:288,20:296,30:301,40:309},65:{"-10":244,0:255,10:261,20:269,30:273,40:282},70:{"-10":219,0:230,10:236,20:244,30:247,40:257}}}}},"90D":{19:{on:{speed:{45:{"-10":308,0:349,10:392,20:394,30:392,40:357},50:{"-10":292,0:326,10:362,20:365,30:365,40:338},55:{"-10":273,0:303,10:332,20:336,30:337,40:317},60:{"-10":254,0:280,10:305,20:308,30:310,40:293},65:{"-10":235,0:258,10:279,20:283,30:285,40:273},70:{"-10":216,0:238,10:256,20:260,30:263,40:253}}},off:{speed:{45:{"-10":406,0:426,10:434,20:443,30:451,40:455},50:{"-10":370,0:386,10:394,20:403,30:412,40:416},55:{"-10":336,0:350,10:358,20:366,30:274,40:380},60:{"-10":304,0:317,10:324,20:332,30:338,40:347},65:{"-10":276,0:288,10:295,20:302,30:308,40:317},70:{"-10":250,0:261,10:268,20:275,30:279,40:290}}}},21:{on:{speed:{45:{"-10":304,0:345,10:386,20:388,30:387,40:352},50:{"-10":287,0:321,10:356,20:359,30:360,40:332},55:{"-10":268,0:297,10:326,20:330,30:330,40:311},60:{"-10":249,0:274,10:299,20:302,30:303,40:287},65:{"-10":230,0:253,10:273,20:277,30:279,40:267},70:{"-10":211,0:232,10:250,20:254,30:257,40:247}}},off:{speed:{45:{"-10":401,0:420,10:428,20:437,30:446,40:449},50:{"-10":364,0:380,10:388,20:397,30:405,40:410},55:{"-10":330,0:344,10:351,20:359,30:367,40:373},60:{"-10":298,0:311,10:318,20:325,30:331,40:340},65:{"-10":270,0:282,10:288,20:296,30:301,40:310},70:{"-10":244,0:255,10:262,20:269,30:273,40:284}}}}},P100D:{19:{on:{speed:{45:{"-10":341,0:390,10:439,20:442,30:440,40:401},50:{"-10":323,0:365,10:405,20:409,30:410,40:380},55:{"-10":303,0:339,10:372,20:376,30:379,40:353},60:{"-10":282,0:313,10:341,20:345,30:347,40:329},65:{"-10":261,0:289,10:312,20:317,30:318,40:306},70:{"-10":240,0:265,10:285,20:290,30:293,40:283}}},off:{speed:{45:{"-10":447,0:474,10:485,20:496,30:505,40:509},50:{"-10":408,0:431,10:441,20:451,30:461,40:466},55:{"-10":372,0:391,10:400,20:409,30:419,40:425},60:{"-10":337,0:354,10:362,20:371,30:377,40:388},65:{"-10":306,0:321,10:329,20:337,30:341,40:354},70:{"-10":277,0:291,10:299,20:307,30:311,40:323}}}},21:{on:{speed:{45:{"-10":322,0:369,10:414,20:417,30:416,40:379},50:{"-10":306,0:347,10:384,20:388,30:389,40:360},55:{"-10":228,0:323,10:354,20:358,30:360,40:336},60:{"-10":269,0:299,10:325,20:329,30:331,40:313},65:{"-10":250,0:276,10:299,20:303,30:305,40:292},70:{"-10":230,0:254,10:273,20:278,30:281,40:271}}},off:{speed:{45:{"-10":422,0:447,10:458,20:468,30:477,40:481},50:{"-10":387,0:409,10:418,20:428,30:437,40:442},55:{"-10":353,0:372,10:380,20:389,30:398,40:404},60:{"-10":322,0:338,10:345,20:354,30:359,40:370},65:{"-10":293,0:307,10:315,20:323,30:326,40:339},70:{"-10":265,0:279,10:286,20:294,30:298,40:310}}}}}},V=["60","60D","75","75D","90D","P100D"];function U(e,t){return Object(A.a)({},e,{config:t.config,carStats:R(t)})}function R(e){var t=e.config,n=t.speed,a=t.temperature,c=t.climate,r=t.wheelSize;return V.map(function(e){return{model:e,miles:C[e][r][c?"on":"off"].speed[n][a]}})}var W=function(e,t,n){var a=t.value,c=t.step,r=t.maxValue;return e.config[n]>=r?e:U(e,Object(A.a)({},e,{config:Object(A.a)({},e.config,Object(S.a)({},n,a+c))}))},x=function(e,t,n){var a=t.value,c=t.step,r=t.minValue;return e.config[n]<=r?e:U(e,Object(A.a)({},e,{config:Object(A.a)({},e.config,Object(S.a)({},n,a-c))}))},k={speed:45,temperature:10,climate:!1,wheelSize:21},H={carStats:R({config:k}),config:k};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.SPEED_UP:return W(e,t,"speed");case _.SPEED_DOWN:return x(e,t,"speed");case _.TEMPERATURE_UP:return W(e,t,"temperature");case _.TEMPERATURE_DOWN:return x(e,t,"temperature");case _.CHANGE_CLIMATE:return U(e,Object(A.a)({},e,{config:Object(A.a)({},e.config,{climate:!e.config.climate})}));case _.CHANGE_WHEEL:return U(e,Object(A.a)({},e,{config:Object(A.a)({},e.config,{wheelSize:t.value})}));default:return e}},L=(n(48),n(17)),z=n(7),G=n(25),I=n(24),B=n.n(I);function J(){var e=Object(L.a)(["\n      animation: "," 10s ease infinite;\n    "]);return J=function(){return e},e}function $(){var e=Object(L.a)(["\n  background-color: ",";\n  padding: 1.5625em 0;\n  text-align: center;\n\n  img {\n    width: 100px;\n  }\n"]);return $=function(){return e},e}function q(){var e=Object(L.a)(["\n  from {\n    opacity: 0%;\n  }\n  to {\n    opacity: 100%;\n  }\n"]);return q=function(){return e},e}var F=Object(z.c)(q()),K=Object(G.a)("header")($(),function(e){return e.isActive&&"#222"}),Q=function(){return c.a.createElement(K,{isActive:!0,css:Object(z.b)(J(),F)},c.a.createElement("img",{src:B.a,alt:"Tesla"}))},X=(n(50),n(52),function(){return c.a.createElement("div",{className:"tesla-battery__notice"},c.a.createElement("p",null,"The actual amount of range that you experience will vary based on your paticular use coditions. See How particular use conditions mary affect your range in your simulation model"),c.a.createElement("p",null,"Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style and operating, environmental and climate conditions."))}),Y={60:{19:{on:{speed:{45:{"-10":224,0:255,10:287,20:289,30:287,40:258},50:{"-10":211,0:238,10:264,20:267,30:267,40:244},55:{"-10":198,0:221,10:242,20:246,30:245,40:228},60:{"-10":184,0:204,10:222,20:225,30:226,40:212},65:{"-10":170,0:187,10:202,20:206,30:208,40:195},70:{"-10":156,0:172,10:185,20:189,30:190,40:179}}},off:{speed:{45:{"-10":297,0:312,10:318,20:325,30:329,40:333},50:{"-10":269,0:283,10:288,20:294,30:298,40:304},55:{"-10":245,0:256,10:261,20:267,30:269,40:277},60:{"-10":221,0:231,10:236,20:242,30:243,40:252},65:{"-10":200,0:209,10:214,20:219,30:222,40:230},70:{"-10":181,0:189,10:194,20:199,30:202,40:209}}}},21:{on:{speed:{45:{"-10":220,0:251,10:283,20:285,30:282,40:284},50:{"-10":208,0:234,10:260,20:262,30:262,40:240},55:{"-10":194,0:216,10:238,20:241,30:240,40:224},60:{"-10":180,0:199,10:217,20:220,30:221,40:208},65:{"-10":166,0:183,10:198,20:202,30:203,40:191},70:{"-10":152,0:167,10:180,20:184,30:185,40:174}}},off:{speed:{45:{"-10":292,0:307,10:314,20:320,30:324,40:328},50:{"-10":265,0:278,10:283,20:289,30:293,40:298},55:{"-10":240,0:251,10:256,20:261,30:264,40:272},60:{"-10":217,0:226,10:231,20:236,30:238,40:247},65:{"-10":196,0:204,10:209,20:214,30:217,40:225},70:{"-10":177,0:184,10:189,20:194,30:197,40:204}}}}},"60D":{19:{on:{speed:{45:{"-10":227,0:258,10:291,20:293,30:292,40:264},50:{"-10":215,0:242,10:269,20:271,30:272,40:250},55:{"-10":201,0:224,10:247,20:250,30:251,40:235},60:{"-10":187,0:207,10:226,20:229,30:232,40:217},65:{"-10":172,0:191,10:207,20:211,30:213,40:201},70:{"-10":158,0:175,10:189,20:193,30:195,40:185}}},off:{speed:{45:{"-10":301,0:317,10:323,20:330,30:336,40:339},50:{"-10":275,0:288,10:294,20:301,30:306,40:311},55:{"-10":249,0:260,10:266,20:273,30:278,40:283},60:{"-10":225,0:236,10:241,20:248,30:251,40:258},65:{"-10":204,0:214,10:219,20:225,30:229,40:236},70:{"-10":184,0:193,10:198,20:205,30:207,40:215}}}},21:{on:{speed:{45:{"-10":223,0:255,10:287,20:289,30:288,40:260},50:{"-10":211,0:238,10:264,20:267,30:267,40:246},55:{"-10":197,0:220,10:242,20:246,30:246,40:230},60:{"-10":183,0:203,10:221,20:225,30:227,40:212},65:{"-10":168,0:186,10:202,20:206,30:208,40:196},70:{"-10":155,0:171,10:184,20:188,30:190,40:181}}},off:{speed:{45:{"-10":297,0:312,10:319,20:326,30:331,40:335},50:{"-10":270,0:283,10:289,20:296,30:301,40:306},55:{"-10":244,0:256,10:261,20:268,30:272,40:278},60:{"-10":221,0:231,10:236,20:242,30:246,40:253},65:{"-10":199,0:209,10:214,20:220,30:223,40:231},70:{"-10":180,0:188,10:193,20:200,30:202,40:210}}}}},75:{19:{on:{speed:{45:{"-10":271,0:309,10:347,20:350,30:347,40:312},50:{"-10":256,0:288,10:320,20:323,30:323,40:295},55:{"-10":240,0:267,10:293,20:297,30:297,40:276},60:{"-10":222,0:246,10:268,20:272,30:273,40:257},65:{"-10":205,0:227,10:245,20:250,30:252,40:236},70:{"-10":189,0:206,10:224,20:228,30:230,40:216}}},off:{speed:{45:{"-10":359,0:377,10:385,20:393,30:398,40:403},50:{"-10":326,0:342,10:349,20:356,30:360,40:368},55:{"-10":296,0:309,10:316,20:323,30:326,40:335},60:{"-10":268,0:280,10:286,20:292,30:295,40:305},65:{"-10":242,0:253,10:259,20:265,30:268,40:278},70:{"-10":219,0:229,10:234,20:241,30:244,40:253}}}},21:{on:{speed:{45:{"-10":267,0:304,10:342,20:344,30:342,40:308},50:{"-10":251,0:283,10:314,20:317,30:317,40:290},55:{"-10":235,0:262,10:287,20:291,30:291,40:271},60:{"-10":218,0:241,10:262,20:266,30:267,40:251},65:{"-10":201,0:222,10:239,20:244,30:246,40:231},70:{"-10":184,0:203,10:218,20:223,30:224,40:211}}},off:{speed:{45:{"-10":353,0:372,10:379,20:387,30:392,40:397},50:{"-10":320,0:336,10:343,20:350,30:354,40:361},55:{"-10":290,0:303,10:309,20:316,30:319,40:329},60:{"-10":262,0:274,10:279,20:286,30:288,40:299},65:{"-10":237,0:247,10:253,20:259,30:262,40:272},70:{"-10":214,0:223,10:229,20:235,30:238,40:247}}}}},"75D":{19:{on:{speed:{45:{"-10":227,0:316,10:356,20:358,30:357,40:323},50:{"-10":262,0:296,10:328,20:332,30:332,40:305},55:{"-10":246,0:274,10:302,20:306,30:307,40:287},60:{"-10":228,0:253,10:276,20:280,30:283,40:265},65:{"-10":211,0:233,10:253,20:257,30:260,40:246},70:{"-10":194,0:214,10:231,20:236,30:238,40:226}}},off:{speed:{45:{"-10":368,0:387,10:395,20:404,30:410,40:415},50:{"-10":335,0:351,10:359,20:367,30:374,40:380},55:{"-10":304,0:318,10:325,20:334,30:339,40:346},60:{"-10":275,0:288,10:294,20:303,30:307,40:316},65:{"-10":249,0:261,10:267,20:275,30:279,40:289},70:{"-10":225,0:236,10:242,20:250,30:253,40:263}}}},21:{on:{speed:{45:{"-10":273,0:311,10:351,20:354,30:352,40:318},50:{"-10":258,0:291,10:323,20:326,30:327,40:300},55:{"-10":241,0:269,10:296,20:300,30:301,40:281},60:{"-10":223,0:248,10:270,20:275,30:277,40:259},65:{"-10":206,0:228,10:247,20:252,30:254,40:240},70:{"-10":189,0:209,10:225,20:230,30:232,40:221}}},off:{speed:{45:{"-10":363,0:382,10:390,20:398,30:405,40:409},50:{"-10":330,0:346,10:353,20:361,30:368,40:373},55:{"-10":299,0:312,10:319,20:327,30:333,40:340},60:{"-10":270,0:282,10:288,20:296,30:301,40:309},65:{"-10":244,0:255,10:261,20:269,30:273,40:282},70:{"-10":219,0:230,10:236,20:244,30:247,40:257}}}}},"90D":{19:{on:{speed:{45:{"-10":308,0:349,10:392,20:394,30:392,40:357},50:{"-10":292,0:326,10:362,20:365,30:365,40:338},55:{"-10":273,0:303,10:332,20:336,30:337,40:317},60:{"-10":254,0:280,10:305,20:308,30:310,40:293},65:{"-10":235,0:258,10:279,20:283,30:285,40:273},70:{"-10":216,0:238,10:256,20:260,30:263,40:253}}},off:{speed:{45:{"-10":406,0:426,10:434,20:443,30:451,40:455},50:{"-10":370,0:386,10:394,20:403,30:412,40:416},55:{"-10":336,0:350,10:358,20:366,30:274,40:380},60:{"-10":304,0:317,10:324,20:332,30:338,40:347},65:{"-10":276,0:288,10:295,20:302,30:308,40:317},70:{"-10":250,0:261,10:268,20:275,30:279,40:290}}}},21:{on:{speed:{45:{"-10":304,0:345,10:386,20:388,30:387,40:352},50:{"-10":287,0:321,10:356,20:359,30:360,40:332},55:{"-10":268,0:297,10:326,20:330,30:330,40:311},60:{"-10":249,0:274,10:299,20:302,30:303,40:287},65:{"-10":230,0:253,10:273,20:277,30:279,40:267},70:{"-10":211,0:232,10:250,20:254,30:257,40:247}}},off:{speed:{45:{"-10":401,0:420,10:428,20:437,30:446,40:449},50:{"-10":364,0:380,10:388,20:397,30:405,40:410},55:{"-10":330,0:344,10:351,20:359,30:367,40:373},60:{"-10":298,0:311,10:318,20:325,30:331,40:340},65:{"-10":270,0:282,10:288,20:296,30:301,40:310},70:{"-10":244,0:255,10:262,20:269,30:273,40:284}}}}},P100D:{19:{on:{speed:{45:{"-10":341,0:390,10:439,20:442,30:440,40:401},50:{"-10":323,0:365,10:405,20:409,30:410,40:380},55:{"-10":303,0:339,10:372,20:376,30:379,40:353},60:{"-10":282,0:313,10:341,20:345,30:347,40:329},65:{"-10":261,0:289,10:312,20:317,30:318,40:306},70:{"-10":240,0:265,10:285,20:290,30:293,40:283}}},off:{speed:{45:{"-10":447,0:474,10:485,20:496,30:505,40:509},50:{"-10":408,0:431,10:441,20:451,30:461,40:466},55:{"-10":372,0:391,10:400,20:409,30:419,40:425},60:{"-10":337,0:354,10:362,20:371,30:377,40:388},65:{"-10":306,0:321,10:329,20:337,30:341,40:354},70:{"-10":277,0:291,10:299,20:307,30:311,40:323}}}},21:{on:{speed:{45:{"-10":322,0:369,10:414,20:417,30:416,40:379},50:{"-10":306,0:347,10:384,20:388,30:389,40:360},55:{"-10":228,0:323,10:354,20:358,30:360,40:336},60:{"-10":269,0:299,10:325,20:329,30:331,40:313},65:{"-10":250,0:276,10:299,20:303,30:305,40:292},70:{"-10":230,0:254,10:273,20:278,30:281,40:271}}},off:{speed:{45:{"-10":422,0:447,10:458,20:468,30:477,40:481},50:{"-10":387,0:409,10:418,20:428,30:437,40:442},55:{"-10":353,0:372,10:380,20:389,30:398,40:404},60:{"-10":322,0:338,10:345,20:354,30:359,40:370},65:{"-10":293,0:307,10:315,20:323,30:326,40:339},70:{"-10":265,0:279,10:286,20:294,30:298,40:310}}}}}},Z=["60","60D","75","75D","90D","P100D"],ee=(a.Component,Object(f.b)(M)),te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{store:ee},c.a.createElement("div",null,c.a.createElement(Q,null),c.a.createElement("form",{className:"tesla-battery"},c.a.createElement("h1",null,"Range Per Charge"),c.a.createElement(E,null),c.a.createElement(D,null),c.a.createElement("div",{className:"tesla-controls"},c.a.createElement(w,null),c.a.createElement("div",{className:"tesla-climate-container"},c.a.createElement(O,null),c.a.createElement(b,null)),c.a.createElement(T,null)),c.a.createElement(X,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.cccfd4df.chunk.js.map