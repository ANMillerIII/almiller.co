## [almiller.co](https://www.almiller.co)

Al's serverless static portfolio site.

![Build Status](https://travis-ci.org/almiller/UtilityBehaviors.png)

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

Freeze Flask application to static web app using Frozen-Flask

`py freeze.py`

Upload to AWS S3 using AWS CLI

`py -m awscli s3 cp ./app/build s3://albert-miller/ --recursive`

Create AWS CloudFront cache invalidation or use S3 versioning from AWS Console to deploy.

## Citations

Tree animation forked and modified from Chris Harrison's [fractal tree generator](https://github.com/someuser-321/TreeGenerator).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.