import { newE2EPage } from '@stencil/core/testing';

describe('book-synopsis', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<book-synopsis></book-synopsis>');

    const element = await page.find('book-synopsis');
    expect(element).toHaveClass('hydrated');
  });
});
