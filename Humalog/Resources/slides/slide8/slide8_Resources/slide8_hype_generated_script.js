//	HYPE.documents["slide8"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide8_Resources";
	var documentName = "slide8";
	var documentLoaderFilename = "slide8_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"d",e:63,r:1,s:149,o:"3"},{f:"2",t:0,d:0.5,i:"c",e:207,r:1,s:490,o:"3"},{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"a",e:379,r:1,s:495,o:"4"},{f:"2",t:0.86666667,d:0.56666672,i:"c",e:219,r:1,s:457,o:"12"},{f:"2",t:0.86666667,d:0.56666672,i:"f",e:"0deg",r:1,s:"-90deg",o:"12"},{f:"2",t:0.86666667,d:0.56666672,i:"d",e:35,r:1,s:73,o:"12"},{f:"2",t:0.86666667,d:0.56666672,i:"e",e:"1.000000",r:1,s:"0.000000",o:"12"},{f:"2",t:1,d:0.36666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"11"},{f:"2",t:1,d:0.36666667,i:"d",e:65,r:1,s:60,o:"11"},{f:"2",t:1,d:0.36666667,i:"c",e:500,r:1,s:458,o:"11"},{f:"2",t:1.1666666,d:0.60000002,i:"f",e:"0deg",r:1,s:"-90deg",o:"13"},{f:"2",t:1.2,d:0.5666666,i:"c",e:177,r:1,s:443,o:"13"},{f:"2",t:1.2,d:0.5666666,i:"d",e:36,r:1,s:90,o:"13"},{f:"2",t:1.2,d:0.5666666,i:"e",e:"1.000000",r:1,s:"0.000000",o:"13"},{f:"2",t:1.9,d:0.50000012,i:"e",e:"1.000000",r:1,s:"1.000000",o:"2"},{f:"2",t:1.9,d:0.50000012,i:"d",e:668,r:1,s:668,o:"2"},{f:"2",t:1.9,d:0.50000012,i:"c",e:1024,r:1,s:1024,o:"2"},{f:"2",t:2.4000001,d:0.5666666,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"},{f:"2",t:2.4000001,d:0.5666666,i:"d",e:378,r:1,s:565,o:"14"},{f:"2",t:2.4000001,d:0.5666666,i:"c",e:307,r:1,s:459,o:"14"},{f:"2",t:2.4000001,d:0.5666666,i:"f",e:"0deg",r:1,s:"-30deg",o:"14"},{f:"2",t:2.9666667,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"16"},{f:"2",t:2.9666667,d:0.5333333,i:"d",e:50,r:1,s:122,o:"16"},{f:"2",t:2.9666667,d:0.5333333,i:"c",e:42,r:1,s:102,o:"16"},{f:"2",t:2.9666667,d:0.5333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"15"},{f:"2",t:2.9666667,d:0.5333333,i:"d",e:61,r:1,s:117,o:"15"},{f:"2",t:2.9666667,d:0.5333333,i:"c",e:416,r:1,s:798,o:"15"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:3.5}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"13":{o:"content-box",h:"texto3.png",x:"visible",a:81,q:"100% 100%",b:222,j:"absolute",r:"inline",c:443,k:"div",z:"6",d:90,aY:"2",e:"0.000000",f:"-90deg"},"3":{o:"content-box",h:"logo.png",x:"visible",a:98,q:"100% 100%",b:53,j:"absolute",r:"inline",c:490,k:"div",z:"2",d:149,e:"0.000000"},"16":{o:"content-box",h:"pin.png",x:"visible",a:519,q:"100% 100%",b:411,j:"absolute",r:"inline",c:102,k:"div",z:"9",d:122,e:"0.000000"},"11":{o:"content-box",h:"texto1.png",x:"visible",a:80,q:"100% 100%",b:191,j:"absolute",r:"inline",c:458,k:"div",z:"4",d:60,e:"0.000000"},"4":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:53,j:"absolute",r:"inline",c:280,k:"div",z:"3",d:60,e:"0.000000"},"14":{o:"content-box",h:"foto1.png",x:"visible",a:170,q:"100% 100%",b:269,j:"absolute",r:"inline",c:459,k:"div",z:"7",d:565,aY:"1",e:"0.000000",f:"-30deg"},"12":{o:"content-box",h:"texto2.png",x:"visible",a:313,q:"100% 100%",b:191,j:"absolute",r:"inline",c:457,k:"div",z:"5",d:73,aY:"1",e:"0.000000",f:"-90deg"},"15":{o:"content-box",h:"texto4.png",x:"visible",a:549,q:"100% 100%",b:480,j:"absolute",r:"inline",c:798,k:"div",z:"8",d:117,e:"0.000000"},"2":{o:"content-box",h:"fondo.jpg",x:"visible",a:-1,q:"100% 100%",b:2,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"1.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide8_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

