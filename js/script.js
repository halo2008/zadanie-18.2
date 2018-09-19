var movies = [ 
	{
		id: 1,
		title: 'Król Lew',
		descr: 'Lorem ipsum dolor sit amet.',
		src: 'https://e.allegroimg.com/s512/065d6d/2a5dd82c455b9361e0142e3a115e'
	},
	{
		id: 2,
		title: 'Gra o Tron',
		descr: 'Lorem ipsum dolor sit amet.',
		src: 'https://static.audioteka.com/pl/images/products/george-r-r-martin/gra-o-tron-duze.jpg'
	},
	{
		id: 3,
		title: 'Za wscielki',
		descr: 'Lorem ipsum dolor sit amet.',
		src: 'https://image.ceneostatic.pl/data/products/37366022/i-szybcy-i-wscielki-6-blu-ray.jpg'
	}


];

var moviesElements = movies.map(function(movies){
	return React.createElement('li',{key: movies.id},
		React.createElement('h2', {}, movies.title),
		React.createElement('p', {}, movies.descr),
		React.createElement('img', {src: movies.src},)
	);
});

var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);




ReactDOM.render(element, document.getElementById('app'));
