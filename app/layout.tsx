import "./globals.css"
import Script from "next/script"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/static/js/main.js" strategy="afterInteractive" />
      </head>
      <body>{children}</body>
    </html>
  )
}



// import "./globals.css"
// import Script from "next/script"  Не удается найти модуль "next/script" или связанные с ним объявления типов.

// export default function RootLayout({ children }) { Элемент привязки "children" имеет неявный тип "апу".
// return(
// <html lang="en">   // Элемент 35Х неявно имеет тип "апу", так как интерфейс "JSX. IntrinsicElements" не существует.
// <head>  // Элемент 35Х неявно имеет тип "апу", так как интерфейс "3SX.IntrinsicElements" не существует.
// <script src="/static/js/main.js" strategy-"afterInteractive" />
// </head> // Элемент 35Х неявно имеет тип "апу", так как интерфейс "JSX. IntrinsicElements" не существует.
// body>{children}</body> // Элемент jsХ неявно имеет тип "any", так как интерфейс "J5X. IntrinsicElements" не существует.
// </html>// Элемент jsХ неявно имеет тип "апу", так как интерфейс "JSX. IntrinsicElements" не существует.
//   )


// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'v0 App',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }
