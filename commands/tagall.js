const isAdmin = require('../lib/isAdmin');  // Move isAdmin to helpers

async function tagAllCommand(sock, chatId, senderId, message) {
    try {
        const { isSenderAdmin, isBotAdmin } = await isAdmin(sock, chatId, senderId);
        

        if (!isBotAdmin) {
            await sock.sendMessage(chatId, { text: 'Please make the bot an admin first.' }, { quoted: message });
            return;
        }

        if (!isSenderAdmin) {
            await sock.sendMessage(chatId, { text: 'Only group admins can use the .tagall command.' }, { quoted: message });
            return;
        }

        // Get group metadata
        const groupMetadata = await sock.groupMetadata(chatId);
        const participants = groupMetadata.participants;

        if (!participants || participants.length === 0) {
            await sock.sendMessage(chatId, { text: 'No participants found in the group.' });
            return;
        }

        // Create message with each member on a new line
        const numbers = ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟'];

async function tagAllCommand(sock, chatId, participants) {
    let messageText = `*╔══════════════╗\n` +
                      `║➤©ᴅᴀʀᴋ ᴇʏᴇ ᴏғᴄ ᴛᴇᴄʜ\n` +
                      `╚══════════════╝*\n\n` +
                      `*🙋🏽‍♀️ YOH WHAT'S UP BUDDIES❕*\n` +
                      `*Total:* ${participants.length} members\n\n`;

    participants.forEach((participant, index) => {
        const num = index < 10 ? numbers[index] : `${index + 1}.` // use emoji for 1-10, else normal number
        messageText += `${num} @${participant.id.split('@')[0]}\n`; // Add \n for new line
    });

    messageText += `\n╰┈➤ https://alextheon.com.free\n` +
                   `╰┈➤ _join our official website for some updates_`;

    const mentions = participants.map(p => p.id);

    await sock.sendMessage(chatId, {
        text: messageText,
        mentions: mentions // this makes the @ tags work
    });
}

module.exports = tagAllCommand;
        // Send message with mentions
        await sock.sendMessage(chatId, {
            text: messageText,
            mentions: participants.map(p => p.id)
        });

    } catch (error) {
        console.error('Error in tagall command:', error);
        await sock.sendMessage(chatId, { text: 'Failed to tag all members.' });
    }
}

module.exports = tagAllCommand;  // Export directly
