
      //<![CDATA[
/*
*	"top-bar cucu trastras"
*	From: 		https://stackoverflow.com/questions/31223341/detecting-scroll-direction
*	Autor:		Vasi
*	Adaptación: Kseso
*/
var cucutras = document.querySelector(".top-bar");
  var scrollableElement = document.querySelector('body');
  scrollableElement.addEventListener('wheel', ruedalarueda);       
    function ruedalarueda(event){
      var ruedala;
      if (event.wheelDelta){
        ruedala = event.wheelDelta;
      }else{
        ruedala = -1 *event.deltaY;
      }
      if (ruedala > 0){
        cucutras.classList.remove("veola");
      }else if (ruedala < 0){
        cucutras.classList.add("veola");
      }
    }

/*
// commented by .keyCode deprecated

document.onkeydown = oyepisha;
function oyepisha(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        cucutras.classList.remove("veola")
    }
    else if (e.keyCode == '40') {
        cucutras.classList.add("veola");
    }
}
*/

document.onkeydown = function (oyepisha) {
    switch (oyepisha.key) {
        case 'ArrowUp':  
            cucutras.classList.remove("veola");
            break;
        case 'ArrowDown':
            cucutras.classList.add("veola");
            break;
        case 'ArrowLeft':
            // left arrow
            break;
        case 'ArrowRight':
            // right arrow
    }
};
/*
* 	Y a otra cosa, mariposa
*/
      //]]>
    