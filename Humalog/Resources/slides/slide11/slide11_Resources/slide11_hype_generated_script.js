//	HYPE.documents["slide11"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide11_Resources";
	var documentName = "slide11";
	var documentLoaderFilename = "slide11_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"d",e:63,r:1,s:149,o:"3"},{f:"2",t:0,d:0.5,i:"c",e:207,r:1,s:490,o:"3"},{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:0.5,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"4"},{f:"2",t:0.5,d:0.5,i:"a",e:379,r:1,s:495,o:"4"},{f:"2",t:1,d:0.39999998,i:"e",e:"1.000000",r:1,s:"0.000000",o:"26"},{f:"2",t:1,d:0.39999998,i:"a",e:91,r:1,s:166,o:"26"},{f:"2",t:1.4,d:0.4666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"27"},{f:"2",t:1.4,d:0.4666667,i:"b",e:160,r:1,s:124,o:"27"},{f:"2",t:1.8666667,d:0.39999998,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1.8666667,d:0.39999998,i:"e",e:"1.000000",r:1,s:"0.000000",o:"29"},{f:"2",t:1.8666667,d:0.39999998,i:"f",e:"0deg",r:1,s:"-90deg",o:"28"},{f:"2",t:1.8666667,d:0.39999998,i:"f",e:"0deg",r:1,s:"-90deg",o:"29"},{f:"2",t:1.9,d:0.50000012,i:"e",e:"1.000000",r:1,s:"1.000000",o:"2"},{f:"2",t:1.9,d:0.50000012,i:"d",e:668,r:1,s:668,o:"2"},{f:"2",t:1.9,d:0.50000012,i:"c",e:1024,r:1,s:1024,o:"2"},{f:"2",t:2.2666667,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:2.2666667,d:0.4333334,i:"d",e:292,r:1,s:380,o:"30"},{f:"2",t:2.2666667,d:0.4333334,i:"c",e:519,r:1,s:675,o:"30"},{f:"2",t:2.7,d:0.29999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"32"},{f:"2",t:2.7,d:0.29999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"31"},{f:"2",t:2.7,d:0.29999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"31"},{f:"2",t:2.7,d:0.29999995,i:"f",e:"0deg",r:1,s:"-90deg",o:"32"},{f:"2",t:3,d:0.33333325,i:"e",e:"1.000000",r:1,s:"0.000000",o:"33"},{f:"2",t:3,d:0.33333325,i:"b",e:538,r:1,s:499,o:"33"},{f:"2",t:3.3333333,d:0.4333334,i:"e",e:"1.000000",r:1,s:"0.000000",o:"34"},{f:"2",t:3.3333333,d:0.4333334,i:"b",e:600,r:1,s:556,o:"34"},{f:"2",t:3.7666667,d:0.36666656,i:"e",e:"1.000000",r:1,s:"0.000000",o:"35"},{f:"2",t:3.7666667,d:0.36666656,i:"d",e:225,r:1,s:114,o:"35"},{f:"2",t:3.7666667,d:0.36666656,i:"c",e:218,r:1,s:110,o:"35"},{f:"2",t:4.1333332,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"36"},{f:"2",t:4.1333332,d:0.4000001,i:"d",e:221,r:1,s:120,o:"36"},{f:"2",t:4.1333332,d:0.4000001,i:"c",e:218,r:1,s:118,o:"36"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:4.5333333}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"36":{o:"content-box",h:"nota2.png",x:"visible",a:782,q:"100% 100%",b:433,j:"absolute",r:"inline",c:118,k:"div",z:"5",d:120,e:"0.000000"},"2":{o:"content-box",h:"fondo.jpg",x:"visible",a:-3,q:"100% 100%",b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"1.000000"},"26":{o:"content-box",h:"texto1.png",x:"visible",a:166,q:"100% 100%",b:165,j:"absolute",r:"inline",c:278,k:"div",z:"4",d:28,e:"0.000000"},"3":{o:"content-box",h:"logo.png",x:"visible",a:98,q:"100% 100%",b:53,j:"absolute",r:"inline",c:490,k:"div",z:"2",d:149,e:"0.000000"},"32":{o:"content-box",h:"flecha4.png",x:"visible",a:767,q:"100% 100%",b:405,j:"absolute",r:"inline",c:46,k:"div",z:"12",d:218,aY:"2",e:"0.000000",f:"-90deg"},"4":{o:"content-box",h:"slogan.png",x:"visible",a:495,q:"100% 100%",b:53,j:"absolute",r:"inline",c:280,k:"div",z:"3",d:60,e:"0.000000"},"27":{o:"content-box",h:"hta.png",x:"visible",a:439,q:"100% 100%",b:124,j:"absolute",r:"inline",c:189,k:"div",z:"6",d:268,e:"0.000000"},"33":{o:"content-box",h:"texto2.png",x:"visible",a:393,q:"100% 100%",b:499,j:"absolute",r:"inline",c:308,k:"div",z:"13",d:61,e:"0.000000"},"34":{o:"content-box",h:"texto3.png",x:"visible",a:328,q:"100% 100%",b:556,j:"absolute",r:"inline",c:423,k:"div",z:"14",d:59,e:"0.000000"},"28":{o:"content-box",h:"flecha1.png",x:"visible",a:355,q:"100% 100%",b:224,j:"absolute",r:"inline",c:80,k:"div",z:"8",d:63,aY:"2",e:"0.000000",f:"-90deg"},"30":{o:"content-box",h:"productshot.png",x:"visible",a:276,q:"100% 100%",b:252,j:"absolute",r:"inline",c:675,k:"div",z:"10",d:380,e:"0.000000"},"29":{o:"content-box",h:"flecha2.png",x:"visible",a:619,q:"100% 100%",b:224,j:"absolute",r:"inline",c:80,k:"div",z:"9",d:63,aY:"2",e:"0.000000",f:"-90deg"},"35":{o:"content-box",h:"nota1.png",x:"visible",a:87,q:"100% 100%",b:443,j:"absolute",r:"inline",c:110,k:"div",z:"7",d:114,e:"0.000000"},"31":{o:"content-box",h:"flecha3.png",x:"visible",a:268,q:"100% 100%",b:405,j:"absolute",r:"inline",c:46,k:"div",z:"11",d:218,aY:"2",e:"0.000000",f:"-90deg"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide11_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

