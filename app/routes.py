from flask import render_template, redirect, url_for, request
from app import app
import random
import os
from datetime import datetime


@app.template_filter('format_date_time')
def format_datetime(value, format="%B %d, %Y"):
    """Format a date time to (Default): d Mon YYYY HH:MM P"""
    if value is None:
        return ""
    return value.strftime(format)

###################################### data ######################################

thoughts = {
    "workingclass": {
        "title": "Working Class",
        "date": datetime(2020, 9, 14),
        "text": "Essay regarding the working class will come in time!"
    },
    "retailinvestingandhealthyfinancialattitudes": {
        "title": "Retail Investing and Healthy Financial Attitudes",
        "date": datetime(2020, 9, 9),
        "text": "I've always wanted to write about retail investing - coming soon!"
    },
    "blueberrypicking": {
        "title": "Blueberry Picking",
        "date": datetime(2020, 8, 23),
        "text": "Have you ever been to Holmberg's? Best berries!"
    },
    "emikoandalbertmillersr": {
        "title": "Emiko and Albert Miller Sr.",
        "date": datetime(2020, 8, 10),
        "text": "My grandparents are truly amazing people - would love to write more about them here."
    },
    "fearofmissingoutoriginatesfrominsecurity": {
        "title": "Fear of Missing Out originates from Insecurity",
        "date": datetime(2020, 6, 15),
        "text": "<p>Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.</p><p>Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.Vital topic that has implications for many of us in competitive environments.</p>"
    }
}

cs_projects = {
    "newperspective.life": {
        "title": "New Perspective Life Coaching",
        "date": datetime(2020, 9, 14),
        "text": "Static life coaching site built for mom.",
        "skills": "Flask, HTML5/CSS, Javascript, AWS S3, Google Analytics, AWS Lambda, AWS DynamoDB, Git"
    },
    "naturallanguageprocessingofplantMaintenancedatabaseforepri": {
        "title": "Natural Language Processing of Plant Maintenance Database for EPRI",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "Python NLTK, LVSM, Imba-learn, sklearn, seaborn, Git"
    },
    "vocationaloccupationsandeducationplatform": {
        "title": "Vocational Occupations and Education Platform",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "React, Redux, AWS IAM, AWS CloudFront, AWS DynamoDB, AWS Lambda, Docker, Git"
    },
    "studyingDataStructuresandalgorithms": {
        "title": "Studying Data Structures & Algorithms",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "DFS, BFS, Data structures"
    },
    "montecarloriskanalysisforpersonalfinance": {
        "title": "Monte Carlo Risk Analysis for Personal Finance",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "Python, numpy, git, matplotlib"
    },
    "eloquentjavascriptsolutions": {
        "title": "Eloquent Javascript Solutions",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "Javascript, HTML5/CSS, node, npm"
    },
    "reacttutorialsolutions": {
        "title": "React Tutorial Solutions",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "React, HTML5/CSS"
    },
    "opensourcecontributions": {
        "title": "Open Source Contributions",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder",
        "skills": "Varied"
    },
    "gisriskanalysisforenergyproviders": {
        "title": "GIS Risk Analysis for Energy Providers",
        "date": datetime(2020, 6, 15),
        "text": "Placeholder",
        "skills": "ESRI ArcGIS JS API, Javascript, HTML5/CSS, geotrellis, SQLite"
    },
}

other_projects = {
    "photography": {
        "title": "Photography",
        "date": datetime(2020, 9, 14),
        "text": "Placeholder"
    },
    "runningan18minute5k": {
        "title": "Running a 18:00 min 5k",
        "date": datetime(2020, 9, 1),
        "text": "Placeholder"
    },
    "hikingthepacificcresttrail": {
        "title": "Hiking the Pacific Crest Trail",
        "date": datetime(2020, 8, 15),
        "text": "Placeholder"
    },
    "hikingtheappalachiantrail": {
        "title": "Hiking the Appalachian Trail",
        "date": datetime(2020, 8, 1),
        "text": "Placeholder"
    },
    "anovelmethodforsealingporousplates": {
        "title": "A Novel Method for Sealing Porous Plates",
        "date": datetime(2020, 6, 15),
        "text": "Placeholder"
    },
    "computationalfluiddynamics": {
        "title": "Computational Fluid Dynamics",
        "date": datetime(2020, 6, 15),
        "text": "Placeholder"
    },
}

###################################### index ######################################


@app.route("/")
def index():
    return render_template("index.html")

###################################### thoughts ######################################


@app.route('/thoughts')
@app.route('/thoughts.html')
def thought_index():
    return render_template("thoughts.html", thoughts=thoughts)


@app.route("/thought/<thought_key>")
@app.route("/thought/<thought_key>.html")
def thought(thought_key):
    thought = None
    three_thoughts = {k: thoughts[k]
                      for k in random.choices(list(thoughts), k=3)}
    if thought_key in thoughts:
        thought = thoughts[thought_key]
    return render_template("thought.html", thought_key=thought_key, thought=thought, three_thoughts=three_thoughts)

###################################### projects ######################################


@app.route("/projects.html")
def project_index():
    return render_template("projects.html", cs_projects=cs_projects, other_projects=other_projects)


@app.route("/project/<project_key>")
@app.route("/project/<project_key>.html")
def project(project_key):
    project = None
    if project_key in cs_projects:
        project = cs_projects[project_key]
    if project_key in other_projects:
        project = other_projects[project_key]
    return render_template("projects.html", project_key=project_key, project=project)


@app.route('/project/photography.html')
def photography():
    images = os.listdir(os.path.join(app.static_folder, "./assets/photos/pct"))
    return render_template('photography.html', images=images)

###################################### about ######################################


@app.route('/about')
@app.route('/about.html')
def about():
    return render_template('about.html', title='about', thoughts=thoughts)

###################################### redirects ######################################


@app.route('/thought/about.html')
@app.route('/project/about.html')
def redirect_about():
    return redirect(url_for('about'))


@app.route('/projects/project.html')
@app.route('/thought/project.html')
def redirect_projects():
    return redirect(url_for('projects'))


@app.route('/projects/thoughts.html')
@app.route('/thought/thoughts.html')
def redirect_thoughts_index():
    return redirect(url_for('thoughts_index'))
