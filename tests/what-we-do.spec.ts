import { test, expect } from '@playwright/test';
import { WhatWeDoPage } from '../pages/WhatWeDoPage';

test.describe('What We Do Tests - Required Scenario C', () => {
  
  test('should navigate to What We Do section', async ({ page }) => {
    const whatWeDoPage = new WhatWeDoPage(page);
    await whatWeDoPage.goto();
    
    // C. Assert navigated successfully
    const url = page.url();
    expect(url).toContain('#page-3');
    console.log('✓ Navigated to:', url);
  });

  test('should display What We Do heading', async ({ page }) => {
    const whatWeDoPage = new WhatWeDoPage(page);
    await whatWeDoPage.goto();
    
    // C. Assert heading is visible
    await expect(whatWeDoPage.heading).toBeVisible({ timeout: 10000 });
    const headingText = await whatWeDoPage.heading.textContent();
    console.log('✓ What We Do heading:', headingText);
  });

  test('should display What We Do content section', async ({ page }) => {
    const whatWeDoPage = new WhatWeDoPage(page);
    await whatWeDoPage.goto();
    
    // C. Assert complete section is visible
    await expect(whatWeDoPage.content).toBeVisible({ timeout: 10000 });
    console.log('✓ What We Do content section is visible');
  });

  test('should have service information', async ({ page }) => {
    const whatWeDoPage = new WhatWeDoPage(page);
    await whatWeDoPage.goto();
    
    // Check for any service-related content
    const contentText = await whatWeDoPage.content.textContent();
    expect(contentText?.length).toBeGreaterThan(50);
    console.log('✓ Service content length:', contentText?.length);
  });
});
