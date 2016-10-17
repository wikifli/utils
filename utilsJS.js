

 //FUNCTION TO KNOW IF IS IE AN VERSION
 //if (isIE()) { /* runs in all versions of IE after 4 before standards-mode 10 */ }
 //if (isIE(8)) { /* runs in IE8 */ }
 //if (isIE(9)) { /* runs in IE9 */ }
 //if (isIE(8, 'lte')) { /* runs in IE8 or below */ }
 //if (isIE(6, 'lte')) { /* if you need this, I pity you... */ }

 function isIE(version, comparison) {
     var $div = $('<div style="display:none;"/>').appendTo($('body'));
     $div.html('<!--[if ' + (comparison || '') + ' IE ' + (version || '') + ']><a>&nbsp;</a><![endif]-->');
     var ieTest = $div.find('a').length;
     $div.remove();
     return ieTest;
 }
