package pages.wikiPages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ResultPage {

    public ResultPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//h1")
    public WebElement mainHeader;

    @FindBy(xpath = "//table[@class='infobox biography vcard']/tbody/tr/th")
    public WebElement imageHeader;

}
