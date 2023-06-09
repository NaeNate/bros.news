import "@/styles/globals.css"

export const metadata = {
  title: "News Bros",
  description: "Generated by create next app",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
