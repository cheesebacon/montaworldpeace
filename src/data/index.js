// 1. Import Blogs
import { knicksGrok } from './knicksGrok';
import { creativeProcess } from './creativeProcess';
import { pamageLog } from './pamageLog';
import { pamageDiaries1 } from './pamageDiaries1';
import { launch } from './launch';
import { basketballWriter } from './basketballWriter';

// 2. Master array - Sorted so the newest date is the FIRST index (Index 0)
export const allPosts = [
  knicksGrok,
  creativeProcess,
  pamageLog,
  pamageDiaries1,
  launch,
  basketballWriter
].sort((a, b) => new Date(b.date) - new Date(a.date)); // Swapped to (b - a)

// 3. Helper: Get latest blog
export const getLatestByCategory = (cat) => {
  const filtered = allPosts.filter(
    p => p.category?.toLowerCase() === cat.toLowerCase()
  );
  // Since the newest is now at the start, we return index 0
  return filtered.length > 0 ? filtered[0] : null;
};