const key = myApiKey;

const getImgData = () => {
	const imgDate = document.querySelector(".image-date");
	const imgName = document.querySelector(".image-name");
	const img = document.querySelector(".image-nasa");
	const imgInfo = document.querySelector(".image-info");
	return axios
		.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
		.then(response => {
			imgDate.innerHTML = response.data.date;
			imgName.innerHTML = response.data.title;
			img.src = response.data.url;
			imgInfo.innerHTML = response.data.explanation;
		})
		.catch(error => {
			return error;
			// return error;
		});
};

getImgData();

console.log(getImgData());

// const info = {
// 	date: response.data.date,
// 	name: response.data.title,
// 	image: response.data.url,
// 	details: response.data.explanation
// };

// console.log(info);

// const name = dataImg.response.data.title;

// console.log(name);
