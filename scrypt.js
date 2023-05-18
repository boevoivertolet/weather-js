const apiKey = '302a0287-7490-4f67-8dd5-d016281cdf95'
const getWeather = () => {
	fetch(
		'https://api.weather.yandex.ru/v2/forecast?lat=59.900398&lon=30.370863',
		{
			method: 'GET',
			headers: { 'X-Yandex-API-Key': apiKey }
		}
	)
}

getWeather()
