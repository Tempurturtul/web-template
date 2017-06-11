import './foo.css';

const foo = {
	render
};

function render() {
	document.getElementById('root').innerHTML = `<p class="foo">Hello!</p>`;
}

export default foo;
