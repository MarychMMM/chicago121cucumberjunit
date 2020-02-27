package pages.smartbearPages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class ViewAllOrdersPage {

    public ViewAllOrdersPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[.='View all orders']")
    public WebElement viewAllOrdersLink;

    @FindBy(xpath = "//table[@class='SampleTable']/tbody/tr/td[2]")
    public List<WebElement> names;

}
