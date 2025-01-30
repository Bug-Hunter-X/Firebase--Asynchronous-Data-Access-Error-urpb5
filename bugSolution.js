The solution involves using async/await or promises to handle the asynchronous nature of Firebase data retrieval.  Here's how you can modify your code to fix this:

```javascript
// Using async/await
async function getData() {
  try {
    const querySnapshot = await getDocs(query);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}

// Using promises
function getDataPromise() {
  getDocs(query).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  }).catch((error) => {
    console.error("Error fetching data: ", error);
  });
}
```
This ensures that the code waits for the promise to resolve before accessing the data, preventing the error.