package utilities;

import org.junit.AfterClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class SeleniumUtils {

    public static List<String> getAllSelectOptions(WebElement element){
        Select select = new Select(element);
        List<String> options = new ArrayList<>();

        for (WebElement eachOption: select.getOptions()){
            options.add(eachOption.getText());
        }

        return options;
    }

    public static void waitForVisibility(WebElement element, int seconds) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), seconds);
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void pauseWithTreadSleep(int seconds){
        try {
            Thread.sleep(seconds * 1000);
        }catch (InterruptedException e){
            e.printStackTrace();
        }
    }

    public static void explicitWaitForInvisibility(WebElement element, int seconds){
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), seconds);
        wait.until(ExpectedConditions.invisibilityOf(element));

    }



}
