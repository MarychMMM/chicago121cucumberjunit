package pages.googlePages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GoogleHomePage {

    public GoogleHomePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(name = "q")
    public WebElement searchBox;

    @FindBy(xpath = "(//input[@value='Google Search'])[2]")
    public WebElement searchButton;

}
