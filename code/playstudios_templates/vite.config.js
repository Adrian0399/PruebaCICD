import { defineConfig } from "vite";
import { resolve } from "path";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  build: {
    rollupOptions: {
      // Multiple inputs declarations - Mandatory for build the DIST folder
      input: {
        main: resolve(__dirname, "index.html"),
        typography: resolve(__dirname, "typography.html"),
        buttons: resolve(__dirname, "buttons.html"),
        cards: resolve(__dirname, "cards.html"),
        layouts: resolve(__dirname, "layouts.html"),
        modal: resolve(__dirname, "modal.html"),
        modal2: resolve(__dirname, "modal2.html"),
        forms: resolve(__dirname, "forms.html"),
        modalForm: resolve(__dirname, "modal-form.html"),
      },
    },
  },
});
