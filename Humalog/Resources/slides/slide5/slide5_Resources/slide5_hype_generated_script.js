//	HYPE.documents["slide5"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide5_Resources";
	var documentName = "slide5";
	var documentLoaderFilename = "slide5_hype_generated_script.js";

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

var scenes = [{onSceneLoadAction:{type:0},timelines:{"18_pressed":{framesPerSecond:30,animations:[],identifier:"18_pressed",name:"18_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0,d:2.0333333,i:"b",e:453,r:1,s:445,o:"63"},{f:"2",t:0,d:2.0333333,i:"a",e:-234,r:1,s:-210,o:"63"},{f:"2",t:0,d:2.7,i:"c",e:248,r:1,s:240,o:"58"},{f:"2",t:0,d:2.7,i:"d",e:282,r:1,s:273,o:"58"},{f:"2",t:0,d:2.0333333,i:"e",e:"0.000000",r:1,s:"0.000000",o:"63"},{f:"2",t:0.5,d:0.5,i:"d",e:63,r:1,s:149,o:"28"},{f:"2",t:0.5,d:0.5,i:"c",e:207,r:1,s:490,o:"28"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1.0333333,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:1.0333333,d:0.5,i:"a",e:379,r:1,s:495,o:"30"},{f:"2",t:1.5333333,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"66"},{f:"2",t:2,d:0.5,i:"a",e:62,r:1,s:-65,o:"58"},{f:"2",t:2,d:0.5,i:"b",e:262,r:1,s:19,o:"58"},{f:"2",t:2,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"58"},{f:"2",t:2.0333333,d:0.23333335,i:"e",e:"1.000000",s:"0.000000",o:"63"},{f:"2",t:2.0333333,d:0.83333349,i:"b",e:260,s:453,o:"63"},{f:"2",t:2.0333333,d:0.83333349,i:"a",e:16,s:-234,o:"63"},{f:"2",t:2.5,d:0.26666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"59"},{f:"2",t:2.5,d:0.26666665,i:"a",e:257,r:1,s:334,o:"59"},{f:"2",t:2.5,d:0.26666665,i:"b",e:359,r:1,s:212,o:"59"},{f:"2",t:2.7,d:0.23333335,i:"c",e:336,s:248,o:"58"},{f:"2",t:2.7,d:0.23333335,i:"d",e:382,s:282,o:"58"},{f:"2",t:2.7666667,d:0.23333335,i:"e",e:"1.000000",r:1,s:"0.000000",o:"60"},{f:"2",t:2.7666667,d:0.23333335,i:"a",e:537,r:1,s:641,o:"60"},{f:"2",t:2.7666667,d:0.23333335,i:"b",e:128,r:1,s:21,o:"60"},{f:"2",t:2.8,d:0.66666675,i:"d",e:359,r:1,s:304,o:"59"},{f:"2",t:2.8,d:0.66666675,i:"c",e:296,r:1,s:250,o:"59"},{f:"2",t:2.8666668,d:0.69999981,i:"a",e:247,s:16,o:"63"},{f:"2",t:2.8666668,d:0.69999981,i:"b",e:334,s:260,o:"63"},{f:"2",t:2.9333334,d:0.39999986,i:"c",e:268,s:336,o:"58"},{f:"2",t:2.9333334,d:0.39999986,i:"d",e:305,s:382,o:"58"},{f:"2",t:3,d:1.3000002,i:"e",e:"1.000000",s:"1.000000",o:"60"},{f:"2",t:3,d:1.3000002,i:"a",e:537,s:537,o:"60"},{f:"2",t:3,d:1.3000002,i:"b",e:128,s:128,o:"60"},{f:"2",t:3,d:0.29999995,i:"e",e:"1.000000",r:1,s:"0.010490",o:"61"},{f:"2",t:3,d:0.29999995,i:"a",e:757,r:1,s:757,o:"61"},{f:"2",t:3,d:0.29999995,i:"b",e:164,r:1,s:23,o:"61"},{f:"2",t:3.3,d:1.2,i:"b",e:164.232,s:164,o:"61"},{f:"2",t:3.3,d:1.2,i:"a",e:757.261,s:757,o:"61"},{f:"2",t:3.4666667,d:0.80000019,i:"c",e:245,s:296,o:"59"},{f:"2",t:3.4666667,d:0.80000019,i:"d",e:297,s:359,o:"59"},{f:"2",t:3.5666666,d:0.66666651,i:"a",e:481,s:247,o:"63"},{f:"2",t:3.5666666,d:0.66666651,i:"b",e:310,s:334,o:"63"},{f:"2",t:4.2333331,d:0.4000001,i:"b",e:113,s:310,o:"63"},{f:"2",t:4.2333331,d:0.4000001,i:"a",e:497,s:481,o:"63"},{f:"2",t:4.3000002,d:0.33333302,i:"a",e:481,s:537,o:"60"},{f:"2",t:4.3000002,d:0.33333302,i:"b",e:62,s:128,o:"60"},{f:"2",t:4.3000002,d:0.33333302,i:"d",e:401,r:1,s:270,o:"60"},{f:"2",t:4.3000002,d:0.33333302,i:"c",e:343,r:1,s:231,o:"60"},{f:"2",t:4.5,d:0.5333333,i:"c",e:313,r:1,s:219,o:"61"},{f:"2",t:4.5,d:0.5333333,i:"d",e:380,r:1,s:266,o:"61"},{f:"2",t:4.5,d:0.5333333,i:"b",e:107,s:164.232,o:"61"},{f:"2",t:4.5,d:0.5333333,i:"a",e:710,s:757.261,o:"61"},{f:"2",t:4.6333332,d:0.4000001,i:"b",e:156,s:113,o:"63"},{f:"2",t:4.6333332,d:0.4000001,i:"a",e:706,s:497,o:"63"},{f:"2",t:4.6333332,d:0.36666679,i:"a",e:519,s:481,o:"60"},{f:"2",t:4.6333332,d:0.36666679,i:"b",e:107,s:62,o:"60"},{f:"2",t:4.6333332,d:0.36666679,i:"c",e:266,s:343,o:"60"},{f:"2",t:4.6333332,d:0.36666679,i:"d",e:311,s:401,o:"60"},{f:"2",t:5.0333333,d:0.4666667,i:"a",e:1040,s:706,o:"63"},{f:"2",t:5.0333333,d:0.4666667,i:"b",e:263,s:156,o:"63"},{f:"2",t:5.0333333,d:0.4000001,i:"a",e:755,s:710,o:"61"},{f:"2",t:5.0333333,d:0.4000001,i:"b",e:161,s:107,o:"61"},{f:"2",t:5.0333333,d:0.4000001,i:"c",e:223,s:313,o:"61"},{f:"2",t:5.0333333,d:0.4000001,i:"d",e:271,s:380,o:"61"},{f:"2",t:5.4333334,d:0.63333321,i:"e",e:"1.000000",r:1,s:"0.000000",o:"64"},{f:"2",t:5.5,d:0.5333333,i:"a",e:1018,s:1040,o:"63"},{f:"2",t:5.5,d:0.5333333,i:"b",e:769,s:263,o:"63"},{f:"2",t:6.0333333,d:0.73333311,i:"b",e:582,s:769,o:"63"},{f:"2",t:6.0333333,d:0.73333311,i:"a",e:752,s:1018,o:"63"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:6.7666664}},onSceneKeyPressAction:{type:0},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"60":{o:"content-box",h:"foto3.png",x:"visible",a:641,q:"100% 100%",b:21,j:"absolute",r:"inline",c:231,k:"div",z:"21",d:270,e:"0.000000"},"63":{o:"content-box",h:"lupa.png",x:"visible",a:-210,q:"100% 100%",b:445,j:"absolute",r:"inline",c:452,k:"div",z:"26",d:490,e:"0.000000"},"58":{o:"content-box",h:"foto1.png",x:"visible",a:-65,q:"100% 100%",b:19,j:"absolute",r:"inline",c:240,k:"div",z:"19",d:273,e:"0.000000"},"4":{o:"content-box",h:"fondo-1.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"61":{o:"content-box",h:"foto4.png",x:"visible",a:757,q:"100% 100%",b:23,j:"absolute",r:"inline",c:219,k:"div",z:"22",d:266,e:"0.010490"},"30":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:62,j:"absolute",r:"inline",c:280,k:"div",z:"17",d:60,e:"0.000000"},"64":{o:"content-box",h:"nota.png",x:"visible",a:559,q:"100% 100%",b:404,j:"absolute",r:"inline",c:327,k:"div",z:"24",d:265,e:"0.000000"},"59":{o:"content-box",h:"foto2.png",x:"visible",a:334,q:"100% 100%",b:212,j:"absolute",r:"inline",c:250,k:"div",z:"20",d:304,e:"0.000000"},"28":{o:"content-box",h:"logo.png",x:"visible",a:114,q:"100% 100%",b:62,j:"absolute",r:"inline",c:490,k:"div",z:"15",d:149,e:"0.000000"},"66":{o:"content-box",h:"texto1.png",x:"visible",a:76,q:"100% 100%",b:156,j:"absolute",r:"inline",c:405,k:"div",z:"18",d:88,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide5_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

