const DiscordRPC = require("discord-rpc");

const ClientId = 'YOUR ID';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `GET YOUR ASS BACK HERE!!!!`,
    state: 'Put your hands all over myself',
    largeImageKey: 'gach1',
    largeImageText: 'Put your hands all over myself',
    smallImageKey: 'gach2',
    smallImageText: 'Boy next door',
    instance: false,
    startTimestamp: new Date(),
    partySize: 1,
    partyMax: 1,
    matchSecret: 'slithers',
    spectateSecret: 'sniff',
    joinSecret: 'boop',
  });
});

rpc.login(ClientId).catch(console.error);
