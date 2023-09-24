import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slider"
export default class extends Controller {
  static targets = ["img1",
                    "text1",
                    "button1",
                    "img2",
                    "text2",
                    "button2",
                    "img3",
                    "text3",
                    "button3",
                    "img4",
                    "text4",
                    "button4",
                    "img5",
                    "text5",
                    "button5"]

  connect() {
    console.log("Hello from toggle_controller.js")
  }

  enlargeImg(event) {
    this.img1Target.style.transform = "scale(1.5)";
    this.img1Target.style.transition = "transform 0.25s ease";
    this.text1Target.classList.remove("d-none");
    this.img1Target.scrollIntoView();
    this.button2Target.classList.add("disabled")
    this.button3Target.classList.add("disabled")
    this.button4Target.classList.add("disabled")
    this.button5Target.classList.add("disabled")
  }

  resetImg(event) {
    this.img1Target.style.transform = "scale(1)";
    this.img1Target.style.transition = "transform 0.25s ease";
    this.text1Target.classList.add("d-none");
    this.button2Target.classList.remove("disabled")
    this.button3Target.classList.remove("disabled")
    this.button4Target.classList.remove("disabled")
    this.button5Target.classList.remove("disabled")
  }

  enlargeImg2(event) {
    this.img2Target.style.transform = "scale(1.5)";
    this.img2Target.style.transition = "transform 0.25s ease";
    this.text2Target.classList.remove("d-none");
    this.img2Target.scrollIntoView();
    this.button1Target.classList.add("disabled")
    this.button3Target.classList.add("disabled")
    this.button4Target.classList.add("disabled")
    this.button5Target.classList.add("disabled")
  }

  resetImg2(event) {
    this.img2Target.style.transform = "scale(1)";
    this.img2Target.style.transition = "transform 0.25s ease";
    this.text2Target.classList.add("d-none");
    this.button1Target.classList.remove("disabled")
    this.button3Target.classList.remove("disabled")
    this.button4Target.classList.remove("disabled")
    this.button5Target.classList.remove("disabled")
  }

  enlargeImg3(event) {
    this.img3Target.style.transform = "scale(1.5)";
    this.img3Target.style.transition = "transform 0.25s ease";
    this.text3Target.classList.remove("d-none");
    this.img3Target.scrollIntoView();
    this.button1Target.classList.add("disabled")
    this.button2Target.classList.add("disabled")
    this.button4Target.classList.add("disabled")
    this.button5Target.classList.add("disabled")
  }

  resetImg3(event) {
    this.img3Target.style.transform = "scale(1)";
    this.img3Target.style.transition = "transform 0.25s ease";
    this.text3Target.classList.add("d-none");
    this.button1Target.classList.remove("disabled")
    this.button2Target.classList.remove("disabled")
    this.button4Target.classList.remove("disabled")
    this.button5Target.classList.remove("disabled")
  }

  enlargeImg4(event) {
    this.img4Target.style.transform = "scale(1.5)";
    this.img4Target.style.transition = "transform 0.25s ease";
    this.text4Target.classList.remove("d-none");
    this.img4Target.scrollIntoView();
    this.button1Target.classList.add("disabled")
    this.button2Target.classList.add("disabled")
    this.button3Target.classList.add("disabled")
    this.button5Target.classList.add("disabled")
  }

  resetImg4(event) {
    this.img4Target.style.transform = "scale(1)";
    this.img4Target.style.transition = "transform 0.25s ease";
    this.text4Target.classList.add("d-none");
    this.button1Target.classList.remove("disabled")
    this.button2Target.classList.remove("disabled")
    this.button3Target.classList.remove("disabled")
    this.button5Target.classList.remove("disabled")
  }

  enlargeImg5(event) {
    this.img5Target.style.transform = "scale(1.5)";
    this.img5Target.style.transition = "transform 0.25s ease";
    this.text5Target.classList.remove("d-none");
    this.img5Target.scrollIntoView();
    this.button1Target.classList.add("disabled")
    this.button2Target.classList.add("disabled")
    this.button3Target.classList.add("disabled")
    this.button4Target.classList.add("disabled")
  }

  resetImg5(event) {
    this.img5Target.style.transform = "scale(1)";
    this.img5Target.style.transition = "transform 0.25s ease";
    this.text5Target.classList.add("d-none");
    this.button1Target.classList.remove("disabled")
    this.button2Target.classList.remove("disabled")
    this.button3Target.classList.remove("disabled")
    this.button4Target.classList.remove("disabled")
  }
}
