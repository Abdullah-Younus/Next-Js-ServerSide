import './globals.css'
import Link from 'next/link'
import NavBar from './nav-bar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  )
}
