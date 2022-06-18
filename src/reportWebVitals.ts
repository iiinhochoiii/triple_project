import { ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
      'web-vitals'
    )
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}

export default reportWebVitals
