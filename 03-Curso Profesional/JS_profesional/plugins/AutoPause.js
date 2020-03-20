class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handlerIntersection = this.handlerIntersection.bind(this);
  }
  run(player) {
    this.player = player;
    //new IntersectionObserver (handler, config)
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: this.threshold
    });
    observer.observe(player.media);
  }
  handlerIntersection(entries) {
    const entry = entries[0];
    // console.log(entry);
    const isVisible = entry.intersectionRatio >= this.threshold;
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;