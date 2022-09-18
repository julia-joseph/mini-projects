import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-sound-board',
  templateUrl: './sound-board.component.html',
  styleUrls: ['./sound-board.component.scss'],
})
export class SoundBoardComponent implements OnInit {
  sounds = [
    {
      name: 'applause',
      url: 'assets/sounds/applause.mp3',
    },
    {
      name: 'boo',
      url: 'assets/sounds/boo.mp3',
    },
    {
      name: 'gasp',
      url: 'assets/sounds/gasp.mp3',
    },
    {
      name: 'tada',
      url: 'assets/sounds/tada.mp3',
    },
    {
      name: 'victory',
      url: 'assets/sounds/victory.mp3',
    },
    {
      name: 'wrong',
      url: 'assets/sounds/wrong.mp3',
    },
  ];
  @ViewChildren('audio') audios: QueryList<ElementRef> | undefined;

  constructor() {}

  ngOnInit(): void {}

  playSound(sound: string) {
    const audioList = this.audios?.toArray();
    const audioIndex = audioList
      ?.map((audio: any) => audio.nativeElement)
      .findIndex((audio: any) => audio.id === sound);

    if (
      audioIndex === -1 ||
      audioIndex === undefined ||
      audioList === undefined
    ) {
    } else {
      this.resetSounds();
      audioList[audioIndex].nativeElement.play();
    }
  }

  resetSounds() {
    this.audios?.forEach((audio) => {
      audio.nativeElement.pause();
      audio.nativeElement.currentTime = 0;
    });
  }
}
