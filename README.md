# GitSphere-Backend  

GitSphere-Backend is the server-side of the **GitSphere** platform, built with **Node.js** to handle repository operations (init, commit, push, pull) and user management.  
It is deployed on **AWS EC2** and uses **S3** for secure storage, ensuring a reliable and scalable backend infrastructure.  

## ✨ Features
- Repository operations: init, commit, push, pull  
- User authentication & authorization  
- Backend APIs for repository & user management  
- Secure storage integration with AWS S3  
- Deployment on AWS EC2 for scalability & reliability  

## 🛠️ Tech Stack
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Cloud Services:** AWS EC2 (deployment), AWS S3 (storage)  
- **Version Control:** Git  

## 📦 Installation (Local Setup)
1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/GitSphere-Backend.git
   ```
2. Navigate to project folder

   ```bash
   cd GitSphere-Backend
   ```
3. Install dependencies

   ```bash
   npm install
   ```
4. Set up environment variables in `.env` file:

   ```env
   PORT=3002
   MONGO_URI=your_mongodb_connection_string
   AWS_ACCESS_KEY=your_access_key
   AWS_SECRET_KEY=your_secret_key
   S3_BUCKET_NAME=your_bucket_name
   ```
5. Start the server

   ```bash
   npm start
   ```

## 📄 Deployment

* **AWS EC2** for hosting & backend services
* **AWS S3** for repository and file storage

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.
