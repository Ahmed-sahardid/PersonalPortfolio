/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

*/

const jobTitles = ['Developer', 'Designer', 'Manager', 'Analyst', 'Engineer'];
let currentTitleIndex = 0;

function updateJobTitle() {
    const jobTitleElement = document.getElementById('job-title');
    jobTitleElement.style.opacity = 0; // Fade out effect

    setTimeout(() => {
        jobTitleElement.textContent = jobTitles[currentTitleIndex];
        jobTitleElement.style.opacity = 1; // Fade in effect

        currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
    }, 500); // Delay for fade out effect

    setTimeout(updateJobTitle, 2000); // Change title every 2 seconds
}

updateJobTitle();


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);