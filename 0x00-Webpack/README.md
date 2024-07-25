# 0x00-Webpack

This project is a basic setup using Webpack to manage and bundle JavaScript, CSS, and other assets. It aims to demonstrate how to set up Webpack for a project, including entry points, outputs, loaders, plugins, code splitting, and setting up a development server.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alx-react/0x00-Webpack.git
   cd 0x00-Webpack
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or if you are using Yarn
   yarn install
   ```

## Project Setup

### 1. Setting Up Webpack

Webpack is a powerful module bundler. To start using it, you need to install it and create a configuration file.

#### Installation

```bash
npm install --save-dev webpack webpack-cli
```

#### Configuration

Create a `webpack.config.js` file in the root of your project:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Loader for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // Loader for images
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    // Plugins will be listed here
  ],
};
```

### 2. Entry Points, Output, and Loaders

- **Entry Points**: Webpack's entry point is the starting point for the dependency graph it builds. In this project, it's set to `./src/index.js`.

- **Output**: The bundled file is saved in the `dist` directory with the filename `bundle.js`.

- **Loaders**: Webpack uses loaders to process different types of files. For example, `css-loader` and `style-loader` are used to process CSS files, while `file-loader` handles image files.

### 3. Adding Plugins

Plugins can be used to perform a wider range of tasks like optimization, asset management, and injection of environment variables.

Install the `html-webpack-plugin` to generate an HTML file that includes your webpack bundles.

```bash
npm install --save-dev html-webpack-plugin
```

Update your `webpack.config.js`:

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... previous code
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template file
      filename: 'index.html', // Output file
    }),
  ],
};
```

### 4. Code Splitting

Code splitting is useful for improving the performance of your application by splitting your code into smaller chunks.

Update your `webpack.config.js`:

```javascript
module.exports = {
  // ... previous code
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```

This configuration splits your code into separate chunks for each module.

### 5. Setting Up a Development Server

Webpack Dev Server provides a simple web server and the ability to use live reloading.

Install the `webpack-dev-server`:

```bash
npm install --save-dev webpack-dev-server
```

Update your `webpack.config.js`:

```javascript
module.exports = {
  // ... previous code
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
```

To start the dev server, add a script to your `package.json`:

```json
"scripts": {
  "start": "webpack serve --open"
}
```

Run the server with:

```bash
npm start
```

## Conclusion

This project provides a basic setup for using Webpack in a JavaScript project. It covers entry points, output configuration, loaders, plugins, code splitting, and setting up a development server. This setup can be further customized and expanded based on the needs of your project.