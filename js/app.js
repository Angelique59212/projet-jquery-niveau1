$("#myId").html("Hello World");

let a = $("a");

a.html("mon lien").attr("href", "https://learn.jquery.com/using-jquery-core/attributes/");

let monDiv= $("#monDiv");
    monDiv.css( {
    "width" : "100px",
    "height": "200px",
    "border" : "1px solid black"
});
    $("#monDiv div").eq(1).text("Mon deuxieme div");
alert($("#monDiv div").eq(1).index())



