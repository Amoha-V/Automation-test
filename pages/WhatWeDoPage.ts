import { Page, Locator } from '@playwright/test';
import { Navigation } from './Navigation';

export class WhatWeDoPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly sections: Locator;
  readonly content: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.heading = page.locator('h1, h2, h3').first();
    this.sections = page.locator('[class*="section"], [class*="service"], [class*="card"]');
    this.content = page.locator('main, [class*="content"]').first();
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(1000);
    
    const nav = new Navigation(this.page);
    await nav.whatWeDoLink.click();
    await this.page.waitForTimeout(2000);
  }
}