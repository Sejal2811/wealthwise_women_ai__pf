# 💰 WealthWise Women - Financial Literacy Platform

WealthWise Women is a web-based platform designed to empower women through financial literacy. The platform provides tools, educational resources, and investment guidance tailored to women's financial goals and lifestyles.

## 🧭 Project Flow

1. **🔐 Sign-Up & Login Page**
   - New users can register and existing users can log in securely.
   - Authentication managed through JWT.

2. **👩‍💼 Occupation Selection Page**
   - After login, users select their occupation: **Salaried** or **Housewife**.
   - Based on the selection:
     - Platform provides personalized financial tips.
     - Users can input their **monthly income/savings**.

3. **📊 Financial Calculators Page**
   - Includes three calculators:
     - **SIP Calculator**
     - **Gold Loan Calculator**
     - **Fixed Deposit (FD) Calculator**
   - Helps users understand expected returns and loan estimates.

 4. **📈 Investment Analysis Page**
   - Based on the savings entered, system suggests:
     - How much to invest and where (FD, SIP, Gold Loan).
   - Offers AI-powered financial insights.

5. **🌟 Success Stories Page**
   - Real-life financial journeys of women who successfully achieved their goals.
   - Motivates users to stay consistent with investments.
  
## 🔧 Features

- 🔐 User Authentication (Sign-Up / Login)
- 👩 Occupation-based Financial Planning
- 📈 Investment Return Calculators
- 💡 AI-based Investment Suggestions

# 🧰 Tech Stack

### 💻 Frontend
- React.js + TypeScript
- Tailwind CSS
- React Router, Context API
- Vite for fast build & dev

### 🌐 Backend
- Node.js + Express.js
- MongoDB (with Mongoose)
- JWT Authentication
- RESTful APIs

## 📁 Project Structure
wealthwise_women_ai__pf/
├── server/
│ ├── middleware/
│ ├── models/
│ └── routes/
├── src/
│ ├── components/
│ ├── layouts/
│ ├── lib/
│ └── pages/
├── .env
├── package.json
├── tailwind.config.js
├── README.md


## 🧑‍🤝‍🧑 Team Members
This project was collaboratively built by:

- Sejal Birgawale  
- Indrayani Bhujade  
- Bhaghyashree Tikhe 
- Kulashri Kasbe

## 🚀 How to Run the Project Locally

1.Clone the Repository
git clone https://github.com/Sejal2811/wealthwise_women_ai__pf.git
cd wealthwise_women_ai__pf

2. Install Frontend Dependencies
cd src
npm install

3. Install Backend Dependencies
cd ../server
npm install

4. Create .env File
Create a .env file in both root and server/ directory with:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000

5. Run the Development Server
Frontend:
npm run dev

Backend:
npm start

🙌 Acknowledgements
This platform is inspired by the vision of making financial tools accessible and inclusive for women.
