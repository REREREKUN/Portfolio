(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"project_atlas_", frames: [[1505,0,293,400],[0,0,1503,436]]}
];


// symbols:



(lib.男性直立 = function() {
	this.initialize(ss["project_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["project_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.DSC_2273 = function() {
	this.initialize(img.DSC_2273);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2275 = function() {
	this.initialize(img.DSC_2275);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2277 = function() {
	this.initialize(img.DSC_2277);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2278 = function() {
	this.initialize(img.DSC_2278);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2279 = function() {
	this.initialize(img.DSC_2279);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2281 = function() {
	this.initialize(img.DSC_2281);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2282 = function() {
	this.initialize(img.DSC_2282);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2283 = function() {
	this.initialize(img.DSC_2283);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2284 = function() {
	this.initialize(img.DSC_2284);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2286 = function() {
	this.initialize(img.DSC_2286);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.DSC_2287 = function() {
	this.initialize(img.DSC_2287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5504,3096);


(lib.IMG_2152 = function() {
	this.initialize(img.IMG_2152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4032,3024);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Engineering Design IIA", "bold 80px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 95;
	this.text.lineWidth = 836;
	this.text.parent = this;
	this.text.setTransform(419.85,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Title, new cjs.Rectangle(0,0,839.7,110), null);


(lib.textbox1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("This is Sena.\nMany people visit here during summer and fall.", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 588;
	this.text.parent = this;
	this.text.setTransform(16.05,25.85);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.1,23.9,591.6999999999999,151.9);


(lib.text_WtD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("」", "bold 120px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(851.25,283.1);

	this.text_1 = new cjs.Text("「", "bold 120px 'Trebuchet MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 122;
	this.text_1.lineWidth = 134;
	this.text_1.parent = this;
	this.text_1.setTransform(68.95,119.95);

	this.text_2 = new cjs.Text("Improve the economy around here with food", "bold 80px 'Trebuchet MS'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 95;
	this.text_2.lineWidth = 804;
	this.text_2.parent = this;
	this.text_2.setTransform(457.8,119.95);

	this.text_3 = new cjs.Text("PURPOSE", "bold 60px 'Trebuchet MS'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 72;
	this.text_3.lineWidth = 258;
	this.text_3.parent = this;
	this.text_3.setTransform(462.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_WtD, new cjs.Rectangle(0,0,921.8,424.5), null);


(lib.text_WhattoDo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("」", "bold 120px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 122;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(851.25,283.1);

	this.text_1 = new cjs.Text("「", "bold 120px 'Trebuchet MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 122;
	this.text_1.lineWidth = 134;
	this.text_1.parent = this;
	this.text_1.setTransform(68.95,119.95);

	this.text_2 = new cjs.Text("Reform\n\"Roadside Station\"", "bold 80px 'Trebuchet MS'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 95;
	this.text_2.lineWidth = 804;
	this.text_2.parent = this;
	this.text_2.setTransform(457.8,147.4);

	this.text_3 = new cjs.Text("WHAT TO DO", "bold 60px 'Trebuchet MS'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 72;
	this.text_3.lineWidth = 488;
	this.text_3.parent = this;
	this.text_3.setTransform(487.2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_WhattoDo, new cjs.Rectangle(0,0,921.8,432), null);


(lib.text_LsG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Let's GO!!", "bold 140px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 165;
	this.text.lineWidth = 804;
	this.text.parent = this;
	this.text.setTransform(403.85,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_LsG, new cjs.Rectangle(0,0,807.7,331.1), null);


(lib.text_introduction22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("However, we found some points that we can improve.\nLET'S SEE!!", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 586;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_introduction22, new cjs.Rectangle(0,0,589.8,229.5), null);


(lib.text_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Thank you for Watching!!", "bold 100px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 118;
	this.text.lineWidth = 758;
	this.text.parent = this;
	this.text.setTransform(1516.4,140.05);

	this.text_1 = new cjs.Text("We have another ideas (ex: stairs, 2F) but\nwe don't have enough time so we need to stop :( \n", "bold 80px 'Trebuchet MS'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 95;
	this.text_1.lineWidth = 934;
	this.text_1.parent = this;
	this.text_1.setTransform(468.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_final, new cjs.Rectangle(0,0,1897.3,666), null);


(lib.text_description_V2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("What will we do\n・Write dscription about their   　　　smell and delicious.\n・Take a picture that looks nice", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 652;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_description_V2, new cjs.Rectangle(0,0,655.8,244.3), null);


(lib.text_description_T2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("What we will do\n・Change design of the paper\n・Show Tochimochi diagonally", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 592;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_description_T2, new cjs.Rectangle(0,0,596,195.8), null);


(lib.text_description_T1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("This is the Tochimochi which is the most boughted product.\nHowever, the way of showing is not good ", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 570;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_description_T1, new cjs.Rectangle(0,0,574,237.5), null);


(lib.text_description_J1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Jibie is sold in here.\nThere aren't enough imformation so people can't get deliciousness of the meat.", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 620;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_description_J1, new cjs.Rectangle(0,0,623.8,225.5), null);


(lib.taxt_description_WV1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Here are wild vegitables.\nI think we can improve here by adding description", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 584;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.taxt_description_WV1, new cjs.Rectangle(0,0,588,195.6), null);


(lib.t3ext_description_WV2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("Another team explains the other way to improve this space. Please look the other video TOO!", "bold 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 596;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3ext_description_WV2, new cjs.Rectangle(0,0,600,208.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,751.5,218), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.男性直立();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.223,1.223);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,358.4,489.2), null);


(lib.subTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("~FOOD~", "bold 60px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 232;
	this.text.parent = this;
	this.text.setTransform(117.95,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.subTitle, new cjs.Rectangle(0,0,235.9,73.7), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.subTitle();
	this.instance.parent = this;
	this.instance.setTransform(419.9,170.35,1,1,0,0,0,118,36.9);

	this.instance_1 = new lib.Title();
	this.instance_1.parent = this;
	this.instance_1.setTransform(545.8,109.3,1,1,0,0,0,545.8,109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,839.7,207.2), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.text_LsG();
	this.instance.parent = this;
	this.instance.setTransform(2753.05,1051.05,1,1,0,0,0,403.9,165.6);

	this.instance_1 = new lib.text_WhattoDo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1572.1,956.05,1,1,0,0,0,460.9,216);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(419.9,212.15,1,1,0,0,0,419.9,103.5);

	this.instance_3 = new lib.text_WtD();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1572.1,212.2,1,1,0,0,0,460.9,212.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,3156.9,1216.6), null);


// stage content:
(lib.project = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("game_maoudamashii_7_event43");
	}
	this.frame_363 = function() {
		playSound("game_maoudamashii_5_village10");
	}
	this.frame_1439 = function() {
		playSound("game_maoudamashii_9_jingle07");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(363).call(this.frame_363).wait(1076).call(this.frame_1439).wait(1));

	// text
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(1108.65,384,1,1,0,0,0,1016.5,212.2);
	this.instance.alpha = 0;

	this.instance_1 = new lib.textbox1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(444.25,614.85,1,1,0,0,0,375.9,109);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.text_introduction22();
	this.instance_2.parent = this;
	this.instance_2.setTransform(348.9,638.9,1,1,0,0,0,294.9,114.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.taxt_description_WV1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(347.9,621.9,1,1,0,0,0,293.9,97.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.t3ext_description_WV2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(353.9,627.4,1,1,0,0,0,299.9,104.3);
	this.instance_4._off = true;

	this.instance_5 = new lib.text_description_J1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(365.9,636.8,1,1,0,0,0,311.9,112.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.text_description_V2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(351.9,646.2,1,1,0,0,0,297.9,122.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.text_description_T1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(341,642.9,1,1,0,0,0,287,118.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.text_description_T2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(352.95,622,1,1,0,0,0,297.9,97.9);

	this.instance_9 = new lib.text_final();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1014.6,459.75,1,1,0,0,0,948.6,332.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},58).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},50).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},36).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8,p:{alpha:1}}]},1).to({state:[{t:this.instance_8,p:{alpha:1}}]},123).to({state:[{t:this.instance_8,p:{alpha:0}}]},3).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1578.4,regY:608.3,x:1670.55,y:780.1},0).wait(22).to({alpha:0.0435},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.1304},0).wait(1).to({alpha:0.1739},0).wait(1).to({alpha:0.2174},0).wait(1).to({alpha:0.2609},0).wait(1).to({alpha:0.3043},0).wait(1).to({alpha:0.3478},0).wait(1).to({alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(69).to({x:1565.1},0).wait(1).to({x:1459.6},0).wait(1).to({x:1354.15},0).wait(1).to({x:1248.65},0).wait(1).to({x:1143.15},0).wait(1).to({x:1037.7},0).wait(1).to({x:932.2},0).wait(1).to({x:826.7},0).wait(1).to({x:721.25},0).wait(1).to({x:615.75},0).wait(1).to({x:510.25},0).wait(80).to({y:722.85},0).wait(1).to({y:665.6},0).wait(1).to({y:608.35},0).wait(1).to({y:551.15},0).wait(1).to({y:493.9},0).wait(1).to({y:436.65},0).wait(1).to({y:379.4},0).wait(1).to({y:322.15},0).wait(1).to({y:264.9},0).wait(1).to({y:207.65},0).wait(1).to({y:150.4},0).wait(1).to({y:93.15},0).wait(1).to({y:35.9},0).wait(89).to({x:414.25},0).wait(1).to({x:318.2},0).wait(1).to({x:222.2},0).wait(1).to({x:126.15},0).wait(1).to({x:30.15},0).wait(1).to({x:-65.9},0).wait(1).to({x:-161.9},0).wait(1).to({x:-257.95},0).wait(1).to({x:-353.95},0).wait(1).to({x:-450},0).wait(1).to({x:-546},0).wait(1).to({x:-642.05},0).wait(46).to({_off:true},1).wait(1077));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(385).to({_off:false},0).wait(1).to({regX:309.9,regY:99.8,x:373.5,y:604.7,alpha:0.1667},0).wait(1).to({x:368.75,y:603.75,alpha:0.3333},0).wait(1).to({x:364.05,y:602.85,alpha:0.5},0).wait(1).to({x:359.3,y:601.9,alpha:0.6667},0).wait(1).to({x:354.55,y:600.95,alpha:0.8333},0).wait(1).to({x:349.85,y:600.05,alpha:1},0).wait(64).to({_off:true},1).wait(984));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(456).to({_off:false},0).wait(65).to({alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(916));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(582).to({_off:false},0).wait(1).to({regX:294,x:348,alpha:0.3333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:1},0).wait(76).to({_off:true},1).wait(778));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(662).to({_off:false},0).wait(1).to({regX:300,x:354},0).wait(97).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(670));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(820).to({_off:false},0).wait(1).to({alpha:0.1111},0).wait(1).to({alpha:0.2222},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.4444},0).wait(1).to({alpha:0.5556},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.7778},0).wait(1).to({alpha:0.8889},0).wait(1).to({alpha:1},0).wait(94).to({alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(514));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(926).to({_off:false},0).wait(1).to({regX:327.9,x:381.9},0).wait(77).to({alpha:0.8333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0.1667},0).wait(1).to({alpha:0},0).wait(22).to({_off:true},1).wait(408));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1068).to({_off:false},0).wait(1).to({alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(107).to({alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(251));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1317).to({_off:false},0).wait(1).to({regY:333,y:459.85},0).wait(90).to({x:897.1},0).wait(1).to({x:779.6},0).wait(1).to({x:662.1},0).wait(1).to({x:544.6},0).wait(1).to({x:427.05},0).wait(1).to({x:309.55},0).wait(1).to({x:192.05},0).wait(1).to({x:74.55},0).wait(1).to({x:-43},0).wait(24));

	// Layer_3
	this.instance_10 = new lib.Symbol5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(415.9,619.1,1,1,0,0,0,375.9,109);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(384).to({_off:false},0).wait(1).to({regX:375.8,x:415.8,alpha:0.3333},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:1},0).wait(133).to({alpha:0.6667},0).wait(1).to({alpha:0.3333},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(58).to({_off:false,regX:375.9,x:415.9},0).wait(1).to({regX:375.8,x:415.8,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(172).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50).to({_off:false,regX:375.9,x:415.9},0).wait(1).to({regX:375.8,x:415.8,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(183).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).wait(14).to({_off:true},1).wait(36).to({_off:false,regX:375.9,x:415.9},0).wait(1).to({regX:375.8,x:415.8,alpha:0.0909},0).wait(1).to({alpha:0.1818},0).wait(1).to({alpha:0.2727},0).wait(1).to({alpha:0.3636},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:1},0).wait(234).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(123));

	// Character
	this.instance_11 = new lib.Symbol3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(1151.2,605.6,1,1,0,0,0,179.2,244.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(362).to({_off:false},0).wait(1).to({rotation:-0.9723,x:1137.95,y:605.55},0).wait(1).to({rotation:-1.9446,x:1124.8},0).wait(1).to({rotation:-2.9169,x:1111.6,y:605.6},0).wait(1).to({rotation:-3.8892,x:1098.5},0).wait(1).to({rotation:-4.8614,x:1085.3,y:605.55},0).wait(1).to({rotation:-2.9226,x:1076.65,y:605.6},0).wait(1).to({rotation:-0.9837,x:1068.1,y:605.55},0).wait(1).to({rotation:0.9552,x:1059.5},0).wait(1).to({rotation:2.8941,x:1050.95,y:605.6},0).wait(1).to({rotation:4.833,x:1042.4},0).wait(1).to({rotation:6.7719,x:1033.8},0).wait(1).to({rotation:8.7108,x:1025.25},0).wait(1).to({rotation:6.1026,x:1003.6,y:605.55},0).wait(1).to({rotation:3.4945,x:981.9},0).wait(1).to({rotation:0.8863,x:960.25},0).wait(1).to({rotation:-1.7218,x:938.55},0).wait(1).to({rotation:-4.33,x:916.95},0).wait(1).to({rotation:-6.9381,x:895.3},0).wait(1).to({rotation:-5.2036,y:605.6},0).wait(1).to({rotation:-3.4691,x:895.25,y:605.55},0).wait(1).to({rotation:-1.7345,y:605.6},0).wait(1).to({rotation:0,x:895.3},0).wait(138).to({_off:true},1).wait(36).to({_off:false,x:1151.2},0).wait(1).to({rotation:-0.9723,x:1137.95,y:605.55},0).wait(1).to({rotation:-1.9446,x:1124.8},0).wait(1).to({rotation:-2.9169,x:1111.6,y:605.6},0).wait(1).to({rotation:-3.8892,x:1098.5},0).wait(1).to({rotation:-4.8614,x:1085.3,y:605.55},0).wait(1).to({rotation:-1.4684,x:1070.25},0).wait(1).to({rotation:1.9247,x:1055.25},0).wait(1).to({rotation:5.3177,x:1040.3},0).wait(1).to({rotation:8.7108,x:1025.25,y:605.6},0).wait(1).to({rotation:5.581,x:999.2},0).wait(1).to({rotation:2.4512,x:973.25},0).wait(1).to({rotation:-0.6786,x:947.25},0).wait(1).to({rotation:-3.8084,x:921.25,y:605.55},0).wait(1).to({rotation:-6.9381,x:895.3},0).wait(1).to({rotation:-5.5505,x:895.25},0).wait(1).to({rotation:-4.1629,x:895.3,y:605.6},0).wait(1).to({rotation:-2.7753,y:605.55},0).wait(1).to({rotation:-1.3876,x:895.25,y:605.6},0).wait(1).to({rotation:0,x:895.3},0).wait(190).to({_off:true},1).wait(27).to({_off:false,x:1151.2},0).wait(1).to({rotation:-0.8102,x:1140.2,y:605.55},0).wait(1).to({rotation:-1.6205,x:1129.2,y:605.6},0).wait(1).to({rotation:-2.4307,x:1118.2},0).wait(1).to({rotation:-3.241,x:1107.25,y:605.55},0).wait(1).to({rotation:-4.0512,x:1096.3,y:605.6},0).wait(1).to({rotation:-4.8614,x:1085.3,y:605.55},0).wait(1).to({rotation:-1.4684,x:1070.25},0).wait(1).to({rotation:1.9247,x:1055.25},0).wait(1).to({rotation:5.3177,x:1040.3},0).wait(1).to({rotation:8.7108,x:1025.25,y:605.6},0).wait(1).to({rotation:6.1026,x:1003.6,y:605.55},0).wait(1).to({rotation:3.4945,x:981.9},0).wait(1).to({rotation:0.8863,x:960.25},0).wait(1).to({rotation:-1.7218,x:938.55},0).wait(1).to({rotation:-4.33,x:916.95},0).wait(1).to({rotation:-6.9381,x:895.3},0).wait(1).to({rotation:-5.7818},0).wait(1).to({rotation:-4.6254,x:895.25},0).wait(1).to({rotation:-3.4691},0).wait(1).to({rotation:-2.3127},0).wait(1).to({rotation:-1.1564,x:895.3,y:605.6},0).wait(1).to({rotation:0},0).wait(213).to({_off:true},1).wait(12).to({_off:false,x:1151.2},0).wait(1).to({rotation:-0.6945,x:1141.75},0).wait(1).to({rotation:-1.389,x:1132.35},0).wait(1).to({rotation:-2.0835,x:1122.95},0).wait(1).to({rotation:-2.778,x:1113.5,y:605.55},0).wait(1).to({rotation:-3.4725,x:1104.05},0).wait(1).to({rotation:-4.167,x:1094.65,y:605.6},0).wait(1).to({rotation:-4.8614,x:1085.3,y:605.55},0).wait(1).to({rotation:-2.5994,x:1075.25},0).wait(1).to({rotation:-0.3374,x:1065.25,y:605.6},0).wait(1).to({rotation:1.9247,x:1055.25,y:605.55},0).wait(1).to({rotation:4.1867,x:1045.25,y:605.6},0).wait(1).to({rotation:6.4487,x:1035.25},0).wait(1).to({rotation:8.7108,x:1025.25},0).wait(1).to({rotation:6.4752,x:1006.65},0).wait(1).to({rotation:4.2396,x:988.05},0).wait(1).to({rotation:2.0041,x:969.55,y:605.55},0).wait(1).to({rotation:-0.2315,x:951,y:605.6},0).wait(1).to({rotation:-2.467,x:932.45,y:605.55},0).wait(1).to({rotation:-4.7026,x:913.85,y:605.6},0).wait(1).to({rotation:-6.9381,x:895.3,y:605.55},0).wait(1).to({rotation:-5.7818},0).wait(1).to({rotation:-4.6254,x:895.25},0).wait(1).to({rotation:-3.4691},0).wait(1).to({rotation:-2.3127},0).wait(1).to({rotation:-1.1564,x:895.3,y:605.6},0).wait(1).to({rotation:0},0).wait(246).to({_off:true},1).wait(123));

	// Background
	this.instance_12 = new lib.IMG_2152();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0,0.254,0.254);

	this.instance_13 = new lib.DSC_2273();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0,0.186,0.248);

	this.instance_14 = new lib.DSC_2275();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0,0.186,0.2481);

	this.instance_15 = new lib.DSC_2277();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,0,0.186,0.2481);

	this.instance_16 = new lib.DSC_2278();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0,0.186,0.2481);

	this.instance_17 = new lib.DSC_2279();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,0,0.186,0.2481);

	this.instance_18 = new lib.DSC_2281();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-340,0,0.2726,0.2726);

	this.instance_19 = new lib.DSC_2282();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,0,0.1901,0.2513);

	this.instance_20 = new lib.DSC_2283();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,0,0.186,0.248);

	this.instance_21 = new lib.DSC_2284();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,0,0.186,0.2481);

	this.instance_22 = new lib.DSC_2286();
	this.instance_22.parent = this;
	this.instance_22.setTransform(1.4,0,0.1861,0.2481,0,0.1445,0);

	this.instance_23 = new lib.DSC_2287();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,0,0.186,0.2481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},362).to({state:[{t:this.instance_14}]},161).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_18}]},8).to({state:[{t:this.instance_18}]},211).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},9).to({state:[{t:this.instance_21}]},11).to({state:[{t:this.instance_22}]},243).to({state:[{t:this.instance_23}]},8).to({state:[{t:this.instance_23}]},252).to({state:[{t:this.instance_12}]},25).to({state:[{t:this.instance_12}]},120).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1708.4,-188.4,4957.4,1576.8000000000002);
// library properties:
lib.properties = {
	id: '58EEF07C6F79104F97690CD719A75714',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/DSC_2273.jpg", id:"DSC_2273"},
		{src:"images/DSC_2275.jpg", id:"DSC_2275"},
		{src:"images/DSC_2277.jpg", id:"DSC_2277"},
		{src:"images/DSC_2278.jpg", id:"DSC_2278"},
		{src:"images/DSC_2279.jpg", id:"DSC_2279"},
		{src:"images/DSC_2281.jpg", id:"DSC_2281"},
		{src:"images/DSC_2282.jpg", id:"DSC_2282"},
		{src:"images/DSC_2283.jpg", id:"DSC_2283"},
		{src:"images/DSC_2284.jpg", id:"DSC_2284"},
		{src:"images/DSC_2286.jpg", id:"DSC_2286"},
		{src:"images/DSC_2287.jpg", id:"DSC_2287"},
		{src:"images/IMG_2152.png", id:"IMG_2152"},
		{src:"images/project_atlas_.png", id:"project_atlas_"},
		{src:"sounds/game_maoudamashii_5_village10.mp3", id:"game_maoudamashii_5_village10"},
		{src:"sounds/game_maoudamashii_7_event43.mp3", id:"game_maoudamashii_7_event43"},
		{src:"sounds/game_maoudamashii_9_jingle07.mp3", id:"game_maoudamashii_9_jingle07"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['58EEF07C6F79104F97690CD719A75714'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;