# Firebase Asynchronous Data Access

This repository demonstrates a common error in Firebase when accessing data before the promise resolves.  The `bug.js` file showcases the error, and `bugSolution.js` provides the corrected code.

The core issue is attempting to access data from a Firebase query snapshot before the asynchronous operation completes. This leads to undefined values and potential errors. The solution utilizes async/await or promises to ensure data is accessed only after successful retrieval.

**Steps to reproduce the bug:**
1. Clone the repository.
2. Run `bug.js`. Observe the error.
3. Run `bugSolution.js`. Observe the successful data retrieval.