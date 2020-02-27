package steps.etsySteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.etsyPages.HomePage;
import utilities.Config;
import utilities.Driver;

public class EtsySearchStepsDef {

    HomePage homePage = new HomePage();

    @Given("User is on Etsy home page")
    public void user_is_on_Etsy_home_page() {
        Driver.getDriver().get(Config.getProperties("etsyUrl"));
    }

    @When("User searches for {string}")
    public void user_searches_for(String string) {
        homePage.searchBox.sendKeys(string+ Keys.ENTER);
    }

    @Then("User should see {string} in  Etsy title")
    public void user_should_see_in_Etsy_title(String string) {
        String actual = Driver.getDriver().getTitle();
        Assert.assertTrue(actual.contains(string));
    }

}
