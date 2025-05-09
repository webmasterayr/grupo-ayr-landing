export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_APP_GA_MEASUREMENT_ID;

export const pageview = (url: any) => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: any;
  category: any;
  label: any;
  value: any;
}) => {
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
