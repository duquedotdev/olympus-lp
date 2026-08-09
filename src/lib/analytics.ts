import { track } from "@vercel/analytics";

// Single point for the campaign KPIs: waitlist signups, referral virality.
export const events = {
  waitlistJoin: (referred: boolean) => track("waitlist_join", { referred }),
  waitlistView: () => track("waitlist_view"),
  referralCopy: () => track("referral_copy"),
};
