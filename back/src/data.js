let enqueueList = {
  // In memory data store with populated data
  1683652025681: [1, 2, 3, 2, 1, 1, 3],
  1683652077215: [1, 5, 1, 2, 1, 3, 2],
  1683652147858: [
    3, 1, 5, 2, 1, 4, 2, 3, 2, 1, 1, 3, 3, 5, 2, 1, 6, 1, 1, 2, 4, 2, 4, 1, 3,
    2, 1, 4, 2, 1, 1, 2, 2, 1, 1,
  ],
};

let sessions = {
  1683652025681: [1, 1, 2, 1, 2, 3, 3],
  1683652077215: [1, 1, 2, 1, 2, 3, 5],
  /*1683652147858: [
    1, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 1, 2, 3, 4, 1, 1, 2, 1, 1, 2, 3, 1, 2, 2,
    3, 4, 5, 2, 2, 3, 4, 4, 5, 6,
  ], */
};

let bucketedSessions = {
  1683652025681: {
    1: 3,
    2: 2,
    3: 2,
  },
  1683652077215: {
    1: 3,
    2: 2,
    3: 1,
    5: 1,
  },
};

let rateLimit = 2; //Default rate limit

function addSession(numbers, timestamp) {
  if (!sessions[timestamp]) {
    sessions[timestamp] = numbers;
  }
}

function updateRateLimit(newVal) {
  rateLimit = newVal;
}

module.exports = {
  sessions,
  addSession,
  rateLimit,
  updateRateLimit,
  bucketedSessions,
};
