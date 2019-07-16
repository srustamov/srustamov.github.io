$(window).on('load', function () {
  $('.loading').hide();
});
(function (e) {
  "use strict";
  e.fn.textTyper = function (t) {
    var n = {
        typingClass: "typing",
        beforeAnimation: function () {},
        afterAnimation: function () {},
        speed: 10,
        nextLineDelay: 400,
        startsFrom: 0,
        repeatAnimation: false,
        repeatDelay: 4e3,
        repeatTimes: 1,
        cursorHtml: '<span class="cursor">|</span>'
      },
      r = e.extend({}, n, t);
    this.each(function () {
      var t = e(this),
        n = 1,
        i = "typingCursor";
      var s = t,
        o = s.length,
        u = [];
      while (o--) {
        u[o] = e.trim(e(s[o]).html());
        e(s[o]).html("")
      }
      t.init = function (e) {
        var n = r.beforeAnimation;
        if (n) n();
        t.animate(0)
      };
      t.animate = function (o) {
        var a = s[o],
          f = r.typingClass,
          l = r.startsFrom;
        e(a).addClass(f);
        var c = setInterval(function () {
          var f = r.cursorHtml;
          f = e("<div>").append(e(f).addClass(i)).html();
          e(a).html(u[o].substr(0, l) + f);
          l++;
          if (u[o].length < l) {
            clearInterval(c);
            o++;
            if (s[o]) {
              setTimeout(function () {
                e(a).html(u[o - 1]);
                t.animate(o)
              }, r.nextLineDelay)
            } else {
              e(a).find("." + i).remove();
              if (r.repeatAnimation && (r.repeatTimes == 0 || n < r.repeatTimes)) {
                setTimeout(function () {
                  t.animate(0);
                  n++
                }, r.repeatDelay)
              } else {
                var h = r.afterAnimation;
                if (h) h()
              }
            }
          }
        }, r.speed)
      };
      t.init()
    });
    return this
  }
})(jQuery)






window.alert = function (msg, type) {
  $('.message').text(msg);
  if (type === 'error') {
    $('.customAlert').css({
      'background': '#8a081d'
    });

  } else {
    $('.customAlert').css({
      'background': '#088A68'
    });
  }
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function () {
    $('.customAlert').css('animation', 'none');
  }, 300);
}

$(function () {

  $('.confirmButton').click(function () {
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function () {
      $('.customAlert').css('animation', 'none');
      $('.customAlert').css('display', 'none');
    }, 300);
  })


});


$(document).ready(function () {

  $('.command').hide();
  $('input[type="text"]').focus();
  $('#home').show();
  $('#home').textTyper({
    speed: 5,
    afterAnimation: function () {
      $('.command').fadeIn();
      $('input[type="text"]').focus();
      $('input[type="text"]').val('');
      $('#container').animate({
        scrollTop: '500px'
      }, 1000);
    }
  });

  var sectionArray = [];
  $('section').each(function (i, e) {
    sectionArray.push($(e).attr('id'));
  });






  /* Command Input */

  $('#command-input').keyup(function (e) {

    if (e.which == 13) { 

      $('.command').hide();
      var destination = $('#command-input').val();

      if (destination === 'talents' || destination === 'contact') {
        $('section[id="' + destination + '"]').show(1000).addClass('open').siblings().removeClass('open').hide();
      } else {
        $('section[id="' + destination + '"]').show().addClass('open').siblings().removeClass('open').hide();
      }

      if ($.inArray(destination, sectionArray) == -1) {
        $('#error').show();
        $('#error').siblings().hide();
        $('.command').fadeIn();
        $('input[type="text"]').focus();
        $('input[type="text"]').val('');
      }

      if (destination === 'talents' || destination === 'contact') {
        $('.command').fadeIn('slow', function () {
          $('#command-input').focus();
          $('#command-input').val('');
        });

      } else {
        $('.open').textTyper({
          speed: 5,
          afterAnimation: function () {
            $('.command').show(200);
            $('#command-input').focus();
            $('#command-input').val('');
          }
        });
      }

      $('#container').animate({
        scrollTop: '2000px'
      }, 1000);

    }

  });


});


