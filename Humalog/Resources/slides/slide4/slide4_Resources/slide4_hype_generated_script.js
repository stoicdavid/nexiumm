//	HYPE.documents["slide4"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide4_Resources";
	var documentName = "slide4";
	var documentLoaderFilename = "slide4_hype_generated_script.js";

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

var scenes = [{onSceneLoadAction:{type:0},timelines:{"18_pressed":{framesPerSecond:30,animations:[],identifier:"18_pressed",name:"18_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"d",e:63,r:1,s:149,o:"28"},{f:"2",t:0.5,d:0.5,i:"c",e:207,r:1,s:490,o:"28"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:1,d:0.5,i:"a",e:379,r:1,s:495,o:"30"},{f:"2",t:1,d:0.5,i:"e",e:"1.000000",s:"1.000000",o:"28"},{f:"2",t:1.5,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"52"},{f:"2",t:1.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"58"},{f:"2",t:2,d:0.63333321,i:"c",e:256,r:1,s:174,o:"58"},{f:"2",t:2,d:0.63333321,i:"a",e:76,r:1,s:117,o:"58"},{f:"2",t:2,d:0.63333321,i:"b",e:198,r:1,s:207,o:"58"},{f:"2",t:2,d:0.63333321,i:"d",e:56,r:1,s:38,o:"58"},{f:"2",t:2.6333332,d:0.36666679,i:"c",e:192,s:256,o:"58"},{f:"2",t:2.6333332,d:0.36666679,i:"d",e:42,s:56,o:"58"},{f:"2",t:2.6333332,d:0.36666679,i:"a",e:108,s:76,o:"58"},{f:"2",t:2.6333332,d:0.36666679,i:"b",e:205,s:198,o:"58"},{f:"2",t:3,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"54"},{f:"2",t:3,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"59"},{f:"2",t:3.5333333,d:0.69999981,i:"c",e:239,r:1,s:147,o:"59"},{f:"2",t:3.5333333,d:0.69999981,i:"d",e:52,r:1,s:32,o:"59"},{f:"2",t:3.5333333,d:0.69999981,i:"b",e:260,r:1,s:270,o:"59"},{f:"2",t:3.5333333,d:0.69999981,i:"a",e:213,r:1,s:259,o:"59"},{f:"2",t:4.2333331,d:0.30000019,i:"a",e:255,s:213,o:"59"},{f:"2",t:4.2333331,d:0.30000019,i:"b",e:269,s:260,o:"59"},{f:"2",t:4.2333331,d:0.30000019,i:"c",e:155,s:239,o:"59"},{f:"2",t:4.2333331,d:0.30000019,i:"d",e:34,s:52,o:"59"},{f:"2",t:4.5333333,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"49"},{f:"2",t:4.5333333,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"56"},{f:"2",t:5.5333333,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"47"},{f:"2",t:5.5333333,d:0.23333311,i:"b",e:256,r:1,s:149,o:"46"},{f:"2",t:5.5333333,d:0.23333311,i:"e",e:"1.000000",r:1,s:"0.000000",o:"46"},{f:"2",t:5.5333333,d:0.23333311,i:"a",e:679,r:1,s:681,o:"46"},{f:"2",t:6.0333333,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"48"},{f:"2",t:6.0333333,d:0.4000001,i:"b",e:389,r:1,s:509,o:"48"},{f:"2",t:6.0333333,d:0.4000001,i:"a",e:620,r:1,s:620,o:"48"},{f:"2",t:6.4333334,d:0.5999999,i:"e",e:"1.000000",r:1,s:"0.000000",o:"57"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:7.0333333}},onSceneKeyPressAction:{type:0},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"57":{o:"content-box",h:"texto6.png",x:"visible",a:95,q:"100% 100%",b:462,j:"absolute",r:"inline",c:374,k:"div",z:"26",d:58,e:"0.000000"},"47":{o:"content-box",h:"grafica2.png",x:"visible",a:595,q:"100% 100%",b:335,j:"absolute",r:"inline",c:309,k:"div",z:"29",d:54,e:"0.000000"},"58":{o:"content-box",h:"texto2.png",x:"visible",a:117,q:"100% 100%",b:207,j:"absolute",r:"inline",c:174,k:"div",z:"21",d:38,e:"0.000000"},"4":{o:"content-box",h:"fondo-1.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"48":{o:"content-box",h:"grafica3.png",x:"visible",a:620,q:"100% 100%",b:509,j:"absolute",r:"inline",c:250,k:"div",z:"30",d:93,e:"0.000000"},"54":{o:"content-box",h:"texto3.png",x:"visible",a:47,q:"100% 100%",b:270,j:"absolute",r:"inline",c:470,k:"div",z:"23",d:64,e:"0.000000"},"59":{o:"content-box",h:"texto4.png",x:"visible",a:259,q:"100% 100%",b:270,j:"absolute",r:"inline",c:147,k:"div",z:"24",d:32,e:"0.000000"},"49":{o:"content-box",h:"hoja.png",x:"visible",a:539,q:"100% 100%",b:165,j:"absolute",r:"inline",c:424,k:"div",z:"27",d:361,e:"0.000000"},"28":{o:"content-box",h:"logo.png",x:"visible",a:114,q:"100% 100%",b:62,j:"absolute",r:"inline",c:490,k:"div",z:"15",d:149,e:"0.000000"},"30":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:62,j:"absolute",r:"inline",c:280,k:"div",z:"17",d:60,e:"0.000000"},"56":{o:"content-box",h:"texto5.png",x:"visible",a:95,q:"100% 100%",b:357,j:"absolute",r:"inline",c:374,k:"div",z:"25",d:24,e:"0.000000"},"52":{o:"content-box",h:"texto1.png",x:"visible",a:47,q:"100% 100%",b:180,j:"absolute",r:"inline",c:470,k:"div",z:"20",d:65,e:"0.000000"},"46":{o:"content-box",h:"grafica1.png",x:"visible",a:681,q:"100% 100%",b:149,j:"absolute",r:"inline",c:127,k:"div",z:"28",d:78,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide4_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

