const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: "production",
	devtool: "source-map",
	entry: "./src/javascripts/main.js",
	output: {
		path: path.resolve(__dirname, "./build"),
		filename: "./javascripts/main.js",
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
				test: /\.(jpeg|jpg|png|ico)/,
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
		new HtmlWebpackPlugin({
			template: "./src/components/index.pug",
			filename: "index.html",
			inject: "body",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/components/search.pug",
			filename: "search.html",
			inject: "body",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/components/citizen.pug",
			filename: "citizen.html",
			inject: "body",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/components/citizen2.pug",
			filename: "citizen2.html",
			inject: "body",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/components/citizen3.pug",
			filename: "citizen3.html",
			inject: "body",
			chunks: ["main"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/components/search-result.pug",
			filename: "search-result.html",
			inject: "body",
			chunks: ["main"],
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