function contactSend() {
  let validate = true;
  let data;
  $('form#contact-form input,form#contact-form textarea')
    .each(function (index, el) {
      let element = $(el);
      if (element.attr('type') !== 'number' && $.trim(element.val()) === '') {
        element.css({
          'border-color': 'coral',
        });
        setTimeout(function () {
          element.removeAttr('style');
        }, 2000)
        validate = false;
      }
    });

  if (validate) {
    $('div.wait').css({
      display: 'flex'
    });
    data = $('form#contact-form').serialize();
    $.post('https://formspree.io/rustemovv96@gmail.com',{data}).done(function(res){
      console.log(res);
      $('div.wait').css({
        display: 'none'
      });
      if (response.status === 200) {
        alert('Your message was successfully sent');
        $('form#contact-form').find("input, textarea").val("");
      } else {
        alert('An error occurred while sending your message. Please try again', 'error');
      }
    })
    .fail(function(){
       $('div.wait').css({
         display: 'none'
       });
       alert('An error occurred while sending your message. Please try again', 'error');
    })
  }
  return false;
}

/*talents */




const talents = [{
    name: 'HTML5',
    id: 'html',
    level: '98%',
    bg: '#B71C1C'
  },
  {
    name: 'CSS / SASS (Bootstrap 4)',
    id: 'css',
    level: '90%',
    bg: '#880E4F'
  },
  {
    name: 'Javacript',
    id: 'javascript',
    level: '65%',
    bg: '#4A148C'
  },
  {
    name: 'PHP (<small>OOP,Design Patterns,Laravel,Yii2,Codeigniter and others</small>)',
    id: 'php',
    level: '90%',
    bg: '#0D47A1'
  },
  {
    name: 'PYTHON',
    id: 'python',
    level: '35%',
    bg: '#BF360C'
  },
  {
    name: 'MYSQL',
    id: 'mysql',
    level: '80%',
    bg: '#E65100'
  },
  {
    name: 'VUE JS (Nuxt js,Vuex ,Vue cli)',
    id: 'vue',
    level: '90%',
    bg: '#3a9679'
  },
  {
    name: 'REST API',
    id: 'rest',
    level: '90%',
    bg: '#27ae60'
  },
  {
    name: 'APACHE 2',
    id: 'apache',
    level: '70%',
    bg: '#bdc3c7'
  },
  {
    name: 'NGINX',
    id: 'nginx',
    level: '60%',
    bg: '#048998'
  },
  {
    name: 'GIT',
    id: 'git',
    level: '70%',
    bg: '#ff2e4c'
  },
  {
    name: 'LINUX OS',
    id: 'linux',
    level: '70%',
    bg: '#ab0e86'
  },
]

let talentsSection = $('section#talents ul');

for (let i = 0; i < talents.length; i++) {

  talentsSection.append(`
      <li>
        <div class="progressbar-title">
          <h3>${talents[i].name}</h3>
          <span class="percent" id="${talents[i].id}-pourcent">${talents[i].level}</span>
        </div>
        <div class="bar-container">
          <span style="width:${talents[i].level};background:${talents[i].bg}" class="progressbar progressred" id="progress-${talents[i].id}"></span>
        </div>
      </li>
  `)

}




/*background canvas*/

(function () {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
  window.requestAnimationFrame = requestAnimationFrame;
})();


var background = document.getElementById("world"),
  bgCtx = background.getContext("2d"),
  width = window.innerWidth,
  height = document.body.offsetHeight;

(height < 400) ? height = 400: height;

background.width = width;
background.height = height;

