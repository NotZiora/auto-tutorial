const LOG_CONSOLE_ONLY = 0;
const LOG_COMMAND_ONLY = 1;
const LOG_ALL = 2;

const QUEST_TYPE_DIALOG = 0;
const QUEST_TYPE_WORKOBJECT = 1;
const QUEST_TYPE_GATHER = 2;
const QUEST_TYPE_USE_ITEM = 3;
const QUEST_TYPE_COMBAT_KILL = 4; // until we kill our quota.
const QUEST_TYPE_GOTO = 5;
const QUEST_TYPE_DIALOG_ESCORT = 6; // smh...
const QUEST_TYPE_PEGASUS = 7; // lol
const QUEST_TYPE_NEXT = 8; // zzz

const DELAY_PROCESS_QUEST_AFTER_SPAWN = 3000;
const DELAY_CHANGE_CHANNEL_AFTER_SPAWN = 2000;
const DELAY_DIALOG_REPLY = 350;
const DELAY_START_PEGASUS = 1000;
const DELAY_TELEPORT_QUEST_LOCATION = 2750;
const DELAY_TELEPORT_SCAN_ATTACK = 5500;
const DELAY_BEGIN_ATTACK = 500;
const ADDITIONAL_POST_COMBAT_DELAY = 1000;

const DELAY_START_GATHERING = 600;
const DELAY_PROCESS_GATHERING = 1000;
const DELAY_START_WORKOBJECT = 600;
const DELAY_PROCESS_WORKOBJECT = 1000;

const DELAY_TELEPORT_TO_DIALOG = 1000;
const DELAY_DIALOG_CONTACT = 2250;
// const DELAY_DIALOG_REPEAT_CONTACT = 3000;
const DELAY_FOLLOW_ESCORT = 5000;
const DELAY_USE_ITEM = 600;

const TUTORIAL_ZONES = [
	{ zone: 5, openWorld: true, name: "Stepstone Isle (Open World)" },
	{ zone: 9827, openWorld: false, name: "Ghilliedhu Quest" },
	{ zone: 9828, openWorld: false, name: "Shadetree Quest" },
	{ zone: 9829, openWorld: false, name: "Sorrowtree Quest" }
]

const HP_POT_ITEMID = 6550;
const HEALTH_POT_THRESHOLD = 30;

const GUNNO_JOBID = 9;
const GUNNO_SPAM_DELAY = 70;
const GUNNO_SPAM_TRIES = 38;
const GUNNO_AUTO_SKILLS = [10101, 10201, 10301, 10401, 10501, 10601, 10701, 10801, 10901, 11001, 11101, 11201, 10102, 10202, 10302, 10402, 10502, 10602, 10702, 10802, 10902, 11002, 11102, 11202]

