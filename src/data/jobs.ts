import jobOffersJson from "./job-offers.json";
import IconGoogle from "@/components/UI/icons/IconGoogle.astro";
import IconSteam from "@/components/UI/icons/IconSteam.astro";
import IconFacebook from "@/components/UI/icons/IconFacebook.astro";
import IconMicrosoft from "@/components/UI/icons/IconMicrosoft.astro";
import IconAWS from "@/components/UI/icons/IconAWS.astro";

const LOGO_MAP = {
  google: IconGoogle,
  steam: IconSteam,
  facebook: IconFacebook,
  microsoft: IconMicrosoft,
  aws: IconAWS,
} as const;

export type LogoKey = keyof typeof LOGO_MAP;

export type JobOffer = (typeof jobOffersJson.jobs)[number] & {
  logoKey: LogoKey;
};

function isLogoKey(key: string): key is LogoKey {
  return key in LOGO_MAP;
}

export function resolveLogo(key: string) {
  if (!isLogoKey(key)) return undefined;
  return LOGO_MAP[key];
}

export function getJobById(id: string): JobOffer | undefined {
  const job = jobOffersJson.jobs.find((j) => j.id === id);
  if (!job || !isLogoKey(job.logoKey)) return undefined;
  return job as JobOffer;
}

export function getAllJobs(): JobOffer[] {
  return jobOffersJson.jobs.filter((j) => isLogoKey(j.logoKey)) as JobOffer[];
}

/** Listado para la home: mismos datos + componente de logo */
export const jobsForListing = getAllJobs().map((job) => ({
  ...job,
  Logo: LOGO_MAP[job.logoKey],
}));
