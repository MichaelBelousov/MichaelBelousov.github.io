import React from 'react'
import * as styles from './3d.module.scss'
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
import male_face_sculpt from '../images/male_face_sculpt.png'
import wormhole from '../images/wormhole.gif'

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
        Here's a small collection of digital works I've made, most just visual
        brainstorms, many procedurally generated, some sculpts. They are mostly
        made with Blender, but I also use Unreal Engine, Substance, Krita, GIMP,
        Godot, and more. The Warthog (yellow vehicle) and Magnum (pistol) had
        contributing authors.
      </p>

      <div className={styles.container}>
        <ClickableImage src={wormhole} alt="wormhole gif" />
        <ClickableImage src={male_face_sculpt} alt="male face sculpt" />
        <ClickableImage src={hand_magic_orb} alt="hand_magic_orb" />
        <ClickableImage src={revolver} alt="revolver" />
        <ClickableImage src={bad_face} alt="bad_face" />
        <ClickableImage
          src="/images/the_eye.png"
          alt="procedurally generated eye"
        />
        <ClickableImage src={cubes_mess} alt="cubes_mess" />
        <ClickableImage src={dirty_hog} alt="dirty_hog" />
        <ClickableImage src={bad_rocks} alt="generated_bad_rocks" />
        <ClickableImage src={nebula} alt="generated_nebula" />
        <ClickableImage src={gold_hog} alt="gold_hog" />
        <ClickableImage src={magnum_back} alt="magnum_back" />
        <ClickableImage src={mongoose} alt="mongoose" />
        <ClickableImage src={turret_wf} alt="turret_wireframe" />
      </div>
    </Layout>
  )
}

export default ThreeD
