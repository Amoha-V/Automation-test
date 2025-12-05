
# PangeoInfraFabrix - Automated Test Suite

E2E test automation for [PangeoInfraFabrix](https://pangeoinfrafabrix.com) using Playwright and TypeScript.

## Test Results

**24 tests passing** 
## Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/pangeo-infrafabrix-automation.git
cd pangeo-infrafabrix-automation

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium
```

### Running Tests

#### Windows PowerShell

```powershell
# Default run (uses baseURL from config)
npm test

# With custom BASE_URL
`$env:BASE_URL="https://pangeoinfrafabrix.com"; npm test

# View HTML report
npx playwright show-report
```

#### Linux/Mac

```bash
# Default run
npm test

# With custom BASE_URL
BASE_URL=https://pangeoinfrafabrix.com npm test

# View HTML report
npx playwright show-report
```



## Project Structure

```
pangeo-infrafabrix-automation/
├── .github/
│   └── workflows/
│       └── e2e.yml              # CI/CD workflow
├── pages/                       # Page Object Models
│   ├── HomePage.ts
│   ├── Navigation.ts
│   ├── ProjectsPage.ts
│   └── WhatWeDoPage.ts
├── tests/                       # Test files
│   ├── smoke.spec.ts
│   ├── homepage.spec.ts
│   ├── navigation.spec.ts
│   ├── projects.spec.ts
│   └── what-we-do.spec.ts
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json               # TypeScript configuration
├── package.json
├── README.md                   # This file
└── report.md                   # Architecture documentation
```

## Test Coverage

All required scenarios implemented and passing:

### A. Homepage Smoke Tests (6 tests)

- Page title verification ("Home")
- Navigation structure validation (7 links found)
- Hero heading visibility
- All navigation links functional

### B. What We Do Tests (4 tests)

- Navigation to section (#page-3)
- Heading visibility
- Content section complete
- Service information present (3962 characters)

### C. Projects Tests (4 tests)

- Navigation to section (#page-4)
- Heading visibility
- At least 3 visual elements (34 images, 9 sections found)
- Substantial content

### D. Navigation & Link Integrity (6 tests)

- Navigation bar exists
- All links navigate correctly
- URL changes verified
- Heading changes verified

### E. Smoke Tests (4 tests)

- Website accessibility (200 status)
- Page title set
- Navigation exists
- Main content visible

**Total: 24 automated tests covering all requirements**

## Environment Variables

| Variable   | Description         | Default                         | Required |
| ---------- | ------------------- | ------------------------------- | -------- |
| `BASE_URL` | Website URL to test | `https://pangeoinfrafabrix.com` | No       |

### Examples

```bash
# Test production (default)
npm test

# Test staging
BASE_URL=https://staging.pangeoinfrafabrix.com npm test

# Test local development
BASE_URL=http://localhost:3000 npm test
```

## Architecture

### Page Object Model (POM)

Tests use the Page Object pattern for maintainability and reusability.

**Benefits:**

- Single source of truth for selectors
- Easy maintenance when UI changes
- Reusable across multiple tests
- Readable test code

### Test Organization

- `smoke.spec.ts` - Basic health checks
- `homepage.spec.ts` - Homepage functionality
- `navigation.spec.ts` - Navigation flow
- `projects.spec.ts` - Projects section
- `what-we-do.spec.ts` - Services section

## Safety & Best Practices

### Production Safety

- **Read-only operations** - All tests use only GET requests
- **No data modification** - No POST/PUT/DELETE operations
- **No contact form spam** - Tests only verify visibility
- **No authentication** - Tests public pages only

### Test Stability

- **Explicit waits** - Prevents race conditions
- **Flexible selectors** - Multiple fallback options
- **Retry logic** - Automatic retries in CI
- **Isolated tests** - No dependencies between tests

## CI/CD Integration

Tests run automatically on:

- Push to `main` branch
- Pull requests
- Manual workflow dispatch

### Artifacts Generated

- HTML test report
- Screenshots (on failure)
- Videos (on failure)
- JSON results
- Playwright trace files

### Viewing CI Results

1. Go to **Actions** tab in GitHub
2. Select the workflow run
3. Download artifacts from the bottom of the page
4. Open `playwright-report/index.html`

## Troubleshooting

### Tests failing locally?

**Issue:** Timeout errors

```bash
# Solution: Run in headed mode to see what's happening
npm test -- --headed --timeout=60000
```

**Issue:** BASE_URL not working (Windows)

```powershell
# Solution: Use PowerShell syntax
`$env:BASE_URL="https://example.com"; npm test
```

**Issue:** Browsers not installed

```bash
# Solution: Install Playwright browsers
npx playwright install
```

### View detailed error information

```bash
# Open HTML report with screenshots and videos
npx playwright show-report

# View trace file for specific test
npx playwright show-trace test-results/<test-name>/trace.zip
```

## Test Metrics

- **Pass Rate:** 100% (24/24 tests)
- **Execution Time:** ~1.2 minutes
- **Stability:** 3 consecutive successful runs verified
- **Coverage:** All 5 required scenarios implemented

## Future Enhancements

- Cross-browser testing (Firefox, Safari)
- Mobile viewport testing
- Visual regression testing
- Accessibility testing (axe-core)
- Performance testing (Lighthouse)
- API layer testing

## Support & Documentation

- **Full documentation:** See [report.md](./report.md)
- **Playwright docs:** https://playwright.dev
- **Issue tracker:** GitHub Issues


