const azure = require('azure-storage');
const express = require('express');

const app = express();

// Azure Blob Storage credentials
const accountName = 'nodejstest1';
const accountKey = 'LkCMd/eQ7IN8QGI1HbDbOruwSsD0Pb+Hox48IeAzxe0K7U8Epmo1bcQaSMKyDVQ3lPd/k0162p4j+AStegkD9g==';
const containerName = 'containertest';
const blobName = 'work.txt';

// Create a BlobServiceClient object
const blobService = azure.createBlobService('nodejstest1', 'LkCMd/eQ7IN8QGI1HbDbOruwSsD0Pb+Hox48IeAzxe0K7U8Epmo1bcQaSMKyDVQ3lPd/k0162p4j+AStegkD9g==');

// Define the health check route
app.get('/health', (req, res) => {
    // Respond with a success status code (200 OK) for health check
    res.status(200).send('OK');
});

// Define the route to get blob content
app.get('/', (req, res) => {
    // Get the blob content
    blobService.getBlobToText('containertest', 'work.txt', (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ content: data });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


