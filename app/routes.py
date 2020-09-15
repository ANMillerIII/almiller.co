from flask import render_template, redirect, url_for
from app import app

thoughts = {
    "workingclass": {
        "title": "Working Class",
        "date": "September 14, 2020",
        "text": "Essay regarding the working class will come in time!"
    },
    "retailinvestingandhealthyfinancialattitudes": {
        "title": "Retail Investing and Healthy Financial Attitudes",
        "date": "September 9, 2020",
        "text": "I've always wanted to write about retail investing - coming soon!"
    },
    "blueberrypicking": {
        "title": "Blueberry Picking",
        "date": "August 23, 2020",
        "text": "Have you ever been to Holmberg's? Best berries!"
    },
    "emikoandalbertmillersr": {
        "title": "Emiko and Albert Miller Sr.",
        "date": "August 10, 2020",
        "text": "My grandparents are truly amazing people - would love to write more about them here."
    },
    "fearofmissingoutoriginatesfrominsecurity": {
        "title": "Fear of Missing Out originates from Insecurity",
        "date": "July 15, 2020",
        "text": "<p>Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.</p><p>Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.</p>"
    }
}

projects = {
    "newperspective.life": {
        "title": "New Perspective Life Coaching",
        "date": "September 14, 2020",
        "text": "Static life coaching site built for mom."
    },
    "thermalplasmawelding": {
        "title": "A Novel Method for Sealing Porous Plates",
        "date": "September 9, 2020",
        "text": "Placeholder"
    }
}

three_thoughts = {k: thoughts[k] for k in list(thoughts)[:3]}

@app.route("/")
def index():
    return render_template("index.html", thoughts=thoughts)

@app.route("/thoughts/<thought_key>")
@app.route("/thoughts/<thought_key>.html")
def thought_index(thought_key):

    thought = None
    if thought_key in thoughts:
        thought = thoughts[thought_key]
    return render_template("thoughts.html", thought_key=thought_key, thought=thought, three_thoughts=three_thoughts)

@app.route("/portfolio.html")
def portfolio():
    return render_template("portfolio.html", projects=projects)

@app.route("/portfolio/<project_key>")
@app.route("/portfolio/<project_key>.html")
def portfolio_index(project_key):
    project = None
    if project_key in projects:
        project = projects[project_key]
    return render_template("projects.html", project_key=project_key, project=project)

@app.route('/about')
@app.route('/about.html')

def about():
    return render_template('about.html', title='about', thoughts=thoughts)

@app.route('/thoughts/about.html')
@app.route('/portfolio/about.html')
def redirect_about():
    return redirect(url_for('about'))

@app.route('/portfolio/portfolio.html')
@app.route('/thoughts/portfolio.html')
def redirect_portfolio():
    return redirect(url_for('portfolio'))

