"use strict";function initialize(){{var a=new google.maps.LatLng(-2.501713,-44.237152),b={zoom:15,scrollwheel:!1,center:a},c=new google.maps.Map(document.getElementById("map-canvas"),b);new google.maps.Marker({position:a,map:c,title:"Hello World!"})}}console.log("'Allo 'Allo!"),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-62944375-1","auto"),ga("send","pageview"),$(".days").countdown("2015/07/04",function(a){$(this).html(a.strftime("%D"))}),$(".hours").countdown("2015/07/04",function(a){$(this).html(a.strftime("%H"))}),$(".minutes").countdown("2015/07/04",function(a){$(this).html(a.strftime("%M"))}),$(".seconds").countdown("2015/07/04",function(a){$(this).html(a.strftime("%S"))}),google.maps.event.addDomListener(window,"load",initialize),$(document).ready(function(){$('a[href^="#"]').on("click",function(a){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset().top},900,"swing",function(){window.location.hash=b})})});var playing=!0;$(".icon-play").hide(),$(".music-play").click(function(){playing?($("#player").trigger("pause"),playing=!1,$(".icon-play").show(),$(".icon-pause").hide()):($("#player").trigger("play"),playing=!0,$(".icon-play").hide(),$(".icon-pause").show())});