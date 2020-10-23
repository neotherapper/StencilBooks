import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'book-synopsis',
  styleUrl: 'book-synopsis.css',
  shadow: true,
})
export class BookSynopsis {

  @Prop() synopsis: string;

  render() {
    return <p innerHTML={this.synopsis}></p>;
  }
}
