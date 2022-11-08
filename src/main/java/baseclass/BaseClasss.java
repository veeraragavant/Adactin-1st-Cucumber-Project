package baseclass;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import java.util.logging.FileHandler;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import com.aventstack.extentreports.utils.FileUtil;

public class BaseClasss {

	public static WebDriver driver;
	
	public static void BrowserLaunch(String browser) {
		
		if (browser.equals("chrome")) {
			
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\ragav\\OneDrive\\Desktop\\Eclipse Workspace\\Adactin\\src\\test\\resource\\driver\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if (browser.equals("edge")) {
			System.setProperty("webdriver.edge.driver", "C:\\Users\\ragav\\OneDrive\\Desktop\\Eclipse Workspace\\Adactin\\src\\test\\resource\\driver\\msedgedriver.exe");
			driver = new  EdgeDriver();
		}
		windowmax();
	}
	
	
	public static void windowmax() {
		
		driver.manage().window().maximize();
	}
	
	public static void weburl(String url) { 
	try {
		driver.get(url);
	} catch (Exception e) {
		System.out.println("Unable to Open URL :"+e.getMessage());
	}
		
		
}

	
	public static void elementclick(WebElement element) {
	try {
		element.click();
	} catch (Exception e) {
		System.out.println("Unable to Click WebElement :" + e.getMessage());
	}
}

	public static void waiting() {
	
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	
}
	
	public static boolean elementisdisplayed(WebElement element) {
		 
		 boolean display = false;
		
		 try {
			display=element.isDisplayed();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		 return display;
	
}
	public static void sendkeyss(WebElement element, String value) {
	
	element.sendKeys(value);
	
}
	
	public static String gettext(WebElement element) {
		String text=null;
		try {
			text = element.getText();
		} catch (Exception e) {
			System.out.println("Unable to get  Text :"+e.getMessage());
		}
		return text;
	}
	
	public static void TakeScreenShot(String name) throws IOException {
	File target = new File("C:\\Users\\ragav\\OneDrive\\Desktop\\Eclipse Workspace\\Adactin\\src\\test\\resource\\screenshots\\"+name+".png");
      TakesScreenshot ts = (TakesScreenshot) driver;
      File screenshotAs = ts.getScreenshotAs(OutputType.FILE);
      org.openqa.selenium.io.FileHandler.copy(screenshotAs, target);
	}
	
}