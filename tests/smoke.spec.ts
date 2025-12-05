import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  
  test('website should be accessible', async ({ page }) => {
    const response = await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(response?.status()).toBe(200);
  });

  test('page title should be set', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
    console.log('Page title:', title);
  });

  test('navigation should exist on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
    
    // Check for any clickable navigation elements
    const navLinks = await page.locator('a[href*="#page"], a[href^="/"], header a').count();
    expect(navLinks).toBeGreaterThan(0);
  });

  test('page should have main content', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
    
    const main = page.locator('main').first();
    await expect(main).toBeVisible();
  });
});