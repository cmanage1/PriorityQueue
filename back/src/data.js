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

function addSession(numbers, timestamp) {
  if (!sessions[timestamp]) {
    sessions[timestamp] = numbers;
  }
}

module.exports = {
  sessions,
  addSession,
  bucketedSessions,
};
