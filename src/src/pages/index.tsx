import React from 'react'
import Layout from '../components/layout'
import vladOnMyShouldersPath from '../images/vlad-on-my-shoulders.jpg'

const Homepage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        Hi, I'm Michael Belousov. I'm a programmer and digital artist. I love
        programming and digital art and how they mix.
      </p>
      <p>I have a beautiful son, Vlad, and wife, Anastasia.</p>
      <img src={vladOnMyShouldersPath} style={{ maxWidth: 400 }}></img>
      <p>
        I'm interested in lots of things and if you think you have one of them,
        feel free to contact me as <em>mikemikeb</em> at <em>protonmail.com</em>{' '}
        Also checkout <a href="https://github.com/MichaelBelousov">my GitHub</a>{' '}
        for most of my personal experiments and tinkerings.
      </p>
    </Layout>
  )
}

export default Homepage
