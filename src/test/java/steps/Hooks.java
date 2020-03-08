package runners;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;
import utilities.TempStorage;

public class Hooks {

    @Before // cucumber.api.java
    public void setup(){
        //Anything that you want to run before each Scenario
        TempStorage.clear();
    }

    @After
    public void tearDown(Scenario scenario){

        if(scenario.isFailed()){

            byte [] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }

        System.out.println("Hooks");
        Driver.quitDriver();
    }

}
