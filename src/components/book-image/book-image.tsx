import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'book-image',
  styleUrl: 'book-image.css',
  shadow: true,
})

export class BookImage {

  @Prop() imageUrl: string;

  render() {
    return <img src={this.imageUrl}></img>
  }
}

