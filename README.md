## [almiller.co](https://www.almiller.co)

Al's serverless portfolio site.

![Build Status](https://travis-ci.com/ANMillerIII/almiller.co.svg?branch=master)

## Contact

Please feel free to reach out at [albert.miller@uconn.edu](mailto::albert.miller@uconn.edu).

Al also has a [Linkedin](https://www.linkedin.com/al-miller/).

## Stack

<u>Front-End</u>

- JavaScript
- p5.js

<u>Back-End</u>

- Flask/Frozen-Flask
- AWS
    - S3
    - CDN
    - CloudFront
- Travis CI
- Google Analytics

## Develop

Clone repository

`git clone https://www.github.com/anmilleriii/almiller.co.git`

Switch to `/almiller.co` and activate Python virtual environment

`./venv/Scripts/activate.ps1`

Install dependencies

`py -m pip install -r requirements.txt`

Run local Flask development server

`flask run`

## Deploy

#### Travis CI automatically performs the following on every `git push` to `master`.

1. Uglify JS (for JS performance)
2. Freeze Flask application (static/serverless on S3)
3. Upload to S3 and invalidate CloudFront distribution.

i.e., instantly deploy to https://almiller.co on every pull request to `master`.

#### HTTP/HTTPS and www to Non-www Routing Challenges

Goal: route all HTTP or HTTPS requests to www.almiller.co to naked domain, almiller.co

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

Record | Host | Target
-------|------|-------
CNAME  | xyz  | ssl verification
CNAME  | xyz  | ssl verification
CNAME  | www  | d1tr5ad4bw850h.cloudfront.net.
ALIAS  | @    | d1tr5ad4bw850h.cloudfront.net.

#### Manually from bash terminal this is:

Uglify JS

`uglifyjs ./app/static/js/working/main.js -o ./app/static/js/main.min.js`
`uglifyjs ./app/static/js/working/modal.js -o ./app/static/js/modal.min.js`

Freeze Flask application to static web app using Frozen-Flask

`py freeze.py`

Upload to AWS S3 using AWS CLI

`py -m awscli s3 cp ./app/build s3://albert-miller/ --recursive`

Create AWS CloudFront cache invalidation or use S3 versioning from AWS Console to deploy.

## Citations

Tree animation forked and modified from Chris Harrison's [fractal tree generator](https://github.com/someuser-321/TreeGenerator).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
