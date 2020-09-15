## almiller.co

Personal portfolio site for Al Miller.

[almiller.co](https://www.almiller.co)

## Purpose

Static site to of Al Miller.

## Core Functionality

Primary requirements:

1. Hosted static site with following pages:
    - Index
    - How it works
    - Testimonials
    - Get in touch

2. Contact functionality, including:
    - Take the leap email sign-up form on each page, which triggers AWS Lambda function to add person to subscriber database and sends them an email update, along with a modal
    - Get in touch form, which does the same as above (though with more info)

3. No maintenance or uptime issues, no upkeep
    - Don't touch it

## Stack

Serverless static site.

Front-End:

- Flask
- jquery
- Javascript

Backend:

- Flask-Frozen to convert flask application to static site
- S3 Storage for hosting static files
- Cloud Delivery Network as a CDN (provides HTTPS certificate)
- Google Analytics for site metrics

## Run

`./venv/Scripts/activate.ps1`

`flask run`

## Other Aspects

Al also has a [Linkedin](https://www.linkedin.com/al-miller/).