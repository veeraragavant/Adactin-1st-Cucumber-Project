#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Regression
Feature: For Automation Testcase Regression Site Adactin
  
Background: To Launch The Adactin Website
Given User Launch the Chrome Browser
And User Enter "http://adactinhotelapp.com/" url in Browser
Then I complete action User Verify Application Land on Login Page

  @TC-101
  Scenario: To Verify Valid Login Details
    
    And User Enter Valid Username "Veeraragavmsd7"
    And User Enter Valid Password "veera@123"
    And User Click the Login Button
    Then User Verify the Logged in Page Successfully

  @TC-102
  Scenario Outline: To Verify Invalid Login Details
  
    And User Enter the UserName in Login Page <Username>
    And User Enter the PassWord in Login Page <Password>
    And User Click the Login Button
    Then User Verify the Login Error Message "Invalid Login details or Your Password might have expired. Click here to reset your password"
    
    Examples:
|Username|Password|
|"Veeraragavmsd8"|"veera@123"|
|"Veeraragavmsd7"|"Vra@123"|
|"Veeraragavmsd8"|"Vra@123"|


