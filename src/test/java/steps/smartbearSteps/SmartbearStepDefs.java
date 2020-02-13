package steps.smartbearSteps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.smartbearPages.HomePage;
import pages.smartbearPages.LoginPage;
import utilities.Config;
import utilities.Driver;

public class SmartbearStepDefs {

    LoginPage loginPage = new LoginPage();
    HomePage homePage = new HomePage();

    @When("User is on SmartBear login page")
    public void user_is_on_SmartBear_login_page() {
        Driver.getDriver().get(Config.getProperties("smarbearURL"));
    }

    @When("User enters correct username")
    public void user_enters_correct_username() {
        loginPage.usernameInput.sendKeys(Config.getProperties("username"));
    }

    @When("User enters correct password")
    public void user_enters_correct_password() {
        loginPage.passwordInput.sendKeys(Config.getProperties("password"));
    }

    @When("User clicks to login button")
    public void user_clicks_to_login_button() {
        loginPage.loginButton.click();
    }


    @Then("User should be logged in and be able to verify {string} text is displayed")
    public void user_should_be_logged_in_and_be_able_to_verify_text_is_displayed(String string) {
        String text = homePage.textWelcomeTester.getText();
        Assert.assertTrue(text.contains(string));
    }


    @When("User enters incorrect password")
    public void user_enters_incorrect_password() {
        loginPage.passwordInput.sendKeys(Config.getProperties("passwordIncorrect"));
    }

    @Then("User should see the error message displayed on the page")
    public void user_should_see_the_error_message_displayed_on_the_page() {
        Assert.assertTrue(loginPage.status.isDisplayed());
    }



}
