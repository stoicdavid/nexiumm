//	HYPE.documents["slide2"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide2_Resources";
	var documentName = "slide2";
	var documentLoaderFilename = "slide2_hype_generated_script.js";

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

var scenes = [{onSceneLoadAction:{type:0},timelines:{"18_pressed":{framesPerSecond:30,animations:[],identifier:"18_pressed",name:"18_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0,d:1.5333333,i:"e",e:"0.000000",r:1,s:"0.000000",o:"31"},{f:"2",t:0,d:1.7666667,i:"e",e:"0.000000",r:1,s:"0.000000",o:"32"},{f:"2",t:0,d:2.0333333,i:"e",e:"0.000000",r:1,s:"0.000000",o:"33"},{f:"2",t:0,d:2.3333333,i:"e",e:"0.000000",r:1,s:"0.000000",o:"34"},{f:"2",t:0,d:5,i:"e",e:"0.000000",r:1,s:"0.000000",o:"25"},{f:"2",t:0.5,d:0.5,i:"d",e:63,r:1,s:149,o:"28"},{f:"2",t:0.5,d:0.5,i:"c",e:207,r:1,s:490,o:"28"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:1,d:0.5,i:"a",e:379,r:1,s:495,o:"30"},{f:"2",t:1.5333333,d:0.23333335,i:"e",e:"1.000000",s:"0.000000",o:"31"},{f:"2",t:1.7666667,d:0.26666665,i:"e",e:"1.000000",s:"0.000000",o:"32"},{f:"2",t:2.0333333,d:0.29999995,i:"e",e:"1.000000",s:"0.000000",o:"33"},{f:"2",t:2.3333333,d:0.36666679,i:"e",e:"1.000000",s:"0.000000",o:"34"},{f:"2",t:2.5999999,d:0.16666675,i:"e",e:"1.000000",r:1,s:"0.000000",o:"29"},{f:"2",t:2.7,d:0.5666666,i:"a",e:480,r:1,s:277,o:"29"},{f:"2",t:2.7,d:0.5666666,i:"d",e:460,r:1,s:646,o:"29"},{f:"2",t:2.7,d:0.5666666,i:"c",e:503,r:1,s:706,o:"29"},{f:"2",t:3.0666666,d:0.20000005,i:"e",e:"1.000000",r:1,s:"0.000000",o:"26"},{f:"2",t:3.2666667,d:0.4666667,i:"a",e:841,r:1,s:873,o:"26"},{f:"2",t:3.2666667,d:0.4666667,i:"b",e:356,r:1,s:183,o:"26"},{f:"2",t:3.7333333,d:0.33333325,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"2",t:4.0666666,d:0.30000019,i:"e",e:"1.000000",r:1,s:"0.000000",o:"24"},{f:"2",t:4.1999998,d:0.16666698,i:"e",e:"1.000000",r:1,s:"0.000000",o:"35"},{f:"2",t:4.3666668,d:0.33333302,i:"a",e:742,r:1,s:898,o:"35"},{f:"2",t:4.3666668,d:0.33333302,i:"b",e:351,r:1,s:376,o:"35"},{f:"2",t:4.3666668,d:0.33333302,i:"e",e:"1.000000",r:1,s:"0.000000",o:"27"},{f:"2",t:4.6999998,d:0.30000019,i:"a",e:685,r:1,s:695,o:"27"},{f:"2",t:4.6999998,d:0.30000019,i:"b",e:361,r:1,s:270,o:"27"},{f:"2",t:5,d:0.5333333,i:"e",e:"1.000000",s:"0.000000",o:"25"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:5.5333333}},onSceneKeyPressAction:{type:0},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"31":{o:"content-box",h:"texto1.png",x:"visible",a:77,q:"100% 100%",b:236,j:"absolute",r:"inline",c:400,k:"div",z:"17",d:31,e:"0.000000"},"26":{o:"content-box",h:"flecha1.png",x:"visible",a:873,q:"100% 100%",b:183,j:"absolute",r:"inline",c:36,k:"div",z:"22",d:136,e:"0.000000"},"32":{o:"content-box",h:"texto2.png",x:"visible",a:77,q:"100% 100%",b:296,j:"absolute",r:"inline",c:400,k:"div",z:"18",d:75,e:"0.000000"},"4":{o:"content-box",h:"fondo-1.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"27":{o:"content-box",w:"",h:"flecha2.png",x:"visible",a:695,q:"100% 100%",b:270,j:"absolute",r:"inline",c:26,k:"div",z:"26",d:75,e:"0.000000"},"33":{o:"content-box",h:"texto3.png",x:"visible",a:77,q:"100% 100%",b:399,j:"absolute",r:"inline",c:400,k:"div",z:"19",d:59,e:"0.000000"},"23":{o:"content-box",h:"dato1.png",x:"visible",a:751,q:"100% 100%",b:267,j:"absolute",r:"inline",c:183,k:"div",z:"23",d:81,e:"0.000000"},"34":{o:"content-box",h:"texto4.png",x:"visible",a:77,q:"100% 100%",b:483,j:"absolute",r:"inline",c:400,k:"div",z:"20",d:38,e:"0.000000"},"28":{o:"content-box",h:"logo.png",x:"visible",a:114,q:"100% 100%",b:62,j:"absolute",r:"inline",c:490,k:"div",z:"15",d:149,e:"0.000000"},"24":{o:"content-box",h:"dato2.png",x:"visible",a:721,q:"100% 100%",b:491,j:"absolute",r:"inline",c:204,k:"div",z:"24",d:62,e:"0.000000"},"30":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:62,j:"absolute",r:"inline",c:280,k:"div",z:"16",d:60,e:"0.000000"},"29":{o:"content-box",h:"nota.png",x:"visible",a:277,q:"100% 100%",b:155,j:"absolute",r:"inline",c:706,k:"div",z:"21",d:646,e:"0.000000"},"35":{o:"content-box",h:"triangulo.png",x:"visible",a:898,q:"100% 100%",b:376,j:"absolute",r:"inline",c:101,k:"div",z:"25",d:132,e:"0.000000"},"25":{o:"content-box",w:"",h:"dato3.png",x:"visible",a:531,q:"100% 100%",b:334,j:"absolute",r:"inline",c:145,k:"div",z:"27",d:99,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide2_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

