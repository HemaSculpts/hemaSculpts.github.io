var south = ["SOUTH1","SOUTH2","SOUTH3","SOUTH4"];
var north = ["NORTH1","NORTH2","NORTH3"];
var fashion = ["FASHION1","FASHION2","FASHION3"];

var childDiv = "<div class='col-md-6 col-lg-4 item zoom-on-hover'>";
var a = "<a class='lightbox' href='img/dock.jpg'>";
var img = "<img class='img-fluid image' src='img/dock.jpg'>";
var span = "<span class='description'>";
var spanChild1 = "<span class='description-heading'>Spread Love";
var spanChild2 = "<span class='description-body'>";
var spanClose = "</span>";
var imgClose = "</img>";
var aClose = "</a>";
var divClose = "</div>";

$(document).ready(function(){
    var southDiv = $("#south");
    var northDiv = $("#north");
    var fashionDiv = $("#fashion");
    for(var i=0;i<south.length;i++)
    {
        southDiv.append(childDiv+atag(south[i])+imgtag(south[i])+span+spanChild1+spanClose+spanChild2+spanClose+spanClose+aClose+divClose);
    }
    for(var i=0;i<north.length;i++)
    {
        northDiv.append(childDiv+atag(north[i])+imgtag(north[i])+span+spanChild1+spanClose+spanChild2+spanClose+spanClose+aClose+divClose);
    }
    for(var i=0;i<fashion.length;i++)
    {
        fashionDiv.append(childDiv+atag(fashion[i])+imgtag(fashion[i])+span+spanChild1+spanClose+spanChild2+spanClose+spanClose+aClose+divClose);
    }

var sampleObject = {
    a: 1,
    b: 2,
    c: {
        x: 11,
        y: 22
    }
};
console.log(sampleObject);

var txtFile = "./object.json";
   //var file = new File(txtFile,"write");
   var file = new File(["sample"], "sample.txt", {type: "text/plain", lastModified: new Date()})
   var str = JSON.stringify(sampleObject);

   console.log("opening file...");
   //file.open(); 
   console.log("writing file..");
   //file.writeline(str);
   //file.close();

});

function atag(imageName)
{
    return "<a class='lightbox' href='"+"img/"+imageName+".jpg'>";
}

function imgtag(imageName)
{
    return "<img class='img-fluid image' src='img/"+imageName+".jpg'>";
}
