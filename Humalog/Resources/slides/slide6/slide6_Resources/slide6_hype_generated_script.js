//	HYPE.documents["slide6"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide6_Resources";
	var documentName = "slide6";
	var documentLoaderFilename = "slide6_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{onSceneLoadAction:{type:0},timelines:{"105":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"e",e:"1.000000",r:1,s:"-2.000000",o:"93"},{f:"2",t:1,d:2,i:"e",e:"1.000000",s:"1.000000",o:"93"},{f:"2",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"93"}],identifier:"105",name:"estrella",duration:4},"97":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"96"},{f:"2",t:1,d:2,i:"e",e:"1.000000",s:"1.000000",o:"96"},{f:"2",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"96"}],identifier:"97",name:"EvidenciaTriangulo",duration:4},"104":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"92"},{f:"2",t:1,d:2,i:"e",e:"1.000000",s:"1.000000",o:"92"},{f:"2",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"92"}],identifier:"104",name:"cuadro",duration:4},"107":{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"94"},{f:"2",t:1,d:2,i:"e",e:"1.000000",s:"1.000000",o:"94"},{f:"2",t:3,d:1,i:"e",e:"0.000000",s:"1.000000",o:"94"}],identifier:"107",name:"luna",duration:4},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"d",e:63,r:1,s:149,o:"28"},{f:"2",t:0.5,d:0.5,i:"c",e:207,r:1,s:490,o:"28"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1,d:0.36666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"89"},{f:"2",t:1.0333333,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:1.0333333,d:0.5,i:"a",e:379,r:1,s:495,o:"30"},{f:"2",t:1.3666667,d:0.43333328,i:"e",e:"1.000000",r:1,s:"0.000000",o:"90"},{f:"2",t:1.8,d:0.4000001,i:"b",e:286,r:1,s:122,o:"75"},{f:"2",t:1.8,d:0.4000001,i:"a",e:391,r:1,s:405,o:"75"},{f:"2",t:1.8,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"75"},{f:"2",t:2.2,d:0.5333333,i:"b",e:179,r:1,s:56,o:"76"},{f:"2",t:2.2,d:0.5333333,i:"a",e:482,r:1,s:482,o:"76"},{f:"2",t:2.2,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"76"},{f:"2",t:2.7333333,d:0.5666666,i:"e",e:"1.000000",r:1,s:"0.000000",o:"77"},{f:"2",t:2.7333333,d:0.5666666,i:"b",e:140,r:1,s:49,o:"77"},{f:"2",t:2.7666667,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"103"},{f:"2",t:3.3,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"78"},{f:"2",t:3.3,d:0.5333333,i:"b",e:123,r:1,s:41,o:"78"},{f:"2",t:3.8333333,d:0.66666675,i:"a",e:786,r:1,s:790,o:"79"},{f:"2",t:3.8333333,d:0.66666675,i:"b",e:135,r:1,s:48,o:"79"},{f:"2",t:3.8333333,d:0.66666675,i:"e",e:"1.000000",r:1,s:"0.000000",o:"79"},{f:"2",t:3.8333333,d:0.66666675,i:"e",e:"1.000000",r:1,s:"0.000000",o:"102"},{f:"2",t:3.8333333,d:0.66666675,i:"e",e:"1.000000",r:1,s:"0.000000",o:"100"},{f:"2",t:3.8333333,d:0.66666675,i:"e",e:"1.000000",r:1,s:"0.000000",o:"98"},{f:"2",t:4.5,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"80"},{f:"2",t:4.5,d:0.5333333,i:"b",e:186,r:1,s:62,o:"80"},{f:"2",t:4.5,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"101"},{f:"2",t:5.0333333,d:0.5999999,i:"b",e:216,r:1,s:118,o:"81"},{f:"2",t:5.0333333,d:0.5999999,i:"a",e:934,r:1,s:934,o:"81"},{f:"2",t:5.0333333,d:0.5999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"81"},{f:"2",t:5.0333333,d:0.5999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"99"},{f:"2",t:5.6999998,d:0.70000029,i:"e",e:"1.000000",r:1,s:"0.000000",o:"67"},{f:"2",t:6.3666668,d:0.5999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"73"},{f:"2",t:6.9666667,d:0.5333333,i:"b",e:524,r:1,s:689,o:"68"},{f:"2",t:6.9666667,d:0.5333333,i:"a",e:488,r:1,s:489,o:"68"},{f:"2",t:7.5333333,d:0.66666651,i:"b",e:522,r:1,s:690,o:"69"},{f:"2",t:7.5333333,d:0.66666651,i:"a",e:624,r:1,s:626,o:"69"},{f:"2",t:8.1999998,d:0.66666698,i:"b",e:530,r:1,s:698,o:"70"},{f:"2",t:8.1999998,d:0.66666698,i:"a",e:760,r:1,s:766,o:"70"},{f:"2",t:8.8666668,d:0.80000019,i:"e",e:"1.000000",r:1,s:"0.000000",o:"71"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:9.666667},"18_pressed":{framesPerSecond:30,animations:[],identifier:"18_pressed",name:"18_pressed",duration:0},"106":{framesPerSecond:30,animations:[{f:"2",t:0,d:0.96666664,i:"e",e:"1.000000",r:1,s:"0.000000",o:"91"},{f:"2",t:0.96666664,d:2.0333333,i:"e",e:"1.000000",s:"1.000000",o:"91"},{f:"2",t:3,d:1.0333333,i:"e",e:"0.000000",s:"1.000000",o:"91"}],identifier:"106",name:"circulo",duration:4.0333333}},onSceneKeyPressAction:{type:0},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"77":{o:"content-box",h:"pin3.png",x:"visible",a:577,q:"100% 100%",b:49,j:"absolute",r:"inline",c:60,k:"div",z:"27",d:86,e:"0.000000"},"92":{o:"content-box",h:"texto_cuadro.png",x:"visible",a:60,q:"100% 100%",b:383,j:"absolute",r:"inline",c:337,k:"div",z:"42",d:228,e:"0.000000"},"103":{o:"content-box",aD:{type:3,timelineIdentifier:"104"},h:"cuadro.png",x:"visible",a:599,q:"100% 100%",b:244,j:"absolute",r:"inline",c:22,k:"div",z:"47",d:19,e:"0.000000"},"78":{o:"content-box",h:"pin4.png",x:"visible",a:643,q:"100% 100%",b:41,j:"absolute",r:"inline",c:106,k:"div",z:"28",d:101,e:"0.000000"},"70":{o:"content-box",h:"cuadro3.png",x:"visible",a:766,q:"100% 100%",b:698,j:"absolute",r:"inline",c:120,k:"div",z:"21",d:55},"93":{o:"content-box",h:"texto_estrella.png",x:"visible",a:62,q:"100% 100%",b:386,j:"absolute",r:"inline",c:337,k:"div",z:"43",d:228,e:"-2.000000"},"79":{o:"content-box",h:"pin5.png",x:"visible",a:790,q:"100% 100%",b:48,j:"absolute",r:"inline",c:66,k:"div",z:"29",d:91,e:"0.000000"},"71":{o:"content-box",h:"cuadro4.png",x:"visible",a:907,q:"100% 100%",b:537,j:"absolute",r:"inline",c:74,k:"div",z:"22",d:32,e:"0.000000"},"94":{o:"content-box",h:"texto_luna.png",x:"visible",a:62,q:"100% 100%",b:385,j:"absolute",r:"inline",c:337,k:"div",z:"44",d:228,e:"0.000000"},"28":{o:"content-box",h:"logo.png",x:"visible",a:114,q:"100% 100%",b:62,j:"absolute",r:"inline",c:490,k:"div",z:"15",d:149,e:"0.000000"},"95":{o:"content-box",h:"texto_rombo.png",x:"visible",a:72,q:"100% 100%",b:385,j:"absolute",r:"inline",c:337,k:"div",z:"45",d:228,e:"0.000000"},"100":{o:"content-box",aD:{type:3,timelineIdentifier:"105"},h:"estrella.png",x:"visible",a:801,q:"100% 100%",b:236,j:"absolute",r:"inline",c:20,k:"div",z:"49",d:25,e:"0.000000"},"80":{o:"content-box",h:"pin6.png",x:"visible",a:865,q:"100% 100%",b:62,j:"absolute",r:"inline",c:60,k:"div",z:"30",d:80,e:"0.000000"},"73":{o:"content-box",h:"flecha.png",x:"visible",a:558,q:"100% 100%",b:313,j:"absolute",r:"inline",c:328,k:"div",z:"23",d:138,e:"0.000000"},"96":{o:"content-box",h:"texto_triangulo.png",x:"visible",a:60,q:"100% 100%",b:385,j:"absolute",r:"inline",c:337,k:"div",aA:{type:3,timelineIdentifier:"97"},d:228,z:"46",aP:"pointer",e:"0.000000"},"89":{o:"content-box",h:"texto1.png",x:"visible",a:72,q:"100% 100%",b:181,j:"absolute",r:"inline",c:298,k:"div",z:"39",d:33,e:"0.000000"},"4":{o:"content-box",h:"fondo-1.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"81":{o:"content-box",h:"pin7.png",x:"visible",a:934,q:"100% 100%",b:118,j:"absolute",r:"inline",c:74,k:"div",z:"31",d:116,e:"0.000000"},"67":{o:"content-box",h:"arco.png",x:"visible",a:480,q:"100% 100%",b:232,j:"absolute",r:"inline",c:480,k:"div",z:"18",d:250,e:"0.000000"},"101":{o:"content-box",aD:{type:3,timelineIdentifier:"107"},h:"luna.png",x:"visible",a:885,q:"100% 100%",b:282,j:"absolute",r:"inline",c:20,k:"div",z:"52",d:25,e:"0.000000"},"75":{o:"content-box",h:"pin1.png",x:"visible",a:405,q:"100% 100%",b:122,j:"absolute",r:"inline",c:91,k:"div",z:"25",d:108,e:"0.000000"},"68":{o:"content-box",h:"cuadro1.png",x:"visible",a:489,q:"100% 100%",b:689,j:"absolute",r:"inline",c:120,k:"div",z:"19",d:55},"30":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:62,j:"absolute",r:"inline",c:280,k:"div",z:"17",d:60,e:"0.000000"},"90":{o:"content-box",h:"texto2.png",x:"visible",a:72,q:"100% 100%",b:232,j:"absolute",r:"inline",c:298,k:"div",z:"40",d:133,e:"0.000000"},"98":{o:"content-box",aD:{type:3,timelineIdentifier:"106"},h:"circulo.png",x:"visible",a:840,q:"100% 100%",b:238,j:"absolute",r:"inline",c:19,k:"div",z:"51",d:22,e:"0.000000"},"76":{o:"content-box",h:"pin2.png",x:"visible",a:482,q:"100% 100%",b:56,j:"absolute",r:"inline",c:74,k:"div",z:"26",d:128,e:"0.000000"},"69":{o:"content-box",h:"cuadro2.png",x:"visible",a:626,q:"100% 100%",b:690,j:"absolute",r:"inline",c:120,k:"div",z:"20",d:71},"99":{o:"content-box",aD:{type:3,timelineIdentifier:"104"},h:"cuadro.png",x:"visible",a:961,q:"100% 100%",b:351,j:"absolute",r:"inline",c:22,k:"div",z:"53",d:19,e:"0.000000"},"91":{o:"content-box",h:"texto_circulo.png",x:"visible",a:62,q:"100% 100%",b:383,j:"absolute",r:"inline",c:337,k:"div",z:"41",d:228,e:"0.000000"},"102":{o:"content-box",h:"triangulo.png",aD:{type:3,timelineIdentifier:"97"},x:"visible",a:759,q:"100% 100%",b:237,j:"absolute",r:"inline",c:22,k:"div",z:"48",d:20,aP:"pointer",e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [{name:"untitledFunction",source:"function(hypeDocument, element, event) {\n\t/*\t\n\t\thypeDocument - access to the hype document API:\n\t\t\t\t\t\tMETHODS:\n\t\t\t\t\t\thypeDocument.documentName()\n\t\t\t\t\t\thypeDocument.sceneNames()\n\t\t\t\t\t\thypeDocument.currentSceneName()\n\t\t\t\t\t\thypeDocument.showSceneNamed(sceneName, optionalTransition)\n\t\t\t\t\t\thypeDocument.showNextScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.showPreviousScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.playTimelineNamed(timelineName)\n\t\t\t\t\t\thypeDocument.getElementById(id)\n\n\t\t\t\t\t\tMORE INFO:\n\t\t\t\t\t\thttp://tumultco.com/hype/documentation/javascript/\n\t\n\t\telement - DOMHTMLElement that triggered this function being called\n\t\tevent - event that triggered this function being called\n\t*/\n\t\n// Create the tooltips only on document load\r\n\n\t\n}",identifier:"15"},{name:"untitledFunction2",source:"function(hypeDocument, element, event) {\n\t/*\t\n\t\thypeDocument - access to the hype document API:\n\t\t\t\t\t\tMETHODS:\n\t\t\t\t\t\thypeDocument.documentName()\n\t\t\t\t\t\thypeDocument.sceneNames()\n\t\t\t\t\t\thypeDocument.currentSceneName()\n\t\t\t\t\t\thypeDocument.showSceneNamed(sceneName, optionalTransition)\n\t\t\t\t\t\thypeDocument.showNextScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.showPreviousScene(optionalTransition)\n\t\t\t\t\t\thypeDocument.playTimelineNamed(timelineName)\n\t\t\t\t\t\thypeDocument.getElementById(id)\n\n\t\t\t\t\t\tMORE INFO:\n\t\t\t\t\t\thttp://tumultco.com/hype/documentation/javascript/\n\t\n\t\telement - DOMHTMLElement that triggered this function being called\n\t\tevent - event that triggered this function being called\n\t*/\n\t\n\t\n}",identifier:"17"}];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("slide6_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

