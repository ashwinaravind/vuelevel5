# vuelevel5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# vuelevel5

Complete tutorial From
https://coursetro.com/courses/23/Vue-Tutorial-in-2018---Learn-Vue.js-by-Example

vue init webpack <projectname>
cd <projectname>
npm run dev

npm run build
#create bucket
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadAccess",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
		}
	]
}
aws s3 sync ./dist s3://your-bucket-name
