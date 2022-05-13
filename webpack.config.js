const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const globule = require("globule");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const config = {
	mode: "production",
	devtool: "source-map",
	entry: "./src/javascripts/main.js",
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "./javascripts/main.js",
	},
	resolve: {
		alias: {
			components: path.resolve(__dirname, "src/components/"),
		},
	},
	cache: {
		type: "filesystem",
		buildDependencies: {
			config: [__filename],
		},
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, "./dist"),
		},
		open: true,
		watchFiles: ["src/**/*"],
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									useBuiltIns: "usage",
									corejs: 3,
								},
							],
						],
					},
				},
			},
			{
				test: /\.(scss|css)/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							// postcss-loader と sass-loader の場合は2を指定
							importLoaders: 2,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [require("autoprefixer")({ grid: true })],
							},
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(jpeg|jpg|png|ico|svg|ttf|woff|eot|gif)/,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext]",
				},
				use: ["image-webpack-loader"],
			},
			{
				test: /\.pug/,
				use: ["html-loader", "pug-html-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./stylesheets/main.css",
		}),
		new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
			new CssMinimizerPlugin(),
		],
	},
	performance: {
		maxEntrypointSize: 500000,
		maxAssetSize: 500000,
	},
};

const pugFiles = globule.find("src/components/pages/*.pug", {
	ignore: [
		"src/components/base/*.pug",
		"src/components/parts/*.pug",
		"src/components/common/*.pug",
	],
});

pugFiles.map((pug) => {
	const html = pug.split("/").slice(-1)[0].replace(".pug", ".html");
	config.plugins.push(
		new HtmlWebpackPlugin({
			filename: `${path.resolve(__dirname, "build")}/${html}`,
			inject: "body",
			chunks: ["main"],
			template: pug,
		})
	);
});

module.exports = config;
