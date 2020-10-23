import { newSpecPage } from '@stencil/core/testing';
import { BookImage } from '../book-image';

describe('book-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BookImage],
      html: `<book-image></book-image>`,
    });
    expect(page.root).toEqualHtml(`
      <book-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </book-image>
    `);
  });
});
