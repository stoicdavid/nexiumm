//	HYPE.documents["slide9"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide9_Resources";
	var documentName = "slide9";
	var documentLoaderFilename = "slide9_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"d",e:63,r:1,s:149,o:"3"},{f:"2",t:0,d:0.5,i:"c",e:207,r:1,s:490,o:"3"},{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"a",e:379,r:1,s:495,o:"4"},{f:"2",t:1,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"17"},{f:"2",t:1,d:0.5,i:"d",e:200,r:1,s:246,o:"17"},{f:"2",t:1,d:0.5,i:"c",e:300,r:1,s:369,o:"17"},{f:"2",t:1.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"18"},{f:"2",t:1.9,d:0.50000012,i:"e",e:"1.000000",r:1,s:"1.000000",o:"2"},{f:"2",t:1.9,d:0.50000012,i:"d",e:668,r:1,s:668,o:"2"},{f:"2",t:1.9,d:0.50000012,i:"c",e:1024,r:1,s:1024,o:"2"},{f:"2",t:1.9666667,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"19"},{f:"2",t:1.9666667,d:0.4333334,i:"d",e:25,r:1,s:49,o:"19"},{f:"2",t:1.9666667,d:0.4333334,i:"c",e:295,r:1,s:578,o:"19"},{f:"2",t:2.4000001,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"20"},{f:"2",t:2.4000001,d:0.5,i:"a",e:478,r:1,s:512,o:"20"},{f:"2",t:2.9666667,d:0.4333334,i:"a",e:478,r:1,s:526,o:"21"},{f:"2",t:2.9666667,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:3.4000001,d:0.4666667,i:"a",e:479,r:1,s:544,o:"22"},{f:"2",t:3.4000001,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"22"},{f:"2",t:3.8666668,d:0.5,i:"a",e:478,r:1,s:559,o:"23"},{f:"2",t:3.8666668,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"23"},{f:"2",t:4.3666668,d:0.4666667,i:"a",e:478,r:1,s:559,o:"24"},{f:"2",t:4.3666668,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"24"},{f:"2",t:4.8333335,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"25"},{f:"2",t:4.8333335,d:0.4666667,i:"a",e:478,r:1,s:552,o:"25"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:5.3000002}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"25":{o:"content-box",h:"texto9.png",x:"visible",a:552,q:"100% 100%",b:589,j:"absolute",r:"inline",c:464,k:"div",z:"12",d:26,e:"0.000000"},"2":{o:"content-box",h:"fondo.jpg",x:"visible",a:-1,q:"100% 100%",b:2,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"1.000000"},"21":{o:"content-box",h:"texto5.png",x:"visible",a:526,q:"100% 100%",b:306,j:"absolute",r:"inline",c:464,k:"div",z:"8",d:55,e:"0.000000"},"3":{o:"content-box",h:"logo.png",x:"visible",a:98,q:"100% 100%",b:53,j:"absolute",r:"inline",c:490,k:"div",z:"2",d:149,e:"0.000000"},"4":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:53,j:"absolute",r:"inline",c:280,k:"div",z:"3",d:60,e:"0.000000"},"22":{o:"content-box",h:"texto6.png",x:"visible",a:544,q:"100% 100%",b:373,j:"absolute",r:"inline",c:464,k:"div",z:"9",d:54,e:"0.000000"},"17":{o:"content-box",h:"texto1.png",x:"visible",a:84,q:"100% 100%",b:148,j:"absolute",r:"inline",c:369,k:"div",z:"4",d:246,e:"0.000000"},"23":{o:"content-box",h:"texto7.png",x:"visible",a:559,q:"100% 100%",b:443,j:"absolute",r:"inline",c:464,k:"div",z:"10",d:57,e:"0.000000"},"18":{o:"content-box",h:"hoja.gif",x:"visible",a:446,q:"100% 100%",b:148,j:"absolute",r:"inline",c:528,k:"div",z:"5",d:522,e:"0.000000"},"24":{o:"content-box",h:"texto8.png",x:"visible",a:559,q:"100% 100%",b:516,j:"absolute",r:"inline",c:464,k:"div",z:"11",d:53,e:"0.000000"},"20":{o:"content-box",h:"texto4.png",x:"visible",a:512,q:"100% 100%",b:232,j:"absolute",r:"inline",c:464,k:"div",z:"7",d:55,e:"0.000000"},"19":{o:"content-box",h:"texto3.png",x:"visible",a:576,q:"100% 100%",b:185,j:"absolute",r:"inline",c:578,k:"div",z:"6",d:49,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide9_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

