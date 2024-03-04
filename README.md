Node.js Docker Project
This project is a demonstration of deploying a Node.js application with Azure Blob Storage integration using Docker containers and Kubernetes.

Table of Contents
Overview
Prerequisites
Installation
Usage
Configuration
Deployment
Testing
Contributing
License
Overview
The project consists of a Node.js application that interacts with Azure Blob Storage to retrieve and display content. It utilizes Docker containers for local development and Kubernetes for deployment to an Azure Kubernetes Service (AKS) cluster.

Prerequisites
Before running the application, ensure you have the following prerequisites installed:

Node.js
Docker
Helm
kubectl
Azure CLI
Additionally, you need an Azure account and an AKS cluster provisioned.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/node-js-docker-project.git
Navigate to the project directory:

bash
Copy code
cd node-js-docker-project
Install dependencies:

bash
Copy code
npm install
Usage
To run the application locally, follow these steps:

Set up environment variables for Azure Blob Storage credentials:

bash
Copy code
export STORAGE_ACCOUNT_NAME=<your-storage-account-name>
export STORAGE_ACCOUNT_KEY=<your-storage-account-key>
Start the Node.js application:

bash
Copy code
npm start
Access the application at http://localhost:3000.

Configuration
Configuration options for the application can be found in the config.js file. Modify this file to adjust settings such as port number and logging levels.

Deployment
To deploy the application to an AKS cluster using Helm:

Package the Helm chart:

bash
Copy code
helm package .
Add the Helm repository:

bash
Copy code
helm repo add myapp-repo http://localhost:8879
Update the Helm repositories:

bash
Copy code
helm repo update
Install the application:

bash
Copy code
helm install myapp myapp-repo/myapp
Testing
Unit tests for the application can be run using:

bash
Copy code
npm test
Additionally, end-to-end testing can be performed after deployment to the AKS cluster.

Contributing
Contributions are welcome! Please read the Contribution Guidelines for details on how to contribute to this project.

License
This project is licensed under the MIT License.
