import { Component, Prop, h, Watch } from '@stencil/core';
import { formatBookHeader } from '../../utils/utils';

export interface BookData {
  rate: string;
  title: string;
  place: string;
}

@Component({
  tag: 'book-list-item',
  styleUrl: 'book-list-item.css',
  shadow: true,
})
export class BookListItem {
  bookData: BookData;

  /**
   * The bookData object
   */
  @Prop() book: string;

  @Watch('book')
  dataDidChangeHandler(newValue: string) {
    if (newValue) {
      this.bookData = JSON.parse(newValue);
    }
  }

  componentWillLoad() {
    this.dataDidChangeHandler(this.book);
  }

  private getHeader(): string {
    return formatBookHeader(this.bookData.place, this.bookData.title, Number(this.bookData.rate) );
  }

  render() {
    return <header innerHTML={this.getHeader()}></header>;
  }
}
