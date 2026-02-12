const hello = (name: string) => {
	console.log(`hello ${name}`);
}

const init = () => {
	hello('chrome-plugin-template');
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