const QUESTS_DATA = [
	{ questId: 59901, step: 2, zone: 5, type: QUEST_TYPE_WORKOBJECT, targetId: 81809, quota: 1, zone: 5},
	{ questId: 59902, step: 3, zone: 5, type: QUEST_TYPE_WORKOBJECT, targetId: 81814, quota: 1, zone: 5},
	{ questId: 59902, step: 6, zone: 5, type: QUEST_TYPE_GATHER, targetId: 402, quota: 1, zone: 5},
	{ questId: 59902, step: 7, zone: 5, type: QUEST_TYPE_USE_ITEM, targetId: 81252, quota: 1, zone: 5},
	{ questId: 59902, step: 9, zone: 5, type: QUEST_TYPE_WORKOBJECT, targetId: 81813, quota: 1, zone: 5},
	{ questId: 59902, step: 11, zone: 5, type: QUEST_TYPE_NEXT, quota: 1, zone: 9827},
	// 59902, 11
	{ questId: 59903, step: 2, zone: 9827, type: QUEST_TYPE_COMBAT_KILL, loc: { x: -13226, y: -28513, z: -4433 }, 
		targetList: [
			{ quota: 3, targetId: { templateId: 5017, huntingZoneId: 827, name: "Agitated Ghilliedhu" } }
		]
	},
	{ questId: 59904, step: 1, zone: 9827, type: QUEST_TYPE_COMBAT_KILL, loc: { x: -11645, y: -27085, z: -4460 }, 
		targetList: [
			{ quota: 1, targetId: { templateId: 5019, huntingZoneId: 827, name: "Prime Ghilliedhu" } }
		]
	},	
	{ questId: 59904, step: 2, zone: 9827, type: QUEST_TYPE_GOTO, loc: { x: -13735, y: -25072, z: -4415 }},
	{ questId: 59904, step: 3, zone: 9827, type: QUEST_TYPE_GATHER, targetId: 569, quota: 3},
	{ questId: 59905, step: 2, zone: 9827, type: QUEST_TYPE_WORKOBJECT, targetId: 81818, quota: 1},
	{ questId: 59905, step: 4, zone: 9827, type: QUEST_TYPE_DIALOG_ESCORT, loc: { x: -9597, y: -24918, z: -3120 }, quota: 1}, // after talking with NPC, teleport here.
	{ questId: 59905, step: 5, zone: 9827, type: QUEST_TYPE_WORKOBJECT, targetId: 81810, quota: 1},
	{ questId: 59906, step: 1, zone: 9828, type: QUEST_TYPE_COMBAT_KILL, loc: { x: 20951, y: 5923, z: -3114 }, 
		targetList: [
			{ quota: 7, targetId: { templateId: 5012, huntingZoneId: 828, name: "argon thrall" } }
		]
	},
	{ questId: 59906, step: 2, zone: 9828, type: QUEST_TYPE_GOTO, loc: { x: 20076, y: 5453, z: -3068 }},
	{ questId: 59906, step: 3, zone: 9828, type: QUEST_TYPE_COMBAT_KILL, loc: { x: 19312, y: 5825, z: -3090 }, 
		targetList: [
			{ quota: 4, targetId: { templateId: 5007, huntingZoneId: 828, name: "argon footsoldier" } }
		]
	},
	{ questId: 59906, step: 5, zone: 9828, type: QUEST_TYPE_COMBAT_KILL, loc: { x: 18840, y: 7852, z: -3325 }, 
		targetList: [
			{ quota: 2, targetId: { templateId: 5006, huntingZoneId: 828, name: "argon sentry" } },
			{ quota: 2, targetId: { templateId: 5011, huntingZoneId: 828, name: "argon striker" } },
		]
	},
	{ questId: 59906, step: 6, zone: 9828, type: QUEST_TYPE_DIALOG, extraActionDelay: 10000,},	
	{ questId: 59906, step: 7, zone: 9828, type: QUEST_TYPE_COMBAT_KILL, extraActionDelay: 10000,
		loc: { x: 18366, y: 10762, z: -3300 },
		endAction: {templateId: 5000, huntingZoneId: 828, id: 1212 },
		targetList: [
			{ quota: 1, targetId: { templateId: 5000, huntingZoneId: 828, name: "Argon Predator v1" } }
		]
	},	
	{ questId: 59907, step: 5, zone: 5, type: QUEST_TYPE_GOTO, loc: { x: 18599, y: 13599, z: -3197 }},
	{ questId: 59907, step: 7, zone: 5, type: QUEST_TYPE_GOTO, loc: { x: 19675, y: 13219, z: -3203 }},
	{ questId: 59908, step: 1, zone: 5, type: QUEST_TYPE_GOTO, loc: { x: 21451, y: 11241, z: -2793 }},
	{ questId: 59908, step: 3, zone: 5, type: QUEST_TYPE_COMBAT_KILL, loc: { x: 22273, y: 9334, z: -2660 },
		targetList: [
			{ quota: 3, targetId: { templateId: 5001, huntingZoneId: 599, name: "Sick Bear" } },
			{ quota: 1, targetId: { templateId: 5000, huntingZoneId: 599, name: "Argon Bear" } },
		]
	},
	{ questId: 59908, step: 4, loc: { x: 24203, y: 7803, z: -2203 }, zone: 5, type: QUEST_TYPE_GOTO },
	{ questId: 59908, step: 7, targetId: 81817, quota: 3, zone: 5, type: QUEST_TYPE_WORKOBJECT },
	{ questId: 59908, step: 9, loc: { x: 26120, y: 6306, z: -1743 }, zone: 5, type: QUEST_TYPE_GOTO },
	{ questId: 59909, step: 1, targetId: 81257, quota: 1, zone: 5, type: QUEST_TYPE_USE_ITEM },
	{ questId: 59909, step: 3, loc: { x: 27321, y: 7909, z: -1721 }, zone: 5, type: QUEST_TYPE_GOTO },	
	{ questId: 59909, step: 4, zone: 5, type: QUEST_TYPE_COMBAT_KILL, loc: { x: 28266, y: 9272, z: -1725 },
		targetList: [
			{ quota: 4, targetId: { templateId: 5019, huntingZoneId: 599, name: "Orcan Drone" } },
			{ quota: 1, targetId: { templateId: 5017, huntingZoneId: 599, name: "Orcan overseer" } },
		]
	},
	{ questId: 59909, step: 5, loc: { x: 29250, y: 12678, z: -1938 }, zone: 5, type: QUEST_TYPE_GOTO },	
	{ questId: 59912, step: 1, zone: 5, type: QUEST_TYPE_COMBAT_KILL, 
		loc: { x: 30563, y: 12952, z: -1756 },
		targetList: [
			{ quota: 3, targetId: { templateId: 5022, huntingZoneId: 599, name: "Argon Soldiers" } }
		]
	},
	{ questId: 59912, step: 4, loc: { x: 32206, y: 14070, z: -1624 }, zone: 5, type: QUEST_TYPE_GOTO },
	{ questId: 59912, step: 6, loc: { x: 32696, y: 12009, z: -1757 }, zone: 5, type: QUEST_TYPE_GOTO },	
	{ questId: 59912, step: 7, zone: 5, type: QUEST_TYPE_COMBAT_KILL, 
		loc: { x: 33168, y: 11725, z: -1847 },
		targetList: [
			{ quota: 3, targetId: { templateId: 5023, huntingZoneId: 599, name: "Argon Shocktrooper" } }
		]
	},
	{ questId: 59912, step: 8, loc: { x: 33435, y: 11056, z: -1870 }, zone: 5, type: QUEST_TYPE_GOTO },
	{ questId: 59912, step: 10, targetId: 81258, quota: 1, zone: 5, type: QUEST_TYPE_USE_ITEM },
	{ questId: 59910, step: 1, loc: { x: 33337, y: 9654, z: -1638 }, zone: 5, type: QUEST_TYPE_GOTO },
	{ questId: 59910, step: 2, targetId: 81812, quota: 1, zone: 5, type: QUEST_TYPE_WORKOBJECT },
	{ questId: 59910, step: 5, loc: { x: 50835, y: -146309, z: 235 }, zone: 9829, type: QUEST_TYPE_GOTO },
	{ questId: 59910, step: 8, loc: { x: 52114, y: -146663, z: 465 }, zone: 9829, type: QUEST_TYPE_GOTO },
	{ questId: 59910, step: 9, zone: 9829, type: QUEST_TYPE_COMBAT_KILL, loc: { x: 52114, y: -146663, z: 470 },
		targetList: [
			{ quota: 6, targetId: { templateId: 5007, huntingZoneId: 829, name: "Argon Sentinel" } }
		]
	},
	{ questId: 59910, step: 10, zone: 9829, type: QUEST_TYPE_COMBAT_KILL, extraActionDelay: 4000,
		loc: { x: 52114, y: -146663, z: 470 },
		targetList: [
			{ quota: 1, targetId: { templateId: 5006, huntingZoneId: 829, name: "Argon Wraith" } }
		]
	},	
	{ questId: 59910, step: 12, loc: { x: 53414, y: -145327, z: 845 }, zone: 9829, type: QUEST_TYPE_GOTO },
	{ questId: 59910, step: 13, zone: 9829, type: QUEST_TYPE_COMBAT_KILL,
		loc: { x: 56108, y: -145399, z: 975 }, 
		endAction: {templateId: 5001, huntingZoneId: 829, id: 1212 },
		resumeOnAbEnd: 99000080,
		targetList: [
			{ quota: 1, targetId: { templateId: 5001, huntingZoneId: 829, name: "Argon Predator v2" } }
		]
	}, // actually combat (argon predator) // 13, 5001 829, [sas] tid 5001 hid 829 id 1212
	{ questId: 59910, step: 14, targetId: 81815, quota: 1, zone: 9829, type: QUEST_TYPE_WORKOBJECT },
	{ questId: 59911, step: 6, targetId: 599, zone: 5, type: QUEST_TYPE_PEGASUS }
]

