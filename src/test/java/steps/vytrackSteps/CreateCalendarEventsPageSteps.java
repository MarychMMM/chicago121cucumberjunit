package steps.vytrackSteps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.vytrackPages.CreateCalendarEventsPages;
import pages.vytrackPages.DashboardsPage;
import pages.vytrackPages.VytrackLoginPage;
import utilities.Config;
import utilities.Driver;
import utilities.SeleniumUtils;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CreateCalendarEventsPageSteps {

    private VytrackLoginPage vytrackLoginPage = new VytrackLoginPage();
    private CreateCalendarEventsPages createCalendarEventsPages = new CreateCalendarEventsPages();

    @Given("the user is signed in as a sale manager")
    public void the_user_is_signed_in_as_a_sale_manager() {

        Driver.getDriver().get(Config.getProperties("vytrackUrl"));
        vytrackLoginPage.usernameInput.sendKeys(Config.getProperties("vytrackUsername"));
        vytrackLoginPage.passwordInput.sendKeys(Config.getProperties("vytrackPassword"));
        vytrackLoginPage.loginButton.click();
    }

    @When("the user is on the All Calendar Events page under the Activities tab")
    public void the_user_is_on_the_All_Calendar_Events_page_under_the_Activities_tab() {


        SeleniumUtils.pauseWithTreadSleep(5);
        DashboardsPage.navigateToModule("Activities", "Calendar Events");
    }

    @When("the user is taken to the Create Calendar Events page after clicking the Create Calendar Event button")
    public void the_user_is_taken_to_the_Create_Calendar_Events_page_after_clicking_the_Create_Calendar_Event_button() {

        SeleniumUtils.waitForVisibility(createCalendarEventsPages.createCalendarEventsBtn,5);
        createCalendarEventsPages.createCalendarEventsBtn.click();
    }

    @When("the user should see their name as the default value of of the owner field")
    public void the_user_should_see_their_name_as_the_default_value_of_of_the_owner_field() {

        SeleniumUtils.pauseWithTreadSleep(2);

        String owner = createCalendarEventsPages.ownerField.getText().trim();
        String loginUser = createCalendarEventsPages.loginUser.getText().trim();
        Assert.assertEquals(owner,loginUser);

    }

    @When("the user should see the title field to be empty by default")
    public void the_user_should_see_the_title_field_to_be_empty_by_default() {

        SeleniumUtils.pauseWithTreadSleep(2);
        Assert.assertTrue(createCalendarEventsPages.titleField.getAttribute("value").isEmpty());
    }

    @When("the user should see the start date field with the default value of the current date")
    public void the_user_should_see_the_start_date_field_with_the_default_value_of_the_current_date() {

        String expectedDate = LocalDate.now().format(DateTimeFormatter.ofPattern("MMM d, yyyy"));

        SeleniumUtils.pauseWithTreadSleep(2);
        String actualDate = createCalendarEventsPages.startDate.getAttribute("value");

        Assert.assertEquals(expectedDate,actualDate);
    }

    @When("the user should see the start time field with the default value of the current time")
    public void the_user_should_see_the_start_time_field_with_the_default_value_of_the_current_time() {

        String expectedTime = LocalTime.now().minusHours(2).format(DateTimeFormatter.ofPattern("hh:mm a"));

        SeleniumUtils.pauseWithTreadSleep(2);
        String actualTime = createCalendarEventsPages.starTime.getAttribute("value");
        Assert.assertEquals(expectedTime,actualTime);
    }

    @When("the user clicks on the Repeat checkbox")
    public void the_user_clicks_on_the_Repeat_checkbox() {
        createCalendarEventsPages.repeatCheckBox.click();
    }

    @Then("the user sees the Repeats select field with the following options: Daily, Weekly, Monthly, Yearly")
    public void the_user_sees_the_Repeats_select_field_with_the_following_options_Daily_Weekly_Monthly_Yearly() {


        List<String> actualOptions = SeleniumUtils.getAllSelectOptions(createCalendarEventsPages.repeatSelectField);
        List<String> expectedOptions = new ArrayList<>(Arrays.asList("Daily","Weekly","Monthly","Yearly"));
//        List<String> expectedOptions = new ArrayList<>();
//        expectedOptions.add("Daily"); expectedOptions.add("Weekly"); expectedOptions.add("Monthly");
//        expectedOptions.add("Yearly");

        Assert.assertEquals(expectedOptions, actualOptions);
    }
}
