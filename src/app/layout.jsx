import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Merge Conflicts & Life Hotfixes',
    default:
      'Merge Conflicts & Life Hotfixes - Stories from the Other Side of the Stack',
  },
  description:
    'Stories from the Other Side of the Stack.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-night antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
