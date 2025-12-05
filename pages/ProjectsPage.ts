import { Page, Locator } from '@playwright/test';
import { Navigation } from './Navigation';

export class ProjectsPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly projectCards: Locator;
  readonly projectImages: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.heading = page.locator('h1, h2, h3').first();
    // Look for any card-like structures or images
    this.projectCards = page.locator('[class*="card"], [class*="project"], [class*="portfolio"], [class*="item"]');
    this.projectImages = page.locator('img[src*="project"], img[src*="portfolio"]');
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(1000);
    
    const nav = new Navigation(this.page);
    await nav.projectsLink.first().click();
    await this.page.waitForTimeout(2000);
  }
}