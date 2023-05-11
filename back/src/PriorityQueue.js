function PriorityQueue(defaultBuckets = {}, maxSize = 100) {
  const buckets = defaultBuckets;
  let itemCount = 0;

  const createBucketKeys = (set) => {
    for (let s of set) {
      buckets[s] = 0;
    }
  };

  const enqueue = (val) => {
    if (Object.keys(buckets).length >= maxSize && itemCount >= maxSize) {
      return;
    }
    itemCount += 1;
    buckets[val] += 1;
  };

  const dequeue = () => {
    const bucketKeys = Object.keys(buckets);
    for (var i = 0; i < bucketKeys.length; i++) {
      if (buckets[bucketKeys[i]] !== 0) {
        buckets[bucketKeys[i]] -= 1;
        return;
      }
    }
  };

  const peek = () => {
    const priorities = Object.keys(buckets);
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[i] != 0) {
        return buckets[priorities[i]];
      }
    }
    return buckets[priorities[0]];
  };

  const isEmpty = () => {
    const priorities = Object.keys(buckets);
    for (let i = 0; i < priorities.length; i++) {
      if (buckets[priorities[i]] !== 0) {
        return false;
      }
    }
    return true;
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
