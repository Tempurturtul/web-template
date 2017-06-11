import './foo.css';

const foo = {
	render,
};

/**
 * Renders the foo component.
 */
function render() {
	document.getElementById('root').innerHTML = `<p class="foo">Hello!</p>`;
}

export default foo;
