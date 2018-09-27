	// Raj Dhokiya (BAS)
	
	var xP = 0;
	var yP = 0;
	var rSize = 0;
	var fillColor = '000000';	
	var temp = '';
	var svg = '';
	for( var i = 0 ; i < 50 ; i++ ){
			xP = Math.floor(Math.random() * (1400-100+1)+ 100);
			yP = Math.floor(Math.random() * (1400-100+1)+ 100);
			rSize = Math.floor(Math.random() * (50-10+1)+ 10);
			fillColor = Math.floor(Math.random()*16777215).toString(16);	
			text = '<circle cx="' + xP + '" cy="' + yP + '" r="' + rSize + '" fill="#' + fillColor + '"/>';
			temp = temp  +  text;				
	}
	var svg ='<svg id="svg"> ' + temp + '</svg>';
	$(svg).appendTo( "#page" );

	$("circle").mouseover(function() {	
		$(this).attr('fill', '#'+ Math.floor(Math.random()*16777215).toString(16));
		$(this).fadeOut(500, function() {
        $(this).attr('cx', Math.floor(Math.random() * (1400-100+1)+ 100));
        $(this).attr('cy', Math.floor(Math.random() * (1400-100+1)+ 100));
        $(this).fadeIn(500);
    });
	}).mouseout(function(){
      $(this).attr('fill', '#'+ Math.floor(Math.random()*16777215).toString(16));
	});