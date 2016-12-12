import { browser, element, by } from 'protractor';

export class WidianAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('widian-root h1')).getText();
  }
}
