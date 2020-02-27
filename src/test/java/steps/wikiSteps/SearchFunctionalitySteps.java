package steps.wikiSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.wikiPages.ResultPage;
import pages.wikiPages.WikiHomePage;
import utilities.Config;
import utilities.Driver;

public class SearchFunctionalitySteps {

    WikiHomePage wikiHomePage = new WikiHomePage();
    ResultPage resultPage = new ResultPage();

    @Given("User is onWikipedia home page")
    public void user_is_onWikipedia_home_page() {
        Driver.getDriver().get(Config.getProperties("wikiUrl"));
    }

    @When("User types {string} in the wiki search box")
    public void user_types_in_the_wiki_search_box(String string) {
        wikiHomePage.searchBox.sendKeys(string);
    }

    @When("User clicks wiki search button")
    public void user_clicks_wiki_search_button() {
        wikiHomePage.searchButton.click();
    }

    @Then("User sees {string} is in the wiki title")
    public void user_sees_is_in_the_wiki_title(String string) {
        Assert.assertTrue(Driver.getDriver().getTitle().contains(string));
    }

    @Then("User sees {string} is in the main header")
    public void user_sees_is_in_the_main_header(String string) {
        String header = resultPage.mainHeader.getText();
        Assert.assertEquals(string,header);
    }

    @Then("User sees {string} is in the image header")
    public void user_sees_is_in_the_image_header(String string) {
        String imageHeader = resultPage.imageHeader.getText();
        Assert.assertEquals(string,imageHeader);
    }

}
