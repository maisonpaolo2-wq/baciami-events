import sharp from 'sharp'
import { readdir, rename, unlink } from 'fs/promises'
import { join, extname } from 'path'
import { tmpdir } from 'os'

const dir = 'C:\\Users\\Guillermo\\OneDrive\\Escritorio\\baciami-events\\public\\photos'

const files = (await readdir(dir)).filter(f => ['.jpg','.jpeg','.png'].includes(extname(f).toLowerCase()))

for (const file of files) {
  const src = join(dir, file)
  const tmp = join(tmpdir(), 'baciami_' + file)

  const img = sharp(src)
  const meta = await img.metadata()
  const { width, height } = meta

  const cropTop = Math.round(height * 0.13)
  const cropBottom = Math.round(height * 0.11)
  const newHeight = height - cropTop - cropBottom

  console.log(`${file}: ${width}x${height} → crop top=${cropTop} bottom=${cropBottom} → ${width}x${newHeight}`)

  await sharp(src)
    .extract({ left: 0, top: cropTop, width, height: newHeight })
    .jpeg({ quality: 92 })
    .toFile(tmp)

  await rename(tmp, src)
  console.log(`  ✓ done`)
}

console.log('\nAll photos cropped.')
