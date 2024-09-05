// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue';
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// import './styles/index.scss'
let homePageStyle: HTMLStyleElement | undefined
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    if(typeof window !== 'undefined'){
      watch(
        updateHomePageStyle(
          location.pathname === '/'
        )
      )
    }
  }
} satisfies Theme

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}