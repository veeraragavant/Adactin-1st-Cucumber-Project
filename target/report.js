$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Regression.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "For Automation Testcase Regression Site Adactin",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 260200,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "To Launch The Adactin Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Enter \"http://adactinhotelapp.com/\" url in Browser",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I complete action User Verify Application Land on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "duration": 10980805200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 12
    }
  ],
  "location": "Steps.user_Enter_url_in_Browser(String)"
});
formatter.result({
  "duration": 13967725300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_complete_action_User_Verify_Application_Land_on_Login_Page()"
});
formatter.result({
  "duration": 261682500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "To Verify Valid Login Details",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin;to-verify-valid-login-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC-101"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User Enter Valid Username \"Veeraragavmsd7\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Enter Valid Password \"veera@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Verify the Logged in Page Successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Veeraragavmsd7",
      "offset": 27
    }
  ],
  "location": "Steps.user_Enter_Valid_Username(String)"
});
formatter.result({
  "duration": 159672700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "veera@123",
      "offset": 27
    }
  ],
  "location": "Steps.user_Enter_Valid_Password(String)"
});
formatter.result({
  "duration": 302204200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_the_Login_Button()"
});
formatter.result({
  "duration": 7836434500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Verify_the_Logged_in_Page_Successfully()"
});
formatter.result({
  "duration": 184898700,
  "status": "passed"
});
formatter.after({
  "duration": 1133124100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "To Verify Invalid Login Details",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@TC-102"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User Enter the UserName in Login Page \u003cUsername\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Enter the PassWord in Login Page \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Verify the Login Error Message \"Invalid Login details or Your Password might have expired. Click here to reset your password\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 44,
      "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;1"
    },
    {
      "cells": [
        "\"Veeraragavmsd8\"",
        "\"veera@123\""
      ],
      "line": 45,
      "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;2"
    },
    {
      "cells": [
        "\"Veeraragavmsd7\"",
        "\"Vra@123\""
      ],
      "line": 46,
      "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;3"
    },
    {
      "cells": [
        "\"Veeraragavmsd8\"",
        "\"Vra@123\""
      ],
      "line": 47,
      "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1597700,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "To Launch The Adactin Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Enter \"http://adactinhotelapp.com/\" url in Browser",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I complete action User Verify Application Land on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "duration": 3526286200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 12
    }
  ],
  "location": "Steps.user_Enter_url_in_Browser(String)"
});
formatter.result({
  "duration": 7325774700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_complete_action_User_Verify_Application_Land_on_Login_Page()"
});
formatter.result({
  "duration": 132611200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "To Verify Invalid Login Details",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    },
    {
      "line": 35,
      "name": "@TC-102"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User Enter the UserName in Login Page \"Veeraragavmsd8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Enter the PassWord in Login Page \"veera@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Verify the Login Error Message \"Invalid Login details or Your Password might have expired. Click here to reset your password\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Veeraragavmsd8",
      "offset": 39
    }
  ],
  "location": "Steps.user_Enter_the_UserName_in_Login_Page(String)"
});
formatter.result({
  "duration": 144764600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "veera@123",
      "offset": 39
    }
  ],
  "location": "Steps.user_Enter_the_PassWord_in_Login_Page(String)"
});
formatter.result({
  "duration": 140575100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_the_Login_Button()"
});
formatter.result({
  "duration": 693004700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login details or Your Password might have expired. Click here to reset your password",
      "offset": 37
    }
  ],
  "location": "Steps.user_Verify_the_Login_Error_Message(String)"
});
formatter.result({
  "duration": 60593800,
  "status": "passed"
});
formatter.after({
  "duration": 700446500,
  "status": "passed"
});
formatter.before({
  "duration": 240400,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "To Launch The Adactin Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Enter \"http://adactinhotelapp.com/\" url in Browser",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I complete action User Verify Application Land on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "duration": 1993143300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 12
    }
  ],
  "location": "Steps.user_Enter_url_in_Browser(String)"
});
formatter.result({
  "duration": 8019416100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_complete_action_User_Verify_Application_Land_on_Login_Page()"
});
formatter.result({
  "duration": 220688900,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "To Verify Invalid Login Details",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    },
    {
      "line": 35,
      "name": "@TC-102"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User Enter the UserName in Login Page \"Veeraragavmsd7\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Enter the PassWord in Login Page \"Vra@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Verify the Login Error Message \"Invalid Login details or Your Password might have expired. Click here to reset your password\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Veeraragavmsd7",
      "offset": 39
    }
  ],
  "location": "Steps.user_Enter_the_UserName_in_Login_Page(String)"
});
formatter.result({
  "duration": 228269200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vra@123",
      "offset": 39
    }
  ],
  "location": "Steps.user_Enter_the_PassWord_in_Login_Page(String)"
});
formatter.result({
  "duration": 178911100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_the_Login_Button()"
});
formatter.result({
  "duration": 767822800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login details or Your Password might have expired. Click here to reset your password",
      "offset": 37
    }
  ],
  "location": "Steps.user_Verify_the_Login_Error_Message(String)"
});
formatter.result({
  "duration": 105061600,
  "status": "passed"
});
formatter.after({
  "duration": 906095400,
  "status": "passed"
});
formatter.before({
  "duration": 307300,
  "status": "passed"
});
formatter.background({
  "line": 22,
  "name": "To Launch The Adactin Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 23,
  "name": "User Launch the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User Enter \"http://adactinhotelapp.com/\" url in Browser",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I complete action User Verify Application Land on Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_Launch_the_Chrome_Browser()"
});
formatter.result({
  "duration": 2101292200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://adactinhotelapp.com/",
      "offset": 12
    }
  ],
  "location": "Steps.user_Enter_url_in_Browser(String)"
});
formatter.result({
  "duration": 7259730800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_complete_action_User_Verify_Application_Land_on_Login_Page()"
});
formatter.result({
  "duration": 194755700,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "To Verify Invalid Login Details",
  "description": "",
  "id": "for-automation-testcase-regression-site-adactin;to-verify-invalid-login-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    },
    {
      "line": 35,
      "name": "@TC-102"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "User Enter the UserName in Login Page \"Veeraragavmsd8\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User Enter the PassWord in Login Page \"Vra@123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User Click the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Verify the Login Error Message \"Invalid Login details or Your Password might have expired. Click here to reset your password\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Veeraragavmsd8",
      "offset": 39
    }
  ],
  "location": "Steps.user_Enter_the_UserName_in_Login_Page(String)"
});
formatter.result({
  "duration": 208519800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vra@123",
      "offset": 39
    }
  ],
  "location": "Steps.user_Enter_the_PassWord_in_Login_Page(String)"
});
formatter.result({
  "duration": 152039000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Click_the_Login_Button()"
});
formatter.result({
  "duration": 735535900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Login details or Your Password might have expired. Click here to reset your password",
      "offset": 37
    }
  ],
  "location": "Steps.user_Verify_the_Login_Error_Message(String)"
});
formatter.result({
  "duration": 55933700,
  "status": "passed"
});
formatter.after({
  "duration": 771570100,
  "status": "passed"
});
});