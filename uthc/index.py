from flask import Flask, render_template
import forms

app = Flask(__name__, template_folder='templates')


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/contacto')
def contacto():
    return render_template("contacto.html")

@app.route('/formulario')
def formulario():
    comment_form = forms.CommentForm()
    return render_template("formulario.html", form = comment_form)

@app.route('/gracias')
def gracias():
    return render_template("gracias.html")

if __name__ == "__main__":
    app.run(debug=True)