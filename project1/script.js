//sabse pehele hame ye pata karna he ki mouse rectengle per aya or move hua ki nahi 
//  ab ye calculate  karo ki hum center  se kitna left per hai ya fir kitna right per he 

var rect = document.querySelector("#rect");

rect.addEventListener("mousemove",function(dets){
     var rectpostion  = rect.getBoundingClientRect();
      var insiderectval = dets.clientX - rectpostion.left;

      if(insiderectval<rectpostion.width/2){
        var redcolor =gsap.utils.mapRange(0, rectpostion.width/2, 255 , 0, insiderectval);
        gsap.to(rect,{
            backgroundColor: `rgb(${redcolor},0 ,0)`,
            ease:Power4,
        })
      }
      else{
        var bluecolor =gsap.utils.mapRange(rectpostion.width/2,rectpostion.width , 0 , 255, insiderectval);
        gsap.to(rect,{
            backgroundColor: `rgb(0 ,0,${bluecolor})`,
            ease:Power4,
        })
    }
})


rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white"
    })
})