module.exports = function tutorial(dispatch) {
	const command = dispatch.command;
	
	let myJob = -1;
	let lastEnemyHitID;
	let lastEnemyHitInfo;
	
	let currentTargetList = [];
	let nextAttackCycle;
	let additionalQuestDelay = 0;
		
	let lastGunnoSkillEvent;
	let rapidSpamReady = true;
	let rapidFireEnabled = true;
	let interruptAttack = false;
	let currentTarget;
	let characterList = new Map();
	
	let playerLocation;
	let playerW;
	
	let changingChannel = false
	let gameId;
	let currentZone;
	let lastDialogEventId = 0;
	let currentQuota = 0;
	let isFollowing = false;
	let waitingPegasus = false;
	
	let enabled = false;
	
	let npcs = new Map()
	let workObjects = new Map();
	let currentGatherables = new Map();
	
	function isGunno() {
		return myJob == GUNNO_JOBID;
	}
	
	function myJobName() {
		switch(myJob){
			case GUNNO_JOBID:
				return "Gunno";
			default:
				return "Unknown";
		}
	}
	
	// Note: S_QUEST_INFO will be sent before S_SPAWN_ME; cache the important bits for operation once character spawns in.
	let cachedQuestData = undefined;
	
	command.add(`tutorial`, () => {
		enabled = !enabled;
		logMessage(`AutoTutorial is now ${enabled}`)
	});
	
	command.add(`rapid`, () => {
		rapidFireEnabled = !rapidFireEnabled;
		logMessage(`Rapid-fire blast is currently ${rapidFireEnabled}. Character class is: ${myJobName()}`);
		if (!rapidSpamReady){
			interruptAttack = true;
		}
	});
	
	command.add(`currentquest`, () => {
		if (cachedQuestData != undefined){
			logMessage(`Current Quest is: ${cachedQuestData.questId} : ${cachedQuestData.step}`);
			processQuest(cachedQuestData);
		}
		else{
			logMessage(`No current cached quest.`)
		}
	});
	
	command.add(`start1`, () => {
		enabled = true;
		let npcData = getNPCdata(121, 599);
		if (npcData == undefined){
			logMessage(`Glennock NPC (initial start) not found. Aborting`);
		}
		else{
			logMessage(`Glennock found; teleporting.`)
			teleport(npcData.loc);
			setTimeout(() => {
				dispatch.toServer(`C_NPC_CONTACT`, 2, {
					gameId : npcData.gameId
				});
			}, 1000);
		}
	});
	
	command.add(`start2`, () => {
		start2();
	});
	
	function start2(){
		let npcData = getNPCdata(105, 827);
		if (npcData == undefined){
			logMessage(`Anya NPC (Ghilliedhu Quest) not found. Aborting`);
		}
		else{
			logMessage(`Anya found; teleporting.`)
			teleport(npcData.loc);
			setTimeout(() => {
				dispatch.toServer(`C_NPC_CONTACT`, 2, {
					gameId : npcData.gameId
				});
			}, 1000);
		}
	}
	
	dispatch.hook(`C_START_SKILL`, 7, (event) => {
		if (!rapidFireEnabled && !isGunno()){
			return;
		}
		if (!rapidSpamReady){
			command.message(`Pls wait until current spam is done`);
			return false;
		}
		if (isGunno()){
			if (rapidSpamReady && GUNNO_AUTO_SKILLS.includes(event.skill.id)){
				command.message(`Gunno aa detected!!`);		
				lastGunnoSkillEvent = Object.assign({}, event);
				lastGunnoSkillEvent.skill.id = event.skill.id % 2 == 0 ? event.skill.id : event.skill.id + 1;			
				doGunner(GUNNO_SPAM_TRIES);
				return false;
			}
		}
	});
	
	dispatch.hook(`S_ACTION_STAGE`, 9, (event) => {
		if (event.skill.id == 40100){
			command.message(`Modding saction`);
			event.stage = 2;
			return true;
		}
	});
	
	function doGunner(repeat = 1){
		if (!isGunno()){
			return;
		}
		rapidSpamReady = false;		
		let blastID = 10102;
		if (lastGunnoSkillEvent){
			blastID = lastGunnoSkillEvent.skill.id;
		}
		
		dispatch.toServer(`C_START_SKILL`, 7, {
			skill: {
				reserved: 0,
				npc: false,
				type: 1,
				huntingZoneId: 0,
				id: blastID
			},
			w: playerW,
			loc: playerLocation,
			dest: (currentTarget ? currentTarget.loc : undefined) || (lastGunnoSkillEvent ? lastGunnoSkillEvent.dest : undefined)  || playerLocation
		});
		
		if (repeat > 0 && !interruptAttack){
			setTimeout(() => {
				let remainder = (currentTarget ? 1 : repeat - 1);
				doGunner(remainder);
			}, GUNNO_SPAM_DELAY);
		}
		else{
			interruptAttack = false;
			rapidSpamReady = true;			
		}
	}
	
	dispatch.hook(`S_GET_USER_LIST`, 17, (event) => {
		// parse character list
		myJob = -1;
		characterList.clear();
		for (const character of event.characters) {
			characterList.set(character.id, {
				id: character.id,
				jobId: character.class
			});
		}
	});
	
	dispatch.hook('C_SELECT_USER', 1, (event) => {
		let character = characterList.get(event.id);
		if (character){
			myJob = character.jobId;			
		}
		else{
			console.log(`Failed to parse playerID from character list... dafuq?`);
		}			
	});
	
	dispatch.hook(`S_LOGIN`, 14, (event) => {
		gameId = event.gameId;
		console.log(`You are a ${myJobName()}. Rapid-Blast is enabled.`)
	});
	
	let logAction = false;
	command.add(`logaction`, () => {
		logAction = !logAction;
		logMessage(`Logging of action stage ${logAction}`);
	});
	
	dispatch.hook(`S_DUNGEON_EVENT_MESSAGE`, 2, (event) => {
		if (currentTarget){
			console.log(`Dungeon message: ${event.message}`);
		}
		if (currentTarget && (event.message.includes('9829004') || event.message.includes('9828008'))){
			command.message(`Argon Predator doing his thing; stopping attacks.`)
			interruptAttack = true;
			currentTarget = undefined;
		}
	})
	
	dispatch.hook(`S_ACTION_STAGE`, 9, (event) => {
		if (logAction && event.skill.npc){
			logMessage(`templateId: ${event.templateId}, skill: ${JSON.stringify(event.skill)}, stage: ${event.stage}`, LOG_ALL);
		}		

		let npc = npcs.get(event.gameId);
		if (npc){
			npcs.set(npc.gameId, {
				gameId: npc.gameId,
				target: npc.target,
				templateId : npc.templateId,
				relation : npc.relation,
				huntingZoneId : npc.huntingZoneId,
				questInfo : npc.questInfo,
				loc: event.loc,
				name: npc.name
			});
		}
	});
	
	dispatch.hook(`S_ABNORMALITY_END`, 1, (event) => {
		if (cachedQuestData && cachedQuestData.resumeOnAbEnd == event.id){
			logMessage(`Abnormal state ended. Resuming combat.`);
			scanForAttackTargets();
		}
	});
	
	dispatch.hook(`S_CREATURE_CHANGE_HP`, 6, (event) => {
		if (currentTarget && event.target == gameId){
			if (event.diff < 0){
				let percentHP = (event.curHp / event.maxHp) * BigInt(100);
				if (percentHP < BigInt(HEALTH_POT_THRESHOLD)){
					// use hp pot potion
					logMessage(`HP fell below 30%! Using a pot!`, LOG_ALL);
					dispatch.toServer('C_USE_ITEM', 3, {
						gameId: gameId,
						id: HP_POT_ITEMID,
						dbid: 0,
						target: 0,
						amount: 1,
						dest: 0,
						loc: playerLocation,
						w: playerW,
						unk1: 0,
						unk2: 0,
						unk3: 0,
						unk4: true
					});					
				}
			}
		}
		
		if (event.source == gameId){
			let npc = npcs.get(event.target);
			if (event.target != lastEnemyHitID){
				lastEnemyHitID = event.target;
				if (npc){
					lastEnemyHitInfo = Object.assign({}, npc);
					//logMessage(`New NPC type hit: TemplateID ${lastEnemyHitInfo.templateId}, huntingZoneId ${lastEnemyHitInfo.huntingZoneId}`);
				}				
			}
			if (npc){
				if (event.curHp == 0){
					logMessage(`Enemy dead!`)
					additionalQuestDelay = ADDITIONAL_POST_COMBAT_DELAY;
					for (let [index, target] of currentTargetList.entries()){
						if (target.quota > 0){						
							if (npc.templateId == target.targetId.templateId && npc.huntingZoneId == target.targetId.huntingZoneId){
								interruptAttack = true;
								currentTarget = undefined;
								target.quota--;
								logMessage(`Current enemies to kill: ${target.quota} of ${target.targetId.name}`)								
								currentTargetList[index] = target;								
								clearTimeout(nextAttackCycle);
								nextAttackCycle = setTimeout(scanForAttackTargets, 3000);							
								break;
							}
						}
					}						
				}				
			}
			else{
				//logMessage(`Unknown target HP change?`)
			}
		}
	});
	
	dispatch.hook(`S_LOAD_TOPO`, 3, (event) => {
		currentZone = event.zone;
		interruptAttack = true;
		npcs.clear();
		workObjects.clear();
		if (TUTORIAL_ZONES.find(obj => obj.zone == currentZone)){
			enabled = true;
		}
		else{
			enabled = false;
		}
	});
	
	dispatch.hook(`S_CURRENT_CHANNEL`, 2, (event) => {		
		let candidate = TUTORIAL_ZONES.find(obj => obj.zone == currentZone && obj.openWorld);
		if (candidate != undefined && event.channel == 1 && !changingChannel){
			changingChannel = true;
			logMessage(`Arrived in channel 1 of ${candidate.name}; changing to channel 3!`, LOG_ALL);			
			setTimeout(changeChannel, DELAY_CHANGE_CHANNEL_AFTER_SPAWN, 3);
		}
	});
	
	dispatch.hook(`S_SPAWN_COLLECTION`, 4, (event) => {		
		if (!event.extractor){
			currentGatherables.set(event.gameId, {
				gameId: event.gameId,
				gatherId: event.id,
				loc: event.loc				
			});
		}
    });
	
	dispatch.hook(`S_DESPAWN_COLLECTION`, 2, (event) => {
		currentGatherables.delete(event.gameId);
	});
	
	dispatch.hook(`C_COLLECTION_PICKSTART`, 2, (event) => {
		let gatherable = currentGatherables.get(event.gameId);
		if (gatherable){
			logMessage(`Begin gathering id: ${gatherable.gatherId}`);
		}
	});	
	
	dispatch.hook(`S_COLLECTION_PICKEND`, 2, (event) => {
		if (event.type != 3){
			logMessage(`Gathering interrupted!!`)
		}
		else{
			logMessage(`Gathering succeeded!`)
			if (currentQuota > 0){
				currentQuota--;
			}
		}
		if (currentQuota > 0){
			processQuest(cachedQuestData);
		}		
	});
	
	dispatch.hook(`S_SPAWN_WORKOBJECT`, 3, (event) => {
		workObjects.set(event.gameId, {
			gameId: event.gameId,
			workObjectId: event.id,
			loc: event.loc
		});
	});
	
	dispatch.hook(`S_PREPARE_DONE_WORKOBJECT`, "raw", (code, data) => {
		if (currentQuota > 0){ 
			currentQuota--;
			logMessage(`WorkObject processed. Remaining quota: ${currentQuota}`)
		}
		if(currentQuota > 0){
			processQuest(cachedQuestData);			
		}
	});
	
	dispatch.hook(`C_PREPARE_WORKOBJECT`, 1, (event) => {
		let workObj = workObjects.get(event.id);
		if (workObj){
			logMessage(`Preparing workObject id: ${workObj.workObjectId}`);
		}
	});
	
	dispatch.hook(`S_SPAWN_NPC`, 11, (event) => {
        npcs.set(event.gameId, {
			gameId: event.gameId,
            target: event.target,
            templateId : event.templateId,
            relation : event.relation,
            huntingZoneId : event.huntingZoneId,
            questInfo : event.questInfo,
            loc: event.loc,
            name: event.name
        });
    });
	
	dispatch.hook(`S_NPC_LOCATION`, 3, (event) => {
		let npc = npcs.get(event.gameId);
		if (currentTarget && event.gameId == currentTarget.gameId){
			currentTarget.loc = Object.assign({}, event.loc);
		}
		
		if (npc){
			npcs.set(npc.gameId, {
				gameId: npc.gameId,
				target: npc.target,
				templateId : npc.templateId,
				relation : npc.relation,
				huntingZoneId : npc.huntingZoneId,
				questInfo : npc.questInfo,
				loc: event.dest,
				name: npc.name
			});
		}
	});
	
	dispatch.hook(`C_PLAYER_LOCATION`, 5, (event) => {
		playerLocation = Object.assign({}, event.dest);
		playerW = event.w
	});
	
	dispatch.hook(`S_SPAWN_ME`, 3, (event) => {
		playerLocation = Object.assign({}, event.loc)
		playerW = event.w;
		changingChannel = false;
		interruptAttack = false;
		if (enabled && cachedQuestData != undefined && currentZone == cachedQuestData.zone){
			// Note: work objects don't spawn until **after** we load in.
			setTimeout(() => {				
				if (!changingChannel){
					processQuest(cachedQuestData);
				}
			}, DELAY_PROCESS_QUEST_AFTER_SPAWN);
		}
	});
	
	dispatch.hook('S_PLAY_MOVIE', 1, (event) => {
		dispatch.toServer('C_END_MOVIE', 1, {
			movie: event.movie,
			unk : 1 
		});
		return false
	});
	
	dispatch.hook(`S_DESPAWN_NPC`, 3, (event) => {
		npcs.delete(event.gameId);
	})
	
	let logQuest = false;
	command.add(`logquest`, () => {
		logQuest = !logQuest;
		logMessage(`Quest logging is now ${logQuest}`);
	})
	
	dispatch.hook(`S_QUEST_INFO`, 2, (event) => {
		if (logQuest){
			logMessage(`Current quest(${event.quests[0].id} ; ${event.quests[0].step})`, LOG_ALL);
		}
		
		// Dialog quest.
		let selectedQuest;		
		if (event.quests.length > 0 && event.quests[0].dialogs.length > 0){			
			// populate our custom quest data
			let quest = event.quests[0];	
			selectedQuest = Object.assign({}, event.quests[0].dialogs[0]);
			selectedQuest.type = QUEST_TYPE_DIALOG;
			selectedQuest.questId = quest.id;
			selectedQuest.step = quest.step;
		}
		else{
			selectedQuest = Object.assign({}, QUESTS_DATA.find(obj => obj.questId == event.quests[0].id && obj.step == event.quests[0].step));
			if (selectedQuest){
				currentQuota = selectedQuest.quota != undefined ? selectedQuest.quota : 1;				
			}
		}
		
		if (selectedQuest && TUTORIAL_ZONES.find(obj => obj.zone == selectedQuest.zone) != undefined){
			if (!cachedQuestData || cachedQuestData.questId != selectedQuest.questId || cachedQuestData.step != selectedQuest.step){
				cachedQuestData = selectedQuest;
				if (selectedQuest.zone == currentZone && !changingChannel){
					if (enabled){
						if (additionalQuestDelay > 0){
							setTimeout(processQuest, additionalQuestDelay, selectedQuest);
							additionalQuestDelay = 0;
						}
						else{
							processQuest(selectedQuest)
						}
					}
				}
				else{
					logMessage(`Incorrect zone or changing channel...`);
				}
			}
			else{
				logMessage(`Repeated quest data?`);
			}
		}
		else{
			//logMessage(`No quest data found for quest (${event.quests[0].id} ; ${event.quests[0].step})`, LOG_ALL);
		}
	});	
	
	dispatch.hook(`S_DIALOG`, 2, (event) => {
		//console.log(`S_DIALOG options: ${JSON.stringify(event.options, null, 4)}`)
		
		if (!enabled){
			return;
		}
		if (TUTORIAL_ZONES.find(obj => obj.zone == currentZone) != undefined){
			for (let dialogOptions of event.options){
				if (dialogOptions.type != 0 && dialogOptions.type != 12){ // 12 is pegasus
					setTimeout(() => {
							dispatch.toServer(`C_DIALOG`, 1, {
								id: event.id,
								index: dialogOptions.index, // usually 1.
								questReward: -1,
								unk: -1
							});
					}, DELAY_DIALOG_REPLY);
				}
				else if (dialogOptions.type == 12 && waitingPegasus){
					waitingPegasus = false;
					setTimeout(() => {
						dispatch.toServer(`C_DIALOG`, 1, {
							id: event.id,
							index: dialogOptions.index, // usually 1.
							questReward: -1,
							unk: -1
						});
						logMessage(`Initiating pegasus ride`)
						setTimeout(() => {
							dispatch.toServer(`C_RIDE_PEGASUS`, 1, {
								id: 599 // hardcode to velika. parse questData later if need be.
							})
						}, DELAY_START_PEGASUS);
						
					}, DELAY_DIALOG_REPLY);
				}
			}
		}		
	});
	
	dispatch.hook(`C_DIALOG_EVENT`, 1, (event) => {
		lastDialogEventId = event.unk1
	});
	
	function closeDialogEvent(){
		dispatch.toServer(`C_DIALOG_EVENT`, 1, {
			unk1: lastDialogEventId,
			unk2: 2,
			unk3: 0
		})
	}
	
	function processQuest(quest){
		clearTimeout(nextAttackCycle); // in case our kill counter is out of whack (e.g. relogging mid-quest).
		currentTargetList = [];		
		switch(quest.type){
			case QUEST_TYPE_DIALOG:						
				processQuestInfoDialog(quest);
				break;
			case QUEST_TYPE_WORKOBJECT:
				processWorkObjectQuest(quest);						
				break;
			case QUEST_TYPE_GATHER:
				processGatherQuest(quest);
				break;
			case QUEST_TYPE_USE_ITEM:
				processUseItemQuest(quest);
				break;
			case QUEST_TYPE_GOTO:
				processQuestGoTo(quest);
				break;
			case QUEST_TYPE_COMBAT_KILL:
				processQuestKillQuota(quest);
				break;
			case QUEST_TYPE_PEGASUS:
				processQuestPegasus(quest);
				break;
			default:
				logMessage(`??? No quest type found for ${quest.questId} : ${quest.step}???`);
				break;
		}
	}
	
	function processQuestPegasus(quest){
		let npcData = getNPCdata(903, 599);
		if (npcData == undefined){
			logMessage(`Orbellus (Pegasus) not found. Aborting`);
		}
		else{
			waitingPegasus = true;
			logMessage(`Orbellus (Pegasus) found; teleport and contact.`)
			teleport(npcData.loc);
			setTimeout(() => {
				dispatch.toServer(`C_NPC_CONTACT`, 2, {
					gameId : npcData.gameId
				});
			}, 1000);
		}
	}
	
	function processQuestGoTo(quest){
		closeDialogEvent();
		logMessage(`Preparing to teleport to next location!`);
		setTimeout(teleport, DELAY_TELEPORT_QUEST_LOCATION, quest.loc);
	}	
	
	function processQuestKillQuota(quest){
		let scanDelay = DELAY_TELEPORT_SCAN_ATTACK + (quest.extraActionDelay ? quest.extraActionDelay : 0);
		setTimeout(teleport, DELAY_TELEPORT_QUEST_LOCATION, quest.loc);
		setTimeout(scanForAttackTargets, scanDelay);
		logMessage(`Kill:`)
		for (let target of quest.targetList){
			logMessage(`-> ${target.quota} of ${target.targetId.name}`);
			currentTargetList.push(Object.assign({}, target));
		}
	}
	
	function scanForAttackTargets(){
		clearTimeout(nextAttackCycle); // Just in case? :thenk:
		for (let target of currentTargetList){
			if (target.quota > 0){
				logMessage(`Targetting enemy to kill: ${target.targetId.name}`);
				let npc = getNPCdata(target.targetId.templateId, target.targetId.huntingZoneId);
				if (npc){
					currentTarget = Object.assign({}, npc);
					interruptAttack = false;
					teleport(npc.loc);
					setTimeout(doGunner, DELAY_BEGIN_ATTACK);
				}
				else{
					logMessage(`Warning: no nearby ${target.targetId.name} detected.`)
				}
				break;
			}
		}
	}
		
	function processGatherQuest(quest){
		closeDialogEvent();
		let data;
		// Gatherables don't spawn until after we do.
		setTimeout(() => {
			for (let [gatherId, gatherable] of currentGatherables.entries()){
				if (gatherable.gatherId == quest.targetId){
					data = gatherable;
					break;
				}
			}
			if (data != undefined){			
				teleport(data.loc);
				setTimeout(() => {					
					dispatch.toServer(`C_COLLECTION_PICKSTART`, 2, {
						gameId : data.gameId
					});
				}, DELAY_START_GATHERING);
			}
			else{
				logMessage(`No gatherable found for the quest (${quest.questId}, ${quest.step}) for gatherable ${quest.targetId}`, LOG_ALL);				
			}			
		}, DELAY_PROCESS_GATHERING)
	}
	
	function processWorkObjectQuest(quest){
		closeDialogEvent();
		let data;
		// Some workObjects don't spawn until we trigger the quest :shrug:
		setTimeout(() => {
			for (let [workObjectId, workObject] of workObjects.entries()){
				if (workObject.workObjectId == quest.targetId){
					data = workObject;
					break;
				}
			}		
			if (data != undefined){
				teleport(data.loc);
				setTimeout(() => {
					dispatch.toServer(`C_PREPARE_WORKOBJECT`, 1, {
						id: data.gameId
					});
					workObjects.delete(data.gameId);
				}, DELAY_START_WORKOBJECT);
			}
			else{
				logMessage(`No workObject found for the quest (${quest.questId}, ${quest.step}) for workObject ${quest.targetId}`, LOG_ALL);
			}
		}, DELAY_PROCESS_WORKOBJECT)
	}
		
	function processQuestInfoDialog(quest){
		if (isFollowing){
			return;
		}		
		processContactDialog(quest);
	}
		
	function teleportToNPC(quest){
		let targetLoc = { x: quest.x, y: quest.y, z: quest.z }
		let npc = getNPCdata(quest.templateId, quest.huntingZoneId);
		if (npc){
			targetLoc = Object.assign({}, npc.loc)
		}
		teleport(targetLoc);		
	}
	
	function processContactDialog(quest){
		if (changingChannel){
			logMessage(`Changing channel in progress, abort dialog.`)
			return;
		}		
		let questData = QUESTS_DATA.find(obj => obj.questId == quest.questId && obj.step == quest.step);
		let contactDelay = (questData && questData.extraActionDelay) ? questData.extraActionDelay : 50;
		if (contactDelay > 50){
			logMessage(`Waiting ${contactDelay}ms before contacting NPC...`)
		}		
		setTimeout(teleportToNPC, DELAY_TELEPORT_TO_DIALOG + contactDelay, quest);	
		setTimeout(() => {			
			let npc = getNPCdata(quest.templateId, quest.huntingZoneId);
			if (npc != undefined){
				dispatch.toServer(`C_NPC_CONTACT`, 2, {
					gameId : npc.gameId
				});
			}
			if (questData){
				if (questData.type == QUEST_TYPE_DIALOG_ESCORT && !isFollowing){
					isFollowing = true;
					logMessage(`Following action triggered.`)
					setTimeout(() => {	
						logMessage(`Closing dialog event, will follow in 5 seconds.`)
						closeDialogEvent();				
						setTimeout(() => {
							isFollowing = false;
							logMessage(`Moving to target location...`);
							teleport(questData.loc);
						}, DELAY_FOLLOW_ESCORT);
					}, DELAY_FOLLOW_ESCORT);
				}
				// smh
				else if (questData.type == QUEST_TYPE_NEXT){
					logMessage(`Begin questline 2!`);
					setTimeout(start2, 2000);
				}
			}
		}, DELAY_DIALOG_CONTACT + contactDelay);
	}
	
	function processUseItemQuest(quest){
		closeDialogEvent();
		setTimeout(() => {
			dispatch.toServer('C_USE_ITEM', 3, {
				gameId,
				id: quest.targetId,
				dbid: 0,
				target: 0,
				amount: 1,
				dest: 0,
				loc: playerLocation,
				w: 0,
				unk1: 0,
				unk2: 0,
				unk3: 0,
				unk4: true
			});
		}, DELAY_USE_ITEM);
	}
	
	function changeChannel(targetChannel){
		if (targetChannel == undefined){
			logMessage(`Attempt to change to undefined channel; aborting!`)
			return;
		}
		dispatch.toServer('C_SELECT_CHANNEL', 1, {
			unk: 1,
			zone: currentZone,
			channel: (targetChannel - 1) // :shrug: don't ask why :zzz:
		});
	}
	
	function getNPCdata(templateId, huntingZoneId){
		for (let [npcId, data] of npcs.entries()) {
			if (data.templateId == templateId && data.huntingZoneId == huntingZoneId){
				return data;
			}
		}
		return undefined;
	}
	
	function teleport(newLoc, randomXY = 0) {
		isFollowing = false;
		if (newLoc == undefined || newLoc.x == undefined){
			logMessage(`Invalid teleport request!`);
			return;
		}
		
		let teleLoc = Object.assign({}, newLoc);
		teleLoc.z += 15;
		
		dispatch.toClient('S_INSTANT_MOVE', 3, {
			gameId: gameId,
			loc: teleLoc,
			w: 0
		});
	}
		
	function logMessage(message, logState = LOG_COMMAND_ONLY){
		switch(logState){
			case LOG_COMMAND_ONLY:
				command.message(message);
				break;
			case LOG_CONSOLE_ONLY:
				console.log(message);
				break;
			case LOG_ALL:
				command.message(message);
				console.log(message);
				break;
			default:
				console.log(message);
				break;
		}
	}
	
	function loopBigIntToString(obj) {
		Object.keys(obj).forEach(key => {
			if (obj[key] && typeof obj[key] === 'object') loopBigIntToString(obj[key]);
			else if (typeof obj[key] === "bigint") obj[key] = obj[key].toString();
		});
	}
}
