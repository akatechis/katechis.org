import React from 'react'
import Page from '../components/Page'
import Feather from 'feather-icons'

const linkedin = { __html: Feather.icons.linkedin.toSvg() }
const github = { __html: Feather.icons.github.toSvg() }
const mail = { __html: Feather.icons.mail.toSvg() }

const Home = () => {
  return (
    <Page pageTitle='Katechis // Alexandros'>
      <div className='hero'>
        <div className='right'>
          <h1 className='title'>Alexandros Katechis</h1>
        </div>
        <div className='left'>
          <p className='description'>
            Alex is a talented software systems engineer, based in the New York City Metro Area, with a track record of building reliable systems as part of amazing teams.
          </p>
          <p className='social'>
            <a className='social-link linkedin' href='https://www.linkedin.com/in/akatechis/' target='_blank' dangerouslySetInnerHTML={linkedin}></a>
            <a className='social-link github' href='https://github.com/akatechis' target='_blank' dangerouslySetInnerHTML={github}></a>
            <a className='social-link mail' href='mailto:akatechis@gmail.com' target='_blank' dangerouslySetInnerHTML={mail}></a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .hero {
          margin-top: 80px;
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
        }
        .left {
          width: 50%;
          order: -1;
          margin-right: 5px;
        }
        .right {
          width: 50%;
          order: 1;
          margin-left: 5px;
        }
        .title {
          width: 100%;
          line-height: 1.5;
          font-size: 4em;
          background-image: rgba(14, 14, 14, 1.0);
          background-image: -webkit-linear-gradient(bottom, rgba(14, 14, 14, 1.0), rgba(88, 88, 88, 1.0));
          background-image: -moz-linear-gradient(bottom, rgba(14, 14, 14, 1.0), rgba(88, 88, 88, 1.0));
          background-image: linear-gradient(to top, rgba(14, 14, 14, 1.0), rgba(88, 88, 88, 1.0));
          color:transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .description {
          font-size: 1.3em;
          text-align: right;
          background-image: rgba(69, 69, 69, 1.0);
          background-image: -webkit-linear-gradient(top, rgba(69, 69, 69, 1.0), rgba(150, 150, 150, 1.0));
          background-image: -moz-linear-gradient(top, rgba(69, 69, 69, 1.0), rgba(150, 150, 150, 1.0));
          background-image: linear-gradient(to bottom, rgba(69, 69, 69, 1.0), rgba(150, 150, 150, 1.0));
          color:transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .social {
          font-size: 1.3em;
          text-align: right;
          color: #000;
        }
        .social-link {
          margin-left: 10px;
        }
        @media only screen
          and (-webkit-min-device-pixel-ratio: 3) {
            .hero {
              flex-direction: column;
            }
            .left {
              order: 1;
            }
            .title {
              text-align: center;
              font-size: 2em;
            }
            .right {
              order: -1;
            }
            .description {
              text-align: justify;
              font-size: 1.2em;
            }
            .social {
              text-align: center;
            }
          }
      `}</style>
    </Page>
  )
}

export default Home
