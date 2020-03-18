package NopComWebTest2;

import org.openqa.selenium.By;
import org.testng.Assert;

public class SubCategoryPage extends Utils
{
    public void clickOnSubCategory(String subcategory)
    {
        clickOnElement(By.linkText(subcategory));
    }

    public void verifyUserIsOnSubCategoryPage(String subcategory)
    {
        Assert.assertTrue(driver.getCurrentUrl().contains(subcategory));
    }
}
