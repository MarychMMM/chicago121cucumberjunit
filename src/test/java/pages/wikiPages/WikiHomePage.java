package pages.wikiPages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class WikiHomePage {

    public WikiHomePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//div[@class='search-input']/input")
    public WebElement searchBox;

    @FindBy(xpath = "//i[@class='sprite svg-search-icon']")
    public WebElement searchButton;

}
