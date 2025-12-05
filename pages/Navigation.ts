import { Page, Locator } from '@playwright/test';

export class Navigation {
  readonly page: Page;
  readonly navBar: Locator;
  readonly homeLink: Locator;
  readonly whatWeDoLink: Locator;
  readonly projectsLink: Locator;
  readonly contactLink: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.navBar = page.locator('header, [class*="nav"], [class*="menu"]').first();
    this.homeLink = page.locator('a[href="/"], a[href="#home"], a[href="#page-1"]').first();
    this.whatWeDoLink = page.locator('a[href="#page-3"]').first();
    this.projectsLink = page.locator('a[href="#page-4"]');
    this.contactLink = page.locator('a[href="#page-6"]').first();
  }
}