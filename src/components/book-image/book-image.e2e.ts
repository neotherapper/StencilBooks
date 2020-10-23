import { newE2EPage } from '@stencil/core/testing';

describe('book-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<book-image></book-image>');

    const element = await page.find('book-image');
    expect(element).toHaveClass('hydrated');
  });
});
