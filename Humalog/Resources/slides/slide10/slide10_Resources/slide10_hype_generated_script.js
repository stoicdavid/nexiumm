//	HYPE.documents["slide10"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide10_Resources";
	var documentName = "slide10";
	var documentLoaderFilename = "slide10_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"26"},{f:"2",t:0,d:0.5,i:"d",e:108,r:1,s:298,o:"26"},{f:"2",t:0,d:0.5,i:"c",e:255,r:1,s:703,o:"26"},{f:"2",t:1,d:0.29999995,i:"a",e:85,r:1,s:380,o:"26"},{f:"2",t:1,d:0.29999995,i:"b",e:54,r:1,s:283,o:"26"},{f:"2",t:1.3,d:0.36666679,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:1.3,d:0.36666679,i:"a",e:379,r:1,s:495,o:"4"},{f:"2",t:1.6666667,d:0.33333325,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1.6666667,d:0.33333325,i:"d",e:66,r:1,s:98,o:"28"},{f:"2",t:1.6666667,d:0.33333325,i:"c",e:628,r:1,s:932,o:"28"},{f:"2",t:1.9,d:0.50000012,i:"e",e:"1.000000",r:1,s:"1.000000",o:"2"},{f:"2",t:1.9,d:0.50000012,i:"d",e:668,r:1,s:668,o:"2"},{f:"2",t:1.9,d:0.50000012,i:"c",e:1024,r:1,s:1024,o:"2"},{f:"2",t:2.0666666,d:0.4000001,i:"c",e:576,r:1,s:352,o:"29"},{f:"2",t:2.0666666,d:0.4000001,i:"d",e:416,r:1,s:254,o:"29"},{f:"2",t:2.0666666,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"29"},{f:"2",t:2.4666667,d:0.4333334,i:"b",e:349,r:1,s:303,o:"30"},{f:"2",t:2.4666667,d:0.4333334,i:"e",e:"0.714161",r:1,s:"0.000000",o:"30"},{f:"2",t:2.9000001,d:0.43333316,i:"b",e:349,r:1,s:305,o:"31"},{f:"2",t:2.9000001,d:0.43333316,i:"e",e:"0.746722",r:1,s:"0.000000",o:"31"},{f:"2",t:3.3333333,d:0.36666679,i:"b",e:349,r:1,s:306,o:"32"},{f:"2",t:3.3333333,d:0.36666679,i:"e",e:"0.700175",r:1,s:"0.000000",o:"32"},{f:"2",t:3.7333333,d:0.39999986,i:"e",e:"0.723011",r:1,s:"0.000000",o:"33"},{f:"2",t:3.7333333,d:0.39999986,i:"b",e:349,r:1,s:303,o:"33"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:4.1333332}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"26":{o:"content-box",h:"logo.png",x:"visible",a:380,q:"100% 100%",b:283,j:"absolute",r:"inline",c:703,k:"div",z:"13",d:298,e:"0.000000"},"29":{o:"content-box",h:"grafica.png",x:"visible",a:223,q:"100% 100%",b:247,j:"absolute",r:"inline",c:352,k:"div",z:"15",d:254,e:"0.000000"},"4":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:53,j:"absolute",r:"inline",c:280,k:"div",z:"3",d:60,e:"0.000000"},"32":{o:"content-box",h:"barra3.png",x:"visible",a:468,q:"100% 100%",b:306,j:"absolute",r:"inline",c:66,k:"div",z:"18",d:149,e:"0.000000"},"30":{o:"content-box",h:"barra1.png",x:"visible",a:299,q:"100% 100%",b:303,j:"absolute",r:"inline",c:65,k:"div",z:"16",d:266,e:"0.000000"},"33":{o:"content-box",h:"barra4.png",x:"visible",a:534,q:"100% 100%",b:303,j:"absolute",r:"inline",c:66,k:"div",z:"19",d:115,e:"0.000000"},"28":{o:"content-box",h:"texto1.png",x:"visible",a:215,q:"100% 100%",b:172,j:"absolute",r:"inline",c:932,k:"div",z:"14",d:98,e:"0.000000"},"2":{o:"content-box",h:"fondo.jpg",x:"visible",a:-1,q:"100% 100%",b:2,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"1.000000"},"31":{o:"content-box",h:"barra2.png",x:"visible",a:365,q:"100% 100%",b:305,j:"absolute",r:"inline",c:65,k:"div",z:"17",d:204,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide10_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

