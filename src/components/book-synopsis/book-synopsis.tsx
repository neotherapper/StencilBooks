import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'book-synopsis',
  styleUrl: 'book-synopsis.css',
  shadow: true,
})
export class BookSynopsis {

  @Prop() synopsis: string;

  render() {
    return <p class="book_synopsis"innerHTML={this.synopsis}></p>;
  }
}
