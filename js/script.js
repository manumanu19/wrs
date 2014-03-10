(function($){
	$.localtime.setFormat("MMM d, yyyy h:mmtt");
	// Countdown Initiation and Settings

	var deadlineDay = new Date();
	deadlineDay = new Date(2014, 3 - 1, 11);
	$('.lb-countdown').countdown({
		until: $.countdown.UTCDate(+0, deadlineDay), 
		// timezone: +3, 
		format: 'DHMS',
		// layout: '<b>{d<}{dn} {dl} {d>}' + '{hn} {hl}, {mn} {ml}, {sn} {sl}</b>',
		layout: '{d<}{dn} {sep} {d>}' + '{hn} {sep} {mnn} {sep} {snn}',
    	labels: [ 'Year', 'Mo', 'Wk', 'Days', 'Hr', 'Mn', 'Sc'],
    	timeSeparator: '/',
	});

	// Countdown Initiation and Settings

	var deadlineDay = new Date();
	deadlineDay = new Date(2014, 3 - 1, 11);
	$('.wrs-countdown').countdown({
		until: $.countdown.UTCDate(+3, deadlineDay), 
		// timezone: +3, 
		format: 'DHMS',
		// layout: '<b>{d<}{dn} {dl} {d>}' + '{hn} {hl}, {mn} {ml}, {sn} {sl}</b>',
		layout: '<i class="fa fa-clock-o"></i> {d<}{dn} {dl} {d>}' + '{hn} {sep} {mnn} . {snn}',
    	labels: [ 'Year', 'Mo', 'Wk', 'Days', 'Hr', 'Mn', 'Sc'],
    	// timeSeparator: '|',
	});



	
})(jQuery);