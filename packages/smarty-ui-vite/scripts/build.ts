import { config } from '../vite.config'
import { build, InlineConfig, defineConfig, UserConfig } from 'vite'
import fs from 'fs-extra'
import path from 'path'

const buildAll = async () => {

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig)

  const srcDir = path.resolve(__dirname, '../src/');
  fs.readdirSync(srcDir).filter((name) => {
    console.log('fileName=>', name)
    // 过滤文件只保留 包含index.ts
    const componentDir = path.resolve(srcDir, name);
    console.log('isDir=>', fs.lstatSync(componentDir))
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  })
    .forEach(async name => {
      console.log('文件夹遍历', name)
      const outDir = path.resolve(config.build.outDir, name)
      console.log('outDir->', outDir);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name,
          fileName: `index`,
          formats: [`esm`, `umd`]
        },
        outDir
      }

      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig)


      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
        "name": "smarty-ui-vites/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
        "utf-8"
      )
    })
}


buildAll()

