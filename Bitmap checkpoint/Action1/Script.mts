'SystemUtil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe" @@ hightlight id_;_331050_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1943477640_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5a219b8bcfdd31d03a70" @@ hightlight id_;_1943478264_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2112565920_;_script infofile_;_ZIP::ssf13.xml_;_
'Adding 2 bitmap checkpoints
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_855220_;_script infofile_;_ZIP::ssf16.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Check CheckPoint("FIND FLIGHTS") @@ hightlight id_;_1939763160_;_script infofile_;_ZIP::ssf17.xml_;_
'Closing the app
WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_855220_;_script infofile_;_ZIP::ssf18.xml_;_
 @@ hightlight id_;_1574396_;_script infofile_;_ZIP::ssf7.xml_;_
