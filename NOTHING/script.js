$(document).ready(function()
{		
	
	r = 255;
	g = 0;
	b = 0;
	
	while(b<255)
	{
		b++;
		displayBar();
	}
	while(r>0)
	{
		r--;
		displayBar();
	}
	while(g<255)
	{
		g++;
		displayBar();
	}
	while(b>0)
	{
		b--;
		displayBar();
	}
	while(r<255)
	{
		r++;
		displayBar();
	}
	while(g>0)
	{
		g--;
		displayBar();
	}
	
	function dechex(dec)
	{
		var hex=dec.toString(16);
		if(hex.length==1)
			hex="0"+hex;
		return hex;
	}
	
	function zoomColor(hex)
	{
		$("#zoom").css("background-color","#"+hex);
	}
	
	function displayBar()
	{
		var hex=dechex(r)+dechex(g)+dechex(b);
		$("#picker").append('<div id="'+hex+'" style="float:left;background-color:#'+hex+';width:1px;height:20vh" onMouseover="$(\'#all\').css(\'background-color\',\'#\'+$(this).attr(\'id\'));$(\'#hex\').html(\'#\'+$(this).attr(\'id\')+\'<br/>\');"></div>');
	}
	
	
	
});