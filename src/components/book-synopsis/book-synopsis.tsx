import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'book-synopsis',
  styleUrl: 'book-synopsis.css',
  shadow: true,
})
export class BookSynopsis {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
