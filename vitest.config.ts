import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [tsconfigPaths(), react(), stubNextAssetImport()],
  test: {
    environment: 'jsdom'
  }
})

// https://github.com/vercel/next.js/issues/45350#issuecomment-1645556123
function stubNextAssetImport() {
  return {
    name: 'stub-next-asset-import',
    transform(_code: string, id: string) {
      if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
        const imgSrc = '/' + path.relative(process.cwd(), id)
        return {
          code: `export default { src: '${imgSrc}', height: 1, width: 1 }`
        }
      }
    }
  }
}
