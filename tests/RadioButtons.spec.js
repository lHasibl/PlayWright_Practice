const {test, expect}=require('@playwright/test');

test('handle radio button', async ({page})=>{

    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

    //Radio button
    await page.locator("//input[@value='rd1']").check(); //male
    //await page.check("//input[@value='rd1']");
    await expect(await page.locator("//input[@value='rd1']")).toBeChecked();
    await expect(await page.locator("//input[@value='rd1']").isChecked()).toBeTruthy(); //male
    await expect(await page.locator("//input[@value='rd2']").isChecked()).toBeFalsy(); //female

    await page.waitForTimeout(5000); //pausing code

})