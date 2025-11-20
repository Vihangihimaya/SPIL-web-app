
# Sales Application - Frontend

## What I Built
A complete React frontend for a Sales Order management system with:
- **Screen 1**: Sales Order creation/edit form with auto-calculation
- **Screen 2**: Order list view with navigation
- **Responsive design** using Tailwind CSS
- **State management** with Redux Toolkit
- **Modern React** with functional components and hooks

## Tech Stack
- React 18
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls (configured for backend integration)

##  Features Implemented
### Screen 1 - Sales Order
- Customer dropdown with auto-fill address
- Item selection with code/description dropdowns
- Real-time calculations (Excl Amount, Tax Amount, Incl Amount)
- Multiple item line support
- Total calculations

### Screen 2 - Home/Order List
- Order listing grid
- Add new order button
- Edit existing orders (double-click functionality)

##  How to Run Frontend

### Prerequisites
- Node.js installed
- npm or yarn

### Installation & Running
```bash
# Navigate to frontend directory
cd salesapplication.client

# Install dependencies
npm install

# Start development server
npm run dev
```

### Access Application
Open http://localhost:5173 in your browser

# Screen 2 (Order List) loads first

Click "Add New" to open Screen 1 (Sales Order)

### Backend Integration Notes
- The frontend is configured to connect to a .NET Core Web API backend at:

- Base URL: http://localhost:5000/api

- API endpoints are set up in Redux services

- CORS is configured for local development


### Project Structure

src/
├── components/     # Reusable UI components
├── pages/         # Screen 1 & Screen 2
├── redux/         # State management
├── services/      # API communication
├── hooks/         # Custom React hooks
└── utils/         # Helper functions



## ** Backend **

```markdown
# Sales Application - Backend (.NET Core)

##  Progress Made
We successfully set up the foundation for the .NET Core backend:
```

###  Completed
1. **Database Design & Creation**
   - SQL Server database `SalesAppDB`
   - 4 tables: Clients, Items, SalesOrders, SalesOrderItems
   - Sample data inserted

2. **.NET Project Structure**
   - ASP.NET Core Web API project created
   - Entity Framework Core installed
   - Database models (Entities) created:
     - Client.cs, Item.cs, SalesOrder.cs, SalesOrderItem.cs

3. **Database Context**
   - ApplicationDbContext configured
   - Entity relationships defined


## Note on Implementation

I would like to provide some context on the implementation:

*   **Frontend:** The frontend application is complete and fully functional, reflecting my standard of work and expertise in [Your Frontend Tech].
*   **Backend (.NET):** The backend was developed as a valuable learning opportunity. My primary expertise is in **Node.js**, and while I was excited to work with .NET, the constrained timeline was a significant challenge for diving deep into the ecosystem.

I have implemented the core backend functionality to the best of my ability within the given timeframe. I am aware that certain aspects could be further optimized with more .NET experience, and I welcome any constructive feedback on the approach.

This experience has solidified my interest in becoming proficient in the .NET framework.
