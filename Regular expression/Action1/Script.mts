SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
'check if app is opened
if WpfWindow("HPE MyFlight Sample Applicatio").Exist then 
	reporter.ReportEvent micPass, "Launch application", "Passed, application has opened"
	else
	reporter.ReportEvent micFail, "Launch application", "Failed, application has not opened"
End If	


