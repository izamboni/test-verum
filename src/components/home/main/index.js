import './styles.css';
import Box from './box';

import {madd, neve, ives, seren, derok, heartDescription} from '../../../resources/campaigs/HeartOfTyre';
import {ahst, eustace, moe, raost, toot, shadowDescription} from '../../../resources/campaigs/ShadowOfTyre';
import {bela, braktor, gruff, hackne, ozzie, soulDescription} from '../../../resources/campaigs/SoulOfTyre';
import {pipe, guy, huckleberry, ikkar, scrumpo, crownsDescription} from '../../../resources/campaigs/ShatteredCrowns';
import {arcidamus, nox, koordin, mirage, zacky, strangeDescription} from '../../../resources/campaigs/StrangeRoads';
import {angorn, flamewrath, nidhogg, raber, vim, wisp, veilDescription} from '../../../resources/campaigs/TearingVeil';
import {madeleine, revlis, terryn, umi, vaeri, zara, steelDescription} from '../../../resources/campaigs/SteelAndSilence';
import {bryan, fear, hash, lilu, dahc, remag, bondsDescription} from '../../../resources/campaigs/BrokenBonds';

import heart from '../../../resources/Banners/heart.jpg';
import shadow from '../../../resources/Banners/shadow.jpg';
import soul from '../../../resources/Banners/soul.jpg';
import crowns from '../../../resources/Banners/crowns.jpg';
import strange from '../../../resources/Banners/strange.jpg';
import tearing from '../../../resources/Banners/tearing.jpg';
import deaths from '../../../resources/Banners/deaths.jpg';
import bonds from '../../../resources/Banners/bonds.jpg';


function Main() {
    return (
        <div className="main">
            <Box campaign='Heart of Tyre' banner={heart} members={[madd, neve, seren, ives, derok]} description={heartDescription} />
            <Box campaign='Shadow of Tyre' banner={shadow} members={[moe, toot, ahst, raost, eustace]} description={shadowDescription} />
            <Box campaign='Soul of Tyre' banner={soul} members={[gruff, bela, ozzie, hackne, braktor]} description={soulDescription} />
            <Box campaign='Shattered Crowns' banner={crowns} members={[huckleberry, pipe, ikkar, guy, scrumpo]} description={crownsDescription} />
            <Box campaign='Strange Roads' banner={strange} members={[mirage, nox, zacky, arcidamus, koordin]} description={strangeDescription} />
            <Box campaign='Tearing Veil' banner={tearing} members={[raber, wisp, flamewrath, vim, nidhogg, angorn]} description={veilDescription} />
            <Box campaign='Death and Debts' banner={deaths} members={[zara, terryn, madeleine, umi, revlis, vaeri]} description={steelDescription} />
            <Box campaign='Broken Bonds' banner={bonds} members={[bryan, fear, hash, dahc, remag, lilu]} description={bondsDescription} />

        </div>
    );
}

export default Main;