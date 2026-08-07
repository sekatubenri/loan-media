import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://loan-select.com'),
  title: {
    default: 'カードローン比較ナビ｜金利・審査・即日融資の徹底比較',
    template: '%s｜カードローン比較ナビ',
  },
  description: 'カードローン・消費者金融を徹底比較。審査が通りやすいローン、即日融資、低金利ランキングなど、借り入れに必要な情報を完全網羅。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'カードローン比較ナビ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320888355424356" crossOrigin="anonymous" strategy="afterInteractive" />
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="bg-red-700 text-white text-sm font-bold px-2.5 py-1 rounded">ローン</span>
              <span className="text-xl font-bold text-gray-900">比較ナビ</span>
            </a>
            <nav className="hidden md:flex gap-1 text-sm">
              <a href="/category/cardloan" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors">カードローン</a>
              <a href="/category/bank" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors">銀行カードローン</a>
              <a href="/category/sarakin" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors">消費者金融</a>
              <a href="/category/refinance" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors">おまとめローン</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-red-700 text-white text-xs font-bold px-2 py-0.5 rounded">ローン</span>
                <span className="text-sm font-bold text-gray-900">比較ナビ</span>
              </div>
              <nav className="flex gap-6 text-xs text-gray-400">
                <a href="/category/cardloan" className="hover:text-gray-600">カードローン</a>
                <a href="/category/bank" className="hover:text-gray-600">銀行カードローン</a>
                <a href="/category/sarakin" className="hover:text-gray-600">消費者金融</a>
              </nav>
            </div>
            <nav className="flex justify-center gap-6 text-xs text-gray-400 mt-4">
              <a href="/privacy" className="hover:text-gray-600">プライバシーポリシー</a>
              <a href="/contact" className="hover:text-gray-600">お問い合わせ</a>
            </nav>
            <p className="text-center text-xs text-gray-300 mt-4">© 2026 カードローン比較ナビ All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
