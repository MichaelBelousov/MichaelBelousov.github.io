import React from "react"
import styles from "./3d.module.scss"
import Layout from "../components/layout"

const ClickableImage = (props: React.HTMLProps<HTMLImageElement>) => {
  return (
    <a href={props.src}>
      <img alt="no alt provided" {...(props as any)} />
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
        A couple of decades ago, my dad donated $20 to help make{" "}
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
        <ClickableImage src="/images/hand-magic-orb.png" alt="hand-magic-orb" />
        <ClickableImage src="/images/revolver.png" alt="revolver" />
        <ClickableImage src="/images/bad_face.png" alt="bad_face" />
        <ClickableImage src="/images/cubes_mess.png" alt="cubes_mess" />
        <ClickableImage src="/images/dirty_hog.jpeg" alt="dirty_hog" />
        <ClickableImage src="/images/generated_bad_rocks.png" alt="bad_rocks" />
        <ClickableImage src="/images/generated_nebula.png" alt="nebula" />
        <ClickableImage src="/images/gold_hog.png" alt="gold_hog" />
        <ClickableImage src="/images/magnum_back.png" alt="magnum_back" />
        <ClickableImage src="/images/mongoose.png" alt="mongoose" />
        <ClickableImage src="/images/turret_wireframe.png" alt="turret_wf" />
        <ClickableImage
          src="/images/undersuit_hand_greeble.png"
          alt="undersuit_hand_greeble"
        />
      </div>
    </Layout>
  )
}

export default ThreeD
