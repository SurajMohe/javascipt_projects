    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        console.log(now-prev, delay);    
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
          
      var div =  document.createElement("div");
      div.classList.add("imagediv");
       div.style.left = dets.clientX +'px';
       div.style.top =dets.clientY + 'px';  

      var img =  document.createElement("img");
      img.setAttribute("src","https://images.unsplash.com/photo-1685123466319-d7d8bae569d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60")
       div.appendChild(img);
       document.body.appendChild(div);
        gsap.to(img,{
            y:"0",
            ease:Power1,
            // rotate:-10,
            duration:.6,
        })   

        gsap.to(img,{
            y:"100%",
            delay:.6,
            ease:Power1,
        })

     setTimeout(function(){
        div.remove();
      },1500)

    },100));
