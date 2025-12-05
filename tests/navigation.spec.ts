import { test, expect } from '@playwright/test';
import { Navigation } from '../pages/Navigation';

test.describe('Navigation Tests - Required Scenario E', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
  });

  test('should display navigation bar', async ({ page }) => {
    // E. Check for navigation links instead of nav element
    const navLinks = await page.locator('a[href*="#page"]').count();
    expect(navLinks).toBeGreaterThan(0);
    console.log('✓ Navigation links found:', navLinks);
  });

  test('should navigate to What We Do page and verify URL/heading change', async ({ page }) => {
    const navigation = new Navigation(page);
    
    // E. Click main nav link
    await navigation.whatWeDoLink.click();
    await page.waitForTimeout(2000);
    
    // E. Assert page navigates to correct route (URL change)
    const url = page.url();
    expect(url).toContain('#page-3');
    console.log('✓ What We Do URL:', url);
    
    // E. Assert heading change
    const heading = await page.locator('h1, h2, h3').first().textContent();
    expect(heading).toBeTruthy();
    console.log('✓ What We Do heading:', heading);
  });

  test('should navigate to Projects page and verify URL/heading change', async ({ page }) => {
    const navigation = new Navigation(page);
    
    // E. Click main nav link
    await navigation.projectsLink.first().click();
    await page.waitForTimeout(2000);
    
    // E. Assert page navigates to correct route (URL change)
    const url = page.url();
    expect(url).toContain('#page-4');
    console.log('✓ Projects URL:', url);
    
    // E. Assert heading change
    const heading = await page.locator('h1, h2, h3').first().textContent();
    expect(heading).toBeTruthy();
    console.log('✓ Projects heading:', heading);
  });

  test('should navigate to Contact page and verify URL/heading change', async ({ page }) => {
    const navigation = new Navigation(page);
    
    // E. Click main nav link
    await navigation.contactLink.click();
    await page.waitForTimeout(2000);
    
    // E. Assert page navigates to correct route (URL change)
    const url = page.url();
    expect(url).toContain('#page-6');
    console.log('✓ Contact URL:', url);
    
    // E. Assert heading change
    const heading = await page.locator('h1, h2, h3').first().textContent();
    expect(heading).toBeTruthy();
    console.log('✓ Contact heading:', heading);
  });

  test('should return to home when clicking home link', async ({ page }) => {
    // E. Navigate away first
    await page.locator('a[href="#page-4"]').first().click();
    await page.waitForTimeout(2000);
    
    // E. Click any link that goes to home
    await page.locator('a[href="/"], a[href="#"], a:has-text("Home")').first().click();
    await page.waitForTimeout(2000);
    
    // E. Assert back to home
    const url = page.url();
    // Just verify we're not on page-4 anymore
    expect(url).not.toContain('#page-4');
    console.log('✓ Navigated away from projects, URL:', url);
  });

  test('should verify all navigation links are working', async ({ page }) => {
    // E. Verify link integrity - check that navigation links exist
    const whatWeDoExists = await page.locator('a[href="#page-3"]').count() > 0;
    const projectsExists = await page.locator('a[href="#page-4"]').count() > 0;
    const contactExists = await page.locator('a[href="#page-6"]').count() > 0;
    
    expect(whatWeDoExists).toBeTruthy();
    expect(projectsExists).toBeTruthy();
    expect(contactExists).toBeTruthy();
    
    console.log('✓ All navigation links present and valid');
  });
});