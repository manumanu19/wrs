/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'wrs\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-g27': '&#xe601;',
		'icon-fanatec-clubsport-formula': '&#xe602;',
		'icon-ds3': '&#xe610;',
		'icon-t500rs': '&#xe604;',
		'icon-fanatec': '&#xe606;',
		'icon-ds4': '&#xe603;',
		'icon-dfgt': '&#xe607;',
		'icon-t500rs-gte-f458': '&#xe608;',
		'icon-t500rs-ferrari-f1': '&#xe609;',
		'icon-fanatec-formula': '&#xe60a;',
		'icon-logitech-g25': '&#xe60b;',
		'icon-t500rs-no-shifter': '&#xe605;',
		'icon-user': '&#xe60e;',
		'icon-wheel': '&#xe600;',
		'icon-cog': '&#xe60f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
