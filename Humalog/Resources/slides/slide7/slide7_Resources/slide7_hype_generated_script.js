//	HYPE.documents["slide7"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide7_Resources";
	var documentName = "slide7";
	var documentLoaderFilename = "slide7_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"d",e:63,r:1,s:149,o:"3"},{f:"2",t:0,d:0.5,i:"c",e:207,r:1,s:490,o:"3"},{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"a",e:379,r:1,s:495,o:"4"},{f:"2",t:1.1,d:0.39999998,i:"d",e:521,r:1,s:645,o:"5"},{f:"2",t:1.1,d:0.39999998,i:"c",e:588,r:1,s:728,o:"5"},{f:"2",t:1.1,d:0.39999998,i:"e",e:"1.000000",r:1,s:"0.000000",o:"5"},{f:"2",t:1.5333333,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"7"},{f:"2",t:1.5333333,d:0.4666667,i:"d",e:203,r:1,s:369,o:"7"},{f:"2",t:1.5333333,d:0.4666667,i:"c",e:208,r:1,s:378,o:"7"},{f:"2",t:1.9666667,d:0.16666675,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:2.1333334}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"3":{o:"content-box",h:"logo.png",x:"visible",a:98,q:"100% 100%",b:53,j:"absolute",r:"inline",c:490,k:"div",z:"2",d:149,e:"0.000000"},"5":{o:"content-box",h:"cuadro.png",x:"visible",a:85,q:"100% 100%",b:132,j:"absolute",r:"inline",c:728,k:"div",z:"4",d:645,e:"0.000000"},"4":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:53,j:"absolute",r:"inline",c:280,k:"div",z:"3",d:60,e:"0.000000"},"2":{o:"content-box",h:"fondo.jpg",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668},"9":{o:"content-box",h:"lupa.gif",x:"visible",a:650,q:"100% 100%",b:387,j:"absolute",r:"inline",c:398,k:"div",z:"6",d:282,e:"0.000000"},"7":{o:"content-box",h:"nota1.png",x:"visible",a:641,q:"100% 100%",b:190,j:"absolute",r:"inline",c:378,k:"div",z:"5",d:369,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
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
	hypeDoc.setMainContentContainerID("slide7_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

