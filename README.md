# almiller.co

Portfolio site for Al Miller.

[almiller.co](https://www.almiller.co)

## Purpose

Minimal personal site to aggregate projects and thoughts. Bare-bones structure.

## Installation

Clone repository

```
git clone https://github.com/ANMillerIII/almiller.co.git
```

Instantiate and activate virtual environment

```
py -m venv venv

./venv/Scripts/activate.ps1

```

Install dependencies

```
py -m pip install -r requirements.txt
```

Run Flask

```
flask run
```

## Deployment

Freeze site (output to 'build' directory)

```
py freeze.py
```

Freeze site (output to 'build' directory)

```
aws s3 cp ./build s3://name-of-bucket/
```

Configure CloudFront deployment from AWS console

## Built With

* [Flask](https://flask.palletsprojects.com/en/1.1.x/) - Flask framework used.
* [Frozen-Flask](https://pythonhosted.org/Frozen-Flask/) - Static deployment of Flask apps.
* [AWS S3, CDN](https://aws.amazon.com/) - Site is deployed from S3 bucket via CloudFront.

## Authors

* **Al Miller** - [ANMillerIII](https://github.com/ANMillerIII)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details