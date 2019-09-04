import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'ABOUT' },
  { href: 'https://write.as/akatechis', label: 'BLOG', external: true }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href='/'>
          <a className='text-link'>HOME</a>
        </Link>
      </li>
      {links.map(({ key, href, label, external }) => (
        <li key={key}>
          { external && <a className='text-link' href={href} target='_blank'>{label}</a> }
          { !external && <Link href={href}><a className='text-link'>{label}</a></Link>}
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        width: 100%;
      }
      ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      nav a {
        font-size: 1.2em;
        justify-content: center;
        font-weight: 700;
      }
    `}</style>
  </nav>
)

export default Nav
