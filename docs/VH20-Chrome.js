

VH20.OnWindowBeforeUnload = function() {	
 
window.document.addEventListener("beforeunload", function () {
 return "Document about to be unloaded, this allow to choose to proceed or remain on the document.";
}, false);

 
} 


