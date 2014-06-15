$(function () {
	

for(var i=1;i<50;i++) {
Bilderror(i);
	
}
});

function Bilderror(i) {
	var errorabfrage = "#" + i + " a img";
	$(errorabfrage).error(function () {
		//alert("Bild " + i + "nicht vorhanden");
		$("#" + i).css({display: "none"});
	});
}