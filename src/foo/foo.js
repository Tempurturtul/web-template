import './foo.css';
import modulesImg from './modules.svg';

const foo = {
	render,
};

/**
 * Renders the foo component.
 */
function render() {
	document.getElementById('root').innerHTML = `
		<p class="foo">Hello!</p>
		<img src="${modulesImg}">`;
}

export default foo;
