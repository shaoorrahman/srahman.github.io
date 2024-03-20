/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav = $('#nav');

		if ($nav.length > 0) {

			// Shrink effect.
				$main
					.scrollex({
						mode: 'top',
						enter: function() {
							$nav.addClass('alt');
						},
						leave: function() {
							$nav.removeClass('alt');
						},
					});

					

					document.getElementById('nextButton').addEventListener('click', function() {
						document.querySelector('#container .mini-posts-inner').classList.add('move-forward');
					});
					
					document.getElementById('prevButton').addEventListener('click', function() {
						document.querySelector('#container .mini-posts-inner').classList.remove('move-forward');
					});
					
					document.getElementById('nextButton1').addEventListener('click', function() {
						document.querySelector('#container1 .mini-posts-inner').classList.add('move-forward');
					});
					
					document.getElementById('prevButton1').addEventListener('click', function() {
						document.querySelector('#container1 .mini-posts-inner').classList.remove('move-forward');
					});



					document.addEventListener('DOMContentLoaded', function() {
						// Check if there's a stored value for the last clicked button
						var lastClickedButton = localStorage.getItem('lastClickedButton');
					
						// If a button was previously clicked, display the corresponding container
						if (lastClickedButton === 'powerBiButton') {
							document.getElementById('container').style.display = 'none';
							document.getElementById('container1').style.display = 'block';
						} else {
							document.getElementById('container').style.display = 'block';
							document.getElementById('container1').style.display = 'none';
						}
					
						// Add click event listeners to the buttons
						document.getElementById('pythonButton').addEventListener('click', function() {
							document.getElementById('container').style.display = 'block';
							document.getElementById('container1').style.display = 'none';
							// Store the clicked button in localStorage
							localStorage.setItem('lastClickedButton', 'pythonButton');
						});
					
						document.getElementById('powerBiButton').addEventListener('click', function() {
							document.getElementById('container').style.display = 'none';
							document.getElementById('container1').style.display = 'block';
							// Store the clicked button in localStorage
							localStorage.setItem('lastClickedButton', 'powerBiButton');
						});
					});




					document.addEventListener("DOMContentLoaded", function () {
						const posts = document.querySelectorAll('.post');
						let currentIndex = 0;
					
						function showPost(index) {
							posts.forEach((post, i) => {
								if (i === index) {
									post.classList.add('active');
								} else {
									post.classList.remove('active');
								}
							});
						}
					
						function nextPost() {
							currentIndex = (currentIndex + 1) % posts.length;
							showPost(currentIndex);
						}
					
						function prevPost() {
							currentIndex = (currentIndex - 1 + posts.length) % posts.length;
							showPost(currentIndex);
						}
					
						document.getElementById('previous-post').addEventListener('click', prevPost);
						document.getElementById('next-post').addEventListener('click', nextPost);
					
						// Show the first post initially
						showPost(currentIndex);
					});
					
					
					



			// Links.
				var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);