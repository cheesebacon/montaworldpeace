// 1. Import Blogs ONLY
import { knicksGrok } from './knicksGrok';
import { creativeProcess } from './creativeProcess';
import { pamageLog } from './pamageLog';

// 2. Create a master array for BLOGS ONLY
export const allPosts = [
  knicksGrok,
  creativeProcess,
  pamageLog
].sort((a, b) => new Date(a.date) - new Date(b.date));

// 3. Helper: Get latest blog
export const getLatestByCategory = (cat) => {
  const filtered = allPosts.filter(
    p => p.category?.toLowerCase() === cat.toLowerCase()
  );
  // Return the last item if it exists, otherwise return null
  return filtered.length > 0 ? filtered[filtered.length - 1] : null;
};