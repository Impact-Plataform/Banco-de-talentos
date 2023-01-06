import schedule from "node-schedule";

import { CACHE_SCHEDULER } from "../../config/secrets.js";
import LocalCacheService from "./LocalCacheService.js";

export function removeExpiredKeys() {
  schedule.scheduleJob(CACHE_SCHEDULER, () => {
    LocalCacheService.removeExpiredKeys();
  });
}