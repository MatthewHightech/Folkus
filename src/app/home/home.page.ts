import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'wave.scss'],
})
export class HomePage {

  constructor() {}

  buttonStatus = "start";

  mainButton() {
    const startButton = document.getElementById("start_button");
    if (this.buttonStatus == "start") {
      this.startTimer(0, 5);
      this.buttonStatus = "counting";
    } else if (this.buttonStatus == "done") {
      this.raiseBar();
      this.buttonStatus = "start";
      startButton.innerHTML = "Start";
      startButton.style.color = "var(--ion-color-light)"
    }
    console.log(this.buttonStatus)
  }

  raiseBar() {
    const waves:any = document.getElementsByClassName("waveWrapperInner");

    for(let i = 0; i < waves.length; i++) {
      let currentBottom = window.getComputedStyle(waves[i]).getPropertyValue("bottom").split("px")
      console.log(currentBottom)
      waves[i].style.bottom = (parseInt(currentBottom[0]) + 100) + "px";
    }
    console.log("bar raised")
  }

  startTimer(minute, sec) {
    const startButton = document.getElementById("start_button")
    let timer = setInterval(() => {
      startButton.innerHTML = minute + ":" + sec;
      if (sec == 0) {
        if (minute == 0) {
          this.buttonStatus = "done";
          startButton.innerHTML = "Claim";
          startButton.style.color = "var(--ion-color-warning-tint)";
          clearInterval(timer);
          console.log(this.buttonStatus)
        }
        minute --;
        sec = 60;
      }
      sec--;
    }, 1000);
  }

}
