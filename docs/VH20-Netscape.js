

VH20.OnWindowBeforeUnload = function() {	
 
 alert("G");
 
 document.body.setAttribute("onbeforeunload", "return myFunction()");

 
 function myFunction() {
    event.preventDefault(); 
  alert("Document about to be unloaded, this allow to choose to proceed or remain on the document.");
  return false;
 };
 
} 

