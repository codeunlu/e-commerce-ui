import { ITEMS_PER_PAGE } from "@/services/API";

export const LIMIT_PAGE = (size: number) => Math.ceil(size / ITEMS_PER_PAGE);
