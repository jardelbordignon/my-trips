import { analyticsMeasurementId } from '@/config/dotenv'

export const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsMeasurementId}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)
