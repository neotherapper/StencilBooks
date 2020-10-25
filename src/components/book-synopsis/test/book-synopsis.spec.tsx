import { newSpecPage } from '@stencil/core/testing';
import { BookSynopsis } from '../book-synopsis';

describe('book-synopsis', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BookSynopsis],
      html: `<book-synopsis></book-synopsis>`,
    });
    expect(page.root).toEqualHtml(`
      <book-synopsis>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </book-synopsis>
    `);
  });
});
