const { test, expect } = require('@playwright/test')

test("Handle dropdowns", async ({ page }) => {

    await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

    //Multiple ways to select option from the dropdown
    //await page.locator("//select[@name='dropdown']").selectOption({label:'Drop Down Item 1'});  //label/ visible text
    //await page.locator("//select[@name='dropdown']").selectOption('Drop Down Item 1');  //visible text
    //await page.locator("//select[@name='dropdown']").selectOption({value: 'dd1'}); // by using value
    //await page.locator("//select[@name='dropdown']").selectOption({index: 1});  // by using index
    //await page.selectOption("//select[@name='dropdown']",'Drop Down Item 3'); //by text

    //Assertions
    //1) check number of options in dropdown - Approach1
    //const options=await page.locator('//select[@name="dropdown"]/option')
    //await expect(options).toHaveCount(6);

    //2) check number of options in dropdown - Appraoch2
    //const options=await page.$$('//select[@name="dropdown"]/option')
    //console.log("Number of options:", options.length)
    //await expect(options.length).toBe(6);

    //3) check presence of value in the dropdown - Appraoch1
    //const content=await page.locator('//select[@name="dropdown"]').textContent()
    //await expect(content.includes('Drop Down Item 1')).toBeTruthy();

    //4) check presence of value in the dropdown - Approach 2 - using looping
    /*const options=await page.$$('//select[@name="dropdown"]/option')
    let status=false;
    for(const option of options)
    {
      //console.log(await option.textContent())
      let value=await option.textContent();
      if(value.includes('Drop Down Item 1'))
      {
        status=true;
        break;
      }
    }
    expect(status).toBeTruthy();*/



    //5) select option from dropdown using loop 
    const options = await page.$$('//select[@name="dropdown"]/option')
    for (const option of options) {
        let value = await option.textContent();
        value= value.trim();
        if (value.includes('Drop Down Item 6')) {
            await page.selectOption("//select[@name='dropdown']", value);
            break;
        }
    }


    await page.waitForTimeout(5000);

})