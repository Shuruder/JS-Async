const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// Base serve de base mas como podemos querer outras APIs usamos um mesmo nome para o arquivo

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	const img = document.getElementsByTagName('gato')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('muda-gato');
btn.addEventListener('click', loadImg);
