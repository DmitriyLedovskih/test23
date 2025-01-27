// vite.config.js
import path from "path";
import { defineConfig } from "file:///C:/Users/Dmitriy/Desktop/car/node_modules/vite/dist/node/index.js";
import glob from "file:///C:/Users/Dmitriy/Desktop/car/node_modules/fast-glob/out/index.js";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "file:///C:/Users/Dmitriy/Desktop/car/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import injectHTML from "file:///C:/Users/Dmitriy/Desktop/car/node_modules/vite-plugin-html-inject/dist/index.mjs";
import createSvgSpritePlugin from "file:///C:/Users/Dmitriy/Desktop/car/node_modules/vite-plugin-svg-spriter/lib/index.js";
import { createHtmlPlugin } from "file:///C:/Users/Dmitriy/Desktop/car/node_modules/vite-plugin-html/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Dmitriy\\Desktop\\car";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Dmitriy/Desktop/car/vite.config.js";
var SRC_PATH = path.resolve(__vite_injected_original_dirname, "src");
var SVG_FOLDER_PATH = path.resolve(SRC_PATH, "img", "svg-sprite");
var origin = "https://your-game-origin.ru";
var vite_config_default = defineConfig({
  base: "https://storage.yandexcloud.net/backet.wim.agency/test_markup_dev_new/DmitriyLedovskih/test_markup/dist/",
  // server: {
  // 	proxy: {
  // 		'/api': {
  // 			target: 'https://letu.wim.agency/',
  // 			changeOrigin: true,
  // 			// rewrite: (path) => path.replace(/^\/api/, '')
  // 		},
  // 	},
  // },
  server: {
    cors: false,
    proxy: {
      "/api": {
        target: origin,
        changeOrigin: true
      }
    }
  },
  plugins: [
    createSvgSpritePlugin({
      svgFolder: SVG_FOLDER_PATH,
      svgSpriteConfig: {
        shape: {
          transform: ["svgo"]
        }
      },
      transformIndexHtmlTag: {
        injectTo: "body"
      }
    }),
    injectHTML(),
    ViteImageOptimizer({
      svg: {
        plugins: [
          "removeDoctype",
          "removeXMLProcInst",
          "minifyStyles",
          "sortAttrs",
          "sortDefsChildren"
        ]
      },
      png: {
        quality: 70
      },
      jpeg: {
        quality: 70
      },
      jpg: {
        quality: 70
      },
      webp: {
        quality: 80
      },
      avif: {
        quality: 80
      }
    }),
    createHtmlPlugin({
      minify: true
    })
  ],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync(["./*.html", "./pages/**/*.html"]).map((file) => [
          path.relative(
            __vite_injected_original_dirname,
            file.slice(0, file.length - path.extname(file).length)
          ),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    }
  },
  css: {
    devSourcemap: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEbWl0cml5XFxcXERlc2t0b3BcXFxcY2FyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEbWl0cml5XFxcXERlc2t0b3BcXFxcY2FyXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EbWl0cml5L0Rlc2t0b3AvY2FyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IGdsb2IgZnJvbSBcImZhc3QtZ2xvYlwiO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcInVybFwiO1xyXG5pbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tIFwidml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyXCI7XHJcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sLWluamVjdFwiO1xyXG5pbXBvcnQgY3JlYXRlU3ZnU3ByaXRlUGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmctc3ByaXRlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcclxuXHJcbmNvbnN0IFNSQ19QQVRIID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XHJcbmNvbnN0IFNWR19GT0xERVJfUEFUSCA9IHBhdGgucmVzb2x2ZShTUkNfUEFUSCwgXCJpbWdcIiwgXCJzdmctc3ByaXRlXCIpO1xyXG5cclxuY29uc3Qgb3JpZ2luID0gXCJodHRwczovL3lvdXItZ2FtZS1vcmlnaW4ucnVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCJodHRwczovL3N0b3JhZ2UueWFuZGV4Y2xvdWQubmV0L2JhY2tldC53aW0uYWdlbmN5L3Rlc3RfbWFya3VwX2Rldl9uZXcvRG1pdHJpeUxlZG92c2tpaC90ZXN0X21hcmt1cC9kaXN0L1wiLFxyXG5cclxuICAvLyBzZXJ2ZXI6IHtcclxuICAvLyBcdHByb3h5OiB7XHJcbiAgLy8gXHRcdCcvYXBpJzoge1xyXG4gIC8vIFx0XHRcdHRhcmdldDogJ2h0dHBzOi8vbGV0dS53aW0uYWdlbmN5LycsXHJcbiAgLy8gXHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gIC8vIFx0XHRcdC8vIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJylcclxuICAvLyBcdFx0fSxcclxuICAvLyBcdH0sXHJcbiAgLy8gfSxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICBjb3JzOiBmYWxzZSxcclxuICAgIHByb3h5OiB7XHJcbiAgICAgIFwiL2FwaVwiOiB7XHJcbiAgICAgICAgdGFyZ2V0OiBvcmlnaW4sXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBwbHVnaW5zOiBbXHJcbiAgICBjcmVhdGVTdmdTcHJpdGVQbHVnaW4oe1xyXG4gICAgICBzdmdGb2xkZXI6IFNWR19GT0xERVJfUEFUSCxcclxuICAgICAgc3ZnU3ByaXRlQ29uZmlnOiB7XHJcbiAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogW1wic3Znb1wiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB0cmFuc2Zvcm1JbmRleEh0bWxUYWc6IHtcclxuICAgICAgICBpbmplY3RUbzogXCJib2R5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuXHJcbiAgICBpbmplY3RIVE1MKCksXHJcblxyXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgXCJyZW1vdmVEb2N0eXBlXCIsXHJcbiAgICAgICAgICBcInJlbW92ZVhNTFByb2NJbnN0XCIsXHJcbiAgICAgICAgICBcIm1pbmlmeVN0eWxlc1wiLFxyXG4gICAgICAgICAgXCJzb3J0QXR0cnNcIixcclxuICAgICAgICAgIFwic29ydERlZnNDaGlsZHJlblwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHBuZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDcwLFxyXG4gICAgICB9LFxyXG4gICAgICBqcGVnOiB7XHJcbiAgICAgICAgcXVhbGl0eTogNzAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGpwZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDcwLFxyXG4gICAgICB9LFxyXG4gICAgICB3ZWJwOiB7XHJcbiAgICAgICAgcXVhbGl0eTogODAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGF2aWY6IHtcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG5cclxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICBtaW5pZnk6IHRydWUsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgZ2xvYlxyXG4gICAgICAgICAgLnN5bmMoW1wiLi8qLmh0bWxcIiwgXCIuL3BhZ2VzLyoqLyouaHRtbFwiXSlcclxuICAgICAgICAgIC5tYXAoKGZpbGUpID0+IFtcclxuICAgICAgICAgICAgcGF0aC5yZWxhdGl2ZShcclxuICAgICAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAgICAgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIHBhdGguZXh0bmFtZShmaWxlKS5sZW5ndGgpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBkZXZTb3VyY2VtYXA6IHRydWUsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1IsT0FBTyxVQUFVO0FBQ2pTLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLDBCQUEwQjtBQUNuQyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDJCQUEyQjtBQUNsQyxTQUFTLHdCQUF3QjtBQVBqQyxJQUFNLG1DQUFtQztBQUFnSSxJQUFNLDJDQUEyQztBQVMxTixJQUFNLFdBQVcsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFDOUMsSUFBTSxrQkFBa0IsS0FBSyxRQUFRLFVBQVUsT0FBTyxZQUFZO0FBRWxFLElBQU0sU0FBUztBQUVmLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVlOLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxNQUNoQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxzQkFBc0I7QUFBQSxNQUNwQixXQUFXO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxRQUNmLE9BQU87QUFBQSxVQUNMLFdBQVcsQ0FBQyxNQUFNO0FBQUEsUUFDcEI7QUFBQSxNQUNGO0FBQUEsTUFDQSx1QkFBdUI7QUFBQSxRQUNyQixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsV0FBVztBQUFBLElBRVgsbUJBQW1CO0FBQUEsTUFDakIsS0FBSztBQUFBLFFBQ0gsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxRQUNILFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0gsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsaUJBQWlCO0FBQUEsTUFDZixRQUFRO0FBQUEsSUFDVixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUssQ0FBQyxZQUFZLG1CQUFtQixDQUFDLEVBQ3RDLElBQUksQ0FBQyxTQUFTO0FBQUEsVUFDYixLQUFLO0FBQUEsWUFDSDtBQUFBLFlBQ0EsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTTtBQUFBLFVBQ3ZEO0FBQUEsVUFDQSxjQUFjLElBQUksSUFBSSxNQUFNLHdDQUFlLENBQUM7QUFBQSxRQUM5QyxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
