const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const VISITOR_ID_KEY = "portfolio_visitor_id";
const VISITOR_LIKED_KEY = "portfolio_liked";

const getHeaders = () => ({
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
});

const getLikesEndpoint = () => `${SUPABASE_URL}/rest/v1/portfolio_likes`;

export const getVisitorId = () => {
  const storedVisitorId = window.localStorage.getItem(VISITOR_ID_KEY);

  if (storedVisitorId) {
    return storedVisitorId;
  }

  const visitorId =
    window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  window.localStorage.setItem(VISITOR_ID_KEY, visitorId);
  return visitorId;
};

export const getStoredLikeStatus = () => {
  return window.localStorage.getItem(VISITOR_LIKED_KEY) === "true";
};

export const storeLikeStatus = () => {
  window.localStorage.setItem(VISITOR_LIKED_KEY, "true");
};

export const fetchPortfolioLikesCount = async () => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return 0;
  }

  const response = await fetch(`${getLikesEndpoint()}?select=id&limit=1`, {
    headers: {
      ...getHeaders(),
      Prefer: "count=exact",
    },
  });

  if (!response.ok) {
    throw new Error("Não foi possível buscar as curtidas.");
  }

  const contentRange = response.headers.get("content-range");
  const total = Number(contentRange?.split("/")?.[1]);

  return Number.isFinite(total) ? total : 0;
};

export const registerPortfolioLike = async (visitorId: string) => {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return;
  }

  const response = await fetch(getLikesEndpoint(), {
    method: "POST",
    headers: {
      ...getHeaders(),
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ visitor_id: visitorId }),
  });

  if (!response.ok && response.status !== 409) {
    throw new Error("Não foi possível registrar a curtida.");
  }
};
