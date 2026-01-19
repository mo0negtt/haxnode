import { useCallback, useState, useRef, useMemo, useEffect } from 'react';
import { 
  ReactFlow, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  Connection, 
  Edge,
  ReactFlowProvider,
  BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Sidebar } from '@/components/Sidebar';
import { CodePreview } from '@/components/CodePreview';
import { ConfigHostNode } from '@/components/nodes/ConfigHostNode';
import { AdminNode } from '@/components/nodes/AdminNode';
import { GameRulesNode } from '@/components/nodes/GameRulesNode';
import { AutomatedModeNode } from '@/components/nodes/AutomatedModeNode';
import { VisualsNode } from '@/components/nodes/VisualsNode';
import { SocialNode } from '@/components/nodes/SocialNode';
import { BotNode } from '@/components/nodes/BotNode';
import { AnnouncementNode } from '@/components/nodes/AnnouncementNode';
import { SocialNetworksNode } from '@/components/nodes/SocialNetworksNode';
import { HostCustomizationNode } from '@/components/nodes/HostCustomizationNode';
import { TournamentRulesNode } from '@/components/nodes/TournamentRulesNode';
import { RolesNode } from '@/components/nodes/RolesNode';
import { AccessRestrictionsNode } from '@/components/nodes/AccessRestrictionsNode';
import { DiscordWebhooksNode } from '@/components/nodes/DiscordWebhooksNode';
import { BallCustomizationNode } from '@/components/nodes/BallCustomizationNode';
import { SecurityNode } from '@/components/nodes/SecurityNode';
import { useScriptTemplate } from '@/hooks/use-configurations';

