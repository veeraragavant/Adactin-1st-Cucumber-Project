package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\feature",glue = "stepdefinition", tags = "@Regression", dryRun = false, monochrome = true, plugin = {"json:target\\Report.json","com.cucumber.listener.ExtentCucumberFormatter:target\\Report\\E_Report.html"})


public class Runner {

	
	
}
