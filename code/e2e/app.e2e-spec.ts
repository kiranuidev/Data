import { NessKartPage } from './app.po';

describe('ness-kart App', () => {
  let page: NessKartPage;

  beforeEach(() => {
    page = new NessKartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
