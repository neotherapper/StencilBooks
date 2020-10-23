import { Component, Prop, h } from '@stencil/core';
import { formatBookHeader } from '../../utils/utils';

@Component({
  tag: 'book-list-item',
  styleUrl: 'book-list-item.css',
  shadow: true,
})
export class BookListItem {
  /**
   * The bookData object
   */
  @Prop() rating: string;

  @Prop() title: string;

  @Prop() position: string;

  private getHeader(): string {
    return formatBookHeader(this.position, this.title, Number(this.rating) );
  }

  render() {
    return <header innerHTML={this.getHeader()}></header>;
  }
}
