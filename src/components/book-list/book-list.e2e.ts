import { newE2EPage } from '@stencil/core/testing';

describe('book-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<book-list></book-list>');

    const element = await page.find('book-list');
    expect(element).toHaveClass('hydrated');
  });
});
