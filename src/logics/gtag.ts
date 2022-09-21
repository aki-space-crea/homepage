export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// PV 測定
export const pageview = (url: string): void => {
  // GA_TRACKING_ID が設定されていない場合は、処理終了
  if (!GA_ID) return
  window.gtag('config', GA_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// GA イベントの発火
export const event = ({
  action,
  category,
  label,
  value
}: {
  action: string
  category: string
  label: string
  value?: number
}): void => {
  if (!GA_ID) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
