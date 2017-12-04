'Closing application @@ hightlight id_;_528170_;_script infofile_;_ZIP::ssf1.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").Close
if not WpfWindow("HPE MyFlight Sample Applicatio").Exist(1) then 
	reporter.ReportEvent micPass, "Close application", "Passed, application has closed"
	else
	reporter.ReportEvent micFail, "Close application", "Failed, application has not closed"
End If
