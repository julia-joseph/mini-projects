import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.scss'],
})
export class DragNDropComponent implements OnInit {
  boxes = [
    {
      beingDragged: false,
      beingHovered: false,
      isFilled: true,
      isInvisible: false,
    },
    {
      beingDragged: false,
      beingHovered: false,
      isFilled: false,
      isInvisible: false,
    },
    {
      beingDragged: false,
      beingHovered: false,
      isFilled: false,
      isInvisible: false,
    },
    {
      beingDragged: false,
      beingHovered: false,
      isFilled: false,
      isInvisible: false,
    },
    {
      beingDragged: false,
      beingHovered: false,
      isFilled: false,
      isInvisible: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDrop(e: any, i: number) {
    this.boxes[i].isFilled = true;
    this.boxes[i].beingHovered = false;
    console.log('onDrop', e);
  }

  onDragOver(e: any, i: number) {
    e.preventDefault();
    this.boxes[i].beingHovered = true;
    console.log('onDragOver', e);
  }

  onDragEnter(e: any, i: number) {
    e.preventDefault();
    // this.boxes[i].beingHovered = true;
    console.log('onDragEnter', e);
  }

  onDragLeave(e: any, i: number) {
    console.log('onDragLeave', e);
    this.boxes[i].beingHovered = false;
    this.boxes[i].beingDragged = false;
  }

  onDragStart(e: any, i: number) {
    console.log('onDragStart', e);
    this.boxes[i].beingDragged = true;
    setTimeout(() => {
      this.boxes[i].isFilled = false;
    }, 1);
  }

  onDragEnd(e: any, i: number) {
    console.log('onDragEnd', e);
    this.boxes[i].beingDragged = false;
  }
}
