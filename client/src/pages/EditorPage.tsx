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
import { BASE_TEMPLATE } from '@/lib/baseTemplate';
import { useConfigurations } from '@/hooks/use-configurations';

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
    let script = BASE_TEMPLATE;
    
    // Helper to get data from a specific node type
    const getData = (type: string) => nodes.find(n => n.type === type)?.data;

    // Enhanced replacement helper with flexible regex
    const replaceVar = (content: string, varName: string, value: any, isString: boolean = false) => {
      const escapedValue = isString ? (value === null ? "null" : `'${String(value).replace(/'/g, "\\'")}'`) : value;
      // Regex matches: var/let/const VarName = (anything); | covers spaces and different quotes
      const regex = new RegExp(`(var|let|const)\\s+${varName}\\s*=\\s*.*?;`, 'gi');
      return content.replace(regex, (match, p1) => `${p1} ${varName} = ${escapedValue};`);
    };

    const hostData = getData('configHost');
    if (hostData) {
      script = replaceVar(script, 'NombreHost', hostData.hostName, true);
      script = replaceVar(script, 'VisibilidadDelHost', hostData.public);
      script = replaceVar(script, 'CantidadDeJugadores', hostData.maxPlayers);
      script = replaceVar(script, 'PasswordDelHost', hostData.password || 'null', false); // value is null or string
      script = replaceVar(script, 'ReiniciarStats', hostData.reiniciarStats || 'No', true);
    }

    const rulesData = getData('gameRules');
    if (rulesData) {
      script = replaceVar(script, 'MapaPorDefecto', rulesData.mapName, true);
      script = replaceVar(script, 'TiempoDeJuego', rulesData.timeLimit);
      script = replaceVar(script, 'LimiteDeGoles', rulesData.scoreLimit);
      
      script = replaceVar(script, 'autoBalanceEnabled', rulesData.autoBalance);
      script = replaceVar(script, 'CamisetasGanaSigue', rulesData.ganaSigue);
      script = replaceVar(script, 'cambioCami', rulesData.cambioCami);
      script = replaceVar(script, 'powerShotMode', rulesData.powerShot);
      script = replaceVar(script, 'JabulaniMode', rulesData.jabulaniMode);
      script = replaceVar(script, 'combaMode', rulesData.combaMode);
      script = replaceVar(script, 'GolDeOroActivado', rulesData.golDeOro);
      script = replaceVar(script, 'FairPlayActivado', rulesData.fairPlay);
      script = replaceVar(script, 'ganasigueEnabled', rulesData.ganaSigue);
      script = replaceVar(script, 'modoJueganTodos', rulesData.jueganTodos);
      script = replaceVar(script, 'modoJueganAlgunos', rulesData.jueganAlgunos);
      script = replaceVar(script, 'maxPlayersPerTeam', rulesData.maxPlayersPerTeam);
    }

    const automatedData = getData('automatedMode');
    if (automatedData) {
      script = replaceVar(script, 'automatizadoActivado', automatedData.enabled);
      script = replaceVar(script, 'tiempoLimiteCambio', automatedData.changeLimit);
      script = replaceVar(script, 'tiempoEsperaCambio', automatedData.waitTime);
      
      const maps = ["EntrenamientoFutsal", "Futsalx2", "Futsalx3", "Futsalx4", "Futsalx5", "Futsalx7"];
      maps.forEach(map => {
        // Find matching key in automatedData (case sensitive check)
        const timeKey = `time${map}`;
        const goalsKey = `goals${map}`;
        script = replaceVar(script, `Tiempo${map}`, automatedData[timeKey] ?? automatedData[timeKey.toLowerCase()]);
        script = replaceVar(script, `Goles${map}`, automatedData[goalsKey] ?? automatedData[goalsKey.toLowerCase()]);
      });
    }

    const adminData = getData('admin');
    if (adminData) {
      script = replaceVar(script, 'ClaveParaSerAdmin', adminData.adminKey, true);
      script = replaceVar(script, 'contrasena', adminData.vipKey, true);
      
      const adminLines = adminData.adminList.split('\n').filter((l: string) => l.includes(':'));
      const admins = adminLines.map((line: string) => {
        const [auth, nicksStr] = line.split(':');
        const nicks = nicksStr.split(',').map(n => `"${n.trim()}"`).join(', ');
        return `  { auth: "${auth.trim()}", nicks: [${nicks}] }`;
      }).join(',\n');
      
      script = script.replace(/(var|let|const)\s+ListaDeAdmins\s*=\s*\[[\s\S]*?\];/i, (match, p1) => `${p1} ListaDeAdmins = [\n${admins || '  { auth: "", nicks: [""] }'}\n];`);
    }

    const botData = getData('bot');
    if (botData) {
      script = replaceVar(script, 'BotVisible', botData.botVisible);
      script = replaceVar(script, 'NombreBot', botData.botName, true);
    }

    const visualsData = getData('visuals');
    if (visualsData) {
      script = replaceVar(script, 'TamanoMinimoPermitido', visualsData.playerSize);
      script = replaceVar(script, 'TamanoMaximoPermitido', visualsData.playerSize);
      script = replaceVar(script, 'camisetaRed', visualsData.camisetaRed, true);
      script = replaceVar(script, 'camisetaBlue', visualsData.camisetaBlue, true);
    }

    const socialData = getData('social');
    if (socialData) {
      const msgs = socialData.welcomeMessage.split('\n').map((m: string) => `  \`${m}\``).join(',\n');
      script = script.replace(/(var|let|const)\s+MensajeDeBienvenida\s*=\s*\[[\s\S]*?\];/i, (match, p1) => `${p1} MensajeDeBienvenida = [\n${msgs}\n];`);
      script = replaceVar(script, 'colormensaje', socialData.colorMensaje, true);
      script = replaceVar(script, 'TipoDeLetra', socialData.tipoLetra, true);
    }

    const announcementData = getData('announcement');
    if (announcementData) {
      script = replaceVar(script, 'Anuncio', announcementData.announcement1, true);
      script = replaceVar(script, 'TipoDeLetraAnuncio', announcementData.font1, true);
      script = replaceVar(script, 'ColorAnuncio', announcementData.color1, true);
      
      script = replaceVar(script, 'Anuncio2', announcementData.announcement2, true);
      script = replaceVar(script, 'TipoDeLetraAnuncio2', announcementData.font2, true);
      script = replaceVar(script, 'ColorAnuncio2', announcementData.color2, true);
    }

    const socialNetworksData = getData('socialNetworks');
    if (socialNetworksData) {
      script = replaceVar(script, 'DiscordLink', socialNetworksData.discordLink, true);
      script = replaceVar(script, 'YoutubeLink', socialNetworksData.youtubeLink, true);
      script = replaceVar(script, 'TwitchLink', socialNetworksData.twitchLink, true);
    }

    const hostCustomData = getData('hostCustomization');
    if (hostCustomData) {
      script = replaceVar(script, 'UbicacionDelHost', hostCustomData.location, true);
      script = replaceVar(script, 'BanderaDelHost', hostCustomData.flag, true);
      
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
      
      script = script.replace(/(var|let|const)\s+countryCoords\s*=\s*\{[\s\S]*?\};/i, (match, p1) => `${p1} countryCoords = ${JSON.stringify(countryCoords, null, 4)};`);
    }

    const tournamentData = getData('tournamentRules');
    if (tournamentData) {
      script = replaceVar(script, 'ChallongeLink', tournamentData.challongeLink, true);
      const rules = tournamentData.rules.split('\n').filter((r: string) => r.trim());
      rules.forEach((rule: string, index: number) => {
        script = replaceVar(script, `regla${index + 1}`, rule, true);
      });
    }

    const ballData = getData('ballCustomization');
    if (ballData) {
      script = replaceVar(script, 'PelotaRS', ballData.pelotaRS, true);
      script = replaceVar(script, 'PelotaRS_PowerShot', ballData.pelotaRS_PowerShot, true);
      script = replaceVar(script, 'PotenciaPowerShotRS', ballData.potenciaPowerShotRS);
      
      script = replaceVar(script, 'PelotaFutsal', ballData.pelotaFutsal, true);
      script = replaceVar(script, 'PelotaFutsal_PowerShot', ballData.pelotaFutsal_PowerShot, true);
      script = replaceVar(script, 'PotenciaPowerShot', ballData.potenciaPowerShot);
      script = replaceVar(script, 'TipoPelotaFutsal', ballData.tipoPelotaFutsal, true);
    }

    const securityData = getData('security');
    if (securityData) {
      script = replaceVar(script, 'cooldownEnabled', securityData.cooldownEnabled);
      script = replaceVar(script, 'SPAM_LIMIT', securityData.spamLimit);
      script = replaceVar(script, 'KICK_THRESHOLD', securityData.kickThreshold);
      script = replaceVar(script, 'COOLDOWN_TIME', securityData.cooldownTime);
      
      script = replaceVar(script, 'maxAttempts', securityData.maxAttempts);
      script = replaceVar(script, 'alertThreshold', securityData.alertThreshold);
    }

    const rolesData = getData('roles');
    if (rolesData) {
      for (let i = 1; i <= 10; i++) {
        const color = rolesData[`colorRol${i}`] || "FFFFFF";
        script = replaceVar(script, `ColorDelChatROL${i}`, `0x${color}`);
        script = replaceVar(script, `NombreROL${i}`, rolesData[`nombreRol${i}`] || "", true);
        const nicks = (rolesData[`nicknamesRol${i}`] || "").split(',').map((n: string) => `"${n.trim()}"`).filter((n: string) => n !== '""').join(', ');
        script = script.replace(new RegExp(`(var|let|const)\\s+NickNamesRol${i}\\s*=\\s*\\[.*?\\];`, 'gi'), (match, p1) => `${p1} NickNamesRol${i} = [${nicks}];`);
      }
    }

    const accessData = getData('accessRestrictions');
    if (accessData) {
      script = replaceVar(script, 'ActivarReCaptcha', accessData.reCaptcha);
      script = replaceVar(script, 'LimiteMaximoDeJugadoresAFK', accessData.maxAFK);
      script = replaceVar(script, 'MaximoJugadoresPorIp', accessData.maxPerIp);
      const countries = accessData.forbiddenCountries.split(',').map((c: string) => `"${c.trim()}"`).filter((c: string) => c !== '""').join(', ');
      script = script.replace(/(var|let|const)\s+PaisesProhibidos\s*=\s*\[.*?\];/gi, (match, p1) => `${p1} PaisesProhibidos = [${countries}];`);
      const ips = accessData.bannedIps.split('\n').map((i: string) => `"${i.trim()}"`).filter((i: string) => i !== '""').join(', ');
      script = script.replace(/(var|let|const)\s+IpPlayers\s*=\s*\[.*?\];/gi, (match, p1) => `${p1} IpPlayers = [${ips}];`);
      const nicks = accessData.forbiddenNicks.split(',').map((n: string) => `"${n.trim()}"`).filter((n: string) => n !== '""').join(', ');
      script = script.replace(/(var|let|const)\s+NicknamesPROHIBIDOS\s*=\s*\[.*?\];/gi, (match, p1) => `${p1} NicknamesPROHIBIDOS = [${nicks}];`);
      
      const registeredLines = accessData.registeredPlayers.split('\n').filter((l: string) => l.includes(':'));
      const players = registeredLines.map((line: string) => {
        const [auth, nicksStr] = line.split(':');
        const nicks = nicksStr.split(',').map(n => `"${n.trim()}"`).join(', ');
        return `  { auth: "${auth.trim()}", nicks: [${nicks}] }`;
      }).join(',\n');
      
      script = script.replace(/(var|let|const)\s+ListaDeJogadores\s*=\s*\[[\s\S]*?\];/i, (match, p1) => `${p1} ListaDeJogadores = [\n${players || '  { auth: "authid_jugador1", nicks: ["Jugador1"] }'}\n];`);

      const bannedAuthLines = accessData.bannedAuthNick.split('\n').filter((l: string) => l.includes(':'));
      const bannedPlayers = bannedAuthLines.map((line: string) => {
        const [auth, nicksStr] = line.split(':');
        const nicks = nicksStr.split(',').map(n => `"${n.trim()}"`).join(', ');
        return `  { auth: "${auth.trim()}", nicks: [${nicks}] }`;
      }).join(',\n');
      
      script = script.replace(/(var|let|const)\s+ListaDeBaneados\s*=\s*\[[\s\S]*?\];/i, (match, p1) => `${p1} ListaDeBaneados = [\n${bannedPlayers || '  { auth: "banned_auth", nicks: ["BannedNick"] }'}\n];`);
    }

    const discordWebhooksData = getData('discordWebhooks');
    if (discordWebhooksData) {
      script = replaceVar(script, 'AnuncioHostAbierto', discordWebhooksData.webhookHostOpen, true);
      script = replaceVar(script, 'WebhookGrabaciones', discordWebhooksData.webhookRecordings, true);
      script = replaceVar(script, 'WebhookParaLlamarAdmins', discordWebhooksData.webhookCallAdmins, true);
      script = replaceVar(script, 'RolAdminHost', discordWebhooksData.rolAdminDiscord, true);
      script = replaceVar(script, 'tiempoEsperaAdminsEnMinutos', discordWebhooksData.waitAdmins);
      script = script.replace(/(var|let|const)\s+AnuncioKicksBans\s*=\s*.*?;/gi, (match, p1) => `${p1} AnuncioKicksBans = '${discordWebhooksData.webhookKicksBans}';`);
      script = replaceVar(script, 'webhookMensajesJugadores', discordWebhooksData.webhookMessages, true);
      script = replaceVar(script, 'webhookBoletero', discordWebhooksData.webhookBoletero, true);
      script = replaceVar(script, 'webhookEstadisticasJugadores', discordWebhooksData.webhookStats, true);
      script = replaceVar(script, 'WebhookParaFirmar', discordWebhooksData.webhookSign, true);
      script = replaceVar(script, 'webhookIPJugadores', discordWebhooksData.webhookIPs, true);
    }

    setGeneratedCode(script);
  }, [nodes]);

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
