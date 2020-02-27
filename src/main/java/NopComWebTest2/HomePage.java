package NopComWebTest2;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import java.util.List;

import static org.testng.Assert.assertTrue;

public class HomePage extends Utils {
    private By _registerLink = By.className("ico-register");
    private By _compareAppleMacBook = By.xpath("//div[@class='product-grid home-page-product-grid']/div[2]/div[2]/div/div[2]/div[3]/div[2]/input");
    private By _compareHtcOneM8 = By.xpath("//div[@class='product-grid home-page-product-grid']/div[2]/div[3]/div/div[2]/div[3]/div[2]/input");
    private By _productComparison = By.linkText("product comparison");
    private By _compareProducts = By.xpath("//h1[text()='Compare products']");
    private By _appleMacBookPro13 = By.xpath("//div[@class='product-grid home-page-product-grid']/div[2]/div[2]/div/div/a/img");
    private By _computer = By.linkText("Computers");
    private By _news = By.linkText("News");
    private By _currency = By.id("customerCurrency");
    private By _priceAppleMacBook = By.xpath("//div[@class='page-body']/div[4]/div[2]/div[2]/div/div[2]/div[3]/div/span");


    public void clickOnRegisterButton() {
        clickOnElement(_registerLink);
    }


    public void clickOnAddToCompareListAppleMacBook() {
        clickOnElement(_compareAppleMacBook);
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public void clickOnAddToCompareListHtcOneM8() {
        clickOnElement(_compareHtcOneM8);
    }

    public void clickOnProductComparison() {
        clickOnElement(_productComparison);
    }

    public void clickOnAppleMacBook()
    {
        clickOnElement(_appleMacBookPro13);
    }

    public void clickOnComputer() {
        clickOnElement(_computer);
    }

    public void clickOnNews() {
        clickOnElement(_news);
    }

    public void changeCurrencyToEuro() {


        selectElementByVisibleText(_currency, "Euro");}
      //  try {
         //   Thread.sleep(3000);
        //} catch (InterruptedException e) {
          //  e.printStackTrace();
        //}
    public void verifyUserAbleToSeeEuroCurrency()
    {
        List<WebElement> productPrice = driver.findElements(By.xpath("//div[@class='prices']/span"));
        for (WebElement we : productPrice) {
            assertTrue(we.getText().contains("Ђ"), "Price not Contains" + "$" + "sign");

        }
    }

    public void verifyAddToCartButton() {
        List<WebElement> listOfItems = driver.findElements(By.xpath("//div[@class='product-item']"));
        SoftAssert softAssert = new SoftAssert();

        for (WebElement item : listOfItems) {
            softAssert.assertTrue(item.getAttribute("innerHTML").contains("Add to cart"), "This item doesn't have Add to cart Button " + item.getText());
        }
        softAssert.assertAll();
    }
}









