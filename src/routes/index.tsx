import { Routes, Route } from 'react-router-dom'
import {
  PageHome, PageLayout, PageComentario,
  PageCadastrar, PageLogin, PageAdm, PageDuna, PageZodiac, PageBatman
} from '../pages'
import { ProtectedRoute } from './ProtectedRoute'
export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/comentario" element={<PageComentario />} />
        <Route path="/cadastrar" element={<PageCadastrar />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/duna" element={<PageDuna />}></Route>
        <Route path="/zodiac" element={<PageZodiac />}></Route>
        <Route path="/batman" element={<PageBatman />}></Route>
        <Route path="/adm" element={<ProtectedRoute />}>
          <Route path="" element={<PageAdm />} />
        </Route>
      </Route>
    </Routes>
  )
}
