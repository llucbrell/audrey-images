
module.exports= function(){

var data=false;	
var bul;
var terminal;
var name;

//MAKE YOUR REQUIRES 
var png=require('ascii-images');

return{
	     grow: function(simName, customObject){ 
        terminal= customObject;
        //console.log("CAAALL");
        name= simName.slice(2);;
        start();
        },
harvestData: function(){ return data;}
}
//UNCOMMENT THIS ADN CALL THE FUNCTION FOR COLORS VALIDATION
/*
function checkColors(){
  var colors=Object.getOwnPropertyNames(terminal.colors);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<colors.length; i++){//iterate over prop names

    if(colors[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    terminal.colors[name]=terminal.colors.default;
    } 
}
*/
//UNCOMMENT THIS AND CALL THE FUNCTION FOR DEFINITION VALIDATION

function checkProperties(){
var properties= Object.getOwnPropertyNames(terminal);
  bul=false; // boolean to control if its defined the property

  for(var i=0; i<properties.length; i++){//iterate over prop names
    if(properties[i] === name){//if it is
      bul=true;
    }
  }
  if(bul!==true){//if its finded the statement of the tag
    throw new Error('Not defined '+name);
    }  
}


function start(){
  //YOUR CODE GOES HERE

  checkProperties();

 
  png("../../"+ terminal[name], function(result){
    console.log(result);
    process.exit();
  });




}

}