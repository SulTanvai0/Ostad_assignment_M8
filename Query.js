const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

//url form config.env 
const mongoUri = process.env.MONGO_URI; 

async function createCollection() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();

    // Create a new collection
    const db = client.db();
    const newCollectionName = 'superShop1';
    await db.createCollection(newCollectionName);
    console.log(`Created collection: ${newCollectionName}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

async function removeCollection() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();

    // Remove a collection from the database
    const db = client.db();
    const collectionToDelete = 'superShop1';
    await db.dropCollection(collectionToDelete);
    console.log(`Removed collection: ${collectionToDelete}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

async function insertDocument() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();

    // Insert a single document into a collection
    const db = client.db();
    const collectionName = 'employees1';
    const collection = db.collection(collectionName);
    const documentToInsert = { name: 'John', age: 30 };
    const result = await collection.insertOne(documentToInsert);
    console.log(`Inserted document: ${result.insertedId}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

async function deleteDocument() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();

    // Delete/remove a single document from the collection
    const db = client.db();
    const collectionName = 'employees1';
    const collection = db.collection(collectionName);
    const documentToDelete = { name: 'John' };
    const deleteResult = await collection.deleteOne(documentToDelete);
    console.log(`Deleted ${deleteResult.deletedCount} document(s)`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

module.exports = {
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
};
