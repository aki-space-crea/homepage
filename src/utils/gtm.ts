export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const pageview = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  window.gtag('config', gaMeasurementId, {
    page_path: url
  })
}

export const googleTagManagerId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ''

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}
