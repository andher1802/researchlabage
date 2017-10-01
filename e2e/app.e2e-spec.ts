import { ResearchlabPage } from './app.po';

describe('researchlab App', () => {
  let page: ResearchlabPage;

  beforeEach(() => {
    page = new ResearchlabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
