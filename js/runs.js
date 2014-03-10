(function($){
	var data = [

		{
			position: "1", 
			region: "uk", 
			controller: "g27", 
			driver: "GTP_Twissy",	
			division: "1",	
			divClass: "Gold",	
			S1: "0'26.417", 
			S2: "0'43.650",	
			fastestS2: true,
			totalSplit: "1'10.067", 
			fastestTime: true,
			gap: "+0'00.000"
		},
		{
			position: "2", 
			region: "us", 
			controller: "g27", 
			driver: "doodlemonoply",	
			division: "1",	
			divClass: "Gold",	
			S1: "0'26.583", 
			S2: "0'43.650",	
			fastestS2: true,
			totalSplit: "1'10.233", 
			gap: "+0'00.166"
		},
		{
			position: "3", 
			region: "ca", 
			controller: "g27", 
			driver: "Mike_Peperni",	
			division: "1",	
			divClass: "Gold",	
			S1: "0'26.368", 
			fastestS1: true,
			S2: "0'43.916",	
			totalSplit: "1'10.284", 
			gap: "+0'00.217"
		},
		{	
			position: "4",
			region: "de",
			controller: "",
			driver: "RS__96__oO",	
			division: "2",	
			divClass: "Gold",	
			S1: "0'26.499", 
			fastestDS1: true,
			S2: "0'43.934",
			fastestDS2: true,
			totalSplit:"1'10.433", 
 			gap: "+0'00.366"
 		},
		{
			position: "5", 
			region: "nl", 
			controller: "g25", 
			driver: "GTP_PASM",	
			division: "1",	
			divClass: "Silver",	
			S1: "0'26.503", 
			S2: "0'44.016",	
			totalSplit: "1'10.519", 
			gap: "+0'00.452"
		},
		{
			position: "6", 
			region: "us", 
			controller: "g27", 
			driver: "GTP_Eternal",	
			division: "1",	
			divClass: "Bronze",	
			S1: "0'26.510", 
			S2: "0'44.100",	
			totalSplit: "1'10.610", 
			gap: "+0'00.543"
		},
		{
			position: "7", 
			region: "ca", 
			controller: "wheel", 
			driver: "GTP_gooners_17",	
			division: "1",	
			divClass: "Silver",	
			S1: "0'26.655", 
			S2: "0'44.167",	
			totalSplit: "1'10.822", 
			gap: "+0'00.755"
		},
		{
			position: "8", 
			region: "uk", 
			controller: "dfgt", 
			driver: "GTP_gmmatthew",	
			division: "1",	
			divClass: "Bronze",	
			S1: "0'26.683", 
			S2: "0'44.250",	
			totalSplit: "1'10.933", 
			gap: "+0'00.866"
		},
		{
			position: "9", 
			region: "uk", 
			controller: "dfgt", 
			driver: "GTP_Lukas",	
			division: "2",	
			divClass: "Gold",	
			S1: "0'26.700", 
			S2: "0'44.383",	
			totalSplit: "1'11.083", 
			gap: "+0'01.016"
		},
		{
			position: "10", 
			region: "uk", 
			controller: "wheel", 
			driver: "GTP_Insatiable",	
			division: "1",	
			divClass: "Bronze",	
			S1: "0'26.644", 
			S2: "0'44.484",	
			totalSplit: "1'11.128", 
			gap: "+0'01.061"
		},
		{
			position: "11", 
			region: "wales", 
			controller: "t500rs", 
			driver: "merlinrichards",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.833", 
			S2: "0'44.400",	
			totalSplit: "1'11.233", 
			gap: "+0'01.166"
		},
		{
			position: "12", 
			region: "eg", 
			controller: "wheel", 
			driver: "GTP_SEMS",	
			division: "2",	
			divClass: "Bronze",	
			S1: "0'26.743", 
			S2: "0'44.567",	
			totalSplit: "1'11.310", 
			gap: "+0'01.243"
		},
		{
			position: "13", 
			region: "ca", 
			controller: "wheel", 
			driver: "GTP_pilmat",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'27.050", 
			S2: "0'44.283",	
			totalSplit: "1'11.333", 
			gap: "+0'01.266"
		},
		{
			position: "14", 
			region: "uk", 
			controller: "dfgt", 
			driver: "GTP_SKYLINE",	
			division: "2",	
			divClass: "Gold",	
			S1: "0'26.889", 
			S2: "0'44.450",	
			totalSplit: "1'11.339", 
			gap: "+0'01.272"
		},
		{
			position: "15", 
			region: "fi", 
			controller: "dfgt", 
			driver: "nyyppa",	
			division: "2",	
			divClass: "Gold",	
			S1: "0'26.834", 
			S2: "0'44.633",	
			totalSplit: "1'11.467", 
			gap: "+0'01.400"
		},
		{
			position: "16", 
			region: "us", 
			controller: "wheel", 
			driver: "GTP_Gravitron",	
			division: "2",	
			divClass: "Gold",	
			S1: "0'27.066", 
			S2: "0'44.450",	
			totalSplit: "1'11.516", 
			gap: "+0'01.449"
		},
		{
			position: "17", 
			region: "us", 
			controller: "wheel", 
			driver: "GTP_Ph7shr",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.683", 
			S2: "0'44.900",	
			totalSplit: "1'11.583", 
			gap: "+0'01.516"
		},
		{
			position: "18", 
			region: "us", 
			controller: "wheel", 
			driver: "GTP_Jump_Ace",	
			division: "2",	
			divClass: "Gold",	
			S1: "0'26.903", 
			S2: "0'44.730",	
			totalSplit: "1'11.633", 
			gap: "+0'01.566"
		},
		{
			position: "19", 
			region: "ca", 
			controller: "wheel", 
			driver: "brinomial",	
			division: "2",	
			divClass: "Bronze",	
			S1: "0'26.818", 
			S2: "0'44.900",	
			totalSplit: "1'11.718", 
			gap: "+0'01.651"
		},
		{
			position: "20", 
			region: "ca", 
			controller: "wheel", 
			driver: "Oshawa-Joe",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.800", 
			S2: "0'44.950",	
			totalSplit: "1'11.750", 
			gap: "+0'01.683"
		},
		{
			position: "21",
			region: "nl",
			controller: "",
			driver: "Klubbin__Jay",	
			division: "3",	
			divClass: "Bronze",	
			S1: "0'26.650",
			fastestDS1: true, 
			S2: "0'45.150",
			totalSplit:"1'11.800", 
			fastestDTime: true,
			gap: "+0'01.733"
		},
		{
			position: "22", 
			region: "us", 
			controller: "wheel", 
			driver: "GTP_RaceRyder",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'26.972", 
			S2: "0'44.917",	
			totalSplit: "1'11.889", 
			gap: "+0'01.822"
		},
		{
			position: "23", 
			region: "scotland", 
			controller: "dfgt", 
			driver: "couttsy21",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.146", 
			S2: "0'44.767",	
			fastestDS2: true,
			totalSplit: "1'11.913", 
			gap: "+0'01.846"
		},
		{
			position: "24", 
			region: "be", 
			controller: "wheel", 
			driver: "GTP_Racingworld",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.971", 
			S2: "0'44.967",	
			totalSplit: "1'11.938", 
			gap: "+0'01.871"
		},
		{
			position: "25", 
			region: "ca", 
			controller: "wheel", 
			driver: "GTP_Allibubba99",	
			division: "2",	
			divClass: "Bronze",	
			S1: "0'27.206", 
			S2: "0'44.750",	
			totalSplit: "1'11.956", 
			gap: "+0'01.889"
		},
		{
			position: "26", 
			region: "ca", 
			controller: "g27", 
			driver: "GTP_AspecBob",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.982", 
			S2: "0'45.034",	
			totalSplit: "1'12.016", 
			gap: "+0'01.949"
		},
		{
			position: "27", 
			region: "us", 
			controller: "ds3", 
			driver: "GTP_Wins",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.894", 
			S2: "0'45.122",	
			totalSplit: "1'12.016", 
			gap: "+0'01.949"
		},
		{
			position: "28", 
			region: "uk", 
			controller: "g27", 
			driver: "GTP_oink",	
			division: "1",	
			divClass: "Bronze",	
			S1: "0'27.416", 
			S2: "0'44.700",	
			totalSplit: "1'12.116", 
			gap: "+0'02.049"
		},
		{
			position: "29", 
			region: "uk", 
			controller: "t500rs", 
			driver: "Teamsreth",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'26.884", 
			S2: "0'45.266",	
			totalSplit: "1'12.150", 
			gap: "+0'02.083"
		},
		{
			position: "29",
			region: "uk",
			controller: "",
			driver: "GTP_LeftyWright",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'26.935", 
			S2: "0'45.216",
 			totalSplit:"1'12.151", 
 			gap: "+0'02.084"
 		},
		{
			position: "31", 
			region: "au", 
			controller: "dfgt", 
			driver: "GT_COL",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.098", 
			S2: "0'45.083",	
			totalSplit: "1'12.181", 
			gap: "+0'02.114"
		},
		{
			position: "32", 
			region: "us", 
			controller: "g27", 
			driver: "GTP_Vipond",	
			division: "2",	
			divClass: "Silver",	
			S1: "0'27.284", 
			S2: "0'44.916",	
			totalSplit: "1'12.200", 
			gap: "+0'02.133"
		},
		{
			position: "33", 
			region: "uk", 
			controller: "ds3", 
			driver: "nursemorph",	
			division: "3",	
			divClass: "Bronze",	
			S1: "0'26.829", 
			S2: "0'45.400",	
			totalSplit: "1'12.229", 
			gap: "+0'02.162"
		},
		{
			position: "34", 
			region: "ch", 
			controller: "ds3", 
			driver: "akz24",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.050", 
			S2: "0'45.233",	
			totalSplit: "1'12.283", 
			gap: "+0'02.216"
		},
		{	
			position: "35",
			region: "ca",
			controller: "",
			driver: "BionicDerp",	
			division: "2",	
			divClass: "Bronze",	
			S1: "0'27.214", 
			S2: "0'45.079",
 			totalSplit:"1'12.293", 
 			gap: "+0'02.226"
 		},
		{
			position: "36", 
			region: "au", 
			controller: "ds3", 
			driver: "GTP_MisterWeary",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.116", 
			S2: "0'45.184",	
			totalSplit: "1'12.300", 
			gap: "+0'02.233"
		},
		{
			position: "37", 
			region: "scotland", 
			controller: "fanatec", 
			driver: "GTP_iainoflo",	
			division: "2",	
			divClass: "Bronze",	
			S1: "0'27.050", 
			S2: "0'45.267",	
			totalSplit: "1'12.317", 
			gap: "+0'02.250"
		},
		{
			position: "38", 
			region: "au", 
			controller: "ds3", 
			driver: "Stevious",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'26.842", 
			S2: "0'45.533",	
			totalSplit: "1'12.375", 
			gap: "+0'02.308"
		},
		{
			position: "39", 
			region: "ae", 
			controller: "ds3", 
			driver: "stevetuffers",	
			division: "4",	
			divClass: "Silver",	
			S1: "0'27.400", 
			S2: "0'45.050",
			fastestDS2: true,	
			totalSplit: "1'12.450", 
			fastestDTime: true,
			gap: "+0'02.383"
		},
		{
			position: "40", 
			region: "sa", 
			controller: "g25", 
			driver: "IRT_MrG",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.345", 
			S2: "0'45.200",	
			totalSplit: "1'12.545", 
			gap: "+0'02.478"
		},
		{
			position: "41",
			region: "ca",
			controller: "",
			driver: "mr_lab_rat",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.566", 
			S2: "0'45.034",
			totalSplit:"1'12.600", 
			gap: "+0'02.533"
		},
		{	
			position: "42",
			region: "us",
			controller: "",
			driver: "atongo619",	
			division: "4",	
			divClass: "Gold",	
			S1: "0'27.267", 
			fastestDS1: true,
			S2: "0'45.350",
			totalSplit:"1'12.617", 
			gap: "+0'02.550"
		},
		{	
			position: "43",
			region: "us",
			controller: "",
			driver: "jfro222",	
			division: "3",	
			divClass: "Bronze",	
			S1: "0'27.000", 
			S2: "0'45.633",
			totalSplit:"1'12.633", 
			gap: "+0'02.566"
		},
		{	
			position: "44",
			region: "eg",
			controller: "",
			driver: "SINY999",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.233", 
			S2: "0'45.500",
			totalSplit:"1'12.733", 
			gap: "+0'02.666"
		},
		{
			position: "45", 
			region: "us", 
			controller: "g27", 
			driver: "GTP_Deadbrah",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.314", 
			S2: "0'45.500",	
			totalSplit: "1'12.814", 
			gap: "+0'02.747"
		},
		{
			position: "46", 
			region: "dk", 
			controller: "dfgt", 
			driver: "GTP_NielsG2",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.367", 
			S2: "0'45.616",	
			totalSplit: "1'12.983", 
			gap: "+0'02.916"
		},
		{
			position: "47", 
			region: "ca", 
			controller: "ds3", 
			driver: "RacingOtaku86",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.412", 
			S2: "0'45.684",	
			totalSplit: "1'13.096", 
			gap: "+0'03.029"
		},
		{
			position: "48", 
			region: "de", 
			controller: "wheel", 
			driver: "GTP_hessi",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.575", 
			S2: "0'45.600",	
			totalSplit: "1'13.175", 
			gap: "+0'03.108"
		},
		{
			position: "49",
			region: "uk",
			controller: "",
			driver: "GTP_ollie57",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.350", 
			S2: "0'45.883",
 			totalSplit:"1'13.233", 
 			gap: "+0'03.166"
 		},
		{
			position: "50", 
			region: "us", 
			controller: "dfgt", 
			driver: "GTP_crowhop",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.550", 
			S2: "0'45.984",	
			totalSplit: "1'13.534", 
			gap: "+0'03.467"
		},
		{
			position: "51", 
			region: "uk", 
			controller: "ds3", 
			driver: "GTP_the_wilco",	
			division: "3",	
			divClass: "Gold",	
			S1: "0'27.445", 
			S2: "0'46.100",	
			totalSplit: "1'13.545", 
			gap: "+0'03.478"
		},
		{
			position: "52", 
			region: "br", 
			controller: "ds3", 
			driver: "dpinho1975",	
			division: "3",	
			divClass: "Bronze",	
			S1: "0'27.396", 
			S2: "0'46.200",	
			totalSplit: "1'13.596", 
			gap: "+0'03.529"
		},
		{
			position: "53", 
			region: "pt", 
			controller: "wheel", 
			driver: "SERIALF",	
			division: "4",	
			divClass: "Gold",	
			S1: "0'27.833", 
			S2: "0'46.050",	
			totalSplit: "1'13.883", 
			gap: "+0'03.816"
		},
		{
			position: "54", 
			region: "fi", 
			controller: "dfgt", 
			driver: "cheba88",	
			division: "2",	
			divClass: "Bronze",	
			S1: "0'27.750", 
			S2: "0'46.316",	
			totalSplit: "1'14.066", 
			gap: "+0'03.999"
		},
		{
			position: "55", 
			region: "uk", 
			controller: "ds3", 
			driver: "Mark_Sebo",	
			division: "4",	
			divClass: "Gold",	
			S1: "0'27.987", 
			S2: "0'46.517",	
			totalSplit: "1'14.504", 
			gap: "+0'04.437"
		},
		{
			position: "56", 
			region: "us", 
			controller: "dfgt", 
			driver: "Bochawa72",	
			division: "3",	
			divClass: "Silver",	
			S1: "0'27.784", 
			S2: "0'46.916",	
			totalSplit: "1'14.700", 
			gap: "+0'04.633"
		},
		{
			position: "57", 
			region: "us", 
			controller: "g27", 
			driver: "deacon-blues082",	
			division: "3",	
			divClass: "Bronze",	
			S1: "0'28.333", 
			S2: "0'47.050",	
			totalSplit: "1'15.383", 
			gap: "+0'05.316"
		},
		{
			position: "58", 
			region: "fi", 
			controller: "dfgt", 
			driver: "thematic604",	
			division: "4",	
			divClass: "Silver",	
			S1: "0'28.198", 
			S2: "0'48.150",	
			totalSplit: "1'16.348", 
			gap: "+0'06.281"
		},
		{
			position: "59", 
			region: "dk", 
			controller: "dfgt", 
			driver: "NemoNiente",	
			division: "4",	
			divClass: "Silver",	
			S1: "0'28.200", 
			S2: "0'48.650",	
			totalSplit: "1'16.850", 
			gap: "+0'06.783"
		},
		{
			position: "60 ",
			region: "uk",
			controller: "",
			driver: "mtbmik50",	
			division: "4",	
			divClass: "Silver",	
			S1: "0'29.082", 
			S2: "0'48.284",	
			totalSplit: "1'17.366", 
			gap: "+0'07.299"
		}
	];
	
	var template = Handlebars.compile($('#runs').html());

	$('tbody').append(template(data));

		// var tables = $('tbody');
		// var table = tables[tables.length - 1];
		// var rows = table.rows;
		// for (var i = 0,td; i < rows.length; i++) {
		// 	td = document.createElement('td');
		// 	// td = $('tbody tr td:first-child');
		// 	td.appendChild(document.createTextNode(i + 1));
		// 	// td.append(i + 1)
		// 	rows[i].insertBefore(td, rows[i].firstChild);


		// };

})(jQuery);