window.onload = initPage;
//alert("Browser Started");
function initPage() {
    image = thumbs[i];
    
    // create the onclick function
    image.onclick = function() {
//    	alert("Image Clicked");
      // find the image name
      detailURL = 'images/' + this.title + '-detail.jpg';
      document.getElementById("itemDetail").src = detailURL;
//      alert("Image changed");
      getDetails(this.title);
    }
//create request object
function createRequest() {
  try {
	  //modern browsers
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
    	//old IE browsers
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }
  return request;
}
	request = createRequest();
//  alert("Object/Request Created");
  //any changes call displayDetails function 

//    	alert("status : ok");
    	//Get the element
      //display the response text
//      alert("Response : "+request.responseText);