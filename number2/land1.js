const land = [
    ["fertile", "dry", "fertile", "fertile"],
    ["barren", "dry", "dry", "fertile"],
    ["barren", "fertile", "fertile", "dry"],
    ["dry", "dry", "dry", "dry"]
];

const analyzeLand = (land) =>
    land.reduce((acc, row) => {
        const fertile = row.filter(p => p === "fertile").length;
        acc.totalFertile += fertile;
        if (fertile / row.length >= 0.5) acc.toPlant += fertile;
        return acc;
    }, { totalFertile: 0, toPlant: 0 });

const isWeatherSuitable = ({ temperature, humidity, windSpeed }) =>
    temperature >= 20 && temperature <= 30 &&
    humidity >= 50 && humidity <= 70 &&
    windSpeed <= 15;

module.exports = { analyzeLand, isWeatherSuitable };