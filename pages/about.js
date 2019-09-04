import React from 'react'
import Page from '../components/Page'

const About = () => {
  return (
    <Page pageTitle='Katechis // About'>
      <h1>About</h1>
      <div className='about-item'>
        <h2>... me</h2>
        <p>
          I'm a software engineer who is passionate about building reliable yet flexible
          systems. I am primarily an expert in Javascript, both in browsers and Node.js,
          but I also have experience working in other kinds of languages such as Rust,
          Python and Java.
        </p>
        <p>
          I have worked in a variety of problem domains and contexts from biometrics
          and disaster relief, to finance, sales and marketing. I am passionate about
          helping teams of all kinds build the right solutions for their needs.
        </p>
        <p>
          Apart from programming, I'm also passionate about role-playing games, electronic
          music and sci-fi books as well as gardening.
        </p>
      </div>
      <div className='about-item'>
        <h2>... the website</h2>
        <p>
          The website is built on <a className='text-link' href='https://nextjs.org/' target='_blank'>
          next.js</a> with React and hosted on <a className='text-link' href='https://www.netlify.com/' target='_blank'>
          netlify</a>. The blog is simply a <a className='text-link' href='https://write.as' target='_blank'>write.as</a> blog, a great alternative to Medium.
        </p>
      </div>
      <style jsx>{`
        @media only screen
          and (-webkit-min-device-pixel-ratio: 3) {
            h1, .about-item {
              width: 85%;
              margin: 0 auto;
            }
          }
      `}</style>
    </Page>
  )
}

export default About
