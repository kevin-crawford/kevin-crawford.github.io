

// EVENT HANDLERS
// NAVIGATION
// HOME
$('.home-link').on('click', e => {
	e.preventDefault();
	console.log('home');
	$('.splash-container').html('<h1>Looking For A Full Stack Web Developer?</h1>\
	<p>I am a web developer living in Southern California looking to leave his mark.</p>\
	<button class="contact-me button" href="#"> Contact </button>');
	$('#splash-banner').height('1000');
	$('#landing-overview').removeClass('hidden');
	$('#about').addClass('hidden');
	$('#projects').addClass('hidden');
});

//ABOUT
$('.about-link').on('click', e => {
	e.preventDefault();
	console.log('about');
	$('#landing-overview').addClass('hidden');
	$('#about').removeClass('hidden');
	$('#projects').addClass('hidden');

})

// PROJECTS
$('.projects-link').on('click', e => {
	e.preventDefault();
	console.log('projects');
	$('.splash-container').html('<h1>Projects</h1>');
	$('#splash-banner').height('500')
	$('#landing-overview').addClass('hidden');
	$('#about').addClass('hidden');
	$('#projects').removeClass('hidden');
})

// CONTACT

// SCROLL HANDLERS
// HORIZONTAL MENU COLOR onScroll
 $(window).scroll(function(){
	 let scroll = $(window).scrollTop();
	 if(scroll >= 200 ) {
	 $("#menu-container").addClass("scrolling");
	} else {
			$("#menu-container").removeClass("scrolling");
	}
 })




 // PROJECTS PAGE 

// tech-icon click handlers

// automate project
$('#automate-fe-btn').on('click', e => {
	e.preventDefault;
	$('#automate-fe-icons').removeClass('hidden');
	$('#automate-be-icons').addClass('hidden');
	$('#automate-do-icons').addClass('hidden');
});

$('#automate-be-btn').on('click', e => {
	e.preventDefault;
	$('#automate-be-icons').removeClass('hidden');
	$('#automate-fe-icons').addClass('hidden');
	$('#automate-do-icons').addClass('hidden');
});

$('#automate-do-btn').on('click', e => {
	e.preventDefault;
	$('#automate-do-icons').removeClass('hidden');
	$('#automate-fe-icons').addClass('hidden');
	$('#automate-be-icons').addClass('hidden');
})

// tune in project
$('#tunein-fe-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-fe-icons').removeClass('hidden');
	$('#tunein-be-icons').addClass('hidden');
	$('#tunein-do-icons').addClass('hidden');
});

$('#tunein-be-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-be-icons').removeClass('hidden');
	$('#tunein-fe-icons').addClass('hidden');
	$('#tunein-do-icons').addClass('hidden');
});

$('#tunein-do-btn').on('click', e => {
	e.preventDefault;
	$('#tunein-do-icons').removeClass('hidden');
	$('#tunein-fe-icons').addClass('hidden');
	$('#tunein-be-icons').addClass('hidden');
})

// sneakerlocker project

$('#sneakerlocker-fe-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-fe-icons').removeClass('hidden');
	$('#sneakerlocker-be-icons').addClass('hidden');
	$('#sneakerlocker-do-icons').addClass('hidden');
});

$('#sneakerlocker-be-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-be-icons').removeClass('hidden');
	$('#sneakerlocker-fe-icons').addClass('hidden');
	$('#sneakerlocker-do-icons').addClass('hidden');
});

$('#sneakerlocker-do-btn').on('click', e => {
	e.preventDefault;
	$('#sneakerlocker-do-icons').removeClass('hidden');
	$('#sneakerlocker-fe-icons').addClass('hidden');
	$('#sneakerlocker-be-icons').addClass('hidden');
})

 // animation to hide and show project information
 $('#automate-thumbnail').click(function() {
	$('#automate-tech').toggle('slow');
	$('#automate-info').toggle('slow');
 })

 $('#tunein-thumbnail').click(function() {
	$('#tunein-tech').toggle('slow');
	$('#tunein-info').toggle('slow');
 })

 $('#sneakerlocker-thumbnail').click(function() {
	$('#sneakerlocker-tech').toggle('slow');
	$('#sneakerlocker-info').toggle('slow');
 })