let table = [
  ["41 H","ROLAND CORPORATION"  ],
  ["42 H","KORG INC."  ],
  ["43 H","YAMAHA CORPORATION"  ],
  ["44 H","CASIO COMPUTER CO.,LTD"  ],
  ["47 H","AKAI ELECTRIC CO.,LTD"  ],
  ["48 H","VICTOR COMPANY OF JAPAN,LIMITED"  ],
  ["4B H","FUJITSU LIMITED"  ],
  ["4C H","SONY CORPORATION"  ],
  ["4E H","TEAC CORPORATION"  ],
  ["50 H","MATSUSHITA ELECTRIC INDUSTRIAL CO.,LTD"  ],
  ["51 H","FOSTEX CORPORATION"  ],
  ["52 H","ZOOM CORPORATION"  ],
  ["54 H","MATSUSHITA COMMUNICATION INDUSTRIAL CO.,LTD."  ],
  ["55 H","SUZUKI MUSICAL INSTRUMENTS MFG.CO.,LTD."  ],
  ["56 H","FUJI SOUND CORPORATION LTD."  ],
  ["57 H","ACOUSTIC TECHNICAL LABORATORY,INC."  ],
  ["59H","FAITH INC."  ],
  ["5AH","INTERNET CORPORATION"  ],
  ["5CH","SEEKERS CO.,LTD"  ],
  ["5FH","SD CARD ASSOCIATION"  ],
  ["00H 40H 00H","CRIMSON TECHNOLOGY INC"  ],
  ["00H 40H 01H","SOFTBANK MOBILE CORP"  ],
  ["00H 40H 03H","D&M HOLDINGS INC."  ],
  ["00H 40H 04H","XING INC."  ],
  ["00H 40H 05H","Pioneer DJ Corporation"  ],
  ["01H","Sequential"  ],
  ["02H","IDP"  ],
  ["03H","Voyetra Technologies"  ],
  ["04H","Moog Music"  ],
  ["05H","Passport Designs"  ],
  ["06H","Lexicon Inc."  ],
  ["07H","Kutzweil / Young Chang"  ],
  ["08H","Fender"  ],
  ["09H","Gulbransen"  ],
  ["0AH","AKG Acoustics"  ],
  ["0BH","Voyce Music"  ],
  ["0CH","Waveframe Corp"  ],
  ["0DH","ADA Signal Processors"  ],
  ["0EH","Garfield Electronics"  ],
  ["0FH","Ensoniq Corp."  ],
  ["10H","Oberheim / Gibson Labs"  ],
  ["11H","Apple Computer"  ],
  ["12H","Grey Matter Response"  ],
  ["13H","Digidesign Inc."  ],
  ["14H","Palmtree Instruments"  ],
  ["15H","JLCooper Electronics"  ],
  ["16H","Lowrey Organ Company"  ],
  ["17H","Adams-Smith"  ],
  ["18H","Emu Systems Inc."  ],
  ["19H","Harmony Systems"  ],
  ["1AH","ART"  ],
  ["1BH","Baldwin"  ],
  ["1CH","Eventide"  ],
  ["1DH","Inventronics"  ],
  ["1FH","Clarity"  ],
  ["00H 00H 01H","Time/Warner Interactive"  ],
  ["00H 00H 02H","Advanced Gravis Comp."  ],
  ["00H 00H 03H","Media Vision"  ],
  ["00H 00H 04H","Dornes Research Group"  ],
  ["00H 00H 05H","K-Muse"  ],
  ["00H 00H 06H","Stypher"  ],
  ["00H 00H 07H","Digital Music Corp."  ],
  ["00H 00H 08H","IOTA Systems"  ],
  ["00H 00H 09H","New England Digital"  ],
  ["00H 00H 0AH","Artisyn"  ],
  ["00H 00H 0BH","IVL Technologies"  ],
  ["00H 00H 0CH","Southern Music Systems"  ],
  ["00H 00H 0DH","Lake Butler Sound Co."  ],
  ["00H 00H 0EH","Alesis Studio Electronics"  ],
  ["00H 00H 0FH","Sound Creation"  ],
  ["00H 00H 10H","DOD Electronics Corp."  ],
  ["00H 00H 11H","Studer-Editech"  ],
  ["00H 00H 12H","Sonus"  ],
  ["00H 00H 13H","Temporal Acuity Products"  ],
  ["00H 00H 14H","Perfect Fretworks"  ],
  ["00H 00H 15H","KAT Inc."  ],
  ["00H 00H 16H","Opcode Systems"  ],
  ["00H 00H 17H","Rane Corporation"  ],
  ["00H 00H 18H","Anadi Electronique"  ],
  ["00H 00H 19H","KMX"  ],
  ["00H 00H 1AH","Allen & Heath Brenell"  ],
  ["00H 00H 1BH","Peavey Electronics"  ],
  ["00H 00H 1CH","360 System"  ],
  ["00H 00H 1DH","Spectrum Design"  ],
  ["00H 00H 1EH","Marquis Music"  ],
  ["00H 00H 1FH","Zeta Systems"  ],
  ["00H 00H 20H","Axxes"  ],
  ["00H 00H 21H","Orban"  ],
  ["00H 00H 22H","Indian Valley Mfg."  ],
  ["00H 00H 23H","Triton"  ],
  ["00H 00H 24H","KTI"  ],
  ["00H 00H 25H","Breakaway Technologies"  ],
  ["00H 00H 26H","CAE Inc."  ],
  ["00H 00H 27H","Harrison Systems Inc."  ],
  ["00H 00H 28H","Future Lab/Mark Kuo"  ],
  ["00H 00H 29H","Rocktron Corporation"  ],
  ["00H 00H 2AH","PianoDisc"  ],
  ["00H 00H 2BH","Cannon Research Group"  ],
  ["00H 00H 2DH","Rodgers Instrument Corp."  ],
  ["00H 00H 2EH","Blue Sky Logic"  ],
  ["00H 00H 2FH","Encore Electronics"  ],
  ["00H 00H 30H","Uptown"  ],
  ["00H 00H 31H","Voce"  ],
  ["00H 00H 32H","CTI Audio"  ],
  ["00H 00H 33H","S & S Research"  ],
  ["00H 00H 34H","Broderbund Software"  ],
  ["00H 00H 35H","Allen Organ Co."  ],
  ["00H 00H 37H","Music Quest"  ],
  ["00H 00H 38H","Aphex"  ],
  ["00H 00H 39H","Gallien Krueger"  ],
  ["00H 00H 3AH","IBM"  ],
  ["00H 00H 3BH","Mark of the Unicorn"  ],
  ["00H 00H 3CH","Hotz Instruments"  ],
  ["00H 00H 3DH","ETA Lighting"  ],
  ["00H 00H 3EH","NSI Corporation"  ],
  ["00H 00H 3FH","Ad Lib"  ],
  ["00H 00H 40H","Richmond Sound Design"  ],
  ["00H 00H 41H","Microsoft Corp"  ],
  ["00H 00H 42H","Software Toolworks"  ],
  ["00H 00H 43H","Russ Jones / Niche"  ],
  ["00H 00H 44H","Intone"  ],
  ["00H 00H 45H","Advanced Remote Tech."  ],
  ["00H 00H 47H","GT Electronics"  ],
  ["00H 00H 49H","Timeline Vista"  ],
  ["00H 00H 4AH","Mesa Boogie Ltd."  ],
  ["00H 00H 4CH","Sequoia Development"  ],
  ["00H 00H 4DH","Studio Electronics"  ],
  ["00H 00H 4EH","Euphonix"  ],
  ["00H 00H 4FH","InterMIDI"  ],
  ["00H 00H 50H","MIDI Solutions Inc."  ],
  ["00H 00H 51H","3DO Company"  ],
  ["00H 00H 52H","Lightwave Research"  ],
  ["00H 00H 53H","Micro-W Corporation"  ],
  ["00H 00H 54H","Spectral Synthesis"  ],
  ["00H 00H 55H","Lone Wolf"  ],
  ["00H 00H 56H","Studio Technologies Inc."  ],
  ["00H 00H 57H","Peterson Electro-Musical"  ],
  ["00H 00H 58H","Atari Corporation"  ],
  ["00H 00H 59H","Marion Systems"  ],
  ["00H 00H 5AH","Design Event"  ],
  ["00H 00H 5BH","Winjammer Software"  ],
  ["00H 00H 5CH","AT&T Bell Laboratories"  ],
  ["00H 00H 5EH","Symetrix"  ],
  ["00H 00H 5FH","MIDI the World"  ],
  ["00H 00H 60H","Desper Products"  ],
  ["00H 00H 61H","Micros 'N MIDI"  ],
  ["00H 00H 62H","Accordians International"  ],
  ["00H 00H 63H","EuPhonics"  ],
  ["00H 00H 64H","Musonix"  ],
  ["00H 00H 65H","Turtle Beach Systems"  ],
  ["00H 00H 66H","Mackie Designs"  ],
  ["00H 00H 67H","Compuserve"  ],
  ["00H 00H 68H","BEC Technologies"  ],
  ["00H 00H 69H","QRS Music Rolls Inc"  ],
  ["00H 00H 6AH","P.G. Music"  ],
  ["00H 00H 6BH","Sierra Semiconductor"  ],
  ["00H 00H 6CH","EpiGraf Audio Visual"  ],
  ["00H 00H 6DH","Electronics Diversified Inc"  ],
  ["00H 00H 6EH","Tune 1000"  ],
  ["00H 00H 6FH","Advanced Micro Devices"  ],
  ["00H 00H 70H","Mediamation"  ],
  ["00H 00H 71H","Sabine Musical Mfg. Co."  ],
  ["00H 00H 72H","Woog Labs"  ],
  ["00H 00H 73H","Micropolis Corp"  ],
  ["00H 00H 74H","Ta Horng Musical Instr."  ],
  ["00H 00H 75H","Forte Technologies"  ],
  ["00H 00H 76H","Electro-Voice"  ],
  ["00H 00H 77H","Midisoft Corporation"  ],
  ["00H 00H 78H","Q-Sound Labs"  ],
  ["00H 00H 79H","Westrex"  ],
  ["00H 00H 7AH","NVidia"  ],
  ["00H 00H 7BH","ESS Technology"  ],
  ["00H 00H 7CH","MediaTrix Peripherals"  ],
  ["00H 00H 7DH","Brooktree Corp"  ],
  ["00H 00H 7EH","Otari Corp"  ],
  ["00H 00H 7FH","Key Electronics, Inc."  ],
  ["00H 01H 00H","Shure Brothers Inc"  ],
  ["00H 01H 01H","Crystalake Multimedia"  ],
  ["00H 01H 02H","Crystal Semiconductor"  ],
  ["00H 01H 03H","Rockwell Semiconductor"  ],
  ["00H 01H 04H","Silicon Graphics"  ],
  ["00H 01H 05H","Midiman"  ],
  ["00H 01H 06H","PreSonus"  ],
  ["00H 01H 08H","Topaz Enterprises"  ],
  ["00H 01H 09H","Cast Lighting"  ],
  ["00H 01H 0AH","Microsoft Consumer Division"  ],
  ["00H 01H 0CH","Fast Forward Designs"  ],
  ["00H 01H 0DH","lgor's Software Laboratories"  ],
  ["00H 01H 0EH","Van Koevering Company"  ],
  ["00H 01H 0FH","Altech Systems"  ],
  ["00H 01H 10H","S & S Research"  ],
  ["00H 01H 11H","VLSI Technology"  ],
  ["00H 01H 12H","Chromatic Research"  ],
  ["00H 01H 13H","Sapphire"  ],
  ["00H 01H 14H","IDRC"  ],
  ["00H 01H 15H","Justonic Tuning"  ],
  ["00H 01H 16H","TorComp"  ],
  ["00H 01H 17H","Newtek Inc"  ],
  ["00H 01H 18H","Sound Sculpture"  ],
  ["00H 01H 19H","Walker Technical"  ],
  ["00H 01H 1AH","PAVO"  ],
  ["00H 01H 1BH","InVision Interactive"  ],
  ["00H 01H 1CH","T-Square Design"  ],
  ["00H 01H 1DH","Nemesys Music Technology"  ],
  ["00H 01H 1EH","DBX Professional (Harman Intl)"  ],
  ["00H 01H 1FH","Syndyne Corporation"  ],
  ["00H 01H 20H","Bitheadz"  ],
  ["00H 01H 21H","Cakewalk Music Software"  ],
  ["00H 01H 22H","Analog Devices (Staccato Systems)"  ],
  ["00H 01H 23H","National Semiconductor"  ],
  ["00H 01H 24H","Boom Theory / Adinolfi Alt. Perc."  ],
  ["00H 01H 25H","Virtual DSP Corporation"  ],
  ["00H 01H 26H","Antares Systems"  ],
  ["00H 01H 27H","Angel Software"  ],
  ["00H 01H 28H","St Louis Music"  ],
  ["00H 01H 29H","Lyrrus dba G-VOX"  ],
  ["00H 01H 2AH","Ashley Audio Inc"  ],
  ["00H 01H 2BH","Vari-Lite Inc"  ],
  ["00H 01H 2CH","Summit Audio Inc"  ],
  ["00H 01H 2DH","Aureal Semiconductor Inc"  ],
  ["00H 01H 2EH","SeaSound LLC"  ],
  ["00H 01H 2FH","U. S. Robotics"  ],
  ["00H 01H 30H","Aurisis Research"  ],
  ["00H 01H 31H","Nearfield Multimedia"  ],
  ["00H 01H 32H","FM7 Inc"  ],
  ["00H 01H 33H","Swivel Systems"  ],
  ["00H 01H 34H","Hyperactive Audio Systems"  ],
  ["00H 01H 35H","MidiLite (Castle Studios Prods)"  ],
  ["00H 01H 36H","Radikal Technologies"  ],
  ["00H 01H 37H","Roger Linn Design"  ],
  ["00H 01H 38H","TC-Helicon Vocal Technologies"  ],
  ["00H 01H 39H","Event Electronics"  ],
  ["00H 01H 3AH","Sonic Network (Sonic Implants)"  ],
  ["00H 01H 3BH","Realtime Music Solutions"  ],
  ["00H 01H 3CH","Apogee Digital"  ],
  ["00H 01H 3DH","Classical Organs, Inc."  ],
  ["00H 01H 3EH","Microtools Inc"  ],
  ["00H 01H 3FH","Numark Industries"  ],
  ["00H 01H 40H","Frontier Design Group LLC"  ],
  ["00H 01H 41H","Recordare LLC"  ],
  ["00H 01H 42H","Star Labs"  ],
  ["00H 01H 43H","Voyager Sound Inc"  ],
  ["00H 01H 44H","Manifold Labs"  ],
  ["00H 01H 45H","Aviom Inc"  ],
  ["00H 01H 46H","Mixmeister Technology"  ],
  ["00H 01H 47H","Notation Software"  ],
  ["00H 01H 48H","Mercurial Communications"  ],
  ["00H 01H 49H","Wave Arts, Inc"  ],
  ["00H 01H 4AH","Logic Sequencing Devices Inc"  ],
  ["00H 01H 4BH","Axess Electronics"  ],
  ["00H 01H 4CH","Muse Reasearch"  ],
  ["00H 01H 4DH","Open Labs"  ],
  ["00H 01H 4EH","Guillemot R&D Inc"  ],
  ["00H 01H 4FH","Samson Technologies"  ],
  ["00H 01H 50H","Electoronic Theatre Controls"  ],
  ["00H 01H 51H","Research In Motion"  ],
  ["00H 01H 52H","Mobileer"  ],
  ["00H 01H 53H","Synthogy"  ],
  ["00H 01H 54H","Lynx Studio Technology Inc."  ],
  ["00H 01H 55H","Damage Control Engineering LLC"  ],
  ["00H 01H 56H","Yost Engineering, Inc."  ],
  ["00H 01H 57H","Brooks & Forsman Designs LLC"  ],
  ["00H 01H 58H","Magnekey"  ],
  ["00H 01H 59H","Garritan Corp"  ],
  ["00H 01H 5AH","Plogue Art et Technology, Inc."  ],
  ["00H 01H 5BH","RJM Music Technology"  ],
  ["00H 01H 5CH","Custom Solutions Software"  ],
  ["00H 01H 5DH","Sonarcana LLC"  ],
  ["00H 01H 5EH","Centrance"  ],
  ["20H","Passac"  ],
  ["21H","SIEL"  ],
  ["22H","Synthaxe (UK)"  ],
  ["23H","Stepp"  ],
  ["24H","Hohner"  ],
  ["25H","Twister"  ],
  ["26H","Solton"  ],
  ["27H","Jellinghaus MS"  ],
  ["28H","Southworth Music Systems"  ],
  ["29H","PPG (Germany)"  ],
  ["2AH","JEN"  ],
  ["2BH","Solid State Logic Organ Systems"  ],
  ["2CH","Audio Veritrieb-P. Struven"  ],
  ["2DH","Neve"  ],
  ["2EH","Soundtracs Ltd."  ],
  ["2FH","Elka"  ],
  ["30H","Dynacord"  ],
  ["31H","Intercontinental Electronics SpA"  ],
  ["32H","Drawmer"  ],
  ["33H","Clavia Digital Instruments"  ],
  ["34H","Audio Architecture"  ],
  ["35H","GeneralMusic Corp. c/o"  ],
  ["36H","Cheetah Marketing"  ],
  ["37H","C.T.M."  ],
  ["38H","Simmons UK"  ],
  ["39H","Soundcraft Electronics"  ],
  ["3AH","Steinberg GMBH c/o"  ],
  ["3BH","Wersi Gmbh"  ],
  ["3CH","AVAB Niethammer AB"  ],
  ["3DH","Digigram"  ],
  ["3EH","Waldorf Electronics GmbH"  ],
  ["3FH","Quasimidi"  ],
  ["00H 20H 00H","Dream"  ],
  ["00H 20H 01H","Strand Lighting"  ],
  ["00H 20H 02H","Amek Systems"  ],
  ["00H 20H 03H","Casa Di Risparmio Di Loreto"  ],
  ["00H 20H 04H","Bohm electronic GmbH"  ],
  ["00H 20H 05H","Syntec Digital Audio"  ],
  ["00H 20H 06H","Trident Audio Developments"  ],
  ["00H 20H 07H","Real World Studio"  ],
  ["00H 20H 08H","Evolution Synthesis"  ],
  ["00H 20H 09H","Yes Technology"  ],
  ["00H 20H 0AH","Audiomatica"  ],
  ["00H 20H 0BH","Bontempi / Farfisa (COMUS)"  ],
  ["00H 20H 0CH","F.B.T. Elettronica SpA"  ],
  ["00H 20H 0DH","MidiTemp GmbH"  ],
  ["00H 20H 0EH","LA Audio (Larking Audio)"  ],
  ["00H 20H 0FH","Zero 88 Lighting Limited"  ],
  ["00H 20H 10H","Micon Audio Electronics GmbH"  ],
  ["00H 20H 11H","Forefront Technology"  ],
  ["00H 20H 12H","Studio Audio and Video Ltd."  ],
  ["00H 20H 13H","Kenton Electronics"  ],
  ["00H 20H 14H","Celco Division of Electrosonic"  ],
  ["00H 20H 15H","ADB"  ],
  ["00H 20H 16H","Marshall Products Limited"  ],
  ["00H 20H 17H","DDA"  ],
  ["00H 20H 18H","BSS Audio Ltd."  ],
  ["00H 20H 19H","MA Lighting Technology"  ],
  ["00H 20H 1AH","Fatar SRL c/o Music Industries"  ],
  ["00H 20H 1CH","Artisan Clasic Organ Inc."  ],
  ["00H 20H 1DH","Orla Spa"  ],
  ["00H 20H 1EH","Pinnacle Audio (Klark Teknik)"  ],
  ["00H 20H 1FH","TC Electronics"  ],
  ["00H 20H 20H","Doepfer Musikelektronik GmbH"  ],
  ["00H 20H 21H","Creative Technology Pte. Ltd. c/o"  ],
  ["00H 20H 22H","Seiyddo/Minami"  ],
  ["00H 20H 23H","Goldstar Co. Ltd."  ],
  ["00H 20H 24H","Midisoft s.a.s. di M.Cima & C"  ],
  ["00H 20H 25H","Samick Musical Inst. Co. Ltd."  ],
  ["00H 20H 26H","Penny and Giles"  ],
  ["00H 20H 27H","Acorn Computer"  ],
  ["00H 20H 28H","LSC Electronics Pty. Ltd."  ],
  ["00H 20H 29H","Novation EMS"  ],
  ["00H 20H 2AH","Samkyung Mechatronics"  ],
  ["00H 20H 2BH","Medeli Electronics Co"  ],
  ["00H 20H 2CH","Charlie Lab SRL"  ],
  ["00H 20H 2DH","Blue Chip Music Technology"  ],
  ["00H 20H 2EH","BEE OH Corp"  ],
  ["00H 20H 2FH","LG Semiconductor"  ],
  ["00H 20H 30H","TESI"  ],
  ["00H 20H 31H","EMAGIC"  ],
  ["00H 20H 32H","Behringer GmbH"  ],
  ["00H 20H 33H","Access"  ],
  ["00H 20H 34H","Synoptic"  ],
  ["00H 20H 35H","Hanmesoft Corp"  ],
  ["00H 20H 36H","Terratec Electronic GmbH"  ],
  ["00H 20H 37H","Proel SpA"  ],
  ["00H 20H 38H","IBK MIDI"  ],
  ["00H 20H 39H","IRCAM"  ],
  ["00H 20H 3AH","Propellerhead Software"  ],
  ["00H 20H 3BH","Red Sound Systems Ltd"  ],
  ["00H 20H 3CH","Elektron ESI AB"  ],
  ["00H 20H 3DH","Sintefex Audio"  ],
  ["00H 20H 3EH","MAM (Music and More)"  ],
  ["00H 20H 3FH","Amsaro GmbH"  ],
  ["00H 20H 40H","CDS Advanced Technology BV"  ],
  ["00H 20H 41H","Touched By Sound GmbH"  ],
  ["00H 20H 42H","DSP Arts"  ],
  ["00H 20H 43H","Phil Rees Music Tech"  ],
  ["00H 20H 44H","Stamer Musikanlagen GmbH"  ],
  ["00H 20H 45H","Soundart (Musical Muntaner)"  ],
  ["00H 20H 46H","C-Mexx Software"  ],
  ["00H 20H 47H","Klavis Technologies"  ],
  ["00H 20H 48H","Noteheads AB"  ],
  ["00H 20H 49H","Algorithmix"  ],
  ["00H 20H 4AH","Skrydstrup R&D"  ],
  ["00H 20H 4BH","Professional Audio Company"  ],
  ["00H 20H 4CH","DBTECH"  ],
  ["00H 20H 4DH","Vermona"  ],
  ["00H 20H 4EH","Nokia"  ],
  ["00H 20H 4FH","Wave Idea"  ],
  ["00H 20H 50H","Hartmann GmbH"  ],
  ["00H 20H 51H","Lion's Tracs"  ],
  ["00H 20H 52H","Analogue Systems"  ],
  ["00H 20H 53H","Focal-JMlab"  ],
  ["00H 20H 54H","Ringway Electronics (Chang-Zhou)"  ],
  ["00H 20H 55H","Faith Technologies (Digiplug)"  ],
  ["00H 20H 56H","Showwork"  ],
  ["00H 20H 57H","Manikin Electoronic"  ],
  ["00H 20H 58H","1 Come Tech"  ],
  ["00H 20H 59H","Phonic Corp"  ],
  ["00H 20H 5AH","Lake Technology"  ],
  ["00H 20H 5BH","Silansys Technologies"  ],
  ["00H 20H 5CH","Winbond Electronics"  ],
  ["00H 20H 5DH","Cinetix Medien und Interface GmbH"  ],
  ["00H 20H 5EH","A&G Soluzioni Digitali"  ],
  ["00H 20H 5FH","Sequentix Music Systems"  ],
  ["00H 20H 60H","Oram Pro Audio"  ],
  ["00H 20H 61H","Be4 Ltd."  ],
  ["00H 20H 62H","Infection Music"  ],
  ["00H 20H 63H","Central Music Co.(CME)"  ],
  ["00H 20H 64H","GenoQs Machines"  ],
  ["00H 20H 65H","Medialon"  ],
  ["00H 20H 66H","Waves Audio Ltd"  ],
  ["00H 20H 67H","Jerash Labs"  ],
  ["00H 20H 68H","Da Fact"  ],
  ["00H 20H 69H","Elby Designs"  ],
  ["00H 20H 6AH","Spectral Audio"  ],
  ["00H 20H 6BH","Arturia"  ],
  ["00H 20H 6CH","Vixid"  ],
  ["00H 20H 6DH","C-Thru Music"  ]
]

const fs = require('fs')
let obj = {}
for(i =0; i<table.length; i++){
    let entry = table[i]
    let key = entry[1].toUpperCase()
    let val = entry[0]
    obj[key] = val
}
console.log(obj)
fs.writeFileSync('sysexCompanies.json', JSON.stringify(obj, null, '\t'))