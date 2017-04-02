import { CompanyxPage } from './app.po';

describe('companyx App', () => {
  let page: CompanyxPage;

  beforeEach(() => {
    page = new CompanyxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
