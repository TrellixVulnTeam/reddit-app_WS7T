"use strict";(self.webpackChunkreddit_app=self.webpackChunkreddit_app||[]).push([[496],{6532:function(t,a,i){i.r(a),i.d(a,{PostDetailModule:function(){return Z}});var e=i(8583),o=i(5855),p=i(639),s=i(5019);const n=[{path:"",component:(()=>{class t{constructor(t){this.freeapiservice=t,this.kind=""}ngOnInit(){this.freeapiservice.getInfo().subscribe(t=>{console.log(JSON.stringify(t[0])),this.kind=t})}}return t.\u0275fac=function(a){return new(a||t)(p.Y36(s.c))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-post-detail"]],decls:220,vars:0,consts:[[1,"app-layout"],[1,"main-header-wrap"],[1,"navbar"],[1,"container"],[1,"navbar-header"],["href","#",1,"navbar-brand"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"_1O4jTk-dZ-VIxsCuYB6OR8"],["fill","#FF4500","cx","10","cy","10","r","10"],["fill","#FFF","d","M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"],["viewBox","0 0 57 18","xmlns","http://www.w3.org/2000/svg",1,"brand-title"],["fill","#1c1c1c"],["d","M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"],["fill","#FF4500","cx","47.26","cy","3.44","r","2.12"],["d","M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"],["d","M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"],["d","M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"],["d","M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"],["d","M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"],[1,"navbar-right"],["type","submit",1,"btn","btn-default"],[1,"fas","fa-search"],[1,"btn","btn-default"],[1,"far","fa-user"],[1,"app-wrap-content"],[1,"app-content"],[1,"row"],[1,"col-md-8","col-sm-8"],[1,"post-wrap"],[1,"card"],[1,"post-content"],[1,"post-sub-title"],[1,"post-by-wrap"],[1,"post-by"],["src","/assets/img/user.png","alt",""],[1,"post-views"],[1,"fas","fa-eye"],[1,"post-rating"],[1,"count-wrap"],[1,"fas","fa-arrow-up"],[1,"fas","fa-arrow-down"],[1,"count"],[1,"comments"],[1,"fas","fa-comment"],[1,"post-share-wrap"],[1,"fas","fa-share-alt"],[1,"share-count"],[1,"post-share-count"],[1,"post-share-info"],[1,"post-img"],["src","/assets/img/post2.jpg","alt","","srcset",""],[1,"side-widget"],[1,"title-hyb"],[1,"row","related-stories"],[1,"col-md-4"],[1,"card-img"],["src","/assets/img/post2.jpg","alt",""],[1,"card-body","mh-height"],[1,"post-comment"],["id","accordion",1,"panel-group"],[1,"panel","panel-default"],["data-toggle","collapse","aria-expanded","false","data-parent","#accordion","href","#collapse1",1,"b-comment"],[1,"comment-detail"],["id","collapse1",1,"b-comment","collapse","in"],[1,"b-comment"],[1,"widget-premium","text-center"],[1,"icon"],["version","1.0","xmlns","http://www.w3.org/2000/svg","width","512.000000pt","height","512.000000pt","viewBox","0 0 512.000000 512.000000","preserveAspectRatio","xMidYMid meet"],["transform","translate(0.000000,512.000000) scale(0.100000,-0.100000)","fill","#000000","stroke","none"],["d","M2457 4256 c-21 -8 -55 -25 -75 -39 -20 -14 -248 -229 -507 -477 -337 -324 -483 -458 -515 -473 -55 -25 -133 -26 -180 -4 -64 31 -130 98 -337 341 -323 378 -321 376 -458 384 -115 6 -179 -20 -266 -107 -79 -79 -109 -147 -115 -261 -3 -49 26 -375 84 -940 l87 -865 2382 -3 2381 -2 6 37 c3 21 45 432 93 912 79 800 85 881 75 943 -22 129 -101 239 -209 294 -51 25 -69 29 -143 29 -133 -1 -141 -6 -475 -333 -159 -156 -306 -292 -327 -303 -57 -29 -109 -34 -171 -14 -47 14 -112 66 -483 377 -236 199 -458 386 -494 416 -95 79 -148 102 -240 101 -41 0 -92 -6 -113 -13z"],["d","M214 1428 c23 -276 168 -486 389 -562 l62 -21 1830 -3 c1173 -2 1862 1 1920 7 124 14 216 60 307 152 105 107 163 247 183 442 l7 67 -2353 0 -2352 0 7 -82z"],[1,"btn","btn-primary"],[1,"side-list"],["href","javascript:void(0)"],[1,"media"],[1,"media-left"],["src","/assets/img/post.jpg",1,"media-object",2,"width","90px"],[1,"media-body"],[1,"media-heading"],[1,"footer-wrap"],[1,"footer-bottom"],[1,"social-footer","social"],["href","#","title","Facebook","target","_blank","rel","nofollow noopener",1,"fab","fa-facebook-f"],["href","#","title","Pinterest","target","_blank","rel","nofollow noopener",1,"fab","fa-pinterest"],["href","#","title","Twitter","target","_blank","rel","nofollow noopener",1,"fab","fa-twitter"],["href","#","title","Instagram","target","_blank","rel","nofollow noopener",1,"fab","fa-instagram"],[1,"copy-right"]],template:function(t,a){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"header",1),p.TgZ(2,"nav",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"a",5),p.O4$(),p.TgZ(6,"svg",6),p.TgZ(7,"g"),p._UZ(8,"circle",7),p._UZ(9,"path",8),p.qZA(),p.qZA(),p.TgZ(10,"svg",9),p.TgZ(11,"g",10),p._UZ(12,"path",11),p._UZ(13,"circle",12),p._UZ(14,"path",13),p._UZ(15,"path",14),p._UZ(16,"path",15),p._UZ(17,"path",16),p._UZ(18,"path",17),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.kcU(),p.TgZ(19,"div",18),p.TgZ(20,"button",19),p._UZ(21,"i",20),p.qZA(),p.TgZ(22,"button",21),p._UZ(23,"i",22),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(24,"div",23),p.TgZ(25,"div",24),p.TgZ(26,"div",3),p.TgZ(27,"div",25),p.TgZ(28,"div",26),p.TgZ(29,"div",27),p.TgZ(30,"div",28),p.TgZ(31,"div",29),p.TgZ(32,"h4"),p._uU(33,"Apology \u2018not enough\u2019, say survivors of US drone attack in Kabul"),p.qZA(),p.TgZ(34,"p",30),p._uU(35,"Grieving relatives of Afghan civilian victims demand accountability, as well as financial compensation for their losses and relocation."),p.qZA(),p.TgZ(36,"div",31),p.TgZ(37,"div",32),p._UZ(38,"img",33),p._uU(39," Posted by"),p.TgZ(40,"span"),p._uU(41,"\xa0u/Aaridahdewan\xa0"),p.qZA(),p._uU(42," 9 minutes ago "),p.qZA(),p.TgZ(43,"div",34),p._UZ(44,"i",35),p._uU(45," 3.8k views "),p.qZA(),p.qZA(),p.TgZ(46,"div",36),p.TgZ(47,"div",37),p.TgZ(48,"button"),p._UZ(49,"i",38),p.qZA(),p.TgZ(50,"button"),p._UZ(51,"i",39),p.qZA(),p.TgZ(52,"div",40),p._uU(53,"359"),p.qZA(),p.qZA(),p.TgZ(54,"div",41),p._UZ(55,"i",42),p._uU(56," 20 "),p.qZA(),p.TgZ(57,"div",43),p._UZ(58,"i",44),p.TgZ(59,"div",45),p.TgZ(60,"div",46),p._uU(61,"175"),p.qZA(),p.TgZ(62,"div",47),p._uU(63,"shares"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(64,"div",48),p._UZ(65,"img",49),p.qZA(),p.qZA(),p.TgZ(66,"div",50),p.TgZ(67,"div",51),p.TgZ(68,"h5"),p._uU(69,"Related Stories"),p.qZA(),p.qZA(),p.TgZ(70,"div",52),p.TgZ(71,"div",53),p.TgZ(72,"div",28),p.TgZ(73,"div",54),p._UZ(74,"img",55),p.qZA(),p.TgZ(75,"div",56),p.TgZ(76,"h5"),p._uU(77,"Famous Foxes of the 20th Century Fox"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(78,"div",53),p.TgZ(79,"div",28),p.TgZ(80,"div",54),p._UZ(81,"img",55),p.qZA(),p.TgZ(82,"div",56),p.TgZ(83,"h5"),p._uU(84,"Delicious, Tasty and Cheap \u2013 here is what you need to do"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(85,"div",53),p.TgZ(86,"div",28),p.TgZ(87,"div",54),p._UZ(88,"img",55),p.qZA(),p.TgZ(89,"div",56),p.TgZ(90,"h5"),p._uU(91,"Hide and Seek biscuit scamming us by showing 20% extra and increasing the gap inside by 20%"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(92,"div",51),p.TgZ(93,"h5"),p._uU(94,"Comments"),p.qZA(),p.qZA(),p.TgZ(95,"div",57),p.TgZ(96,"div",58),p.TgZ(97,"div",59),p.TgZ(98,"a",60),p._UZ(99,"img",33),p.TgZ(100,"div",61),p.TgZ(101,"h5"),p._uU(102,"Name1"),p.qZA(),p.TgZ(103,"p"),p._uU(104," Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit aliquam eligendi repellendus excepturi quibusdam nobis esse accusantium. "),p.qZA(),p.TgZ(105,"div",62),p._UZ(106,"img",33),p.TgZ(107,"div",61),p.TgZ(108,"h5"),p._uU(109,"Name2"),p.qZA(),p.TgZ(110,"p"),p._uU(111," Lorem ipsum dolor sit, amet consectetur adipisicing elit. "),p.qZA(),p.TgZ(112,"div",63),p._UZ(113,"img",33),p.TgZ(114,"div",61),p.TgZ(115,"h5"),p._uU(116,"Name3"),p.qZA(),p.TgZ(117,"p"),p._uU(118," Lorem ipsum dolor sit, amet consectetur adipisicing elit. "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(119,"div",53),p.TgZ(120,"div",64),p.TgZ(121,"div",28),p.TgZ(122,"div",65),p.O4$(),p.TgZ(123,"svg",66),p.TgZ(124,"g",67),p._UZ(125,"path",68),p._UZ(126,"path",69),p.qZA(),p.qZA(),p.qZA(),p.kcU(),p.TgZ(127,"h4"),p._uU(128,"Reddit Premium"),p.qZA(),p.TgZ(129,"p"),p._uU(130,"The best Reddit experience, with monthly Coins"),p.qZA(),p.TgZ(131,"button",70),p._uU(132,"Try Now"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(133,"div",50),p.TgZ(134,"h4"),p._uU(135,"Top News Communities"),p.qZA(),p.TgZ(136,"ul",71),p.TgZ(137,"li"),p.TgZ(138,"a",72),p.TgZ(139,"span"),p._uU(140,"1"),p.qZA(),p._uU(141,"News"),p.qZA(),p.qZA(),p.TgZ(142,"li"),p.TgZ(143,"a",72),p.TgZ(144,"span"),p._uU(145,"2"),p.qZA(),p._uU(146,"Uplifting News"),p.qZA(),p.qZA(),p.TgZ(147,"li"),p.TgZ(148,"a",72),p.TgZ(149,"span"),p._uU(150,"3"),p.qZA(),p._uU(151,"Not the onion"),p.qZA(),p.qZA(),p.TgZ(152,"li"),p.TgZ(153,"a",72),p.TgZ(154,"span"),p._uU(155,"4"),p.qZA(),p._uU(156,"TechNews"),p.qZA(),p.qZA(),p.TgZ(157,"li"),p.TgZ(158,"a",72),p.TgZ(159,"span"),p._uU(160,"5"),p.qZA(),p._uU(161,"TechNewsToday"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(162,"div",50),p.TgZ(163,"h4"),p._uU(164,"Trending Posts"),p.qZA(),p.TgZ(165,"div",73),p.TgZ(166,"div",74),p._UZ(167,"img",75),p.qZA(),p.TgZ(168,"div",76),p.TgZ(169,"h5",77),p._uU(170,"SpaceX's 1st all-civilian crew returns to Earth after successful mission"),p.qZA(),p.TgZ(171,"p"),p._uU(172,"Posted by "),p.TgZ(173,"span"),p._uU(174,"u/Aaridahdewan"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(175,"div",73),p.TgZ(176,"div",74),p._UZ(177,"img",75),p.qZA(),p.TgZ(178,"div",76),p.TgZ(179,"h5",77),p._uU(180,"SpaceX's 1st all-civilian crew returns to Earth after successful mission"),p.qZA(),p.TgZ(181,"p"),p._uU(182,"Posted by "),p.TgZ(183,"span"),p._uU(184,"u/Aaridahdewan"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(185,"div",73),p.TgZ(186,"div",74),p._UZ(187,"img",75),p.qZA(),p.TgZ(188,"div",76),p.TgZ(189,"h5",77),p._uU(190,"SpaceX's 1st all-civilian crew returns to Earth after successful mission"),p.qZA(),p.TgZ(191,"p"),p._uU(192,"Posted by "),p.TgZ(193,"span"),p._uU(194,"u/Aaridahdewan"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(195,"div",73),p.TgZ(196,"div",74),p._UZ(197,"img",75),p.qZA(),p.TgZ(198,"div",76),p.TgZ(199,"h5",77),p._uU(200,"SpaceX's 1st all-civilian crew returns to Earth after successful mission"),p.qZA(),p.TgZ(201,"p"),p._uU(202,"Posted by "),p.TgZ(203,"span"),p._uU(204,"u/Aaridahdewan"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(205,"footer",78),p.TgZ(206,"div",79),p.TgZ(207,"div",3),p.TgZ(208,"div",80),p.TgZ(209,"ul"),p.TgZ(210,"li"),p._UZ(211,"a",81),p.qZA(),p.TgZ(212,"li"),p._UZ(213,"a",82),p.qZA(),p.TgZ(214,"li"),p._UZ(215,"a",83),p.qZA(),p.TgZ(216,"li"),p._UZ(217,"a",84),p.qZA(),p.qZA(),p.qZA(),p.TgZ(218,"div",85),p._uU(219,"\xa9 2021 All Rights Reserved"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA())},styles:["app-post-detail .side-widget{margin-top:30px}app-post-detail .side-widget h4{text-transform:uppercase;font-weight:normal;border-bottom:1px solid rgba(0,0,0,.3);font-size:16px;padding-bottom:10px;margin-bottom:30px}app-post-detail .side-widget ul.side-list{list-style-type:none;padding-left:0}app-post-detail .side-widget ul.side-list li{margin-bottom:10px;position:relative;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.1)}app-post-detail .side-widget ul.side-list li a{color:rgba(0,0,0,.702)}app-post-detail .side-widget ul.side-list li a span{width:30px;height:30px;background-color:#fff;display:inline-block;border-radius:30px;text-align:center;vertical-align:middle;line-height:30px;margin-right:15px}app-post-detail .side-widget ul.side-list li:last-child{border-bottom:0}app-post-detail .widget-premium{position:relative;padding-top:30px}app-post-detail .widget-premium .card{padding:50px 20px 20px}app-post-detail .widget-premium .icon{width:60px;height:60px;margin:0 auto;text-align:center;background-color:#ff4500;border-radius:50%;position:absolute;top:-30px;left:50%;transform:translate(-50%)}app-post-detail .widget-premium .icon svg{width:40px;height:60px;vertical-align:middle}app-post-detail .widget-premium .icon svg g{fill:#fff}app-post-detail .widget-premium p{font-size:12px;color:#1a1a1b}app-post-detail .post-wrap .card{margin-bottom:20px}app-post-detail .post-wrap .card .post-img{width:100%}app-post-detail .post-wrap .card .post-img img{width:100%}app-post-detail .post-wrap .card .post-content{padding:20px 30px}app-post-detail .post-wrap .card .post-content .post-sub-title{color:#b1b1b1}app-post-detail .post-wrap .card .post-content .post-by-wrap{display:flex;justify-content:space-between;align-items:center}app-post-detail .post-wrap .card .post-content .post-by-wrap .post-views{font-size:18px;color:#ff4500;font-weight:500}app-post-detail .post-wrap .card .post-content .post-by{display:flex;align-items:center;font-size:14px;color:#b1b1b1}app-post-detail .post-wrap .card .post-content .post-by span{color:#ff4500}app-post-detail .post-wrap .card .post-content .post-by img{width:30px;margin-right:15px}app-post-detail .post-wrap .card .post-content .post-rating{margin-top:20px;display:flex}app-post-detail .post-wrap .card .post-content .count-wrap{display:flex}app-post-detail .post-wrap .card .post-content .count-wrap button,app-post-detail .post-wrap .card .post-content .count-wrap .count{border:2px solid #DAE0E6;background-color:transparent;padding:0 10px;color:#dae0e6;text-align:center}app-post-detail .post-wrap .card .post-content .count-wrap button:first-child,app-post-detail .post-wrap .card .post-content .count-wrap button:nth-child(2){border-right:0}app-post-detail .post-wrap .card .post-content .count-wrap .count{color:#ff4500;font-weight:500;font-size:18px;width:auto;padding:5px}app-post-detail .post-wrap .card .post-content .comments{display:flex;align-items:center;margin:0 20px;font-size:18px;color:#ff4500}app-post-detail .post-wrap .card .post-content .comments i{font-size:22px;color:#dae0e6;padding-right:5px}app-post-detail .post-wrap .card .post-content .post-share-wrap{display:flex;flex-grow:1;justify-content:flex-end;align-items:center}app-post-detail .post-wrap .card .post-content .post-share-wrap i{font-size:20px}app-post-detail .post-wrap .card .post-content .post-share-wrap .share-count{padding-left:10px;text-align:center}app-post-detail .post-wrap .card .post-content .post-share-wrap .post-share-count{font-weight:600;font-size:18px;line-height:normal}app-post-detail .post-wrap .card .post-content .post-share-wrap .post-share-info{text-transform:uppercase;line-height:normal;font-size:12px;font-weight:400}\n"],encapsulation:2}),t})()}];let r=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[o.Bz.forChild(n)],o.Bz]}),t})();var d=i(1841);let Z=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({providers:[s.c],imports:[[e.ez,r,d.JF]]}),t})()}}]);