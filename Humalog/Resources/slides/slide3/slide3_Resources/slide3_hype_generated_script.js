//	HYPE.documents["slide3"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide3_Resources";
	var documentName = "slide3";
	var documentLoaderFilename = "slide3_hype_generated_script.js";

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

var scenes = [{onSceneLoadAction:{type:0},timelines:{"18_pressed":{framesPerSecond:30,animations:[],identifier:"18_pressed",name:"18_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"d",e:63,r:1,s:149,o:"28"},{f:"2",t:0.5,d:0.5,i:"c",e:207,r:1,s:490,o:"28"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1.0333333,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:1.0333333,d:0.5,i:"a",e:379,r:1,s:495,o:"30"},{f:"2",t:1.5333333,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"40"},{f:"2",t:1.9666667,d:0.76666665,i:"e",e:"1.000000",r:1,s:"0.000000",o:"36"},{f:"2",t:2.6666667,d:0.89999986,i:"e",e:"1.000000",r:1,s:"0.000000",o:"37"},{f:"2",t:3.5,d:0.76666689,i:"e",e:"1.000000",r:1,s:"0.000000",o:"38"},{f:"2",t:4.2666669,d:0.33333302,i:"e",e:"1.000000",r:1,s:"0.000000",o:"39"},{f:"2",t:4.4000001,d:3.3333335,i:"a",e:621,r:1,s:621,o:"45"},{f:"2",t:4.4666667,d:1.0666666,i:"c",e:367,r:1,s:729,o:"39"},{f:"2",t:4.4666667,d:1.0666666,i:"d",e:164,r:1,s:326,o:"39"},{f:"2",t:5.5333333,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"43"},{f:"2",t:5.5666666,d:0.5333333,i:"b",e:221,r:1,s:125,o:"43"},{f:"2",t:5.5666666,d:0.5,i:"a",e:579,r:1,s:579,o:"43"},{f:"2",t:6.0999999,d:0.30000019,i:"e",e:"1.000000",r:1,s:"0.000000",o:"44"},{f:"2",t:6.0999999,d:0.5999999,i:"b",e:301,r:1,s:198,o:"44"},{f:"2",t:6.0999999,d:0.5999999,i:"a",e:577,r:1,s:579,o:"44"},{f:"2",t:6.6999998,d:1.0333338,i:"b",e:508,r:1,s:380,o:"45"},{f:"2",t:6.6999998,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"45"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.7333336}},onSceneKeyPressAction:{type:0},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"39":{o:"content-box",h:"barra4.png",x:"visible",a:130,q:"100% 100%",b:233,j:"absolute",r:"inline",c:729,k:"div",z:"22",d:326,e:"0.000000"},"37":{o:"content-box",w:"",h:"barra2.png",x:"visible",a:130,q:"100% 100%",b:233,j:"absolute",r:"inline",c:359,k:"div",z:"20",d:122,e:"0.000000"},"45":{o:"content-box",h:"texto3.png",x:"visible",a:621,q:"100% 100%",b:380,j:"absolute",r:"inline",c:378,k:"div",z:"27",d:51,e:"0.000000"},"4":{o:"content-box",h:"fondo-1.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"40":{o:"content-box",w:"",h:"grafica.png",x:"visible",a:68,q:"100% 100%",b:180,j:"absolute",r:"inline",c:495,k:"div",z:"18",d:399,e:"0.000000"},"30":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:62,j:"absolute",r:"inline",c:280,k:"div",z:"17",d:60,e:"0.000000"},"38":{o:"content-box",h:"barra3.png",x:"visible",a:132,q:"100% 100%",b:233,j:"absolute",r:"inline",c:363,k:"div",z:"21",d:138,e:"0.000000"},"43":{o:"content-box",h:"texto1.png",x:"visible",a:579,q:"100% 100%",b:125,j:"absolute",r:"inline",c:431,k:"div",z:"25",d:70,e:"0.000000"},"28":{o:"content-box",h:"logo.png",x:"visible",a:114,q:"100% 100%",b:62,j:"absolute",r:"inline",c:490,k:"div",z:"15",d:149,e:"0.000000"},"36":{o:"content-box",h:"barra1.png",x:"visible",a:130,q:"100% 100%",b:233,j:"absolute",r:"inline",c:355,k:"div",z:"19",d:105,e:"0.000000"},"44":{o:"content-box",h:"texto2.png",x:"visible",a:579,q:"100% 100%",b:198,j:"absolute",r:"inline",c:431,k:"div",z:"26",d:102,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide3_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

