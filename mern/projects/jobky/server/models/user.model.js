const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Debe ingrear nombre'],
        minlength: [3, 'Debe tener por lo menos 3 caracteres'],
    },
    email: {
        type: String,
        unique: [true, 'Este correo ya se encuentra registrado'],
        required: [true, 'Debe ingresar email'],
    },
    password: {
        type: String,
        required: [true, 'Debe tener una contraseña'],
        minlength: [3, 'Debe tener por lo menos 3 caracteres'],
    },
    description: {
        type: String,
        minlength: [3, 'Debe tener por lo menos 3 caracteres']
    }
},{timestamps: true});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

const User = model('User', UserSchema);

module.exports = User;