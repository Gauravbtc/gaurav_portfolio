import React, { Component } from 'react'
import $ from 'jquery';

class Header extends Component {
  componentDidMount(){
    var toggleButton = $('.menu-toggle'),
    nav = $('.main-navigation');
   // toggle button
    toggleButton.on('click', function(e) {
		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});
    
  nav.find('li a').on("click", function() {   
    // update the toggle button 		
    toggleButton.toggleClass('is-clicked'); 
    // fadeout the navigation panel
    nav.fadeOut();   		       
   }); 

   $('.smoothscroll').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
     $target = $(target);

     $('html, body').stop().animate({
        'scrollTop': $target.offset().top
     }, 800, 'swing', function () {
       window.location.hash = target;
     });

   }); 
  }


  render() {
    return (
    <header>   	
      <div className="row">
        <div className="top-bar">
          <a role="button" className="menu-toggle"><span>Menu</span></a>

          <div className="logo">
              <a href="index.html">Gaurav</a>
            </div>		      

          <nav id="main-nav-wrap">
            <ul className="main-navigation">
              <li className="current"><a className="smoothscroll"  href="#intro" title="">Home</a></li>
              <li><a className="smoothscroll" href="#about" title="">About</a></li>
              <li><a className="smoothscroll" href="#resume" title="">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio" title="">Portfolio</a></li>
              <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>	
            </ul>
          </nav>    		
        </div> 
      </div> 
   </header> 
    )
  }
}

export default Header;