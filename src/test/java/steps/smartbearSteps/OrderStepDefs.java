package steps.smartbearSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.smartbearPages.HomePage;
import pages.smartbearPages.LoginPage;
import pages.smartbearPages.OrderPage;
import pages.smartbearPages.ViewAllOrdersPage;
import utilities.Config;
import utilities.Driver;

import java.util.List;

public class OrderStepDefs {

    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();
    OrderPage orderPage = new OrderPage();
    ViewAllOrdersPage viewAllOrdersPage = new ViewAllOrdersPage();

    @Given("User is logged into SmartBear Tester account and on Order page")
    public void user_is_logged_into_SmartBear_Tester_account_and_on_Order_page() {
        Driver.getDriver().get(Config.getProperties("smarbearURL"));
        loginPage.usernameInput.sendKeys(Config.getProperties("username"));
        loginPage.passwordInput.sendKeys(Config.getProperties("password"));
        loginPage.loginButton.click();
        homePage.orderButton.click();

    }

    @When("User selects {string} from product dropdown")
    public void user_selects_from_product_dropdown(String string) {

        Select select = new Select(orderPage.product);
        select.selectByVisibleText(string);

    }

    @When("User enters {string} to quantity")
    public void user_enters_to_quantity(String string) {
        orderPage.quantity.sendKeys(string);
    }

    @When("User enters {string} to costumer name")
    public void user_enters_to_costumer_name(String string) {
        orderPage.customerName.sendKeys(string);
    }

    @When("User enters {string} to street")
    public void user_enters_to_street(String string) {
        orderPage.street.sendKeys(string);
    }

    @When("User enters {string} to city")
    public void user_enters_to_city(String string) {
        orderPage.city.sendKeys(string);
    }

    @When("User enters {string}to state")
    public void user_enters_to_state(String string) {
        orderPage.state.sendKeys(string);
    }

    @When("User enters {string} to zip")
    public void user_enters_to_zip(String string) {
        orderPage.zip.sendKeys(string);
    }

    @When("User selects {string} as card type")
    public void user_selects_as_card_type(String string) {

        if(string.equals("Visa")){
            orderPage.cardTypeVisa.click();
        }else if(string.equals("MasterCard")){
            orderPage.cardTypeMasterCard.click();
        }else if(string.equals("American Express")){
            orderPage.cardTypeAmericanExpress.click();
        }

    }

    @When("User enters {string} to card number")
    public void user_enters_to_card_number(String string) {
        orderPage.cardNumber.sendKeys(string);
    }

    @When("User enters {string} to expiration date")
    public void user_enters_to_expiration_date(String string) {
        orderPage.expirationDate.sendKeys(string);
    }

    @When("User clicks process button")
    public void user_clicks_process_button() {
        orderPage.processButton.click();
    }

    @Then("User verifies {string} is in the list")
    public void user_verifies_is_in_the_list(String string) {
        viewAllOrdersPage.viewAllOrdersLink.click();
        boolean check = false;
        List<WebElement> names = viewAllOrdersPage.names;

        for(WebElement name: names){
            if(name.getText().equals(string)){
                check = true;
            }
        }

        Assert.assertTrue(check);
    }

}
