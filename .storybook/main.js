const path = require("path");

module.exports = {
	stories: [
		"../src/**/**/*.stories.mdx",
		"../src/**/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		{
			name: "storypug",
			options: {
				babel: true,
				loaderOptions: {
					root: "src/components",
				},
			},
		},
	],
	framework: "@storybook/html",
	core: {
		builder: "webpack5",
	},
	webpackFinal: async (config) => {
		config.module.rules.push(
			{
				test: /\.pug$/,
				use: ["storypug/lib/webpack-loader.js"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
				include: path.resolve(__dirname, "../"),
			}
		);
		return config;
	},
};
