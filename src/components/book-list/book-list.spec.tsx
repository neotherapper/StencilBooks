import { newSpecPage } from '@stencil/core/testing';
import { BookItem } from '.';

describe('book-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BookItem],
      html: `<book-item></book-item>`,
    });
    expect(page.root).toEqualHtml(`
      <book-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </book-item>
    `);
  });
});
