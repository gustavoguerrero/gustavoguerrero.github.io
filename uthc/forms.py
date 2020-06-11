from wtforms import Form
from wtforms import StringField, TextField
from wtforms.fields.html5 import EmailField


class CommentForm(Form):
    username = StringField('Nombre')
    email = EmailField('Correo electrónico')
    comment = TextField('Comentario')