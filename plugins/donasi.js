let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkom [082147562437]
│ • Gopay  [085338890541]
│ • XL     [087793236775]
│ • Saweria  [https://saweria.co/sxyobotz]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/62895336282144
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
