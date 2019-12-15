import React from 'react';
import styles from './3d.module.scss';
import Layout from '../components/layout';


const ClickableImage = (props: React.HTMLProps<HTMLImageElement>) => {
  return (
    <a href={props.src}>
      <img alt="no alt provided" {...(props as any)} />
    </a>
  );
};

const ThreeD = () => {
  return (
    <Layout pageTitle="3D">
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
      me. I didn't keep to it for long, being young (maybe 11), and stupid
      I never figured out to use it comfortably. I liked the concept, but didn't seek
      out any tutorials. Later, when I returned to it, I was still just moving
      vertices around like an idiot. My dad saw what I was doing and
      showed me a video of someone else using Blender, combining tools to
      do interesting things (it was actually the subdiv workflow).
      The realization that I could twist and drive tools with each other,
      really just think outside the box led me to try new
      things, watch tutorials, and eventually truly learn Blender.
      </p>

      <p>
      Soon my dad would pejoratively call my time blendering: "polygon twiddling",
      He probably wanted me experimenting with programming, but he failed to teach me a
      couple of times prior. I don't think we made a good teacher/pupil pair at the time.
      We make a good pair now, after I taught myself the fundamentals. I
      reintroduced myself to programming much later in my youth, one of my first
      experiences being Python scripting in Blender to do mechanical things faster. Which
      my dad ended up helping me with that too.
      </p>

      <p>
      Now I'm not really sure what percent I am programmer, and what proportion artist.
      I'd give it 60-60. I seem to program more, and program things other than art. But when I
      do art, it's often driven by programming, I'm not sure what the intersection is.
      Maybe I just ought to write more.
      </p>

      <p>
      Anyway here's a small collection of things I've made, they aren't
      necessarily finished. Most were mostly made with Blender, but I
      also used Unreal Engine, Substance, Krita, and more.
      A few have contributing authors (feel free to ask).
      Several could be substantially improved, but I like them anyway.
      </p>

      <div className={styles.container}>
        <ClickableImage src="/images/bad_face.png" alt="bad_face" />
        <ClickableImage src="/images/bubble_shield.gif" alt="bubble_shield" />
        <ClickableImage src="/images/cubes_mess.png" alt="cubes_mess" />
        <ClickableImage src="/images/dirty_hog.jpeg" alt="dirty_hog" />
        <ClickableImage src="/images/fire.gif" alt="fire" />
        <ClickableImage src="/images/fire_dot.gif" alt="fire_dot" />
        <ClickableImage src="/images/generated_bad_rocks.png" alt="bad_rocks" />
        <ClickableImage src="/images/generated_nebula.png" alt="nebula" />
        <ClickableImage src="/images/gold_hog.png" alt="gold_hog" />
        <ClickableImage src="/images/magnum_back.png" alt="magnum_back" />
        <ClickableImage src="/images/mongoose.png" alt="mongoose" />
        <ClickableImage src="/images/parametric_armor_wear.gif" alt="parametric_armor_wear" />
        <ClickableImage src="/images/revolver.png" alt="revolver" />
        <ClickableImage src="/images/turret_wireframe.png" alt="turret_wf" />
        <ClickableImage src="/images/undersuit_hand_greeble.png" alt="undersuit_hand_greeble" />
      </div>
    </Layout>
  );
};

export default ThreeD;
