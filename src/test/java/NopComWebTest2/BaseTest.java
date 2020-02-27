package NopComWebTest2;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;

public class BaseTest extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();

    @BeforeTest
    public void openBrowser() {
        browserSelector.setupBrowser();
    }

    @AfterTest
    public void closeBrowser()
    {
        //browserSelector.closeTheBrowser();
    }
}
