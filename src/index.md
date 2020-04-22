# LANCER Frequently Asked Questions

<!-- toc -->

## General Rules Questions

### Do half-damage effects stack? (e.g. Heavy Gunner, HyperDense Armor)
They do not stack. "Dealing half damage" is a binary state, similar to Resistance[^x].

[^x]: [Per Tom on Discord](https://discordapp.com/channels/426286410496999425/426288556902842368/700816834689105970)

### Does the Saladin's Paracausal Mod bypass half-damage effects?
It does not -- the halved damage from effects such as Heavy Gunner is not a *reduction* like Resistance is; it happens "before" step 1[^pg67] of damage calculations.

### How does Resistance to Burn work? Does it halve the end of turn damage *twice*?
It does not. Burn actually has **two components**: burn *damage* and *marked burn*[^pg67]. Resistance halves *damage*, so you will still *mark* the full amount of burn on your sheet.

For example, if you take 4 Burn and somehow have Resistance to it, you will take **2 burn damage**, but you will still mark **4 burn** on your sheet. If you then fail the end-of-turn Engineering check, you will take **half of your marked burn**, which would be **2**, unless you no longer have Resistance to the damage[^2].

[^pg67]: LANCER First Edition Core Rulebook, pg. 67
[^2]: Note that end-of-turn burn does not "remember its source", so resistance that depends on the origin of the attack such as Brace or the Tortuga's HyperDense Armor would not apply to it, even if it applied to the attack that caused it.