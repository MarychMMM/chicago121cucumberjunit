package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.googlePages.GoogleHomePage;
import utilities.Driver;

public class Google_StepDefs {

    GoogleHomePage googleHomePage = new GoogleHomePage();

    @When("User is on google homepage")
    public void user_is_on_google_homepage() {
        Driver.getDriver().get("https://google.com");
    }

    @Then("User should see title contains Google")
    public void user_should_see_title_contains_Google() {

        String actualTitle = Driver.getDriver().getTitle();
        String expectedTitle = "Google";
        Assert.assertTrue("Title does not contain expected value!",actualTitle.contains(expectedTitle));
    }



    @When("User types wooden spoon into the search box")
    public void user_types_wooden_spoon_into_the_search_box() {

        googleHomePage.searchBox.sendKeys("wooden spoon"+ Keys.ENTER);
    }

//    @When("User clicks to search button")
//    public void user_clicks_to_search_button() {
//
//        googleHomePage.searchButton.click();
//    }

    @Then("User should see wooden spoon in the title")
    public void user_should_see_wooden_spoon_in_the_title() {

        String actualTitle = Driver.getDriver().getTitle();
        String expectedTitle = "wooden spoon";
        Assert.assertTrue(actualTitle.contains(expectedTitle));
    }


}
