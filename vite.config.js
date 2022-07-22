
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    alias: {
        "@": resolve(__dirname, "src"),
    },

    build: {
        rollupOptions: {
            external: [
                "three",
                "three/examples/jsm/controls/OrbitControls"
            ],
        },
    },

});