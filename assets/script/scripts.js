const BASE_URL = 'https://api.thecatapi.com/v1/images/search?breed_ids=beng&include_breeds=true';
const img = document.getElementById('cat');
const btn = document.getElementById('change-cat');

const getCats = async () => {
	try {
		console.log("Entrei na função getCats");
		const data = await fetch(BASE_URL/*, {mode: 'no-cors'}*/);
		console.log("Fiz o fetch na url");
		console.log("Aguardando Json");
		const json = await data.json();
		console.log("Peguei o Json");

		// console.log(json[0].url);
		return json[0].url;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {	
	img.src = await getCats();
};

loadImg();


btn.addEventListener('click', loadImg);