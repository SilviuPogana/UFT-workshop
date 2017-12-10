SystemUtil.Run "Iexplore.exe","http://www.advantageonlineshopping.com/#/" 
wait (10)
'Login account
Browser("Advantage Shopping").Page("Advantage Shopping").Link("User").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameLogin").Set "Silviupo"
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordLogin").SetSecure "Advantage1"
'Browser("Advantage Shopping").Page("Advantage Shopping").WebCheckBox("remember_me").Set "ON"
wait (5)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click
wait (2) @@ hightlight id_;_Browser("Advantage Shopping_2").Page("Advantage Shopping")_;_script infofile_;_ZIP::ssf4.xml_;_
'Verify correct user login
'V1.
'Browser("Advantage Shopping_2").Page("Advantage Shopping").Check CheckPoint("Username") @@ hightlight id_;_Browser("Advantage Shopping_2").Page("Advantage Shopping")_;_script infofile_;_ZIP::ssf5.xml_;_
'V2.
Dim strUsername
strUsername = Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("Silviupo").GetROProperty("innertext")
If Instr(strUsername, "Silviupo") Then
	reporter.ReportEvent micPass, "The correct user is logged in", "" 
Else 
	reporter.ReportEvent micFail, "The  user is not logged in", "" 
End If
 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("User")_;_script infofile_;_ZIP::ssf1.xml_;_

