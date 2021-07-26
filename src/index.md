# LANCER Rules FAQ & Errata

<center>[![GitHub](assets/github.png) Contribute on GitHub](https://github.com/aritsune/lancer-faq)</center>

<!-- contrib -->

<!-- toc -->

## Page 32, Integrated Mounts
### What does it mean when it says that the weapons in an integrated mount cannot be modified in any way?
You cannot apply a Mod (a system with the Mod tag) to integrated weapons and you cannot apply core bonuses such as Overpower Caliber (which requires you to choose a weapon) or Auto-stabilizing Hardpoints (which requires you to choose a mount) to integrated weapons either. However, blanket effects such as Neurolink Targeting or Siege Stabilizers (which apply to all weapons of a specific type) can apply to them. <wot:426288556902842368/773636612235591680>

## Page 34, Statistics
### I have a weapon with higher Range than my Sensors - how does that work?
Your Sensor range is completely irrelevant when it comes to making ranged attacks. They do not represent what your mech can see - they are used for determining range for Searching for Hidden enemies, tech attacks, and other things such as Drone deployment. 

## Page 35, Core Bonuses
### Core Bonuses Errata?
The text currently reads "These ranks can be in any combination – for example, you might have the rank I and rank II license for one mech and three different rank I licenses, equaling six in total." This should instead read "These ranks can be in any combination – for example, you might have the rank I, rank II, and rank III license for one mech and three different rank I licenses, equaling six in total." Each rank in a license counts once, regardless of whether it is rank I, rank II, or rank III of its respective license.

## Page 55, Get Focused
### Can I use the Get Focused downtime action to improve Triggers such as Assault or Apply Fists to Faces, or can it only be used to improve the new Triggers created using Get Focused?
The latter. Get Focused cannot be used to improve the ranks of Triggers that it was not used to create. <wot:426288556902842368/686780898636595205>

## Page 61, Types of Actions
### Can I attack with the same weapon or mount multiple times in a turn?
There is no rule specifically preventing you from using a weapon multiple times in the same turn, but the rule preventing you from taking the same action more than once per turn (such as Skirmish) and the fact that Barrage specifies two different weapons means that by default, you will not be able to attack with the same weapon more than once per turn. You cannot spend both of your default quick actions on Skirmish and Barrage cannot be used to pick the same weapon twice. 

However, free actions and reactions are explicit exceptions to the "No Duplicate Actions" rule, and so if you can Skirmish or otherwise attack with a weapon as a free action or reaction, you can use a weapon you have already used this turn. For example, if you Skirmish with a Heavy Machine Gun, you cannot Skirmish again with your other remaining quick action, but if you can somehow Skirmish as a free action (such as via Overcharge or the Everest's Initiative trait), you could use the Heavy Machine Gun again.

Additionally, if you have multiple copies of the same weapon, such as two Assault Rifles in different mounts, you can use both of them in a Barrage.

## Page 62, Splitting Up Movement
### If I choose to split up movement in a way that I move into an enemy's threat range, pause to attack them, and then continue my movement afterward, does that count as beginning a movement in their threat for the purpose of triggering Overwatch?
Yes.

## Page 62, Engagement
### When I lose my unused movement from becoming engaged, do I lose ALL my movement, even the ones I didn't use?
No, if you did part of a standard move to get into engagement, you lose the rest of it, but you can still boost if you didn't boost already to get out of engagement. <wot:426288556902842368/713498072336040008>

## Page 63, Flight
### Flight Errata?
The text currently reads "Flying characters that take structure damage or stress must succeed on an AGILITY save or begin falling." This should read "AGILITY check" instead of "AGILITY save".

## Page 64, Attacks
### When something says "an attack," does that mean a single roll or all rolls with a weapon in the case of area-of-effect/multi-target weapons?
This is a question that has frequently arisen due to ambiguity in the wording of things brought about by late developmental changes and editing. The official intent is that something that says "an attack" means an attack roll. There are two major exceptions to this. The first is that things which add bonus damage still do so to the entirety of a weapon's use, following the rules for halving bonus damage when targeting more than one character. An example of this is the Overpower Caliber core bonus. Some effects such as Nuclear Cavalier 2 or Hunter Lock will deal bonus damage only to specific targets or on particular rolls, but those will be explicitly spelled out as such. The other exception is triggered effects will occur once in response to a trigger. The Nelson's Skirmisher trait states that it triggers "after attacking," and is therefore triggered after every complete use of a weapon in a Skirmish or Barrage, as well as after anything else which constitutes an attack such as rams, improvised attacks, etc.

### Can tech attacks crit? / What happens when a tech attack crits?
Nothing. Only melee and ranged attacks can land a critical hit.

## Page 64, Range and Patterns
### When using an area-of-effect or multi-target attack, such as one with a Blast pattern, do I have to roll all attempts to hit first before then applying damage, or can I apply damage to targets in the middle of an attack? For example, can I attempt to destroy one target before moving on to try and hit other targets?

For area-of-effect and multi-target attacks, all attack rolls are made first, then damage is applied afterward. <wot:426288556902842368/809894653297164308>

## Page 65, Invisibility
### Does Invisibility work against tech attacks? Do Reliable weapons deal their damage on a miss when the miss is caused by Invisibility? Are area-of-effect weapons affected by Invisibility?
Invisibility in Lancer is fairly straightforward. All incoming attacks, whether they're ranged, melee, or tech, have a 50% chance to miss before the attack roll is made. This applies to area-of-effect attacks just as much as single target attacks. If an attack made against an Invisible target misses due to the 50% miss chance, that is a miss and it triggers any effects that may be activated on a miss, including Reliable damage.

## Page 66, Cover
### Can size 1/2 mechs shoot from around hard cover, or does it automatically block line of sight because of their size?
Size 1/2 mechs can fire from around cover while they're at a corner of hard cover, and be fired back at from that position in turn. This means that size 1 cover permits size 1/2 mechs to fire around it, such as those generated by the Zheng's Total Strength Suite I, since a size 1/2 mech token and will always be at a corner of a 1x1 piece of hard cover. Larger areas of cover, such as that comprising multiple sections, can block line of sight for size 1/2 mechs even if the cover itself is still only size 1, such as the Jericho Deployable Cover with its 1x2 footprint. <wot:426288556902842368/797261530743570432>

### Do mechs with the Guardian trait (which allows them to act as hard cover for adjacent allies) provide soft cover if an attack traces its path through them but the target is not adjacent? Can mechs with Guardian block line of sight to allied mechs?
Guardian only provides the benefit of hard cover to adjacent allies, and therefore it doesn't provide soft cover against attacks which trace a path through them towards non-adjacent targets. Whether a mech has Guardian or not, characters never obstruct line of sight for or against other characters regardless of size difference. <wot:441336855951048725/684190967133110369>

## Page 67, Harm
### Do half-damage effects stack? (e.g. Heavy Gunner, HyperDense Armor)
They do not stack. "Dealing half damage" is a binary state, similar to Resistance.

### Does the Saladin's Paracausal Mod bypass half-damage effects?
It does not -- the halved damage from effects such as Heavy Gunner is not a *reduction* like Resistance is; it happens "before" step 1 of damage calculations.

### How does Resistance to Burn work? Does it halve the end of turn damage *twice*?
It does not. Resistance to Burn only affects the initial damage, and not the end-of-turn ticks. If you take 4 Burn and resist it, you will take 2 Burn damage and mark 2 Burn stacks, but you will take 2 Burn damage if you fail the EOT check.

### If a character is hit by an attack and the damage is reduced to 0, such as by armor or a system like the Drake's Aegis Shield Generator, does that still count as "taking damage" for the purpose of triggers such as the Genghis' Auto-Cooler?
Yes, an instance of damage that is reduced to 0 damage such as by armor still counts as taking damage for those purposes. Immunity to damage overrides this as it specifically notes on page 68 under the Immunity section. <wot:426288556902842368/718463769826820143>

## Page 68, Immunity
### Do "can't be reduced" effects (such as Paracausal Mod) override Immunity?
No. Immunity is not a reduction.

## Page 69, Grapple
### What happens when you Grapple someone the same Size as you and try to move before the contested check that determines who counts as bigger occurs?
On a successful grapple against an opponent of the same size, the character who initiated the grapple immediately has control over it, meaning that the attacker can move their opponent assuming that they didn't lose all of their remaining movement due to becoming Engaged this turn or that they have some other source of movement they are allowed to take. At the start of the grappled target's next turn, they then have the opportunity to initiate a contested Hull check to take control of the grapple. <wot:426288556902842368/743578354019467314>

## Page 70, Skirmish
### When Skirmishing (or Barraging) in a way that grants bonus attacks with auxiliary weapons, such as with a Main/Aux mount, can I choose to attack with the bonus auxiliary attack first before the attack with the primary weapon?
Yes. When you make an attack with a Skirmish or Barrage that grants a bonus auxiliary weapon attack you can choose the order those weapons attack in. However, bonus auxiliary weapon attacks will still not deal bonus damage even if they come first. <wot:426288556902842368/678782825541140499>

### When Skirmishing (or Barraging) in a way that grants bonus attacks with auxiliary weapons, can the bonus auxiliary attack have a different target than the attack with the primary weapon?
Yes. <wot:426288556902842368/869250769520558130>

## Page 71, Barrage
### Can I Barrage using the same weapon twice?
No.

## Page 81, Overheating Table
### Overheating Table Errata?
The 2 Stress remaining entry under Meltdown should read "A reactor meltdown can be prevented by retrying the ENGINEERING check as a full action." <wot:441336855951048725/664175573966520340>

### When overheating, how exactly does the spillover heat work?
Any Heat in excess of your Heat Cap is applied to the next bar. For example, if your Heat Cap was 6, and you were at 5 Heat, taking 2 Heat would put you at 7/6, forcing you to take 1 Stress and make an overheating check, leaving you at 1 Heat out of 6 Heat Cap. Notably, you can safely stay at exactly your Heat Cap (in this case, taking 1 Heat and going to 6 Heat out of 6 Heat Cap will not cause you to overheat) and there is no way to overheat and roll over to exactly 0 Heat without some effect stating otherwise. <wot:760966283545673730/789297842228297748>

## Page 90, Ace
### Ace Errata?
Taking the quick action to spin up your thrusters should grant you the Supersonic reaction if you end your turn flying until the end of your next turn. <wot:426288556902842368/732468073612967968>

## Page 94, Executioner
### When I miss with an attack and use Executioner: No Escape, does that trigger Reliable? What about having to pay costs such as heat again? Are weapons with the Loading tag expended on the miss?
Missing with an attack that triggers No Escape (or Exemplar's Valiant Aid) will trigger Reliable, but do not incur additional costs or require reloading to make the rerolled attack. <wot:426288556902842368/708389666981806201>

## Page 96, Hacker
### Why does Hacker: Last Argument of Kings have a clause saying what happens when you overheat a target with it?
Despite the fact that Last Argument of Kings doesn't deal any Heat by default, there are some effects such as Hacker's Snow_Crash or Nuclear Cavalier's Aggressive Heat Bleed that could result in it dealing Heat. This clause is here to prevent you from losing out on Burn if you so happen to overheat a target with those extra Heat effects.

## Page 97, Hunter
### Can I use Hunter: Disdainful Blade to throw the same auxiliary melee weapon I used to hit a character with and trigger the ability in the first place?
Yes.

## Page 99, Leader
### Leader: Field Commander says you can expend a Leadership Die to gain +1 Accuracy on any action that directly follows from that order. What if that action involves more than one roll, such as Barraging?
Every roll in the action gets the additional Accuracy. This means that all the attack rolls in a Barrage that directly follows the given order gets Accuracy if you spend a Leadership die in that way. <wot:426288556902842368/775399535811231745> 

## Page 100, Siege Specialist
### Can you use the effect of Siege Specialist: Impact when attacking with a Cannon with Ordnance? Would the push from Impact trigger the clause in Ordnance that says you can't attack with an Ordnance weapon if you had already moved that turn?
You are allowed to use Impact with Cannons that have the Ordnance tag and it will not interfere with you firing the weapon. <wot:426288556902842368/753974191220457543> 

## Page 102, Tactician
### Do I get the Tactician: Solar Backdrop benefit for attacking at a higher elevation if my mech is a larger size than the target I'm shooting at?
No, Solar Backdrop doesn't care about relative mech size/height, only whether your position on the map is a higher elevation than the target you're shooting at. Measure from your feet, not from your head.

## Page 105, Loading
### Can I reload weapons with the Loading tag that haven't been fired to trigger effects that apply when reloading weapons?
No, a Loading weapon that hasn't been fully expended cannot be reloaded until it requires it.

## Page 105, Ordnance
### The Ordnance tag reads "This weapon can only be fired before the user moves or takes any other actions on their turn." Does this mean you cannot use Ordnance weapons outside of your turn, such as with Heavy Gunner?
This is a slight misprint. Ordnance should read "This weapon can only be fired before the user moves or takes any other actions on a turn." Ordnance weapons can be used outside of your turn with various reactions (except for Overwatch which is explicitly disallowed) as long as you abide by the tag's other restrictions. <wot:426288556902842368/683147010723151943>

## Page 105, Smart
### Do I add my Tech Attack bonus to attacks made with Smart weapons?
No. All Smart changes is the stat you *target* -- E-Defense rather than Evasion. You still use your Grit bonus when rolling.

## Page 105, Drone
### Do Drones count as characters?
Yes, Drones are characters that are allied to their users.

### Can Drones hold control zones during sitreps?
It depends. By strictly rules as written, drones count as allied characters, and so they would count for holding control zones. However, this is not intended to work this way by Word of Tom and will likely be changed in future errata to make it so that drones cannot hold objectives. <wot:428263462809108480/746094343919501362> 

## Page 110, Stealth Hardsuit
### Stealth Hardsuit Errata?
The Stealth Hardsuit's description should read "They cease to be Invisible if they take any damage or take any actions other than Hide or Boost." <wot:426288556902842368/736267954001543239>

## Page 121, Stable Structure
### Stable Structure Errata?
Stable Structure should read "You gain +1 Accuracy on saves to avoid Prone or forced movement (Knockback, Push, Pull, etc).<wot:441336855951048725/710963654094225530>

## Page 120, Pattern-A Smoke Charges, Pattern-B HEX Charges
### What kind of action is it to use the Pattern-A Smoke Charges and the Pattern-B HEX Charges? No action is listed.
By default, systems with the Grenade tag or the Mine tag take a quick action to use, which can be found in their tag descriptions on page 106. This applies to all Grenades and Mines, unless the specific system says otherwise.

## Page 127, IPS-N Core Bonuses
### Does the Gyges Frame core bonus give +1 Threat to integrated melee weapons, as those are listed as unable to be modified?
Yes, Gyges Frame does apply its effect to Integrated weapons as it is a blanket effect and not specifically applied to the weapon or mount. <wot:426288556902842368/773636612235591680>

## Page 130, IPS-N Blackbeard
### When I critically hit with a Chain Axe, does the Shredded effect apply before or after the weapon's damage?
You can choose to apply on hit or on crit effects in whatever order you choose, including before damage from the attack in question. So when you critically hit with a Chain Axe you can choose to apply the Shredded condition to the target before dealing damage, preventing them from benefitting from armor or resistance.

### When a character with Synthetic Muscle Netting is engaged in a grapple with an opponent of equal size, they count as one size larger (i.e. a size 1 mech with SMN grappling another size 1 mech will count as size 2). Does this mean that the character with SMN equipped counts as size 2 for purposes of being rammed, such as if their opponent wanted to ram them to break the grapple?
No, Synthetic Muscle Netting doesn't make you count as a bigger size for the purpose of being rammed, only for the purposes of ramming other targets.<wot:426288556902842368/712046292934590474>

### Does the Blackbeard's Reinforced Cabling count as a flight or propulsion system for the purposes of zero-gravity maneuvering?
No, it doesn't. Depending on the sort of battlefield environment you're fighting in the GM may decide to allow it contextually, but as a general rule the Reinforced Cabling system won't let you maneuver freely in zero-gravity simply on its own.<wot:426288556902842368/710261251430809670>

### When I activate the SEKHMET Protocol, do I continue to take turns as normal or do I hand over control to the GM?
SEKHMET Protocol doesn’t hand over control of your mech to the GM as if your NHP was cascading, nor does it hand over control of your mech to the NHP as per the rules on page 107. Narratively SEKHMET may be in “control” of things while the protocol is active but you, the player, are still playing, it’s just that you have a series of restrictions and conditions on what actions and maneuvers you can try to take. You still control the mech, you may continue to use talents as per the protocol's description, and can make decisions within those restrictions as you like. You can also hand control over to Sekhmet using the normal rules for NHPs, and Sekhmet can make use of its berserker protocol after control has been formally handed over to it even without a pilot in the cockpit, but it abides by all normal rules and restrictions of NHPs controlling mechs when doing so, such as no longer being unable to use pilot talents etc.

## Page 132, IPS-N Drake
### Does the Drake's Guardian trait mean it provides soft cover against attacks that would be obstructed by it even if an ally isn't adjacent to it, as per the guidelines for Checking For Cover on page 66?
No. Any mech with the Guardian trait (and the Barbarossa's Colossus trait) only provide cover to allies who are adjacent to them, they do not act as actual pieces of environmental hard cover for the purpose of the Checking For Cover guidelines.<wot:441336855951048725/684190967133110369>

## Page 140, IPS-N Nelson
### How does the Skirmisher trait interact with weapons that make multiple attack rolls, such as weapons with an area-of-effect?
The Nelson's Skirmisher trait triggers once per overall attack with a weapon, regardless of how many attack rolls it may have, so an attack with an area-of-effect weapon will still trigger the trait and grant you movement only once. It can however, still trigger multiple times on the same Skirmish or Barrage, such as if you Skirmish with a Main weapon and an Auxiliary weapon in the Nelson's Main/Aux mount.

## Page 144, IPS-N Raleigh
### If at the end of my turn I reload my weapons due to the Full Metal Jacket trait, can I then use that reload as a trigger to fire the M35 Mjolnir as a free action even though the FMJ reload is at the end of my turn?
Yes.

## Page 148, IPS-N Tortuga
### If I use Throughbolt Rounds on a weapon that has a Burst range/AoE type, such as the Bristlecrown Flechette Launcher, does the Burst retain the size it would have if measured from the mech or does it measure its size from the endpoint of the Throughbolt Round's line?
The latter. Bursts always measure their size from the targeted point. If a Burst is centered on a mech then you use that as the point of origin, but if launched away from the mech such as with Throughbolt Rounds the Burst will use the end of the line as its center point instead.

## Page 158, SSC Core Bonuses
### Does the Neurolink Targeting core bonus give +3 range to Integrated ranged weapons such as the Raleigh's M35 Mjolnir, as those are listed as being unable to be modified?
Yes, Neurolink Targeting does apply its effect to Integrated weapons as it is a blanket effect and not specifically applied to the weapon or mount. <wot:426288556902842368/773636612235591680>

## Page 160, SSC Black Witch
### Magnetic Cannon Errata?
The Magnetic Cannon's effect should read "On Attack" instead of "On Hit"

## Page 168, SSC Dusk Wing
### If I position two Hall of Mirrors holograms to both hit the same target, then teleport to a hologram to detonate all of them at once, does this hit that target twice?
No. This is treated as a single effect, just one with a custom area-of-effect that consists of multiple burst 1 areas. The target only takes 1d6 damage (or half, if they make their save). <wot:441336855951048725/722946911656607784>

(This only applies to the teleportation action. Hostile characters can be affected by multiple Hall of Mirrors holograms if they move through or move adjacent to multiple holograms.)

### Neurospike Errata?
Shrike Code should read "they first take 2 heat whenever they make an attack roll." as opposed to triggering whenever they attack, meaning that attacks against multiple targets will trigger the penalty multiple times.<wot:426288556902842368/738783942014009417>

## Page 176, SSC Monarch
### If I position the two Blast areas of a Pinaka Missiles attack so that they both hit a size 2 or size 3 target without overlapping, does this hit that target twice?
No. The Pinaka Missiles are still treated as a single attack, just one with a custom area-of-effect that consists of two Blast areas. Even if you place both Blasts in a way that they could hit a single target without overlapping, you still only roll to hit that target once.

## Page 192, HORUS Balor
### If the Balor's Regeneration trait is disabled from taking stress or structure damage, when it reactivates at the end of the next turn do you then also regenerate HP at the end of that turn as well?
No, when the Regeneration trait is disabled you do not regain any HP at the end of your next turn, even though both reactivating the trait and regaining HP happen "at the end of your next turn." The trait simply reactivates. The next opportunity you'll have to regain HP with the Regeneration trait will be end of the turn after that.

## Page 196, HORUS Goblin
### Does the Autopod count as an attack and/or a hit for the purpose of things that trigger off attacks or hits, such as the Stormbringer talent?
Yes, the Autopod's Autonomous Assault reaction is considered an attack which automatically hits.

## Page 210, HORUS Manticore
### Is there any way at all I can activate CASTIGATE THE ENEMIES OF THE GODHEAD without being physically present in the mech itself at the time of detonation? A subaltern with a copy of my neural pattern? A clone? A brick on the accelerator? My long lost twin sibling, who I don't like very much? A service animal? Anything?
No.

## Page 218, HORUS Pegasus
### What does ¿%:?EXTR!UDE GUN actually do?
GUN: GUN

## Page 226, HA Barbarossa
### If I use a system like the Flak Launcher which states targets "can no longer fly" in a zero-gravity environment where everyone is assumed to be flying at all times, does that prevent them from moving at all?
No.

### If I fire the Siege Cannon in Siege Mode, can I switch to Direct Fire mode and continue attacking without reloading it first since only Siege Mode has the Loading tag?
No, once a weapon has been used in a way that requires reloading in needs to be reloaded before it can be attacked with again in any mode or configuration it may have.

## Page 230, HA Genghis
### When the Plasma Thrower creates flames in free spaces, to characters take 1d6 damage for each space of flames they're pushed into, or does the 1d6 damage happen only once per round?
The 1d6 damage from the flames only happens once per round. <wot:426288556902842368/718463769826820143>

## Page 234, HA Iskander
### When the Iskander uses its Mine Deployers trait, do these additional deployed mines also consume charges from the system being used?
Yes.

### Is the Gravity Gun affected by Invisibility?
No. The Gravity Gun's use is, technically speaking, an attack. If your mech is unable to make attacks for some reason, such as being Jammed, it cannot use the Gravity Gun. But the actual effect of the Gravity Gun when you attack with it is one that has no associated to hit roll of any sort, functioning instead more like a grenade or mine, and so there's no way for it to "miss" like a regular attack would, even if the target is Invisible. This also means that the Gravity Gun does not benefit from anything that would trigger on hit or on crit since it can do neither of those things.

### Can the Repulser Field set off mines that you have deployed this turn that have not armed yet?
No, the Repulser Field will not cause mines that have not yet armed to detonate. <wot:426288556902842368/799788877354369057>

## Page 241, HA Napoleon
### When the Napoleon's Trueblack Aegis is active, can it use free action attacks such as those granted by the UNCLE-Class Comp/Con or Autoguns?

No, when the Trueblack Aegis is active, the Napoleon should be unable to use free action abilities like that to violate its action restrictions. Free actions which allow it to perform actions it's explicitly capable of performing while the Aegis is active are permitted, such as any free action Grapples or Rams it may proc from sources such as Titanomachy Mesh, but otherwise it should be assumed that free actions which attempt to get around the action restrictions of the Trueblack Aegis are disallowed. <wot:426288556902842368/851931696454303744>

### If I create a Blinkshield, can I create another Blinkshield within it before the first one expires?
The Blinkshield can't be crossed with any effect, and that includes another Blinkshield. If you attempt to create a Blinkshield within a Blinkshield and any part of the two shields overlap or intersect, you cannot do so as it would violate the clause that states that no effect can cross the Blinkshield. 

## Page 243, HA Saladin
### How does NOAH's Diluvian Ark interact with attacks that target multiple characters?
When used in response to an attack that targets multiple characters, if it successfully activates, the reaction granted by NOAH's Diluvian Ark will cause attack rolls made against you and your adjacent allies to automatically miss, but it won't have any effect on attack rolls made against characters that are within the attack's area of effect that are not adjacent to you.

Additionally, the final effect of Diluvian Ark that deals damage when ranged attacks fail to hit you or adjacent allies will trigger once per attack roll, regardless of whether or not the reaction was taken.

## Page 246, HA Sherman
### Can I repeatedly Stabilize outside of combat to add charges to the ZF4 Solidcore?
No. Strictly speaking, combat actions such as Stabilize don't really "exist" outside of combat. When resting or during downtime the Stabilize action isn't something you take, you have other options for repairing your mech available to you, the same way that if you were looking to use your mech to shoot at a guard tower during a narrative scene you wouldn't declare "I use a Skirmish," you would simply state your intent to shoot the tower.

## Long Rim Page 53, HORUS Lich
### Chronostutter Errata?
Chronostutter's text currently reads "The character taking the action is pushed up to 3 spaces". 

This should instead read *"the target of the action* is pushed up to 3 spaces". <wot:426288556902842368/741749908448477281>

## Long Rim Page 59, HA Sunzi
### Blink Charges Errata?
The Warp Grenade effect of Blink Charges currently reads "choose any character within the affected area".
This should instead read "choose any characters within the affected area" to make it clear that it can affect multiple targets. <wot:441336855951048725/727938103209361478>

## Multi-license Interactions
### Does the Tortuga's Sentinel trait give Accuracy to the contested attack roll from Stasis Bolt?
Yes.<wot:426288556902842368/703379534715682816>

## NPC General Rules
## Page 280, NPC Actions
### Can NPCs Stabilize? Can NPCs Invade? Can NPCs Brace? Can NPCs Overcharge?
NPCs can Stabilize, but it only reloads weapons and ends Exposed. NPCs have their own version of a default Invade Quick Tech that uses Systems as a bonus to the attack roll and only deals 2 Heat and Impaired until the end of the target's next turn on hit. NPCs cannot Brace or Overcharge by default unless some other feature granted to them allows for it. Further information can be found in the list of actions NPCs can take and how they different from the corresponding PC actions, which can be found on page 280.

### Can NPCs do the same Tech Attack twice in one turn?
The Quick Tech and Full Tech actions differ slightly for NPCs than for PCs. Notably, unlike PCs, the NPC Full Tech option allows for one Full Tech option or two different Quick Tech options, where as a PC is allowed to take the same Quick Tech option twice when they use Full Tech. However, NPCs do not use the same Invasion framework as players: Each Quick Tech option given to them is its own unique thing. This means that, for example, a Witch is allowed to use Full Tech to use Tear Down and Blind in the same turn, where as 2 Tear Down Quick Techs would not be possible, barring the usual Free Action exceptions.

## Page 281, NPC Damage and Heat
### What happens when an NPC runs out of HP? How does Structure work for NPCs?
By default, NPCs have only one Structure and are automatically destroyed without a Structure Damage check when they reach 0 HP.
However, this may change depending on Template.

If an NPC has any templates that grant them more than 1 Structure, such as the Veteran or Ultra templates, they follow the standard rules for Structure Damage and roll on the Structure Damage table like a PC would. Like usual, if they run out of Structure entirely, they are automatically destroyed. 

### What happens when an NPC overheats? How does Stress work for NPCs?
By default, NPCs only have one Stress and become Exposed indefinitely when they exceed their Heat Cap instead of making an Overheating check. They remain at 1 remaining Stress and are Exposed until they take the Stabilize action, which clears their Heat and ends the Exposed Status.
However, this may change depending on Template.

If an NPC has any templates that grant them more than 1 Stress, such as the Veteran or Ultra templates, they follow the standard rules for Overheating and roll on the Overheating table like a PC would. Like usual, if they run out of Stress entirely, they will suffer a reactor meltdown at the end of their next turn.

If an NPC has the Grunt template, any Heat from an external source will automatically destroy them. This does not cause a reactor meltdown, they are just destroyed. Self-inflicted Heat works like it would for a normal NPC.

If an NPC has no Heat Cap at all, they take Heat as Energy Damage instead. <wot:426288556902842368/869278907692626001>

## NPC Classes
## Page 288, Archer NPC
### The Archer's Covering Fire optional system doesn't list a duration. How long does it last?
The area created by Covering Fire, and the ability for the Archer to use the associated Got Your Back reaction, should last until the end of the Archer's next turn after it uses this ability.

## Page 294, Bombard NPC
### What counts as a target for the Bombard's Cluster Munitions?
Only characters (which includes Drones) should trigger the additional damage from Cluster Munitions. <wot:426288556902842368/864163574712500234>

### Is the Bombard's Cluster Munitions Bonus Damage?
The Bombard's Cluster Munitions are explicitly not Bonus Damage, as it is not labeled Bonus Damage. As it only comes up in situations in which any Bonus Damage would be halved, this wording allows you to avoid having to do the extra math of halving the damage it adds, as it would always need to be halved otherwise. 

## Page 307, Priest NPC
### The Priest's Sanctuary optional ability doesn't seem to list a duration for how long it lasts? Does it last indefinitely, or does it expire at a certain point?
The Sanctuary effect should last until the end of the Priest's next turn. <wot:426288556902842368/859410683573043201>

## Page 315, Sentinel NPC
### The Sentinel's Rapid Response optional system is formatted differently from the Archer's version. Is this intentional?
No, the two should be identical. Use the Archer's version for both.

## Page 317, Sniper NPC
### The rules text for the Moving Target reaction ends with "If the rifle isn't". What is it supposed to say?
This is a typo; it should say "If the rifle isn’t loaded, the Sniper instead reloads it."
