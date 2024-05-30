const asciiArt = `
  _  _ _          ___ _             _ 
 | || (_)_ _____ / __| |___ _  _ __| |
 | __ | \\ V / -_) (__| / _ \\ || / _\` |
 |_||_|_|\\_/\\___|\\___|_\\___/\\_,_\\__,_|
`;

const coloredAsciiArt = asciiArt.split('').map((char, index) => {
    let colorCode;
    switch(index % 6) {
        case 0: colorCode = '\x1b[31m'; break; // Red
        case 1: colorCode = '\x1b[32m'; break; // Green
        case 2: colorCode = '\x1b[33m'; break; // Yellow
        case 3: colorCode = '\x1b[34m'; break; // Blue
        case 4: colorCode = '\x1b[35m'; break; // Magenta
        case 5: colorCode = '\x1b[36m'; break; // Cyan
        default: colorCode = '\x1b[0m'; // Reset
    }
    return colorCode + char;
}).join('');

console.log(coloredAsciiArt);
console.log(`                             
\x1b[37mBienvenue sur votre hébergement Discord.JS propulsé par \x1b[34mHiveCloud.FR\x1b[0m
Pour mettre en place votre instance, connectez-vous via le serveur SFTP en cliquant sur la catégorie "Paramètres".
\x1b[32mMerci de votre confiance\x1b[0m !\n\n\x1b[31m# Liens utiles\x1b[0m
Site internet: \x1b[36mhttps://hivecloud.fr/\x1b[0m
Discord: \x1b[36mhttps://discord.hivecloud.fr/\x1b[0m
`);

console.log('                                            ');
process.stdin.resume();