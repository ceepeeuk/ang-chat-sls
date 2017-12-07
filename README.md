# Chinwag
![angular-universal-PWA report](https://raw.github.com/maciejtreder/angular-universal-pwa/master/src/assets/img/lighthouse_report.png)

This repo is a simple proof of concept of using AWS IoT, based on the boilerplate for Angular Universal (serverside rendering) applications.
It is running as a **(PWA) progressive web app** with the whole goodness of it (push messages, content caching and making it installable on the Android devices)!
It is prepared to be easily deployed on serverless environment (like AWS Lambda).

## What's inside?
* PWA - content is cached and available offline, it can be also installed as native app on Android devices and Google Chrome
* AMP - Accelerated Mobile Pages - super fast initial load (down to ~650ms)
* Push notifications:
    * Vapid webpush (Chrome and Firefox) - Using [aws-sns-webpush](https://github.com/maciejtreder/aws-sns-webpush) as back-end
    * Safari push - Using [aws-sns-webpush](https://github.com/maciejtreder/aws-sns-webpush) as back-end
* Lazy loading modules
* External modules (You can split your application into multiple projects and lazy-load them, [read more here](https://github.com/maciejtreder/angular-external-module))
* Angular Material
* *some* Unit tests


### Used frameworks/technologies
* Webpack
* UglifyJS
* OptimizeJS
* DllPlugin (super fast reloading in development mode)
* Sass loader
* Serverless framework
* AWS IoT

## Get Started
```sh
git clone https://github.com/maciejtreder/angular-universal-pwa.git
cd angular-universal-serverless
npm install
npm start
```
* Development mode (autoreload only): ```npm start```
* Development mode (autoreload + unit tests): ```npm run build:dev```
* Unit tests: ```npm run test```


## Production mode
Includes AoT
```sh
npm run build:prod
npm run server
```

## Deploy on AWS Lambda
```sh
npm run build:deploy
```

## Won't implement:
* load static content from S3 (JavaScript, styles, images):
    * when serving all static content from S3 load speed up is not really visible (increase is around ~0,2 sec),
    * problems with CORS on Chrome,
    * problems with compression of some files (.js files are not compressed in some cases)
    * needs a lot of manual setup (cloudfront setup etc.)

## Credentials
* Built on top of [angular-universal-PWA report](https://raw.github.com/maciejtreder/angular-universal-pwa/master/src/assets/img/lighthouse_report.png)