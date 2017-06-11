import page from 'page';
import about from './about/about';

// Register routes.
page('/about', () => {
	console.log('Displaying about page.');
	about.render();
});

// Start the router.
page.start();
