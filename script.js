
 

    // img array with all the images
    var imgArray = [
        './pictures/img-one.jpg',
        './pictures/img-two.jpg',
        './pictures/img-three.jpg'],

    // start position
        curIndex = 0;

    // time between change img
        imgDuration = 5000;

    /**
     * 
     */
    function slideShow() {
        document.getElementById('img-one').src = imgArray[curIndex];
        curIndex++;
        if (curIndex == imgArray.length) { 
            curIndex = 0; 
        }
        setTimeout("slideShow()", imgDuration);
    }
    slideShow();




