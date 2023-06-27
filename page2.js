// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

const playVid = document.querySelector('.playvid');
playVid.addEventListener('click', () => {
  player.playVideo();
}
)

const test = document.getElementsByName('testglobal');

const checkRadio = (ver) => {
  if(test.checked = true){
    console.log(`Test${ver} sélectionné !`)
  } else {
    console.log(`Test${ver} inactif.`)
  }
}

const radios = document.querySelectorAll('.radiocheck');

for (const radio of radios) {
  radio.addEventListener('click', function() {
    for (const other of radios) {
      if (other !== this) {
        other.classList.remove('selected');
      }
    }

    this.classList.toggle('selected');
  });
}

const arrows = document.querySelectorAll('.arrow');
const months = document.querySelectorAll('.month');
const month = document.querySelector('.month');

for (const arrow of arrows) {
  arrow.addEventListener('mouseenter', function(event) {
    this.classList.add('arrow_hover');
    if(event.target === arrow) {
      month.classList.add('month_hover');
    }
  });

  arrow.addEventListener('mouseleave', function(event) {
    if (!this.classList.contains('arrow_on')) {
      this.classList.remove('arrow_hover');
    }
    if(event.target === arrow) {
      for (const onemonth of months) {
        if (!onemonth.classList.contains('month_on')) {
          onemonth.classList.remove('month_hover');
        }
      }
    }
  });
  
  arrow.addEventListener('click', function(event) {
    for (const other of arrows) {
      if (other !== this) {
        other.classList.remove('arrow_on');
        other.classList.remove('arrow_hover');
      }
    }
    this.classList.toggle('arrow_on');
    if(this.classList.contains('arrow_on')) {
      this.classList.remove('arrow_hover');
    }
    if(event.target === arrow) {
      for (other of months) {
        if (other !== this) {
          other.classList.remove('month_on');
          other.classList.remove('month_hover');
        }
        this.classList.toggle('month_on')
        if (this.classList.contains('month_on')) {
          this.classList.remove('month_hover');
        }
      }
    }
  });
};
