function setClass(el, classAttribute) { el.className = classAttribute;}

function slideshow1(elArray, p) {

    var elWrapper;
    var i=0, j, currentWidth =0, currentHeight = 0;;
    var tempImage;

    var loop = function() {
	tempImage = elWrapper.childNodes[i];
	setClass(elWrapper.childNodes[i], "");
	i += 1;
	if (i === elWrapper.childNodes.length) i = 0;
	setClass(elWrapper.childNodes[i], "top");
	setTimeout(loop, p.delay);
    }

    function init() {
	elWrapper = document.createElement("div");
	elWrapper.width = 0;
	elWrapper.height = 0;
	setClass(elWrapper, "cf");
	document.body.appendChild(elWrapper);

	function elementReady(el) {
	    currentWidth = Math.max(currentWidth, el.width);
	    currentHeight = Math.max(currentHeight, el.height);
	    elWrapper.style.width = currentWidth + 'px';
	    elWrapper.style.height = currentHeight + 'px';

	    for (j=0; j<elWrapper.childNodes.length; j++) {
		img = elWrapper.childNodes[j];
		img.style.left = (currentWidth - img.width)/2  + 'px';
		img.style.top = (currentHeight - img.height)/2 + 'px';
	    }
	}

	for (j=0; j<elArray.length; j++) {
	    tempImage = document.createElement("img");
	    tempImage.onload = (function(el) {
		return function() { elementReady(el); }
	    })(tempImage);
	    elWrapper.appendChild(tempImage);
	    tempImage.src = elArray[j];
	}
     }

    init();
    loop();
}
