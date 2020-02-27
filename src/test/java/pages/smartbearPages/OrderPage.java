package pages.smartbearPages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class OrderPage {

    public OrderPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//select[@id='ctl00_MainContent_fmwOrder_ddlProduct']")
    public WebElement product;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_txtQuantity']")
    public WebElement quantity;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_txtName']")
    public WebElement customerName;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_TextBox2']")
    public WebElement street;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_TextBox3']")
    public WebElement city;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_TextBox4']")
    public WebElement state;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_TextBox5']")
    public WebElement zip;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_cardList_0']")
    public WebElement cardTypeVisa;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_cardList_1']")
    public WebElement cardTypeMasterCard;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_cardList_2']")
    public WebElement cardTypeAmericanExpress;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_TextBox6']")
    public WebElement cardNumber;

    @FindBy(xpath = "//input[@id='ctl00_MainContent_fmwOrder_TextBox1']")
    public WebElement expirationDate;

    @FindBy(xpath = "//a[@id='ctl00_MainContent_fmwOrder_InsertButton']")
    public WebElement processButton;
}
