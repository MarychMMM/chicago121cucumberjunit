package ExtendReport;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.reporter.ExtentHtmlReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

public class ExtendRep {

    public static void main(String[] args) {

        ExtentHtmlReporter configs = new ExtentHtmlReporter("./extendReport/report.html");
        configs.config().setTheme(Theme.DARK);
        ExtentReports extentReports = new ExtentReports();
        extentReports.attachReporter(configs);
        System.out.println("start test");

        ExtentTest extentTest = extentReports.createTest("Google search");
        extentTest.pass("It is passing");
        extentTest.fail("Failed");
        extentReports.flush();
        System.out.println("completed");

    }

}
