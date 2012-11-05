dojo.declare("Main", wm.Page, {
"preferredDevice": "phone",
start: function() {
},
_end: 0
});

Main.widgets = {
phoneGapCall_Cam: ["wm.PhoneGapCall", {"inFlightBehavior":"executeLast","operation":"capture_picture"}, {"onSuccess":"notificationCall1"}, {
input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
}]
}]
}],
notificationCall1: ["wm.NotificationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"photo prise, cherche la !\"","targetProperty":"text"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
button1: ["wm.Button", {"height":"40px","margin":"4"}, {"onclick":"phoneGapCall_Cam"}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';