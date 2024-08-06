import puppeteer from 'puppeteer';

describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.city');
  })

  afterAll(() => {
    browser.close();
  });

  test('user has not search for any cities yet, show all events', async () => {
    const events = await page.$('.event')
    expect(events).toBeDefined();
  })

  test('user should see a list of suggestions when typying for a city search textbox', async () => {
    const suggestions = await page.$('.suggestions')
    await page.type('.city', 'Berlin')
    expect(suggestions).toBeDefined()
  })

  test('user should be able to selct a city from the suggested list', async () => {
    await page.click('.suggestions .suggestion-item');
    const location = await page.$('.city');
    expect(location).toBeDefined()
  })
})

describe('show/hide event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeDefined();
  });

	test('User can collapse an event to hide details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .details');
    expect(eventDetails).toBeNull();
  });
});