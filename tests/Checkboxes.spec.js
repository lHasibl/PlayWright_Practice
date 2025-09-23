const { test, expect } = require('@playwright/test');

test("Handle checkboxes", async ({ page }) => {
    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

    //single checkbox
    await page.locator("//input[@value='cb1']").check();

    //await page.check("//input[@id='monday' and @type='checkbox']");
    expect(await page.locator("//input[@value='cb1']")).toBeChecked();
    expect(await page.locator("//input[@value='cb1']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@value='cb2']").isChecked()).toBeFalsy();

    //Multiple checkboxes
    const checkboxLocators = [
        "//input[@value='cb1']",
        "//input[@value='cb2']",
        "//input[@value='cb3']"
    ];

    for (const locator of checkboxLocators) {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(5000);

    for (const locator of checkboxLocators) // unselect multiple checkboxes which are already selected
    {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
    }

    await page.waitForTimeout(5000);


})