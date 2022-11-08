package pageobjectmanager;

import org.openqa.selenium.WebDriver;

import baseclass.BaseClasss;
import locators.Home_Page;
import locators.Login_Page;

public class pageobjectmanager extends BaseClasss{

	public pageobjectmanager(WebDriver driver) {
		this.driver=driver;
	}
	
	private Login_Page loginpage;

	public Login_Page getLoginpage() {
		if (loginpage==null) {
			loginpage = new Login_Page(driver);
		}
		return loginpage;
	}
	
	private Home_Page homepage;

	public Home_Page getHomepage() {
		if (homepage==null) {
			homepage=new Home_Page(driver);
		}
		return homepage;
	}
	
	
}
