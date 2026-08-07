import { getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'

const CATEGORIES = [
  { key: 'cardloan', label: 'カードローン', icon: '💳', desc: '金利・審査・即日融資比較', color: 'from-red-500 to-rose-600' },
  { key: 'bank', label: '銀行カードローン', icon: '🏦', desc: '低金利の銀行ローン比較', color: 'from-blue-500 to-indigo-600' },
  { key: 'sarakin', label: '消費者金融', icon: '💰', desc: '即日融資・無利息期間あり', color: 'from-orange-500 to-red-500' },
  { key: 'refinance', label: 'おまとめローン', icon: '🔄', desc: '複数ローンをまとめて返済', color: 'from-purple-500 to-violet-600' },
]

export default function Home() {
  const articles = getAllArticles()

  return (
    <div>
      <section className="bg-gradient-to-b from-red-700 to-red-800 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            あなたに最適なローンを、<br className="md:hidden" />今すぐ比較しよう。
          </h1>
          <p className="text-red-100 text-lg md:text-xl max-w-2xl mx-auto">
            カードローン・消費者金融・おまとめローンの比較情報を完全網羅。<br className="hidden md:block" />
            審査・金利・即日融資など、借り入れに必要な情報をわかりやすく解説。
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/category/${cat.key}`}
              className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center group"
            >
              <div className={`bg-gradient-to-br ${cat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <span className="text-xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-sm text-gray-900 group-hover:text-red-700 transition-colors">{cat.label}</h3>
              <p className="text-xs text-gray-400 mt-1">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="w-1 h-6 bg-red-700 rounded-full"></span>
          最新記事
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  )
}
