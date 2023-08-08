interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(VideoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = VideoPlayerElements.videoPlayer;

    this.playButton = VideoPlayerElements.playButton;

    this.stopButton = VideoPlayerElements.stopButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
    });
    this.stopButton.addEventListener("click", () => {
      this.stop();
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = "Pause";
      return;
    }
    this.videoPlayer.pause();
    this.playButton.innerText = "Play";
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = "Play";
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});
videoPlayer.iniciarEventos();
