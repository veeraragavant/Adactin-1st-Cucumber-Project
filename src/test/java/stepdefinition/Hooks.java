package stepdefinition;

import java.io.File;
import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import com.cucumber.listener.Reporter;

import baseclass.BaseClasss;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClasss{

	@Before
	public void Before() {
		System.out.println("Before Scenarios");

	}
	
	@After
	public void after(Scenario Scenarios) throws IOException {
		System.out.println("After Scenarios");
		
		String target = System.getProperty("user.dir")+"\\src\\test\\resource\\screenshots"+Scenarios.getName()+".png";
		TakesScreenshot ts = (TakesScreenshot) driver;
		File screenshotAs = ts.getScreenshotAs(OutputType.FILE);
		FileHandler.copy(screenshotAs, new File(target));
		Reporter.addScreenCaptureFromPath(target);
		driver.quit();

	}
	
}
