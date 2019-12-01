import React from 'react';
import styles from './ThreeDPage.module.scss';

import badFace from '../images/bad_face.png';
import bubbleShield from '../images/bubble_shield.gif';
import cubesMess from '../images/cubes_mess.png';
import dirtyHog from '../images/dirty_hog.jpeg';
import fire from '../images/fire.gif';
import fireDot from '../images/fire_dot.gif';
import generatedBadRocks from '../images/generated_bad_rocks.png';
import generatedNebula from '../images/generated_nebula.png';
import goldHog from '../images/gold_hog.png';
import magnumBack from '../images/magnum_back.png';
import mongoose from '../images/mongoose.png';
import parametricArmorWear from '../images/parametric_armor_wear.gif';
import revolver from '../images/revolver.png';
import turretWireframe from '../images/turret_wireframe.png';
import undersuitHandGreeble from '../images/undersuit_hand_greeble.png';

const ClickableImage = (props: React.HTMLProps<HTMLImageElement>) => {
  return (
    <a href={props.src}>
      <img alt="no alt provided" {...(props as any)} />
    </a>
  );
};

const ThreeDPage = () => {
  return (
    <div>
      <p>
      I always thought I would end up doing art before I learned
      to love programming. But, I don't have the innate talent that
      an industry-capable artist has. Perhaps dedicated practice that
      I'm yet to undertake could bring me there. But programming is
      much faster. You aren't just making the art. You're meta-making
      the art. You're parametrically defining the art, making the engine
      to make, and remake the art. 
      </p>

      <p>
      A couple of decades ago, my dad donated $20 to help
      make <a href="https://blender.org">Blender</a> free and open-source.
      When I wanted to do digital art, he had the foresight to show it to
      me. I didn't keep to it for long, being young (maybe 11), and unaware
      of how to use the advanced tools. I liked the concept, but didn't seek
      out any tutorials. Later, when I returned to it, I was just moving
      vertices around like an idiot. My dad saw what I was doing and again
      showed me a video of someone else using Blender, combining tools to
      do interesting things. The realization that I could twist and drive
      tools with each other, and think outside the box led me to try new
      things, watch tutorials and eventually truly learn Blender.
      </p>

      <p>
      Soon my dad would call my time blendering polygon twiddling,
      pejoratively.  He probably wanted me programming, but he failed to
      teach me a couple
      of times prior. I don't think we made a good teacher/pupil pair. We
      make a good pair now, after I taught myself the fundamentals. I
      introduced myself to programming much later, one of my first experiences
      being Python scripting in Blender to do mechanical things faster.
      </p>

      <p>
      Now I'm not really sure which I am first. I seem to program more, and
      program things other than art. But when I do art, it's often driven by
      programming, I'm not sure what the intersection is. Maybe I just ought
      to write more.
      </p>

      <p>
      Anyway here's a small collection of things I've made, they aren't
      necessarily finished. Most were mostly made with Blender, but I
      also used Unreal Engine, Substance, Krita, and more.
      A few have contributing authors (feel free to ask).
      Several could be substantially improved, but I like them anyway.
      </p>

      <div className={styles.container}>
        <ClickableImage src={badFace} alt="badFace" />
        <ClickableImage src={bubbleShield} alt="bubbleShield" />
        <ClickableImage src={cubesMess} alt={cubesMess} />
        <ClickableImage src={dirtyHog} alt="dirtyHog" />
        <ClickableImage src={fire} alt="fire" />
        <ClickableImage src={fireDot} alt="fireDot" />
        <ClickableImage src={generatedBadRocks} alt="generatedBadRocks" />
        <ClickableImage src={generatedNebula} alt="generatedNebula" />
        <ClickableImage src={goldHog} alt="goldHog" />
        <ClickableImage src={magnumBack} alt="magnumBack" />
        <ClickableImage src={mongoose} alt="mongoose" />
        <ClickableImage src={parametricArmorWear} alt="parametricArmorWear" />
        <ClickableImage src={revolver} alt="revolver" />
        <ClickableImage src={turretWireframe} alt="turretWireframe" />
        <ClickableImage src={undersuitHandGreeble} alt="undersuitHandGreeble" />
      </div>
    </div>
  );
};

export default ThreeDPage;
