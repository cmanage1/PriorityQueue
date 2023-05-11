function PriorityQueue(defaultBuckets = {}, maxSize = 100) {
  const buckets = defaultBuckets;

  const createBucketKeys = (set) => {
    for (let s of set) {
      buckets[s] = 0;
    }
  };

  const enqueue = (val) => {
    buckets[val] += 1;
  };

  const dequeue = () => {
    // Add rate limiter functionality here

    const highestPriority = Object.keys(buckets)[0];
    buckets[highestPriority] -= 1;
  };

  const peek = () => {
    const priorities = Object.keys(buckets);
    if (priorities.length === 0) {
      return null;
    }
    const highestPriority = Math.min(...priorities);
    const highestPriorityBucket = buckets[highestPriority];
    return highestPriorityBucket[0];
  };

  const isEmpty = () => {
    return Object.keys(buckets).length === 0;
  };

  const toString = () => {
    console.log(buckets);
  };

  const getBuckets = () => {
    return buckets;
  };

  return { enqueue, dequeue, peek, isEmpty, createBucketKeys, getBuckets };
}

module.exports = { PriorityQueue };
