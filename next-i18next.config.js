const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "de", "es","fr","it"],
		defaultLocale: "en",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
};
