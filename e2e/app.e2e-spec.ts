import { Care360webPage } from './app.po';

describe('care360web App', function() {
  let page: Care360webPage;

  beforeEach(() => {
    page = new Care360webPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
