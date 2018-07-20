# I wanted to push the app to a github page and this is what I did :

	`
		$ git init
		$ git add .
		$ git commit -m "initial commit"
		$ git remote add origin https://github.com/xxxx/hello.git
		$ git push -u origin master
	`
	(just a normal push to github)

# Add 3 things in package.json
	`
	{
		"name": "portfolio-react",
		"version": "0.1.0",
		"private": true,
		"homepage": "https://[myaccount].github.io/hello/",
		"dependencies": {
			"bootstrap": "^4.1.2",
			"gh-pages": "^1.2.0",
			"react": "^16.4.1",
			"react-dom": "^16.4.1",
			"react-router-dom": "^4.3.1",
			"react-scripts": "1.1.4",
			"reactstrap": "^6.3.0"
		},
		"scripts": {
			"start": "react-scripts start",
			"build": "react-scripts build",
			"test": "react-scripts test --env=jsdom",
			"predeploy": "npm run build",
			"deploy": "gh-pages -d build",
			"eject": "react-scripts eject"
		}
	}
	`

# Then run `npm run deploy`
# And in the build folder, the path aren't correct as I said !
