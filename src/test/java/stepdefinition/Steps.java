package stepdefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;

import baseclass.BaseClasss;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import locators.Login_Page;
import pageobjectmanager.pageobjectmanager;

public class Steps extends BaseClasss{

	pageobjectmanager obj = new pageobjectmanager(driver);
	
	@Given("^User Launch the Chrome Browser$")
	public void user_Launch_the_Chrome_Browser() throws Throwable {
	    
	    BrowserLaunch("chrome");
	}

	@Given("^User Enter \"([^\"]*)\" url in Browser$")
	public void user_Enter_url_in_Browser(String arg1) throws Throwable {
	    
	    weburl(arg1);
	}

	@Then("^I complete action User Verify Application Land on Login Page$")
	public void i_complete_action_User_Verify_Application_Land_on_Login_Page() throws Throwable {
	   System.out.println("Logo Visible :"+elementisdisplayed(obj.getLoginpage().getAdactin_Logo()));
	    Assert.assertTrue(elementisdisplayed(obj.getLoginpage().getAdactin_Logo()));
	}

	@Then("^User Enter Valid Username \"([^\"]*)\"$")
	public void user_Enter_Valid_Username(String arg1) throws Throwable {
	    
	    sendkeyss(obj.getLoginpage().getAdactin_Username(), arg1);
	}

	@Then("^User Enter Valid Password \"([^\"]*)\"$")
	public void user_Enter_Valid_Password(String arg1) throws Throwable {
	    sendkeyss(obj.getLoginpage().getAdactin_Passwrd(), arg1);
	    
	}

	@Then("^User Click the Login Button$")
	public void user_Click_the_Login_Button() throws Throwable {
	    
	    elementclick(obj.getLoginpage().getAdactin_Butn());
	}

	@Then("^User Verify the Logged in Page Successfully$")
	public void user_Verify_the_Logged_in_Page_Successfully() throws Throwable {
	    Assert.assertTrue(elementisdisplayed(obj.getHomepage().getUsername_Show()));
	    
	}

	//Invalid Login Details #TC-102

	@Then("^User Enter the UserName in Login Page \"([^\"]*)\"$")
	public void user_Enter_the_UserName_in_Login_Page(String arg1) throws Throwable {
	    sendkeyss(obj.getLoginpage().getAdactin_Username(), arg1);
		
	}

	@Then("^User Enter the PassWord in Login Page \"([^\"]*)\"$")
	public void user_Enter_the_PassWord_in_Login_Page(String arg1) throws Throwable {
	      sendkeyss(obj.getLoginpage().getAdactin_Passwrd(), arg1);
		
		
	}

	@Then("^User Verify the Login Error Message \"([^\"]*)\"$")
	public void user_Verify_the_Login_Error_Message(String arg1) throws Throwable {
	    
	Assert.assertEquals(arg1, obj.gettext(obj.getLoginpage().getError_Msg()));
		
	}

	
}
