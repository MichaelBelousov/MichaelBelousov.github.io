import React from 'react'
import styles from './3d.module.scss'
import Layout from '../components/layout'
import hand_magic_orb from '../images/hand_magic_orb.png'
import revolver from '../images/revolver.png'
import bad_face from '../images/bad_face.png'
import cubes_mess from '../images/cubes_mess.png'
import dirty_hog from '../images/dirty_hog.jpeg'
import bad_rocks from '../images/generated_bad_rocks.png'
import nebula from '../images/generated_nebula.png'
import gold_hog from '../images/gold_hog.png'
import magnum_back from '../images/magnum_back.png'
import mongoose from '../images/mongoose.png'
import turret_wf from '../images/turret_wireframe.png'
import undersuit_hand_greeble from '../images/undersuit_hand_greeble.png'
import male_face_sculpt from '../images/male_face_sculpt.png'

const ClickableImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <a href={props.src}>
      <img alt="no alt provided" {...props} />
    </a>
  )
}

const ThreeD = () => {
  return (
    <Layout pageTitle="3D">
      <p>
        I always thought I would end up doing art before I learned to love
        programming. But, I don't have the innate talent that an
        industry-capable artist has. Perhaps dedicated practice that I'm yet to
        undertake could bring me there. But programming has always attracted me
        by feeling less redundant. With art, sometimes you get stuck doing
        something a few times in a few places. Especially if you're using an
        organic medium (think pencil). If you incorporate programming, you
        aren't just making art. You're meta-making the art. You're
        parametrically defining the art, making the tools to make, and remake
        the art.
      </p>

      <p>
        A couple of decades ago, my dad donated $20 to help make{' '}
        <a href="https://blender.org">Blender</a> free and open source. I don't
        exactly remember what I was talking about with art or what, but, he had
        the foresight to show me Blender. I didn't figure it out quickly. I was
        young (maybe 11), and confused. I never figured out to use it
        comfortably when I was that young. I liked the concept, but didn't seek
        out any tutorials. In my several first attempts, I was still just moving
        vertices around like an idiot. My dad saw what I was doing and showed me
        a video of someone else using Blender, combining tools to do interesting
        things. The realization that I could twist and drive tools with each
        other, and just think outside the box led me to try new things, watch
        tutorials, and eventually truly learn Blender.
      </p>

      <p>
        Soon my dad would pejoratively call my time blendering: "polygon
        twiddling", He probably wanted me experimenting with programming, but
        his attempts to teach me at a young age didn't pan out. It's hard to
        describe, but I had some weird psychological difficulty learning from
        him specifically at that age, a strange quirk of my perception of our
        parental relationship, I guess. Thankfully, once I taught myself the
        fundamentals of programming, that disappeared. That was in my junior
        year of high school, I reintroduced myself to programming again. One of
        my first real-life use cases was scripting menial tasks in Blender with
        Python. My dad ended up helping me with that too.
      </p>

      <p>
        Nowadays I'm not really sure how much of me is programmer and how much
        of me is artist. I know I have friends that would definitely pigeon hole
        me, but I enjoy both and often find ways to combine them. Art always
        seems to lead me to program and programming seems to inspire me to art.
      </p>

      <p>
        Anyway here's a small collection of things I've made, they aren't
        necessarily finished. They are mostly made with Blender, but I also use
        Unreal Engine, Substance suite, Krita, GIMP, PhotoShop, and more. A few
        have contributing authors (feel free to ask). Several could be
        substantially improved, but I like them anyway. I probably ought to
        spend some time digging through other stuff to put here too.
      </p>

      <div className={styles.container}>
        <ClickableImage src={male_face_sculpt} alt="male face sculpt" />
        <ClickableImage src={hand_magic_orb} alt="hand_magic_orb" />
        <ClickableImage src={revolver} alt="revolver" />
        <ClickableImage src={bad_face} alt="bad_face" />
        <ClickableImage src={cubes_mess} alt="cubes_mess" />
        <ClickableImage src={dirty_hog} alt="dirty_hog" />
        <ClickableImage src={bad_rocks} alt="generated_bad_rocks" />
        <ClickableImage src={nebula} alt="generated_nebula" />
        <ClickableImage src={gold_hog} alt="gold_hog" />
        <ClickableImage src={magnum_back} alt="magnum_back" />
        <ClickableImage src={mongoose} alt="mongoose" />
        <ClickableImage src={turret_wf} alt="turret_wireframe" />
        <ClickableImage
          src={undersuit_hand_greeble}
          alt="undersuit_hand_greeble"
        />
      </div>
    </Layout>
  )
}

export default ThreeD
