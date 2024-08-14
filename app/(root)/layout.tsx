import { ReactNode } from "react"

function RootLayout({children}: {children: ReactNode}) {
  return (
    <main>
      Navbar
      {children}</main>
  )
}

export default RootLayout