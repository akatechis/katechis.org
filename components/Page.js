import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

const Page = ({ children, pageTitle }) => {
  return (
    <div className='frame'>
      <Head>
        <title>{ pageTitle }</title>
      </Head>

      <div className='content'>
        <Nav />
        { children }
      </div>

      <style jsx global>{`
        body, html {
          background: rgb(233, 233, 233);
          margin: 0;
          padding: 0;
          font-family: BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        .frame {
          width: 100%;
        }
        .content {
          width: 85%;
          margin: 0 auto;
        }
        a {
          color: #265e7d;
          text-decoration: none;
          border-bottom: 1px dotted rgba(0, 0, 0, 0);
          transition: all .2s ease-in;
        }
        a:hover {
          color: #164ebe;
        }
        a.text-link:hover {
          border-bottom: 1px dotted #164ebe;
        }
        @media only screen
          and (-webkit-min-device-pixel-ratio: 3) {
            .content {
              width: 100%;
            }
          }
      `}</style>
    </div>
  )
}

export default Page