function Terrain(options) {
  options = options || {};
  this.terrain = document.createElement("canvas");
  this.terCtx = this.terrain.getContext("2d");
  this.scrollDelay = options.scrollDelay || 90;
  this.lastScroll = new Date().getTime();

  this.terrain.width = width;
  this.terrain.height = height;
  this.fillStyle = options.fillStyle || "#191D4C";
  this.mHeight = options.mHeight || height;

  this.points = [];

  var displacement = options.displacement || 140,
    power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2))));

  this.points[0] = this.mHeight;
  this.points[power] = this.points[0];

  // create the rest of the points
  for (var i = 1; i < power; i *= 2) {
    for (var j = (power / i) / 2; j < power; j += power / i) {
      this.points[j] = ((this.points[j - (power / i) / 2] + this.points[j + (power / i) / 2]) / 2) + Math.floor(Math.random() * -displacement + displacement);
    }
    displacement *= 0.6;
  }

  document.body.appendChild(this.terrain);
}

Terrain.prototype.update = function () {
  this.terCtx.clearRect(0, 0, width, height);
  this.terCtx.fillStyle = this.fillStyle;

  if (new Date().getTime() > this.lastScroll + this.scrollDelay) {
    this.lastScroll = new Date().getTime();
    this.points.push(this.points.shift());
  }

  this.terCtx.beginPath();
  for (var i = 0; i <= width; i++) {
    if (i === 0) {
      this.terCtx.moveTo(0, this.points[0]);
    } else if (this.points[i] !== undefined) {
      this.terCtx.lineTo(i, this.points[i]);
    }
  }

  this.terCtx.lineTo(width, this.terrain.height);
  this.terCtx.lineTo(0, this.terrain.height);
  this.terCtx.lineTo(0, this.points[0]);
  this.terCtx.fill();
}


bgCtx.fillStyle = '#05004c';
bgCtx.fillRect(0, 0, width, height);

function Star(options) {
  this.size = Math.random() * 2;
  this.speed = Math.random() * .05;
  this.x = options.x;
  this.y = options.y;
}

Star.prototype.reset = function () {
  this.size = Math.random() * 2;
  this.speed = Math.random() * .05;
  this.x = width;
  this.y = Math.random() * height;
}

Star.prototype.update = function () {
  this.x -= this.speed;
  if (this.x < 0) {
    this.reset();
  } else {
    bgCtx.fillRect(this.x, this.y, this.size, this.size);
  }
}

function ShootingStar() {
  this.reset();
}

ShootingStar.prototype.reset = function () {
  this.x = Math.random() * width;
  this.y = 0;
  this.len = (Math.random() * 80) + 10;
  this.speed = (Math.random() * 10) + 6;
  this.size = (Math.random() * 1) + 0.1;
  this.waitTime = new Date().getTime() + (Math.random() * 3000) + 500;
  this.active = false;
}

ShootingStar.prototype.update = function () {
  if (this.active) {
    this.x -= this.speed;
    this.y += this.speed;
    if (this.x < 0 || this.y >= height) {
      this.reset();
    } else {
      bgCtx.lineWidth = this.size;
      bgCtx.beginPath();
      bgCtx.moveTo(this.x, this.y);
      bgCtx.lineTo(this.x + this.len, this.y - this.len);
      bgCtx.stroke();
    }
  } else {
    if (this.waitTime < new Date().getTime()) {
      this.active = true;
    }
  }
}

var entities = [];

for (var i = 0; i < height; i++) {
  entities.push(new Star({
    x: Math.random() * width,
    y: Math.random() * height
  }));
}

entities.push(new ShootingStar());
entities.push(new ShootingStar());
entities.push(new Terrain({
  mHeight: (height / 2) - 120
}));
entities.push(new Terrain({
  displacement: 120,
  scrollDelay: 50,
  fillStyle: "rgb(17,20,40)",
  mHeight: (height / 2) - 60
}));
entities.push(new Terrain({
  displacement: 100,
  scrollDelay: 20,
  fillStyle: "rgb(10,10,5)",
  mHeight: height / 2
}));

function animate() {
  bgCtx.fillStyle = '#110E19';
  bgCtx.fillRect(0, 0, width, height);
  bgCtx.fillStyle = '#ffffff';
  bgCtx.strokeStyle = '#ffffff';

  var entLen = entities.length;

  while (entLen--) {
    entities[entLen].update();
  }
  requestAnimationFrame(animate);
}
animate();