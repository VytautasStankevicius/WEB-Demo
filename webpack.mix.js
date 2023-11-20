let mix = require('laravel-mix')

mix.js('src/app.js', 'public') //i kuri aplanka kompiliuoti JS
.sass('src/scss/style.scss', 'css') //is ko gaminamas css failas
.setPublicPath('public') //kur gaminamas failas