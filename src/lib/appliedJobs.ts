export const APPLIED_JOBS_KEY = "tlamatini_applied_jobs";

export function getAppliedJobIds(): string[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(APPLIED_JOBS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed)
      ? parsed.filter((x): x is string => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}

export function addAppliedJob(id: string): void {
  if (typeof localStorage === "undefined") return;
  const ids = getAppliedJobIds();
  if (!ids.includes(id)) ids.push(id);
  localStorage.setItem(APPLIED_JOBS_KEY, JSON.stringify(ids));
}

export function hasAppliedTo(id: string): boolean {
  return getAppliedJobIds().includes(id);
}
