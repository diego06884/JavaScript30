    //play sound on key press
    const keys = Array.from(document.querySelectorAll(".key"));

    document.addEventListener("keydown", (e) => {
      const audio = document.querySelector("audio[data-key='" + e.keyCode + "']");
      const key = document.querySelector(".key[data-key='" + e.keyCode + "']");
      if (key && audio) {
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
      } else return;

    });
    keys.forEach((key) => {
      key.addEventListener("transitionend", (e) => {
        if(e.propertyName === "transform"){
          e.target.classList.remove("playing");
        }
        else return;
      });
    });


    //identify which key and sound
    //rewind sound
    //add class 'playing'
    //play sound
    //Remove class on transitionend