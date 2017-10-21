from flask import flask
app = Flask(__name__)

@app.route('/callback')
def callback():
	return 'Welcome back!'