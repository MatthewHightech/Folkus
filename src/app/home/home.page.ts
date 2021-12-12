import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'wave.scss'],
})
export class HomePage {

  constructor() {}

  raiseBar() {
    const waves:any = document.getElementsByClassName("waveWrapperInner");

    for(let i = 0; i < waves.length; i++) {
      let currentBottom = window.getComputedStyle(waves[i]).getPropertyValue("bottom").split("px")
      console.log(currentBottom)
      waves[i].style.bottom = (parseInt(currentBottom[0]) + 100) + "px";
    }
  }

  startTimer(minute, sec) {
    setInterval(function() {
      document.getElementById("timer").innerHTML = minute + " : " + sec;
      sec--;
      if (sec == 0) {
        minute --;
        sec = 60;
        if (minute == 0) {
          minute = 5;
        }
      }
    }, 1000);
  }

}
