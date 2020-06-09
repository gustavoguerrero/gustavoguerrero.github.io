from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/contacto')
def contacto():
    return render_template("contacto.html")

@app.route('/gracias')
def gracias():
    return render_template("gracias.html")

if __name__ == "__main__":
    app.run(debug=True)