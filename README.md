


## [almiller.co](https://www.almiller.co)

Simple personal site with an interesting p5.js tree fractal animation.

![Build Status](https://travis-ci.com/ANMillerIII/almiller.co.svg?branch=master)

## Stack

| Front End  | Back End                |
| ---------- | ----------------------- |
| JavaScript | AWS S3, CloudFront |
| p5.js      | Github                  |
| HTML/CSS   | Travis CI (automate CloudFront invalidation)|

## Develop

Clone repository

`git clone https://www.github.com/anmilleriii/almiller.co.git`

This is just vanilla JS; simply open  `index.html` in Chrome.

## Deploy

Travis CI automatically performs the following on every to pull request to `master`.

1. Uploads to S3 and invalidate CloudFront distribution (i.e., deploys to https://almiller.co).
2. Create AWS CloudFront cache invalidation or use S3 versioning from AWS Console to deploy.

##  Notes on Routing

Purpose: route all HTTP or HTTPS requests to www.almiller.co to naked domain, almiller.co

Since static site from AWS S3 cannot provide SSL certificate, CDN CloudFront is used to serve HTTPS.

CloudFront routing is done as follows:

1. List both the apex and naked domains as CNAMES for CDN distribution
2. Enable new behavior as Lambda@Edge, "Viewer Request", with the below Lambda function ARN referenced:

    
        'use strict';

        exports.handler = (event, context, callback) => {
            var rawJson = JSON.stringify(event);
            var searchMask = '"host"';
            var regEx = new RegExp(searchMask, "ig");  
            var replaceMask = '"Host"';

        rawJson = rawJson.replace(regEx, replaceMask);
        event = JSON.parse(rawJson);

        const request = event.Records[0].cf.request;
        var str = request.headers.Host[0].value;

        if (str.startsWith("www.") && !str.endsWith('.cloudfront.net')) {
            var updatedHost = str.replace("www.","");

            var location = "https://" + updatedHost + request.uri;

            const response = {
                status: '302',
                statusDescription: '302 Found',
                headers: {
                    location: [{
                        key: 'Location',
                        value: location,
                    }],
                }
        };

        console.log(JSON.stringify(response));
        callback(null, response);
        return;
        }

        callback(null, request);
        
        };

3. Set Namecheap (DNS) records to the following:

| Record | Host | Target                  |
| ------ | ---- | ----------------------- |
| CNAME  | xyz  | ssl verification        |
| CNAME  | xyz  | ssl verification        |
| CNAME  | www  | cloudfront distribution |
| ALIAS  | @    | cloudfront distribution |


## Citations

Tree animation forked and modified from Chris Harrison's [fractal tree generator](https://github.com/someuser-321/TreeGenerator).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Please feel free to reach out at [albert.miller@uconn.edu](mailto::albert.miller@uconn.edu).

