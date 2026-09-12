const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `*🤖Yoh, whats uk dude am Awake!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `╔══════════════╗\n` +
                       `║➤©ᴅᴀʀᴋ ᴇʏᴇ ᴏғᴄ ᴛᴇᴄʜ\n` +
                       `╚══════════════╝\n` +
                       `╰┈➤ https://alextheon.com.free\n` +
                       `╰┈➤ _join our official website for some updates_`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '12036316151368598@newsletter',
                    newsletterName: 'DARK-EYE-OFC TECH',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
