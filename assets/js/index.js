function contactSend(){let t=!0;if($("form#contact-form input,form#contact-form textarea").each(function(e,i){let n=$(i);"number"!==n.attr("type")&&""===$.trim(n.val())&&(n.css({"border-color":"coral"}),setTimeout(function(){n.removeAttr("style")},2e3),t=!1)}),t){$("div.wait").css({display:"flex"});let t=$("form#contact-form").serializeArray(),e={};$.map(t,function(t,i){e[t.name]=t.value}),$.post("https://www.formbackend.com/f/52a1a00530e71ac3",e).done(function(t){$("div.wait").css({display:"none"}),alert("Your message was successfully sent"),$("form#contact-form").find("input, textarea").val("")}).fail(function(){$("div.wait").css({display:"none"}),alert("An error occurred while sending your message. Please try again","error")})}return!1}$(window).on("load",function(){$(".loading").hide()}),function(t){"use strict";t.fn.textTyper=function(e){var i=t.extend({},{typingClass:"typing",beforeAnimation:function(){},afterAnimation:function(){},speed:10,nextLineDelay:400,startsFrom:0,repeatAnimation:!1,repeatDelay:4e3,repeatTimes:1,cursorHtml:'<span class="cursor">|</span>'},e);return this.each(function(){for(var e=t(this),n=1,s="typingCursor",a=e,o=a.length,r=[];o--;)r[o]=t.trim(t(a[o]).html()),t(a[o]).html("");e.init=function(t){var n=i.beforeAnimation;n&&n(),e.animate(0)},e.animate=function(o){var l=a[o],h=i.typingClass,c=i.startsFrom;t(l).addClass(h);var m=setInterval(function(){var h=i.cursorHtml;if(h=t("<div>").append(t(h).addClass(s)).html(),t(l).html(r[o].substr(0,c)+h),c++,r[o].length<c)if(clearInterval(m),a[++o])setTimeout(function(){t(l).html(r[o-1]),e.animate(o)},i.nextLineDelay);else if(t(l).find("."+s).remove(),i.repeatAnimation&&(0==i.repeatTimes||n<i.repeatTimes))setTimeout(function(){e.animate(0),n++},i.repeatDelay);else{var d=i.afterAnimation;d&&d()}},i.speed)},e.init()}),this}}(jQuery),window.alert=function(t,e){$(".message").text(t),"error"===e?$(".customAlert").css({background:"#8a081d"}):$(".customAlert").css({background:"#088A68"}),$(".customAlert").css("animation","fadeIn 0.3s linear"),$(".customAlert").css("display","inline"),setTimeout(function(){$(".customAlert").css("animation","none")},300)},$(function(){$(".confirmButton").click(function(){$(".customAlert").css("animation","fadeOut 0.3s linear"),setTimeout(function(){$(".customAlert").css("animation","none"),$(".customAlert").css("display","none")},300)})}),$(document).ready(function(){$(".command").hide(),$('input[type="text"]').focus(),$("#home").show(),$("#home").textTyper({speed:5,afterAnimation:function(){$(".command").fadeIn(),$('input[type="text"]').focus(),$('input[type="text"]').val(""),$("#container").animate({scrollTop:"500px"},1e3)}});var t=[];$("section").each(function(e,i){t.push($(i).attr("id"))}),$("#command-input").keyup(function(e){if(13==e.which){$(".command").hide();var i=$("#command-input").val();"talents"===i||"contact"===i?$('section[id="'+i+'"]').show(1e3).addClass("open").siblings().removeClass("open").hide():$('section[id="'+i+'"]').show().addClass("open").siblings().removeClass("open").hide(),-1==$.inArray(i,t)&&($("#error").show(),$("#error").siblings().hide(),$(".command").fadeIn(),$('input[type="text"]').focus(),$('input[type="text"]').val("")),"talents"===i||"contact"===i?$(".command").fadeIn("slow",function(){$("#command-input").focus(),$("#command-input").val("")}):$(".open").textTyper({speed:5,afterAnimation:function(){$(".command").show(200),$("#command-input").focus(),$("#command-input").val("")}}),$("#container").animate({scrollTop:"2000px"},1e3)}})});const talents=[{name:"HTML5",id:"html",level:"98%",bg:"#B71C1C"},{name:"CSS / SASS (Bootstrap 4)",id:"css",level:"90%",bg:"#880E4F"},{name:"Javacript(ES6+6 and modular Javascript,Fetch Api/Ajax)",id:"javascript",level:"65%",bg:"#4A148C"},{name:"PHP (<small>OOP,Design Patterns,Laravel,Yii2,Codeigniter and others</small>)",id:"php",level:"90%",bg:"#0D47A1"},{name:"PYTHON",id:"python",level:"35%",bg:"#BF360C"},{name:"MYSQL",id:"mysql",level:"80%",bg:"#E65100"},{name:"VUE JS (Nuxt js,Vuex ,Vue cli)",id:"vue",level:"90%",bg:"#3a9679"},{name:"React (Next,Redux)",id:"react",level:"70%",bg:"#3a9679"},{name:"REST API",id:"rest",level:"90%",bg:"#27ae60"},{name:"APACHE 2",id:"apache",level:"70%",bg:"#bdc3c7"},{name:"NGINX",id:"nginx",level:"60%",bg:"#048998"},{name:"GIT",id:"git",level:"70%",bg:"#ff2e4c"},{name:"LINUX OS",id:"linux",level:"70%",bg:"#ab0e86"}];let talentsSection=$("section#talents ul");for(let t=0;t<talents.length;t++)talentsSection.append(`\n      <li>\n        <div class="progressbar-title">\n          <h3>${talents[t].name}</h3>\n          <span class="percent" id="${talents[t].id}-pourcent">${talents[t].level}</span>\n        </div>\n        <div class="bar-container">\n          <span style="width:${talents[t].level};background:${talents[t].bg}" class="progressbar progressred" id="progress-${talents[t].id}"></span>\n        </div>\n      </li>\n  `);!function(){var t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};window.requestAnimationFrame=t}();var background=document.getElementById("world"),bgCtx=background.getContext("2d"),width=window.innerWidth,height=document.body.offsetHeight;function Terrain(t){t=t||{},this.terrain=document.createElement("canvas"),this.terCtx=this.terrain.getContext("2d"),this.scrollDelay=t.scrollDelay||90,this.lastScroll=(new Date).getTime(),this.terrain.width=width,this.terrain.height=height,this.fillStyle=t.fillStyle||"#191D4C",this.mHeight=t.mHeight||height,this.points=[];var e=t.displacement||140,i=Math.pow(2,Math.ceil(Math.log(width)/Math.log(2)));this.points[0]=this.mHeight,this.points[i]=this.points[0];for(var n=1;n<i;n*=2){for(var s=i/n/2;s<i;s+=i/n)this.points[s]=(this.points[s-i/n/2]+this.points[s+i/n/2])/2+Math.floor(Math.random()*-e+e);e*=.6}document.body.appendChild(this.terrain)}function Star(t){this.size=2*Math.random(),this.speed=.05*Math.random(),this.x=t.x,this.y=t.y}function ShootingStar(){this.reset()}height<400&&(height=400),background.width=width,background.height=height,Terrain.prototype.update=function(){this.terCtx.clearRect(0,0,width,height),this.terCtx.fillStyle=this.fillStyle,(new Date).getTime()>this.lastScroll+this.scrollDelay&&(this.lastScroll=(new Date).getTime(),this.points.push(this.points.shift())),this.terCtx.beginPath();for(var t=0;t<=width;t++)0===t?this.terCtx.moveTo(0,this.points[0]):void 0!==this.points[t]&&this.terCtx.lineTo(t,this.points[t]);this.terCtx.lineTo(width,this.terrain.height),this.terCtx.lineTo(0,this.terrain.height),this.terCtx.lineTo(0,this.points[0]),this.terCtx.fill()},bgCtx.fillStyle="#05004c",bgCtx.fillRect(0,0,width,height),Star.prototype.reset=function(){this.size=2*Math.random(),this.speed=.05*Math.random(),this.x=width,this.y=Math.random()*height},Star.prototype.update=function(){this.x-=this.speed,this.x<0?this.reset():bgCtx.fillRect(this.x,this.y,this.size,this.size)},ShootingStar.prototype.reset=function(){this.x=Math.random()*width,this.y=0,this.len=80*Math.random()+10,this.speed=10*Math.random()+6,this.size=1*Math.random()+.1,this.waitTime=(new Date).getTime()+3e3*Math.random()+500,this.active=!1},ShootingStar.prototype.update=function(){this.active?(this.x-=this.speed,this.y+=this.speed,this.x<0||this.y>=height?this.reset():(bgCtx.lineWidth=this.size,bgCtx.beginPath(),bgCtx.moveTo(this.x,this.y),bgCtx.lineTo(this.x+this.len,this.y-this.len),bgCtx.stroke())):this.waitTime<(new Date).getTime()&&(this.active=!0)};for(var entities=[],i=0;i<height;i++)entities.push(new Star({x:Math.random()*width,y:Math.random()*height}));function animate(){bgCtx.fillStyle="#110E19",bgCtx.fillRect(0,0,width,height),bgCtx.fillStyle="#ffffff",bgCtx.strokeStyle="#ffffff";for(var t=entities.length;t--;)entities[t].update();requestAnimationFrame(animate)}entities.push(new ShootingStar),entities.push(new ShootingStar),entities.push(new Terrain({mHeight:height/2-120})),entities.push(new Terrain({displacement:120,scrollDelay:50,fillStyle:"rgb(17,20,40)",mHeight:height/2-60})),entities.push(new Terrain({displacement:100,scrollDelay:20,fillStyle:"rgb(10,10,5)",mHeight:height/2})),animate();