// Initial state for different node types
const initialNodeValues = {
  configHost: { hostName: "▶️▶️🟦🟩  UNETE Y JUEGA 🟩🟦◀️◀️", public: true, maxPlayers: 16, password: "", reiniciarStats: "No" },
  admin: { adminKey: "!axeso5", vipKey: "reservado", adminList: "" },
  gameRules: { 
    mapName: "Futsal x3", 
    timeLimit: 3, 
    scoreLimit: 3,
    autoBalance: false,
    cambioCami: false,
    powerShot: false,
    jabulaniMode: false,
    combaMode: false,
    golDeOro: false,
    fairPlay: false,
    ganaSigue: false,
    jueganTodos: false,
    jueganAlgunos: false,
    maxPlayersPerTeam: 2
  },
  automatedMode: {
    enabled: false,
    changeLimit: 30,
    waitTime: 5000,
    timeEntrenamientoFutsal: 0, goalsEntrenamientoFutsal: 0,
    timeFutsalx2: 3, goalsFutsalx2: 3,
    timeFutsalx3: 3, goalsFutsalx3: 3,
    timeFutsalx4: 4, goalsFutsalx4: 3,
    timeFutsalx5: 4, goalsFutsalx5: 3,
    timeFutsalx7: 5, goalsFutsalx7: 3
  },
  visuals: { 
    playerSize: 15, 
    camisetaRed: "/colors red 66 FFA649 DE0019 B80017 820217",
    camisetaBlue: "/colors blue 55 c1ff00 052647 005DB3 03B2F0"
  },
  social: { 
    welcomeMessage: "🎉 ¡Bienvenido/a! 🎉\nEstás ingresando a un host de HaxBall...", 
    colorMensaje: "FFFFFF",
    tipoLetra: "normal",
    discordWebhook: "" 
  },
  bot: { botVisible: false, botName: "🚩 Árbitro Bot 🤖" },
  announcement: {
    announcement1: "✨ ÚNETE AL DISCORD DE GLH Y APRENDE A CREAR TU PROPIO HOST CON SCRIPT: discord.gg/tDEUbJU8QB",
    font1: "bold",
    color1: "FFFFFF",
    announcement2: "🛑 Para expulsar a un jugador, utiliza el comando `!expulsar NúmeroID`. Para ver los IDs de los jugadores, escribe `#` en el chat.",
    font2: "italic",
    color2: "CCFF00"
  },
  socialNetworks: {
    discordLink: "discord.gg/tDEUbJU8QB",
    youtubeLink: "youtube.com/@GrandesLigasHaxBall",
    twitchLink: "twitch.tv/stefano365p"
  },
  hostCustomization: {
    location: "myubication",
    flag: "Germany"
  },
  tournamentRules: {
    challongeLink: "challonge.com/es/",
    rules: "⯌ 4 vs 4\n⯌ Equipo que gana el partido, continua jugando. 🏆\n⯌ Dos jugadores ingresan por orden de Espectadores.\n⯌ El equipo ganador le toca el país con más probabilidades de ganar.\n⯌ Si empatan, salen ambos equipos."
  },
  roles: {
    nombreRol1: "🗦👑🗧𝗢𝗪𝗡𝗘𝗥", colorRol1: "FFD700", nicknamesRol1: "",
    nombreRol2: "🤝 CO-OWNER", colorRol2: "FFFFFF", nicknamesRol2: "",
    nombreRol3: "🌐 HOSTER", colorRol3: "FFFFFF", nicknamesRol3: "",
    nombreRol4: "🛠️ AYUDANTE", colorRol4: "FFFFFF", nicknamesRol4: "",
    nombreRol5: "🔧 SUBAYUDANTE", colorRol5: "FFFFFF", nicknamesRol5: "",
    nombreRol6: "🧉 COLABORADOR", colorRol6: "FFFFFF", nicknamesRol6: "",
    nombreRol7: "💡 ASISTENTE", colorRol7: "FFFFFF", nicknamesRol7: "",
    nombreRol8: "ROL 8", colorRol8: "FFFFFF", nicknamesRol8: "",
    nombreRol9: "ROL 9", colorRol9: "FFFFFF", nicknamesRol9: "",
    nombreRol10: "ROL 10", colorRol10: "FFFFFF", nicknamesRol10: "",
  },
  accessRestrictions: {
    reCaptcha: true,
    maxAFK: 4,
    maxPerIp: 2,
    forbiddenCountries: "united states, united kingdom",
    bannedIps: "",
    forbiddenNicks: "@everyone, @here, @",
    registeredPlayers: "",
    bannedAuthNick: ""
  },
  discordWebhooks: {
    webhookHostOpen: "https://discord.com/api/webhooks/1201825912958767134/g1BEoP1RNO_zSrQmf0nhkQRP_z3BnR2bJXfKYkK7CCPLk-KZf86tn-bPq_mDZ2UHwRMf",
    msgHostOpen: "🚀 ¡NUEVO HOST ABIERTO! 🎮\n⚽ ¡No te lo pierdas! Únete al partido ahora y demuestra tus habilidades en la cancha.\n¡La diversión está por comenzar, no faltes! 🔥",
    tagHostOpen: "@here",
    webhookRecordings: "https://discord.com/api/webhooks/1322348400531738835/oKP4BL4iz8XhKgjzufGqUYfV7owjVlsyOgrlCyhhnX0Dcu3rJTiBUeVZI_53-QIBAaeI",
    webhookCallAdmins: "https://discord.com/api/webhooks/1201852308569464873/FPoPAp2x3kxHpS4XWLcMIASHBu-zl1C7IbMTQYpCxOmyM_ARRVpsFEU71W-x8PFwbNBv",
    rolAdminDiscord: "@here",
    waitAdmins: 2,
    webhookKicksBans: "https://discord.com/api/webhooks/1304191735512961134/MIrXKhZrca3z1X-QYZL4czQY1FuK9EhehfMESJHqz6b3TJnRcchD9Z0JrMbC0hpDQYkI",
    webhookMessages: "https://discord.com/api/webhooks/1390246048815120384/cerrYajxDO30FK_rs_VcZi2xAcGfU7amBf89kzTUFLlqg_wgY2vIWU9fE8tZQzJr-UN7",
    webhookBoletero: "https://discord.com/api/webhooks/1215904770699690104/Cuk8W0gJLVhE9gSw54YseGe6KR5PnkeHcB7dvD_GGoGAO6f-JoAsQfMiOQnieiAfU84D",
    webhookStats: "https://discord.com/api/webhooks/1338347025741385820/FxJAPCh3H6hNZvcaQOabz58RApSIwrjqjfjeek0y1k6GkbzN-UKnpUCipahK6W3b_aNW",
    webhookSign: "https://discord.com/api/webhooks/1172720661706321980/bafHm5CRFCH4aQKlYnyTn2D2dJrct2vI8QFwGs9OYxQMYL3f-ksGhzPdDZZMdIMqteCj",
    webhookIPs: "https://discord.com/api/webhooks/1329078558857101374/ZyjKtX_NsleSgWex_-sLZ2ukjv3Mo6cy0M-zLXTwLMu3v6svJo8CxJtrokjcPj7aejbp"
  },
  ballCustomization: {
    pelotaRS: "FFFFFF",
    pelotaRS_PowerShot: "FF4500",
    potenciaPowerShotRS: 2,
    pelotaFutsal: "FFFFFF",
    pelotaFutsal_PowerShot: "FF4500",
    potenciaPowerShot: 2.5,
    tipoPelotaFutsal: "oveja"
  },
  security: {
    cooldownEnabled: true,
    spamLimit: 5,
    kickThreshold: 7,
    cooldownTime: 10000,
    maxAttempts: 1,
    alertThreshold: 2
  }
};

