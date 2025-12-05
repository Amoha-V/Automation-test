import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navigation: Locator;
  readonly homeLink: Locator;
  readonly aboutLink: Locator;
  readonly whatWeDoLink: Locator;
  readonly projectsLink: Locator;
  readonly contactLink: Locator;
  readonly heroHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // The site uses a custom navigation structure, not <nav>
    this.navigation = page.locator('header, [class*="nav"], [class*="menu"], [role="navigation"]').first();
    
    // Links use hash navigation (#page-N)
    this.homeLink = page.locator('a[href="/"], a[href="#home"], a[href="#page-1"]').first();
    this.aboutLink = page.locator('a[href*="about"], a[href="#page-2"]').first();
    this.whatWeDoLink = page.locator('a[href*="what-we-do"], a[href="#page-3"]').first();
    this.projectsLink = page.locator('a[href*="project"], a[href*="execution"], a[href="#page-4"]');
    this.contactLink = page.locator('a[href*="contact"], a[href="#page-6"]').first();
    
    this.heroHeading = page.locator('h1, h2').first();
  }

  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.page.waitForTimeout(2000);
  }
}