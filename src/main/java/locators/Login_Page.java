package locators;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import baseclass.BaseClasss;

public class Login_Page extends BaseClasss{

	public Login_Page(WebDriver driver) {
		
		this.driver=driver;
		PageFactory.initElements(driver, this);
		
			}
	
	public WebElement getAdactin_Logo() {
		return Adactin_Logo;
	}

	public WebElement getAdactin_Username() {
		return Adactin_Username;
	}

	public WebElement getAdactin_Passwrd() {
		return Adactin_Passwrd;
	}

	public WebElement getAdactin_Butn() {
		return Adactin_Butn;
	}

	@FindBy(xpath = "//img[@src='img/AdactIn_logo.png']")
	private WebElement Adactin_Logo;
	
	@FindBy(id = "username")
	private WebElement Adactin_Username;
	
	@FindBy(id = "password")
	private WebElement Adactin_Passwrd;
	
	@FindBy(id = "login")
	private WebElement Adactin_Butn;
	
	@FindBy(xpath = "//b[text()='Invalid Login details or Your Password might have expired. ']")
	private WebElement Error_Msg;

	public WebElement getError_Msg() {
		return Error_Msg;
	}
	
}