export default function EditorPage() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);
  
  // Script generation state
  const { data: template } = useScriptTemplate();
  const [generatedCode, setGeneratedCode] = useState("// Drag nodes to generate script...");

    const nodeTypes = useMemo(() => ({
    configHost: ConfigHostNode,
    admin: AdminNode,
    gameRules: GameRulesNode,
    automatedMode: AutomatedModeNode,
    visuals: VisualsNode,
    social: SocialNode,
    bot: BotNode,
    announcement: AnnouncementNode,
    socialNetworks: SocialNetworksNode,
    hostCustomization: HostCustomizationNode,
    tournamentRules: TournamentRulesNode,
    roles: RolesNode,
    accessRestrictions: AccessRestrictionsNode,
    discordWebhooks: DiscordWebhooksNode,
    ballCustomization: BallCustomizationNode,
    security: SecurityNode,
  }), []);

  // Update node data handler
  const onNodeDataChange = useCallback((id: string, key: string, value: any) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === id) {
          const newData = { ...node.data, [key]: value };
          return { ...node, data: newData };
        }
        return node;
      })
    );
  }, [setNodes]);

  const onConnect = useCallback((params: Edge | Connection) => {
    setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: 'hsl(var(--primary))' } }, eds));
  }, [setEdges]);

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      if (typeof type === 'undefined' || !type) return;

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: `${type}_${Date.now()}`,
        type,
        position,
        data: { 
          ...initialNodeValues[type as keyof typeof initialNodeValues],
          onChange: (key: string, val: any) => onNodeDataChange(newNode.id, key, val)
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, onNodeDataChange, setNodes]
  );

  // Generate script whenever nodes change
  useEffect(() => {
    if (!template?.content) return;

    let script = template.content;
    
    // Helper to get data from a specific node type
    const getData = (type: string) => nodes.find(n => n.type === type)?.data;

    const hostData = getData('configHost');
    if (hostData) {
      script = script.replace(/var NombreHost = '.*?';/, `var NombreHost = '${hostData.hostName}';`);
      script = script.replace(/var VisibilidadDelHost = .*?;/, `var VisibilidadDelHost = ${hostData.public};`);
      script = script.replace(/var CantidadDeJugadores = .*?;/, `var CantidadDeJugadores = ${hostData.maxPlayers};`);
      script = script.replace(/var PasswordDelHost = .*?;/, `var PasswordDelHost = ${hostData.password ? `"${hostData.password}"` : 'null'};`);
      script = script.replace(/var ReiniciarStats = ".*?";/, `var ReiniciarStats = "${hostData.reiniciarStats || 'No'}";`);
    }

    const rulesData = getData('gameRules');
    if (rulesData) {
      let mapName = rulesData.mapName;
      // Normalizing map names if necessary for the regex replacement
      if (mapName === "Futsal x2") mapName = "Futsalx2";
      if (mapName === "Futsal x3") mapName = "Futsalx3";
      if (mapName === "Futsal x4") mapName = "Futsalx4";
      if (mapName === "Futsal x5") mapName = "Futsalx5";
      if (mapName === "Futsal x7") mapName = "Futsalx7";
      
      script = script.replace(/var MapaPorDefecto = ".*?";/, `var MapaPorDefecto = "${rulesData.mapName}";`);
      script = script.replace(/var TiempoDeJuego = .*?;/, `var TiempoDeJuego = ${rulesData.timeLimit};`);
      script = script.replace(/var LimiteDeGoles = .*?;/, `var LimiteDeGoles = ${rulesData.scoreLimit};`);
      
      // Game modes
      script = script.replace(/let autoBalanceEnabled = .*?;/, `let autoBalanceEnabled = ${rulesData.autoBalance};`);
      script = script.replace(/let CamisetasGanaSigue = .*?;/, `let CamisetasGanaSigue = ${rulesData.ganaSigue};`);
      script = script.replace(/var cambioCami = .*?;/, `var cambioCami = ${rulesData.cambioCami};`);
      script = script.replace(/var powerShotMode = .*?;/, `var powerShotMode = ${rulesData.powerShot};`);
      script = script.replace(/var JabulaniMode = .*?;/, `var JabulaniMode = ${rulesData.jabulaniMode};`);
      script = script.replace(/var combaMode = .*?;/, `var combaMode = ${rulesData.combaMode};`);
      script = script.replace(/var GolDeOroActivado = .*?;/, `var GolDeOroActivado = ${rulesData.golDeOro};`);
      script = script.replace(/var FairPlayActivado = .*?;/, `var FairPlayActivado = ${rulesData.fairPlay};`);
      script = script.replace(/let ganasigueEnabled = .*?;/, `let ganasigueEnabled = ${rulesData.ganaSigue};`);
      script = script.replace(/let modoJueganTodos = .*?;/, `let modoJueganTodos = ${rulesData.jueganTodos};`);
      script = script.replace(/let modoJueganAlgunos = .*?;/, `let modoJueganAlgunos = ${rulesData.jueganAlgunos};`);
      script = script.replace(/let maxPlayersPerTeam = .*?;/, `let maxPlayersPerTeam = ${rulesData.maxPlayersPerTeam};`);
    }

    const automatedData = getData('automatedMode');
    if (automatedData) {
      script = script.replace(/var automatizadoActivado = .*?;/, `var automatizadoActivado = ${automatedData.enabled};`);
      script = script.replace(/var tiempoLimiteCambio = .*?;/, `var tiempoLimiteCambio = ${automatedData.changeLimit};`);
      script = script.replace(/var tiempoEsperaCambio = .*?;/, `var tiempoEsperaCambio = ${automatedData.waitTime};`);
      
      const maps = ["EntrenamientoFutsal", "Futsalx2", "Futsalx3", "Futsalx4", "Futsalx5", "Futsalx7"];
      maps.forEach(map => {
        script = script.replace(new RegExp(`var Tiempo${map} = .*?;`), `var Tiempo${map} = ${automatedData[`time${map}`]};`);
        script = script.replace(new RegExp(`var Goles${map} = .*?;`), `var Goles${map} = ${automatedData[`goals${map}`]};`);
      });
    }

    const adminData = getData('admin');
    if (adminData) {
      script = script.replace(/var ClaveParaSerAdmin = ".*?";/, `var ClaveParaSerAdmin = "${adminData.adminKey}";`);
      script = script.replace(/var contrasena = ".*?";/, `var contrasena = "${adminData.vipKey}";`);
      
      const adminLines = adminData.adminList.split('\n').filter((l: string) => l.includes(':'));
      const admins = adminLines.map((line: string) => {
        const [auth, nicksStr] = line.split(':');
        const nicks = nicksStr.split(',').map(n => `"${n.trim()}"`).join(', ');
        return `  { auth: "${auth.trim()}", nicks: [${nicks}] }`;
      }).join(',\n');
      
      script = script.replace(/var ListaDeAdmins = \[[\s\S]*?\];/, `var ListaDeAdmins = [\n${admins || '  { auth: "", nicks: [""] }'}\n];`);
    }

    const botData = getData('bot');
    if (botData) {
      script = script.replace(/var BotVisible = .*?;/, `var BotVisible = ${botData.botVisible};`);
      script = script.replace(/var NombreBot = ".*?";/, `var NombreBot = "${botData.botName}";`);
    }

    const visualsData = getData('visuals');
    if (visualsData) {
      script = script.replace(/var TamanoMinimoPermitido = .*?;/, `var TamanoMinimoPermitido = ${visualsData.playerSize};`);
      script = script.replace(/var TamanoMaximoPermitido = .*?;/, `var TamanoMaximoPermitido = ${visualsData.playerSize};`);
      script = script.replace(/var camisetaRed = ".*?";/, `var camisetaRed = "${visualsData.camisetaRed}";`);
      script = script.replace(/var camisetaBlue = ".*?";/, `var camisetaBlue = "${visualsData.camisetaBlue}";`);
    }

    const socialData = getData('social');
    if (socialData) {
      const msgs = socialData.welcomeMessage.split('\n').map((m: string) => `  \`${m}\``).join(',\n');
      script = script.replace(/const MensajeDeBienvenida = \[[\s\S]*?\];/, `const MensajeDeBienvenida = [\n${msgs}\n];`);
      script = script.replace(/var colormensaje = ".*?";/, `var colormensaje = "${socialData.colorMensaje}";`);
      script = script.replace(/var TipoDeLetra = ".*?";/, `var TipoDeLetra = "${socialData.tipoLetra}";`);
    }

    const announcementData = getData('announcement');
    if (announcementData) {
      script = script.replace(/var Anuncio = ".*?";/, `var Anuncio = "${announcementData.announcement1}";`);
      script = script.replace(/var TipoDeLetraAnuncio = ".*?";/, `var TipoDeLetraAnuncio = "${announcementData.font1}";`);
      script = script.replace(/var ColorAnuncio = ".*?";/, `var ColorAnuncio = "${announcementData.color1}";`);
      
      script = script.replace(/var Anuncio2 = ".*?";/, `var Anuncio2 = "${announcementData.announcement2}";`);
      script = script.replace(/var TipoDeLetraAnuncio2 = ".*?";/, `var TipoDeLetraAnuncio2 = "${announcementData.font2}";`);
      script = script.replace(/var ColorAnuncio2 = ".*?";/, `var ColorAnuncio2 = "${announcementData.color2}";`);
    }

    const socialNetworksData = getData('socialNetworks');
    if (socialNetworksData) {
      script = script.replace(/const DiscordLink = ".*?";/, `const DiscordLink = "${socialNetworksData.discordLink}";`);
      script = script.replace(/const YoutubeLink = ".*?";/, `const YoutubeLink = "${socialNetworksData.youtubeLink}";`);
      script = script.replace(/const TwitchLink = ".*?";/, `const TwitchLink = "${socialNetworksData.twitchLink}";`);
    }

    const hostCustomData = getData('hostCustomization');
    if (hostCustomData) {
      script = script.replace(/var UbicacionDelHost = ".*?";/, `var UbicacionDelHost = "${hostCustomData.location}";`);
      script = script.replace(/var BanderaDelHost = '.*?';/, `var BanderaDelHost = '${hostCustomData.flag}';`);
      
      const countryCoords = {
        "argentina": [-34.6882652, -58.5685501],
        "haxarg": [-34.61, -58.42],
        "chile": [-33.45, -70.66],
        "uruguay": [-34.90, -56.19],
        "brasil": [-23.55, -46.64],
        "peru": [-12.04, -77.03],
        "colombia": [4.61, -74.08],
        "venezuela": [10.49, -66.88],
        "costa rica": [9.934739, -84.087502],
        "mexico": [19.43, -99.13],
        "united states": [40.71, -74.01],
        "marruecos": [33.57, -7.65],
        "spain": [40.42, -3.70],
        "portugal": [38.71, -9.14],
        "italy": [41.89, 12.49],
        "united kingdom": [51.51, -0.13],
        "germany": [52.52, 13.40],
        "turkey": [41.01, 28.97],
        "serbia": [44.8167494, 20.4654671],
        "poland": [52.2298, 21.0118],
        "ukraine": [50.45, 30.52],
        "russia": [55.75, 37.62],
        "china": [31.23, 121.47],
        "south korea": [37.56, 126.97],
        "vietnam": [21.03, 105.85],
        "france": [48.86, 2.34],
        "croatia": [45.8131406, 15.9772235],
        "macedonia": [41.61, 21.74],
        "israel": [31.76, 35.21],
        "canada": [45.42, -75.69],
        "bolivia": [-16.50, -68.12],
        "paraguay": [-25.27, -57.67],
        "honduras": [14.08, -87.21],
        "myubication": null
      };
      
      script = script.replace(/var countryCoords = \{[\s\S]*?\};/, `var countryCoords = ${JSON.stringify(countryCoords, null, 4)};`);
    }

    const tournamentData = getData('tournamentRules');
    if (tournamentData) {
      script = script.replace(/var ChallongeLink = '.*?';/, `var ChallongeLink = '${tournamentData.challongeLink}';`);
      const rules = tournamentData.rules.split('\n').filter((r: string) => r.trim());
      rules.forEach((rule: string, index: number) => {
        const regex = new RegExp(`var regla${index + 1} = '.*?'`);
        script = script.replace(regex, `var regla${index + 1} = '${rule}'`);
      });
    }

    const ballData = getData('ballCustomization');
    if (ballData) {
      script = script.replace(/var PelotaRS = ".*?";/, `var PelotaRS = "${ballData.pelotaRS}";`);
      script = script.replace(/var PelotaRS_PowerShot = ".*?";/, `var PelotaRS_PowerShot = "${ballData.pelotaRS_PowerShot}";`);
      script = script.replace(/var PotenciaPowerShotRS = .*?;/, `var PotenciaPowerShotRS = ${ballData.potenciaPowerShotRS};`);
      
      script = script.replace(/var PelotaFutsal = ".*?";/, `var PelotaFutsal = "${ballData.pelotaFutsal}";`);
      script = script.replace(/var PelotaFutsal_PowerShot = ".*?";/, `var PelotaFutsal_PowerShot = "${ballData.pelotaFutsal_PowerShot}";`);
      script = script.replace(/var PotenciaPowerShot = .*?;/, `var PotenciaPowerShot = ${ballData.potenciaPowerShot};`);
      script = script.replace(/var TipoPelotaFutsal = ".*?";/, `var TipoPelotaFutsal = "${ballData.tipoPelotaFutsal}";`);
    }

    const securityData = getData('security');
    if (securityData) {
      script = script.replace(/let cooldownEnabled = .*?;/, `let cooldownEnabled = ${securityData.cooldownEnabled};`);
      script = script.replace(/let SPAM_LIMIT = .*?;/, `let SPAM_LIMIT = ${securityData.spamLimit};`);
      script = script.replace(/let KICK_THRESHOLD = .*?;/, `let KICK_THRESHOLD = ${securityData.kickThreshold};`);
      script = script.replace(/let COOLDOWN_TIME = .*?;/, `let COOLDOWN_TIME = ${securityData.cooldownTime};`);
      
      script = script.replace(/var maxAttempts = .*?;/, `var maxAttempts = ${securityData.maxAttempts};`);
      script = script.replace(/var alertThreshold = .*?;/, `var alertThreshold = ${securityData.alertThreshold};`);
    }

    const rolesData = getData('roles');
    if (rolesData) {
      for (let i = 1; i <= 10; i++) {
        const color = rolesData[`colorRol${i}`] || "FFFFFF";
        script = script.replace(new RegExp(`const ColorDelChatROL${i} = .*?;`), `const ColorDelChatROL${i} = 0x${color};`);
        script = script.replace(new RegExp(`const NombreROL${i} = ".*?";`), `const NombreROL${i} = "${rolesData[`nombreRol${i}`] || ""}";`);
        const nicks = (rolesData[`nicknamesRol${i}`] || "").split(',').map((n: string) => `"${n.trim()}"`).filter((n: string) => n !== '""').join(', ');
        script = script.replace(new RegExp(`const NickNamesRol${i} = \\[\\];`), `const NickNamesRol${i} = [${nicks}];`);
      }
    }

    const accessData = getData('accessRestrictions');
    if (accessData) {
      script = script.replace(/var ActivarReCaptcha = .*?;/, `var ActivarReCaptcha = ${accessData.reCaptcha};`);
      script = script.replace(/const LimiteMaximoDeJugadoresAFK = .*?;/, `const LimiteMaximoDeJugadoresAFK = ${accessData.maxAFK};`);
      script = script.replace(/var MaximoJugadoresPorIp = .*?;/, `var MaximoJugadoresPorIp = ${accessData.maxPerIp};`);
      const countries = accessData.forbiddenCountries.split(',').map((c: string) => `"${c.trim()}"`).filter((c: string) => c !== '""').join(', ');
      script = script.replace(/const PaisesProhibidos = \[.*?\];/, `const PaisesProhibidos = [${countries}];`);
      const ips = accessData.bannedIps.split('\n').map((i: string) => `"${i.trim()}"`).filter((i: string) => i !== '""').join(', ');
      script = script.replace(/let IpPlayers = \[.*?\];/, `let IpPlayers = [${ips}];`);
      const nicks = accessData.forbiddenNicks.split(',').map((n: string) => `"${n.trim()}"`).filter((n: string) => n !== '""').join(', ');
      script = script.replace(/const NicknamesPROHIBIDOS = \[.*?\];/, `const NicknamesPROHIBIDOS = [${nicks}];`);
      
      const registeredLines = accessData.registeredPlayers.split('\n').filter((l: string) => l.includes(':'));
      const players = registeredLines.map((line: string) => {
        const [auth, nicksStr] = line.split(':');
        const nicks = nicksStr.split(',').map(n => `"${n.trim()}"`).join(', ');
        return `  { auth: "${auth.trim()}", nicks: [${nicks}] }`;
      }).join(',\n');
      
      script = script.replace(/var ListaDeJogadores = \[[\s\S]*?\];/, `var ListaDeJogadores = [\n${players || '  { auth: "authid_jugador1", nicks: ["Jugador1"] }'}\n];`);

      const bannedAuthLines = accessData.bannedAuthNick.split('\n').filter((l: string) => l.includes(':'));
      const bannedPlayers = bannedAuthLines.map((line: string) => {
        const [auth, nicksStr] = line.split(':');
        const nicks = nicksStr.split(',').map(n => `"${n.trim()}"`).join(', ');
        return `  { auth: "${auth.trim()}", nicks: [${nicks}] }`;
      }).join(',\n');
      
      script = script.replace(/var ListaDeBaneados = \[[\s\S]*?\];/, `var ListaDeBaneados = [\n${bannedPlayers || '  { auth: "banned_auth", nicks: ["BannedNick"] }'}\n];`);
    }

    const discordWebhooksData = getData('discordWebhooks');
    if (discordWebhooksData) {
      script = script.replace(/var AnuncioHostAbierto = ".*?";/, `var AnuncioHostAbierto = "${discordWebhooksData.webhookHostOpen}";`);
      script = script.replace(/var MensajeHostAbierto = `[\s\S]*?`;/, `var MensajeHostAbierto = \`# ${discordWebhooksData.msgHostOpen.replace('# ', '')}\`;`);
      script = script.replace(/var TagHostAbierto = ".*?";/, `var TagHostAbierto = "${discordWebhooksData.tagHostOpen}";`);
      script = script.replace(/const WebhookGrabaciones = ".*?";/, `const WebhookGrabaciones = "${discordWebhooksData.webhookRecordings}";`);
      script = script.replace(/var WebhookParaLlamarAdmins = ".*?";/, `var WebhookParaLlamarAdmins = "${discordWebhooksData.webhookCallAdmins}";`);
      script = script.replace(/var RolAdminHost = ".*?";/, `var RolAdminHost = "${discordWebhooksData.rolAdminDiscord}";`);
      script = script.replace(/var tiempoEsperaAdminsEnMinutos = .*?;/, `var tiempoEsperaAdminsEnMinutos = ${discordWebhooksData.waitAdmins};`);
      script = script.replace(/const AnuncioKicksBans = ".*?";/, `const AnuncioKicksBans = "${discordWebhooksData.webhookKicksBans}";`);
      script = script.replace(/var webhookMensajesJugadores = ".*?";/, `var webhookMensajesJugadores = "${discordWebhooksData.webhookMessages}";`);
      script = script.replace(/var webhookBoletero = ".*?";/, `var webhookBoletero = "${discordWebhooksData.webhookBoletero}";`);
      script = script.replace(/var webhookEstadisticasJugadores = ".*?";/, `var webhookEstadisticasJugadores = "${discordWebhooksData.webhookStats}";`);
      script = script.replace(/var WebhookParaFirmar = ".*?";/, `var WebhookParaFirmar = "${discordWebhooksData.webhookSign}";`);
      script = script.replace(/var webhookIPJugadores = ".*?";/, `var webhookIPJugadores = "${discordWebhooksData.webhookIPs}";`);
    }

    setGeneratedCode(script);
  }, [nodes, template]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-background">
      <Sidebar 
        onDragStart={(event, nodeType) => {
          event.dataTransfer.setData('application/reactflow', nodeType);
          event.dataTransfer.effectAllowed = 'move';
        }} 
      />
      
      <div className="flex-1 h-full relative" ref={reactFlowWrapper}>
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
          className="bg-background"
        >
          <Background color="#333" gap={20} size={1} variant={BackgroundVariant.Dots} />
          <Controls className="bg-card border-border fill-foreground" />
        </ReactFlow>
      </div>

      <CodePreview code={generatedCode} />
    </div>
  );
}
