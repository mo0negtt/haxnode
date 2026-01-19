// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL HOST ▇▇▇▇▇▇▇▇▇


// 📝 NOMBRE DEL HOST
var NombreHost = '▶️▶️🟦🟩  UNETE Y JUEGA 🟩🟦◀️◀️';
// Definimos el nombre del host (dentro de las comillas)


// 👁️ VISIBILIDAD DEL HOST 
var VisibilidadDelHost = true; 
// La sala es pública si está en "true", privada si está en "false"


// 👥 CANTIDAD MÁXIMA DE JUGADORES
var CantidadDeJugadores = 16; 
// Cantidad máxima de jugadores que permitirás ingresar a tu Host. Puedes elegir entre 1 y 30 jugadores


// 🔄 REINICIAR STATS
var ReiniciarStats = "No"; // Cambia a "Si" si querés reiniciar las estadísticas al Iniciar la sala.


// 🔒 CONTRASEÑA DEL HOST
var PasswordDelHost = null;
// Contraseña para acceder al Host (dejar null si no quieres colocarle una contraseña). Si quieres una contraseña, reemplaza null y coloca la contraseña entre comillas (Ejemplo: var PasswordDelHost = "123";)

// ▇▇▇▇▇▇▇▇▇ 👑 ADMINISTRACIÓN DEL HOST 🔑 ▇▇▇▇▇▇▇▇▇

// 🔑 CONTRASEÑA PARA SER ADMINISTRADOR DEL HOST
var ClaveParaSerAdmin = "!axeso5"; 
// Clave para ser administrador. Pon la contraseña entre comillas.


// 👑 ADMINISTRADORES DEL HOST 
// Lista de admins, con sus nicknames permitidos y, opcionalmente, su auth público
// (El Public ID (auth) se obtiene en: haxball.com/playerauth) 
var ListaDeAdmins = [
  {
    auth: "", // Auth opcional; puede estar vacío "" si no se usa
    nicks: [""]
  }
];

// 🔐 CONTRASEÑA PARA ADMINISTRADORES
var contrasena = "reservado";
// Contraseña para reservar el espacio a los Administradores


// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL BOT 🤖 ▇▇▇▇▇▇▇▇▇

// 👀 VISIBILIDAD DEL BOT 
var BotVisible = false; 
// Elige true si quieres que el bot sea visible como jugador o false para que esté oculto.


// 📛 NOMBRE DEL BOT
var NombreBot = "🚩 Árbitro Bot 🤖"; 
// Define el nombre del bot.


// 🟢 ESTADO DEL BOT
var StatusBot = "afk"; // Puede ser "activo" o "afk"

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL JUEGO 🎮 ▇▇▇▇▇▇▇▇▇

// 🗺️ MAPA POR DEFECTO
var MapaPorDefecto = "Futsal x3"; 
// OPCIONES: EntrenamientoFutsal, Futsal x2, Real Futsal


// ⏱️ TIEMPO DE JUEGO
var TiempoDeJuego = 3;
// Duración por defecto de las partidas (En minutos)


// ⚽ LÍMITE DE GOLES
var LimiteDeGoles = 3;
// Limite de Goles por defecto



// ▇▇▇▇▇▇▇ 🎮 MODOS DE JUEGO  ▇▇▇▇▇▇▇


let autoBalanceEnabled = false; // true para ACTIVARLO - false para DESACTIVARLO | Equilibrar equipos en cantidad de jugadores

var cambioCami = false; // true para ACTIVARLO - false para DESACTIVARLO | Cambiar camisetas automáticamente cada vez que se reinicia un partido.

var powerShotMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar el Disparo Potente (PowerShot)

var JabulaniMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar el Disparo Potente (PowerShot) con comba

var combaMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar sólo la Comba (cada vez que se patea la pelota)

var GolDeOroActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar Gol de Oro

var FairPlayActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo FairPlay

let ganasigueEnabled = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Gana Sigue

let modoJueganTodos = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Juegan Todos

let modoJueganAlgunos = false; // true para ACTIVARLO - false para DESACTIVARLO |Modo Juegan Algunos

let maxPlayersPerTeam = 2; // Establecer el número máximo de jugadores por equipo (Modo Juegan Algunos)

let isAFKpaused = false; // Estado inicial del detector de AFK


// MODO AUTOMATIZADO

var automatizadoActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Automatizado

var tiempoLimiteCambio = 30; // Tiempo límite (en segundos) para permitir cambiar mapa automaticamente

var tiempoEsperaCambio = 5000; // 5000 ms = 5 segundos de espera | Tiempo de demora en colocar el mapa.

var configuracionActual = null;

// LIMITES: GOLES Y TIEMPO (AUTOMATIZADO)

var TiempoEntrenamientoFutsal = 0;
var GolesEntrenamientoFutsal = 0;

var TiempoFutsalx2 = 3;
var GolesFutsalx2 = 3;

var TiempoFutsalx3 = 3;
var GolesFutsalx3 = 3;

var TiempoFutsalx4 = 4;
var GolesFutsalx4 = 3;

var TiempoFutsalx5 = 4;
var GolesFutsalx5 = 3;

var TiempoFutsalx7 = 5;
var GolesFutsalx7 = 3;

// ▇▇▇▇▇▇▇  📏 TAMAÑO DE LOS JUGADORES  ▇▇▇▇▇▇▇

var TamanoMinimoPermitido = 15;
// Tamaño mínimo permitido para un jugador 

var TamanoMaximoPermitido = 15;
// Tamaño máximo permitido para un jugador

var CantidadCambiarTamano = 1;
// Cantidad de veces que un jugador puede cambiar su tamaño por partido


// ▇▇▇▇▇▇▇ ⚽👕 CAMISETAS POR DEFECTO ⚽👕 ▇▇▇▇▇▇▇

// CAMISETA EQUIPO RED 🔴
var camisetaRed = "/colors red 66 FFA649 DE0019 B80017 820217";
var NombreEquipoRojo = "RED";

// CAMISETA EQUIPO BLUE 🔵
var camisetaBlue = "/colors blue 55 c1ff00 052647 005DB3 03B2F0";
var NombreEquipoAzul = "BLUE";



// ▇▇▇▇▇▇▇ 🚫 RESTRICCIONES DE ACCESO 🚫 ▇▇▇▇▇▇▇

// MÁXIMA CANTIDAD DE JUGADORES AFK PERMITIDOS
const LimiteMaximoDeJugadoresAFK = 4; 
// 🔒 Define el número máximo de jugadores AFK permitidos antes de activar la expulsión automática


// 🚫 MAXIMO DE JUGADORES PERMITIDOS CON LA MISMA IP
var MaximoJugadoresPorIp = 2;
// Define el número máximo de jugadores permitidos con la misma IP


// 🚫🌎 PAISES PROHIBIDOS
const PaisesProhibidos = [];
// Si un jugador es de alguno de estos países, será expulsado automáticamente al ingresar.
// EJEMPLO DE USO: const PaisesProhibidos = ["Argentina", "Brazil", "Chile"];
 

// 🚫📶 IPS BANEADAS
let IpPlayers = []; // Añade entre comillas las Ips de los jugadores que quieras prohibir su ingreso. EJEMPLO: let IpPlayers = ["123.456.789", "987.654.321"];

var MensajeBaneoPorIp = "❌ El admin ha baneado tu IP 📶"


// ❌📛 NICKNAMES PROHIBIDOS
const NicknamesPROHIBIDOS = ["@everyone", "@here", "@"]; 
// Lista de nicknames prohibidos
// Define los nicknames que no pueden ser utilizados

// ▇▇▇▇▇▇▇▇▇ 🌐 FUNCIONES DE DISCORD 🤖 ▇▇▇▇▇▇▇▇▇


// 🔥 Webhook para ANUNCIAR que has CREADO UNA SALA. Reemplaza con tu propia URL de webhook.
var AnuncioHostAbierto = "https://discord.com/api/webhooks/1201825912958767134/g1BEoP1RNO_zSrQmf0nhkQRP_z3BnR2bJXfKYkK7CCPLk-KZf86tn-bPq_mDZ2UHwRMf";
var MensajeHostAbierto = 
`# 🚀 ¡NUEVO HOST ABIERTO! 🎮
## ⚽ ¡No te lo pierdas! Únete al partido ahora y demuestra tus habilidades en la cancha.
¡La diversión está por comenzar, no faltes! 🔥`;
var TagHostAbierto = "@here"; //  Dejar "@here" o Colocar el "ID del Rol de Discord" al que quieres avisarle que creaste Host

// 🎥 Webhook para GRABACIONES y RESÚMENES de las Partidas jugadas. Reemplaza con tu propia URL de webhook.
const WebhookGrabaciones = "https://discord.com/api/webhooks/1322348400531738835/oKP4BL4iz8XhKgjzufGqUYfV7owjVlsyOgrlCyhhnX0Dcu3rJTiBUeVZI_53-QIBAaeI";


// 📂 Link del servidor de Discord donde se subirán las GRABACIONES DE LAS PARTIDAS
const GrabacionesDiscord = "https://discord.gg/8x9e2uyeWX";


// 📞 Webhook para recibir el mensaje que han llamado a los Administradores. Reemplaza con tu propia URL de webhook.
var WebhookParaLlamarAdmins = "https://discord.com/api/webhooks/1201852308569464873/FPoPAp2x3kxHpS4XWLcMIASHBu-zl1C7IbMTQYpCxOmyM_ARRVpsFEU71W-x8PFwbNBv";


// 👮‍ Rol de Admin en Discord que se quiere llamar
var RolAdminHost = "@here"; // Dejar '@here' o colocar el ID del rol de Discord que se quiere llamar
var tiempoEsperaAdminsEnMinutos = 2;  // CANTIDAD DE MINUTOS A ESPERAR PARA REALIZAR UNA NUEVA LLAMADA A LOS ADMINS


// 🚫 Webhook para anunciar los KICKS y BANS de la sala. Reemplaza con tu propia URL de webhook.
const AnuncioKicksBans = "https://discord.com/api/webhooks/1304191735512961134/MIrXKhZrca3z1X-QYZL4czQY1FuK9EhehfMESJHqz6b3TJnRcchD9Z0JrMbC0hpDQYkI";


// 💬 Webhook para ver los MENSAJES DE LOS JUGADORES. Reemplaza con tu propia URL de webhook.
var webhookMensajesJugadores  = "https://discord.com/api/webhooks/1390246048815120384/cerrYajxDO30FK_rs_VcZi2xAcGfU7amBf89kzTUFLlqg_wgY2vIWU9fE8tZQzJr-UN7";



// 🎟️ Webhook para enviar los INGRESOS y SALIDAS de los jugadores a Discord
var webhookBoletero = "https://discord.com/api/webhooks/1215904770699690104/Cuk8W0gJLVhE9gSw54YseGe6KR5PnkeHcB7dvD_GGoGAO6f-JoAsQfMiOQnieiAfU84D";


// 💬 Webhook para enviar estadísticas a Discord
var webhookEstadisticasJugadores = "https://discord.com/api/webhooks/1338347025741385820/FxJAPCh3H6hNZvcaQOabz58RApSIwrjqjfjeek0y1k6GkbzN-UKnpUCipahK6W3b_aNW";



// 🖊️ Webhook para firmar en partidos oficiales. Reemplaza con tu propia URL de webhook.
var WebhookParaFirmar = "https://discord.com/api/webhooks/1172720661706321980/bafHm5CRFCH4aQKlYnyTn2D2dJrct2vI8QFwGs9OYxQMYL3f-ksGhzPdDZZMdIMqteCj";


// 🔒 Webhook para enviar la IP de un jugador cuando se retire de la sala.
var webhookIPJugadores  = "https://discord.com/api/webhooks/1329078558857101374/ZyjKtX_NsleSgWex_-sLZ2ukjv3Mo6cy0M-zLXTwLMu3v6svJo8CxJtrokjcPj7aejbp";



// ▇▇▇▇▇▇▇▇ 📢 ANUNCIOS Y MENSAJE DE BIENVENIDA ▇▇▇▇▇▇▇▇▇▇
// ════════════════════  🎉 MENSAJE DE BIENVENIDA ════════════════════ 
// (Se envía al jugador que recién ingresa al host por partes)

const MensajeDeBienvenida = [
  `
░█▀▀█ ░█─── ░█─░█ 
░█─▄▄ ░█─── ░█▀▀█ 
░█▄▄█ ░█▄▄█ ░█─░█`, 

  `🎉 ¡Bienvenido/a! 🎉`,  

  `Estás ingresando a un host de HaxBall creado con un script desarrollado por GLH ⚙️`,  

  `🌐 Únete a nuestra comunidad en Discord y accedé a:`,  

  `🧩 Scripts completos para crear tu propia sala como esta (con soporte y personalización sin costo)`,  

  `📲 Apps de HaxBall (Para PC y/o móvil)`,  

  `⚽ Mapas personalizados GRATIS: Futsal, Real Soccer y muchas otras modalidades`,  

  `📺 Descubre a streamers de HaxBall`,  

  `👥 ¡Buscá equipo o reclutá jugadores para el tuyo!`,  

  `🌍 Ligas activas de múltiples países y modalidades`,  

  `❓ ¿Tenés dudas? Consultá al staff o escribí en el canal de ayuda`,  

  `🔗 Unite ahora: https://discord.com/invite/tDEUbJU8QB`,

  `Para ver estadísticas usa: !me, !stats ID, !goleadores, !asistidores, !vallas-invictas, !mvp, !racha-historica, !racha-actual, !viciosos, !ganadores, !presencias`,

  `Mide tu banana con 🍌: !memide | AVATAR ANIMADOS, EJEMPLOS: !avatar 😈,👿  | !avatar HO,LA | !avatar 🌑,🌒,🌓,🌔,🌕,🌖,🌗,🌘`
];

// 🎨 PERSONALIZACIÓN DEL MENSAJE DE BIENVENIDA
var colormensaje = "FFFFFF";

var TipoDeLetra = "normal"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"


// ════════════════════  📢 ANUNCIO 1 ════════════════════ 
// (Se envía cada vez que inicia el partido)

var Anuncio = "✨ ÚNETE AL DISCORD DE GLH Y APRENDE A CREAR TU PROPIO HOST CON SCRIPT: discord.gg/tDEUbJU8QB"; 
// Anuncio que viene por Defecto (Se envía a los 10 segundos del inicio de cada partido)


// ⏲️ TIEMPO DEL ANUNCIO
var AnuncioMinuto = 0; 
//  Representa el minuto del partido en el que se desea mostrar el anuncio.

var AnuncioSegundos = 10; 
// Representa los segundos en el minuto del partido en el que se desea mostrar el anuncio.

var TipoDeLetraAnuncio = "bold"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"


var ColorAnuncio = "FFFFFF"; 


// ════════════════════  📢 ANUNCIO 2 ════════════════════ 

var Anuncio2 = "🛑 Para expulsar a un jugador, utiliza el comando `!expulsar NúmeroID`. Para ver los IDs de los jugadores, escribe `#` en el chat. Ejemplo: `!expulsar 25` expulsará al jugador con el ID 25.";
// Anuncio 2 que viene por Defecto (Se envía a los 10 segundos del inicio de cada partido)

// ⏲️ TIEMPO DEL ANUNCIO 2
var Anuncio2Minuto = 0; 
//  Representa el minuto del partido en el que se desea mostrar el anuncio 2.

var Anuncio2Segundos = 40; 
// Representa los segundos en el minuto del partido en el que se desea mostrar el anuncio 2.

var TipoDeLetraAnuncio2 = "italic"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"

var ColorAnuncio2 = "CCFF00"; 


// ▇▇▇▇▇▇▇ 🛠️ CONFIGURACIÓN GENERAL ▇▇▇▇▇▇▇

// 👁️‍🗨️ MOSTRAR IPs A ADMINISTRADORES
var MostrarIps = "No"; 
// Cambia "Si" por "No" si no deseas mostrar las IPs a los administradores cuando un jugador se una a la sala

const ColocarJuntoAlNickname = ""; // Opciones disponibles: "ID", "Nivel" o "" (sin nada)


// ▇▇▇▇▇▇▇ 🗳️ SISTEMA DE VOTACIONES 🗳️ ▇▇▇▇▇▇▇

// Variable configurable para el porcentaje de votos requeridos

var PorcentajeDeVotosBan = 40; 
// Cambia este valor al porcentaje deseado (por ejemplo, 30 para 30% de los votos)

var PorcentajeDeVotosAdmin = 40; 
// Cambia este valor al porcentaje deseado (por ejemplo, 30 para 30% de los votos)


// ▇▇▇▇▇▇▇ ⏰ TIEMPO AFK  ▇▇▇▇▇▇▇


const SegundosPermitidosAFK = 15; // Establece el tiempo permitido en segundos para estar AFK (Cuando están en el Red o en el Blue)

const MinutosPermitidosAFK = 5;  // Establece el tiempo permitido en minutos para estar AFK (Cuando se encuentran Espectadores)


// ▇▇▇▇▇▇▇▇▇ 🌐👥 REDES SOCIALES ▇▇▇▇▇▇▇▇▇

const DiscordLink = "discord.gg/tDEUbJU8QB";	// Link de tu Servidor de Discord
const YoutubeLink = "youtube.com/@GrandesLigasHaxBall"; 	// Link de tu canal de Youtube
const TwitchLink = "twitch.tv/stefano365p";	// Link de tu canal de Twitch


// ▇▇▇▇▇▇▇ 📍 UBICACIÓN DEL HOST ▇▇▇▇▇▇▇

	var UbicacionDelHost = "myubication"; 


	// ES LA UBICACIÓN EN LA QUE APARECERÁ TU HOST | Puedes reemplazar "argentina" por alguna de estas opciones.


	// OPCIONES DISPONIBLES:

// TU GEOLOCALIZACIÓN POR DEFECTO: myubication

		// AMÉRICA:

			// argentina, haxarg, uruguay, brasil, colombia, chile, mexico

			// bolivia, peru, paraguay, venezuela, costa rica, united states, canada

		// EUROPA:

			// france, spain, italy, germany, netherlands, portugal

			// croatia, macedonia, serbia, poland, ukraine, russia, marruecos, united kingdom, turkey

		
		// ASIA:

			// south korea, japan, china, vietnam, israel


// ▇▇▇▇▇▇▇ BANDERA DEL HOST 🏳️ ▇▇▇▇▇▇▇


	var BanderaDelHost = 'Germany';  // Elige el país con la bandera que quieres para tu Sala


// OPCIONES DISPONIBLES POR CONTINENTE:

// ÁFRICA:
	// Algeria, Angola, Benin, Botswana, BurkinaFaso, Burundi, Cameroon, CapeVerde, CentralAfricanRepublic, Chad, Comoros,
	// Congo, CongoTheDemocraticRepublicOfThe, CoteDIvoire, Djibouti, Egypt, EquatorialGuinea, Eritrea, Ethiopia, Gabon,
	// Gambia, Ghana, Guinea, GuineaBissau, Kenya, Lesotho, Liberia, LibyanArabJamahiriya, Madagascar, Malawi, Mali, Mauritania,
	// Mauritius, Morocco, Mozambique, Namibia, Niger, Nigeria, Rwanda, SaoTomeAndPrincipe, Senegal, Seychelles, SierraLeone,
	// Somalia, SouthAfrica, SouthSudan, Sudan, Swaziland, Tanzania, Togo, Tunisia, Uganda, Zambia, Zimbabwe

// AMÉRICA:
	// AntiguaAndBarbuda, Argentina, Aruba, Bahamas, Barbados, Belize, Bermuda, Bolivia, BonaireSaintEustatiusAndSaba, Brazil,
	// BritishIndianOceanTerritory, Canada, CaymanIslands, Chile, Colombia, CostaRica, Cuba, Curacao, Dominica, DominicanRepublic,
	// Ecuador, ElSalvador, FalklandIslandsMalvinas, FrenchGuiana, Grenada, Guadeloupe, Guatemala, Guyana, Haiti, Honduras,
	// Jamaica, Martinique, Mexico, Montserrat, Nicaragua, Panama, Paraguay, Peru, PuertoRico, SaintBarthelemy, SaintKittsAndNevis,
	// SaintLucia, SaintMartin, SaintPierreAndMiquelon, SaintVincentAndTheGrenadines, SintMaartenDutchPart, Suriname, TrinidadAndTobago,
	// TurksAndCaicosIslands, UnitedStates, UnitedStatesMinorOutlyingIslands, Uruguay, Venezuela, VirginIslandsBritish, VirginIslandsUS

// ASIA:
	// Afghanistan, Armenia, Azerbaijan, Bahrain, Bangladesh, Bhutan, Brunei, Cambodia, China, ChristmasIsland, CocosKeelingIslands,
	// HongKong, India, Indonesia, Iran, Iraq, Israel, Japan, Jordan, Kazakhstan, Kuwait, Kyrgyzstan, LaoPeoplesDemocraticRepublic,
	// Lebanon, Macao, Malaysia, Maldives, Mongolia, Myanmar, Nepal, NorthKorea, Oman, Pakistan, Palestine, Philippines, Qatar,
	// SaudiArabia, Singapore, SouthKorea, SriLanka, Syria, Taiwan, Tajikistan, Thailand, TimorLeste, Turkey, Turkmenistan,
	// UnitedArabEmirates, Uzbekistan, VietNam, Yemen

// EUROPA:
	// Albania, Andorra, Austria, Belarus, Belgium, BosniaAndHerzegovina, Bulgaria, Croatia, Cyprus, CzechRepublic, Denmark,
	// Estonia, FaroeIslands, Finland, France, Germany, Gibraltar, Greece, Greenland, Hungary, Iceland, Ireland, Italy, Kosovo,
	// Latvia, Liechtenstein, Lithuania, Luxembourg, MacedoniaTheFormerYugoslavRepublicOf, Malta, Moldova, Monaco, Montenegro,
	// Netherlands, Norway, Poland, Portugal, Romania, Russia, SanMarino, Serbia, Slovakia, Slovenia, Spain, SvalbardAndJanMayen,
	// Sweden, Switzerland, Ukraine, UnitedKingdom

// OCEANÍA:
	// Australia, Fiji, FrenchPolynesia, Guam, Kiribati, MarshallIslands, MicronesiaFederatedStatesOf, Nauru, NewCaledonia,
	// NewZealand, Niue, NorfolkIsland, Palau, PapuaNewGuinea, Pitcairn, Samoa, SolomonIslands, Tokelau, Tonga, Tuvalu, Vanuatu

// OTROS:
	// Haxball, Antarctica, Anguilla, Antarctica, Bermuda, BouvetIsland, BritishIndianOceanTerritory, HeardIslandAndMcDonaldIslands,
	// HolySeeVaticanCityState, IsleOfMan, Jersey, Mayotte, Monaco, Montserrat, SouthGeorgiaAndTheSouthSandwichIslands





//  ▇▇▇▇▇▇▇ 👤 ASIGNAR ROLES ▇▇▇▇▇▇▇


// Definiciones de colores
const ColorDelChatROL1 = 0xFFD700;
const ColorDelChatROL2 = 0xffffff;
const ColorDelChatROL3 = 0xffffff;
const ColorDelChatROL4 = 0xffffff;
const ColorDelChatROL5 = 0xffffff;
const ColorDelChatROL6 = 0xffffff;
const ColorDelChatROL7 = 0xffffff;
const adminChatColor = 0xffdb72;
const RedChatColor = 0xff6363;
const BlueChatColor = 0x63f2ff;
const RedTeamChatColor = 0xFD2C2D;
const BlueTeamChatColor = 0x18fde8;
const SpectChatColor = 0xD3D3D3; // Color del chat para espectadores

// Listas de nombres de usuario por rol
const NickNamesRol1 = []; // Añadir nombres de usuarios para ROL1 entre comillas | EJEMPLO: const NickNamesRol1 = ["Messi", "Neymar"];
const NickNamesRol2 = []; // Añadir nombres de usuarios para ROL2 entre comillas | EJEMPLO: const NickNamesRol2 = ["ROMAN #10", "Martín Palermo 9"];
const NickNamesRol3 = []; // Añadir nombres de usuarios para ROL3 entre comillas | EJEMPLO: const NickNamesRol3 = ["Burrito Ortega"];
const NickNamesRol4 = []; // Añadir nombres de usuarios para ROL4 entre comillas
const NickNamesRol5 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol6 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol7 = []; // Añadir nombres de usuarios para ROL5 entre comillas

// Nombres de roles
const NombreROL1 = "🗦👑🗧𝗢𝗪𝗡𝗘𝗥";
const NombreROL2 = "🤝 CO-OWNER";
const NombreROL3 = "🌐 HOSTER";
const NombreROL4 = "🛠️ AYUDANTE";
const NombreROL5 = "🔧 SUBAYUDANTE";
const NombreROL6 = "🧉 COLABORADOR";
const NombreROL7 = "💡 ASISTENTE";
const NombreROLAdmin = "👑 ADMIN";
const NombreROLRed = "🔴";
const NombreROLBlue = "🔵";
const NombreROLSpect = "👁️";

const RoleAttributes = {
    [NombreROL1]: { style: "bold", sound: 2 },
    [NombreROL2]: { style: "bold", sound: 2 },
    [NombreROL3]: { style: "normal", sound: 1 },
    [NombreROL4]: { style: "normal", sound: 1 },
    [NombreROL5]: { style: "normal", sound: 1 },
    [NombreROL6]: { style: "normal", sound: 1 },
    [NombreROL7]: { style: "normal", sound: 1 },
    [NombreROLAdmin]: { style: "normal", sound: 1 },
    [NombreROLRed]: { style: "normal", sound: 1 },
    [NombreROLBlue]: { style: "normal", sound: 1 },
    [NombreROLSpect]: { style: "normal", sound: 0 }
};


//  ▇▇▇▇▇▇▇  COOLDOWN CHAT ▇▇▇▇▇▇▇

let MESSAGE_COOLDOWN = 5000; // 5 segundos de cooldown
let SPAM_LIMIT = 5; // Mensajes permitidos antes de activar el cooldown
let COOLDOWN_TIME = 10000; // 10 segundos de cooldown después de enviar muchos mensajes
let cooldownEnabled = true; // Cooldown habilitado por defecto
let KICK_THRESHOLD = 7; // Número de advertencias antes de kickear por spam

// Variables para rastrear mensajes y cooldowns
let messageTimestamps = {};
let playerCooldowns = {};
let spamWarnings = {}; // Contador de advertencias por spam



//  ▇▇▇▇▇▇▇  COOLDOWN PARA EL USO DE COMANDOS ▇▇▇▇▇▇▇
// COOLDOWN PARA USO DE COMANDOS
let lastCommandTime = {}; // Objeto para registrar el tiempo del último comando enviado por cada jugador
const commandCooldown = 5000; // Tiempo de espera en milisegundos (5 segundos)

// COOLDOWN PARA COMANDOS
const cooldowns = {};
const COOLDOWN_TIEMPO = 5 * 1000; // 5 segundos


//  ▇▇▇▇▇▇▇ ⚽ PELOTAS ⚽ ▇▇▇▇▇▇▇

var PelotaRS = "FFFFFF"			// COLOR DE LA PELOTA DE REAL SOCCER
var PelotaRS_PowerShot = "FF4500"	// COLOR DE LA PELOTA DE REAL SOCCER con POWERSHOT ACTIVADO
var PotenciaPowerShotRS = 2 //  Referencia: La potencia sin PowerShot es 0.5

var PelotaFutsal = "FFFFFF"			// COLOR DE LA PELOTA DE REAL SOCCER
var PelotaFutsal_PowerShot = "FF4500"	// COLOR DE LA PELOTA DE REAL SOCCER con POWERSHOT ACTIVADO
var PotenciaPowerShot = 2.5  // Referencia: La Potencia sin PowerShot es 1.5
var TipoPelotaFutsal = "oveja";  // Opciones: "bazinga", "oveja", "glh"





// ▇▇▇▇▇▇▇  PARA TORNEOS  ▇▇▇▇▇▇▇

var ChallongeLink = 'challonge.com/es/' // Link de tu torneo
var regla1 = '⯌ 4 vs 4'
var regla2 = '⯌ Equipo que gana el partido, continua jugando. 🏆'
var regla3 = '⯌ Dos jugadores ingresan por orden de Espectadores. Los otros dos restantes, los puede elegir.'
var regla4 = '⯌ El equipo ganador le toca el país con más probabilidades de ganar.'
var regla5 = '⯌ Si empatan, salen ambos equipos. Y los primeros cuatro jugadores de la lista de Espectadores pasan a ser capitanes, 2 en el Team Red y los otros 2 en el Team Blue.'



//  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  ADMINS NO OFICIALES ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

var kickBanAttempts = {}; // Objeto para rastrear intentos de kick y ban
var maxAttempts = 1; // Número máximo de intentos permitidos en el intervalo de tiempo
var interval = 30000; // Intervalo de tiempo en milisegundos (30 segundos)
var alertThreshold = 2; // Umbral de alerta después del segundo intento
var cooldownTime = 60000; // Tiempo de cooldown en milisegundos 
var cooldownActive = {}; // Objeto para rastrear el estado de cooldown de cada administrador


//  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  CONFIGURACIÓN AVANZADA 🚀 ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

// Define una variable global para llevar el seguimiento de los minutos jugados por cada jugador
let playerMinutesPlayed = JSON.parse(localStorage.getItem('playerMinutesPlayed')) || {};

// Define una variable global para llevar el seguimiento del tiempo que un jugador ha estado siendo el arquero
let playerGoalkeeperTime = JSON.parse(localStorage.getItem('playerGoalkeeperTime')) || {};

let jugadoresConEmojis = new Set();


const reemplazosEmoji = {
    "xd": "😂",
    "lol": "🤣",
    "gg": "👏 🅶🅶",
    "ez": "𝗲𝘇 😎", 
    "q": "𝗾 ❓", 
    "no": "❌",
    "ok": "✅",
    "bien": "👌",
    "gracias": "🙏",
 

    "golazo": "⚽🥅 🔥", 
    "gol": "⚽🥅",
    "uf": "😱", 
    "1": "🧤 1️⃣",
    "2": "🛡 2️⃣",
    "9": "⚽ 9️⃣",

    "perdon": "😔",
    "chau": "👋💨",
    "hola": "👋😄",
    "da": "𝗱𝗮 😤",
    "x": "✖",
    "cono": "🔺",
    "ole": "𝗼𝗹𝗲𝗲𝗲 🥵🔥", 
    "oso": "𝗼𝘀𝗼𝗼 🐻🤡", 

    "-1": "➖1️⃣",
    "-2": "➖2️⃣",
    "-3": "➖3️⃣",
    "-4": "➖4️⃣",
    "-5": "➖5️⃣"
};



// ▇▇▇▇▇▇▇ ⚽👕 AÑADIR CAMISETAS DE EQUIPOS ⚽👕 ▇▇▇▇▇▇▇

var camisetasEquipos = {

};


// ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ CÓDIGOS DE LAS BANDERAS ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

var codigosBanderas = {
  Haxball: 'FAM',
  Afghanistan: 'AF', 
  Albania: 'AL', 
  Algeria: 'DZ', 
  Andorra: 'AD', 
  Angola: 'AO', 
  Anguilla: 'AI',
  Antarctica: 'AQ',
  AntiguaAndBarbuda: 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  BonaireSaintEustatiusAndSaba: 'BQ',
  BosniaAndHerzegovina: 'BA',
  Botswana: 'BW',
  BouvetIsland: 'BV',
  Brazil: 'BR',
  BritishIndianOceanTerritory: 'IO',
  Brunei: 'BN',
  Bulgaria: 'BG',
  BurkinaFaso: 'BF',
  Burundi: 'BI',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  CapeVerde: 'CV',
  CaymanIslands: 'KY',
  CentralAfricanRepublic: 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  ChristmasIsland: 'CX',
  CocosKeelingIslands: 'CC',
  Colombia: 'CO',
  Comoros: 'KM',
  Congo: 'CG',
  CongoTheDemocraticRepublicOfThe: 'CD',
  CookIslands: 'CK',
  CostaRica: 'CR',
  CoteDIvoire: 'CI',
  Croatia: 'HR',
  Cuba: 'CU',
  Curacao: 'CW',
  Cyprus: 'CY',
  CzechRepublic: 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  DominicanRepublic: 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  ElSalvador: 'SV',
  EnglandUnitedKingdom: 'GB',
  EquatorialGuinea: 'GQ',
  Eritrea: 'ER',
  Estonia: 'EE',
  Ethiopia: 'ET',
  FalklandIslandsMalvinas: 'FK',
  FaroeIslands: 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  FrenchPolynesia: 'PF',
  FrenchSouthernTerritories: 'TF',
  Gabon: 'GA',
  Gambia: 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  GreatBritain: 'GB',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guam: 'GU',
  Guatemala: 'GT',
  Guernsey: 'GG',
  Guinea: 'GN',
  GuineaBissau: 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  HeardIslandAndMcDonaldIslands: 'HM',
  HolySeeVaticanCityState: 'VA',
  Honduras: 'HN',
  HongKong: 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  Iran: 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  IsleOfMan: 'IM',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  Kiribati: 'KI',
  KoreaDemocraticPeoplesRepublicOfNorthKorea: 'KP',
  KoreaRepublicOfSouthKorea: 'KR',
  Kosovo: 'XK',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  LaoPeoplesDemocraticRepublic: 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  LibyanArabJamahiriya: 'LY',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  MacedoniaTheFormerYugoslavRepublicOf: 'MK',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  MarshallIslands: 'MH',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mexico: 'MX',
  MicronesiaFederatedStatesOf: 'FM',
  MissingData: 'U9',
  MoldovaRepublicOf: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nauru: 'NR',
  Nepal: 'NP',
  Netherlands: 'NL',
  NetherlandsAntilles: 'AN',
  NewCaledonia: 'NC',
  NewZealand: 'NZ',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  Niue: 'NU',
  NorfolkIsland: 'NF',
  NorthernIrelandUnitedKingdom: 'GB',
  NorthernMarianaIslands: 'MP',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  Palau: 'PW',
  PalestinianTerritoryOccupied: 'PS',
  Panama: 'PA',
  PapuaNewGuinea: 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Pitcairn: 'PN',
  Poland: 'PL',
  Portugal: 'PT',
  PuertoRico: 'PR',
  Qatar: 'QA',
  Romania: 'RO',
  Russia: 'RU',
  Rwanda: 'RW',
  SaintLucia: 'LC',
  Samoa: 'WS',
  SanMarino: 'SM',
  SaoTomeAndPrincipe: 'ST',
  SaudiArabia: 'SA',
  ScotlandUnitedKingdom: 'GB',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  SierraLeone: 'SL',
  Singapore: 'SG',
  SintMaartenDutchPart: 'SX',
  Slovakia: 'SK',
  Slovenia: 'SI',
  SolomonIslands: 'SB',
  Somalia: 'SO',
  SouthAfrica: 'ZA',
  SouthGeorgiaAndTheSouthSandwichIslands: 'GS',
  SouthSudan: 'SS',
  Spain: 'ES',
  SriLanka: 'LK',
  StHelena: 'SH',
  StKittsAndNevis: 'KN',
  StVincentAndTheGrenadines: 'VC',
  Sudan: 'SD',
  Suriname: 'SR',
  Swaziland: 'SZ',
  Sweden: 'SE',
  Switzerland: 'CH',
  SyrianArabRepublic: 'SY',
  Taiwan: 'TW',
  Tajikistan: 'TJ',
  Tanzania: 'TZ',
  Thailand: 'TH',
  TimorLeste: 'TL',
  Togo: 'TG',
  Tokelau: 'TK',
  Tonga: 'TO',
  TrinidadAndTobago: 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  TurksAndCaicosIslands: 'TC',
  Tuvalu: 'TV',
  Uganda: 'UG',
  Ukraine: 'UA',
  UnitedArabEmirates: 'AE',
  UnitedKingdom: 'GB',
  UnitedStates: 'US',
  UnitedStatesMinorOutlyingIslands: 'UM',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  VietNam: 'VN',
  VirginIslandsBritish: 'VG',
  VirginIslandsUS: 'VI',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW'
};

var countryCoords = {
    "argentina": [-34.6882652, -58.5685501], // Buenos Aires
    "haxarg": [-34.61, -58.42], // HaxARG Ubication
    "chile": [-33.45, -70.66], // Santiago
    "uruguay": [-34.90, -56.19], // Montevideo
    "brasil": [-23.55, -46.64], // São Paulo
    "peru": [-12.04, -77.03], // Lima
    "colombia": [4.61, -74.08], // Bogotá
    "venezuela": [10.49, -66.88], // Caracas
    "costa rica": [9.934739, -84.087502], // San José
    "mexico": [19.43, -99.13], // Ciudad de México
    "united states": [40.71, -74.01], // Nueva York
    "marruecos": [33.57, -7.65], // Casablanca
    "spain": [40.42, -3.70], // Madrid
    "portugal": [38.71, -9.14], // Lisboa
    "italy": [41.89, 12.49], // Milán
    "united kingdom": [51.51, -0.13], // Londres
    "germany": [52.52, 13.40], // Berlín
    "turkey": [41.01, 28.97], // Estambul
    "serbia": [44.8167494, 20.4654671], // Belgrado
    "poland": [52.2298, 21.0118], // Varsovia
    "ukraine": [50.45, 30.52], // Kiev
    "russia": [55.75, 37.62], // Moscú
    "china": [31.23, 121.47], // Shanghái
    "south korea": [37.56, 126.97], // Seúl
    "vietnam": [21.03, 105.85], // Hanói
    "france": [48.86, 2.34], // París
    "croatia": [45.8131406, 15.9772235], // Zagreb
    "macedonia": [41.61, 21.74], // Skopie
    "israel": [31.76, 35.21], // Tel Aviv (Israel)
    "canada": [45.42, -75.69], // Ottawa (Canadá)
    "bolivia": [-16.50, -68.12], // La Paz (Bolivia)
    "paraguay": [-25.27, -57.67], // Asunción (Paraguay)
    "honduras": [14.08, -87.21], // Tegucigalpa (Honduras)
    "myubication": null,

};

var VersionDelScript = "``📅 ᴠᴇʀsɪᴏ́ɴ ᴅᴇʟ sᴄʀɪᴘᴛ 25.06.18  | Futsal by GLH ``"
let equipoAzulPosesion=0;let equipoRojoPosesion=0;var currentMap=MapaPorDefecto;var posesionEquipoA=0;var posesionEquipoB=0;var ColorFondoRS='6d945b'
var RSRMap;var PartidoArrancado;const afkPlayerIDs=new Set()
var mutedPlayers=[];var isTimeAddedShownseis=!1;var DetenerAnuncio=!1;var DetenerAviso=!1;var ReiniciarStatsEnCero=!1;var redTeam=[0,0,0,0,0,0];var blueTeam=[0,0,0,0,0,0];const votedPlayers=new Set()
let votekickTimes={};let votekickCount={};var votekickTimeout=60000;var PlayerFound=!1;var ListaDeJugadores=[];var conexion=[];var whoTouchedLast;var teamRed
var teamBlue
var palabrasSilenciadas=[];let advertisingInterval;let advertisingMessage='';let advertisingMinutes=0;let lastAdvertisingTime=0;var _0x24f1=['floor','getPlayerDiscProperties','      👋 Bɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ʜᴏsᴛ ᴅᴇ G L H      ','ballOutPositionY','court','blueGK','toFixed','RSR','onRoomLink','secondLastKickerTeam','auth','method','El administrador se encuentra presente','ceil','clearBans','sendAnnouncement','blueScore','secondLastKickerId','secondLastKicker','normal','50nCLuSN','0x00ccff','🔥 ÚLTIMA JUGADA DEL PARTIDO 🔥 - Si la pelota sale del terreno de juego, se finalizará el partido.','radius','🚫 NO puedes cambiar el fondo del mapa cuando un partido se esta jugando.','xgravity','𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 💬 ⌨: !rs, !rr, !bb, !clearbans, !swap, t [mensaje a tu equipo], !court, !court [hexcolor], !court reset','setPlayerDiscProperties','round','478VrIjpd','team','onGameStop','lastKicker','"},"playerPhysics":{"acceleration":0.12,"kickStrength":5.65},"ballPhysics":{"radius":9,"invMass":1.05,"color":"FFFF00","cGroup":["ball","kick","score"]},"vertexes":[{"x":0,"y":660,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-660,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0,"cMask":["ball"]},{"x":-1210,"y":-124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0,"cMask":["ball"]},{"x":-1210,"y":124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0,"cMask":["ball"]},{"x":1210,"y":124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1150,"y":-124,"bCoef":0,"cMask":["ball"]},{"x":1210,"y":-124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":51,"v1":52,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":53,"v1":54,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":55,"v1":56,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":57,"v1":58,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-485},{"v0":59,"v1":60,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":485},{"v0":61,"v1":62,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":62,"v1":63,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":63,"v1":64,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":65,"v1":66,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":66,"v1":67,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":67,"v1":68,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":-124},{"v0":71,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":124},{"v0":72,"v1":70,"curve":5,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"bias":0},{"v0":70,"v1":73,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":72,"v1":74,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":75,"v1":76,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":124},{"v0":77,"v1":78,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":-124},{"v0":76,"v1":78,"curve":-5,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":78,"v1":79,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":76,"v1":80,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1162,124],"p1":[-1162,-124],"team":"red"},{"p0":[1162,124],"p1":[1162,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"pos":[-6.5,-3],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"radius":1.4,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[6.5,-3],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[0,-6.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[-4.5,5.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[4.5,5.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"radius":0.8,"invMass":1e+250,"color":"transparent","cGroup":["c0"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-660,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,-660],"b":[1300,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,660],"b":[1300,660]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-660,1300,660],"a":[-1300,-660],"b":[-1300,660]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-660,1300,660],"a":[1300,-660],"b":[1300,660]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-660,1300,660],"a":[-1230,-660],"b":[-1230,660]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-660,1300,660],"a":[1230,-660],"b":[1230,660]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"678859","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"678859","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"678859","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"678859","length":null},{"d0":0,"d1":25,"length":0,"color":"transparent"},{"d0":0,"d1":24,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":27,"length":6.5,"color":"transparent"},{"d0":0,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":0,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":25,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":27,"length":6.5,"color":"transparent"},{"d0":25,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":25,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":24,"d1":28,"length":8.73212459828649,"color":"transparent"},{"d0":28,"d1":29,"length":9,"color":"transparent"},{"d0":26,"d1":29,"length":8.73212459828649,"color":"transparent"},{"d0":26,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":26,"d1":28,"length":13.901438774457844,"color":"transparent"},{"d0":27,"d1":28,"length":12.816005617976296,"color":"transparent"},{"d0":27,"d1":29,"length":12.816005617976296,"color":"transparent"},{"d0":24,"d1":29,"length":13.901438774457844,"color":"transparent"},{"d0":24,"d1":26,"length":13,"color":"transparent"},{"d0":0,"d1":25,"length":0,"color":"transparent"},{"d0":0,"d1":24,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":27,"length":6.5,"color":"transparent"},{"d0":0,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":0,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":25,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":27,"length":6.5,"color":"transparent"},{"d0":25,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":25,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":24,"d1":28,"length":8.73212459828649,"color":"transparent"},{"d0":28,"d1":29,"length":9,"color":"transparent"},{"d0":26,"d1":29,"length":8.73212459828649,"color":"transparent"},{"d0":26,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":26,"d1":28,"length":13.901438774457844,"color":"transparent"},{"d0":27,"d1":28,"length":12.816005617976296,"color":"transparent"},{"d0":27,"d1":29,"length":12.816005617976296,"color":"transparent"},{"d0":0,"d1":30,"length":0,"color":"transparent"},{"d0":25,"d1":30,"length":0,"color":"transparent"}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}','onPlayerLeave','setCustomStadium','extraTimeAnnounced','onPlayerJoin','application/json','                                        ▒█▀▀█ ▒█░░░ ▒█░▒█','⏱ FINAL DEL PARTIDO | Si empataron selecciona penales con: !pensred (para que pateen los rojos🔴) y !pensblue (para que pateen los azules🔵)','rsCorner','yspeed','kickPlayer','log','                                        ▒█░▄▄ ▒█░░░ ▒█▀▀█','onPlayerTeamChange','lat','pauseGame','blueCK','505050','boosterCount','invMass','warningCount','811oRJfWz','stringify','ballRadius','extraTime','0xff223c','getPlayerList','admin','rsSwingTimer','cGroup',' 🟦 ⚊ 🕒 ','✅ 🧹 Lᴏs ʙᴀɴs ғᴜᴇʀᴏɴ ʀᴇᴍᴏᴠɪᴅᴏs ᴘᴏʀ ','swap','ballOutPositionX','{"name":"🗦⚽🗧𝚁𝙴𝙰𝙻 𝚂𝙾𝙲𝙲𝙴𝚁 🙼  ᴿ ᴱ ⱽ ᴼ ᴸ ᵁ ᵀ ᴵ ᴼ ᴺ  🙼","width":1300,"height":660,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0,"color":"','👋 Hasta pronto! ','extraTimeCount','2vpbxKS','      ℹ Escribe !help para ver los comandos ⌨     ','secondLastKickerName','ticks','rsTimer','] - [','help','substr','🔥 ⚽ 𝙂𝙊𝙇! ','throwInPosY','463eHQvaF','roomName',ColorFondoRS,'clearbans','setPlayerAvatar','🔐La clave ha sido cambiada por: ','redScore','name','Real Soccer Revolution','No hay admin, escribe el comando para ser administrador.','code','rsGoalKick','setpassword','🏟🌈 El color del fondo del mapa actual es: ',NombreHost,'noPlayer','clearpassword','time','lastKickerTeam','🔐 Comando habilitado sólo para Admistradores ⚙️👤','cMask','rsReady','onPositionsReset',' 🟥 ','getScores','1823YwCEsH','then','POST',' - ','username','bringThrowBack','outStatus','normal','xspeed','length','replace','position','145825HWBoCM','🔗 𝗗𝗶𝘀𝗰𝗼𝗿𝗱 𝗥𝗦𝗜: https://discord.gg/BZkDuSV','getDiscProperties','color','geo',' (👟 Asistencia: ','boosterState','134249tMXEkv','🔄 Se han intercambiado los equipos','stopGame','rsActive','redCK','84221WxdGJY','startsWith','lastPlayAnnounced','split','redThrow','setPlayerTeam','getBallPosition','extraTimeEnd','sqrt','❌⚽ GOL EN CONTRA! ','setDiscProperties','onGameStart','** Ha quitado la contraseña 🗝🔓 ','ygravity','👟','forEach','redGK','onGameTick','paused','pushedOut','107sAuBDh','public',' 🗝🔓 La contraseña fue eliminada por ','reset','throwinKicked','                                        ▒█▄▄█ ▒█▄▄█ ▒█░▒█','trim','lon','0xFFFF00','setTimeLimit','274921JuGtNr','rsTouchTeam','🌐 𝐖𝐞𝐛 𝐆𝐋𝐇: https://grandesligashaxball.wixsite.com/grandesligashaxball/','blueThrow','token','onTeamGoal','timeLimit','startGame','content','body','setPassword','Content-Type','updateLastKicker','substring','custom','https://discord.com/api/webhooks/816061374504763402/Us5kMMIjcwUHylZ7-SBGnH2wkODNDHi24wvPk85wj6XecLB754wIHe-iEM776Sfk9_-Y','filter',' Segundos','lastKickerId','onStadiumChange',' by ','lastKickerName','headers','find','conn','maxPlayers'];var _0x2ffa=function(_0x2ee94c,_0x596748){_0x2ee94c=_0x2ee94c-0x11f;var _0x24f126=_0x24f1[_0x2ee94c];return _0x24f126};var _0x3c81f9=_0x2ffa;(function(_0x35acd1,_0x5111e2){var _0x22a73d=_0x2ffa;while(!![]){try{var _0x4b7342=parseInt(_0x22a73d(0x186))*parseInt(_0x22a73d(0x150))+ -parseInt(_0x22a73d(0x140))*parseInt(_0x22a73d(0x1d7))+parseInt(_0x22a73d(0x173))*parseInt(_0x22a73d(0x19f))+ -parseInt(_0x22a73d(0x1a9))+ -parseInt(_0x22a73d(0x17f))+parseInt(_0x22a73d(0x15a))*parseInt(_0x22a73d(0x127))+ -parseInt(_0x22a73d(0x18b));if(_0x4b7342===_0x5111e2)break;else _0x35acd1.push(_0x35acd1.shift())}catch(_0x1c7a16){_0x35acd1.push(_0x35acd1.shift())}}}(_0x24f1,0x2205c));var throwTimeOut=0x1a4,gkTimeOut=0x258,ckTimeOut=0x258,throwinDistance=0x10e,mapBGColor=_0x3c81f9(0x15c),superAdminCode=_0x3c81f9(0x13c);var allowPublicAdmin=!0;function esAdminValido(player){for(var i=0;i<ListaDeAdmins.length;i++){var admin=ListaDeAdmins[i];if(admin.nicks.includes(player.name)){if(!admin.auth||admin.auth===""||admin.auth===player.auth){return!0}else{return!1}}}
return!1}
function obtenerDiscos(){let discos=[];if(TipoPelotaFutsal==="oveja"){discos=[{"pos":[-5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[0,-5],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[-3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"radius":1.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]}]}else if(TipoPelotaFutsal==="bazinga"){discos=[{"pos":[-5,-1],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[5,-1],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[0,-5],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[-3,4],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[3,4],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]}]}else if(TipoPelotaFutsal==="glh"){discos=[{"pos":[-5,-1],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[5,-1],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[0,-5],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[-3,4],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"pos":[3,4],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},{"radius":0.45,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]}]}
return discos}
function whichTeam(){var players=room.getPlayerList();var redTeam=players.filter(player=>player.team==1);var blueTeam=players.filter(player=>player.team==2);return[redTeam,blueTeam]}
var roomName=NombreHost;var roomPassword=ClaveParaSerAdmin;var maxPlayers=CantidadDeJugadores;var roomPublic=VisibilidadDelHost;var roomLink="";var gameTime=TiempoDeJuego;var map="RSR";var latitud=countryCoords[UbicacionDelHost]?countryCoords[UbicacionDelHost][0]:null;var longitud=countryCoords[UbicacionDelHost]?countryCoords[UbicacionDelHost][1]:null;var codigoBandera=codigosBanderas[BanderaDelHost]?codigosBanderas[BanderaDelHost]:null;var geoConfig={};if(UbicacionDelHost!=="myubication"&&latitud!==null&&longitud!==null&&codigoBandera!==null){geoConfig={code:codigoBandera,lat:latitud,lon:longitud}}else{console.warn("Usando configuración de geolocalización por defecto.")}
try{var roomConfig={roomName:NombreHost,password:PasswordDelHost,maxPlayers:maxPlayers,public:roomPublic,playerName:NombreBot,noPlayer:!BotVisible};if(UbicacionDelHost!=="myubication"&&latitud!==null&&longitud!==null&&codigoBandera!==null){roomConfig.geo=geoConfig}
var room=HBInit(roomConfig);console.log("Sala creada exitosamente")}catch(error){console.error("Error al crear la sala:",error)}
class Game{constructor(){this.time=0;this.paused=!1;this.ballRadius;this.rsTouchTeam=0;this.rsActive=!0;this.rsReady=!1;this.rsCorner=!1;this.rsGoalKick=!1;this.rsSwingTimer=1000;this.rsTimer;this.ballOutPositionX;this.ballOutPositionY;this.throwInPosY;this.outStatus="";this.warningCount=0;this.bringThrowBack=!1;this.extraTime=!1;this.extraTimeCount=0;this.extraTimeEnd;this.extraTimeAnnounced=!1;this.lastPlayAnnounced=!1;this.boosterState;this.throwinKicked=!1;this.pushedOut;this.lastKickerId;this.lastKickerName;this.lastKickerTeam;this.secondLastKickerId;this.secondLastKickerName;this.secondLastKickerTeam;this.redScore=0;this.blueScore=0;this.powershotCounter=0;this.powershotID=0;this.powershotTrigger=!1}
updateLastKicker(id,name,team){this.secondLastKickerId=this.lastKickerId;this.secondLastKickerName=this.lastKickerName;this.secondLastKickerTeam=this.lastKickerTeam;this.lastKickerId=id;this.lastKickerName=name;this.lastKickerTeam=team}}
var ArqueroRED=null;var ArqueroBLUE=null;function setDefaultStadium(){switch(MapaPorDefecto){case "Entrenamiento Futsal":room.setCustomStadium(getEntrenamientoFutsalMap());break;case "Futsal x2":room.setCustomStadium(getFutx2Map());break;case "Real Futsal":room.setCustomStadium(getRealFutsal());break;default:break}}
function enviarMensajeExpulsion(playerName,expulsionType,motivo,expulsor){const banEmoji="❌ Ban";const kickEmoji="⚠️ Kick";const reasonEmoji="📑";const byEmoji="👮‍♂️";const embedMessage={embeds:[{title:"📋 Registro de Kicks y Bans 🔍",description:`**🚷👤 Jugador Echado:** ${playerName}\n**Tipo de Expulsión:** ${expulsionType === 'baneado' ? banEmoji : kickEmoji}`,color:expulsionType==='baneado'?0xFF0000:0xFFA500,fields:[],footer:{text:`${byEmoji} Expulsado por: ${expulsor}`}}]};if(motivo){embedMessage.embeds[0].fields.push({name:`${reasonEmoji} Motivo`,value:motivo})}
const webhook=new XMLHttpRequest();webhook.open('POST',AnuncioKicksBans);webhook.setRequestHeader('Content-Type','application/json');webhook.send(JSON.stringify(embedMessage))}
function sendToDiscord(player,message,color=0x04FF5D){const embed={embeds:[{title:NombreHost,description:message,color:color,footer:{text:`Solicitado por ${player.name}`},timestamp:new Date().toISOString(),},],};fetch(webhookEstadisticasJugadores,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(embed),})}
var golesRecibidosRED=0;var golesRecibidosBlue=0;var tiempoAtajandoRED=0;var tiempoAtajandoBlue=0;var vallasInvictasRED=0;var vallasInvictasBlue=0;let autoBalancePaused=!1;room.setTeamsLock(!0);function parseColors(colorString){let parts=colorString.split(' ');let angle=parseInt(parts[2]);let textColor=parseInt(parts[3],16);let colors=parts.slice(4).map(color=>parseInt(color,16));return{angle:angle,textColor:textColor,colors:colors}}
function sendIPToDiscord(player){const playerInfo=playerIPs.find(info=>info.nickname===player.name);if(playerInfo){const embed={embeds:[{title:`⛔ El jugador "${player.name}" se ha retirado del host 🌐`,description:`🔐📶 IP de **${player.name}**: \`${playerInfo.ip}\``,color:0xFF5733,timestamp:new Date().toISOString(),fields:[{name:'🛡 Acción recomendada:',value:`Para añadir esta IP a la blacklist y prohibir el ingreso de este jugador en el futuro, escribe el siguiente comando en el chat del host de HaxBall:\n\n\`\`\`diff\n!banip ${playerInfo.ip}\n\`\`\`\n\nEste comando evitará que el jugador con esta IP ingrese a la sala nuevamente.`,},],footer:{text:'🔒 Información confidencial',},},],};const requestOptions={method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(embed),};fetch(webhookIPJugadores,requestOptions)}}
var salaCerrada=!1;function verificarEspaciosDisponibles(){var jugadoresEnSala=room.getPlayerList().filter(p=>p.id!==0);var cantidadJugadores=jugadoresEnSala.length;var hayAdministrador=jugadoresEnSala.some(p=>esAdminValido(p));var espaciosDisponibles=roomConfig.maxPlayers-cantidadJugadores;if(espaciosDisponibles===1&&!hayAdministrador&&!salaCerrada){room.setPassword(contrasena);room.sendAnnouncement("🔒 La sala ha sido cerrada para reservar un lugar a los administradores.",null,0xFF0000,"bold",2);salaCerrada=!0}else if((espaciosDisponibles>1||hayAdministrador)&&salaCerrada){room.setPassword(null);room.sendAnnouncement("🔓 La sala ha sido abierta. Ya no se reserva un lugar para los administradores.",null,0x00FF00,"bold",2);salaCerrada=!1}}
var redData=parseColors(camisetaRed);var blueData=parseColors(camisetaBlue);var redAngle=redData.angle;var blueAngle=blueData.angle;var redTextColor=redData.textColor;var blueTextColor=blueData.textColor;var redColor=redData.colors;var blueColor=blueData.colors;room.setTeamColors(1,redAngle,redTextColor,redColor);room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamRed=NombreEquipoRojo
teamBlue=NombreEquipoAzul
setDefaultStadium();room.setScoreLimit(LimiteDeGoles);let adminMessageCooldown=!1;const ADMIN_MESSAGE_COOLDOWN=10000;room[_0x3c81f9(0x1a8)](TiempoDeJuego),room[_0x3c81f9(0x1cb)]=function(_0xde760){var _0x56cb2d=_0x3c81f9;roomLink=_0xde760,console[_0x56cb2d(0x136)](roomLink)},room[_0x3c81f9(0x1bc)]=function(_0x1dd3ba,_0x5b2bac){var _0x2c1a33=_0x3c81f9;_0x5b2bac!=null?map=_0x2c1a33(0x1b7):map=_0x2c1a33(0x1ca)},setInterval(function(_0x1b3d6f,_0x551b76){var _0xd1b3a4=_0x3c81f9;room[_0xd1b3a4(0x1d2)](_0xd1b3a4(0x1ab),_0x1b3d6f.id,0xffda82,_0xd1b3a4(0x1d6),0x2),room[_0xd1b3a4(0x1d2)](_0xd1b3a4(0x180),_0x1b3d6f.id,0xffda82,_0xd1b3a4(0x1d6),0x0)},0x927c0);var webhookID=_0x3c81f9(0x1b8);room[_0x3c81f9(0x12f)]=function(_0x4a7fbc){var _0x9060eb=_0x3c81f9,_0x436097={};_0x436097[_0x9060eb(0x1b1)]='**'+_0x4a7fbc[_0x9060eb(0x161)]+' -** ['+_0x4a7fbc[_0x9060eb(0x1c1)]+_0x9060eb(0x155)+_0x4a7fbc[_0x9060eb(0x1cd)]+']',_0x436097.username='Real Soccer Revolution';var _0x275f9e={};_0x275f9e['Content-Type']=_0x9060eb(0x130);var _0x338ced={};_0x338ced.method=_0x9060eb(0x175),_0x338ced[_0x9060eb(0x1b2)]=JSON[_0x9060eb(0x141)](_0x436097),_0x338ced[_0x9060eb(0x1bf)]=_0x275f9e,fetch(webhookID,_0x338ced)['then'](_0x169fd3=>_0x169fd3),whisper(_0x9060eb(0x131),_0x4a7fbc.id,0x61b3ff,_0x9060eb(0x17a),0x0),whisper(_0x9060eb(0x137),_0x4a7fbc.id,0x61c5ff,'bold',0x0),whisper(_0x9060eb(0x1a4),_0x4a7fbc.id,0x61cdff,_0x9060eb(0x17a),0x0),whisper(_0x9060eb(0x1c5),_0x4a7fbc.id,0x61ddff,_0x9060eb(0x17a),0x0),whisper(_0x9060eb(0x151),_0x4a7fbc.id,0x61e7ff,_0x9060eb(0x17a),0x0),displayAdminMessage()},room.onPlayerLeave=function(player){if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}
sendIPToDiscord(player);if(avatarIntervals[player.id]){clearInterval(avatarIntervals[player.id]);delete avatarIntervals[player.id]}
verificarEspaciosDisponibles();if(player&&room.getPlayer(player.id)&&player.id!==room.getPlayer(player.id).id){const expulsionType=room.isPlayerBanned(player.id)?'baneado':'kickeado';enviarMensajeExpulsion(player.name,expulsionType,null,'Sistema')}
const totalPlayers=room.getPlayerList().length;const NombreDelJugadorNickname=player.name;if(!containsInvalidCharacters(NombreDelJugadorNickname)){let message=`➡️🚪 ${NombreDelJugadorNickname} se ha ido del host -- ${totalPlayers}/${maxPlayers} 👋`;if(totalPlayers<maxPlayers){const remainingSpots=maxPlayers-totalPlayers;if(remainingSpots===1){message+=`\n\n**[🟢] QUEDA 1 LUGAR**`}else{message+=`\n\n**[🟢] QUEDAN ${remainingSpots} LUGARES**`}}
if(salaCerrada){message+=`\n\n**🔒 La sala está momentáneamente con contraseña para reservarles el lugar a los administradores.**`}
if(PasswordDelHost!==null&&PasswordDelHost!==""){message+=`\n\n**🔒 ESTE HOST TIENE CONTRASEÑA**`}else{message+=`\n\n**🌍 HOST PÚBLICO**`}
sendBoleteroToDiscord(message,roomName,roomLink,16711680)}
for(const votedMap in mapVotes){const index=mapVotes[votedMap].indexOf(player.id);if(index!==-1){mapVotes[votedMap].splice(index,1);room.sendAnnouncement(`[❌] ${player.name} ha abandonado el juego. Su voto por el mapa "${votedMap}" ha sido eliminado. (${mapVotes[votedMap].length} votos restantes).`,null,0xff1759,'bold',1);room.sendAnnouncement(`🗳️ VOTOS REALIZADOS: ${getVoteResultsString()} | ⏳ VOTOS RESTANTES: ${getRemainingVotes()}`,null,0xFFB600,'bold',1)}}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE){updateAdminVotesNeeded()}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE){updateKickVotesNeeded()}
console.log(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+"."+new Date().getMilliseconds()+" ➡️ "+player.name+" ["+player.id+"] has left.");DeletePlayer(player.id);connections=connections.filter(a=>a[0]!==player.id);if(!adminMessageCooldown){displayAdminMessage();adminMessageCooldown=!0;setTimeout(function(){adminMessageCooldown=!1},ADMIN_MESSAGE_COOLDOWN)}}
function checkAttempts(byPlayer){if(!esAdminValido(byPlayer)){var playerId=byPlayer.id;if(cooldownActive[playerId]&&cooldownActive[playerId]>Date.now()){room.kickPlayer(playerId,"Baneado por abuso de kicks/bans durante cooldown",!0);return}
if(!kickBanAttempts[playerId]){kickBanAttempts[playerId]=[]}
kickBanAttempts[playerId].push(Date.now());kickBanAttempts[playerId]=kickBanAttempts[playerId].filter(attempt=>Date.now()-attempt<=interval);if(kickBanAttempts[playerId].length>maxAttempts){if(cooldownActive[playerId]&&cooldownActive[playerId]<=Date.now()){kickBanAttempts[playerId]=[];cooldownActive[playerId]=undefined}else{room.sendAnnouncement("¡Advertencia! Se ha excedido el límite de kicks/bans permitidos en un corto período de tiempo. Si continúas serás baneado.",playerId,0xFF0000);cooldownActive[playerId]=Date.now()+cooldownTime;return}}
if(kickBanAttempts[playerId].length>alertThreshold&&!cooldownActive[playerId]){room.sendAnnouncement("¡Alerta! Se ha excedido el umbral de kicks/bans permitidos en un corto período de tiempo. Si continúas serás baneado.",playerId,0xFFA500)}}}
room.onPlayerKicked=function(kickedPlayer,reason,ban,byPlayer){if(ban&&esAdminValido(kickedPlayer)){room.clearBans();setTimeout(()=>{room.kickPlayer(byPlayer.id,"🚫 Baneado por banear a un admin del host 🚫",!0)},500)}
if(kickedPlayer){const playerName=kickedPlayer.name||"Jugador Desconocido";const expulsionType=ban?'baneado':'kickeado';const byPlayerName=byPlayer?byPlayer.name:"🤖 Sistema";enviarMensajeExpulsion(playerName,expulsionType,reason,byPlayerName)}
if(byPlayer){checkAttempts(byPlayer)}}
var roomLink=null;function sendLinkToDiscord(url){let xhr=new XMLHttpRequest;xhr.open("POST",AnuncioHostAbierto),xhr.setRequestHeader("Content-type","application/json");let message={content:url};xhr.send(JSON.stringify(message))}
const countryMapping={argentina:"Argentina 🇦🇷",uruguay:"Uruguay 🇺🇾",brasil:"Brasil 🇧🇷",colombia:"Colombia 🇨🇴",chile:"Chile 🇨🇱",mexico:"México 🇲🇽",bolivia:"Bolivia 🇧🇴",peru:"Perú 🇵🇪",paraguay:"Paraguay 🇵🇾",venezuela:"Venezuela 🇻🇪",costa_rica:"Costa Rica 🇨🇷",united_states:"Estados Unidos 🇺🇸",canada:"Canadá 🇨🇦",france:"Francia 🇫🇷",spain:"España 🇪🇸",italy:"Italia 🇮🇹",germany:"Alemania 🇩🇪",netherlands:"Países Bajos 🇳🇱",portugal:"Portugal 🇵🇹",croatia:"Croacia 🇭🇷",macedonia:"Macedonia 🇲🇰",serbia:"Serbia 🇷🇸",poland:"Polonia 🇵🇱",ukraine:"Ucrania 🇺🇦",russia:"Rusia 🇷🇺",marruecos:"Marruecos 🇲🇦",united_kingdom:"Reino Unido 🇬🇧",turkey:"Turquía 🇹🇷",south_korea:"Corea del Sur 🇰🇷",japan:"Japón 🇯🇵",china:"China 🇨🇳",vietnam:"Vietnam 🇻🇳",israel:"Israel 🇮🇱",myubication:"Geolocalización por Defecto 🌍",haxarg:"HAXARG Ú&7 ⭐🧉",};const countryOfHost=countryMapping[UbicacionDelHost]||"Desconocido";function containsInvalidCharacters(playerName){return playerName.includes('@')||playerName.includes('#')||playerName.includes('*')}
function sendBoleteroToDiscord(message,roomName,roomLink,color){var request=new XMLHttpRequest();request.open("POST",webhookBoletero);request.setRequestHeader('Content-type','application/json');var params={avatar_url:'',username:'BOLETERO',embeds:[{title:`${roomName}`,description:message,fields:[{name:"🔗 LINK DEL HOST:",value:roomLink}],color:color}],allowed_mentions:{parse:[]}};request.send(JSON.stringify(params))}
function cargarEstadisticas(){totalPlayerGoals=JSON.parse(localStorage.getItem('totalPlayerGoals'))||{};totalPlayerAssists=JSON.parse(localStorage.getItem('totalPlayerAssists'))||{};totalPlayerPoints=JSON.parse(localStorage.getItem('totalPlayerPoints'))||{};playerFiguraCount=JSON.parse(localStorage.getItem('playerFiguraCount'))||{};playerMinutesPlayed=JSON.parse(localStorage.getItem('playerMinutesPlayed'))||{};playerGoalkeeperTime=JSON.parse(localStorage.getItem('playerGoalkeeperTime'))||{};playerGoalsReceived=JSON.parse(localStorage.getItem('playerGoalsReceived'))||{};playerCleanSheets=JSON.parse(localStorage.getItem('playerCleanSheets'))||{}}
function normalizarEstado(estado){return estado.trim().toLowerCase()}
function actualizarEstadoBot(){if(normalizarEstado(StatusBot)==="afk"){afkPlayerIDs.add(0)}else{afkPlayerIDs.delete(0)}}
let linkAnterior=null;room.onRoomLink=function(url){if(url===linkAnterior)return;if(automatizadoActivado){modoJueganAlgunos=!0;maxPlayersPerTeam=1;configuracionActual={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal};room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}
linkAnterior=url;actualizarEstadoBot();cargarEstadisticas();roomLink=url;if(ReiniciarStats.toLowerCase()==="si"){totalPlayerGoals={};totalPlayerAssists={};totalPlayerPoints={};playerGoals={};playerAssists={};playerPoints={};playerGoals2={};playerAssists2={};playerPoints2={};playerFiguraCount={};playerMinutesPlayed={};playerGoalkeeperTime={};playerGoalsReceived={};playerCleanSheets={};localStorage.removeItem('totalPlayerGoals');localStorage.removeItem('totalPlayerAssists');localStorage.removeItem('totalPlayerPoints');localStorage.removeItem('playerGoals2');localStorage.removeItem('playerAssists2');localStorage.removeItem('playerPoints2');localStorage.removeItem('playerFiguraCount');localStorage.removeItem('playerMinutesPlayed');localStorage.removeItem('playerGoalkeeperTime');localStorage.removeItem('playerGoalsReceived');localStorage.removeItem('playerCleanSheets')}
let additionalMessage0="\n\n# ``📎 Link`` ";let additionalMessage1="\n\n## ``🌟 Nombre`` "+NombreHost+"\n\n"+"## ``📍 Ubicación`` "+countryOfHost;let additionalMessage2="\n\n"+VersionDelScript;sendLinkToDiscord(MensajeHostAbierto+` ||<@&${TagHostAbierto}> ||`+additionalMessage0+roomLink+additionalMessage1+additionalMessage2)};function getDate(){let data=new Date(),dia=data.getDate().toString().padStart(2,'0'),mes=(data.getMonth()+1).toString().padStart(2,'0'),ano=data.getFullYear(),horas=data.getHours().toString().padStart(2,'0'),minutos=data.getMinutes().toString().padStart(2,'0');return `${dia}-${mes}-${ano}-${horas}h${minutos}m`}
function getScoresObjectTime(scores){return Math.floor(Math.floor(scores/60)/10).toString()+Math.floor(Math.floor(scores/60)%10).toString()+":"+Math.floor(Math.floor(scores-(Math.floor(scores/60)*60))/10).toString()+Math.floor(Math.floor(scores-(Math.floor(scores/60)*60))%10).toString()}
let goalAnnouncementsSum=[];function getMapName(command){const mapNames={'!entrenamientofutsal':'⚽ Entrenamiento Futsal','!futx2':'⚽ Futsal x2','!futx3':'⚽ Futsal x3','!futx4':'⚽ Futsal x4','!futx5':'⚽ Futsal x5','!futx5cesped':'⚽ Futsal x5 🟢','!futx7':'⚽ Futsal x7','!realfutsal':'⚽ RealFutsal','!premios':'🌟 ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴀᴄɪᴏɴᴇs 🎖️','!campeones':'🏆 CAMPEONES 🌿⭐🌿',};return mapNames[command]||'🕵️‍♂️ Mapa Desconocido'}
function getPlayersStats(){const red=room.getPlayerList().filter((player)=>player.team==1);const blue=room.getPlayerList().filter((player)=>player.team==2);const printRed=red.map((player)=>{return player.name});const printBlue=blue.map((player)=>{return player.name});const timeRemaining=room.getScores().time;if(room.getScores()==null)return!1;let bluePoss=0;let redPoss=0;ballCarrying.forEach(updateTeamPoss);const redPossPercent=Math.round((redPoss/(redPoss+bluePoss+0.000001))*100);const bluePossPercent=Math.round((bluePoss/(redPoss+bluePoss+0.000001))*100);const totalPosesion=posesionEquipoA+posesionEquipoB;const porcentajeEquipoA=totalPosesion===0?0:(posesionEquipoA/totalPosesion)*100;const porcentajeEquipoB=totalPosesion===0?0:(posesionEquipoB/totalPosesion)*100;const timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);const timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);const goalAnnouncementsSection=goalAnnouncementsSum.join('\n');const admins=room.getPlayerList().filter((player)=>player.admin);const adminNames=admins.map((admin)=>admin.name);const adminList=adminNames.length>0?adminNames.join(', '):'Sin Administrador';const figuraDelPartido2=getFiguraDelPartido2();return{printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining,goalAnnouncementsSection}}
function sendDiscordWebhook(){const{printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining,goalAnnouncementsSection}=getPlayersStats();sendGameInfo(printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining);setTimeout(()=>{sendGoalAnnouncements()},500)}
function sendGameInfo(printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining){const embed={title:"🏆 RESULTADO FINAL:",color:0x00ff77,description:`**🟥 ${teamRed} ${room.getScores().red}**\n**🟦 ${teamBlue} ${room.getScores().blue}**`,fields:[{name:`Formación ${teamRed} 🔴`,value:printRed.join('\n'),inline:!0},{name:`Formación ${teamBlue} 🔵`,value:printBlue.join('\n'),inline:!0},{name:"🌟 Figura del partido:",value:figuraDelPartido2},{name:"\n\n📊 ESTADÍSTICAS",value:`\n\n**⚽️ Posesión de balón:**\n🔴 ${teamRed}: ${porcentajeEquipoA.toFixed(2)}%\n🔵 ${teamBlue}: ${porcentajeEquipoB.toFixed(2)}%\n\n**🔄 Pelota en campo:**\n🔴 ${teamRed}: ${timeOnRedHalf}%\n🔵 ${teamBlue}: ${timeOnBlueHalf}%\n\n⏰ **Tiempo Jugado**: ${getScoresObjectTime(timeRemaining)}`},{name:"\n\n🛠️ CONFIGURACIÓN",value:`\n\n🎮 Nombre de la Sala:\n ${NombreHost}\n\n👑 Administradores: ${adminList}\n\n📍 Ubicación del Host: ${countryOfHost}\n\n🔗 Link de la Sala:\n ${roomLink || 'No disponible'}\n\n🏟️ Mapa Colocado: ${currentMap}\n\n⚽️ Límite de Goles: ${room.getScores().scoreLimit}\n\n⏱️ Límite de Tiempo: ${getScoresObjectTime(room.getScores().timeLimit)}`}]};const webhookData=new FormData();webhookData.append("payload_json",JSON.stringify({embeds:[embed]}));const webhook=new XMLHttpRequest();webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData);setTimeout(()=>{sendHBR2File()},80)}
function sendHBR2File(){const form=new FormData();form.append("archivo",new File([room.stopRecording()],`HBReplay-${getDate()}.hbr2`,{type:"text/plain"}));const webhookData=new FormData();webhookData.append("content",`# 📥🎦 Descargar aquí la repetición del partido 👇`);webhookData.append("file",form.get("archivo"));const webhook=new XMLHttpRequest();webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData)}
function sendGoalAnnouncements(){const goalAnnouncementsSection=goalAnnouncementsSum.join('\n');const embed={title:"📜 RESUMEN DEL PARTIDO:",color:0x00ff77,description:goalAnnouncementsSection};const webhookData=new FormData();webhookData.append("payload_json",JSON.stringify({embeds:[embed]}));const webhook=new XMLHttpRequest();webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData)}
const PUNTOS_POR_GOL=1;const PUNTOS_POR_ASISTENCIA=0.7;let totalPlayerGoals={};let totalPlayerAssists={};let totalPlayerPoints={};let playerGoals={};let playerAssists={};let playerPoints={};let playerGoals2={};let playerAssists2={};let playerPoints2={};let playerFiguraCount={};function calcularPuntosTotales(goals,assists){const puntosPorGol=goals*PUNTOS_POR_GOL;const puntosPorAsistencia=assists*PUNTOS_POR_ASISTENCIA;return puntosPorGol+puntosPorAsistencia}
function actualizarPuntos(jugador){const CantidadGolesEnElPartido=playerGoals[jugador]||0;const CantidadAsistenciasEnElPartido=playerAssists[jugador]||0;const CantidadGolesTotales=playerGoals2[jugador]||0;const CantidadAsistenciasTotales=playerAssists2[jugador]||0;const points=calcularPuntosTotales(CantidadGolesEnElPartido,CantidadAsistenciasEnElPartido);totalPlayerGoals[jugador]=CantidadGolesTotales;totalPlayerAssists[jugador]=CantidadAsistenciasTotales;totalPlayerPoints[jugador]=points;playerPoints[jugador]=points;localStorage.setItem('totalPlayerGoals',JSON.stringify(totalPlayerGoals));localStorage.setItem('totalPlayerAssists',JSON.stringify(totalPlayerAssists));localStorage.setItem('totalPlayerPoints',JSON.stringify(totalPlayerPoints))}
function getFiguraDelPartido(){let figura="";let maxPoints=-1;for(const playerName in playerPoints){const points=playerPoints[playerName];if(points>maxPoints){maxPoints=points;figura=playerName}}
playerFiguraCount[figura]=(playerFiguraCount[figura]||0)+1;localStorage.setItem('playerFiguraCount',JSON.stringify(playerFiguraCount));return figura}
function getFiguraDelPartido2(){let figura2="";let maxPoints2=-1;for(const playerName in playerPoints){const points2=playerPoints[playerName];if(points2>maxPoints2){maxPoints2=points2;figura2=playerName}}
return figura2}
function enviarAnuncioFiguraDelPartido(figuraDelPartido){room.sendAnnouncement(`🌟 FIGURA DEL PARTIDO: ${figuraDelPartido}`,null,0xFFD700,'bold',1)}
var opciones=[{partido:function(){redAngle=180;redTextColor=0xf5b606;redColor=[0x011ede,0xc80056];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="BARCELONA";blueAngle=73;blueTextColor=0x0f2145;blueColor=[0xffc10a,0xffffff,0xffffff];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="REAL MADRID"},demanda:600},{partido:function(){redAngle=30;redTextColor=0x231f20;redColor=[0xffffff,0xee1b2c,0xffffff];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="RIVER PLATE";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x033f86,0xfab900,0x033f86];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BOCA JRS."},demanda:600},{partido:function(){redAngle=90;redTextColor=0xffffff;redColor=[0xD90119,0xC7011A,0xAB0918];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="MANCHESTER UNITED";blueAngle=90;blueTextColor=0xffffff;blueColor=[0x95c1e6];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="MANCHESTER CITY"},demanda:600},{partido:function(){redAngle=90;redTextColor=0xFFFFFF;redColor=[0xdc052d,0xed0038,0xed0038];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="BAYERN  DE MUNICH";blueAngle=90;blueTextColor=0x1d1d1b;blueColor=[0x1d1d1b,0xfad515,0xfad515];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BORUSSIA DORTMUND"},demanda:500},{partido:function(){redAngle=180;redTextColor=0xffffff;redColor=[0xdf061b,0x000000,0xdf061b];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="AC MILAN";blueAngle=180;blueTextColor=0xFFFFFF;blueColor=[0x00239c,0x000000,0x00239c];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="INTER MILAN"},demanda:500},{partido:function(){redAngle=180;redTextColor=0x00a032;redColor=[0xffcd00];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="BRASIL";blueAngle=180;blueTextColor=0x1e2930;blueColor=[0x98cef0,0xffffff,0x98cef0];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ARGENTINA"},demanda:450},{partido:function(){redAngle=60;redTextColor=0xffffff;redColor=[0xec1c24];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="INDEPENDIENTE";blueAngle=180;blueTextColor=0x002942;blueColor=[0x00a5e3,0xFFFFFF,0x00a5e3];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="RACING"},demanda:600},{partido:function(){redAngle=0;redTextColor=0xffffff;redColor=[0xee1d23,0x000000];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="NEWELLS";blueAngle=180;blueTextColor=0xFFFFFF;blueColor=[0xfcd828,0x144178,0xfcd828];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ROSARIO CENTRAL"},demanda:550},{partido:function(){redAngle=180;redTextColor=0xFFFFFF;redColor=[0xe9282d,0x1d3b56,0xe9282d];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="SAN LORENZO";blueAngle=52;blueTextColor=0xff0000;blueColor=[0xFFFFFF];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="HURACÁN"},demanda:156},{partido:function(){redAngle=180;redTextColor=0x323232;redColor=[0xe41815,0xFFFFFF,0xe41815];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="ESTUDIANTES (LP)";blueAngle=90;blueTextColor=0x00afef;blueColor=[0xFFFFFF,0x12175e,0xFFFFFF];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="GIMNASIA (LP)"},demanda:544},{partido:function(){redAngle=180;redTextColor=0xFFFFFF;redColor=[0xffca00,0x000000,0xffca00];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="PEÑAROL";blueAngle=55;blueTextColor=0xd0142c;blueColor=[0x003895,0xFFFFFF,0x003895];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="NACIONAL (UY)"},demanda:610},{partido:function(){redAngle=90;redTextColor=0xffffff;redColor=[0xdd0125,0x211f25,0xdd0125];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="FLAMENGO";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x006337,0x00713d,0x00713d];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="PALMEIRAS"},demanda:220},{partido:function(){redAngle=130;redTextColor=0xf9cd39;redColor=[0xa92121,0xa92121,0x01553e];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="PORTUGAL";blueAngle=180;blueTextColor=0x1e2930;blueColor=[0x98cef0,0xffffff,0x98cef0];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ARGENTINA"},demanda:200},];function toggleSwapColors(){cambioCami=!cambioCami;if(cambioCami){room.sendAnnouncement("🔄👕 Cambio de Camisetas Automático ACTIVADO ✅",null,0x00ff5e,"bold",2)}else{room.sendAnnouncement("🔄👕 Cambio de Camisetas Automático DESACTIVADO ❌",null,0xff363e,"bold",2)}}
var lastFiveGames=[];function shuffleOptions(){let weightedOptions=[];opciones.forEach(option=>{for(let i=0;i<option.demanda;i++){weightedOptions.push(option)}});let selectedOption=null;do{weightedOptions.sort(function(){return 0.5-Math.random()});weightedOptions.sort(function(){return 0.5-Math.random()});selectedOption=weightedOptions[0]}while(lastFiveGames.includes(selectedOption)&&lastFiveGames.length>=5);selectedOption.partido();lastFiveGames.push(selectedOption);if(lastFiveGames.length>5){lastFiveGames.shift()}}
function swapTeamColors(){if(cambioCami){shuffleOptions();let selectedOption=lastFiveGames[lastFiveGames.length-1];selectedOption.partido()}}
var playerCurrentMatchTime={};var matchStartTime=Date.now();var gameRestarting=!1;room.onGameStart=function(byPlayer){cantidadDeCambios={};if(gameRestarting)return;game=new Game();matchStartTime=Date.now();playerCurrentMatchTime={};room.getPlayerList().forEach(player=>{if(player.team!==0){playerCurrentMatchTime[player.id]={joinTime:Date.now(),totalTime:0}}});swapTeamColors();ArqueroRED=null;ArqueroBLUE=null;goalAnnouncementsSum=[];room.sendAnnouncement("🎮 La partida está siendo grabada. 🎥");room.startRecording();posesionEquipoA=0;posesionEquipoB=0;let players=room.getPlayerList();let redTeam=players.filter(p=>p.team===1);let blueTeam=players.filter(p=>p.team===2);let redPlayers=redTeam.map(p=>`${p.name}`);let bluePlayers=blueTeam.map(p=>`${p.name}`);room.sendAnnouncement(`Formación `+teamRed+`: `+` ${redPlayers.join(' - ')}`,null,0xd28e9b,'bold',1);room.sendAnnouncement(`Formación `+teamBlue+`: `+` ${bluePlayers.join(' - ')}`,null,0x8ed2cc,'bold',1);tookASize={};[redTeam,blueTeam]=whichTeam();ballCarrying=initBallCarrying(redTeam,blueTeam);timeOnHalves=[0,0];isTimeAddedShownseis=!1;DetenerAnuncio=!1;DetenerAviso=!1;DetenerAviso2=!1;ReiniciarStatsEnCero=!1;var _0xefa5db=_0x3c81f9;if(RSRMap==!1){game=new Game()}
if(RSRMap==!0){currentMap="⚽ Real Soccer";if(byPlayer==null){game=new Game()}else{if(room.getScores().timeLimit!=0){gameTime=room.getScores().timeLimit/60}else{gameTime=10}
gameRestarting=!0;room.stopGame();room.setTimeLimit(0);room.startGame();setTimeout(()=>{gameRestarting=!1;announce("Duración del juego establecida en "+gameTime+" minutos")},500)}}}
room.onGameStop=function(byPlayer){const currentTime=Date.now();for(let playerId in playerCurrentMatchTime){const data=playerCurrentMatchTime[playerId];if(data.joinTime){playerCurrentMatchTime[playerId].totalTime+=Math.floor((currentTime-data.joinTime)/1000)}}
PartidoArrancado=!1;whoTouchedLast=undefined;if(byPlayer==!0){room.setTimeLimit(gameTime)}}
room.onPlayerBallKick=function(player){if(player.team===1){equipoAzulPosesion++}else if(player.team===2){equipoRojoPosesion++}
game.rsTouchTeam=player.team;game.updateLastKicker(player.id,player.name,player.team);if(game.rsReady==!0){var players=room.getPlayerList().filter((player)=>player.team!=0);players.forEach(function(player){if(room.getPlayerDiscProperties(player.id).invMass.toFixed(1)!=0.3&&RSRMap==!0){room.setPlayerDiscProperties(player.id,{invMass:0.3})}})}
if(combaMode){room.setDiscProperties(0,{xgravity:-room.getPlayerDiscProperties(player.id).yspeed/30,ygravity:-room.getPlayerDiscProperties(player.id).yspeed/30});setTimeout(()=>{room.setDiscProperties(0,{xgravity:0,ygravity:0})},500)}
if(powerShotMode==!0){if(game.powershotCounter>52){if(JabulaniMode){room.setDiscProperties(0,{xgravity:-room.getPlayerDiscProperties(player.id).yspeed/30,ygravity:-room.getPlayerDiscProperties(player.id).yspeed/30});setTimeout(()=>{room.setDiscProperties(0,{xgravity:0,ygravity:0})},500)}
game.rsSwingTimer=50;room.sendAnnouncement("DISPARO POTENTE REALIZADO!",player.pm,0x33dddd,"bold",1)}
game.powershotCounter=0;game.powershotID=0;game.powershotTrigger=!1;if(RSRMap==!0){if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!=1.05){room.setDiscProperties(0,{invMass:1.05,color:`0x${PelotaRS}`})}}else{if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!=1.5){room.setDiscProperties(0,{invMass:1.5,color:`0x${PelotaFutsal}`})}}}
if(game.rsReady==!0&&RSRMap==!1){var players=room.getPlayerList().filter((player)=>player.team!=0);players.forEach(function(player){if(room.getPlayerDiscProperties(player.id).acceleration.toFixed(1)!=0.11){room.setPlayerDiscProperties(player.id,{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5})}})}
if(game.rsReady==!0&&RSRMap==!0){var players=room.getPlayerList().filter((player)=>player.team!=0);players.forEach(function(player){if(room.getPlayerDiscProperties(player.id).invMass.toFixed(1)!=0.3){room.setPlayerDiscProperties(player.id,{invMass:0.3})}})}
if(game.rsActive==!1&&game.rsReady==!0&&(game.rsCorner==!0||game.rsGoalKick==!0)){game.boosterState=!0;game.rsActive=!0;game.rsReady=!1;room.setDiscProperties(1,{x:2000,y:2000});room.setDiscProperties(2,{x:2000,y:2000});room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000;game.warningCount++;if(game.rsCorner==!0){if(room.getDiscProperties(0).y<0){room.setDiscProperties(0,{xgravity:room.getPlayerDiscProperties(player.id).xspeed/35*-1,ygravity:0.05})}else{room.setDiscProperties(0,{xgravity:room.getPlayerDiscProperties(player.id).xspeed/35*-1,ygravity:-0.05})}}
if(game.rsGoalKick==!0){room.setDiscProperties(0,{xgravity:0,ygravity:room.getPlayerDiscProperties(player.id).yspeed/40*-1})}
game.rsCorner=!1;game.rsGoalKick=!1;game.rsCorner2=!1;game.rsGoalKick2=!1;game.outStatus=""}
if(game.outStatus=="redThrow"||game.outStatus=="blueThrow"){game.throwinKicked=!0}
if(map!=="RSR"){}}
var webhookPass='https://discord.com/api/webhooks/816063918781890580/hBOBmjKaR4sJHWNnK-MZIo68r7Np3bxtHf5N43VI-rVkyEYDW6axIXAHKkEDWe4190L3';var ModoChatPausado=[];const CensurarMensajes=['rs','con','real','soccer','creo',' con','  con','   con','    con',' rs','  rs','   rs','    rs','R.S','R.S C.O.N T.I.A','r.s c.o.n t.i.a','c.on','co.n','c.o.n','C.ON','CO.N','C.O.N','r.s c.o.n t.i.a','R_S','R_S C_O_N T_I_A','r_s c_o_n t_i_a','c_on','co_n','c_o_n','C_ON','CO_N','C_O_N','r_s c_o_n t_i_a','R-S C-O-N T-I-A','r-s c-o-n t-i-a','c-on','co-n','c-o-n','C-ON','CO-N','C-O-N','C.REO','CR.EO','CRE.O','c.reo','cr.eo','cre.o','C-REO','CR-EO','CRE-O','c-reo','cr-eo','cre-o','c_reo','cr_eo','cre_o','C_REO','CR_EO','CRE_O','r.s','on','C.on','mogólico','mógolico','mogolíco','mogolicó','mógólícó','MOGÓLICO','MÓGOLICO','MOGOLÍCO','MOGOLICÓ','MÓGÓLÍCÓ','m.ogolico','mo.golico','mog.olico','mogo.lico','mogol.ico','mogoli.co','mogolic.o','M.OGOLICO','MO.GOLICO','MOG.OLICO','MOGO.LICO','MOGOL.ICO','MOOGOLI.CO','MOGOLIC.O','m-ogolico','mo-golico','mog-olico','mogo-lico','mogol-ico','mogoli-co','mogolic-o','M-OGOLICO','MO-GOLICO','MOG-OLICO','MOGO-LICO','MOGOL-ICO','MOOGOLI-CO','MOGOLIC-O','m_ogolico','mo_golico','mog_olico','mogo_lico','mogol_ico','mogoli_co','mogolic_o','M_OGOLICO','MO_GOLICO','MOG_OLICO','MOGO_LICO','MOGOL_ICO','MOOGOLI_CO','MOGOLIC_O','dawn','daun','doun','DÓWN','dówn','dáun','daún','dáún','DAWN','cancerígeno','CANCERÍGENO'];function filter(message){message=message.toLowerCase();message=message.replace(/\s/g,'');message=message.replace(/\./g,' ')
if(message.includes("ఌ")||message.includes("甈")||message.includes("㐷")||message.includes("怅")||message.includes("瘪")||message.includes("⑸")||message.includes("㬆")||message.includes("権")||message.includes("怜")||message.includes("∯")||message.includes("㤒")||message.includes("䉊")||message.includes("匊")||message.includes("ᙻ")||message.includes("ൽ")||message.includes("ᴧ")||message.includes("爂")||message.includes("爇")||message.includes("त")||message.includes("権")||message.includes("怜")||message.includes("∯")||message.includes("㤒")||message.includes("﷽")||message.includes("m0g0l1c")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("䐃")||message.includes("䉧")||message.includes("瀩")||message.includes("琐")||message.includes("䳌")||message.includes("氊")||message.includes("瘠")||message.includes("銡")||message.includes("歘")||message.includes("桋")||message.includes("鼜")||message.includes("窭")||message.includes("谡")||message.includes("輽")||message.includes("怼")||message.includes("霽")||message.includes("椣")||message.includes("䖎")||message.includes("蘗")||message.includes("徠")){return!0}else return!1}
function CensuradorDeSpammeros(message){if(CensurarMensajes.includes(message)){return!0}else return!1}
function pmFun(player,message){var pm=message.substr(4);var index=message.split(" ").slice(1);var playerID=index[0]
var message2=message.substr(5);var message3="[ ID: "+player.id+" - 💬🔒] "+player.name+":"+message2;console.log(playerID);console.log(index);console.log(message);console.log(message2);console.log(message3);room.sendAnnouncement(message3,parseInt(playerID),0xc7a2ff,"bold",2);var players=room.getPlayerList().filter((player)=>player.id!=0);if(players.find((player=>player.id===playerID))){room.sendAnnouncement("❌ Ese ID no funciona, escribe !ids para ver los ID de los jugadores del host.",player.id,0xff3c3c,"normal",0)}else{room.sendAnnouncement("[📨] Mensaje Privado enviado con éxito! ✅",player.id,0x3fff6c,"normal",0)};return!1}
setInterval(function(player,message){var isRoomMuted=!1;isRoomMuted=!1;mutedPlayers=[];room.sendAnnouncement('✅ 💬 Desmutee a todos los jugadores',null,0xd733ff,"normal",0)},1800000);function ListaDeJugadoresFun(player){Jugadores=room.getPlayerList();playersString="";let conn=connections.find(a=>a[1]===player.conn);for(i=0;i<Jugadores.length;i++){playersString=playersString+"      📛 NICKNAME: "+Jugadores[i].name+"          🆔 ID:  "+Jugadores[i].id+"\n"}
room.sendAnnouncement("ID DE LOS JUGADORES DEL HOST:",player.id,0xFFFF00,"normal",1);room.sendAnnouncement(playersString,player.id,0xFFFF00,"normal",1)}
function helpFun(player){var message='📣 COMANDOS DISPONIBLES 📣:\n\n';message='⯌ 💬 CHAT PRIVADO:\n';message+=' CON EQUIPO: "t + Mensaje"    -   CON JUGADOR: "@@Nickname + Mensaje"\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1);setTimeout(function(){message='⯌ 👋 SALIR DEL HOST: !nv    !acomer    !adormir   !bb\n';message+='   Salir de la sala y volver al lobby.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},3000);setTimeout(function(){message='⯌ ❌ VOTAR BAN:      "!expulsar + IDdelJugador"  |    VOTAR JUGADOR PARA QUE SEA ADMIN: "!admin + IDdelJugador" \n';message+='   Inicia una votación para expulsar o hacer administrador a un jugador, para ver los IDs de los jugadores escribe !ids.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},6000);setTimeout(function(){message='👑 ADMINISTRACIÓN DEL HOST: !adminhelp      !mapas      !camisetas      !llamaradmins      !votarmapa" \n';message+='   Utiliza !adminhelp para ver los comandos para Admins. ¿Quieres llamar a un admin? utiliza !llamaradmins\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},9000);setTimeout(function(){message='⯌ 📊 TABLAS Y ESTADÍSTICAS: !me      !stats      !goleadores    !asistidores    !promedios      !mvp      !ganadores      !victorias      !presencias      !viciosos      !racha-actual      !racha-historica      !goles-recibidos      !vallas-invictas      !promedios-recibidos\n';message+='   !me (para ver tus estadísticas) | !stats ID (ver las estadísticas de otro jugador) | Ejemplo: !stats 15 \n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},12000);setTimeout(function(){message='⯌ ACTIVAR Y DESACTIVAR AFK: !afk\n';message+='   Cambiar tu estado a AFK (inactivo) o volver a estar activo.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},15000);setTimeout(function(){message='⯌ 📏 CAMBIAR DE TAMAÑO: "!size + Número"\n';message+='   Cambiar el tamaño del jugador (Número del '+TamanoMinimoPermitido+' al '+TamanoMaximoPermitido+').\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},18000);setTimeout(function(){message='⯌ OTROS:      !poss      !avatar       !numeros      !script      !tutorial      !ids      !niveles\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},21000);setTimeout(function(){message='⯌ ⌚ VER DURACIÓN DEL PARTIDO: !time\n';message+='   Ver la duración establecida del partido y los minutos o segundos de tiempo extra.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},24000);setTimeout(function(){message='⯌ 🏆 TORNEO: !resultados\n';message+='   Ver los resultados del torneo actual.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},27000);setTimeout(function(){message='⯌ AVATAR: !avatar\n';message+='   Ejemplo de uso: !avatar HO,LA | Ejemplo 2: !avatar 😈,👿\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},30000)}
function TutorialFun(player){room.sendAnnouncement('CREÁ TU PROPIO HOST CON BOT:',player.id,0xbfff35,"normal",0);room.sendAnnouncement('VIDEO TUTORIAL: https://youtu.be/Mkh7WcN8pSg',player.id,0xbfff35,"normal",0)}
function ResultadosFun(player){room.sendAnnouncement('🏆 Tabla de posiciones: 🔗'+ChallongeLink+'/standings',player.id,0xbfff35,"small-bold",0)}
function FixtureFun(player){room.sendAnnouncement('🏆 Fixture: 🔗'+ChallongeLink,player.id,0xbfff35,"small-bold",0)}
function ReglamentoFun(player){room.sendAnnouncement('📜 𝐑𝐄𝐆𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐃𝐄𝐋 𝐓𝐎𝐑𝐍𝐄𝐎',player.id,0xbfff35,"small-bold",0);room.sendAnnouncement(regla1,player.id,0xea9999,"small-bold",0);room.sendAnnouncement(regla2,player.id,0xffe800,"small-bold",0);room.sendAnnouncement(regla3,player.id,0xff2e2e,"small-bold",0);room.sendAnnouncement(regla4,player.id,0x2efeb6,"small-bold",0);room.sendAnnouncement(regla5,player.id,0x94e5ff,"small-bold",0)}
function TenisFun(player){room.sendAnnouncement('PUEDES ELEGIR:',player.id,0xE5FF00,"normal",0);room.sendAnnouncement('!tenis-ladrillo',player.id,0xFFAA00,"normal",0);room.sendAnnouncement('!tenis-cemento',player.id,0x0088FF,"normal",0);room.sendAnnouncement('!tenis-pasto',player.id,0x6FFF00,"normal",0)}
function resetFun(player){if(player.admin==!0){room.stopGame();room.startGame()}}
function leaveFun(player,message){if(message=="!nv")
room.kickPlayer(player.id,"Adiós vaquero! 👋",!1);else if(message=="!adormir")
room.kickPlayer(player.id,"💤 Buenas noches!! <3",!1);else if(message=="!bb")
room.kickPlayer(player.id,"👋 Andá máquina nomás, nadie te detiene",!1);else if(message=="!acomer")
room.kickPlayer(player.id,"😋 Bon appetit ! 🍽",!1);}
function swapFun(player){if(player.admin==!0){var players=room.getPlayerList().filter((player)=>player.id!=0);if(players.length==0)return!1;players.forEach(function(player){if(player.team==1){room.setPlayerTeam(player.id,2)}
if(player.team==2){room.setPlayerTeam(player.id,1)}});announce("🔄 Los equipos han cambiado")}else{whisper("Comando solo de administrador",player.id)}}
function MapasFun(player){room.sendAnnouncement('FUTSAL 🟡:  !entrenamientofutsal - !futx2 - !futx3 - !futx4 - !futx5 - !futx5cesped - !futx7 - !realfutsal',player.id,0xd32668,"normal",0);room.sendAnnouncement('CAMPEONES 🏆: !campeones - !premios',player.id,0xd32668,"normal",0)}
function sendAdminMessage(player,message,delay){setTimeout(function(){room.sendAnnouncement(message,player.id,0xffe400,"small",0)},delay)}
function adminHelpFun(player){room.sendAnnouncement('🌟 ¡Bienvenido, administrador! Aquí tienes los comandos que puedes usar:',player.id,0xffbb00,"normal",0);sendAdminMessage(player,'J U G A D O R E S -- A F K ⚡',2000);sendAdminMessage(player,'Ver jugadores AFK: `!afks`',4000);sendAdminMessage(player,'Kickear jugadores AFK: `!kickafks`',6000);sendAdminMessage(player,'B A N E O -- Y -- D E S B A N E O 🚫',8000);sendAdminMessage(player,'Banear IP: `!banip + IpDeJugador`',10000);sendAdminMessage(player,'Desbanear IP: `!unbanip + IpDeJugador`',12000);sendAdminMessage(player,'Desbanear todas las IPs baneadas: `!unbanallips`',14000);sendAdminMessage(player,'Desbanear a todos los jugadores baneados: `!clearbans`',16000);sendAdminMessage(player,'S I L E N C I A R -- Y  -- D E S M U T E A R 🔇',18000);sendAdminMessage(player,'Mutear jugador: `!mute + ID`',20000);sendAdminMessage(player,'Desmutear jugador: `!unmute + ID`',22000);sendAdminMessage(player,'Desmutear a todos los jugadores muteados: `!unmuteall`',24000);sendAdminMessage(player,'Silenciar palabras: `!silenciar + palabra`',26000);sendAdminMessage(player,'Desilenciar palabras: `!desilenciar + palabra`',28000);sendAdminMessage(player,' M O D O S -- D E -- J U E G O 🎮',30000);sendAdminMessage(player,'Activar/Desactivar modo "Juegan Todos": `!juegantodos`',32000);sendAdminMessage(player,'Activar modo "Juegan Algunos": `!juegan <cantidad de jugadores máxima por equipo>`',34000);sendAdminMessage(player,'Desactivar modo "Juegan Algunos": `!juegan-off`',36000);sendAdminMessage(player,'Activar/Desactivar sistema "Gana Sigue": `!ganasigue`',38000);sendAdminMessage(player,'Activar/Desactivar el equilibrio equipos automático: `!auto_balance`',40000);sendAdminMessage(player,'Activar/Desactivar Power Shot: `!powershot`',42000);sendAdminMessage(player,'Activar/Desactivar Modo Automatizado: `!automatizado`',44000);sendAdminMessage(player,'Activar/Desactivar Modo FairPlay: `!fairplay`',46000);sendAdminMessage(player,'Activar/Desactivar Gol de Oro: `!goldeoro`',48000);sendAdminMessage(player,' H O S T -- C O N -- C O N T R A S E Ñ A 🔒',50000);sendAdminMessage(player,'Colocar contraseña: `!set_password + Contraseña`',52000);sendAdminMessage(player,'Quitar contraseña: `!clear_password`',54000);sendAdminMessage(player,' C O M A N D O S -- D E L -- J U E G O 🎲',56000);sendAdminMessage(player,'Reiniciar partido: `!rr`',58000);sendAdminMessage(player,'(SÓLO PARA RS) Cambiar la cantidad de minutos de juego: `!minutos + CantidadDeMinutos`',60000);sendAdminMessage(player,'Mezclar aleatoriamente los equipos: `!random`',62000);sendAdminMessage(player,'Cambiar de lado a los jugadores: `!swap`',64000);sendAdminMessage(player,'`!camisetas` (Ver camisetas disponibles)',74000);sendAdminMessage(player,'Activar/Desactivar el cambio automático de las camisetas: `!clubcolors`',76000);sendAdminMessage(player,'Invertir camisetas de los equipos: `!swapcolors`',78000);sendAdminMessage(player,'Equilibrar equipos por los niveles de los jugadores: `!equilibrar`',80000);sendAdminMessage(player,'Publicidad: `!publicidad <intervalo de minutos> <mensaje>`',82000);sendAdminMessage(player,'COOLDOWN:\n!spam_limit <Cantidad de Mensajes permitidos antes de activar el cooldown> | EJEMPLO: !spam_limit 5\n!cooldown_time <Cantidad de segundos de cooldown después de enviar muchos mensajes> | EJEMPLO: !cooldown_time 10\n!toggle_cooldown Activar/Desactivar Cooldown',82000);sendAdminMessage(player,'Establecer el tiempo de esperar entre cada llamada a los admins: `!minutosllamada <Cantidad de Minutos>`',86000);sendAdminMessage(player,'TAMAÑO JUGADORES: !tamañominimo <número> (Ej: !tamañominimo 10 | !tamañomaximo <número> (Ej: !tamañomaximo 25) | !limitesize <número>` (Ej: !limitesize 2)',88000);sendAdminMessage(player,'O F I C I A L E S:',90000);sendAdminMessage(player,'Activar/Desactivar las firmas: `!ofi`',92000);sendAdminMessage(player,'Para que los jugadores firmen: !firmo',94000)}
function clearbansFun(player){if(player.admin==!0){room.clearBans();room.sendAnnouncement(" [🗑️ 🧹]  Los bans han sido removidos por "+player.name+".",player.id,0xEB172D,"normal",0)}}
function setpasswordFun(player,message){if(player.admin==!0){code=message.substr(14)
room.setPassword(code);room.sendAnnouncement("✳🔒 - "+player.name+" le ha colocado una contraseña al host.",null,0xff8400,'normal',2);return!1}}
function clearpasswordFun(player,message){if(player.admin==!0){room.setPassword();room.sendAnnouncement("🆓🔓 - "+player.name+" ha retirado la contraseña del host.",null,0xff8400,'normal',2);return!1}}
function ReglasFun(player){room.sendAnnouncement("📜 REGLAS DE LOS PENALES:",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒈ Sólo puede haber 1️⃣ (un) arquero.",player.id,0x00FFBB,"normal",1);room.sendAnnouncement("⒉ Los jugadores deben patear en orden. ✨",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒊ El jugador 𝐍𝐎 puede  ″𝙰𝙼𝙰𝙶𝙰𝚁″ en la ejecución del penal.​​",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("👨‍⚖️ Si incumple con ésta regla pero erra el penal, no hace falta repetir la ejecución.",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("Caso contrario, si el jugador amaga y convierte el penal, deberá ejecutarlo nuevamente. ⚖​ 🔁",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒋ Si un equipo tiene menos de 4 jugadores, tienen derecho a decidir si uno de ellos patea dos veces o eligen a un espectador.",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒌ No vale invadir el área mientras un jugador está por patear. 🚫",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒍ Si se ejecutaron todos los penales y aún persiste el empate:",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("Los arqueros deberán enfrentarse entre ellos hasta 5️⃣ v̲e̲c̲e̲s̲ c̲o̲m̲o̲ m̲á̲x̲i̲m̲o̲. ",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("Y si el empate persiste, t̲o̲d̲o̲s̲ l̲o̲s̲ j̲u̲g̲a̲d̲o̲r̲e̲s̲ d̲e̲b̲e̲r̲á̲n̲ p̲a̲t̲e̲a̲r̲ l̲o̲s̲ p̲e̲n̲a̲l̲e̲s̲ n̲u̲e̲v̲a̲m̲e̲n̲t̲e̲.",player.id,0x00FFBB,"normal",0)}
const inactivityTimeout=MinutosPermitidosAFK*60*1000;const playerInactivity=new Map();function checkAutoKickAFKs(){const afkNonAdmins=room.getPlayerList().filter(p=>afkPlayerIDs.has(p.id)&&!p.admin);if(afkNonAdmins.length>=LimiteMaximoDeJugadoresAFK){afkNonAdmins.forEach(p=>{room.kickPlayer(p.id,"⚠️ Muchos jugadores AFK",!1);afkPlayerIDs.delete(p.id);playerInactivity.delete(p.id)});room.sendAnnouncement("🚨 Se expulsaron automáticamente a jugadores AFK porque se superó el límite permitido. 🛑",null,0xff0000,'bold',2)}}
function afkFun(player,message){if(player.admin){if(afkPlayerIDs.has(player.id)){clearTimeout(playerInactivity.get(player.id));playerInactivity.delete(player.id);afkPlayerIDs.delete(player.id);if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;room.setPlayerTeam(player.id,blueTeamCount<=redTeamCount?1:2)}
room.sendAnnouncement("🚀 ¡"+player.name+" volvió y está listo para jugar! 🎮",null,0x00FFBB,"bold",0)}else{afkPlayerIDs.add(player.id);checkAutoKickAFKs();room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡"+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[player.id]){playerPositions[player.id].lastUpdateTime=Date.now()}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000);const admins=room.getPlayerList().filter(admin=>admin.admin);const adminNames=admins.map(admin=>admin.name).join(", ");setTimeout(()=>{const msg=admins.length>0?`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`:"📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.";room.sendAnnouncement(msg,null,0x00FFBB,'bold',0)},3000);if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}}}else{if(afkPlayerIDs.has(player.id)){clearTimeout(playerInactivity.get(player.id));playerInactivity.delete(player.id);afkPlayerIDs.delete(player.id);if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;room.setPlayerTeam(player.id,blueTeamCount<=redTeamCount?1:2)}
room.sendAnnouncement("🚀 ¡"+player.name+" volvió y está listo para jugar! 🎮",null,0x00FFBB,"bold",0)}else{afkPlayerIDs.add(player.id);checkAutoKickAFKs();const inactivityTimer=setTimeout(()=>{room.kickPlayer(player.id,"⌛️ EXPULSADO por INACTIVIDAD 😴🚫",!1);playerInactivity.delete(player.id)},inactivityTimeout);playerInactivity.set(player.id,inactivityTimer);room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡"+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[player.id]){playerPositions[player.id].lastUpdateTime=Date.now()}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000);setTimeout(()=>{room.sendAnnouncement("🚨 ¡ATENCIÓN! Si te quedas AFK por "+MinutosPermitidosAFK+" MINUTOS ⌛, serás EXPULSADO del host. 🛑",player.id,0xff8400,'small-bold',2)},1500);setTimeout(()=>{room.sendAnnouncement("📌   RECUERDA QUE:        ⚠️ Si el administrador lo decide, puede echarte del host usando !kickafks. ⚠️",player.id,0xff8400,'small-bold',2)},2000);const admins=room.getPlayerList().filter(admin=>admin.admin);const adminNames=admins.map(admin=>admin.name).join(", ");setTimeout(()=>{const msg=admins.length>0?`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`:"📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.";room.sendAnnouncement(msg,null,0x00FFBB,'bold',0)},3000);if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}}}}
function afksFun(player,message){const afkPlayers=room.getPlayerList().filter(player=>afkPlayerIDs.has(player.id));if(afkPlayers.length===0){room.sendAnnouncement("❎ No hay jugadores AFK en este host. ¡Todos están listos para jugar!",player.id,0x00FFBB,"bold",0)}else{const afkPlayersString=afkPlayers.map(player=>player.name).join(", ");room.sendAnnouncement("💤 Jugadores AFK: "+afkPlayersString,player.id,0x00FFBB,"bold",0)}}
function kickafksFun(player,message){if(player.admin){const adminName=player.name;const afkPlayers=room.getPlayerList().filter(x=>afkPlayerIDs.has(x.id));for(const afkPlayer of afkPlayers){if(!afkPlayer.admin){room.kickPlayer(afkPlayer.id,"⚠️ ¡Expulsado por "+adminName+" por estar AFK!",!1)}}}}
function initBallCarrying(redTeam,blueTeam){var ballCarrying=new Map();var playing=redTeam.concat(blueTeam);for(var i=0;i<playing.length;i++){ballCarrying.set(playing[i].name,[0,playing[i].team])}
return ballCarrying}
function updateTeamPoss(value){if(value[1]==1)redPoss+=value[0];if(value[1]==2)bluePoss+=value[0]}
var bluePoss;var redPoss;var timeOnHalves;function PosesionBalonFun(player,message){if(room.getScores()==null)return!1;bluePoss=0;redPoss=0;ballCarrying.forEach(updateTeamPoss);var redPossPercent=Math.round((redPoss/(redPoss+bluePoss+0.000001))*100);var bluePossPercent=Math.round((bluePoss/(redPoss+bluePoss+0.000001))*100);var totalPosesion=posesionEquipoA+posesionEquipoB;var porcentajeEquipoA=totalPosesion===0?0:(posesionEquipoA/totalPosesion)*100;var porcentajeEquipoB=totalPosesion===0?0:(posesionEquipoB/totalPosesion)*100;var mensaje='Posesión de balón ⚽ 𒁂 [ 🔴 '+teamRed+': '+porcentajeEquipoA.toFixed(2)+'% ] 🆚 [ 🔵 '+teamBlue+': '+porcentajeEquipoB.toFixed(2)+'% ] 𒁂';room.sendAnnouncement(mensaje,player.id,0xc2ff33,"bold",0);var timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var timeAnnouncement='Pelota en campo ⚽ 𒁂 [ 🔴 '+teamRed+' '+timeOnRedHalf+'% ] 🆚 [ 🔵 '+teamBlue+' '+timeOnBlueHalf+'% ] 𒁂';room.sendAnnouncement(timeAnnouncement,player.id,0xc2ff33,"bold",0)}
function teamPossFun(player,message){if(room.getScores()==null)return!1;bluePoss=0;redPoss=0
ballCarrying.forEach(updateTeamPoss);var redPossPercent=Math.round((redPoss/(redPoss+bluePoss+0.000001))*100);var bluePossPercent=Math.round((bluePoss/(redPoss+bluePoss+0.000001))*100);var totalPosesion=posesionEquipoA+posesionEquipoB;var porcentajeEquipoA=totalPosesion===0?0:(posesionEquipoA/totalPosesion)*100;var porcentajeEquipoB=totalPosesion===0?0:(posesionEquipoB/totalPosesion)*100;var AnuncioPosesion='Posesión de balón ⚽ 𒁂 [ 🔴 '+teamRed+': '+porcentajeEquipoA.toFixed(2)+'% ] 🆚 [ 🔵 '+teamBlue+': '+porcentajeEquipoB.toFixed(2)+'% ] 𒁂';room.sendAnnouncement(AnuncioPosesion,null,0xc2ff33,"bold",0);var timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var AnuncioPelotaEnCampo='Pelota en campo ⚽ 𒁂 [ 🔴 '+teamRed+' '+timeOnRedHalf+'% ] 🆚 [ 🔵 '+teamBlue+' '+timeOnBlueHalf+'% ] 𒁂';room.sendAnnouncement(AnuncioPelotaEnCampo,null,0xc2ff33,"bold",0)}
function BanIpFun(player,message){if(player.admin==!0){let ipToAdd=message.substr(7);const NickDelJugador=getPlayerNameByIP(ipToAdd);if(!IpPlayers.includes(ipToAdd)){IpPlayers.push(ipToAdd);room.sendAnnouncement(`El Administrador ${player.name} ha añadido la IP de ${NickDelJugador} a la Blacklist`,null,0x05ff02,"normal",0);const targetPlayer=room.getPlayerList().find(p=>p.name===NickDelJugador);if(targetPlayer){room.kickPlayer(targetPlayer.id,MensajeBaneoPorIp,!0)}else{room.sendAnnouncement(`Admin ${player.name}: La forma correcta de usar !banip es: !banip <IP del Jugador> | Ejemplo: !banip 123.456.789`,player.id,0xFF5252,"normal",0);room.sendAnnouncement(`Para ver la IP de un jugador, utiliza el comando: !ip NICKNAME DEL JUGADOR | Ejemplo: !ip Lionel Messi #10`,player.id,0x05ff02,"normal",0)}}}}
function unBanIpFun(player,message){if(player.admin==!0){let ipToRemove=message.substr(9);const NickDelJugador=getPlayerNameByIP(ipToRemove);let pos=IpPlayers.indexOf(ipToRemove);if(pos!==-1){IpPlayers.splice(pos,1);room.sendAnnouncement(`El Administrador ${player.name} ha retirado la IP de ${NickDelJugador} de la Blacklist`,null,0x05ff02,"normal",0)}}}
function getPlayerNameByIP(ip){const playerInfo=playerIPs.find(info=>info.ip===ip);return playerInfo?playerInfo.nickname:"Jugador Desconocido"}
var JugadoresBaneadosXIp=!1;function unBanAllIpsFun(player,message){if(player.admin==!0){JugadoresBaneadosXIp=!1;IpPlayers=[];room.clearBans();room.sendAnnouncement("[✅ 🔓] "+player.name+" ha eliminado la lista de jugadores baneados por IP.",null,0xd733ff,"normal",0)}}
function pushMute(playerId,duration,adminName){const targetPlayer=room.getPlayer(playerId);if(targetPlayer){const muteTime=duration===Infinity?Infinity:Date.now()+(duration*60*1000);mutedPlayers[targetPlayer.name]={muteTime:muteTime,admin:adminName};var announcement;if(duration===Infinity){announcement="🔇 "+targetPlayer.name+" ha sido MUTEADO 🤐 indefinidamente por "+adminName+"."}else{announcement="🔇 "+targetPlayer.name+" ha sido MUTEADO 🤐 por "+duration+" minutos por "+adminName+"."}
room.sendAnnouncement(announcement,null,0xFF0000,"bold",0)}else{var usageMessage="❗️ No se encontró ningún jugador con el ID especificado. Por favor, asegúrate de usar el formato correcto: !mute ID [duration] ❗️";room.sendAnnouncement(usageMessage,null,0xFF0000,"bold",2)}}
function unmuteFun(player,message){if(player.admin===!0){const spacePos=message.search(" ");const targetPlayerId=parseInt(message.substr(spacePos+1));if(isNaN(targetPlayerId)||spacePos===-1){var usageMessage="❗️ Uso incorrecto del comando !unmute. Por favor, asegúrate de usar el formato correcto: !unmute ID ❗️";room.sendAnnouncement(usageMessage,player.id,0xFF0000,"bold",2);return}
const targetPlayer=room.getPlayer(targetPlayerId);if(targetPlayer){delete mutedPlayers[targetPlayer.name];var announcement="🔊 "+targetPlayer.name+" ha sido DESMUTEADO 🔓 por "+player.name+" 🔊";room.sendAnnouncement(announcement,null,0x00FF00,"bold",0)}}}
var isRoomMuted=!1;function UnmuteAll(player,message){if(player.admin==!0){isRoomMuted=!1;mutedPlayers=[];room.sendAnnouncement("📣 "+player.name+" ha desmuteado a todos los jugadores. 🗣️🔓",null,0x32cd32,"bold",0)}}
function EspecialesFun(player){room.sendAnnouncement('⎝༽  | ︻╦̵̵╤── | ඞ |  ⊹ | ✧ | ✦ | ツ | ♬ | ᕦ( ͡° ͜ʖ ͡°)ᕤ | 乡 | 『』 | 卍 | 〘〙| ༒ |  ௵ | 々| 𒆜 | 𒐫 | 𒈞',player.id,0xFF003C,"normal",0)}
function NumeroUnoFun(player){room.sendAnnouncement('🔢  𝟭         ౹         𝟏          𝟷          𝟣         １         ߗ1𐰯¹₁⥠↿˥⒈         𝟏        𝟷𐰯 І        Ι         Ӏ        ᅵ        𝗹        ।         ⅂        𐐑        ⓵        ①         ➀         ➊         ⅼ   para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroDosFun(player){room.sendAnnouncement('🔢  𝟮        Ƨ        2️⃣        ౽        ੨ 	       ૨        ২        २        ௨        𝟐        ２        2        ᒿ        𝟤        ᒾ        ²        ₂        շ        𝟸        ᘖ        𝟚        Ձ        ⒉        ƻ        Չ        Զ        ϩ        ⓶        ②        ➁        ❷        ㈃        ⒛ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroTresFun(player){room.sendAnnouncement('🔢  Ʒ        3        3️⃣        ३        ੩        ʒ        ӡ        Ӡ        ᴣ        ᶾ        э        Э        ℈        ぅ        う        ㄋ        ȝ        Ȝ        𝟯        𝟥        з        ɜ        ᴈ        ᢃ        ౩        ⓷        ③        ➂        ❸        ੩        ૩        ३ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroCuatroFun(player){room.sendAnnouncement('🔢  𝟰        ㏣        ㍜        𝟒        ４        𝟺        𝟦        4        ₄        ⁴        Ϥ        կ        Կ        Ч        ч        ɥ        ౺        ⒋ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroCincoFun(player){room.sendAnnouncement('🔢  Ƽ        ƽ        𐐠        𐑈        𝟱        𝟓        ５        ㏤        5        ㍝        5️⃣        𝟻        5        ₅        ⁵        ⒌ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroSeisFun(player){room.sendAnnouncement('🔢  𝟲        𝟔        ６        𝟼        ㏥        ㍞        6        𝟨        ₆        ⁶        𝟞        ⒍        ⑥        ⓺        ➅        ➏        ❻        ɓ        ꕃ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroSieteFun(player){room.sendAnnouncement('🔢 𐓒        𐒇        ⅂        𐐑        ヿ        ⏋        ⌉        𝟳        𝟕        𝟟        7        𝟽        ７        ⁊        ₇        ⁷        𝟩        7️⃣        ⒎        ꔔ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroOchoFun(player){room.sendAnnouncement('🔢  𝟴        𝟖        8        𝟪        ৪        ⁸        ₈        ８        𐌚        𝟾        ꖉ        ⊟        𝛉        ⒏        ㏧        ㍠        8️⃣ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroNueveFun(player){room.sendAnnouncement('🔢  𝟵        𝟗        9        𝟿        ９        𝟫        ⁹        ₉        ୨        ց        ɡ        ᕤ        ⒐        9        ㏨        ㍡        9️⃣        𝟡        ۹        ٩        ᑫ        ᑴ        𐒘 para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroDiezFun(player){room.sendAnnouncement('🔢  ⒑        🔟        ⑩        ➉        ➓        ❿        ю        Ю        ㍢        ㏩        ⑽ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function LinkDiscordFun(player){room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ",player.id,0x7289da,"normal",0)
room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ",player.id,0x7289da,"normal",0)
room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ",player.id,0x7289da,"normal",0);room.sendAnnouncement("                                        💬👥 𝑼𝑵𝑨𝑵𝑺𝑬 𝑨𝑳 𝑫𝑰𝑺𝑪𝑶𝑹𝑫 ➡ "+DiscordLink+" ⬅",player.id,0xF6FF43,"normal",0)}
function LinkTwitchFun(player){room.sendAnnouncement("                                        ▀▀█▀▀ ▒█░░▒█ ▀█▀ ▀▀█▀▀ ▒█▀▀█ ▒█░▒█  ",player.id,0x9146FF,"normal",0)
room.sendAnnouncement("                                        ░▒█░░ ▒█▒█▒█ ▒█░ ░▒█░░ ▒█░░░ ▒█▀▀█  ",player.id,0x9146FF,"normal",0)
room.sendAnnouncement("                                        ░▒█░░ ▒█▄▀▄█ ▄█▄ ░▒█░░ ▒█▄▄█ ▒█░▒█ ",player.id,0x9146FF,"normal",0);room.sendAnnouncement("                                        💜🎮 𝑼𝑵𝑬𝑻𝑬 𝑨 𝑻𝑾𝑰𝑻𝑪𝑯 ➡ "+TwitchLink+" ⬅",player.id,0xF6FF43,"normal",0)}
function LinkYoutubeFun(player){room.sendAnnouncement("                                        ▒█░░▒█ ▒█▀▀▀█ ▒█░▒█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀   ",player.id,0xe52d27,"normal",0)
room.sendAnnouncement("                                        ▒█▄▄▄█ ▒█░░▒█ ▒█░▒█ ░▒█░░ ▒█░▒█ ▒█▀▀▄ ▒█▀▀▀   ",player.id,0xe52d27,"normal",0)
room.sendAnnouncement("                                        ░░▒█░░ ▒█▄▄▄█ ░▀▄▄▀ ░▒█░░ ░▀▄▄▀ ▒█▄▄█ ▒█▄▄▄ ",player.id,0xe52d27,"normal",0);room.sendAnnouncement("                                        🔴📺 𝑼𝑵𝑬𝑻𝑬 𝑨 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 ➡ "+YoutubeLink+" ⬅",player.id,0xF6FF43,"normal",0)}
function LinkScriptFun(player){var ColoresRandomBot2=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom2=ColoresRandomBot2[(Math.random()*ColoresRandomBot2.length)|0]
room.sendAnnouncement('❔ SERVIDOR PARA REALIZAR CONSULTAS: discord.gg/tDEUbJU8QB',player.id,GeneradorColoresRandom2,"normal",0);room.sendAnnouncement('📺 VIDEOTUTORIAL: youtu.be/xkgB_5V7BZk?si=RNG3LmGOh1EnKAaY',player.id,GeneradorColoresRandom2,"normal",0);room.sendAnnouncement('🔗 LINK DEL SCRIPT: bit.ly/GLH-Script',player.id,GeneradorColoresRandom2,"normal",0)}
function AvatarNumerosFun(player){var ColoresRandomBot2=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom2=ColoresRandomBot2[(Math.random()*ColoresRandomBot2.length)|0]
room.sendAnnouncement('Para ver números para tu avatar escribe !1, !2, !3, !4, !5, !6, !7, !8, !9 o !10.',player.id,GeneradorColoresRandom2,"normal",0)}
function TamanoJugadorFun(player){var ColoresRandomBot2=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom2=ColoresRandomBot2[(Math.random()*ColoresRandomBot2.length)|0]
room.sendAnnouncement('🏀 ¡Elige el tamaño de tu jugador! 📏 \n\nPara ajustar el tamaño de tu jugador, escribe "!size Número". Debe ser un número entre '+TamanoMinimoPermitido+' y '+TamanoMaximoPermitido+', siendo 15 el tamaño normal. \n\n🔽 Cuanto más pequeño sea el número, más pequeño será tu jugador. \n\n🔼 Si colocas un número grande, ¡tu jugador será más grande! 🎉',player.id,GeneradorColoresRandom2,"normal",0);room.sendAnnouncement('Ejemplo: !size 12',player.id,0x34F73A,"normal",0)}
var cantidadDeCambios={};function changeOurSize(player,message){const DEFAULT_SIZE=15;var MIN_SIZE=TamanoMinimoPermitido;var MAX_SIZE=TamanoMaximoPermitido;if(player.team!==0&&(!tookASize.hasOwnProperty(player.id)||cantidadDeCambios[player.id]<CantidadCambiarTamano)){let size=message.substr("!size ".length);if(!isNaN(size)&&size>=MIN_SIZE&&size<=MAX_SIZE){let invMass=Math.max(0.01,0.5+(DEFAULT_SIZE-size)*0.02);room.setPlayerDiscProperties(player.id,{radius:size,invMass:invMass});tookASize[player.id]=size;cantidadDeCambios[player.id]=(cantidadDeCambios[player.id]||0)+1;room.sendAnnouncement("📏 ¡Tu tamaño ha sido cambiado a "+size+"! ⚽️",player.id,0xbfff35,"normal",0);let cambiosRestantes=CantidadCambiarTamano-cantidadDeCambios[player.id];if(cambiosRestantes>0){let mensajeCambio=(cambiosRestantes===1)?"vez":"veces";room.sendAnnouncement("🔄 ¡Puedes cambiar tu tamaño "+cambiosRestantes+" "+mensajeCambio+" más por partido! ⚽️",player.id,0xbfff35,"normal",0)}else{room.sendAnnouncement("🔄 ¡Ya no puedes cambiar tu tamaño más por partido! ⚽️",player.id,0xbfff35,"normal",0)}}else{room.sendAnnouncement("📏 ¡Personaliza tu tamaño por el que quieras! 🏀\nSolo escribe !size seguido de un número entre "+MIN_SIZE+" y "+MAX_SIZE+" para ajustar tu tamaño. 😄 Si escribes !size 12, por ejemplo, te volverás más pequeño. El tamaño que tienen por defecto es 15.\n¡Diviértete jugando! 🎉",player.id,0xbfff35,"normal",0)}}else{if(cantidadDeCambios[player.id]>=CantidadCambiarTamano){room.sendAnnouncement("🔄 ¡Ya has alcanzado el límite de cambios de tamaño por partido! ⚽️\nRecuerda que solo puedes cambiar tu tamaño "+CantidadCambiarTamano+" vez por partido. ¡Elige sabiamente! 🎉",player.id,0xbfff35,"normal",0)}else{let cambiosRestantes=CantidadCambiarTamano-cantidadDeCambios[player.id];let mensajeCambio=(cambiosRestantes===1)?"vez":"veces";room.sendAnnouncement("🔄 ¡Puedes cambiar tu tamaño "+cambiosRestantes+" "+mensajeCambio+" más por partido! ⚽️",player.id,0xbfff35,"normal",0)}}
return!1}
function InvertirColores(player){if(player.admin==!0){room.setTeamColors(1,blueAngle,blueTextColor,blueColor);room.setTeamColors(2,redAngle,redTextColor,redColor);room.sendAnnouncement("[🔄👕] ¡Camisetas intercambiadas con éxito!",null,0x00FF00,"bold",2);let saveCamiAngle=blueAngle;let saveCamiColor=blueColor;let saveCamiText=blueTextColor;blueAngle=redAngle;blueTextColor=redTextColor;blueColor=redColor;redAngle=saveCamiAngle;redColor=saveCamiColor;redTextColor=saveCamiText;let tempTeamName=teamRed;teamRed=teamBlue;teamBlue=tempTeamName}}
function UEFAFun(player){room.sendAnnouncement("UEFA 🌍: !premierleague ✦ !ligue1 ✦  !bundesliga ✦ !seriea ✦ !serieb ✦ !laliga ✦ !eredivisie ✦ !primeiraliga ✦ !superlig ✦ !campeonatoruso ✦ !1hnl ✦ !premierucrania  !superligasuiza ✦ !nb1 ",player.id,0xea9999,"bold",0)}
function CONMEBOLFun(player){room.sendAnnouncement("CONMEBOL 🌎: !primera ✦ !ascenso ✦ !brasileirao ✦ !campeonatouruguayo ✦ !ligaparaguaya ✦ !ligaaguila ✦ !ligapro ✦ !liga1peru ✦ !campeonatochileno ✦ !ligaboliviana ✦ !ligavenezolana",player.id,0xa4c2f4,"bold",0)}
function CONCACAFFun(player){room.sendAnnouncement("CONCACAF 🌎: !ligamx ✦ !mls",player.id,0xffd966,"bold",0)}
function CamisetasFun(player){room.sendAnnouncement("!UEFA 🌍✦ !CONMEBOL 🌎✦ !CONCACAF 🌎✦ !paises 🌐✦ !fantasmas  👻 ✦ !amateurs 🛡✦ !superheroes 🦸 | !haxball | !esports",player.id,0xb4a7d6,"bold",0);setTimeout(function(){var paso1="📢 ¡Hola! ¿Quieres jugar con la camiseta de tu equipo favorito? Es muy fácil, sigue estos pasos:\n\n";paso1+="1️⃣ Escribe las letras abreviadas de tu equipo (por ejemplo, riv para River Plate, boc para Boca Juniors, arg para Argentina, bra para Brasil, etc.) 🏟️";room.sendAnnouncement(paso1,player.id,0xffffff,"bold",0)},5000);setTimeout(function(){var paso2="2️⃣ Luego, escribe qué tipo de camiseta deseas (titular, alternativa, tercera, clásica o bandera para selecciones nacionales) 🌟";room.sendAnnouncement(paso2,player.id,0xffffff,"bold",0)},8000);setTimeout(function(){var paso3="3️⃣ Por último, elige si quieres la camiseta para el equipo rojo 🔴 (red) o azul 🔵(blue)";room.sendAnnouncement(paso3,player.id,0xffffff,"bold",0)},11000);setTimeout(function(){var ejemplo="\nPor ejemplo, si quieres ver la camiseta titular de River Plate en el equipo rojo, escribe: riv/titular/red";ejemplo+="\nSi quieres la camiseta titular de Boca Juniors en el equipo azul, escribe: boc/titular/blue";ejemplo+="\nRecuerda poner el símbolo '/' entre cada parte del comando.";room.sendAnnouncement(ejemplo,player.id,0xffffff,"bold",0)},14000);setTimeout(function(){var final="\n¡Y listo! 🎉 Verás la camiseta del equipo que elegiste en el equipo que quieras. ¡Disfruta representando a tu equipo favorito! ⚽️👕";room.sendAnnouncement(final,player.id,0xffffff,"bold",0)},17000)}
function SuperHeroesFun(player){room.sendAnnouncement("💪 SUPERHÉROES: ",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("MARVEL: SPIDERMAN | HULK | CAPITANAMERICA",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("DC: BATMAN",player.id,0xfaebd6,"bold",0)}
function FantasmasFun(player){room.sendAnnouncement("📜 👻 EQUIPOS FANTASMAS: ",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("🌍 exSelecciones:  | URSS | YUG | CZE",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("🛡 exClubes: | ALU | LOA | OCFC | BAC | ROAC | CAPORT",player.id,0xfaebd6,"bold",0)}
function SuperligaFun(player){room.sendAnnouncement("🅰 PRIMERA DIVISIÓN: | RIV | BOC | RAC | IND | SLO | EST | VEL | LAN | DYJ",player.id,0xADF4FF,"bold",0);room.sendAnnouncement(" | AAAJ | NOB | CEN | ARSE | BAND | TAL | CSF | HUR | GIM ",player.id,0xADF4FF,"bold",0);room.sendAnnouncement(" | UNI | ALD | ATU | CCS | GOD | PAT | BARR | TIG | PLA | SAR",player.id,0xADF4FF,"bold",0)}
function AscensoFun(player){room.sendAnnouncement('🅱 ASCENSO: | ALB | FCO | CHA | ATL |  SMT | OLP | BEL | QUI | MOR | NCH | ALM | SMSJ | ABROWN',player.id,0xDB1414,"bold",0);room.sendAnnouncement('| DOC | SCH | RIE | AGR | ALV | STEL​ | MER | AdQ | CJA | GyT | CADU | VSC | EBA | BOCHZ | CDE | SIT | MDY | CDN | LAF | SM | DOU',player.id,0xDB1414,"bold",0)}
function EquiposAmateursFun(player){room.sendAnnouncement('🔰 AMATEURS (LIGAS BARRIALES) : | CDYBGR',player.id,0xDB1414,"bold",0)}
function CampeonatoChilenoFun(player){room.sendAnnouncement("(🇨🇱) CAMPEONATO CHILENO:  | CCO | UDC | UCA | CDP | COB | EVDM | ULC |",player.id,0xFF2A12,"bold",0);room.sendAnnouncement("| AUD | HUA | IQU | OHI | UES | SWA | CUR | CDA | UCON | DLS | COQ",player.id,0xFF2A12,"bold",0)}
function LigaBolivianaFun(player){room.sendAnnouncement("(🇧🇴) LIGA BOLIVIANA:  | BLV | STG | WTM | PET | ALWR",player.id,0x5ACC31,"bold",0)}
function MLSFun(player){room.sendAnnouncement("(🇺🇸) MLS: | LA | TOFC | NYC | ATLU | LAFC | SEA | NYRB | PTIM | ORL | MIA",player.id,0x1930FF,"bold",0)}
function LigaUruguayaFun(player){room.sendAnnouncement('(🇺🇾) CAMPEONATO URUGUAYO: | NAC | PEN | DAN | RAM | RIU | WAN | MCT | CRL | DFS | PCOL',player.id,0x69CDFF,"bold",0)}
function CampeonatoRusoFun(player){room.sendAnnouncement('(🇷🇺) CAMPEONATO RUSO: | SPM | CSK | ZEN | LOK | DIN',player.id,0xe11a22,"bold",0)}
function PremierUcranianaFun(player){room.sendAnnouncement('(🇺🇦) LIGA PREMIER UCRANIA: | SHA | DYK | NYV',player.id,0xFFF954,"bold",0)}
function LaLigaFun(player){room.sendAnnouncement('(🇪🇸) LALIGA: | RMA | BAR | ATM | SEV | VIL | VAL | ATH | GET | CEL | BET | LEV | RAY | RCDE | MLL',player.id,0xFF2A00,"bold",0)}
function LigaAguilaFun(player){room.sendAnnouncement('(🇨🇴) LIGA ÁGUILA: | ATN | MIL | AME | SFE | CAL | ONC | DEPTOL',player.id,0xFFE959,"bold",0)}
function LigaParaguayaFun(player){room.sendAnnouncement('(🇵🇾) LIGA PARAGUAYA: | CCP | OLI | GUA | LIB',player.id,0xa3a3a3,"bold",0)}
function SerieATIMFun(player){room.sendAnnouncement('(🇮🇹) SERIE A: | JUV | INT | ACM | ATA | NAP | LAZ | ROM | FIO | TOR | GEN | PLM | CHVER',player.id,0x6699FF,"bold",0)}
function SerieBItaliaFun(player){room.sendAnnouncement('(🇮🇹) SERIE B: | VENFC',player.id,0x6699FF,"bold",0)}
function BrasilLeagueFun(player){room.sendAnnouncement('(🇧🇷) BRASILEIRAO: SAO | SAN | CRU | FLA | PAL | CAM | SCI | GRE | COR | BOT | PAR | FLU | VAS | FORT | RBB | AMCMIN',player.id,0xF7FF19,"bold",0)}
function PremierLeagueFun(player){room.sendAnnouncement('(🇬🇧) PREMIER LEAGUE: MCI | LIV | CHE | MUN | TOT | LEI | ARS | EVE | WHU | WOL | AVL | NEW | SOU | WAT | CRY | LEE | FUL | WBA | HUL',player.id,0xFFFFFF,"bold",0)}
function SuperLigFun(player){room.sendAnnouncement('(🇹🇷) SUPER LIG: | GS | FB | BJK ',player.id,0xFA0000,"bold",0)}
function LigaVenezolanaFun(player){room.sendAnnouncement('(🇻🇪) Liga Venezolana: TACH | CARC | MNG | DLAR',player.id,0xF7FF19,"bold",0)}
function PaisesFun(player){room.sendAnnouncement('🌍 EUROPA: FRA | ALE | ITA | ESP | ING | BELG | POR | HOL | CRO | | GAL | RUS | SWE | SUI | AUT | UKR | POL | MAR | SRB | TUN | DEN',player.id,0x5793FA,"bold",0);room.sendAnnouncement('🌎 AMÉRICA: BRA | ARG | COL | URU | CHI | USA  | MEX | ECU | PGY | PER | VEN | BOL | CAN | CRC',player.id,0x5793FA,"bold",0);room.sendAnnouncement('🌏 ASIA y OCEANIA: JAP | QAT | CNO | NZE | IRN | KOR | KSA | AUS',player.id,0x5793FA,"bold",0);room.sendAnnouncement('🌍 AFRICA: NGA | CDM | CMR | SEN | GHA',player.id,0x5793FA,"bold",0)}
function BundesligaFun(player){room.sendAnnouncement('(🇩🇪) BUNDESLIGA: | FCB | BVB | RBL | B04 | HSV',player.id,0xF5FAF8,"bold",0)}
function EredivisieFun(player){room.sendAnnouncement('(🇳🇱) EREDIVISIE: | AJA | FEY | PSV | WIL',player.id,0xFA6400,"bold",0)}
function Ligue1Fun(player){room.sendAnnouncement('(🇫🇷) LIGUE 1: | PSG | OGC | OM | OL | ASM | FCN | REN | STE',player.id,0x3744FA,"bold",0)}
function LigaMXFun(player){room.sendAnnouncement('(🇲🇽) LIGA MX: | AMC | CHV | CRUZ | TGS | MTY',player.id,0x75FF59,"bold",0)}
function LigaProFun(player){room.sendAnnouncement('(🇪🇨) LIGA PRO: | LDU | BSC | EME | IDV | DEPUCA',player.id,0xFAFF5C,"bold",0)}
function RaiffeisenSuperLeagueFun(player){room.sendAnnouncement('(🇨🇭) RAIFFEISEN SUPER LEAGUE: | BAS | ',player.id,0xFF0A0A,"bold",0)}
function Liga1PeruFun(player){room.sendAnnouncement('(🇵🇪) LIGA 1: | UNV | ALI | CRI | MEL | UCV',player.id,0xFF1C1C,"bold",0)}
function PrimeiraLigaFun(player){room.sendAnnouncement('(🇵🇹) Primeira Liga: | BEN | SPO | FCP | SCB',player.id,0xFF3B3B,"bold",0)}
function EquiposEsportsFun(player){room.sendAnnouncement("(🎮) EQUIPOS ESPORTS:  | FURIA | ISURUS | 9Z | KUNISPORT | TRONCOS | PORCINOS | SAIYANS | BARRIO | ANIQUILADORES |",player.id,0x00FF00,"bold",0);room.sendAnnouncement("| JIJANTES | MOSTOLES | RAYO | XBUYER | 1K | FURIUS | PIO |",player.id,0x00FF00,"bold",0)}
var comandosGLH={"!swapcolors":InvertirColores,"!help":helpFun,"!ayuda":helpFun,"!ids":ListaDeJugadoresFun,"!tutorial":TutorialFun,"!resultados":ResultadosFun,"!reglamento":ReglamentoFun,"!fixture":FixtureFun,"!size":changeOurSize,"!tamaño":TamanoJugadorFun,"!discord":LinkDiscordFun,"!youtube":LinkYoutubeFun,"!twitch":LinkTwitchFun,"!script":LinkScriptFun,"!avatar":AvatarNumerosFun,"!numeros":AvatarNumerosFun,"!1":NumeroUnoFun,"!especiales":EspecialesFun,"!2":NumeroDosFun,"!3":NumeroTresFun,"!4":NumeroCuatroFun,"!5":NumeroCincoFun,"!6":NumeroSeisFun,"!7":NumeroSieteFun,"!8":NumeroOchoFun,"!9":NumeroNueveFun,"!10":NumeroDiezFun,"!banip":BanIpFun,"!unbanip":unBanIpFun,"!unbanallips":unBanAllIpsFun,"!unmuteall":UnmuteAll,"!afk":afkFun,"!poss":PosesionBalonFun,"!afks":afksFun,"!kickafks":kickafksFun,"!reglas":ReglasFun,"!clearbans":clearbansFun,"!clear_password":clearpasswordFun,"!swap":swapFun,"!tenis":TenisFun,"!mapas":MapasFun,"!rr":resetFun,"!nv":leaveFun,"!bb":leaveFun,"!adormir":leaveFun,"!acomer":leaveFun,"!camisetas":CamisetasFun,"!ksk":CamisetasFun,"!conmebol":CONMEBOLFun,"!uefa":UEFAFun,"!concacaf":CONCACAFFun,"!superheroes":SuperHeroesFun,"!primera":SuperligaFun,"!fantasmas":FantasmasFun,"!amateurs":EquiposAmateursFun,"!ascenso":AscensoFun,"!ligaboliviana":LigaBolivianaFun,"!campeonatochileno":CampeonatoChilenoFun,"!mls":MLSFun,"!campeonatouruguayo":LigaUruguayaFun,"!campeonatoruso":CampeonatoRusoFun,"!premierucrania":PremierUcranianaFun,"!laliga":LaLigaFun,"!seriea":SerieATIMFun,"!serieb":SerieBItaliaFun,"!brasileirao":BrasilLeagueFun,"!premierleague":PremierLeagueFun,"!superlig":SuperLigFun,"!paises":PaisesFun,"!bundesliga":BundesligaFun,"!eredivisie":EredivisieFun,"!ligaaguila":LigaAguilaFun,"!ligaparaguaya":LigaParaguayaFun,"!ligue1":Ligue1Fun,"!ligamx":LigaMXFun,"!ligapro":LigaProFun,"!superligasuiza":RaiffeisenSuperLeagueFun,"!liga1peru":Liga1PeruFun,"!primeiraliga":PrimeiraLigaFun,"!ligavenezolana":LigaVenezolanaFun,"!esports":EquiposEsportsFun,}
var commands={"!adminhelp":adminHelpFun,"!unmute":unmuteFun,"!md":pmFun,"!pv":pmFun,"!set_password":setpasswordFun}
function LinkDelScript(player){var scores=room.getScores();var ColoresRandomBot=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom=ColoresRandomBot[(Math.random()*ColoresRandomBot.length)|0]
var AvisosRandomBot=['🤖 CREÁ TU PROPIO HOST CON BOT:','🔗 LINK DEL BOT DE ESTE HOST:','📚 TUTORIAL PARA CREAR TU HOST CON BOT:','🏟️ CREÁ TU PROPIA SALA DE REAL SOCCER REVOLUTION:','📖 TUTORIAL PARA CREAR HOST DE RS REVOLUTION:']
var GeneradorAvisosRandom=AvisosRandomBot[(Math.random()*AvisosRandomBot.length)|0]
if(scores.time>3&&!isTimeAddedShownseis){room.sendAnnouncement("                                        𒁂 ✨ "+GeneradorAvisosRandom+"  ➡ https://youtu.be/Mkh7WcN8pSg ⬅ 𒁂",player,GeneradorColoresRandom,"normal",0);isTimeAddedShownseis=!0}
if(scores.time>0.3&&!isTimeAddedShownseis){isGamePaused=!1;room.sendAnnouncement("   🏆    E S T A N    J U G A N D O  :       "+teamRed+"   vs   "+teamBlue,player,GeneradorColoresRandom,"normal",0);room.sendAnnouncement("Escribe !help para ver los comandos disponibles.",player,GeneradorColoresRandom,"normal",0);isTimeAddedShownseis=!0}}
function hexToInt(hexColor){return parseInt(hexColor,16)}
function LinkDelScript3(player){var scores=room.getScores();var TiempoEnElQueApareceElMensaje=AnuncioMinuto*60+AnuncioSegundos;if(scores.time>TiempoEnElQueApareceElMensaje&&!DetenerAviso){var colorAnuncioInt=hexToInt(ColorAnuncio);room.sendAnnouncement(Anuncio,player,colorAnuncioInt,`${TipoDeLetraAnuncio}`,0);DetenerAviso=!0}}
function LinkDelScript4(player){var scores=room.getScores();var TiempoEnElQueApareceElMensaje2=Anuncio2Minuto*60+Anuncio2Segundos;if(scores.time>TiempoEnElQueApareceElMensaje2&&!DetenerAviso2){var colorAnuncio2Int=hexToInt(ColorAnuncio2);room.sendAnnouncement(Anuncio2,player,colorAnuncio2Int,`${TipoDeLetraAnuncio2}`,0);DetenerAviso2=!0}}
function LinkDelScript2(player){if(room.getScores().time>=5&&!DetenerAnuncio){var players=room.getPlayerList();var redPlayers=players.filter(player=>player.team===1);var bluePlayers=players.filter(player=>player.team===2);ArqueroRED=redPlayers.reduce((minXPlayer,currentPlayer)=>{return minXPlayer.position.x<currentPlayer.position.x?minXPlayer:currentPlayer},redPlayers[0]);ArqueroBLUE=bluePlayers.reduce((maxXPlayer,currentPlayer)=>{return maxXPlayer.position.x>currentPlayer.position.x?maxXPlayer:currentPlayer},bluePlayers[0]);var message="🔴 🧤⚽ GK "+teamRed+": "+(ArqueroRED?ArqueroRED.name:"No tiene")+" ------- 🔵 🧤⚽ GK "+teamBlue+": "+(ArqueroBLUE?ArqueroBLUE.name:"No tiene");room.sendAnnouncement(message,null,0xFFFFFF,"bold",0);DetenerAnuncio=!0}}
function ReiniciarPuntosJugadores(player){if(room.getScores().time>0.1&&!ReiniciarStatsEnCero){playerGoals={};playerAssists={};playerPoints={};ReiniciarStatsEnCero=!0}}
function DetectorGK(player){if(room.getScores().time>=0.2){var players=room.getPlayerList();var redPlayers=players.filter(player=>player.team===1);var bluePlayers=players.filter(player=>player.team===2);ArqueroRED=redPlayers.reduce((minXPlayer,currentPlayer)=>{return minXPlayer.position.x<currentPlayer.position.x?minXPlayer:currentPlayer},redPlayers[0]);ArqueroBLUE=bluePlayers.reduce((maxXPlayer,currentPlayer)=>{return maxXPlayer.position.x>currentPlayer.position.x?maxXPlayer:currentPlayer},bluePlayers[0]);var message="🔴 🧤⚽ GK "+teamRed+": "+(ArqueroRED?ArqueroRED.name:"No tiene")+" ------- 🔵 🧤⚽ GK "+teamBlue+": "+(ArqueroBLUE?ArqueroBLUE.name:"No tiene")}}
function GetTeam(id){return room.getPlayerList().filter((player)=>player.id!=0&&player.team==id)}
function CreatePlayer(player){ListaDeJugadores[ListaDeJugadores.length]={name:player.name,id:player.id,auth:undefined,conn:undefined,jointime:0}}
function DeletePlayer(id){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].id==id){ListaDeJugadores.splice(i,1)}}}
function GetPlayer(id){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].id==id){return ListaDeJugadores[i]}}}
function GetIDByName(name){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].name==name){return ListaDeJugadores[i].id}}}
function GetAuthByID(id){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].id==id){return GetPlayer(ListaDeJugadores[i].id).auth}}}
function generar_respuesta_aleatoria(player){var respuestas=["Sí. 🗿","Naa, ni en pedo flaco ❌","Puede ser capo... ಠ_ಠ","Obvio que sí, papá (ง︡'-'︠)ง","Ni a palos, hermano ❎","Capaz, ¿por qué no? 🤔","Sin duda alguna rey 💯","¡Por supuesto que sí! (ง︡'-'︠)ง","Es probable 🤔","No ❌","Sin duda alguna, hermano 💯","¡Ni en pedo, flaco! ❌","Podría ser, no te aseguro nada capo 🤔","Totalmente rey 💯","No, olvidate ❎","Ni en pedo, ni lo sueñes ❌","Tristemente sí. ಥ_ಥ","Tristemente no. ಥ_ಥ",];var respuesta=respuestas[Math.floor(Math.random()*respuestas.length)];return respuesta}
function removeAccents(str){const accents="ÁÉÍÓÚáéíóú";const replacements="AEIOUaeiou";const accentMap=new Map();for(let i=0;i<accents.length;i++){accentMap.set(accents[i],replacements[i])}
return str.replace(/[ÁÉÍÓÚáéíóú]/g,(character)=>accentMap.get(character))}
function shuffleTeams(){const players=room.getPlayerList();const activePlayers=players.filter(player=>!player.spectator);const team1Players=activePlayers.filter(player=>player.team===1);const team2Players=activePlayers.filter(player=>player.team===2);const shuffledPlayers=shuffleArray(team1Players.concat(team2Players));const totalPlayers=shuffledPlayers.length;const halfPlayers=Math.floor(totalPlayers/2);for(let i=0;i<totalPlayers;i++){const player=shuffledPlayers[i];const team=(i<halfPlayers)?1:2;room.setPlayerTeam(player.id,team)}
const remainingPlayers=players.filter(player=>!activePlayers.includes(player));for(const player of remainingPlayers){room.setPlayerTeam(player.id,0)}
room.sendAnnouncement("¡Los equipos han sido mezclados de forma aleatoria!")}
function balanceTeams(){const players=room.getPlayerList();const activePlayers=players.filter(player=>!player.spectator);const totalPlayers=activePlayers.length;const targetPlayersPerTeam=Math.floor(totalPlayers/2);const team1Players=activePlayers.filter(player=>player.team===1);const team2Players=activePlayers.filter(player=>player.team===2);const diff=Math.abs(team1Players.length-team2Players.length);if(diff>1){const playersToMove=Math.floor(diff/2);if(team1Players.length>team2Players.length){const playersToMoveFromTeam1=team1Players.slice(-playersToMove);for(const player of playersToMoveFromTeam1){room.setPlayerTeam(player.id,2)}}else{const playersToMoveFromTeam2=team2Players.slice(-playersToMove);for(const player of playersToMoveFromTeam2){room.setPlayerTeam(player.id,1)}}
room.sendAnnouncement("¡Los equipos han sido equilibrados!")}else{room.sendAnnouncement("No es necesario equilibrar los equipos.")}}
function autoBalanceTeams(){if(!autoBalanceEnabled||autoBalancePaused){return}
const players=room.getPlayerList();const activePlayers=players.filter(player=>!player.spectator);const totalPlayers=activePlayers.length;const targetPlayersPerTeam=Math.floor(totalPlayers/2);const team1Players=activePlayers.filter(player=>player.team===1);const team2Players=activePlayers.filter(player=>player.team===2);const diff=Math.abs(team1Players.length-team2Players.length);if(diff>1){const playersToMove=Math.floor(diff/2);if(team1Players.length>team2Players.length){const playersToMoveFromTeam1=team1Players.slice(-playersToMove);for(const player of playersToMoveFromTeam1){room.setPlayerTeam(player.id,2)}}else{const playersToMoveFromTeam2=team2Players.slice(-playersToMove);for(const player of playersToMoveFromTeam2){room.setPlayerTeam(player.id,1)}}
room.sendAnnouncement("¡Los equipos han sido equilibrados automáticamente! 🔄⚖️",null,0x00ff00,"bold",0)}}
function sendAnnouncementInChat(message,targetId,color,style,sound){room.sendAnnouncement(message,targetId,color,style,sound)}
function getRankEmoji(rank){const rankEmojis=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","1️⃣0️⃣","1️⃣1️⃣","1️⃣2️⃣","1️⃣3️⃣","1️⃣4️⃣","1️⃣5️⃣","1️⃣6️⃣","1️⃣7️⃣","1️⃣8️⃣","1️⃣9️⃣","2️⃣0️⃣","2️⃣1️⃣","2️⃣2️⃣","2️⃣3️⃣","2️⃣4️⃣","2️⃣5️⃣","2️⃣6️⃣","2️⃣7️⃣","2️⃣8️⃣","2️⃣9️⃣","3️⃣0️⃣","3️⃣1️⃣","3️⃣2️⃣","3️⃣3️⃣","3️⃣4️⃣","3️⃣5️⃣","3️⃣6️⃣","3️⃣7️⃣","3️⃣8️⃣","3️⃣9️⃣","4️⃣0️⃣","4️⃣1️⃣","4️⃣2️⃣","4️⃣3️⃣","4️⃣4️⃣","4️⃣5️⃣","4️⃣6️⃣","4️⃣7️⃣","4️⃣8️⃣","4️⃣9️⃣","5️⃣0️⃣","5️⃣1️⃣","5️⃣2️⃣","5️⃣3️⃣","5️⃣4️⃣","5️⃣5️⃣","5️⃣6️⃣","5️⃣7️⃣","5️⃣8️⃣","5️⃣9️⃣","6️⃣0️⃣","6️⃣1️⃣","6️⃣2️⃣","6️⃣3️⃣","6️⃣4️⃣","6️⃣5️⃣","6️⃣6️⃣","6️⃣7️⃣","6️⃣8️⃣","6️⃣9️⃣","7️⃣0️⃣","7️⃣1️⃣","7️⃣2️⃣","7️⃣3️⃣","7️⃣4️⃣","7️⃣5️⃣","7️⃣6️⃣","7️⃣7️⃣","7️⃣8️⃣","7️⃣9️⃣","8️⃣0️⃣","8️⃣1️⃣","8️⃣2️⃣","8️⃣3️⃣","8️⃣4️⃣","8️⃣5️⃣","8️⃣6️⃣","8️⃣7️⃣","8️⃣8️⃣","8️⃣9️⃣","9️⃣0️⃣","9️⃣1️⃣","9️⃣2️⃣","9️⃣3️⃣","9️⃣4️⃣","9️⃣5️⃣","9️⃣6️⃣","9️⃣7️⃣","9️⃣8️⃣","9️⃣9️⃣","1️⃣0️⃣0️⃣","1️⃣0️⃣1️⃣","1️⃣0️⃣2️⃣","1️⃣0️⃣3️⃣","1️⃣0️⃣4️⃣","1️⃣0️⃣5️⃣","1️⃣0️⃣6️⃣","1️⃣0️⃣7️⃣","1️⃣0️⃣8️⃣","1️⃣0️⃣9️⃣","1️⃣1️⃣0️⃣","1️⃣1️⃣1️⃣","1️⃣1️⃣2️⃣","1️⃣1️⃣3️⃣","1️⃣1️⃣4️⃣","1️⃣1️⃣5️⃣","1️⃣1️⃣6️⃣","1️⃣1️⃣7️⃣","1️⃣1️⃣8️⃣","1️⃣1️⃣9️⃣","1️⃣2️⃣0️⃣","1️⃣2️⃣1️⃣","1️⃣2️⃣2️⃣","1️⃣2️⃣3️⃣","1️⃣2️⃣4️⃣","1️⃣2️⃣5️⃣","1️⃣2️⃣6️⃣","1️⃣2️⃣7️⃣","1️⃣2️⃣8️⃣","1️⃣2️⃣9️⃣","1️⃣3️⃣0️⃣","1️⃣3️⃣1️⃣","1️⃣3️⃣2️⃣","1️⃣3️⃣3️⃣","1️⃣3️⃣4️⃣","1️⃣3️⃣5️⃣","1️⃣3️⃣6️⃣","1️⃣3️⃣7️⃣","1️⃣3️⃣8️⃣","1️⃣3️⃣9️⃣","1️⃣4️⃣0️⃣","1️⃣4️⃣1️⃣","1️⃣4️⃣2️⃣","1️⃣4️⃣3️⃣","1️⃣4️⃣4️⃣","1️⃣4️⃣5️⃣","1️⃣4️⃣6️⃣","1️⃣4️⃣7️⃣","1️⃣4️⃣8️⃣","1️⃣4️⃣9️⃣","1️⃣5️⃣0️⃣","1️⃣5️⃣1️⃣","1️⃣5️⃣2️⃣","1️⃣5️⃣3️⃣","1️⃣5️⃣4️⃣","1️⃣5️⃣5️⃣","1️⃣5️⃣6️⃣","1️⃣5️⃣7️⃣","1️⃣5️⃣8️⃣","1️⃣5️⃣9️⃣","1️⃣6️⃣0️⃣","1️⃣6️⃣1️⃣","1️⃣6️⃣2️⃣","1️⃣6️⃣3️⃣","1️⃣6️⃣4️⃣","1️⃣6️⃣5️⃣","1️⃣6️⃣6️⃣","1️⃣6️⃣7️⃣","1️⃣6️⃣8️⃣","1️⃣6️⃣9️⃣","1️⃣7️⃣0️⃣","1️⃣7️⃣1️⃣","1️⃣7️⃣2️⃣","1️⃣7️⃣3️⃣","1️⃣7️⃣4️⃣","1️⃣7️⃣5️⃣","1️⃣7️⃣6️⃣","1️⃣7️⃣7️⃣","1️⃣7️⃣8️⃣","1️⃣7️⃣9️⃣","1️⃣8️⃣0️⃣","1️⃣8️⃣1️⃣","1️⃣8️⃣2️⃣","1️⃣8️⃣3️⃣","1️⃣8️⃣4️⃣","1️⃣8️⃣5️⃣","1️⃣8️⃣6️⃣","1️⃣8️⃣7️⃣","1️⃣8️⃣8️⃣","1️⃣8️⃣9️⃣","1️⃣9️⃣0️⃣","1️⃣9️⃣1️⃣","1️⃣9️⃣2️⃣","1️⃣9️⃣3️⃣","1️⃣9️⃣4️⃣","1️⃣9️⃣5️⃣","1️⃣9️⃣6️⃣","1️⃣9️⃣7️⃣","1️⃣9️⃣8️⃣","1️⃣9️⃣9️⃣","2️⃣0️⃣0️⃣"];return rank<rankEmojis.length?rankEmojis[rank]:rankEmojis[3]}
function getNumericEmoji(number){const numericEmojis=["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];return number.toString().split("").map((digit)=>numericEmojis[parseInt(digit)]).join("")}
let adminVotingActive=!1;let adminVotes={};let kickVotingActive=!1;let kickVotes={};const MIN_PLAYERS_FOR_ADMIN_VOTE=5;const MIN_PLAYERS_FOR_KICK_VOTE=5;const DURACION_VOTACION=120;function getLevelInfo(points){if(points>=0&&points<0.7){return{level:"Noob 😅 (Nivel 1)",nextPoints:0.7-points,nextLevel:"Amateur 🎮 (Nivel 2)"}}else if(points>=0.7&&points<1){return{level:"Amateur 🎮 (Nivel 2)",nextPoints:1-points,nextLevel:"Aficionado ⚽️ (Nivel 3)"}}else if(points>=1&&points<2){return{level:"Aficionado ⚽️ (Nivel 3)",nextPoints:2-points,nextLevel:"Promesa 🌱 (Nivel 4)"}}else if(points>=2&&points<3){return{level:"Promesa 🌱 (Nivel 4)",nextPoints:3-points,nextLevel:"Avanzado 🚀 (Nivel 5)"}}else if(points>=3&&points<4){return{level:"Avanzado 🚀 (Nivel 5)",nextPoints:4-points,nextLevel:"Experto 🧠 (Nivel 6)"}}else if(points>=4&&points<5){return{level:"Experto 🧠 (Nivel 6)",nextPoints:5-points,nextLevel:"Profesional 🎯 (Nivel 7)"}}else if(points>=5&&points<10){return{level:"Profesional 🎯 (Nivel 7)",nextPoints:10-points,nextLevel:"Estrella ⭐ (Nivel 8)"}}else if(points>=10&&points<20){return{level:"Estrella ⭐ (Nivel 8)",nextPoints:20-points,nextLevel:"Distinto 👽 (Nivel 9)"}}else if(points>=20&&points<30){return{level:"Distinto 👽 (Nivel 9)",nextPoints:30-points,nextLevel:"Maestro 🎓 (Nivel 10)"}}else if(points>=30&&points<40){return{level:"Maestro 🎓 (Nivel 10)",nextPoints:40-points,nextLevel:"Sobrenatural 🌌 (Nivel 11)"}}else if(points>=40&&points<50){return{level:"Sobrenatural 🌌 (Nivel 11)",nextPoints:50-points,nextLevel:"Crack 💥 (Nivel 12)"}}else if(points>=50&&points<60){return{level:"Crack 💥 (Nivel 12)",nextPoints:60-points,nextLevel:"Figura Máxima 👑 (Nivel 13)"}}else if(points>=60&&points<70){return{level:"Figura Máxima 👑 (Nivel 13)",nextPoints:70-points,nextLevel:"Elite 💎 (Nivel 14)"}}else if(points>=70&&points<80){return{level:"Elite 💎 (Nivel 14)",nextPoints:80-points,nextLevel:"Invencible 🛡️ (Nivel 15)"}}else if(points>=80&&points<90){return{level:"Invencible 🛡️ (Nivel 15)",nextPoints:90-points,nextLevel:"Prodigio 🌟 (Nivel 16)"}}else if(points>=90&&points<95){return{level:"Prodigio 🌟 (Nivel 16)",nextPoints:95-points,nextLevel:"Leyenda 🏆 (Nivel 17)"}}else if(points>=95&&points<100){return{level:"Leyenda 🏆 (Nivel 17)",nextPoints:100-points,nextLevel:"Legendario 🐉 Bronce (Nivel 18)"}}else if(points>=100&&points<110){return{level:"Legendario 🐉 Bronce (Nivel 18) 🥉",nextPoints:110-points,nextLevel:"Legendario 🐉 Plata (Nivel 19) 🥈"}}else if(points>=110&&points<120){return{level:"Legendario 🐉 Plata (Nivel 19) 🥈",nextPoints:120-points,nextLevel:"Legendario 🐉 Oro (Nivel 20) 🥇"}}else if(points>=120&&points<130){return{level:"Legendario 🐉 Oro (Nivel 20) 🥇",nextPoints:130-points,nextLevel:"Legendario 🐉 Zafiro (Nivel 21) 🔷"}}else if(points>=130&&points<140){return{level:"Legendario 🐉 Zafiro (Nivel 21) 🔷",nextPoints:140-points,nextLevel:"Legendario 🐉 Rubí (Nivel 22) 🔴"}}else if(points>=140&&points<150){return{level:"Legendario 🐉 Rubí (Nivel 22) 🔴",nextPoints:150-points,nextLevel:"Legendario 🐉 Esmeralda (Nivel 23) 🟢"}}else if(points>=150&&points<160){return{level:"Legendario 🐉 Esmeralda (Nivel 23) 🟢",nextPoints:160-points,nextLevel:"Legendario 🐉 Amatista (Nivel 24) 🟣"}}else if(points>=160&&points<170){return{level:"Legendario 🐉 Amatista (Nivel 24) 🟣",nextPoints:170-points,nextLevel:"Legendario 🐉 Perla (Nivel 25) ⚪"}}else if(points>=170&&points<180){return{level:"Legendario 🐉 Perla (Nivel 25) ⚪",nextPoints:180-points,nextLevel:"Legendario 🐉 Obsidiana (Nivel 26) ⚫"}}else if(points>=180&&points<190){return{level:"Legendario 🐉 Obsidiana (Nivel 26) ⚫",nextPoints:190-points,nextLevel:"Legendario 🐉 Diamante (Nivel 27) 💎"}}else{return{level:"Legendario 🐉 Diamante (Nivel 27) 💎",nextPoints:0,nextLevel:null}}}
var AnuncioGolDeOro=!1;let playerStats={};function getLastGamesMessage(playerName){const lastGames=getLastGames(playerName);const reversedLastGames=lastGames.reverse();const lastGamesMessage=`📊 Historial (Últimos 10 Partidos): ${reversedLastGames.map(getResultEmoji).join('')}`;return lastGamesMessage}
function getLastGames(playerName){if(!playerStats[playerName]||!playerStats[playerName].gameResults){return[]}
const gameResults=playerStats[playerName].gameResults;const startIndex=Math.max(0,gameResults.length-10);const lastGames=gameResults.slice(startIndex);return lastGames}
function getResultEmoji(result){if(result==='victory'){return'✅'}else if(result==='draw'){return'➖'}else if(result==='defeat'){return'❌'}
return''}
function updatePlayerStats(playerName,result){if(!playerStats[playerName]){playerStats[playerName]={victories:0,draws:0,defeats:0,totalGames:0,currentStreak:0,highestStreak:0,gameResults:[]}}
playerStats[playerName].totalGames++;if(result==='victory'){playerStats[playerName].victories++;playerStats[playerName].currentStreak++;playerStats[playerName].highestStreak=Math.max(playerStats[playerName].highestStreak,playerStats[playerName].currentStreak)}else if(result==='draw'){playerStats[playerName].draws++;playerStats[playerName].currentStreak=0}else if(result==='defeat'){playerStats[playerName].defeats++;playerStats[playerName].currentStreak=0}
if(!Array.isArray(playerStats[playerName].gameResults)){playerStats[playerName].gameResults=[]}
playerStats[playerName].gameResults.push(result);playerStats[playerName].highestStreak=playerStats[playerName].highestStreak||0;playerStats[playerName].currentStreak=playerStats[playerName].currentStreak||0;localStorage.setItem(playerName,JSON.stringify(playerStats[playerName]))}
function llamarAdmins(playerName,motivo){const mensaje=`# 🚨 LLAMARON A LOS ADMINS 🚨\n## El jugador ${playerName} está llamando a los administradores del host.   ||<@&${RolAdminHost}> ||\n# 🔗 LINK DEL HOST: ${roomLink}\n# 🔑 CLAVE PARA SER ADMINISTRADOR: ||${ClaveParaSerAdmin}|| \n# 📑 MOTIVO: ${motivo}`;const webhook=new XMLHttpRequest();webhook.open('POST',WebhookParaLlamarAdmins);const formData=new FormData();formData.append('content',mensaje);webhook.send(formData)}
const MIN_PLAYERS_FOR_MAP_VOTE=3;const MAP_VOTE_DURATION=60;let mapVotes={};let mapVotingActive=!1;function startMapVoting(){const totalPlayers=room.getPlayerList().length;const votesNeeded=Math.floor(totalPlayers/2)+1;if(!mapVotingActive&&totalPlayers>=MIN_PLAYERS_FOR_MAP_VOTE){mapVotingActive=!0;mapVotes={};setTimeout(function(){endMapVoting()},MAP_VOTE_DURATION*1000);room.sendAnnouncement(`🗳️ 🔄 ¡LA VOTACIÓN PARA CAMBIAR DE MAPA HA COMENZADO! Escribe "!votarmapa nombre_del_mapa" para votar por un mapa. Se necesitan al menos ${votesNeeded} votos para finalizar la votación. 🏟️✅`,null,0xFFA359,"bold",2)}}
function endMapVoting(){if(mapVotingActive){mapVotingActive=!1;let maxVotes=0;let winningMap=null;for(const votedMap in mapVotes){const voteCount=mapVotes[votedMap].length;if(voteCount>maxVotes){maxVotes=voteCount;winningMap=votedMap}}
if(winningMap!==null&&isMajorityVote(maxVotes,room.getPlayerList().length)){applyMapConfiguration(winningMap);room.sendAnnouncement(`¡La Votación de Mapa ha llegado a su Fin! 🗳️ | 🌟 ¡Gracias a todos por participar! ${getVoteResultsString()} 🎉`,null,0xffe32b,"bold",0)}else{room.sendAnnouncement('La votación no ha tenido éxito. No se ha seleccionado un mapa mayoritario. ❌🗳️',null,0xff4d4d,"bold",0)}}}
async function applyMapConfiguration(winningMap,message){if(winningMap==='entrenamientofutsal'||winningMap==='futx5'||winningMap==='futx7'||winningMap==='futx2'||winningMap==='futx3'||winningMap==='futx4'||winningMap==='futx5cesped'){room.stopGame();if(isMajorityVote(mapVotes[winningMap].length,room.getPlayerList().length)){await new Promise(resolve=>setTimeout(resolve,300));if(winningMap==='realfutsal'){currentMap=getMapName(message);room.setCustomStadium(getRealFutsal());room.setScoreLimit(0);room.setTimeLimit(0)}else if(winningMap==='entrenamientofutsal'){currentMap=getMapName(message);room.setCustomStadium(getEntrenamientoFutsalMap());room.setScoreLimit(0);room.setTimeLimit(0)}else if(winningMap==='futx2'){currentMap=getMapName(message);room.setCustomStadium(getFutx2Map());room.setScoreLimit(3);room.setTimeLimit(3)}
await new Promise(resolve=>setTimeout(resolve,300));room.startGame()}else{room.sendAnnouncement(`El mapa "${winningMap}" no ha obtenido más de la mitad de los votos. No se realizarán cambios. 🚫`,null,0xff2b52,"bold",0)}}}
function isMajorityVote(votes,totalPlayers){return votes>Math.floor(totalPlayers/2)}
function getVoteResultsString(){let resultsString='';for(const votedMap in mapVotes){resultsString+=`"${votedMap}": ${mapVotes[votedMap].length} votos, `}
return resultsString.slice(0,-2)}
function sendChatToDiscord(player,message){var color=0xf0f6ff;if(player.admin){color=0xFFD700}else if(player.team===1){color=0xff8e8e}else if(player.team===2){color=0x8eb1ff}
if(!/[@#*]/.test(message)&&!/[#@*]/.test(player.name)&&!message.includes(ClaveParaSerAdmin)){const embed={embeds:[{author:{name:NombreHost,icon_url:player.avatar,},description:`**${player.name}:** ${message}`,color:color,timestamp:new Date().toISOString(),},],};const requestOptions={method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(embed),};fetch(webhookMensajesJugadores,requestOptions)}}
var ultimaLlamadaAdmins=0;var TiempoEsperaEnMilisegundos=tiempoEsperaAdminsEnMinutos*60*1000;var ofiHabilitado=!1;var jugadoresFirmados=[];var usedValues={};var lastCommandUse={};var cooldown=15*1000;var comentarios={micropene:["¡Es más fácil encontrar a Wally que eso!","¡Ese tiene que ser el Minion más pequeño que existe!","¡Eso no es un pito, es un error de la fábrica!","¿Necesitas pinzas para manejar eso?","¡Es tan chiquito que ni el Viagra lo encuentra!","¡Eso es más chico que la autoestima de un cornudo!","¡Necesitás un microscopio para ver esa mierda!","¡Parece que la madre naturaleza se quedó sin material!","¡Eres la definición viviente de 'chiquito pero peligroso'!"],debajoPromedio:["¡Tranquilo! No todos pueden ser estrellas porno.","¡A veces menos es más... o eso dicen!","¡La compensación viene en otras áreas, amigo!","¡No te preocupes, el carisma lo es todo!","¡Vos te bajás los pantalones y sube la autoestima de todos!","¡Con eso no hacés ni cosquillas!","¡Eso es tan chico que ni para mear bien sirve!"],promedio:["¡Ni muy grande ni muy pequeño, perfecto para cualquier agujero!","¡Eres el término medio, el equilibrio perfecto!","¡Lo importante es cómo lo usas, dicen por ahí!","¡No es el tamaño, es cómo lo mueves!","¡Lo justo para no pasar vergüenza, pero tampoco para presumir!","¡Cumplís, pero sin pena ni gloria!"],encimaPromedio:["¡Tenés un misil entre las piernas!","¡El tamaño sí importa, y lo sabes!","¡Te bajás los pantalones y aplauden!","¡Con eso podés asustar hasta a King Kong!","¡Tremenda anaconda tenes ahí!","¡Te bajás los pantalones y parece una película porno!","¡Con esa cosa puedes hacer feliz a varias de una vez!","¡Cuidado, que eso podría necesitar un permiso de armas!"],grande:["¡Con eso hasta los caballos te respetan!","¡Con eso podés colgar la ropa de toda la cuadra!","¡Eso sí que es un 'paquete' de verdad!","¡Eres el orgullo del Host!","¡Con eso puedes hacer sombras en un día soleado!","¡Eso podría causar un eclipse solar!","¡Eso no es un pene, es un arma de destrucción masiva!"]};function obtenerComentario(valor){if(valor>=1&&valor<=7){return comentarios.micropene[Math.floor(Math.random()*comentarios.micropene.length)]}else if(valor>7&&valor<=12){return comentarios.debajoPromedio[Math.floor(Math.random()*comentarios.debajoPromedio.length)]}else if(valor>12&&valor<=16){return comentarios.promedio[Math.floor(Math.random()*comentarios.promedio.length)]}else if(valor>16&&valor<=20){return comentarios.encimaPromedio[Math.floor(Math.random()*comentarios.encimaPromedio.length)]}else{return comentarios.grande[Math.floor(Math.random()*comentarios.grande.length)]}}
function sendTeamMessage(player,teamMsg){const teamColor=player.team==1?RedTeamChatColor:BlueTeamChatColor;const teamIcon=player.team==1?'🔴':'🔵';const teamPlayers=room.getPlayerList().filter(p=>p.team==player.team);teamPlayers.forEach(p=>{room.sendAnnouncement(`[TEAM CHAT ${teamIcon}] ${player.name}: ${teamMsg}`,p.id,teamColor,"bold",2)})}
function getMentionedPlayers(message){return message.split(' ').reduce((mentioned,word)=>{if(word.startsWith('@')){const playerName=word.substring(1).replace(/_/g,' ');const player=room.getPlayerList().find(p=>p.name.toLowerCase()===playerName.toLowerCase());if(player)mentioned.push(player);}
return mentioned},[])}
function getPlayerPrefix(player){const option=ColocarJuntoAlNickname.toLowerCase();if(option==="nivel"){const goals=totalPlayerGoals[player.name]||0;const assists=totalPlayerAssists[player.name]||0;const totalPoints=goals+(assists*0.7);const levelInfo=getLevelInfo(totalPoints);return `«${levelInfo.level}»`}else if(option==="id"){return `« 🆔: ${player.id} »`}else{return ``}}
function sendMentionedMessage(player,message,mentionedPlayers,color,roleName){const prefix=getPlayerPrefix(player);mentionedPlayers.forEach(mentionedPlayer=>{room.sendAnnouncement(`${prefix} ${roleName} ~ ${player.name}: ${message}`,mentionedPlayer.id,color,"bold",2)})}
function sendMessageToOthers(player,message,mentionedPlayers,color,roleName){const prefix=getPlayerPrefix(player);room.getPlayerList().forEach(p=>{if(!mentionedPlayers.includes(p)){const roleAttr=RoleAttributes[roleName]||{style:"normal",sound:1};room.sendAnnouncement(`${prefix} ${roleName} ~ ${player.name}: ${message}`,p.id,color,roleAttr.style,roleAttr.sound)}})}
function handleMentions(player,message,color,roleName,isAdmin){const prefix=getPlayerPrefix(player);const allPlayers=room.getPlayerList();if(message.toLowerCase().includes('@everyone')&&isAdmin){allPlayers.forEach(p=>{room.sendAnnouncement(`${prefix} ${roleName} ~ ${player.name}: ${message}`,p.id,color,"bold",2)});return!1}
if(message.toLowerCase().includes('@here')&&isAdmin){allPlayers.forEach(p=>{const isAFK=afkPlayerIDs.has(p.id);room.sendAnnouncement(`${prefix} ${roleName} ~ ${player.name}: ${message}`,p.id,color,isAFK?"normal":"bold",isAFK?1:2)});return!1}
return!0}
function handleCooldown(player){if(!cooldownEnabled){return!0}
const now=Date.now();if(player.admin){return!0}
if(!messageTimestamps[player.id]){messageTimestamps[player.id]=[]}
messageTimestamps[player.id]=messageTimestamps[player.id].filter(timestamp=>now-timestamp<MESSAGE_COOLDOWN);messageTimestamps[player.id].push(now);if(playerCooldowns[player.id]&&now<playerCooldowns[player.id]){whisper(`[⚠️] Estás escribiendo demasiado rápido. Espera unos segundos antes de enviar otro mensaje.`,player.id);return!1}
if(messageTimestamps[player.id].length>SPAM_LIMIT){playerCooldowns[player.id]=now+COOLDOWN_TIME;spamWarnings[player.id]=(spamWarnings[player.id]||0)+1;if(spamWarnings[player.id]>=KICK_THRESHOLD){room.kickPlayer(player.id,"Has sido expulsado por spam.",!1);return!1}else{whisper(`[⚠️] Has enviado demasiados mensajes rápidamente. Estás en cooldown por ${COOLDOWN_TIME / 1000} segundos. Advertencia ${spamWarnings[player.id]} de ${KICK_THRESHOLD}.`,player.id)}
return!1}
return!0}
function handleAdminCommand(player,message){const[command,...args]=message.toLowerCase().split(" ");switch(command){case "!spam_limit":if(args.length===1&&!isNaN(args[0])){SPAM_LIMIT=parseInt(args[0],10);room.sendAnnouncement(`[INFO] ${player.name} ha actualizado SPAM_LIMIT a ${SPAM_LIMIT}`,null,adminChatColor,"bold",1)}else{room.sendAnnouncement(`[ERROR] Uso: !SPAM_LIMIT <Cantidad de Mensajes>`,player.id,adminChatColor,"bold",1)}
return!1;case "!cooldown_time":if(args.length===1&&!isNaN(args[0])){COOLDOWN_TIME=parseInt(args[0],10)*1000;room.sendAnnouncement(`[INFO] ${player.name} ha actualizado COOLDOWN_TIME a ${COOLDOWN_TIME / 1000} segundos`,null,adminChatColor,"bold",1)}else{room.sendAnnouncement(`[ERROR] Uso: !COOLDOWN_TIME <Cantidad de Segundos>`,player.id,adminChatColor,"bold",1)}
return!1;case "!toggle_cooldown":cooldownEnabled=!cooldownEnabled;room.sendAnnouncement(`[INFO] ${player.name} ha ${cooldownEnabled ? "habilitado" : "deshabilitado"} el cooldown`,null,adminChatColor,"bold",1);return!1;case "!kick_threshold":if(args.length===1&&!isNaN(args[0])){KICK_THRESHOLD=parseInt(args[0],10);room.sendAnnouncement(`[INFO] ${player.name} ha actualizado KICK_THRESHOLD a ${KICK_THRESHOLD}`,null,adminChatColor,"bold",1)}else{room.sendAnnouncement(`[ERROR] Uso: !KICK_THRESHOLD <Número de Advertencias>`,player.id,adminChatColor,"bold",1)}
return!1;default:return!0}}
function isCooldown(player,command){const now=Date.now();if(!cooldowns[player.name]){cooldowns[player.name]={}}
if(!cooldowns[player.name][command]||now-cooldowns[player.name][command]>COOLDOWN_TIEMPO){cooldowns[player.name][command]=now;return!1}
return!0}
function obtenerCamiseta(equipoClave){let equipo=camisetasEquipos[equipoClave];if(!equipo){room.sendAnnouncement(`[❌] Equipo no encontrado: ${equipoClave}`,null,0xFF0000,"bold",2);return null}
let datos=parseColors(equipo.codigo);if(equipoClave.includes("red")){redAngle=datos.angle;redTextColor=datos.textColor;redColor=datos.colors;teamRed=equipo.nombreEquipo}else if(equipoClave.includes("blue")){blueAngle=datos.angle;blueTextColor=datos.textColor;blueColor=datos.colors;teamBlue=equipo.nombreEquipo}
return{angle:datos.angle,textColor:datos.textColor,colors:datos.colors,nombreEquipo:equipo.nombreEquipo}}
function asignarCamisetaPorClave(equipoClave){let equipo=obtenerCamiseta(equipoClave);if(!equipo)return;if(equipoClave.endsWith("/red")){room.setTeamColors(1,equipo.angle,equipo.textColor,equipo.colors);teamRed=equipo.nombreEquipo;room.sendAnnouncement(`[✅] Camiseta asignada al equipo rojo: ${teamRed}`,null,0x00FF00,"bold",2)}else if(equipoClave.endsWith("/blue")){room.setTeamColors(2,equipo.angle,equipo.textColor,equipo.colors);teamBlue=equipo.nombreEquipo;room.sendAnnouncement(`[✅] Camiseta asignada al equipo azul: ${teamBlue}`,null,0x00FF00,"bold",2)}else{room.sendAnnouncement(`[❌] No se pudo determinar el equipo para la camiseta: ${equipoClave}`,null,0xFF0000,"bold",2)}}
let avatarIntervals={};const AVATAR_COOLDOWN=5000;const playerAvatarCooldowns={};function reemplazarPorEmojis(texto){let palabras=texto.split(" ");return palabras.map(palabra=>reemplazosEmoji[palabra.toLowerCase()]||palabra).join(" ")}
room.onPlayerChat=function(player,message){if(message.toLowerCase()==="!emoji"){if(jugadoresConEmojis.has(player.id)){jugadoresConEmojis.delete(player.id);whisper("🔕 Modo emoji desactivado. Tus mensajes no se transformarán.",player.id)}else{jugadoresConEmojis.add(player.id);whisper("🔔 Modo emoji activado. Algunas palabras serán reemplazadas por emojis.",player.id)}
return!1}
let lowerMessage=message.toLowerCase();if(lowerMessage.startsWith("!tamañominimo")&&player.admin){let newMinSize=parseInt(message.split(" ")[1]);if(!isNaN(newMinSize)&&newMinSize>0){TamanoMinimoPermitido=newMinSize;room.sendAnnouncement("✅ El tamaño mínimo ha sido cambiado a "+TamanoMinimoPermitido+" por "+player.name,null,0xbfff35,"normal",0)}else{room.sendAnnouncement("❌ Por favor, ingresa un número válido para el tamaño mínimo.",player.id,0xbfff35,"normal",0)}
return!1}
if(lowerMessage.startsWith("!tamañomaximo")&&player.admin){let newMaxSize=parseInt(message.split(" ")[1]);if(!isNaN(newMaxSize)&&newMaxSize>0){TamanoMaximoPermitido=newMaxSize;room.sendAnnouncement("✅ El tamaño máximo ha sido cambiado a "+TamanoMaximoPermitido+" por "+player.name,null,0xbfff35,"normal",0)}else{room.sendAnnouncement("❌ Por favor, ingresa un número válido para el tamaño máximo.",player.id,0xbfff35,"normal",0)}
return!1}
if(lowerMessage.startsWith("!limitesize")&&player.admin){let newLimit=parseInt(message.split(" ")[1]);if(!isNaN(newLimit)&&newLimit>0){CantidadCambiarTamano=newLimit;room.sendAnnouncement("✅ El límite de cambios de tamaño por partido ha sido cambiado a "+CantidadCambiarTamano+" por "+player.name,null,0xbfff35,"normal",0)}else{room.sendAnnouncement("❌ Por favor, ingresa un número válido para el límite de cambios de tamaño.",player.id,0xbfff35,"normal",0)}
return!1}
if(message==="!bazinga"&&player.admin){TipoPelotaFutsal="bazinga";room.sendAnnouncement("Pelota cambiada a Bazinga, detén el juego y escribe !futx2, !futx3, !futx4, !futx5 o !futx7 para colocar el mapa con la nueva pelota",player.id,0x00FF00,"bold",2)}else if(message==="!oveja"&&player.admin){TipoPelotaFutsal="oveja";room.sendAnnouncement("Pelota cambiada a Oveja, detén el juego y escribe !futx2, !futx3, !futx4, !futx5 o !futx7 para colocar el mapa con la nueva pelota",player.id,0x00FF00,"bold",2)}else if(message==="!glh"&&player.admin){TipoPelotaFutsal="glh";room.sendAnnouncement("Pelota cambiada a GLH,  detén el juego y escribe !futx2, !futx3, !futx4, !futx5 o !futx7 para colocar el mapa con la nueva pelota",player.id,0x00FF00,"bold",2)}
if(message.toLowerCase()==="!comba"){if(player.admin){combaMode=!combaMode;room.sendAnnouncement(`Modo Comba ${combaMode ? "ACTIVADO ✅" : "DESACTIVADO ❌"}`,null,0xFFD700,"bold",1)}else{room.sendAnnouncement("❌ No tienes permisos para usar este comando.",player.id,0xFF0000,"bold",1)}
return!1}
if(message.toLowerCase()==="!jabulani"){if(player.admin){JabulaniMode=!JabulaniMode;powerShotMode=JabulaniMode;room.sendAnnouncement(`Modo Jabulani ${JabulaniMode ? "ACTIVADO ✅ (PowerShot también activado)" : "DESACTIVADO ❌"}`,null,0xFF4500,"bold",1)}else{room.sendAnnouncement("❌ No tienes permisos para usar este comando.",player.id,0xFF0000,"bold",1)}
return!1}
if(message.startsWith('!avatar ')){let currentTime=Date.now();if(playerAvatarCooldowns[player.id]&&currentTime-playerAvatarCooldowns[player.id]<AVATAR_COOLDOWN){room.sendAnnouncement("⏳ Espera un momento antes de usar este comando nuevamente.",player.id,0xFF0000,"bold",7);return!1}
let avatars=message.substring(8).split(',');if(avatars.length<2){room.sendAnnouncement('Debes ingresar al menos dos avatares separados por comas.',player.id,0xFF0000,'normal',1);return!1}
if(avatarIntervals[player.id]){clearInterval(avatarIntervals[player.id])}
let index=0;avatarIntervals[player.id]=setInterval(()=>{room.setPlayerAvatar(player.id,avatars[index]);index=(index+1)%avatars.length},1000);room.sendAnnouncement(`¡Ciclo de avatares iniciado! Usa !avatarstop para detenerlo.`,player.id,0x00FF00,'normal',1);room.sendAnnouncement(`${player.name} ha utilizado el comando !avatar ${message.substring(8)}`,null,0xFFFFFF,'bold',1);playerAvatarCooldowns[player.id]=currentTime;return!1}
if(message==='!avatarstop'){if(avatarIntervals[player.id]){clearInterval(avatarIntervals[player.id]);delete avatarIntervals[player.id];room.setPlayerAvatar(player.id,null);room.sendAnnouncement(`Ciclo de avatares detenido.`,player.id,0xFFFF00,'normal',1)}else{room.sendAnnouncement(`No tienes un ciclo de avatares activo.`,player.id,0xFF0000,'normal',1)}
return!1}
if(camisetasEquipos.hasOwnProperty(message)&&player.admin){asignarCamisetaPorClave(message)}
if(message==="!pausarafk"&&player.admin){isAFKpaused=!isAFKpaused;let status=isAFKpaused?"⏸️ Detector de AFK PAUSADO.":"▶️ Detector de AFK ACTIVADO.";room.sendAnnouncement(status+" ⚠️",null,0x00FF00,"bold",2);return!1}
const afkKeywords=["mtm","meteme","volvi","estoy","listo"];if(afkKeywords.some(keyword=>message.toLowerCase().includes(keyword))){let currentTime=Date.now();if(playerCooldowns[player.id]&&currentTime-playerCooldowns[player.id]<MESSAGE_COOLDOWN){room.sendAnnouncement("⏳ Espera un momento antes de usar ese comando nuevamente.",player.id,0xFF0000,"bold",7);return!1}
if(!messageTimestamps[player.id]){messageTimestamps[player.id]=[]}
messageTimestamps[player.id].push(currentTime);messageTimestamps[player.id]=messageTimestamps[player.id].filter(timestamp=>currentTime-timestamp<COOLDOWN_TIME);if(messageTimestamps[player.id].length>SPAM_LIMIT){playerCooldowns[player.id]=currentTime;room.sendAnnouncement("🚫 Estás enviando demasiados comandos. Espera antes de volver a usar el comando.",player.id,0xFF0000,"bold",7);return!1}
playerCooldowns[player.id]=currentTime;if(afkKeywords.some(keyword=>message.toLowerCase().includes(keyword))){if(afkPlayerIDs.has(player.id)){clearTimeout(playerInactivity.get(player.id));playerInactivity.delete(player.id);afkPlayerIDs.delete(player.id);if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;if(blueTeamCount<=redTeamCount){room.setPlayerTeam(player.id,1)}else{room.setPlayerTeam(player.id,2)}}
room.sendAnnouncement("🚀 ¡"+player.name+" volvió y está listo para jugar! 🎮",null,0x00FFBB,"bold",0)}}}
const mensajeEnMinusculas=message.toLowerCase();if(mensajeEnMinusculas==="!memide"){if(isCooldown(player,"!memide")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
if(usedValues[player.id]!==undefined){var comentario=obtenerComentario(usedValues[player.id]);room.sendAnnouncement("📏 A "+player.name+" le mide "+usedValues[player.id]+" cm 🍌 "+comentario,null,0xFFFFFF,"bold")}else{var randomValue=Math.random()*(30-1)+1;randomValue=Math.round(randomValue*10)/10;usedValues[player.id]=randomValue;var comentarioNuevo=obtenerComentario(randomValue);room.sendAnnouncement("📏 A "+player.name+" le mide "+randomValue+" cm 🍌 "+comentarioNuevo,null,0xFFFFFF,"bold");return!0}
return!1}
if(mutedPlayers[player.name]&&Date.now()<mutedPlayers[player.name].muteTime){return!1}
if(player.admin===!0){if(message.startsWith("!mute")){const parts=message.split(" ");if(parts.length>=2){const playerId=parseInt(parts[1]);const duration=parts.length>=3?parseInt(parts[2]):Infinity;pushMute(playerId,duration,player.name);return!1}}}
if(message==="!sorteo"){if(player.admin){var team=Math.floor(Math.random()*2)+1;var teamName=(team===1)?teamRed:teamBlue;var emoji=(team===1)?"🔴":"🔵";room.sendAnnouncement("¡El equipo ganador del sorteo es: "+emoji+" "+teamName+"!",null,0xFFFFFF,"bold",2)}else{room.sendAnnouncement("¡Solo los administradores pueden utilizar este comando!",player.id,0xFFFFFF,"normal",1)}}
if(player.admin&&message==="!reset-stats"){totalPlayerGoals={};totalPlayerAssists={};totalPlayerPoints={};playerGoals={};playerAssists={};playerPoints={};playerGoals2={};playerAssists2={};playerPoints2={};playerFiguraCount={};playerMinutesPlayed={};playerGoalkeeperTime={};playerGoalsReceived={};playerCleanSheets={};localStorage.removeItem('totalPlayerGoals');localStorage.removeItem('totalPlayerAssists');localStorage.removeItem('totalPlayerPoints');localStorage.removeItem('playerGoals2');localStorage.removeItem('playerAssists2');localStorage.removeItem('playerPoints2');localStorage.removeItem('playerFiguraCount');localStorage.removeItem('playerMinutesPlayed');localStorage.removeItem('playerGoalkeeperTime');localStorage.removeItem('playerGoalsReceived');localStorage.removeItem('playerCleanSheets');room.sendAnnouncement("🔄 ¡Todas las estadísticas han sido reiniciadas por el administrador "+player.name+"! 📊🚀",null,0xff6a6a,"bold",1)}
if(player.admin&&message==="!ganasigue"){ganasigueEnabled=!ganasigueEnabled;var status=ganasigueEnabled?"ACTIVADO ✅":"DESACTIVADO ❌";room.sendAnnouncement("⏭️🎮 ¡El sistema 'gana sigue' ha sido "+status+" por "+player.name+"!",null,0xFFFFFF,"bold",1)}
if(message.startsWith("ac ")&&player.admin){var adminMessage="🌟👑 [ADMIN CHAT] - "+player.name+": "+message.substring(2);var adminPlayers=room.getPlayerList().filter(function(p){return p.admin});for(var i=0;i<adminPlayers.length;i++){room.sendAnnouncement(adminMessage,adminPlayers[i].id,0xffdb72,"bold",1)}
return!1}
if(message.startsWith('t ')&&player.team===0){var teamMsg=message.slice(2);var spectators=room.getPlayerList().filter(function(player){return player.team===0});spectators.forEach(function(spectator){room.sendAnnouncement('[SPECT CHAT 👁️] '+player.name+': '+teamMsg,spectator.id,0xc0c0c0,"bold",1)});return!1}
if(player.admin&&message==='!ofi'){ofiHabilitado=!ofiHabilitado;NombreAdmin=player.name;var status=ofiHabilitado?'habilitado':'deshabilitado';var emoji=ofiHabilitado?'✅':'❌';var mensaje=`¡El sistema de firmas para partidos oficiales ha sido ${status} por ${NombreAdmin}! Los jugadores ${ofiHabilitado ? 'pueden' : 'ya no pueden'} firmar utilizando el comando !firmo.`;room.sendAnnouncement(`${emoji}📝 ${mensaje}`,null,0xe5d72f,"bold",2)}
if(ofiHabilitado&&message==='!firmo'){const yaFirmado=jugadoresFirmados.includes(player.name);if(yaFirmado){room.sendAnnouncement(`✋ ¡${player.name} ya has firmado anteriormente!`,player.id,0xff352e,"bold",0)}else{const playerInfo=playerIPs.find(info=>info.nickname===player.name);const playerIP=playerInfo?playerInfo.ip:"IP Desconocida";jugadoresFirmados.push(player.name);sendFirmaToDiscord(player,playerIP);room.sendAnnouncement(`✍️ ¡${player.name} ha firmado!`,player.id,0x05ff02,"bold",0)}}
sendChatToDiscord(player,message);if(message==="!clubcolors"&&player.admin){toggleSwapColors()}
if(message==="!gks"){sendGKAnnouncement(player)}
const lowerCaseMensaje=message.toLowerCase();if(!mapVotingActive&&room.getPlayerList().length>=MIN_PLAYERS_FOR_MAP_VOTE&&lowerCaseMensaje.startsWith('!votarmapa')){startMapVoting()}
if(mapVotingActive&&lowerCaseMensaje.startsWith('!votarmapa ')){const votedMap=lowerCaseMensaje.slice(11);if(['futx5','futx7','futx2','futx3','futx4','futx5cesped','entrenamientofutsal'].includes(votedMap)&&!ElJugadorYaVoto(player.id,mapVotes)){mapVotes[votedMap]=mapVotes[votedMap]||[];mapVotes[votedMap].push(player.id);room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado por el mapa "${votedMap}"! (${mapVotes[votedMap].length} votos). ✔️`,null,0x0EFF00,"bold",0);room.sendAnnouncement(`🗳️ VOTOS REALIZADOS: ${getVoteResultsString()} | ⏳ VOTOS RESTANTES: ${getRemainingVotes()}`,null,0xFFB600,"bold",0);if(isMajorityVote(mapVotes[votedMap].length,room.getPlayerList().length)){endMapVoting();return}}else{room.sendAnnouncement(`[❌] ${player.name}, el mapa que mencionaste no es válido o ya has votado por ese mapa. Asegúrate de usar "!votarmapa <nombre del mapa> y que no hayas votado previamente.`,player.id,0xff2b52,"bold",0)}}
if(message.startsWith('!puntajes')){const sortedPlayers=Object.entries(playerPoints).sort(([,pointsA],[,pointsB])=>pointsB-pointsA);let announcementMessage="📋 PUNTUACIONES DEL PARTIDO ⚽️🕒:";sortedPlayers.forEach(([playerName,points],index)=>{const emoji=index===0?"🌟 FIGURA ":index===1?"🥈":index===2?"🥉":"➖";const CantidadGolesEnElPartido=playerGoals[playerName]||0;const CantidadAsistenciasEnElPartido=playerAssists[playerName]||0;announcementMessage+=`\n${emoji} ${playerName}: ${points} PUNTOS 🔥 (⚽️ GOLES: ${CantidadGolesEnElPartido} | 👟 ASISTENCIAS: ${CantidadAsistenciasEnElPartido} )`});room.sendAnnouncement(announcementMessage,player.id,0xFFD700,"bold",0)}
if(player.admin&&message.startsWith('!ip')){const ElNickname=message.substr(4).trim();const playerInfo=playerIPs.find(info=>info.nickname===ElNickname);if(playerInfo){room.sendAnnouncement(`🌐🔒 IP de "${ElNickname}": ${playerInfo.ip}`,player.id,0x05ff02,"normal",0)}else{room.sendAnnouncement(`🚫👤 No hubo ningún jugador que haya ingresado con el nickname: "${ElNickname}"`,player.id,0xFF5252,"normal",0)}}
var args=message.split(" ");if(args[0]==='!minutosllamada'&&args.length===2&&player.admin){const newWaitTime=parseInt(args[1]);if(!isNaN(newWaitTime)&&newWaitTime>=0){TiempoEsperaEnMilisegundos=newWaitTime*60000;room.sendAnnouncement(`Tiempo de espera para !llamaradmins establecido a ${newWaitTime} minutos.`,null,0x00FF00,'bold')}else{room.sendAnnouncement('Por favor, ingrese un valor válido para el tiempo de espera.',player.id,0xFF0000,'bold')}}
var MensajeEnMinusculas=message.toLowerCase();if(MensajeEnMinusculas.match(/^!llamaradmin(s)?\s*.*$/)){var ahora=new Date().getTime();if(ahora-ultimaLlamadaAdmins>=TiempoEsperaEnMilisegundos){const motivo=args.length>1?message.substring(message.indexOf(" ")+1):"No especifica";llamarAdmins(player.name,motivo);room.sendAnnouncement(`¡${player.name} ha llamado a los administradores para que vengan al host! 🔔`,null,0xFFC83D,'bold');ultimaLlamadaAdmins=ahora}else{room.sendAnnouncement(`Debes esperar al menos ${TiempoEsperaEnMilisegundos / 60000} minutos entre cada llamada a los admins ⏰`,player.id,0xff6666,'bold')}}
if(message==="!mvp"){let topMVPs=[];for(const playerName in playerFiguraCount){const figuraCount=playerFiguraCount[playerName];topMVPs.push({playerName,figuraCount})}
topMVPs.sort((a,b)=>b.figuraCount-a.figuraCount);topMVPs=topMVPs.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.figuraCount} ${entry.figuraCount === 1 ? 'vez MVP' : 'veces MVP'}`);topMVPs=topMVPs.join("\n");let messageContent=`⚽✨ Tabla de Jugadores MVP ✨⚽\n\n${topMVPs}`;room.sendAnnouncement(messageContent,player.id,0xFFD700,"bold");sendToDiscord(player,messageContent,0xFFFF00)}
if(message==="!niveles"){const levelTablePart1=`Tabla de Niveles:
Noob 😅 (Nivel 1) - 0 puntos
Amateur 🎮 (Nivel 2) - 1 punto
Aficionado ⚽️ (Nivel 3) - 2 puntos
Promesa 🌱 (Nivel 4) - 3 puntos
Avanzado 🚀 (Nivel 5) - 4 puntos
Experto 🧠 (Nivel 6) - 5 puntos
Profesional 🎯 (Nivel 7) - 10 puntos
Estrella ⭐ (Nivel 8) - 15 puntos
Distinto 👽 (Nivel 9) - 20 puntos
Maestro 🎓 (Nivel 10) - 30 puntos`;const levelTablePart2=`Sobrenatural 🌌 (Nivel 11) - 40 puntos
Crack 💥 (Nivel 12) - 50 puntos
Figura Máxima 👑 (Nivel 13) - 60 puntos
Elite 💎 (Nivel 14) - 70 puntos
Invencible 🛡️ (Nivel 15) - 80 puntos
Prodigio 🌟 (Nivel 16) - 90 puntos
Leyenda 🏆 (Nivel 17) - 95 puntos
Legendario 🐉 Bronce (Nivel 18) 🥉 - 100 puntos
Legendario 🐉 Plata (Nivel 19) 🥈 - 110 puntos`;const levelTablePart3=`Legendario 🐉 Oro (Nivel 20) 🥇 - 120 puntos
Legendario 🐉 Zafiro (Nivel 21) 🔷 - 130 puntos
Legendario 🐉 Rubí (Nivel 22) 🔴 - 140 puntos
Legendario 🐉 Esmeralda (Nivel 23) 🟢 - 150 puntos
Legendario 🐉 Amatista (Nivel 24) 🟣 - 160 puntos
Legendario 🐉 Perla (Nivel 25) ⚪ - 170 puntos
Legendario 🐉 Obsidiana (Nivel 26) ⚫ - 180 puntos
Legendario 🐉 Diamante (Nivel 27) 💎 - 190 puntos
Nota: 1 gol equivale a 1 punto y 1 asistencia equivale a 0.7 puntos`;setTimeout(function(){room.sendAnnouncement(levelTablePart1,player.id,0xFFFFFF,"normal",0)},0);setTimeout(function(){room.sendAnnouncement(levelTablePart2,player.id,0xFFFFFF,"normal",0)},1000);setTimeout(function(){room.sendAnnouncement(levelTablePart3,player.id,0xFFFFFF,"normal",0)},2000)}
if(player.admin){if(message==="!goldeoro"){GolDeOroActivado=!GolDeOroActivado;if(GolDeOroActivado){room.sendAnnouncement("🌟 El modo Gol de Oro está activado.",null,0xFFD700,"bold")}else{room.sendAnnouncement("🌟 El modo Gol de Oro está desactivado.",null,0xCCCC00,"bold")}}}
if(player.admin){if(message==="!fairplay"){FairPlayActivado=!FairPlayActivado;if(FairPlayActivado){room.sendAnnouncement("👍 El modo Fair Play está activado.",null,0x00FF00,"bold")}else{room.sendAnnouncement("👎 El modo Fair Play está desactivado.",null,0xFF0000,"bold")}}}
if(player.admin){if(message==="!automatizado"){if(automatizadoActivado){automatizadoActivado=!1;room.sendAnnouncement("🛑 Modo automatizado desactivado 🛑",null,0x00FF00,"bold")}else{automatizadoActivado=!0;room.sendAnnouncement("✅ Modo automatizado activado ✅",null,0x00FF00,"bold")}}}
if(RSRMap&&player.admin){if(message.startsWith("!minutos ")){var minutos=parseInt(message.substr(9));if(!isNaN(minutos)){gameTime=minutos;room.sendAnnouncement("La duración del juego ha sido establecida en "+gameTime+" minutos por "+player.name+".",null,0x00FF00,"bold")}}}
if(mensajeEnMinusculas==="!me"){if(isCooldown(player,"!me")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
const playerId=player.id;const playerName=player.name;const goals=totalPlayerGoals[playerName]||0;const assists=totalPlayerAssists[playerName]||0;const totalPoints=goals+assists*0.7;const levelInfo=getLevelInfo(totalPoints);const minutesPlayed=playerMinutesPlayed[playerName]||0;const goalkeeperTime=playerGoalkeeperTime[playerName]||0;const minutesPlayedInMinutes=(minutesPlayed/60)/60;const goalkeeperTimeInMinutes=(goalkeeperTime/60)/60;const goalPerMinute=goals/minutesPlayedInMinutes;const messageHeader=`🏆 Estadísticas de ${playerName} 🏆`;const goalsMessage=`⚽ Goles: ${getNumericEmoji(goals)}`;const assistsMessage=`👟 Asistencias: ${getNumericEmoji(assists)}`;const minutes=Math.floor(minutesPlayedInMinutes);const seconds=Math.floor((minutesPlayedInMinutes*60)%60);let minutesPlayedMessage="";if(minutesPlayedInMinutes>=60){const hours=Math.floor(minutesPlayedInMinutes/60);const remainingMinutes=minutes-hours*60;minutesPlayedMessage=`⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else if(minutesPlayedInMinutes>=1){minutesPlayedMessage=`⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else{minutesPlayedMessage=`⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`}
let goalkeeperTimeMessage="";if(goalkeeperTimeInMinutes>=60){const goalkeeperHours=Math.floor(goalkeeperTimeInMinutes/60);const goalkeeperRemainingMinutes=goalkeeperTimeInMinutes-goalkeeperHours*60;const goalkeeperMinutes=Math.floor(goalkeeperRemainingMinutes);const goalkeeperSeconds=Math.floor((goalkeeperRemainingMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperHours} hora${goalkeeperHours > 1 ? 's' : ''}, ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else if(goalkeeperTimeInMinutes>=1){const goalkeeperMinutes=Math.floor(goalkeeperTimeInMinutes);const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else{const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}
let goalPerMinuteMessage="";let goalFrequencyMessage="";if(goalPerMinute===0){goalPerMinuteMessage="⚽🕒 Promedio de gol por minuto: 0 (No ha marcado goles)"}else{goalPerMinuteMessage=`⚽🕒 Promedio de gol por minuto: ${goalPerMinute.toFixed(2)}`;const goalFrequency=60/goalPerMinute;const hoursBetweenGoals=Math.floor(goalFrequency/3600);const minutesBetweenGoals=Math.floor((goalFrequency%3600)/60);const secondsBetweenGoals=Math.floor(goalFrequency%60);let frequencyMessage="";if(hoursBetweenGoals>0){frequencyMessage+=`${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`}
if(minutesBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}}
if(secondsBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}}
goalFrequencyMessage=` (1 gol cada ${frequencyMessage})`}
const levelMessage=`🔝 Nivel: ${levelInfo.level} | [ ${totalPoints.toFixed(2)} Puntos ]`;const figuraCount=playerFiguraCount[playerName]||0;const figuraCountMessage=`⭐️ Figura del Partido: ${getNumericEmoji(figuraCount)} ${figuraCount === 1 ? 'vez' : 'veces'}`;if(!playerStats[playerName]){playerStats[playerName]={victories:0,draws:0,defeats:0,totalGames:0}}
const totalGamesMessage=`🎮 Partidos Jugados: ${getNumericEmoji(playerStats[playerName].totalGames)}`;const victoryPercentage=(playerStats[playerName].victories/playerStats[playerName].totalGames)*100;const victoryPercentageMessage=`📈 Porcentaje de Victorias: ${victoryPercentage.toFixed(2)}%`;const victoriesMessage=`✅ Victorias: ${getNumericEmoji(playerStats[playerName].victories)}`;const drawsMessage=`➖ Empates: ${getNumericEmoji(playerStats[playerName].draws)}`;const defeatsMessage=`❌ Derrotas: ${getNumericEmoji(playerStats[playerName].defeats)}`;const lastGamesMessage=getLastGamesMessage(playerName);const highestStreakMessage=`🏆 Racha Histórica: ${playerStats[playerName].highestStreak}`;const currentStreakMessage=`🔥 Racha Actual: ${playerStats[playerName].currentStreak}`;const goalsReceived=playerGoalsReceived[playerName]||0;const cleanSheets=playerCleanSheets[playerName]||0;const goalsReceivedMessage=`🥅 Goles Recibidos: ${getNumericEmoji(goalsReceived)}`;const cleanSheetsMessage=`🧤 Vallas Invictas: ${getNumericEmoji(cleanSheets)}`;const intervaloMinutos=5;const golesRecibidosPorIntervalo=goalsReceived/(goalkeeperTimeInMinutes/intervaloMinutos);let golesRecibidosPorIntervaloMessage="";if(golesRecibidosPorIntervalo===0){golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: 0 (No ha recibido goles)`}else{golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: ${golesRecibidosPorIntervalo.toFixed(2)}`}
const messageContent=`${messageHeader}
${levelMessage}
${highestStreakMessage} ${currentStreakMessage}
${totalGamesMessage} ${minutesPlayedMessage} ${victoryPercentageMessage}
${victoriesMessage} ${drawsMessage} ${defeatsMessage}
${goalsMessage} ${assistsMessage} ${figuraCountMessage}
${lastGamesMessage}
${goalPerMinuteMessage}${goalFrequencyMessage}
${goalkeeperTimeMessage} ${goalsReceivedMessage} ${cleanSheetsMessage}
${golesRecibidosPorIntervaloMessage}`;room.sendAnnouncement(messageContent,playerId,0x04FF5D,"bold");sendToDiscord(player,messageContent,0x04FF5D);return!0}
if(mensajeEnMinusculas.startsWith("!stats ")){if(isCooldown(player,"!stats")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
const playerId=parseInt(message.split(" ")[1]);if(!isNaN(playerId)){const playerInfo=room.getPlayer(playerId);if(playerInfo){const playerName=playerInfo.name;const goals=totalPlayerGoals[playerName]||0;const assists=totalPlayerAssists[playerName]||0;const totalPoints=goals+(assists*0.7);const levelInfo=getLevelInfo(totalPoints);const minutesPlayed=playerMinutesPlayed[playerName]||0;const minutesPlayedInMinutes=(minutesPlayed/60)/60;const goalPerMinute=goals/minutesPlayedInMinutes;const goalkeeperTime=playerGoalkeeperTime[playerName]||0;const goalkeeperTimeInMinutes=(goalkeeperTime/60)/60;const playerIdMessage=`ID del jugador: ${playerId}`;const goalsMessage=`⚽ Goles: ${getNumericEmoji(goals)}`;const assistsMessage=`👟 Asistencias: ${getNumericEmoji(assists)}`;const minutes=Math.floor(minutesPlayedInMinutes);const seconds=Math.floor((minutesPlayedInMinutes*60)%60);let minutesPlayedMessage="";if(minutesPlayedInMinutes>=60){const hours=Math.floor(minutesPlayedInMinutes/60);const remainingMinutes=minutes-hours*60;minutesPlayedMessage=`⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else if(minutesPlayedInMinutes>=1){minutesPlayedMessage=`⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else{minutesPlayedMessage=`⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`}
let goalPerMinuteMessage="";let goalFrequencyMessage="";let goalkeeperTimeMessage="";if(goalkeeperTimeInMinutes>=60){const goalkeeperHours=Math.floor(goalkeeperTimeInMinutes/60);const goalkeeperRemainingMinutes=goalkeeperTimeInMinutes-goalkeeperHours*60;const goalkeeperMinutes=Math.floor(goalkeeperRemainingMinutes);const goalkeeperSeconds=Math.floor((goalkeeperRemainingMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperHours} hora${goalkeeperHours > 1 ? 's' : ''}, ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else if(goalkeeperTimeInMinutes>=1){const goalkeeperMinutes=Math.floor(goalkeeperTimeInMinutes);const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else{const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}
if(goalPerMinute===0){goalPerMinuteMessage="⚽🕒 Promedio de gol por minuto: 0 (No ha marcado goles)"}else{goalPerMinuteMessage=`⚽🕒 Promedio de gol por minuto: ${goalPerMinute.toFixed(2)}`;const goalFrequency=60/goalPerMinute;const hoursBetweenGoals=Math.floor(goalFrequency/3600);const minutesBetweenGoals=Math.floor((goalFrequency%3600)/60);const secondsBetweenGoals=Math.floor(goalFrequency%60);let frequencyMessage="";if(hoursBetweenGoals>0){frequencyMessage+=`${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`}
if(minutesBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}}
if(secondsBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}}
goalFrequencyMessage=` (1 gol cada ${frequencyMessage})`}
const levelMessage=`🔝 Nivel: ${levelInfo.level} | [ ${totalPoints.toFixed(2)} Puntos ]`;const figuraCount=playerFiguraCount[playerName]||0;const figuraCountMessage=`⭐️ Figura del Partido: ${getNumericEmoji(figuraCount)} ${figuraCount === 1 ? 'vez' : 'veces'}`;if(!playerStats[playerName]){playerStats[playerName]={victories:0,draws:0,defeats:0,totalGames:0}}
const totalGamesMessage=`🎮 Partidos Jugados: ${getNumericEmoji(playerStats[playerName].totalGames)}`;const victoryPercentage=(playerStats[playerName].victories/playerStats[playerName].totalGames)*100;const victoryPercentageMessage=`📈 Porcentaje de Victorias: ${victoryPercentage.toFixed(2)}%`;const victoriesMessage=`✅ Victorias: ${getNumericEmoji(playerStats[playerName].victories)}`;const drawsMessage=`➖ Empates: ${getNumericEmoji(playerStats[playerName].draws)}`;const defeatsMessage=`❌ Derrotas: ${getNumericEmoji(playerStats[playerName].defeats)}`;const lastGamesMessage=getLastGamesMessage(playerName);const highestStreakMessage=`🏆 Racha Histórica: ${playerStats[playerName].highestStreak}`;const currentStreakMessage=`🔥 Racha Actual: ${playerStats[playerName].currentStreak}`;const goalsReceived=playerGoalsReceived[playerName]||0;const cleanSheets=playerCleanSheets[playerName]||0;const goalsReceivedMessage=`🥅 Goles Recibidos: ${getNumericEmoji(goalsReceived)}`;const cleanSheetsMessage=`🧤 Vallas Invictas: ${getNumericEmoji(cleanSheets)}`;const intervaloMinutos=5;const golesRecibidosPorIntervalo=goalsReceived/(goalkeeperTimeInMinutes/intervaloMinutos);let golesRecibidosPorIntervaloMessage="";if(golesRecibidosPorIntervalo===0){golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: 0 (No ha recibido goles)`}else{golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: ${golesRecibidosPorIntervalo.toFixed(2)}`}
const messageContent=`${playerName} | ${playerIdMessage}
${levelMessage}
${highestStreakMessage} ${currentStreakMessage}
${totalGamesMessage} ${minutesPlayedMessage} ${victoryPercentageMessage}
${victoriesMessage} ${drawsMessage} ${defeatsMessage}
${goalsMessage} ${assistsMessage} ${figuraCountMessage}
${lastGamesMessage}
${goalPerMinuteMessage}${goalFrequencyMessage}
${goalkeeperTimeMessage} ${goalsReceivedMessage} ${cleanSheetsMessage}
${golesRecibidosPorIntervaloMessage}`
room.sendAnnouncement(messageContent,null,0x04FF5D,"bold");sendToDiscord(player,messageContent,0x04FF5D);return!0}else{room.sendAnnouncement("⚠️ Jugador no encontrado | Coloca !ids para ver los IDs de los jugadores",player.id,0xFFFF00,"bold")}}else{room.sendAnnouncement("⚠️ Debes poner !stats ID | Ejemplo: !stats 15 (Para ver las stats del jugador con ID 15). Con !ids puedes ver los IDs de todos los jugadores.",player.id,0xFFFF00,"bold")}}
if(mensajeEnMinusculas==="!stats"){if(isCooldown(player,"!stats")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
room.sendAnnouncement("⚠️ Debes poner !stats ID | Ejemplo: !stats 15 (Para ver las stats del jugador con ID 15). Con !ids puedes ver los IDs de todos los jugadores.",player.id,0xFFFF00,"bold");return!0}
if(mensajeEnMinusculas==="!racha-actual"){if(isCooldown(player,"!racha-actual")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByCurrentStreak=Object.keys(playerStats).map(playerName=>({playerName,currentStreak:playerStats[playerName].currentStreak}));playersByCurrentStreak.sort((a,b)=>b.currentStreak-a.currentStreak);let currentStreakTable=playersByCurrentStreak.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.currentStreak} victorias consecutivas`);currentStreakTable=currentStreakTable.join("\n");let messageContent=`🔥 ¡Tabla de Rachas Actuales! 🔥\n\n${currentStreakTable}`;room.sendAnnouncement(messageContent,player.id,0xFF6347,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!racha-historica"){if(isCooldown(player,"!racha-historica")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByHighestStreak=Object.keys(playerStats).map(playerName=>({playerName,highestStreak:playerStats[playerName].highestStreak}));playersByHighestStreak.sort((a,b)=>b.highestStreak-a.highestStreak);let highestStreakTable=playersByHighestStreak.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.highestStreak} victorias consecutivas`);highestStreakTable=highestStreakTable.join("\n");messageContent=`🏆 ¡Tabla Histórica de Rachas! 🏆\n\n${highestStreakTable}`;room.sendAnnouncement(messageContent,player.id,0xFFB915,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!victorias"){if(isCooldown(player,"!victorias")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topVictories=[];for(const player in playerStats){topVictories.push({player,victories:playerStats[player].victories})}
topVictories.sort((a,b)=>b.victories-a.victories);topVictories=topVictories.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.victories} victorias`);topVictories=topVictories.join("\n");messageContent=`🏆 ¡Tabla de Victorias! ✅\n\n${topVictories}`;room.sendAnnouncement(messageContent,player.id,0x00FF00,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!vallas-invictas"){if(isCooldown(player,"!vallas-invictas")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByCleanSheets=Object.keys(playerCleanSheets).map(playerName=>({playerName,cleanSheets:playerCleanSheets[playerName]}));playersByCleanSheets.sort((a,b)=>b.cleanSheets-a.cleanSheets);let cleanSheetsTable=playersByCleanSheets.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.cleanSheets} vallas invictas`);cleanSheetsTable=cleanSheetsTable.join("\n");messageContent=`🥅⛔️ ¡Tabla de Vallas Invictas! ⛔🥅\n\n${cleanSheetsTable}`;room.sendAnnouncement(messageContent,player.id,0x04FF5D,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!goles-recibidos"){if(isCooldown(player,"!goles-recibidos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByGoalsReceived=Object.keys(playerGoalsReceived).map(playerName=>({playerName,goalsReceived:playerGoalsReceived[playerName]}));playersByGoalsReceived.sort((a,b)=>b.goalsReceived-a.goalsReceived);let goalsReceivedTable=playersByGoalsReceived.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.goalsReceived} goles recibidos`);goalsReceivedTable=goalsReceivedTable.join("\n");messageContent=`⚽🥅 ¡Tabla de Goles Recibidos! 🥅⚽\n\n${goalsReceivedTable}`;room.sendAnnouncement(messageContent,player.id,0xFF5C29,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!promedios-recibidos"){if(isCooldown(player,"!promedios-recibidos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByGoalAverage=Object.keys(playerStats).map(playerName=>{const goalsReceived=playerGoalsReceived[playerName]||0;const goalkeeperTime=playerGoalkeeperTime[playerName]||0;const goalkeeperTimeInMinutes=(goalkeeperTime/60)/60;const intervaloMinutos=5;const golesRecibidosPorIntervalo=goalsReceived/(goalkeeperTimeInMinutes/intervaloMinutos);return{playerName,goalAverage:golesRecibidosPorIntervalo}});playersByGoalAverage.sort((a,b)=>a.goalAverage-b.goalAverage);let goalAverageTable=playersByGoalAverage.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.goalAverage.toFixed(2)} goles cada 5 minutos`);goalAverageTable=goalAverageTable.join("\n");messageContent=`📊🥅 ¡Promedio de Goles Recibidos Cada 5 Minutos! \n\n${goalAverageTable}`;room.sendAnnouncement(messageContent,player.id,0xF9FF08,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!presencias"){if(isCooldown(player,"!presencias")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topPresences=[];for(const player in playerStats){topPresences.push({player,totalGames:playerStats[player].totalGames})}
topPresences.sort((a,b)=>b.totalGames-a.totalGames);topPresences=topPresences.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.totalGames} partidos jugados`);topPresences=topPresences.join("\n");messageContent=`🏆 ¡Tabla de Partidos Jugados! 🎮\n\n${topPresences}`;room.sendAnnouncement(messageContent,player.id,0xFFB900,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!viciosos"){if(isCooldown(player,"!viciosos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topViciosos=[];for(const player in playerMinutesPlayed){const minutesPlayedInMinutes=playerMinutesPlayed[player]/60/60;const minutes=Math.floor(minutesPlayedInMinutes);const seconds=Math.floor((minutesPlayedInMinutes*60)%60);let timePlayedMessage="";if(minutesPlayedInMinutes>=60){const hours=Math.floor(minutesPlayedInMinutes/60);const remainingMinutes=minutes-hours*60;timePlayedMessage=`⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else if(minutesPlayedInMinutes>=1){timePlayedMessage=`⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else{timePlayedMessage=`⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`}
topViciosos.push({player,minutesPlayed:playerMinutesPlayed[player],timePlayedMessage})}
topViciosos.sort((a,b)=>b.minutesPlayed-a.minutesPlayed);topViciosos=topViciosos.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.timePlayedMessage}`);topViciosos=topViciosos.join("\n");messageContent=`🏆 ¡Tabla de Tiempo Jugado! ⏱️\n\n${topViciosos}`;room.sendAnnouncement(messageContent,player.id,0xFFA500,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!ganadores"){if(isCooldown(player,"!ganadores")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topWinners=[];for(const player in playerStats){const victories=playerStats[player].victories;const totalGames=playerStats[player].totalGames;const winPercentage=totalGames===0?0:(victories/totalGames)*100;topWinners.push({player,winPercentage})}
topWinners.sort((a,b)=>b.winPercentage-a.winPercentage);topWinners=topWinners.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.winPercentage.toFixed(2)}% de victorias`);topWinners=topWinners.join("\n");messageContent=`🏆 ¡Tabla de Porcentaje de Victorias! 📈\n\n${topWinners}`;room.sendAnnouncement(messageContent,player.id,0xFFD700,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(message==="!equilibrar"&&player.admin){const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));room.sendAnnouncement("¡Equipos equilibrados según los niveles de los jugadores! ⚖️📊",null,0xffff99,"bold",0)}
if(mensajeEnMinusculas==="!puntos"){if(isCooldown(player,"!puntos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playerScoresAndLevels=[];for(const playerName in totalPlayerGoals){const goals=totalPlayerGoals[playerName]||0;const assists=totalPlayerAssists[playerName]||0;const totalPoints=goals+(assists*0.7);const levelInfo=getLevelInfo(totalPoints);playerScoresAndLevels.push({playerName,totalPoints,level:levelInfo.level})}
playerScoresAndLevels.sort((a,b)=>b.totalPoints-a.totalPoints);playerScoresAndLevels=playerScoresAndLevels.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.totalPoints.toFixed(2)} puntos - Nivel: ${entry.level}`);playerScoresAndLevels=playerScoresAndLevels.join("\n");messageContent=`🏆 ¡Lista de Puntajes y Niveles! 📊\n\n${playerScoresAndLevels}`;room.sendAnnouncement(messageContent,player.id,0x00FF00,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!goleadores"){if(isCooldown(player,"!goleadores")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topScorers=[];for(const player in totalPlayerGoals){topScorers.push({player,goals:totalPlayerGoals[player]})}
topScorers.sort((a,b)=>b.goals-a.goals);topScorers=topScorers.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.goals} goles`);topScorers=topScorers.join("\n");let messageContent=`🏆 ¡Tabla de Goleadores! ⚽\n\n${topScorers}`;room.sendAnnouncement(messageContent,player.id,0xffff00,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!asistidores"){if(isCooldown(player,"!asistidores")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topAssisters=[];for(const player in totalPlayerAssists){topAssisters.push({player,assists:totalPlayerAssists[player]})}
topAssisters.sort((a,b)=>b.assists-a.assists);topAssisters=topAssisters.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.assists} asistencias`);topAssisters=topAssisters.join("\n");let messageContent=`🏆 ¡Tabla de Asistidores! 👟\n\n${topAssisters}`;room.sendAnnouncement(messageContent,player.id,0x7DFFF9,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
if(mensajeEnMinusculas==="!promedios"){if(isCooldown(player,"!promedios")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topGoalScorersPerMinute=[];for(const player in totalPlayerGoals){const goals=totalPlayerGoals[player]||0;const minutesPlayed=playerMinutesPlayed[player]||1;const minutesPlayedInMinutes=(minutesPlayed/60)/60;const goalPerMinute=goals/minutesPlayedInMinutes;let frequencyMessage="";if(goalPerMinute>0){const goalFrequency=60/goalPerMinute;const hoursBetweenGoals=Math.floor(goalFrequency/3600);const minutesBetweenGoals=Math.floor((goalFrequency%3600)/60);const secondsBetweenGoals=Math.floor(goalFrequency%60);if(hoursBetweenGoals>0){frequencyMessage+=`${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`}
if(minutesBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}}
if(secondsBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}}}
topGoalScorersPerMinute.push({player,goalPerMinute,frequencyMessage})}
topGoalScorersPerMinute.sort((a,b)=>b.goalPerMinute-a.goalPerMinute);topGoalScorersPerMinute=topGoalScorersPerMinute.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.goalPerMinute.toFixed(2)} goles por minuto${entry.frequencyMessage ? `(1 gol cada ${entry.frequencyMessage})` : ''}`);topGoalScorersPerMinute=topGoalScorersPerMinute.join("\n");let messageContent=`⚽🏆 ¡Ranking de Promedios de Gol por Minuto! ⏱️⚽\n\n${topGoalScorersPerMinute}`;room.sendAnnouncement(messageContent,player.id,0xFFB900,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!0}
var lowerCaseMessage=removeAccents(message.toLowerCase());if(!adminVotingActive&&room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE&&message.startsWith('!admin')){startAdminVoting()}
if(adminVotingActive&&message.startsWith('!admin ')){const votedPlayerId=parseInt(message.slice(7));if(!isNaN(votedPlayerId)&&room.getPlayer(votedPlayerId)&&votedPlayerId!==player.id&&!isPlayerVoted(player.id,adminVotes)){adminVotes[votedPlayerId]=adminVotes[votedPlayerId]||[];adminVotes[votedPlayerId].push(player.id);const voteCount=adminVotes[votedPlayerId].length;const votesNeededToBecomeAdmin=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosAdmin/100));const votesRemaining=votesNeededToBecomeAdmin-voteCount;const voteType=voteCount===1?'voto':'votos';const votedPlayer=room.getPlayer(votedPlayerId);const votedPlayerInfo=votedPlayer?`${votedPlayer.name} (ID: ${votedPlayerId})`:votedPlayerId.toString();room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado a ${votedPlayerInfo} para ser ADMINISTRADOR del host! (${voteCount} ${voteType}). 🗦👑🗧 \n 📢 🗳️ VOTOS OBTENIDOS: ${voteCount} ✅ | ⏳ VOTOS RESTANTES: ${votesRemaining > 0 ? votesRemaining : 0}`,null,0x00ff59,"bold",2);if(voteCount>=votesNeededToBecomeAdmin){room.setPlayerAdmin(votedPlayerId,!0);room.sendAnnouncement(`🎉 ¡El jugador ${votedPlayerInfo} ha sido elegido como el nuevo administrador! (${voteCount} votos a favor) ¡Felicidades! 🥳`,null,0x00FF00);endAdminVoting()}}else{room.sendAnnouncement(`¨[❌] ${player.name}, el jugador que mencionaste no se encuentra en el host, ingresaste un valor incorrecto o ya has votado por ese jugador. Asegúrate de usar "!admin ID" con el número de ID correcto y que no hayas votado previamente. ✅  \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}}else if(!adminVotingActive&&room.getPlayerList().length<MIN_PLAYERS_FOR_ADMIN_VOTE&&message.startsWith('!admin ')){room.sendAnnouncement(`[❗] La votación para elegir administrador no se puede iniciar. \n ⏬ Se necesitan un mínimo de ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores para iniciar una votación de administrador. 🗳️`,player.id,0xffbf00,"small-bold",1)}else if(adminVotingActive&&message.startsWith('!admin')){room.sendAnnouncement(`[❗] ${player.name}, para votar a un jugador como administrador, usa "!admin ID" con el número de ID correcto. \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}
const mensajesHumillantes=["Kickeado por payaso. 🤡","Adiós, fantasma. Los admins no se tocan. 👻","¿Expulsar a un admin? Kickeado por gracioso. Ni lo intentes. 😂👋","¿Expulsar a un admin? Kickeado por atrevido. 😎🔥","Kickeado por intentar ser el lobo. Spoiler: eres el cordero. 🐺❌","Intentaste expulsar a un admin… pero te autoexpulsaste por tonto. 🤡","¿Creíste que podías echar a un admin? JAJAJA. Kickeado por payaso. 🤡","¿Te pensaste el dueño de la sala? Spoiler: no lo eres. Chau. 👋😂","Tienes el coeficiente de una piedra. Mejor no vuelvas. 🪨❌","Esto es HaxBall, no un circo. Payasos como tú, afuera. 🤹🚫"];function obtenerMensajeHumillante(){const indice=Math.floor(Math.random()*mensajesHumillantes.length);return mensajesHumillantes[indice]}
if(!kickVotingActive&&room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE&&message.startsWith('!expulsar')){startKickVoting()}
if(kickVotingActive&&message.startsWith('!expulsar ')){const kickedPlayerId=parseInt(message.slice(9));if(!isNaN(kickedPlayerId)&&room.getPlayer(kickedPlayerId)){const kickedPlayer=room.getPlayer(kickedPlayerId);if(esAdminValido(kickedPlayer)){const mensajeHumillante=obtenerMensajeHumillante();room.kickPlayer(player.id,mensajeHumillante,!1);room.sendAnnouncement(`[${player.name}] intentó expulsar a un admin con el comando !expulsar y terminó kickeado como un completo idiota. Aprendan de su error. 🤡`,null,0xFFFFFF,"bold",2);return}
if(kickedPlayerId!==player.id&&!isPlayerVoted(player.id,kickVotes)){kickVotes[kickedPlayerId]=kickVotes[kickedPlayerId]||[];kickVotes[kickedPlayerId].push(player.id);const voteCount=kickVotes[kickedPlayerId].length;const votesNeededToKick=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosBan/100));const votesRemaining=votesNeededToKick-voteCount;const voteType=voteCount===1?'voto':'votos';const kickedPlayerInfo=kickedPlayer?`${kickedPlayer.name} (ID: ${kickedPlayerId})`:kickedPlayerId.toString();room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado para EXPULSAR a ${kickedPlayerInfo} del host! (${voteCount} ${voteType}). 🚫 \n 📢 🗳️ VOTOS OBTENIDOS: ${voteCount} ✅ | ⏳ VOTOS RESTANTES: ${votesRemaining > 0 ? votesRemaining : 0}`,null,0xFFE000,"bold",2);if(voteCount>=votesNeededToKick){room.kickPlayer(kickedPlayerId,"Expulsado por votación de la comunidad",!0);room.sendAnnouncement(`👢 ¡El jugador ${kickedPlayerInfo} ha sido expulsado por votación de la comunidad! (${voteCount} votos a favor)`,null,0xFF0000);endKickVoting()}}}else if(isNaN(kickedPlayerId)){room.sendAnnouncement(`[❗] ${player.name}, después de "!expulsar" debes ingresar el número de ID del jugador que deseas expulsar. \n Ejemplo: !expulsar 123 \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}else{room.sendAnnouncement(`[❌] ${player.name}, el jugador que mencionaste no se encuentra en el host, ingresaste un valor incorrecto o ya has votado por ese jugador. Asegúrate de usar "!expulsar ID" con el número de ID correcto y que no hayas votado previamente. \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}}else if(!kickVotingActive&&room.getPlayerList().length<MIN_PLAYERS_FOR_KICK_VOTE&&message.startsWith('!expulsar ')){room.sendAnnouncement(`[❗] La votación para expulsar a un jugador no se puede iniciar. \n ⏬ Se necesitan un mínimo de ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores para iniciar una votación de expulsión. 🗳️`,player.id,0xffbf00,"small-bold",1)}else if(kickVotingActive&&message.startsWith('!expulsar')){room.sendAnnouncement(`[❗] ${player.name}, para votar la expulsión de un jugador, usa "!expulsar ID" con el número de ID correcto. \n Ejemplo: !expulsar 123 \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}
if(player.admin&&message.startsWith('!publicidad')){const command=message.split(' ');if(command.length>=3){const minutes=parseFloat(command[1]);const msg=command.slice(2).join(' ');if(!isNaN(minutes)&&minutes>0){advertisingMinutes=minutes;advertisingMessage=msg;clearInterval(advertisingInterval);advertisingInterval=setInterval(sendAdvertisingMessage,advertisingMinutes*60*1000);room.sendAnnouncement(`Publicidad programada para cada ${advertisingMinutes} minutos: "${advertisingMessage}"`)}else{if(minutes===0){room.sendAnnouncement('Error: La cantidad de minutos debe ser un número mayor a 0.')}else{room.sendAnnouncement('Error: La cantidad de minutos debe ser un número mayor a 0.')}}}else{room.sendAnnouncement('Error: Comando de publicidad inválido. Formato correcto: !publicidad <minutos> <mensaje>')}}
if(player.admin){if(message.indexOf('!silenciar')===0){var palabra=message.split(' ')[1];palabrasSilenciadas.push(palabra);room.sendAnnouncement('La palabra "'+palabra+'" ha sido silenciada.',null,0xFF0000,"bold")}else if(message.indexOf('!desilenciar')===0){var palabra=message.split(' ')[1];var indice=palabrasSilenciadas.indexOf(palabra);if(indice!==-1){palabrasSilenciadas.splice(indice,1);room.sendAnnouncement('La palabra "'+palabra+'" ha sido habilitada.',null,0xFF0000,"bold")}}}else{if(palabrasSilenciadas.some(function(palabra){return message.indexOf(palabra)!==-1})){return!1}}
if(player.admin){if(message==="!random"){shuffleTeams()}else if(message==="!balance"){balanceTeams()}else if(message==="!auto_balance"){if(autoBalanceEnabled){autoBalanceEnabled=!1;room.sendAnnouncement("¡El equilibrio automático de equipos ha sido desactivado! ⚖️⚙️❌",null,0xff2020,"bold")}else{autoBalanceEnabled=!0;room.sendAnnouncement("¡El equilibrio automático de equipos ha sido activado! ⚖️⚙️✅",null,0x00ff3c,"bold")}}}
var lowerCaseMessage=removeAccents(message.toLowerCase());if(lowerCaseMessage.includes("como me hago gordo")||lowerCaseMessage.includes("como me hago pequeño")||lowerCaseMessage.includes("como me hago grande")||lowerCaseMessage.includes("porque hay un gordo")||lowerCaseMessage.includes("porque hay uno pequeño")||lowerCaseMessage.includes("porque hay un enano")||lowerCaseMessage.includes("por que hay un gordo")||lowerCaseMessage.includes("por que hay uno pequeño")||lowerCaseMessage.includes("por que hay un enano")||lowerCaseMessage.includes("quiero ser enano")||lowerCaseMessage.includes("quiero ser gordo")||lowerCaseMessage.includes("como me hago gigante")){room.sendAnnouncement("Para cambiar tu tamaño, utiliza el comando !size",player.id,0xFF0000)}
if(message==="!posesion"){const totalPosesion=equipoAzulPosesion+equipoRojoPosesion;let porcentajeAzul=0;let porcentajeRojo=0;if(totalPosesion>0){porcentajeAzul=(equipoAzulPosesion/totalPosesion)*100;porcentajeRojo=(equipoRojoPosesion/totalPosesion)*100}
room.sendAnnouncement(` `+teamRed+`  ${porcentajeAzul.toFixed(2)}% - `+teamBlue+` : ${porcentajeRojo.toFixed(2)}%`)}
if(player.admin){const parts=message.split(' ');if(parts[0]==='!juegan'&&parts.length===2){const maxPlayers=parseInt(parts[1]);if(!isNaN(maxPlayers)&&maxPlayers>=1&&maxPlayers<=15){maxPlayersPerTeam=maxPlayers;room.sendAnnouncement(player.name+' ha establecido el número máximo de jugadores por equipo en '+maxPlayersPerTeam+' 🏆',null,0x00ff55,'bold');modoJueganAlgunos=!0;modoJueganTodos=!1}else{room.sendAnnouncement(player.name+', por favor, introduce un número válido entre 1 y 15. 🛑',player.id,0xff6340,'bold')}}else if(parts[0]==='!juegantodos'){modoJueganTodos=!modoJueganTodos;modoJueganAlgunos=!1;if(modoJueganTodos){room.sendAnnouncement(player.name+' ha ACTIVADO el Modo 🎮 JUEGAN TODOS 🤩',null,0x00ff55,'bold')}else{room.sendAnnouncement(player.name+' ha DESACTIVADO el Modo 🎮 JUEGAN TODOS 🚫',null,0xff6340,'bold')}}else if(parts[0]==='!juegan-off'){modoJueganAlgunos=!1;room.sendAnnouncement(player.name+' ha DESACTIVADO el Modo 🎮 JUEGAN ALGUNOS 🚫',null,0xff6340,'bold')}}
if(mensajeEnMinusculas.startsWith("!pregunta")){if(isCooldown(player,"!pregunta")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
var pregunta=message.substring(9).trim();var respuesta=generar_respuesta_aleatoria();var anuncio=player.name+" ha preguntado: "+pregunta+" || 🗿 CHAD dice: \""+respuesta+"\"";room.sendAnnouncement(anuncio,null,0xffac5e,"bold");return!0}
if(message.startsWith("@@")){message=message.substr(2).trim();if(message.indexOf(' ')!==-1){let args=message.match(/^(\S+)\s(.*)/).slice(1);if(args.length>1){var pmMsg=args[1];var players=room.getPlayerList();var pmSent=!1;players.forEach(function(pmPlayer){if(pmPlayer.name===args[0]||pmPlayer.name===args[0].replace(/_/g,' ')){whisper("[💬 PM ➤ "+pmPlayer.name+"] "+player.name+": "+pmMsg,player.id,0xc7a2ff,"bold",1);whisper("[💬 PM] "+player.name+": "+pmMsg,pmPlayer.id,0xc7a2ff,"bold",2);pmSent=!0}});if(pmSent==!1){whisper("No se pudo encontrar el usuario '"+args[0]+"'",player.id,0xff20ff,"normal",1)}
return!1}}}
if(filter(message))return!1;var Jugadores=room.getPlayerList();console.log(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+"."+new Date().getMilliseconds()+" 💬 "+player.name+" ["+player.id+"]: "+message);if(message.includes(ClaveParaSerAdmin)){room.setPlayerAdmin(player.id,!0);return!1}
playerFound=!0;var _0x21989d=_0x3c81f9;let spacePos=message.search(" ");let command=message.substr(0,spacePos!==-1?spacePos:message.length);if(commands.hasOwnProperty(command)){let currentTime=Date.now();if(player.admin||!lastCommandTime[player.id]||currentTime-lastCommandTime[player.id]>commandCooldown){commands[command](player,message);lastCommandTime[player.id]=currentTime;return!0}else{room.sendAnnouncement("Por favor, espera antes de usar otro comando.",player.id);return!1}}
spacePos=message.search(" ");let comandoGLH=message.substr(0,spacePos!==-1?spacePos:message.length).toLowerCase();if(comandosGLH.hasOwnProperty(comandoGLH)){let currentTime=Date.now();if(player.admin||!lastCommandTime[player.id]||currentTime-lastCommandTime[player.id]>commandCooldown){comandosGLH[comandoGLH](player,message);lastCommandTime[player.id]=currentTime;return!0}else{room.sendAnnouncement("Por favor, espera antes de usar otro comando.",player.id);return!1}}
if(playerInactivity.has(player.id)){clearTimeout(playerInactivity.get(player.id));const inactivityTimer=setTimeout(()=>{room.kickPlayer(player.id,"⌛️ EXPULSADO por INACTIVIDAD 😴🚫",!1);playerInactivity.delete(player.id)},inactivityTimeout);playerInactivity.set(player.id,inactivityTimer)}
if(message.includes("cuando")&&PartidoArrancado==!0)return penalespregunta(player,message);if(message.includes("cuanto")&&PartidoArrancado==!0)return penalespregunta(player,message);if(message.includes("time")&&PartidoArrancado==!0)return penalespregunta(player,message);if(message.includes("tiempo")&&PartidoArrancado==!0)return penalespregunta(player,message);if(message.includes("equipos")&&PartidoArrancado==!0)return QuienJuegaPregunta(player,message);if(message=='!realfutsal'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getRealFutsal())}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!entrenamientofutsal'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getEntrenamientoFutsalMap());room.setScoreLimit(0);room.setTimeLimit(0)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!powershot'&&player.admin==!0){if(powerShotMode==!1){powerShotMode=!0;announce("POWERSHOT ACTIVADO POR "+player.name,null,0x00FF00)}else{powerShotMode=!1;announce("POWERSHOT DESACTIVADO POR "+player.name,null,0xFF0000)}}
if(message=='!futx2'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx2Map());room.setScoreLimit(3);room.setTimeLimit(3)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message.indexOf("!")===0){if(player.admin){return handleAdminCommand(player,message)}
return!1}
if(!handleCooldown(player))return!1;if(message.startsWith('t ')){const teamMsg=message.substring(2).trim();if(player.team===0){whisper('[⚠️] Debes estar en el Equipo Rojo 🔴 o en el Equipo Azul 🔵 para poder utilizar el Team Chat',player.id);return!1}
sendTeamMessage(player,teamMsg);return!1}
const isAdmin=player.admin===!0;const mentionedPlayers=getMentionedPlayers(message);if(!handleMentions(player,message,adminChatColor,NombreROLAdmin,isAdmin)){return!1}
if(mentionedPlayers.length>0){const prefix=getPlayerPrefix(player);const playerRole=NickNamesRol1.includes(player.name)?{name:NombreROL1,color:ColorDelChatROL1}:NickNamesRol2.includes(player.name)?{name:NombreROL2,color:ColorDelChatROL2}:NickNamesRol3.includes(player.name)?{name:NombreROL3,color:ColorDelChatROL3}:NickNamesRol4.includes(player.name)?{name:NombreROL4,color:ColorDelChatROL4}:NickNamesRol5.includes(player.name)?{name:NombreROL5,color:ColorDelChatROL5}:NickNamesRol6.includes(player.name)?{name:NombreROL6,color:ColorDelChatROL6}:NickNamesRol7.includes(player.name)?{name:NombreROL7,color:ColorDelChatROL7}:isAdmin?{name:NombreROLAdmin,color:adminChatColor}:player.team===1?{name:NombreROLRed,color:RedChatColor}:player.team===2?{name:NombreROLBlue,color:BlueChatColor}:{name:NombreROLSpect,color:SpectChatColor};const mensajeFinal=jugadoresConEmojis.has(player.id)?reemplazarPorEmojis(message):message;mentionedPlayers.forEach(mentionedPlayer=>{room.sendAnnouncement(`${prefix} ${playerRole.name} ~ ${player.name}: ${mensajeFinal}`,mentionedPlayer.id,playerRole.color,"bold",2)});const mentionedIDs=mentionedPlayers.map(p=>p.id);const remainingPlayers=room.getPlayerList().filter(p=>!mentionedIDs.includes(p.id));remainingPlayers.forEach(p=>{room.sendAnnouncement(`${prefix} ${playerRole.name} ~ ${player.name}: ${mensajeFinal}`,p.id,playerRole.color,RoleAttributes[playerRole.name]?.style||"normal",RoleAttributes[playerRole.name]?.sound||1)});return!1}
const prefix=getPlayerPrefix(player);const playerRole=NickNamesRol1.includes(player.name)?{name:NombreROL1,color:ColorDelChatROL1}:NickNamesRol2.includes(player.name)?{name:NombreROL2,color:ColorDelChatROL2}:NickNamesRol3.includes(player.name)?{name:NombreROL3,color:ColorDelChatROL3}:NickNamesRol4.includes(player.name)?{name:NombreROL4,color:ColorDelChatROL4}:NickNamesRol5.includes(player.name)?{name:NombreROL5,color:ColorDelChatROL5}:NickNamesRol6.includes(player.name)?{name:NombreROL6,color:ColorDelChatROL6}:NickNamesRol7.includes(player.name)?{name:NombreROL7,color:ColorDelChatROL7}:isAdmin?{name:NombreROLAdmin,color:adminChatColor}:player.team===1?{name:NombreROLRed,color:RedChatColor}:player.team===2?{name:NombreROLBlue,color:BlueChatColor}:{name:NombreROLSpect,color:SpectChatColor};const roleAttr=RoleAttributes[playerRole.name]||{style:"normal",sound:1};const mensajeFinal=jugadoresConEmojis.has(player.id)?reemplazarPorEmojis(message):message;room.sendAnnouncement(`${prefix} ${playerRole.name} ~ ${player.name}: ${mensajeFinal}`,null,playerRole.color,roleAttr.style,roleAttr.sound);return!1;if(CensuradorDeSpammeros(message))return!1;if(message.indexOf("!")==0)return!1}
function whisper(message,playerId){room.sendAnnouncement(message,playerId,0xFFFF00,"bold",2)}
function sendAdvertisingMessage(){const currentTimez=Date.now();if(currentTimez-lastAdvertisingTime>=advertisingMinutes*60*1000){room.sendAnnouncement("　",null,0xFFFFFF,"bold",0);room.sendAnnouncement("　　　　　　　　"+advertisingMessage,null,0xFFFFFF,"bold",2);lastAdvertisingTime=currentTimez}}
function ElJugadorYaVoto(playerId,votesObject){for(const votedMap in votesObject){if(votesObject[votedMap].includes(playerId)){return!0}}
return!1}
function getRemainingVotes(){const totalPlayers=room.getPlayerList().length;let playersVoted=0;for(const votedMap in mapVotes){playersVoted+=mapVotes[votedMap].length}
const remainingVotes=totalPlayers-playersVoted;if(remainingVotes===0){endMapVoting()}
return Math.max(0,remainingVotes)}
let votacionTimer;function isPlayerVoted(playerId,votesObject){for(const votedPlayerId in votesObject){if(votesObject[votedPlayerId].includes(playerId)){return!0}}
return!1}
function startAdminVoting(){if(!adminVotingActive){if(room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE){adminVotingActive=!0;adminVotes={};setTimeout(function(){endAdminVoting()},DURACION_VOTACION*1000);room.sendAnnouncement('📢 ¡La votación para elegir un nuevo administrador ha comenzado! Escribe "!admin id" para votar por agregar un jugador como administrador. 🗳️',null,0xFF0000);room.sendAnnouncement('📝 Para votar, escribe "!admin id" donde "id" es el número de ID del jugador que deseas votar para ser administrador del host. ¡Con !ids podrás ver los IDs de todos los jugadores! 🗳️',null,0xFFFFFF)}else{room.sendAnnouncement(`❗ Se necesitan al menos ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores para iniciar la votación de administrador. ¡Espera a que se unan más jugadores! ❗`,null,0xFF0000)}}}
function endAdminVoting(){if(adminVotingActive){adminVotingActive=!1;let maxVotes=0;let adminToAdd=null;for(const votedPlayerId in adminVotes){const voteCount=adminVotes[votedPlayerId].length;if(voteCount>maxVotes){maxVotes=voteCount;adminToAdd=votedPlayerId}}
const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosAdmin/100));if(adminToAdd!==null&&maxVotes>=votesNeeded){room.setPlayerAdmin(adminToAdd,!0);const votedPlayer=room.getPlayer(adminToAdd);const votedPlayerInfo=votedPlayer?`${votedPlayer.name} (ID: ${adminToAdd})`:adminToAdd.toString();room.sendAnnouncement(`🎉 ¡El jugador ${votedPlayerInfo} ha sido elegido como el nuevo administrador! (${maxVotes} votos a favor) ¡Felicidades! 🥳`,null,0x00FF00)}else{room.sendAnnouncement('¡La Votación de Administrador ha llegado a su Fin! 🗳️ |🌟 ¡Gracias a todos por participar! 🌟',null,0xFF0000)}}}
function startKickVoting(){if(!kickVotingActive){if(room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE){kickVotingActive=!0;kickVotes={};setTimeout(function(){endKickVoting()},DURACION_VOTACION*1000);room.sendAnnouncement('📢 ¡La votación para expulsar a un jugador ha comenzado! Escribe "!expulsar id" para votar por la expulsión de un jugador. 🗳️',null,0xFF0000);room.sendAnnouncement('📝 Para votar, escribe "!expulsar id" donde "id" es el número de ID del jugador que deseas expulsar. ¡Con !ids podrás ver los IDs de todos los jugadores! 🗳️',null,0xFFFFFF)}else{room.sendAnnouncement(`❗ Se necesitan al menos ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores para iniciar la votación de expulsión. ¡Espera a que se unan más jugadores! ❗`,null,0xFF0000)}}}
function endKickVoting(){if(kickVotingActive){kickVotingActive=!1;let maxVotes=0;let playerToKick=null;for(const kickedPlayerId in kickVotes){const voteCount=kickVotes[kickedPlayerId].length;if(voteCount>maxVotes){maxVotes=voteCount;playerToKick=kickedPlayerId}}
const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosBan/100));if(playerToKick!==null&&maxVotes>=votesNeeded){room.kickPlayer(playerToKick,"Expulsado por votación de la comunidad",!1);const kickedPlayer=room.getPlayer(playerToKick);const kickedPlayerInfo=kickedPlayer?`${kickedPlayer.name} (ID: ${playerToKick})`:playerToKick.toString();room.sendAnnouncement(`👢 ¡El jugador ${kickedPlayerInfo} ha sido expulsado por votación de la comunidad! (${maxVotes} votos a favor)`,null,0xFF0000)}else{room.sendAnnouncement('¡La Votación de Expulsión ha llegado a su Fin! 🗳️ |🌟 ¡Gracias a todos por participar! 🌟',null,0xFF0000)}}}
function shuffleArray(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}
return array}
setInterval(autoBalanceTeams,1000);function extraTime(){var extraSeconds=Math.ceil(game.extraTimeCount/60);var extraMinutes=Math.floor(extraSeconds/60);var remainingSeconds=extraSeconds-(extraMinutes*60);game.extraTimeEnd=gameTime*60+extraSeconds;var timeAddedMessage=`⌚ TIEMPO DE JUEGO: ${gameTime} MINUTO${gameTime === 1 ? '' : 'S'} ➕ ⏳ TIEMPO ADICIONADO: `;if(extraMinutes>0){timeAddedMessage+=`${extraMinutes} MINUTO`;if(extraMinutes>1){timeAddedMessage+="S"}}
if(remainingSeconds>0){if(extraMinutes>0){timeAddedMessage+=" y "}
timeAddedMessage+=`${remainingSeconds} SEGUNDO`;if(remainingSeconds>1){timeAddedMessage+="S"}}
announce(`                                   ${timeAddedMessage}`,null,null,null,1)}
function QuienJuegaPregunta(player,message){announce("--- ESTAN JUGANDO: "+teamRed+" vs "+teamBlue+" ---",player.id,null,null,1)}
function penalespregunta(player,message){var extraSeconds=Math.ceil(game.extraTimeCount/60);var extraMinutes=Math.round((extraSeconds-(100*0))/60);var SegundosDeSobra1min=Math.round((extraSeconds-(100*0))-60);var SegundosDeSobra2min=Math.round((extraSeconds-(100*0))-120);var SegundosDeSobra3min=Math.round((extraSeconds-(100*0))-180);var SegundosDeSobra4min=Math.round((extraSeconds-(100*0))-240);var SegundosDeSobra5min=Math.round((extraSeconds-(100*0))-300);var SegundosDeSobra6min=Math.round((extraSeconds-(100*0))-360);game.extraTimeEnd=(gameTime*60)+extraSeconds;if(extraSeconds<60){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO:  "+extraSeconds+" SEGUNDOS [Por ahora] ",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>59&&extraSeconds<61){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 1 MINUTO [Por ahora] ",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>60&&extraSeconds<120){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 1 MINUTO y "+SegundosDeSobra1min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>119&&extraSeconds<121){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 2 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>120&&extraSeconds<180){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 2 MINUTOS  y "+SegundosDeSobra2min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>179&&extraSeconds<181){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 3 MINUTOS ",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>180&&extraSeconds<240){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 3 MINUTOS  y "+SegundosDeSobra3min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>239&&extraSeconds<241){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 4 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>240&&extraSeconds<300){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 4 MINUTOS  y "+SegundosDeSobra4min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>299&&extraSeconds<301){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 5 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>300&&extraSeconds<360){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 5 MINUTOS  y "+SegundosDeSobra5min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>359&&extraSeconds<361){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 6 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>360&&extraSeconds<420){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 6 MINUTOS  y "+SegundosDeSobra6min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}}
function displayHelp(_0x13aab6,_0x878a40){var _0x37f4ef=_0x3c81f9;_0x878a40==null&&whisper(_0x37f4ef(0x124),_0x13aab6,null,'small')}
function sendGKAnnouncement(player){var players=room.getPlayerList();var redPlayers=players.filter(player=>player.team===1);var bluePlayers=players.filter(player=>player.team===2);ArqueroRED=redPlayers.reduce((minXPlayer,currentPlayer)=>{return minXPlayer.position.x<currentPlayer.position.x?minXPlayer:currentPlayer},redPlayers[0]);ArqueroBLUE=bluePlayers.reduce((maxXPlayer,currentPlayer)=>{return maxXPlayer.position.x>currentPlayer.position.x?maxXPlayer:currentPlayer},bluePlayers[0]);var message="";if(ArqueroRED){message+="🔴 🧤⚽ GK "+teamRed+": "+ArqueroRED.name}else{message+="🔴 🧤⚽ GK "+teamRed+": ❌ No tiene "}
message+=" ------- ";if(ArqueroBLUE){message+="🔵 🧤⚽ GK "+teamBlue+": "+ArqueroBLUE.name}else{message+="🔵 🧤⚽ GK "+teamBlue+": ❌ No tiene "}
if(!ArqueroRED&&!ArqueroBLUE){message="❌ 🧤⚽ No hay arqueros en ninguno de los dos equipos."}
room.sendAnnouncement(message,player.id,0xFFFFFF,"bold",0)}
room[_0x3c81f9(0x138)]=function(player){if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}
registerPlayerTime(player.id,player.team);if(room.getScores()!=null){if(1<=player.team<=2)ballCarrying.set(player.name,[0,player.team]);}
var _0x2dee93=_0x3c81f9;map==_0x2dee93(0x1ca)&&(room[_0x2dee93(0x172)]()!=null&&(game[_0x2dee93(0x189)]==![]&&room[_0x2dee93(0x145)]()[_0x2dee93(0x19a)](function(_0x96d16c){var _0x50b12d=_0x2dee93;if(_0x96d16c!=undefined){if(game[_0x50b12d(0x165)]==!![]||game[_0x50b12d(0x133)]==!![]){var _0x4bfeae={};_0x4bfeae[_0x50b12d(0x13e)]=0x98967f,room[_0x50b12d(0x125)](_0x96d16c.id,_0x4bfeae)}}})));if(player.team!==0&&afkPlayerIDs.has(player.id)){room.setPlayerTeam(player.id,0);room.sendAnnouncement("😴 ¡El jugador "+player.name+" sigue A F K!",null,0xff8400,'bold',2);room.sendAnnouncement("🚨 Con !kickafks podrás kickearlo. Si "+player.name+" escribe !afk nuevamente saldrá del AFK. 🚨",null,0xff8400,'bold',1)}}
function getRandomScorerMessage(){let equipoRival=game.lastKickerTeam===1?teamBlue:teamRed;let arqueroRival=game.lastKickerTeam===1?(ArqueroBLUE?ArqueroBLUE.name:"nadie"):(ArqueroRED?ArqueroRED.name:"nadie");const scorerMessages=[`⚽🎉 ¡Golazo de ${game.lastKickerName}!`,`🔥⚽ ${game.lastKickerName} se cogió a ${equipoRival} y ${arqueroRival} no pudo hacer nada.`,`💥🔥🍆 ${game.lastKickerName} no para de repartir pija, se coge absolutamente a todos los de ${equipoRival}. 😈🥵`,`🤯💥⚡ El golazo que hizo ${game.lastKickerName}, pijudo hijo de re mil puta. ⚽🔥`,`👌⚽👏 ¡Bien definido por ${game.lastKickerName}!`,`🍷🚬🗿 La definición de ${game.lastKickerName} definitivamente es cine.`,`⚽🔥 ¡Golazo de ${game.lastKickerName} que está jugando desnudo! 🔞🍆`,`🔥⚽ Eduque ${game.lastKickerName}, eduque 👏👏`,`💪🔥⚽ Cuando sos crack, sos crack... ¡Y ${game.lastKickerName} lo acaba de demostrar! 👑`,`⚡⚽🍆 ${game.lastKickerName} se cogió a ${arqueroRival} con ese gol, alta putita el arquero de ${equipoRival}! 🧤🥵`,`💀⚽🔥 Alta putita ${equipoRival}, ${game.lastKickerName} se los cogió sin piedad. 🚬😎`,`🤩⚡🔥 ¡Naa, que golazo les marcó ${game.lastKickerName} a los de ${equipoRival}! 😱⚽`,`🎯⚽ ¡99 de definición, ${game.lastKickerName} definió con la punta de su tremenda pija! 🍆🔥`,`💥⚽🔥 ¡Ufff, qué golazo acaba de marcarle ${game.lastKickerName} a los de ${equipoRival}! 😱⚽`,`👀🍑🔥 ${game.lastKickerName} le rompió bien el ojete a los ${equipoRival} con ese golazo! 💥⚽`,`⚽👀 ¡Mirá el golazo que clavó el pijudo hijo de re mil puta de ${game.lastKickerName}! 😈🍆🔥`,`⚽🔥 ${game.lastKickerName} se cogió a ${arqueroRival} con ese gol. 🔥`,`⚽🔥 ${game.lastKickerName} le rompió bien el ojete a ${arqueroRival}. 🍑💥🔥`,`🔥 Parece que a los de ${equipoRival} les encanta comer pija de ${game.lastKickerName} 🍆🥵`,`🔥⚽ ${game.lastKickerName} le rompió bien el orto a ${equipoRival} con ese golazo. 🍑💥🥵`,`👅🍑🔥 Los de ${equipoRival} son la puta preferida de ${game.lastKickerName}. 😏⚽`,`🧤🍩 ${arqueroRival} entregó el rosquete y ${game.lastKickerName} se lo cogió con ese gol. ⚽🔥`,`🔥⚽ El jugador ${game.lastKickerName} no para de coger a los de ${equipoRival}. 😈`,`🍆💦🥵 ${game.lastKickerName} le pasó toda la pija en la cara a ${arqueroRival} con ese golazo. ⚽🔥`,`😈🔥⚽ Llegó ${game.lastKickerName} y ya empezó a repartir pija. 🍆🥵`,`👅🍑🔥 El arquero ${arqueroRival} goloso como siempre entregándole el marrón a ${game.lastKickerName}. 😏🍩`];return scorerMessages[Math.floor(Math.random()*scorerMessages.length)]}
function getRandomScorerMessage2(){const scorerMessages2=["⚽🔥 ¡**GOL** de **"+game.lastKickerName+"**!","⚽💥 ¡**GOL** de **"+game.lastKickerName+"**!",];return scorerMessages2[Math.floor(Math.random()*scorerMessages2.length)]}
function getRandomOwnGoalScorerMessage(){let equipoRival=game.lastKickerTeam===1?teamBlue:teamRed;let arqueroRival=game.lastKickerTeam===1?(ArqueroBLUE?ArqueroBLUE.name:"nadie"):(ArqueroRED?ArqueroRED.name:"nadie");let equipoPropio=game.lastKickerTeam===1?teamRed:teamBlue;let arqueroPropio=game.lastKickerTeam===1?(ArqueroRED?ArqueroRED.name:"nadie"):(ArqueroBLUE?ArqueroBLUE.name:"nadie");const ownGoalScorerMessages=[`😵‍💫 Alto pelotudo ${game.lastKickerName}, se olvidó que tenía que patear al otro arco el hijo de re mil puta. 🎯🤦‍♂️`,`🔥 ¡El virgo de ${game.lastKickerName} se acaba de meter un gol en contra, no puede ser tan burro, por Dios. 🫏💀`,`🍑💦 ${game.lastKickerName} entregó la cola con ese autogol, alto virgen el hijo de puta. 🤡🔥`,`🎁 ¡Alta putita ${game.lastKickerName}!, le regaló el gol a ${equipoRival} como si fuera Navidad. 🎄⚽`,`🕵️‍♂️ Parece infiltrado el pelotudo ${game.lastKickerName}, no puede ser tan pete. 🤦‍♂️💀`,`🙃 Parece que al jugador ${game.lastKickerName} le encanta entregarle el rosquete a ${equipoRival}, alta putita. 🍑🔥`,`⚽🤦‍♂️ ${game.lastKickerName} pensó que jugaba para ${equipoRival} y les regaló un gol. 🎭💀`,`😨 Se cagó todo ${game.lastKickerName} con ese gol en contra, le encanta entregar el marrón a los de ${equipoPropio}. 🍩💦`,`🔥 Alta putita ${game.lastKickerName}, ni los de ${equipoRival} le hacen ese gol a ${equipoPropio} como él lo hizo. ⚽💀`,`🥴 Está re drogado el hijo de puta de ${game.lastKickerName}, mirá el autogol que se hace. 💊💀`,`💀🔥 El jugador ${game.lastKickerName} se confundió de arco, tremendo pelotudo el jugador de ${equipoPropio}. 🤦‍♂️⚽`,`🤣 Ni los de ${equipoRival} le meten goles a ${equipoPropio} como el autogol que hizo ${game.lastKickerName}, qué hijo de puta. ⚽🔥`];return ownGoalScorerMessages[Math.floor(Math.random()*ownGoalScorerMessages.length)]}
function getRandomOwnGoalScorerMessage2(){const ownGoalScorerMessages2=["💀 ¡**AUTOGOL** de **"+game.lastKickerName+"** !","❌ ¡**GOL EN CONTRA** de **"+game.lastKickerName+"** !"];return ownGoalScorerMessages2[Math.floor(Math.random()*ownGoalScorerMessages2.length)]}
function getRandomGoalEmoji(){const goalEmojis=["⚽","🔥","⭐️","💥","🐐"];return goalEmojis[Math.floor(Math.random()*goalEmojis.length)]}
function getRandomAutoGoalEmoji(){const goalEmojis=["💩","😭","🤡","😅","💀"];return goalEmojis[Math.floor(Math.random()*goalEmojis.length)]}
var playerGoalsReceived=JSON.parse(localStorage.getItem("playerGoalsReceived"))||{};var playerCleanSheets=JSON.parse(localStorage.getItem("playerCleanSheets"))||{};function updateStats(team,goals){var goalkeeper=team===1?ArqueroBLUE:ArqueroRED;if(goalkeeper){var playerName=goalkeeper.name;playerGoalsReceived[playerName]=(playerGoalsReceived[playerName]||0)+1;localStorage.setItem("playerGoalsReceived",JSON.stringify(playerGoalsReceived))}}
room.onTeamGoal=function(team){if(GolDeOroActivado&&AnuncioGolDeOro&&FairPlayActivado===!1){room.pauseGame(!0);handleTeamVictory();AnuncioGolDeOro=!1;setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,GolesTotalesRED>GolesTotalesBLUE?'victory':(GolesTotalesRED<GolesTotalesBLUE?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,GolesTotalesBLUE>GolesTotalesRED?'victory':(GolesTotalesBLUE<GolesTotalesRED?'defeat':'draw'))});return}
var ballProps=room.getDiscProperties(0);var velocidad=Math.sqrt(ballProps.xspeed**2+ballProps.yspeed**2);var velocidadPorSegundo=velocidad*60;var velocidadMetrosPorSegundo=velocidadPorSegundo/100;var velocidadKmPorHora=velocidadMetrosPorSegundo*3.6;room.sendAnnouncement("Velocidad del tiro: "+velocidadKmPorHora.toFixed(2)+" km/h",null,0x00FF00,"bold",2);var scores=room.getScores();var goals=team===1?scores.red:scores.blue;updateStats(team,goals);const goleador=game.lastKickerName;const asistidor=game.secondLastKickerName;if(goleador&&game.lastKickerTeam===team){playerGoals[goleador]=(playerGoals[goleador]||0)+1;playerGoals2[goleador]=(playerGoals2[goleador]||0)+1;actualizarPuntos(goleador)}
if(asistidor&&game.secondLastKickerTeam===team&&game.lastKickerId!==game.secondLastKickerId){playerAssists[asistidor]=(playerAssists[asistidor]||0)+1;playerAssists2[asistidor]=(playerAssists2[asistidor]||0)+1;actualizarPuntos(asistidor)}
game.rsActive=!1;let goalTime=secondsToMinutes(Math.floor(room.getScores().time));let scorer;let assister="";let scorer2;let assister2="";let goalType;if(team==1){if(game.lastKickerTeam==1){const goalMessages=["⚡ ¡GOOOLAZO!","🔥 ¡GOLAZO INCREÍBLE!","💥 ¡LA RED TIEMBLA CON ESE GOL!","🚀 ¡GOLAZO DE OTRO PLANETA!","⚽ ¡GOOOOOOL!",];goalType=goalMessages[Math.floor(Math.random()*goalMessages.length)];scorer=getRandomScorerMessage();scorer2=getRandomScorerMessage2();avatarCelebration(game.lastKickerId,getRandomGoalEmoji());if(game.secondLastKickerTeam==1&&game.lastKickerId!=game.secondLastKickerId){const assistMessages=["👟 ¡Gran pase de "+game.secondLastKickerName+"!","🎯 ¡Preciso pase de "+game.secondLastKickerName+"!","🔑 ¡La jugada se gestó con una asistencia de "+game.secondLastKickerName+"!","🤝 ¡"+game.secondLastKickerName+" brinda la asistencia para el gol!","⚽ ¡Asistencia perfecta de "+game.secondLastKickerName+"!","👌 ¡Excelente pase de "+game.secondLastKickerName+"!","🔥 ¡Jugada brillante de "+game.secondLastKickerName+"!","🤩 ¡"+game.secondLastKickerName+" crea la oportunidad de gol!","👏 ¡Fantástica asistencia de "+game.secondLastKickerName+"!","💫 ¡"+game.secondLastKickerName+" demuestra su visión de juego!",];const assistMessages2=["⚽👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","👥⚽ ¡**PASE** de **"+game.secondLastKickerName+"**!"];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
if(game.lastKickerTeam==2){const ownGoalMessages=["❌ ¡HAN MARCADO UN AUTOGOL!","❌ ¡GOL EN CONTRA INESPERADO!","❌ ¡EL EQUIPO EQUIVOCADO MARCA EN SU PROPIA PORTERÍA!","❌ ¡UN DESAFORTUNADO AUTOGOL!",];goalType=ownGoalMessages[Math.floor(Math.random()*ownGoalMessages.length)];scorer=getRandomOwnGoalScorerMessage();scorer2=getRandomOwnGoalScorerMessage2();avatarCelebration(game.lastKickerId,getRandomAutoGoalEmoji());if(game.secondLastKickerTeam==1){const assistMessages=["👟🌟 ¡El gol en contra es gracias a la jugada de "+game.secondLastKickerName+"!","⚠️ ¡"+game.secondLastKickerName+"  contribuye al autogol del rival!","🌟 ¡"+game.secondLastKickerName+" arma la jugada!","⚠️ ¡Jugada maestra de "+game.secondLastKickerName+"! ¡El rival termina anotando un autogol! ⚽😮",];const assistMessages2=["👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","🌟 ¡**JUGADA** de **"+game.secondLastKickerName+"**!",];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
game.redScore++}
if(team==2){if(game.lastKickerTeam==2){const goalMessages=["⚡ ¡GOOOLAZO!","🔥 ¡GOLAZO INCREÍBLE!","💥 ¡LA RED TIEMBLA CON ESE GOL!","🚀 ¡GOLAZO DE OTRO PLANETA!","⚽ ¡GOOOOOOL!",];goalType=goalMessages[Math.floor(Math.random()*goalMessages.length)];scorer=getRandomScorerMessage();scorer2=getRandomScorerMessage2();avatarCelebration(game.lastKickerId,getRandomGoalEmoji());if(game.secondLastKickerTeam==2&&game.lastKickerId!=game.secondLastKickerId){const assistMessages=["👟 ¡Gran pase de "+game.secondLastKickerName+"!","🎯 ¡Preciso pase de "+game.secondLastKickerName+"!"," ¡⚽️ Que pelota, "+game.secondLastKickerName+"! 👏","🤝 ¡"+game.secondLastKickerName+" brinda la asistencia para el gol!","⚽ ¡Asistencia perfecta de "+game.secondLastKickerName+"!","👌 ¡Excelente pase de "+game.secondLastKickerName+"!","🔥 ¡Jugada brillante de "+game.secondLastKickerName+"!","🤩 ¡"+game.secondLastKickerName+" crea la oportunidad de gol!","👏 ¡Fantástica asistencia de "+game.secondLastKickerName+"! 💯 ","💫 ¡"+game.secondLastKickerName+" demuestra su visión de juego!",];const assistMessages2=["⚽👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","👥⚽ ¡**PASE** de **"+game.secondLastKickerName+"**!"];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
if(game.lastKickerTeam==1){const ownGoalMessages=["❌ ¡HAN MARCADO UN AUTOGOL!","❌ ¡GOL EN CONTRA INESPERADO!","❌ ¡EL EQUIPO EQUIVOCADO MARCA EN SU PROPIA PORTERÍA!","❌ ¡UN DESAFORTUNADO AUTOGOL!",];goalType=ownGoalMessages[Math.floor(Math.random()*ownGoalMessages.length)];scorer=getRandomOwnGoalScorerMessage();scorer2=getRandomOwnGoalScorerMessage2();avatarCelebration(game.lastKickerId,getRandomAutoGoalEmoji());if(game.secondLastKickerTeam==2){const assistMessages=["👟🌟 ¡El gol en contra es gracias a la jugada de "+game.secondLastKickerName+"!","⚠️ ¡"+game.secondLastKickerName+"  contribuye al autogol del rival!","🌟 ¡"+game.secondLastKickerName+" arma la jugada!","⚠️ ¡Jugada maestra de "+game.secondLastKickerName+"! ¡El rival termina anotando un autogol! ⚽😮",];const assistMessages2=["👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","⚠ ¡**JUGADA** de **"+game.secondLastKickerName+"**!",];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
game.blueScore++}
const redScore=replaceNumbers(game.redScore);const blueScore=replaceNumbers(game.blueScore);announce(`${goalType}       ${toMathBoldSmall(teamRed)} ${redScore} 🆚 ${blueScore} ${toMathBoldSmall(teamBlue)}   A los ${goalTime} 🕒\n\n ${scorer}${assister}`);goalAnnouncementsSum.push(`🟥 **${teamRed} ${redScore} **\n🟦 **${teamBlue} ${blueScore}**\n🕒 **${goalTime}**  ⚊ ${scorer2}${assister2}\n`);game.lastKicker=undefined;game.secondLastKicker=undefined;game.lastKickerTeam=undefined;game.secondLastKickerTeam=undefined;if(AnuncioGolDeOro){AnuncioGolDeOro=!1;setTimeout(function(){const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
localStorage.setItem('playerCleanSheets',JSON.stringify(playerCleanSheets));const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))});const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);handleTeamVictory();setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}})},3000);setTimeout(function(){room.startGame()},4000)}};function replaceNumbers(number){const replacements={0:"0️⃣",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"};return number.toString().replace(/\d/g,match=>replacements[match])}
function toMathBoldSmall(text){const mathBoldSmallMap={a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙"};return text.split("").map(char=>mathBoldSmallMap[char]||char).join("")}
room.onPositionsReset=function(){const DEFAULT_SIZE=15;var MIN_SIZE=TamanoMinimoPermitido;var MAX_SIZE=TamanoMaximoPermitido;let id=Object.keys(tookASize);let size;for(var i=0;i<id.length;i++){if(tookASize.hasOwnProperty(id[i])){size=tookASize[id[i]];if(size>=MIN_SIZE&&size<=MAX_SIZE){let invMass=Math.max(0.01,0.5+(DEFAULT_SIZE-size)*0.02);room.setPlayerDiscProperties(id[i],{radius:size,invMass:invMass})}}}
var _0x1a3b51=_0x3c81f9;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}}
let isGamePaused=!1;function updatePlayerMinutes(player){const playerId=player.id;const playerName=player.name;if(!isGamePaused&&isBallMoving()){if(player.position&&player.team!==0){if(!playerMinutesPlayed[playerName]){playerMinutesPlayed[playerName]=0}
playerMinutesPlayed[playerName]+=1;localStorage.setItem('playerMinutesPlayed',JSON.stringify(playerMinutesPlayed))}}}
function updateGoalkeeperTime(player){const playerId=player.id;const playerName=player.name;if(!isGamePaused&&isBallMoving()){if(player.position){if(player.id===ArqueroRED?.id||player.id===ArqueroBLUE?.id){const goalkeeperName=player.id===ArqueroRED?.id?ArqueroRED.name:ArqueroBLUE.name;if(!playerGoalkeeperTime[goalkeeperName]){playerGoalkeeperTime[goalkeeperName]=0}
playerGoalkeeperTime[goalkeeperName]+=1;localStorage.setItem('playerGoalkeeperTime',JSON.stringify(playerGoalkeeperTime))}}}}
const playerPositions={};function checkPlayerActivity(){const players=room.getPlayerList();const currentTime=Date.now();players.forEach((player)=>{const playerId=player.id;const playerPosition=player.position;if(!playerPositions[playerId]&&player.team!==0&&!player.admin){playerPositions[playerId]={position:playerPosition,lastUpdateTime:currentTime,}}else if(player.team!==0&&!player.admin){if(playerPositions[playerId]&&playerPositions[playerId].position.x===playerPosition.x&&playerPositions[playerId].position.y===playerPosition.y){const timeDifference=currentTime-playerPositions[playerId].lastUpdateTime;if(!isAFKpaused&&!isGamePaused&&timeDifference>=SegundosPermitidosAFK*1000){if(!afkPlayerIDs.has(playerId)){afkPlayerIDs.add(player.id);const inactivityTimeout=MinutosPermitidosAFK*60*1000;const inactivityTimer=setTimeout(()=>{room.kickPlayer(player.id,"⌛️ EXPULSADO por INACTIVIDAD 😴🚫",!1);playerInactivity.delete(player.id)},inactivityTimeout);playerInactivity.set(player.id,inactivityTimer);room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡"+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[playerId]){playerPositions[playerId].lastUpdateTime=currentTime}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000);setTimeout(()=>{room.sendAnnouncement("🚨 ¡ATENCIÓN! Si te quedas AFK por "+MinutosPermitidosAFK+" MINUTOS ⌛, serás EXPULSADO del host. 🛑",player.id,0xff8400,'small-bold',2)},1500);setTimeout(()=>{room.sendAnnouncement("📌   RECUERDA QUE:        ⚠️ Si el administrador lo decide, puede echarte del host usando !kickafks. ⚠️",player.id,0xff8400,'small-bold',2)},2000);const admins=room.getPlayerList().filter(admin=>admin.admin);if(admins.length>0){const adminNames=admins.map(admin=>admin.name).join(", ");setTimeout(()=>{room.sendAnnouncement(`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`,null,0x00FFBB,'bold',0)},3000)}else{setTimeout(()=>{room.sendAnnouncement("📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.",null,0x00FFBB,'bold',0)},3000)}}}}else{playerPositions[playerId]={position:playerPosition,lastUpdateTime:currentTime,};if(afkPlayerIDs.has(playerId)){afkPlayerIDs.delete(playerId)}}}else if(player.team!==0&&player.admin){if(playerPositions[playerId]&&playerPositions[playerId].position.x===playerPosition.x&&playerPositions[playerId].position.y===playerPosition.y){const timeDifference=currentTime-playerPositions[playerId].lastUpdateTime;if(!isAFKpaused&&!isGamePaused&&timeDifference>=SegundosPermitidosAFK*1000){if(!afkPlayerIDs.has(playerId)){afkPlayerIDs.add(player.id);room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡El administrador 👑 "+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[playerId]){playerPositions[playerId].lastUpdateTime=currentTime}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000)}}}else{playerPositions[playerId]={position:playerPosition,lastUpdateTime:currentTime,};if(afkPlayerIDs.has(playerId)){afkPlayerIDs.delete(playerId)}}}})}
function isBallMoving(){const ballPosition=room.getBallPosition();return ballPosition&&(ballPosition.x!==0||ballPosition.y!==0)}
var gameTickPaused=!1;function handleGameTick(){if(modoJueganAlgunos){if(!gameTickPaused){const activePlayers=room.getPlayerList().filter(p=>!afkPlayerIDs.has(p.id));let blueTeamCount=activePlayers.filter(p=>p.team===1).length;let redTeamCount=activePlayers.filter(p=>p.team===2).length;movePlayersIfNeeded(activePlayers,blueTeamCount,redTeamCount)}}}
function movePlayersIfNeeded(activePlayers,blueTeamCount,redTeamCount){const spectators=room.getPlayerList().filter(p=>p.team===0&&!afkPlayerIDs.has(p.id));while(spectators.length>0&&(blueTeamCount<maxPlayersPerTeam||redTeamCount<maxPlayersPerTeam)){const spectatorToMove=spectators.shift();if(blueTeamCount<redTeamCount){room.setPlayerTeam(spectatorToMove.id,1);blueTeamCount++}else{room.setPlayerTeam(spectatorToMove.id,2);redTeamCount++}}
while(blueTeamCount>maxPlayersPerTeam){const playerToMove=activePlayers.find(p=>p.team===1);if(playerToMove){room.setPlayerTeam(playerToMove.id,0);blueTeamCount--}}
while(redTeamCount>maxPlayersPerTeam){const playerToMove=activePlayers.find(p=>p.team===2);if(playerToMove){room.setPlayerTeam(playerToMove.id,0);redTeamCount--}}}
function balanceTeams2(activePlayers){const bluePlayers=activePlayers.filter(p=>p.team===1);const redPlayers=activePlayers.filter(p=>p.team===2);while(bluePlayers.length>maxPlayersPerTeam){const playerToMove=bluePlayers.pop();room.setPlayerTeam(playerToMove.id,0)}
while(redPlayers.length>maxPlayersPerTeam){const playerToMove=redPlayers.pop();room.setPlayerTeam(playerToMove.id,0)}}
function pauseGameTick(){gameTickPaused=!0}
function resumeGameTick(){gameTickPaused=!1}
room[_0x3c81f9(0x19c)]=function(player){handleGameTick();checkPlayerActivity();const playersz=room.getPlayerList();for(const player of playersz){updatePlayerMinutes(player);updateGoalkeeperTime(player)}
var players=room.getPlayerList();var ballPosition=room.getBallPosition();for(var i=0;i<players.length;i++){var player=players[i];if(player.position===null||player.position===undefined){continue}
var playerPosition=room.getPlayerDiscProperties(player.id);var distance=Math.sqrt(Math.pow(playerPosition.x-ballPosition.x,2)+Math.pow(playerPosition.y-ballPosition.y,2));if(distance<50){if(player.team===1){posesionEquipoA++}else if(player.team===2){posesionEquipoB++}}}
PartidoArrancado=!0;if(whoTouchedLast!=undefined){if(ballCarrying.get(whoTouchedLast.name)){ballCarrying.get(whoTouchedLast.name)[0]+=1/60}}
updateTimeOnHalves();DetectorGK();LinkDelScript();LinkDelScript2();LinkDelScript3();LinkDelScript4();ReiniciarPuntosJugadores();var _0x59120c=_0x3c81f9;if(RSRMap==!0){updateGameStatus();handleBallTouch();realSoccerRef()}else{updateGameStatus();handleBallTouchFUTSAL()}};updateTimeOnHalves=function(){if(room.getBallPosition().x<0){timeOnHalves[0]+=1/60}else if(room.getBallPosition().x>0){timeOnHalves[1]+=1/60}}
var ScoresNumbers='0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣';room.onGamePause=function(){isGamePaused=!0};room.onGameUnpause=function(){isGamePaused=!1};function scorerNumber(num){var result='';var reversedDigits=[];do{reversedDigits.push(num%10);num=Math.floor(num/10)}while(num>0);for(var i=reversedDigits.length;i-->0;){result+=ScoresNumbers.substr(reversedDigits[i]*3,3)}
return result}
function realSoccerRef(){blockThrowIn();blockGoalKick();removeBlock();if(game.time==gameTime){game.rsCorner2=!1;game.rsGoalKick2=!1;game.lateral2=!1}
if(game.time==gameTime*60&&game.extraTimeAnnounced==!1){extraTime();game.extraTimeAnnounced=!0}
if(game.time==game.extraTimeEnd&&game.lastPlayAnnounced==!1){room.sendAnnouncement("                                    😱 ⏰  🔥          Ú L T I M A     J U G A D A    D E L    P A R T I D O      🔥  ⏰ 😱",null,0xffff00,'bold',2);room.sendAnnouncement("                                                       💔 🚫   Si la pelota sale del terreno de juego, se finalizará el partido. ✋ 🛑",null,0xf9fa00,'small',0);game.lastPlayAnnounced=!0}
if(game.rsCorner2==!0||game.rsGoalKick2==!0||game.lateral2==!0){game.extraTimeCount++}
if(game.rsTimer<99999&&game.paused==!1&&game.rsActive==!1&&game.rsReady==!0){game.rsTimer++}
if(game.rsSwingTimer<150&&game.rsCorner==!1&&game.rsGoalKick==!1){game.rsSwingTimer++;if(game.rsSwingTimer>5){room.setDiscProperties(0,{xgravity:room.getDiscProperties(0).xgravity*0.97,ygravity:room.getDiscProperties(0).ygravity*0.97})}
if(game.rsSwingTimer==150){room.setDiscProperties(0,{xgravity:0,ygravity:0})}}
if(game.boosterState==!0){game.boosterCount++}
if(game.boosterCount>30){game.boosterState=!1;game.boosterCount=0;room.setDiscProperties(0,{cMask:63})}
if(room.getBallPosition().x==0&&room.getBallPosition().y==0){game.rsActive=!0;game.outStatus=""}
if(game.rsActive==!1&&game.rsReady==!0){if(game.outStatus=="redThrow"){if(game.rsTimer==throwTimeOut-120){ballWarning("0xff223c",++game.warningCount)}
if(game.rsTimer==throwTimeOut&&game.bringThrowBack==!1){game.outStatus="blueThrow";game.rsTimer=0;room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{color:"0x00ccff",xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY})})}}else if(game.outStatus=="blueThrow"){if(game.rsTimer==throwTimeOut-120){ballWarning("0x00ccff",++game.warningCount)}
if(game.rsTimer==throwTimeOut&&game.bringThrowBack==!1){game.outStatus="redThrow";game.rsTimer=0;room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{color:"0xff223c",xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY})})}}else if(game.outStatus=="blueGK"||game.outStatus=="redGK"){if(game.rsTimer==gkTimeOut-120){if(game.outStatus=="blueGK"){ballWarning("0x00ccff",++game.warningCount)}
if(game.outStatus=="redGK"){ballWarning("0xff223c",++game.warningCount)}}
if(game.rsTimer==gkTimeOut){game.outStatus="";room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000}}else if(game.outStatus=="blueCK"||game.outStatus=="redCK"){if(game.rsTimer==ckTimeOut-120){if(game.outStatus=="blueCK"){ballWarning("0x00ccff",++game.warningCount)}
if(game.outStatus=="redCK"){ballWarning("0xff223c",++game.warningCount)}}
if(game.rsTimer==ckTimeOut){game.outStatus="";room.setDiscProperties(1,{x:0,y:2000,radius:0});room.setDiscProperties(2,{x:0,y:2000,radius:0});room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000}}}
if(game.rsActive==!0){if((room.getBallPosition().y>612||room.getBallPosition().y<-612)){game.rsActive=!1;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
room.setDiscProperties(0,{xgravity:0,ygravity:0});game.ballOutPositionX=Math.round(room.getBallPosition().x*10)/10;if(room.getBallPosition().y>612){game.ballOutPositionY=400485;game.throwInPosY=618}
if(room.getBallPosition().y<-612){game.ballOutPositionY=-400485;game.throwInPosY=-618}
if(room.getBallPosition().x>1130){game.ballOutPositionX=1130}
if(room.getBallPosition().x<-1130){game.ballOutPositionX=-1130}
if(game.rsTouchTeam==1){room.setDiscProperties(3,{x:game.ballOutPositionX,y:game.throwInPosY,radius:18});sleep(100).then(()=>{game.outStatus="blueThrow";game.throwinKicked=!1;game.rsTimer=0;game.rsReady=!0;game.lateral=!0;game.lateral2=!0;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY,xgravity:0,ygravity:0});room.setDiscProperties(0,{color:"0x00ccff"})});sleep(100).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}else{room.setDiscProperties(3,{x:game.ballOutPositionX,y:game.throwInPosY,radius:18});sleep(100).then(()=>{game.outStatus="redThrow";game.throwinKicked=!1;game.rsTimer=0;game.rsReady=!0;game.lateral=!0;game.lateral2=!0;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY,xgravity:0,ygravity:0});room.setDiscProperties(0,{color:"0xff223c"})});sleep(100).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}
if(room.getBallPosition().x>1162&&(room.getBallPosition().y>124||room.getBallPosition().y<-124)){game.rsActive=!1;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
room.setDiscProperties(0,{xgravity:0,ygravity:0});room.getPlayerList().forEach(function(player){room.setPlayerDiscProperties(player.id,{invMass:100000})});if(game.rsTouchTeam==1){room.setDiscProperties(3,{x:1060,y:0,radius:18});sleep(100).then(()=>{game.outStatus="blueGK";game.rsTimer=0;game.rsReady=!0;game.rsGoalKick=!0;game.rsGoalKick2=!0;game.rsSwingTimer=0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:1060,y:0,color:"0x00ccff",cMask:268435519,xgravity:0,ygravity:0})});sleep(3000).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}else{game.rsSwingTimer=0;if(room.getBallPosition().y<-124){room.setDiscProperties(3,{x:1140,y:-590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="redCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:1140,y:-590,xspeed:0,yspeed:0,color:"0xff223c",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(2,{x:1150,y:-670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}
if(room.getBallPosition().y>124){room.setDiscProperties(3,{x:1140,y:590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="redCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:1140,y:590,xspeed:0,yspeed:0,color:"0xff223c",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(2,{x:1150,y:670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}}
if(room.getBallPosition().x<-1162&&(room.getBallPosition().y>124||room.getBallPosition().y<-124)){game.rsActive=!1;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
room.setDiscProperties(0,{xgravity:0,ygravity:0});room.getPlayerList().forEach(function(player){room.setPlayerDiscProperties(player.id,{invMass:100000})});if(game.rsTouchTeam==1){game.rsSwingTimer=0;if(room.getBallPosition().y<-124){room.setDiscProperties(3,{x:-1140,y:-590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="blueCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:-1140,y:-590,xspeed:0,yspeed:0,color:"0x00ccff",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(1,{x:-1150,y:-670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}
if(room.getBallPosition().y>124){room.setDiscProperties(3,{x:-1140,y:590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="blueCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:-1140,y:590,xspeed:0,yspeed:0,color:"0x00ccff",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(1,{x:-1150,y:670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}else{room.setDiscProperties(3,{x:-1060,y:0,radius:18});sleep(100).then(()=>{game.outStatus="redGK";game.rsTimer=0;game.rsReady=!0;game.rsGoalKick=!0;game.rsGoalKick2=!0;game.rsSwingTimer=0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:-1060,y:0,color:"0xff223c",cMask:268435519,xgravity:0,ygravity:0})});sleep(3000).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}}
if(game.rsActive==!1&&(game.outStatus=="redThrow"||game.outStatus=="blueThrow")){if((room.getBallPosition().y>612||room.getBallPosition().y<-612)&&(room.getBallPosition().x<game.ballOutPositionX-throwinDistance||room.getBallPosition().x>game.ballOutPositionX+throwinDistance)&&game.bringThrowBack==!1){game.bringThrowBack=!0;if(game.outStatus=="redThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="blueThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0x00ccff",x:game.ballOutPositionX,y:game.throwInPosY})})}else if(game.outStatus=="blueThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="redThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0xff223c",x:game.ballOutPositionX,y:game.throwInPosY})})}}
if(room.getBallPosition().y<612&&room.getBallPosition().y>-612&&game.throwinKicked==!1&&game.pushedOut==!1){if(game.outStatus=="redThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="blueThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0x00ccff",x:game.ballOutPositionX,y:game.throwInPosY})})}else if(game.outStatus=="blueThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="redThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0xff223c",x:game.ballOutPositionX,y:game.throwInPosY})})}
game.pushedOut=!0}
if(room.getBallPosition().y<612&&room.getBallPosition().y>-612&&game.throwinKicked==!0){game.lateral=!1;game.lateral2=!1;game.outStatus="";game.rsActive=!0;game.rsReady=!1;room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000;game.warningCount++}
if(room.getBallPosition().y.toFixed(1)==game.throwInPosY.toFixed(1)&&room.getBallPosition().x.toFixed(1)==game.ballOutPositionX.toFixed(1)){game.bringThrowBack=!1;game.pushedOut=!1}}}
function handleBallTouchFUTSAL(){var players=room.getPlayerList();var ballPosition=room.getBallPosition();var ballRadius=game.ballRadius;var triggerDistance=ballRadius+0.01;var distanciaMinimaParaCancelarDisparo=15;for(var i=0;i<players.length;i++){var player=players[i];if(player.position==null)continue;var distanceToBall=pointDistance(player.position,ballPosition);var playerRadius=room.getPlayerDiscProperties(player.id).radius;var triggerDistanceWithPlayer=ballRadius+playerRadius+0.01;if(distanceToBall<triggerDistanceWithPlayer){game.rsTouchTeam=player.team;game.throwinKicked=!1;if(game.rsCorner==!1&&game.rsGoalKick==!1&&game.outStatus!="blueThrow"&&game.outStatus!="redThrow"&&powerShotMode==!0){if(game.powershotID!=player.id){game.powershotID=player.id;game.powershotTrigger=!1;game.powershotCounter=0}else{game.powershotCounter++;if(game.powershotCounter>52&&game.powershotTrigger==!1&&Math.round(room.getDiscProperties(0).invMass)!=PotenciaPowerShot){room.setDiscProperties(0,{"bCoef":0.4,"invMass":PotenciaPowerShot,"damping":0.99,color:`0x${PelotaFutsal_PowerShot}`});room.sendAnnouncement("POWERSHOT ACTIVADO!",game.powershotID,0x33dd33,"bold",1);game.powershotTrigger=!0}}}
if(game.rsCorner==!1&&room.getDiscProperties(0).xgravity!=0){room.setDiscProperties(0,{xgravity:0,ygravity:0});game.rsSwingTimer=5200}}else if(distanceToBall>triggerDistanceWithPlayer+distanciaMinimaParaCancelarDisparo){if(game.powershotID===player.id&&game.powershotTrigger===!0&&powerShotMode===!0){game.powershotTrigger=!1;game.powershotCounter=0;game.powershotID=0;if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!==1.5){room.setDiscProperties(0,{"bCoef":0.4,"invMass":1.5,"damping":0.99,color:`0x${PelotaFutsal}`});room.sendAnnouncement("POWERSHOT CANCELADO!",player.id,0xdd3333,"bold",2)}}}}}
function handleBallTouch(){var players=room.getPlayerList();var ballPosition=room.getBallPosition();var ballRadius=game.ballRadius;var triggerDistance=ballRadius+0.01;var distanciaMinimaParaCancelarDisparo=15;for(var i=0;i<players.length;i++){var player=players[i];if(player.position==null)continue;var distanceToBall=pointDistance(player.position,ballPosition);var playerRadius=room.getPlayerDiscProperties(player.id).radius;var triggerDistanceWithPlayer=ballRadius+playerRadius+0.01;if(distanceToBall<triggerDistanceWithPlayer){game.rsTouchTeam=player.team;game.throwinKicked=!1;if(game.rsCorner==!1&&game.rsGoalKick==!1&&game.outStatus!="blueThrow"&&game.outStatus!="redThrow"&&powerShotMode==!0){if(game.powershotID!=player.id){game.powershotID=player.id;game.powershotTrigger=!1;game.powershotCounter=0}else{game.powershotCounter++;if(game.powershotCounter>52&&game.powershotTrigger==!1&&Math.round(room.getDiscProperties(0).invMass)!=PotenciaPowerShotRS){room.setDiscProperties(0,{invMass:PotenciaPowerShotRS,color:`0x${PelotaRS_PowerShot}`});room.sendAnnouncement("POWERSHOT ACTIVADO!",game.powershotID,0x33dd33,"bold",1);game.powershotTrigger=!0}}}
if(game.rsCorner==!1&&room.getDiscProperties(0).xgravity!=0){room.setDiscProperties(0,{xgravity:0,ygravity:0});game.rsSwingTimer=5200}}else if(distanceToBall>triggerDistanceWithPlayer+distanciaMinimaParaCancelarDisparo){if(game.powershotID===player.id&&game.powershotTrigger===!0&&powerShotMode===!0){game.powershotTrigger=!1;game.powershotCounter=0;game.powershotID=0;if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!==1.05){room.setDiscProperties(0,{invMass:1.05,color:`0x${PelotaRS}`});room.sendAnnouncement("POWERSHOT CANCELADO!",player.id,0xdd3333,"bold",2)}}}}}
var game={time:0,ballRadius:0,ticks:0};function updateGameStatus(){var _0x28cb48=_0x3c81f9;game.time=Math[_0x28cb48(0x1c3)](room[_0x28cb48(0x172)]()['time']);game.ballRadius=room.getDiscProperties(0x0)[_0x28cb48(0x121)];game.ticks++}
function announce(_0x2f0a83,_0x3a75ce,_0x2c2aa7,_0x3614b0,_0x28f16f){var _0xdb5dc1=_0x3c81f9;_0x2c2aa7==null&&(_0x2c2aa7=0xfffd82),_0x3614b0==null&&(_0x3614b0=_0xdb5dc1(0x17a)),_0x28f16f==null&&(_0x28f16f=0x0),room.sendAnnouncement(_0x2f0a83,_0x3a75ce,_0x2c2aa7,_0x3614b0,_0x28f16f)}
function whisper(_0x1efb47,_0x166a3c,_0x37ade9,_0x3c8c4c,_0x3d8947){var _0x341048=_0x3c81f9;_0x37ade9==null&&(_0x37ade9=0x66c7ff),_0x3c8c4c==null&&(_0x3c8c4c=_0x341048(0x1d6)),_0x3d8947==null&&(_0x3d8947=0x0),room[_0x341048(0x1d2)](_0x1efb47,_0x166a3c,_0x37ade9,_0x3c8c4c,_0x3d8947)}
function isAdminPresent(){var players=room.getPlayerList();if(players.find((player)=>player.admin)!=null){return!0}else{return!1}}
function displayAdminMessage(){if(isAdminPresent()===!1&&allowPublicAdmin===!0){room.sendAnnouncement("🔒 ¡No hay administrador en la sala! Para hacer a alguien administrador, escribe:",null,0xFFFFFF,"small-bold",1);setTimeout(function(){room.sendAnnouncement("       !admin NúmeroID         Por ejemplo: !admin 20 (Para votar al jugador con ID nº 20.)",null,0x00FF00,"bold",1)},500);setTimeout(function(){room.sendAnnouncement("¡RECUERDA, EL NÚMERO es el Nº de ID del JUGADOR que quieres VOTAR PARA ADMINISTRADOR! Puedes ver los IDs con !ids. Si más de la mitad de los jugadores vota por un mismo jugador, dicho jugador será administrador.",null,0xFFFFFF,"small-bold",1)},1000)}}
function pointDistance(_0x6b9cc5,_0x21a1e7){var _0x43d01b=_0x3c81f9,_0x132800=_0x6b9cc5.x-_0x21a1e7.x,_0x26e284=_0x6b9cc5.y-_0x21a1e7.y;return Math[_0x43d01b(0x193)](_0x132800*_0x132800+_0x26e284*_0x26e284)}
function sleep(_0x17ee36){return new Promise(_0x1d5abb=>setTimeout(_0x1d5abb,_0x17ee36))}
function ballWarning(origColour,warningCount){sleep(200).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(400).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(600).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(800).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(1000).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(1200).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(1400).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(1600).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(1675).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(1750).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}})}
function avatarCelebration(_0x324e3c,_0x3eba06){var _0x56d7e8=_0x3c81f9;room[_0x56d7e8(0x15e)](_0x324e3c,_0x3eba06),sleep(0xfa)[_0x56d7e8(0x174)](()=>{var _0x4c9cb0=_0x56d7e8;room[_0x4c9cb0(0x15e)](_0x324e3c,null)}),sleep(0x1f4)[_0x56d7e8(0x174)](()=>{var _0x6a5198=_0x56d7e8;room[_0x6a5198(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x2ee)[_0x56d7e8(0x174)](()=>{room.setPlayerAvatar(_0x324e3c,null)}),sleep(0x3e8)[_0x56d7e8(0x174)](()=>{var _0x431ddc=_0x56d7e8;room[_0x431ddc(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x4e2)[_0x56d7e8(0x174)](()=>{var _0x2bea31=_0x56d7e8;room[_0x2bea31(0x15e)](_0x324e3c,null)}),sleep(0x5dc)['then'](()=>{var _0x5ca3a7=_0x56d7e8;room[_0x5ca3a7(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x6d6)[_0x56d7e8(0x174)](()=>{var _0x5225e9=_0x56d7e8;room[_0x5225e9(0x15e)](_0x324e3c,null)}),sleep(0x7d0)[_0x56d7e8(0x174)](()=>{var _0x5558dd=_0x56d7e8;room[_0x5558dd(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x8ca)[_0x56d7e8(0x174)](()=>{var _0x6872e4=_0x56d7e8;room[_0x6872e4(0x15e)](_0x324e3c,null)}),sleep(0x9c4)[_0x56d7e8(0x174)](()=>{var _0x3f6153=_0x56d7e8;room[_0x3f6153(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0xabe)['then'](()=>{var _0x170109=_0x56d7e8;room[_0x170109(0x15e)](_0x324e3c,null)}),sleep(0xbb8)['then'](()=>{var _0x47ef1d=_0x56d7e8;room[_0x47ef1d(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0xcb2)[_0x56d7e8(0x174)](()=>{var _0x3e1d25=_0x56d7e8;room[_0x3e1d25(0x15e)](_0x324e3c,null)})}
function secondsToMinutes(_0x46ebc4){var _0x1b57ad=~~(_0x46ebc4/0xe10),_0x58786b=~~(_0x46ebc4%0xe10/0x3c),_0x43c8d3=~~_0x46ebc4%0x3c,_0x58bd92='';return _0x1b57ad>0x0&&(_0x58bd92+=''+_0x1b57ad+':'+(_0x58786b<0xa?'0':'')),_0x58bd92+=''+_0x58786b+':'+(_0x43c8d3<0xa?'0':''),_0x58bd92+=''+_0x43c8d3,_0x58bd92}
function blockThrowIn(){var players=room.getPlayerList().filter((player)=>player.team!=0);if(room.getBallPosition().y<0){if(game.outStatus=="redThrow"){players.forEach(function(player){if(player.team==2&&room.getPlayerDiscProperties(player.id).y<0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y<-485){room.setPlayerDiscProperties(player.id,{y:-470})}}
if(player.team==1&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(17).x!=1149){room.setDiscProperties(17,{x:1149})}
if(room.getDiscProperties(19).x!=-1149){room.setDiscProperties(19,{x:-1149})}})}
if(game.outStatus=="blueThrow"){players.forEach(function(player){if(player.team==1&&room.getPlayerDiscProperties(player.id).y<0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y<-485){room.setPlayerDiscProperties(player.id,{y:-470})}}
if(player.team==2&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(19).x!=1149){room.setDiscProperties(19,{x:1149})}
if(room.getDiscProperties(17).x!=-1149){room.setDiscProperties(17,{x:-1149})}})}}
if(room.getBallPosition().y>0){if(game.outStatus=="redThrow"){players.forEach(function(player){if(player.team==2&&room.getPlayerDiscProperties(player.id).y>0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y>485){room.setPlayerDiscProperties(player.id,{y:470})}}
if(player.team==1&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(21).x!=1149){room.setDiscProperties(21,{x:1149})}
if(room.getDiscProperties(23).x!=-1149){room.setDiscProperties(23,{x:-1149})}})}
if(game.outStatus=="blueThrow"){players.forEach(function(player){if(player.team==1&&room.getPlayerDiscProperties(player.id).y>0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y>485){room.setPlayerDiscProperties(player.id,{y:470})}}
if(player.team==2&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(23).x!=1149){room.setDiscProperties(23,{x:1149})}
if(room.getDiscProperties(21).x!=-1149){room.setDiscProperties(21,{x:-1149})}})}}}
function blockGoalKick(){var players=room.getPlayerList().filter((player)=>player.team!=0);if(room.getBallPosition().x<0){if(game.outStatus=="redGK"){players.forEach(function(player){if(player.team==2&&room.getPlayerDiscProperties(player.id).x<0){if(room.getPlayerDiscProperties(player.id).cGroup!=268435462){room.setPlayerDiscProperties(player.id,{cGroup:268435462})}
if(player.position.x<-740&&player.position.y>-320&&player.position.y<320){room.setPlayerDiscProperties(player.id,{x:-700})}}
if(player.team==1&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}})}}
if(room.getBallPosition().x>0){if(game.outStatus=="blueGK"){players.forEach(function(player){if(player.team==1&&room.getPlayerDiscProperties(player.id).x>0){if(room.getPlayerDiscProperties(player.id).cGroup!=268435462){room.setPlayerDiscProperties(player.id,{cGroup:268435462})}
if(player.position.x>740&&player.position.y>-320&&player.position.y<320){room.setPlayerDiscProperties(player.id,{x:700})}}
if(player.team==2&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}})}}}
function removeBlock(){var players=room.getPlayerList().filter((player)=>player.team!==0);if(game.outStatus===""){players.forEach(function(player){if(player.team===1&&room.getPlayerDiscProperties(player.id).cGroup!==room.CollisionFlags.red){room.setPlayerDiscProperties(player.id,{cGroup:room.CollisionFlags.red})}
if(player.team===2&&room.getPlayerDiscProperties(player.id).cGroup!==room.CollisionFlags.blue){room.setPlayerDiscProperties(player.id,{cGroup:room.CollisionFlags.blue})}});var disc17=room.getDiscProperties(17);if(disc17!==null&&disc17.x!==-1149){room.setDiscProperties(17,{x:-1149})}
var disc19=room.getDiscProperties(19);if(disc19!==null&&disc19.x!==-1149){room.setDiscProperties(19,{x:-1149})}
var disc21=room.getDiscProperties(21);if(disc21!==null&&disc21.x!==-1149){room.setDiscProperties(21,{x:-1149})}
var disc23=room.getDiscProperties(23);if(disc23!==null&&disc23.x!==-1149){room.setDiscProperties(23,{x:-1149})}}}
function sendFirmaToDiscord(player,playerIP){const jugadoresPresentes=room.getPlayerList().map(player=>player.name);const jugadoresNoFirmados=jugadoresPresentes.filter(jugador=>!jugadoresFirmados.includes(jugador));let mensaje=`\n`;mensaje+=`**✅ YA FIRMARON:**\n`;mensaje+=jugadoresFirmados.length>0?jugadoresFirmados.join(', '):'Ninguno';mensaje+=`\n\n**❎ AÚN NO HAN FIRMADO:**\n`;mensaje+=jugadoresNoFirmados.length>0?jugadoresNoFirmados.join(', '):'Todos los jugadores han firmado';mensaje+=`\n\n✍️ El jugador ${player.name} ha firmado.\n\n🌐 IP del jugador: ${playerIP}`;const embed={embeds:[{title:"📝 FIRMAS DE LOS JUGADORES",description:mensaje,color:0x00e5ff,timestamp:new Date().toISOString(),footer:{text:`Firmado en ${NombreHost}`}}]};const requestOptions={method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(embed),};fetch(WebhookParaFirmar,requestOptions)}
function decryptHex(str){let hexString=str;let strOut="";for(let x=0;x<hexString.length;x+=2){strOut+=String.fromCharCode(parseInt(hexString.substr(x,2),16))}
return strOut}
const apiKeys=['041e9455309144cdab1527ae21c925c2','4a158c1a381f4dadaa5a797030297ece','844f0f2d3e7c45c3a47f5d2f433bac7b','208ba847068942e8a53966f5765b0a13','c0943ea614d547ba8b5b29503da49d93','47876cef5b0f4a38889d2d2d1a6ac378','441b309c470d4458bd93edeb76adcd07','af0fca4fb4954fd18e982db2ae21f05b','8e924d6e57404131bcb4955f77d746f5','5903e5d666094644949eaa626a009624','7ba7f8ef9f4543d88d696a60e52538b9','20b4cc00a9e0494691c9099de64bef11','4b24dfcbeeb24792a05a3126b6083952','f395661119174b8d98aa026c1a41bb65','1f5bad2a8ab94d52bd9024b1798f2a61','8a4d55cfbf124c5881785daf6be80753','f260bad253f64867948c27db295b60d0','4efde075a78e4313b98c9a3e03ef1710','c66cbb9d2bca49ae949fefde1026f473','7be5c21189204fb9922cfd08c1baf09c','d786c98df4174d3aba4a52e825b7aa0e','a31f6c4728fd4abc8f519ea761ead479','e1b925d1222f4434b1914933e19cca3a','02b19a38eae44778a95acb528a1db0f4','674f65fa9d6949118723f7a7a5ad6fb6','533ac932bef5417dadcbd59998de6fa1'];function barajarClaves(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}}
barajarClaves(apiKeys);barajarClaves(apiKeys);let currentApiKeyIndex=0;let usedKeys=[];function getGeoLocation(ip){if(usedKeys.length===apiKeys.length){usedKeys=[];barajarClaves(apiKeys);barajarClaves(apiKeys);currentApiKeyIndex=0}
const apiKey=apiKeys[currentApiKeyIndex];usedKeys.push(currentApiKeyIndex);currentApiKeyIndex=(currentApiKeyIndex+1)%apiKeys.length;const apiUrl=`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;return fetch(apiUrl).then(response=>response.json()).then(data=>({country:data.country_name,region:data.state_prov,city:data.city}))}
let connections=[];let UsedNames=[];const usedUsernames={};let playerIPs=[];const jugadoresIngresados=new Set();function toLowerCase(str){return str.toLowerCase()}
function enviarMensajePorPartes(player,partes,delay){for(let i=0;i<partes.length;i++){setTimeout(()=>{room.sendAnnouncement(partes[i],player.id,`0x${colormensaje}`,TipoDeLetra,0)},i*delay)}}
function anunciarEntradaAdmin(player){const frasesBienvenidaAdmin=["👑 Llegó "+player.name+". Se terminó la joda. 🛑","👑 Entró "+player.name+". A comportarse todos. 🛑","👑 Llegó "+player.name+". Basta de boludeces. 🛑","👑 "+player.name+" ha ingresado al Host. Se terminó el circo. 🛑","👑 Apareció "+player.name+". El que jode, vuela. 🛑","👑 Ya está "+player.name+" en el Host. A portarse bien. 🔥","👑 Llegó "+player.name+". El que se hace el vivo, afuera. 🔥",];const mensaje=frasesBienvenidaAdmin[Math.floor(Math.random()*frasesBienvenidaAdmin.length)];room.sendAnnouncement("━━━━━━━━━━━━━━━",null,0xFFD700,"bold",2);room.sendAnnouncement(mensaje,null,0xFFD700,"bold",2);room.sendAnnouncement("━━━━━━━━━━━━━━━",null,0xFFD700,"bold",2)}
room.onPlayerJoin=function(player){if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}
const playerIp=decryptHex(player.conn);getGeoLocation(playerIp).then(location=>{if(PaisesProhibidos.includes(location.country)){room.kickPlayer(player.id,"🚫 País restringido para jugar en esta sala 🚫",!0);return}
verificarEspaciosDisponibles();if(modoJueganAlgunos&&room.getScores()&&room.getScores().spectators===0){const activePlayers=room.getPlayerList().filter(p=>!afkPlayerIDs.has(p.id));const blueTeamCount=activePlayers.filter(p=>p.team===1).length;const redTeamCount=activePlayers.filter(p=>p.team===2).length;if(blueTeamCount<=maxPlayersPerTeam){room.setPlayerTeam(player.id,1)}else if(redTeamCount<=maxPlayersPerTeam){room.setPlayerTeam(player.id,2)}}
const totalPlayers=room.getPlayerList().length;const NombreDelJugadorNickname=player.name;if(!containsInvalidCharacters(NombreDelJugadorNickname)){let color=65280;let message=`🎮 ${NombreDelJugadorNickname} ha ingresado al host -- ${totalPlayers}/${maxPlayers} 🚀`;if(totalPlayers>=maxPlayers){color=16776960;message+="\n\n**[❌] SALA LLENA**"}else{const remainingSpots=maxPlayers-totalPlayers;if(remainingSpots===1){message+=`\n\n**[🟢] QUEDA 1 LUGAR**`}else{message+=`\n\n**[🟢] QUEDAN ${remainingSpots} LUGARES**`}}
if(salaCerrada){message+=`\n\n**🔒 La sala está momentáneamente con contraseña para reservarles el lugar a los administradores.**`}
if(PasswordDelHost!==null&&PasswordDelHost!==""){message+=`\n\n**🔒 ESTE HOST TIENE CONTRASEÑA**`}else{message+=`\n\n**🌍 HOST PÚBLICO**`}
sendBoleteroToDiscord(message,roomName,roomLink,color)}
const jugadorName=player.name;const storedPlayerFiguraCount=JSON.parse(localStorage.getItem('playerFiguraCount')||"{}");if(storedPlayerFiguraCount[jugadorName]){playerFiguraCount[jugadorName]=storedPlayerFiguraCount[jugadorName]}
if(localStorage.getItem(player.name+'_cleanSheets')){playerCleanSheets[player.name]=parseInt(localStorage.getItem(player.name+'_cleanSheets'))}
playerMinutesPlayed[jugadorName]=playerMinutesPlayed[jugadorName]||0;playerGoalkeeperTime[jugadorName]=playerGoalkeeperTime[jugadorName]||0;const storedGoals=JSON.parse(localStorage.getItem('totalPlayerGoals')||"{}");const storedAssists=JSON.parse(localStorage.getItem('totalPlayerAssists')||"{}");const storedPoints=JSON.parse(localStorage.getItem('totalPlayerPoints')||"{}");if(storedGoals[jugadorName]!==undefined){totalPlayerGoals[jugadorName]=storedGoals[jugadorName];totalPlayerAssists[jugadorName]=storedAssists[jugadorName];totalPlayerPoints[jugadorName]=storedPoints[jugadorName];playerGoals2[jugadorName]=storedGoals[jugadorName];playerAssists2[jugadorName]=storedAssists[jugadorName];actualizarPuntos(jugadorName)}else{totalPlayerGoals[jugadorName]=0;totalPlayerAssists[jugadorName]=0;totalPlayerPoints[jugadorName]=0;playerGoals2[jugadorName]=0;playerAssists2[jugadorName]=0}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_MAP_VOTE){room.sendAnnouncement(`[💡] ${player.name}, la votación para elegir mapa está disponible. ¡Escribe "!votarmapa nombre_del_mapa" para votar! 🗳️`,player.id,0xFFFFFF,'bold',0)}else{room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_MAP_VOTE} jugadores en el host para la votación de mapa. La votación no puede iniciar. ❌`,player.id,0xFF0000,'normal',0)}
const NickNamedelJugador=player.name;if(!jugadoresIngresados.has(NickNamedelJugador)){jugadoresIngresados.add(NickNamedelJugador);const storedStats=localStorage.getItem(NickNamedelJugador);if(storedStats){playerStats[NickNamedelJugador]=JSON.parse(storedStats)}else{playerStats[NickNamedelJugador]={victories:0,draws:0,defeats:0,totalGames:0,currentStreak:0,highestStreak:0,gameResults:[]}}}
if(NicknamesPROHIBIDOS.includes(player.name)){room.kickPlayer(player.id,"NICKNAME PROHIBIDO 🚫",!1)}
if(esAdminValido(player)){room.setPlayerAdmin(player.id,!0);anunciarEntradaAdmin(player)}else{var nickUsadoEsAdmin=ListaDeAdmins.some(admin=>admin.nicks.includes(player.name));if(nickUsadoEsAdmin){room.kickPlayer(player.id,"No tenés autorización para usar ese nombre de admin.")}}
if(usedUsernames[player.name]&&usedUsernames[player.name]!==player.auth){if(!esAdminValido(player)){room.kickPlayer(player.id,"🚫 Ese NICKNAME ya está en uso por otro jugador 🚫",!1)}}else{usedUsernames[player.name]=player.auth}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE){room.sendAnnouncement(`[💡] ${player.name} puedes escribir "!admin ID" para votar a un jugador para que sea administrador. 🗳️`,player.id,0xFFFFFF,'bold',0);updateAdminVotesNeeded()}else{room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores en el host para la votación de administrador. La votación no puede iniciar. ❌`,player.id,0xFF0000,'normal',0)}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE){room.sendAnnouncement(`[💡] ${player.name} puedes escribir "!expulsar ID" para votar la expulsión de un jugador. 🗳️`,player.id,0xFFFFFF,'bold',0);updateKickVotesNeeded()}else{room.sendAnnouncement(`[🗳️]  ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores en el host para la votación de expulsión. La votación no puede iniciar. ❌👥`,player.id,0xFF0000,'normal',0)}
if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;if(blueTeamCount<=redTeamCount){room.setPlayerTeam(player.id,1)}else{room.setPlayerTeam(player.id,2)}}
if(IpPlayers.includes(decryptHex(player.conn))){room.kickPlayer(player.id,MensajeBaneoPorIp,!0);return}
CreatePlayer(player);GetPlayer(player.id).auth=player.auth;GetPlayer(player.id).conn=player.conn;conexion.push([player.id,player.name,player.auth,player.conn]);console.log(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+"."+new Date().getMilliseconds()+" ➡️ "+player.name+" ["+player.id+"] has joined. (auth: "+player.auth+" | conn: "+player.conn+")");GetPlayer(player.id).jointime=Date.now();if(localStorage.getItem(player.auth)==null){var playerObject={auth:player.auth,votes:0};localStorage.setItem(player.auth,JSON.stringify(playerObject))}
let ipCount=connections.filter(a=>a[1]===player.conn).length;if(ipCount>=MaximoJugadoresPorIp){room.kickPlayer(player.id,`🚫 Sólo se permiten hasta ${MaximoJugadoresPorIp} jugadores con la misma IP.`,!1)}else{connections.push([player.id,player.conn])}
UsedNames.push({name:player.name,conn:player.conn});const players=room.getPlayerList();let playerName=player.name.replace(/ /g,"_");const adminPlayer=players.find(player=>player.admin);playerIPs.push({nickname:player.name,ip:decryptHex(player.conn)});getGeoLocation(decryptHex(player.conn)).then(location=>{let announcementPart=`@${playerName}\n`;const mostrarIpsLowerCase=MostrarIps.toLowerCase();if(mostrarIpsLowerCase==="si"){announcementPart+=`🌐🔒 IP Pública: ${decryptHex(player.conn)}\n`}
announcementPart+=`🗺️ Provincia: ${location.region} ➖ 🏙️ Ciudad: ${location.city}`;if(adminPlayer&&adminPlayer.id){room.sendAnnouncement(announcementPart,adminPlayer.id,0x19FF00,'bold',0)}else{console.log("No se encontró ningún administrador en la sala.")}});getGeoLocation(decryptHex(player.conn)).then(location=>{let announcementPart=`📛 Nickname: @${playerName} ➖ 🌎 Pais: ${location.country}`;room.sendAnnouncement(announcementPart,null,0x19FF00,'normal',0)});setTimeout(function(){room.sendAnnouncement("⚽️ ¡EQUIPOS SELECCIONADOS! ⚔️ \n\nEquipo Rojo 🔴: "+teamRed+"  vs  Equipo Azul 🔵: "+teamBlue+" \n\n¡Que empiece el juego! 🎉⚽️",player.id,0xA1E9AE,"normal",0)},3000);const shortGreetings=["⚽ ¡Hola @"+playerName+"! ¿Todo bien?","⚽️ ¡Qué onda @"+playerName+"?","⚽ ¡Todo piola @"+playerName+"?","👾 ¡¿Cómo va, @"+playerName+"?","⚽ ¡Hey @"+playerName+"! ¿Cómo andás?","⚽ ¡Qué hacés @"+playerName+"?","🏆 ¡Hey @"+playerName+"! ¿Qué contas?","⚽ ¡Qué tal, @"+playerName+"?"];const randomGreeting=shortGreetings[Math.floor(Math.random()*shortGreetings.length)];const additionalPhrases=["¡A meter huevo! ⚡","¡Rompela toda, crack! 🚀","¡Dejá la vida en la cancha! 🌟","¡A demostrar quién manda! 💪","¡Hoy la rompes! 🎯","¡Jugá con el corazón! ❤️","¡A dejar huella en el césped! 🌱","¡Gambeta y magia en cada jugada! ✨","¡A jugar como un campeón! 🏆","¡Destaca en el campo, @"+playerName+"! 🌟","¡Hoy es tu día, a brillar en la cancha! 🌈","¡Hazte leyenda en el Haxball, @"+playerName+"! 🏅","¡La victoria te espera, no te rindas! 🏁"];const randomPhrase=additionalPhrases[Math.floor(Math.random()*additionalPhrases.length)];setTimeout(function(){room.sendAnnouncement(randomGreeting+" "+randomPhrase+" ¡Escribe '!help' en el chat para ver los comandos! ⚽",player.id,0xA1E9AE,"normal",0)},5000)});enviarMensajePorPartes(player,MensajeDeBienvenida,6000)};function updateAdminVotesNeeded(){if(adminVotingActive){const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosAdmin/100));room.sendAnnouncement(`📢 ¡La cantidad de votos necesarios para la votación de administrador ha sido actualizada a ${votesNeeded}! 🗳️`,null,0xFF0000)}}
function updateKickVotesNeeded(){if(kickVotingActive){const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosBan/100));room.sendAnnouncement(`📢 ¡La cantidad de votos necesarios para la votación de expulsión ha sido actualizada a ${votesNeeded}! 🗳️`,null,0xFF0000)}}
function registerPlayerTime(playerId,team){const currentTime=Date.now();if(!playerCurrentMatchTime[playerId]){playerCurrentMatchTime[playerId]={joinTime:null,totalTime:0}}
if(playerCurrentMatchTime[playerId].joinTime){const elapsedTime=Math.floor((currentTime-playerCurrentMatchTime[playerId].joinTime)/1000);playerCurrentMatchTime[playerId].totalTime+=elapsedTime}
if(team!==0){playerCurrentMatchTime[playerId].joinTime=currentTime}else{playerCurrentMatchTime[playerId].joinTime=null}}
function handleTeamVictory(){if(ganasigueEnabled){pauseGameTick();autoBalancePaused=!0;setTimeout(function(){const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;const totalMatchTime=Math.floor((Date.now()-matchStartTime)/1000);const winningTeam=GolesTotalesRED>GolesTotalesBLUE?1:2;const losingTeam=winningTeam===1?2:1;const previousLosingTeamPlayerIDs=new Set(room.getPlayerList().filter(player=>player.team===losingTeam).map(player=>player.id));setTimeout(function(){const losingTeamPlayers=room.getPlayerList().filter(player=>player.team===losingTeam).reverse();losingTeamPlayers.forEach(player=>{registerPlayerTime(player.id,0);room.setPlayerTeam(player.id,0)})},400);setTimeout(function(){const allPlayers=room.getPlayerList();const winningPlayersCount=allPlayers.filter(p=>p.team===winningTeam).length;const formerLosingPlayers=allPlayers.filter(p=>previousLosingTeamPlayerIDs.has(p.id));const lowTimeLosers=formerLosingPlayers.filter(p=>{const time=playerCurrentMatchTime[p.id]?.totalTime||0;return time>0&&time<totalMatchTime/2});const freshSpectators=allPlayers.filter(p=>p.team===0&&!afkPlayerIDs.has(p.id)&&!previousLosingTeamPlayerIDs.has(p.id));const newPlayers=freshSpectators.filter(p=>!playerCurrentMatchTime[p.id]);const others=allPlayers.filter(p=>{const time=playerCurrentMatchTime[p.id]?.totalTime||0;return(p.team===0&&!afkPlayerIDs.has(p.id)&&!lowTimeLosers.some(l=>l.id===p.id)&&!newPlayers.some(n=>n.id===p.id)&&time>=totalMatchTime/2)});const orderedPlayers=[...lowTimeLosers,...newPlayers,...others];orderedPlayers.slice(0,winningPlayersCount).forEach(player=>{registerPlayerTime(player.id,losingTeam);room.setPlayerTeam(player.id,losingTeam)})},1000);setTimeout(function(){room.stopGame();room.startGame();autoBalancePaused=!1;resumeGameTick()},2600)},3000)}}
room.onTeamVictory=function(scores){handleTeamVictory();const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
localStorage.setItem('playerCleanSheets',JSON.stringify(playerCleanSheets));const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))});setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);var teamRedScore=scorerNumber(scores.red);var teamBlueScore=scorerNumber(scores.blue);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+teamRedScore+"      🞬      "+teamBlueScore+"  "+teamBlue+" ███████████████████ ",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")},150)},800);if(configuracionActual!==null){setTimeout(function(){room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit)},tiempoEsperaCambio)}
if(FairPlayActivado){var scoreDifference=Math.abs(scores.red-scores.blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},4500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},4500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
function rfc3986EncodeURIComponent(_0x23ab4f){var _0x151c08=_0x3c81f9;return encodeURIComponent(_0x23ab4f)[_0x151c08(0x17d)](/[!'()*]/g,escape)}
const allowedStadiums=["👑 RᴇᴀʟFᴜᴛsᴀʟ⚽","𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯² 🏆 𝗚𝗟𝗛","Eɴᴛʀᴇɴᴀᴍɪᴇɴᴛᴏ (Futsal) 💪 by 𝗚𝗟𝗛"];room.onStadiumChange=function(newStadiumName,byPlayer){if(!allowedStadiums.includes(newStadiumName)){RSRMap=!1;currentMap="❔ Desconocido"}}