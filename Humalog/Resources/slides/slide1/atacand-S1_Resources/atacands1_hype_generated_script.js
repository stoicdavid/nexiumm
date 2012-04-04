//	HYPE.documents["atacand-S1"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "atacand-S1_Resources";
	var documentName = "atacand-S1";
	var documentLoaderFilename = "atacands1_hype_generated_script.js";

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

var scenes = [{onSceneLoadAction:{type:0},timelines:{"18_pressed":{framesPerSecond:30,animations:[],identifier:"18_pressed",name:"18_pressed",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"20"},{f:"2",t:1,d:0.5333333,i:"e",e:"0.961538",r:1,s:"0.031469",o:"19"},{f:"2",t:1,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:1.5,d:0.23333335,i:"a",e:662,r:1,s:671,o:"21"},{f:"2",t:1.5,d:0.23333335,i:"c",e:74,r:1,s:56,o:"21"},{f:"2",t:1.5,d:0.23333335,i:"d",e:90,r:1,s:68,o:"21"},{f:"2",t:1.5,d:0.23333335,i:"b",e:226,r:1,s:237,o:"21"},{f:"2",t:1.7333333,d:0.23333335,i:"c",e:61,s:74,o:"21"},{f:"2",t:1.7333333,d:0.23333335,i:"b",e:234,s:226,o:"21"},{f:"2",t:1.7333333,d:0.23333335,i:"a",e:668,s:662,o:"21"},{f:"2",t:1.7333333,d:0.23333335,i:"d",e:74,s:90,o:"21"},{f:"2",t:1.9666667,d:0.26666665,i:"b",e:225,s:234,o:"21"},{f:"2",t:1.9666667,d:0.26666665,i:"c",e:76,s:61,o:"21"},{f:"2",t:1.9666667,d:0.26666665,i:"d",e:92,s:74,o:"21"},{f:"2",t:1.9666667,d:0.26666665,i:"a",e:661,s:668,o:"21"},{f:"2",t:2.2,d:0.20000005,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:2.2333333,d:0.26666665,i:"c",e:61,s:76,o:"21"},{f:"2",t:2.2333333,d:0.26666665,i:"b",e:234,s:225,o:"21"},{f:"2",t:2.2333333,d:0.26666665,i:"a",e:668,s:661,o:"21"},{f:"2",t:2.2333333,d:0.26666665,i:"d",e:74,s:92,o:"21"},{f:"2",t:2.5,d:0.26666665,i:"c",e:71,s:61,o:"21"},{f:"2",t:2.5,d:0.26666665,i:"a",e:663,s:668,o:"21"},{f:"2",t:2.5,d:0.26666665,i:"b",e:228,s:234,o:"21"},{f:"2",t:2.5,d:0.26666665,i:"d",e:86,s:74,o:"21"},{f:"2",t:2.7666667,d:0.23333335,i:"d",e:67,s:86,o:"21"},{f:"2",t:2.7666667,d:0.26666665,i:"b",e:237,s:228,o:"21"},{f:"2",t:2.7666667,d:0.26666665,i:"a",e:671,s:663,o:"21"},{f:"2",t:2.7666667,d:0.23333335,i:"c",e:55,s:71,o:"21"},{f:"2",t:3,d:0.26666665,i:"c",e:71,s:55,o:"21"},{f:"2",t:3,d:0.26666665,i:"d",e:86,s:67,o:"21"},{f:"2",t:3.0333333,d:0.23333335,i:"b",e:227,s:237,o:"21"},{f:"2",t:3.0333333,d:0.23333335,i:"a",e:663,s:671,o:"21"},{f:"2",t:3.2666667,d:0.23333335,i:"b",e:235,s:227,o:"21"},{f:"2",t:3.2666667,d:0.23333335,i:"d",e:69,s:86,o:"21"},{f:"2",t:3.2666667,d:0.23333335,i:"c",e:57,s:71,o:"21"},{f:"2",t:3.2666667,d:0.23333335,i:"a",e:670,s:663,o:"21"},{f:"2",t:3.5,d:0.23333335,i:"b",e:228,s:235,o:"21"},{f:"2",t:3.5,d:0.23333335,i:"d",e:83,s:69,o:"21"},{f:"2",t:3.5,d:0.23333335,i:"c",e:68,s:57,o:"21"},{f:"2",t:3.5,d:0.23333335,i:"a",e:664,s:670,o:"21"},{f:"2",t:3.7333333,d:0.26666665,i:"a",e:669,s:664,o:"21"},{f:"2",t:3.7333333,d:0.26666665,i:"b",e:234,s:228,o:"21"},{f:"2",t:3.7333333,d:0.26666665,i:"d",e:70,s:83,o:"21"},{f:"2",t:3.7333333,d:0.26666665,i:"c",e:57,s:68,o:"21"},{f:"2",t:3.8333333,d:0.39999986,i:"e",e:"1.000000",r:1,s:"0.000000",o:"22"},{f:"2",t:3.8666668,d:0.23333311,i:"b",e:-43,r:1,s:-43,o:"22"},{f:"2",t:3.8666668,d:0.23333311,i:"a",e:542,r:1,s:542,o:"22"},{f:"2",t:4,d:0.26666689,i:"a",e:662,s:669,o:"21"},{f:"2",t:4,d:0.26666689,i:"b",e:225,s:234,o:"21"},{f:"2",t:4,d:0.26666689,i:"c",e:71,s:57,o:"21"},{f:"2",t:4,d:0.26666689,i:"d",e:87,s:70,o:"21"},{f:"2",t:4.0999999,d:0.86666679,i:"a",e:685,s:542,o:"22"},{f:"2",t:4.0999999,d:0.86666679,i:"b",e:223,s:-43,o:"22"},{f:"2",t:4.2666669,d:0.23333311,i:"a",e:669,s:662,o:"21"},{f:"2",t:4.2666669,d:0.23333311,i:"b",e:233,s:225,o:"21"},{f:"2",t:4.2666669,d:0.23333311,i:"c",e:57,s:71,o:"21"},{f:"2",t:4.2666669,d:0.23333311,i:"d",e:70,s:87,o:"21"},{f:"2",t:4.5,d:0.26666641,i:"c",e:70,s:57,o:"21"},{f:"2",t:4.5,d:0.26666641,i:"b",e:225,s:233,o:"21"},{f:"2",t:4.5,d:0.26666641,i:"d",e:85,s:70,o:"21"},{f:"2",t:4.5,d:0.26666641,i:"a",e:663,s:669,o:"21"},{f:"2",t:4.7666664,d:0.23333359,i:"a",e:667,s:663,o:"21"},{f:"2",t:4.7666664,d:0.23333359,i:"b",e:230,s:225,o:"21"},{f:"2",t:4.7666664,d:0.23333359,i:"c",e:61,s:70,o:"21"},{f:"2",t:4.7666664,d:0.23333359,i:"d",e:74,s:85,o:"21"},{f:"2",t:4.9666667,d:0.23333311,i:"e",e:"1.000000",r:1,s:"0.000000",o:"8"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:5.5333333}},onSceneKeyPressAction:{type:0},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"7":{p:"no-repeat",c:288,q:"100% 100%",d:175,r:"inline",e:"0.000000",aW:"0.000000",f:"0deg",aP:"pointer",h:"typewriter.gif",i:"texto1",w:"",aY:"1",j:"absolute",x:"visible",aA:{type:3},k:"div",z:"12",a:106,o:"content-box",b:245},"21":{o:"content-box",h:"corazon.png",x:"visible",a:671,q:"100% 100%",b:237,j:"absolute",r:"inline",c:56,k:"div",z:"11",d:68,e:"0.000000"},"8":{o:"content-box",h:"lupa.gif",p:"no-repeat",x:"visible",a:577,q:"100% 100%",b:412,j:"absolute",r:"inline",c:361,k:"div",z:"13",d:256,aY:"1",e:"0.000000",f:"0deg"},"4":{o:"content-box",h:"fondo.jpg",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"0.000000"},"19":{o:"content-box",h:"humano.png",x:"visible",a:555,q:"100% 100%",b:41,j:"absolute",r:"inline",c:281,k:"div",z:"10",d:627,e:"0.031469"},"22":{o:"content-box",h:"pin_corazon.png",x:"visible",a:542,q:"100% 100%",b:-43,j:"absolute",r:"inline",c:35,k:"div",z:"14",d:43,e:"0.000000"},"20":{o:"content-box",h:"nota1.png",x:"visible",a:58,q:"100% 100%",b:185,j:"absolute",r:"inline",c:384,k:"div",z:"2",d:304,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("atacands1_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

