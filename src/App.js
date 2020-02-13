import React, { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import back from './left.svg'
import send from './send.svg'
import gsap from 'gsap'
import './App.scss'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0
  },
  fadeIn: {
    opacity: [0, 1],
    y: [10, 0]
  },
  fadeOut: {
    opacity: [1, 0],
    y: [0, 10]
  }
}

const staggerVariants = {
  initial: {
    opacity: 0
  },
  fadeIn: {
    opacity: [0, 1],
    y: [50, 0],
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2
    }
  },
  fadeOut: {
    opacity: [1, 0],
    y: [0, 50],
    transition: {
      // when: 'afterChildren',
      staggerChildren: 0.2
    }
  }
}

const App = () => {
  const sectionSecondRef = useRef(null)
  const intersection = useIntersection(sectionSecondRef, {
    root: null,
    threshold: 0.3,
    rootMargin: '0px'
  })

  return (
    <>
      <div className='header'>
        <div className='sm-btn'>
          <img src={back} alt='back arrow' />
        </div>
        <h5>About</h5>
        <div className='sm-btn'>
          <img src={send} alt='' />
        </div>
      </div>
      <div className='sectionFirst'>
        <div className='pic'>
          <img
            src='https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png'
            alt=''
          />
        </div>
        <h3>Alara Frank</h3>
        <p>
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium.
        </p>
      </div>
      <motion.div
        className='sectionSecond'
        ref={sectionSecondRef}
        animate={
          intersection && intersection.isIntersecting ? 'fadeIn' : 'fadeOut'
        }
        initial='initial'
        variants={staggerVariants}
      >
        <div className='inner'>
          <motion.h3 className='fadeIn' initial='initial' variants={variants}>
            The talk of what makes a champion.
          </motion.h3>
          <motion.p className='fadeIn' initial='initial' variants={variants}>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </motion.p>
          <motion.div
            className='btn-row fadeIn'
            initial='initial'
            variants={variants}
          >
            <a href='/'>Click here bruh</a>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default App
