# Auto-Tutorial (Legacy)

By: Cattalol

This is an old (and currently outdated) Tera-Proxy / Tera-Toolbox **_QoL_** module used to progress a character through the Stepstone Isle quest line (e.g. Level 1 Tera Tutorial).

You (as the user of this content) are solely responsible for your own actions and any consequences that result from your actions.

_No support / updates will be provided for this module (the code is provided "as-is" for informational/educational/inspirational/what-have-you purposes only)._

## Proxy compatibility:
- Last tested on Patch 87(?) on [Tera Toolbox](https://github.com/tera-toolbox/tera-toolbox) back in late 2019.
- Currently on Patch 97(?), some ofthe packets used in this module are validated by the server's [integrity check](https://github.com/tera-proxy/tera-proxy/tree/master/node_modules/tera-data/integrity)
    - However, since Caali/Salty has locked down the usage of non-whitelisted opcodes, you will likely have to use [Tera-Proxy](https://github.com/tera-proxy) instead.	
- You will need to **_update any changed packet protocols and their associated hooks to current patch_**. This may include parsing additional packets that did not exist back in Patch 87!
- This module is **_NOT_** compatible with Skill-Prediction (PSP / NGSP / etc). Disable those modules when running this.

## Usage:
- Ever wanted to just go afk when levelling yet another alt (or fisher) through the tutorial quest line...?
- Ever wanted to just go afk when levelling your 100th alt (or fisher) through the tutorial quest line...?
- Now you can (once you update the script for current patch)!!
- The combat-handling portion of the module is for gunnos only. If you want to use another class, you must re-write the automatic combat handling yourself.
- Data last updated for Patch 87... monster and/or quest-line and/or NPC and/or gatherable IDs may no longer be accurate. You'll have to update that yourself if any have changed.

## Commands (in the toolbox/proxy channel):
### start1
- Begins the Glennock quest line.
### start2
- Begins the Anya quest line.

You can look up [the rest of the commands](https://github.com/CattaLol/auto-tutorial/blob/b36fb690c9f458a99f48eb314f5e5ae4455c2ca7/index.js#L214) yourself.
