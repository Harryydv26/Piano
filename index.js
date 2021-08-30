
	$(document).ready(function(){
		$(document).keypress(function(e){
			var code = e.keyCode || e.which;

			if(code>93)
			{
				code-=32;
			}
        
        switch(code)
        {
        	case 81: document.getElementById('player1').currentTime = 0;document.getElementById('player1').play();
        	$('#one').addClass('eventone');setTimeout(function() {$('#one').removeClass('eventone');}, 100);
        	break;

        	case 87: document.getElementById('player2').currentTime = 0;document.getElementById('player2').play();
        	$('#two').addClass('eventtwo');setTimeout(function() {$('#two').removeClass('eventtwo');}, 100);
        	break;

        	case 69: document.getElementById('player3').currentTime = 0;document.getElementById('player3').play();
        	$('#three').addClass('eventthree');setTimeout(function() {$('#three').removeClass('eventthree');}, 100);
        	break;

        	case 82: document.getElementById('player4').currentTime = 0;document.getElementById('player4').play();
        	$('#four').addClass('eventfour');setTimeout(function() {$('#four').removeClass('eventfour');}, 100);
        	break;

        	case 84: document.getElementById('player5').currentTime = 0;document.getElementById('player5').play();
        	$('#five').addClass('eventfive');setTimeout(function() {$('#five').removeClass('eventfive');}, 100);
        	break;

        	case 89: document.getElementById('player6').currentTime = 0;document.getElementById('player6').play();
        	$('#six').addClass('eventsix');setTimeout(function() {$('#six').removeClass('eventsix');}, 100);
        	break;

        	case 85: document.getElementById('player7').currentTime = 0;document.getElementById('player7').play();
        	$('#seven').addClass('eventseven');setTimeout(function() {$('#seven').removeClass('eventseven');}, 100);
        	break;

        	case 73: document.getElementById('player8').currentTime = 0;document.getElementById('player8').play();
        	$('#eight').addClass('eventeight');setTimeout(function() {$('#eight').removeClass('eventeight');}, 100);
        	break;

        	case 79: document.getElementById('player9').currentTime = 0;document.getElementById('player9').play();
        	$('#nine').addClass('eventnine');setTimeout(function() {$('#nine').removeClass('eventnine');}, 100);
        	break;

        	case 80: document.getElementById('player10').currentTime = 0;document.getElementById('player10').play();
        	$('#ten').addClass('eventten');setTimeout(function() {$('#ten').removeClass('eventten');}, 100);
        	break;

        	case 91: document.getElementById('player11').currentTime = 0;document.getElementById('player11').play();
        	$('#eleven').addClass('eventeleven');setTimeout(function() {$('#eleven').removeClass('eventeleven');}, 100);
        	break;

        	case 93: document.getElementById('player12').currentTime = 0;document.getElementById('player12').play();
        	$('#twelve').addClass('eventtwelve');setTimeout(function() {$('#twelve').removeClass('eventtwelve');}, 100);
        	break;

        	case 92: document.getElementById('player13').currentTime = 0;document.getElementById('player13').play();
        	$('#thirteen').addClass('eventthirteen');setTimeout(function() {$('#thirteen').removeClass('eventthirteen');}, 100);
        	break;

        }
    });
});


	function myFunction() {
		var x = document.getElementById("mySelect").value;
		document.getElementById("music").innerHTML = x;
	}

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-59413815-2', 'auto');
	ga('send', 'pageview');

