import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'

const PostsList = lazy(() => import('@/pages/PostsList'))
const PostDetail = lazy(() => import('@/pages/PostDetail'))

const LazyFallback = (
  <div className="flex min-h-screen items-center justify-center">
    <p className="text-text-secondary">Loading...</p>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Suspense fallback={LazyFallback}><PostsList /></Suspense>} />
            <Route path="/posts/:slug" element={<Suspense fallback={LazyFallback}><PostDetail /></Suspense>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
