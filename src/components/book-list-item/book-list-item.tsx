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

  @Prop() synopsis: string;



  private getHeader(): string {
    return formatBookHeader(this.position, this.title, Number(this.rating) );
  }

  render() {
    return <li>
        <header innerHTML={this.getHeader()}></header>
        <book-synopsis synopsis={this.synopsis}></book-synopsis>
      </li>

  }
}
