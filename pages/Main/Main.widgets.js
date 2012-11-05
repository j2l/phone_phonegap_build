Main.widgets = {
	variable1: ["wm.Variable", {"isList":true,"json":"[{name: \"Sunday\", dataValue: 0}, {name: \"Monday\", dataValue: 1},{name: \"Tuesday\", dataValue: 2},{name: \"Wednesday\", dataValue: 3},{name: \"Thursday\", dataValue: 4},{name: \"Friday\", dataValue: 5},{name: \"Saturday\", dataValue: 6}]","type":"EntryData"}, {}],
	phoneGapCall_Camera: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {}, {
		input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}],
				wire1: ["wm.Wire", {"expression":"0.5","targetProperty":"quality"}, {}],
				wire2: ["wm.Wire", {"expression":"true","targetProperty":"allowEdit"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"deviceSizes":null,"height":"516px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		toggleButtonPanel1: ["wm.ToggleButtonPanel", {"horizontalAlign":"left","manageHistory":true,"manageURL":true,"margin":"0,1,0,0","verticalAlign":"top"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"navButton1","targetProperty":"currentButton"}, {}]
			}],
			navButton1: ["wm.Button", {"border":"0,1,0,0","caption":"Page One","desktopHeight":"100%","height":"40px","margin":"0","width":"100%"}, {"onclick":"layer1"}],
			navButton2: ["wm.Button", {"border":"0,1,0,0","caption":"Page Two","desktopHeight":"100%","height":"40px","margin":"0","width":"100%"}, {"onclick":"layer2"}],
			navButton3: ["wm.Button", {"border":"0","borderColor":"#ABB8CF","caption":"Page Three","desktopHeight":"100%","height":"40px","margin":"0","width":"100%"}, {"onclick":"layer3"}]
		}],
		button1: ["wm.Button", {"height":"40px","margin":"4"}, {"onclick":"phoneGapCall_Camera"}],
		layers1: ["wm.BreadcrumbLayers", {"margin":"3,0,0,0","transition":"slide"}, {}, {
			layer1: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					list1: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"columns":[{"show":true,"field":"name","title":"Name","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":true,"field":"dataValue","title":"DataValue","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>DataValue: \" + ${dataValue} + \"</div>\"\n","mobileColumn":true},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"layer2"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"variable1","targetProperty":"dataSet"}, {}]
						}]
					}]
				}]
			}],
			layer2: ["wm.Layer", {"borderColor":"","caption":"layer2","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				label4: ["wm.Label", {"caption":"Page Container One","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}],
				pageContainer2: ["wm.PageContainer", {"border":"1","deferLoad":true,"margin":"4"}, {}]
			}],
			layer3: ["wm.Layer", {"borderColor":"","caption":"layer3","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				label3: ["wm.Label", {"caption":"Page Container Two","padding":"4","styles":{"fontWeight":"bold","fontSize":"16px","textAlign":"center"},"width":"100%"}, {}],
				pageContainer3: ["wm.PageContainer", {"border":"1","deferLoad":true,"margin":"4"}, {}]
			}]
		}]
	}]
}