package locators;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import baseclass.BaseClasss;

public class Home_Page extends BaseClasss{
	public Home_Page(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	@FindBy(id = "username_show")
	private WebElement Username_Show;
	public WebElement getUsername_Show() {
		return Username_Show;
	}
}

 