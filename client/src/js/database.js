import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database //Completed
export const putDb = async (content) => {
  console.log('Put data to DB initiated');
  const accessDb = await openDB('jate', 1);
  const tx = accessDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate')
  const request = store.put({id: 1, value: content});
  const result = await request
  console.log('Put data to DB successfully', result)  
  console.error('putDB not implemented');
}
// TODO: Add logic for a method that gets all the content from the database //Completed
export const getDb = async () => {
  console.log('Data get from DB initiated');
  const accessDb = await openDB('jate', 1);
  const tx = accessDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1); 
  const result = await request;
  console.log('Data got', result);
  console.error('getDb not implemented');
  return result;
};

initdb();
