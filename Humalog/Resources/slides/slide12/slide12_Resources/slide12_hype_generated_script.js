//	HYPE.documents["slide12"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "slide12_Resources";
	var documentName = "slide12";
	var documentLoaderFilename = "slide12_hype_generated_script.js";

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

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:0.5,i:"d",e:63,r:1,s:149,o:"3"},{f:"2",t:0,d:0.5,i:"c",e:207,r:1,s:490,o:"3"},{f:"2",t:0,d:0.5,i:"e",e:"1.000000",r:1,s:"0.000000",o:"3"},{f:"2",t:0.5,d:0.39999998,i:"e",e:"1.000000",r:1,s:"0.000000",o:"26"},{f:"2",t:0.5,d:0.39999998,i:"d",e:87,r:1,s:143,o:"26"},{f:"2",t:0.5,d:0.39999998,i:"c",e:205,r:1,s:337,o:"26"},{f:"2",t:0.89999998,d:0.36666667,i:"e",e:"1.000000",r:1,s:"0.000000",o:"27"},{f:"2",t:0.89999998,d:0.36666667,i:"a",e:475,r:1,s:533,o:"27"},{f:"2",t:1.2666667,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"28"},{f:"2",t:1.2666667,d:0.4000001,i:"d",e:396,r:1,s:255,o:"28"},{f:"2",t:1.2666667,d:0.4000001,i:"c",e:521,r:1,s:335,o:"28"},{f:"2",t:1.6666667,d:0.33333325,i:"e",e:"1.000000",r:1,s:"0.000000",o:"29"},{f:"2",t:1.6666667,d:0.33333325,i:"a",e:78,r:1,s:97,o:"29"},{f:"2",t:1.9,d:0.50000012,i:"e",e:"1.000000",r:1,s:"1.000000",o:"2"},{f:"2",t:1.9,d:0.50000012,i:"d",e:668,r:1,s:668,o:"2"},{f:"2",t:1.9,d:0.50000012,i:"c",e:1024,r:1,s:1024,o:"2"},{f:"2",t:2,d:0.36666679,i:"e",e:"1.000000",r:1,s:"0.000000",o:"30"},{f:"2",t:2,d:0.36666679,i:"a",e:78,r:1,s:99,o:"30"},{f:"2",t:2.3666668,d:0.39999986,i:"e",e:"1.000000",r:1,s:"0.000000",o:"31"},{f:"2",t:2.3666668,d:0.39999986,i:"a",e:78,r:1,s:119,o:"31"},{f:"2",t:2.7666667,d:0.29999995,i:"e",e:"1.000000",r:1,s:"0.000000",o:"32"},{f:"2",t:2.7666667,d:0.29999995,i:"a",e:78,r:1,s:104,o:"32"},{f:"2",t:3.0666666,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"33"},{f:"2",t:3.0666666,d:0.4000001,i:"a",e:78,r:1,s:113,o:"33"},{f:"2",t:3.4666667,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"34"},{f:"2",t:3.4666667,d:0.4000001,i:"a",e:78,r:1,s:107,o:"34"},{f:"2",t:3.8666668,d:0.33333302,i:"e",e:"1.000000",r:1,s:"0.000000",o:"35"},{f:"2",t:3.8666668,d:0.33333302,i:"a",e:78,r:1,s:140,o:"35"},{f:"2",t:4.1999998,d:0.36666679,i:"e",e:"1.000000",r:1,s:"0.000000",o:"36"},{f:"2",t:4.1999998,d:0.36666679,i:"a",e:78,r:1,s:148,o:"36"},{f:"2",t:4.5999999,d:0.4000001,i:"e",e:"1.000000",r:1,s:"0.000000",o:"37"},{f:"2",t:4.5999999,d:0.4000001,i:"d",e:147,r:1,s:219,o:"37"},{f:"2",t:4.5999999,d:0.4000001,i:"c",e:164,r:1,s:244,o:"37"},{f:"2",t:5,d:0.33333349,i:"e",e:"1.000000",r:1,s:"0.000000",o:"38"},{f:"2",t:5,d:0.33333349,i:"b",e:263,r:1,s:323,o:"38"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:5.4000001}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"36":{o:"content-box",h:"texto8.png",x:"visible",a:148,q:"100% 100%",b:515,j:"absolute",r:"inline",c:440,k:"div",z:"14",d:50,e:"0.000000"},"2":{o:"content-box",h:"fondo.jpg",x:"visible",a:-1,q:"100% 100%",b:2,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:668,e:"1.000000"},"26":{o:"content-box",h:"logo2.png",x:"visible",a:228,q:"100% 100%",b:99,j:"absolute",r:"inline",c:337,k:"div",z:"4",d:143,e:"0.000000"},"3":{o:"content-box",h:"logo.png",x:"visible",a:99,q:"100% 100%",b:25,j:"absolute",r:"inline",c:490,k:"div",z:"3",d:149,e:"0.000000"},"37":{o:"content-box",h:"nota.png",x:"visible",a:687,q:"100% 100%",b:135,j:"absolute",r:"inline",c:244,k:"div",z:"15",d:219,e:"0.000000"},"32":{o:"content-box",h:"texto4.png",x:"visible",a:104,q:"100% 100%",b:356,j:"absolute",r:"inline",c:440,k:"div",z:"10",d:27,e:"0.000000"},"27":{o:"content-box",h:"slogan.png",x:"visible",a:533,q:"100% 100%",b:104,j:"absolute",r:"inline",c:500,k:"div",z:"5",d:31,e:"0.000000"},"33":{o:"content-box",h:"texto5.png",x:"visible",a:113,q:"100% 100%",b:388,j:"absolute",r:"inline",c:440,k:"div",z:"11",d:32,e:"0.000000"},"38":{o:"content-box",h:"productshot.png",x:"visible",a:518,q:"100% 100%",b:323,j:"absolute",r:"inline",c:502,k:"div",z:"16",d:217,e:"0.000000"},"34":{o:"content-box",h:"texto6.png",x:"visible",a:107,q:"100% 100%",b:421,j:"absolute",r:"inline",c:440,k:"div",z:"12",d:30,e:"0.000000"},"28":{o:"content-box",h:"hoja.png",x:"visible",a:26,q:"100% 100%",b:219,j:"absolute",r:"inline",c:335,k:"div",z:"6",d:255,e:"0.000000"},"30":{o:"content-box",h:"texto2.png",x:"visible",a:99,q:"100% 100%",b:287,j:"absolute",r:"inline",c:440,k:"div",z:"8",d:27,e:"0.000000"},"29":{o:"content-box",h:"texto1.png",x:"visible",a:97,q:"100% 100%",b:240,j:"absolute",r:"inline",c:440,k:"div",z:"7",d:31,e:"0.000000"},"35":{o:"content-box",h:"texto7.png",x:"visible",a:140,q:"100% 100%",b:459,j:"absolute",r:"inline",c:440,k:"div",z:"13",d:56,e:"0.000000"},"41":{o:"content-box",h:"lupa.gif",x:"visible",a:638,q:"100% 100%",b:399,j:"absolute",r:"inline",c:398,k:"div",z:"2",d:282,e:"1.000000"},"31":{o:"content-box",h:"texto3.png",x:"visible",a:119,q:"100% 100%",b:324,j:"absolute",r:"inline",c:440,k:"div",z:"9",d:29,e:"0.000000"}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("slide12_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

