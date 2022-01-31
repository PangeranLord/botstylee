let handler = async m => m.reply(`
╭─「 Donasi 」
│ • myXL [087832147584]
│ • Dana [087832147584]
│ • Saweria [https://saweria.co/PangeranLord]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6287832147584
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
