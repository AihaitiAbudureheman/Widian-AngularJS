import { WidianAppPage } from './app.po';

describe('widian-app App', function() {
  let page: WidianAppPage;

  beforeEach(() => {
    page = new WidianAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('widian works!');
  });
});
