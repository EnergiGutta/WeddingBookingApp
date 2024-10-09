# Wedding Booking Drink App 🥂
This project is a simple Wedding Booking Drink App designed to help users plan and manage drink orders for weddings or other events. It was built as a hobby project to experiment with modern web technologies and provide an easy-to-use interface for organizing beverage logistics for special occasions.
Frontend is hosted at: https://selinogerlend.netlify.app/
Backend is hosted at: https://selinogerlend.onrender.com/api
Backend Docs: https://selinogerlend.onrender.com/api/docs 



## Features ✨
* Browse and Select Drinks: View a collection of available beverages (both alcoholic and non-alcoholic) with detailed descriptions and images.
* Dynamic Drink Calculator: Automatically calculates the quantity of each drink needed based on the number of guests.
* Custom Drink Selection: Allows users to customize drink choices and quantities based on guest preferences.
* Budget Management: Provides an overview of total drink costs and options to stay within a budget.
* Real-time Updates: Live updates for drink orders based on guest feedback or last-minute changes.
* Order Summary: Generates a clean, printable summary of the selected drinks and quantities to streamline the ordering process with vendors.
* Responsive Design: Optimized for use on both desktop and mobile devices.

## Technology Stack 🛠
* Frontend: Vue.js (or React if preferred) for dynamic UI and component-based architecture.
* Backend: Node.js/Express (or Flask/Django depending on your choice) to handle drink data and user orders.
* Database: MongoDB (or any other NoSQL/SQL database) for storing drink lists, user selections, and order details.
* Styling: Tailwind CSS or Bootstrap for responsive and elegant styling.
* Deployment: Hosted on Heroku (or any cloud service) for easy access and deployment.

## Screenshots 📸
TODO: Include some screenshots or GIFs here to visually demonstrate the app's interface and functionality.

## Getting Started 🚀
Prerequisites
Node.js or Python (depending on your backend choice)
MongoDB or another database system (can use a local instance or a cloud-based service like MongoDB Atlas)
Installation
Clone the repository:

bash
Kopier kode
git clone https://github.com/yourusername/wedding-drink-app.git
cd wedding-drink-app
Install dependencies:

bash
Kopier kode
npm install
\# or
pip install -r requirements.txt
Set up environment variables for database connection, API keys (if any), etc.

Start the development server:

bash
Kopier kode
npm run dev
\# or
python manage.py runserver
Usage
Visit localhost:3000 (or the appropriate port) to view and use the app.
Customize drink selections, enter the number of guests, and see the recommended quantities and budget updates in real time.

## Roadmap 🛤️

* [ ] Add support for user accounts to save orders.
* [ ] Include support for various event types (birthdays, corporate events).
* [ ] Implement an API to fetch live drink pricing.
* [ ] Allow users to export orders as PDFs.
* [ ] Integrate with a vendor ordering system.
* [ ] Add automated test to increase quality of the code

## Contributing 🤝
This project is a hobby project. For a robust, production ready code there are certain principles for cooperation in place. 
- Main branch is always protected.
  - To protect the main branch we demand a review from another member of the team before merging a PR.
    - Please wait for an accepted review, and merge the PR.
  - Main branch cannot be deleted
  - PRs to main should allways come from the **dev** branch 🌳
- Dev branch should be treated as it is protected.
  - Dev branch cannot be deleted ✖️
- Allways make a new branch to add features. The new branches should allways originate from **dev** and include a prefix **feature-<branchname>**, **update-<branchname>** or **bugfix-<branchname>**
  - Allways create a PR to **dev** ✔️ (not **main**), and delete the branch after merging is complete.

A visual representation of branchin strategy is shown below
<img width="650" alt="Screenshot 2024-10-03 at 22 24 09" src="https://github.com/user-attachments/assets/ca96df4c-f5bd-4c7b-a3db-9a31efb5c958">


## License 📝
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments 🎉
* Inspired by real-life wedding planning challenges.
* Thanks to various open-source projects and tools used to build this app.
