const { analyzeLand, isWeatherSuitable } = require('./landAnalysis');

const land = [
    ["fertile", "dry", "fertile", "fertile"],
    ["barren", "dry", "dry", "fertile"],
    ["barren", "fertile", "fertile", "dry"],
    ["dry", "dry", "dry", "dry"]
];

const weatherData = {
    temperature: 28,
    humidity: 55,
    windSpeed: 12
};

const { totalFertile, toPlant } = analyzeLand(land);
console.log(`- Total fertile plots: ${totalFertile}`);
console.log(`- Total plots to be planted: ${toPlant}`);
console.log(`- ${isWeatherSuitable(weatherData) ? "Cuaca cocok" : "Warning: The weather is suitable"} for planting.`);
