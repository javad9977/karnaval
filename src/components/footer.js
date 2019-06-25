import React,{Component}from 'react';
window.onscroll = function() {scrollFunction()};

const scrollFunction=()=>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

const topFunction=()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

class Footer extends Component{
    render(){
        return (

<div class="footer">
      <button onClick={topFunction} id="myBtn" title="Go to top"> <i class="fa fa-angle-up"></i> </button>

      <div class="container">
        <div class="foot1">
          <img src="images/logo.png" alt=""/>
          <ul>
            <li>فرصت های شغلی</li>
            <li>همکاری با ما</li>
            <li>تماس با ما</li>
            <li>کارناوالی شو</li>
          </ul>
        </div>
        <div class="foot2">
          <h3>سرویس های کارناوال</h3>
          <a href="#"><i class="fa fa-rss"></i>سرویس های کارناوال</a>
          <a href="#"><i class="fa fa-play-circle"></i> ویدئو های HD</a>
          <a href="#"> <i class="fa fa-image"></i>عکاسخانه</a>
          <a href="#"> <i class="fa fa-cloud"></i>آب و هوا</a>
          <a href="#"> <i class="fa fa-map-marker"></i>نقشه و مسیریابی</a>
        </div>
        <div class="foot3">
          <h3>همراه ما باشید</h3>
          <i class="fa fa-instagram clr1"></i>
          <i class="fa fa-location-arrow clr2"></i>
          <i class="fa fa-linkedin clr3"></i>
          <br/>
          <br/>
          <h3>عضویت در خبرنامه</h3>

        </div>
        <div class="clear">

        </div>
      </div>
    </div>

   

  

)
    }
    
}
export default Footer; 