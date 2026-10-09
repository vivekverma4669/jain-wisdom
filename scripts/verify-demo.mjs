import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

await mkdir("test-results", { recursive: true });
const edgePath = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const browser = await chromium.launch({
  ...(existsSync(edgePath) ? { executablePath: edgePath } : {}),
  headless: true,
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  for (const width of [375, 768, 1366, 1920]) {
    await page.setViewportSize({ width, height: 950 });
    await page.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    assert.equal(
      await page.locator("h1").textContent(),
      "Discover theWisdom ofJainism.",
    );
    assert.deepEqual(await page.locator('.language-chips > span').allTextContents(), ['English', 'हिन्दी', 'ગુજરાતી', 'मराठी', 'தமிழ்', 'తెలుగు', 'বাংলা', 'ਪੰਜਾਬੀ']);
    const prices = await page.locator('.price').allTextContents();
    assert.ok(prices[0].includes('₹200') && prices[1].includes('₹2,200'), 'Membership currency labels');
    const dimensions = await page.evaluate(() => ({
      viewport: innerWidth,
      content: document.documentElement.scrollWidth,
    }));
    assert.ok(
      dimensions.content <= dimensions.viewport,
      `Horizontal overflow at ${width}: ${JSON.stringify(dimensions)}`,
    );
    await page.screenshot({
      path: `test-results/home-${width}.png`,
      fullPage: true,
    });
    console.log(`PASS: ${width}px layout; no horizontal overflow`);
  }
  await page.getByRole("button", { name: "Search Jain Wisdom" }).click();
  await page
    .getByRole("textbox", { name: "Search demo content" })
    .fill("tirth");
  assert.equal(await page.locator(".search-results a").count(), 2);
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("dialog").count(), 0);
  await page.getByRole("button", { name: "Toggle language preview" }).click();
  assert.ok(await page.locator(".language-notice").isVisible());
  await page.getByRole("button", { name: "Toggle language preview" }).click();
  await page.locator(".wisdom-actions button").first().click();
  assert.equal(
    await page
      .locator(".wisdom-actions button")
      .first()
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Bhajan", exact: true }).click();
  await page.locator(".track-play").first().click();
  assert.equal(await page.locator(".track.is-playing").count(), 1);
  await page.locator(".track-play").first().click();
  assert.equal(await page.locator(".track.is-playing").count(), 0);
  await page.locator(".favorite").first().click();
  assert.equal(
    await page.locator(".favorite").first().getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: "Start Daily Quiz" }).click();
  for (const answer of [0, 1, 2, 0, 3]) {
    await page.locator(".quiz-options button").nth(answer).click();
    await page.locator(".quiz-next").click();
  }
  assert.equal(
    (await page.locator(".quiz-result h3").textContent()).trim(),
    "5 / 5",
  );
  await page.getByRole("button", { name: "Try Again" }).click();
  await page.getByRole("button", { name: "Next month" }).click();
  assert.ok(
    (await page.locator(".calendar-top h3").textContent()).includes("November"),
  );
  await page
    .getByRole("button", { name: "Professional Services", exact: true })
    .click();
  assert.equal(await page.locator(".directory-empty").count(), 1);
  await page.getByRole("button", { name: "See all sample listings" }).click();
  assert.equal(await page.locator(".business-card").count(), 3);
  await page.getByLabel("Name", { exact: true }).fill("Demo Visitor");
  await page.getByLabel("City", { exact: true }).fill("Mumbai");
  await page
    .getByLabel("Area of Interest")
    .selectOption({ label: "Community events" });
  await page.getByRole("button", { name: "Become a Volunteer" }).click();
  assert.ok(
    (await page.locator(".form-status").textContent()).includes(
      "Demo registration received.",
    ),
  );
  await page.setViewportSize({ width: 375, height: 812 });
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page
    .locator(".mobile-nav")
    .getByRole("link", { name: "Explore", exact: true })
    .click();
  assert.equal(await page.locator("dialog").count(), 0);
  assert.equal(new URL(page.url()).hash, "#explore");
  assert.deepEqual(errors, []);
  console.log(
    "PASS: search, keyboard dismissal, language preview, save, audio, favorites, five-question score, calendar, directory, volunteer and mobile navigation. No browser runtime errors.",
  );
} finally {
  await browser.close();
}
