# Raxcel-bot [MD]

---

<a href="https://visitor-badge.glitch.me/badge?page_id=Kangsad01/bot-md"><img title="Visitor" src="https://visitor-badge.glitch.me/badge?page_id=Kangsad01/bot-md"></a>
<a href="https://github.com/Kangsad01/bot-md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/Kangsad01/bot-md?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/Kangsad01/bot-md?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/Kangsad01/bot-md?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/Kangsad01/bot-md?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/issues"><img title="Issues" src="https://img.shields.io/github/issues/Kangsad01/bot-md?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/Kangsad01/bot-md?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/Kangsad01/bot-md?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/Kangsad01/bot-md/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/Kangsad01/bot-md?label=PullRequest&color=red&style=flat-square"></a>


[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Kangsad01/bot-md)
## Join Group Diskusi
[![BOT DISCUSSION GROUP](https://img.shields.io/badge/WhatsApp%20Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/Fm6gRtvuCDN9abXVlfekAK) 
**NO BOT**

## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/Kangsad01/bot-md
cd bot-md
npm i
node .
```

---------

## UNTUK PENGGUNA TERMUX

* Download Termux [`Klik Disini`](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)
* Download node_modules [`Klik Disini`]()

```
$ pkg update && upgrade -y
$ apt update && upgrade -y
$ pkg install ffmpeg
$ pkg install nodejs-lts
$ pkg install git
$ git clone https://github.com/Kangsad01/bot-md
$ cd bot-md
$ npm i
$ node .
```
---------
## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/mcollina/heroku-buildpack-imagemagick.git

---------

## Arguments `node . [--options] [<session name>]` 

### `--session <nama file>`

menggunakan session dari nama file yang berbeda, default `session.data.json`

contoh nama file `raxcel.json` maka penggunaannya `node . --session 'raxcel'`

### `--prefix <prefix>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

menggunakan db eksternal alih-alih db lokal, **disarankan** menggunakan mongodb

contoh server dengan mongodb `mongodb+srv://<username>:<password>@name-of-your-db.thhce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

contoh server dengan repl `https://json-server.nurutomo.repl.co/`

kode: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```
#### Thanks To 
**Allah SWT**,

**Orang Tua**,

**All Team Bot Discussion**,

**Semua yang selalu mendukung**


##### Special Thanks to
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)

###### Contributor
[![Fokus ID](https://github.com/fokusdotid.png?size=100)](https://github.com/fokusdotid)
[![Aniq](https://github.com/aniq12.png?size=100)](https://github.com/aniq12)
[![Rasel Comel](https://github.com/raselcomel.png?size=100)](https://github.com/raselcomel)
[![Amirul Dev](https://github.com/amiruldev20.png?size=100)](https://github.com/amiruldev20)
[![Amelia Lisa](https://github.com/Ameliascrf.png?size=100)](https://github.com/Ameliascrf)
[![Kangsad01](https://github.com/Kangsad01.png?size=100)](https://github.com/Kangsad01)
[![bot xtrehse](https://github.com/xtreshebot.png?size=100)](https://github.com/xtreshebot)
