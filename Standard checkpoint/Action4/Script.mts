Dim x
x = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetItemsCount
reporter.ReportEvent micPass, "Number 'from' cities =", x

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select 2
wait(2)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetSelection
If WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetSelection = "London" Then
	reporter.ReportEvent micPass, "Selected from city", "London"
	else
	reporter.ReportEvent micFail, "Selected from city", "Other"
End If
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Los Angeles"
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("WpfImage_3").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate"28-Dec-2017"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("Class").Select "Business"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select "2"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,0
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "john smith"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
wait (2)
Dim strOrderNo, strOrder, strReplaced
strReplaced = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order number").GetVisibleText()
'msgbox strReplaced
strOrderNo = replace(strReplaced, " ", "")
'msgbox strOrderNo
strOrderNo = replace(strOrderNo, "Order", "")
'msgbox strOrderNo
strOrderNo = replace(strOrderNo, "completed", "")
reporter.ReportEvent micPass, "Your order number is:", strOrderNo
