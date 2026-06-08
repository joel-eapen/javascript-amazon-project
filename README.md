# JavaScript Amazon Project

A fully functional e-commerce web application built with **vanilla JavaScript, HTML, and CSS**. This project replicates key features of the Amazon shopping platform, including product browsing, shopping cart management, checkout process, order tracking, and delivery options.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture & Design](#architecture--design)
- [Key Components](#key-components)
- [Data Persistence](#data-persistence)
- [Testing](#testing)
- [Code Examples](#code-examples)
- [File Descriptions](#file-descriptions)
- [Contributing](#contributing)
- [Future Improvements](#future-improvements)

---

## Project Overview

This is a learning project that demonstrates modern JavaScript practices and e-commerce application development. It showcases:

- **Object-Oriented Programming (OOP)** patterns with JavaScript classes
- **Functional Programming** patterns for data manipulation
- **DOM Manipulation** and dynamic HTML generation
- **Local Storage Integration** for cart and order persistence
- **Responsive Web Design** for mobile and desktop viewing
- **Module System** using ES6 imports/exports
- **Data Processing** and business logic implementation

The application allows users to:
1. Browse a catalog of products with ratings and prices
2. Add/remove items from their shopping cart
3. Select delivery options and view pricing breakdowns
4. Checkout and place orders
5. Track previous orders and delivery status

---

## Features

### 1. Product Catalog
- Display of products with images, names, prices, and star ratings
- Dynamically generated product listings
- Products loaded from backend JSON data
- Filter and search capabilities
- Dynamic pricing and discount handling

### 2. Shopping Cart
- Add products to cart with quantity selection
- Real-time cart quantity updates in header
- Remove items from cart
- Persistent cart storage using LocalStorage
- Cart summary with item count and total

### 3. Checkout System
- Multi-step checkout process
- Order summary showing all items
- Delivery options with different speeds and costs
- Payment summary with:
  - Subtotal calculation
  - Shipping cost estimation
  - Tax calculation
  - Order total
- Quantity editing during checkout

### 4. **Order Management**
- Place orders and generate order dates
- Order history tracking
- Order status display
- Delivery date estimation
- Order persistence in LocalStorage

### 5. **Delivery Tracking**
- Track orders by ID
- View delivery progress
- Estimated delivery dates
- Order details retrieval

### 6. Responsive Design
- Mobile-friendly layout
- Desktop optimized view
- Adaptive navigation
- Touch-friendly interface

---

## Tech Stack

| Category | Technologies |
|----------|---------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| **Architecture** | Object-Oriented Programming (Classes), Functional Programming |
| **Module System** | ES6 Modules (import/export) |
| **Styling** | CSS Grid, Flexbox, Media Queries |
| **Storage** | LocalStorage API |
| **Data Format** | JSON |
| **Testing** | Jasmine (testing framework) |
| **Tools** | VSCode, Git |

---

## Project Structure

```
javascript-amazon-project/
├── amazon.html                 # Main shopping page
├── checkout.html              # Checkout page
├── orders.html                # Order history page
├── tracking.html              # Order tracking page
├── index.html                 # Landing page (redirect)
│
├── scripts/                   # JavaScript logic layer
│   ├── amazon.js             # Main product page logic
│   ├── checkout.js           # Checkout page logic
│   ├── orders.js             # Orders page logic
│   ├── tracking.js           # Tracking page logic
│   ├── checkout/             # Checkout components
│   │   ├── checkoutHeader.js      # Checkout header component
│   │   ├── order-summary.js       # Order summary display
│   │   └── payment-summary.js     # Payment calculation logic
│   └── utils/                # Utility functions
│       └── money.js          # Currency formatting functions
│
├── data/                      # Data models and storage
│   ├── products.js           # Product class & catalog
│   ├── cart.js               # Cart management logic
│   ├── orders.js             # Order storage logic
│   ├── deliveryOptions.js    # Delivery speed & pricing
│   ├── cart-Class.js         # OOP cart implementation
│   ├── cart-OOP.js           # Alternative OOP approach
│   ├── backend-practice.js   # Backend simulation patterns
│   └── car.js                # Learning example
│
├── backend/                   # Backend data source
│   └── products.json         # Product catalog database
│
├── styles/                   # CSS stylesheets
│   ├── shared/              # Shared styles
│   │   ├── general.css      # Global styles
│   │   └── amazon-header.css # Header component styles
│   └── pages/               # Page-specific styles
│       ├── amazon.css       # Product page styles
│       ├── tracking.css     # Tracking page styles
│       ├── orders.css       # Orders page styles
│       └── checkout/        # Checkout styles
│           ├── checkout.css
│           └── checkout-header.css
│
├── images/                  # Static assets
│   ├── amazon-logo-white.png
│   ├── amazon-mobile-logo-white.png
│   ├── products/            # Product images
│   └── icons/               # UI icons
│
├── tests/                   # Test suite
│   ├── test.html           # Test runner HTML
│   └── moneyTest.js        # Unit tests for money utilities
│
├── test-jasmine/           # Jasmine testing framework
└── .git/                   # Git version control
```

---

## Getting Started

### Prerequisites
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **No build tools or server required** - runs directly in the browser
- **Optional**: A local HTTP server for better LocalStorage handling

### Installation & Running

#### Option 1: Direct Browser Opening
```bash
1. Navigate to the project folder
2. Open `amazon.html` in your web browser
   - Double-click the file, OR
   - Right-click → Open with → Your Browser
```

#### Option 2: Using a Local HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if http-server is installed)
http-server

# Then navigate to: http://localhost:8000
```

### Using the Application

1. **Shopping**
   - Browse products on the main page
   - Select quantity and click "Add to Cart"
   - View cart in top right corner

2. **Checkout**
   - Click on the cart icon to go to checkout
   - Review order items
   - Select delivery option (speed affects cost)
   - Review payment summary
   - Click "Place Your Order"

3. **Order Tracking**
   - Navigate to "Orders" page
   - View order history
   - Click on an order to see tracking details

---

## Architecture & Design

### Design Patterns Used

#### 1. Object-Oriented Programming (OOP)
- **Classes**: Product, Delivery Options, Cart (multiple implementations)
- **Inheritance**: Product types extending base Product
- **Encapsulation**: Private and public methods for data protection
- **Polymorphism**: Different product types with custom methods

```javascript
// Example from products.js
class Product {
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }
  
  getPrice() {
    return (this.priceCents / 100).toFixed(2);
  }
}
```

#### 2. Module Pattern
- Separate concerns into modules
- ES6 imports/exports for dependency management
- Single responsibility principle

```javascript
// Importing dependencies
import { cart, saveToStorage } from '../data/cart.js';
import { products } from '../data/products.js';
```

#### 3. Factory Pattern
- Products created from JSON data
- Cart items generated dynamically

#### 4. Observer Pattern
- LocalStorage acts as event emitter for data changes
- DOM updates in response to state changes

### Data Flow

```
┌─────────────────┐
│   User Action   │
│  (Click, Input) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Event Handler  │
│  (JavaScript)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Update Data    │
│  (Data Layer)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Save to Storage │
│  (LocalStorage) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Re-render DOM  │
│  (JavaScript)   │
└─────────────────┘
```

---

## Key Components

### 1. Cart System (`data/cart.js`)
Manages shopping cart items:
- Add items with quantity
- Remove items
- Update quantities
- Calculate totals
- Persist to LocalStorage

```javascript
cart: [
  {
    productId: "product-id-123",
    quantity: 2,
    deliveryOptionId: "1"
  }
]
```

### 2. Product Class (`data/products.js`)
Represents individual products:
- Product properties (name, price, rating)
- Methods for formatting and retrieval
- Dynamic HTML generation
- Star rating calculations

### 3. Delivery Options (`data/deliveryOptions.js`)
Handles shipping options:
```javascript
deliveryOptions: [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0  // Free shipping
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 999  // $9.99
  }
]
```

### 4. Order Management (`data/orders.js`)
Stores placed orders:
```javascript
orders: [
  {
    id: "unique-order-id",
    orderTime: timestamp,
    totalCents: price,
    products: [{productId, quantity, deliveryOptionId}],
    estimatedDeliveryDate: "YYYY-MM-DD"
  }
]
```

### 5. Checkout Components
- **checkoutHeader.js**: Displays order quantity summary
- **order-summary.js**: Lists all items being ordered
- **payment-summary.js**: Calculates and displays totals

### 6. Utility Functions (`scripts/utils/money.js`)
Money formatting helper:
```javascript
formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}
```

---

## Data Persistence

### LocalStorage Implementation

All data is persisted using the **HTML5 LocalStorage API**:

```javascript
// Saving to storage
localStorage.setItem('cart', JSON.stringify(cart));

// Loading from storage
const savedCart = JSON.parse(localStorage.getItem('cart'));
```

### Data Stored Locally
1. **Cart**: Current shopping cart items
2. **Orders**: All placed orders with timestamps
3. **Delivery Preferences**: Selected delivery options

### Advantages
- No backend required
- Persistent across sessions
- ~5-10MB storage available
- Synchronous access (fast)

### Limitations
- Same origin only (domain-specific)
- Manual clearing needed
- No real backend sync

---

## Testing

### Test Structure

The project includes **Jasmine tests** for utility functions:

```bash
tests/
├── test.html          # Test runner
└── moneyTest.js       # Test cases
```

### Running Tests

```bash
1. Open tests/test.html in a browser
2. View test results and pass/fail status
3. Check browser console for detailed output
```

### Example Test
```javascript
// From moneyTest.js
describe('formatCurrency', () => {
  it('should format cents as dollars', () => {
    expect(formatCurrency(1095)).toBe('10.95');
  });
});
```

### Running the Test Suite

```bash
# Simply open in browser
tests/test.html

# All tests should pass
```

---

## Code Examples

### Example 1: Adding Item to Cart
```javascript
import { cart, saveToStorage } from '../data/cart.js';

function addToCart(productId) {
  let matchingItem = cart.find(item => item.productId === productId);
  
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }
  
  saveToStorage();
  updateCartQuantity();
}
```

### Example 2: Calculating Order Total
```javascript
function calculateTotal() {
  let subtotal = 0;
  
  cartItems.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    subtotal += product.priceCents * item.quantity;
  });
  
  const shippingCost = deliveryOption.priceCents;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;
  
  return {
    subtotal: formatCurrency(subtotal),
    shipping: formatCurrency(shippingCost),
    tax: formatCurrency(tax),
    total: formatCurrency(total)
  };
}
```

### Example 3: Dynamic Product HTML
```javascript
function renderProducts() {
  let html = '';
  
  products.forEach(product => {
    html += `
      <div class="product-container">
        <img src="${product.image}" alt="${product.name}">
        <div>${product.name}</div>
        <div>$${product.getPrice()}</div>
        <button onclick="addToCart('${product.id}')">
          Add to Cart
        </button>
      </div>
    `;
  });
  
  document.querySelector('.products-grid').innerHTML = html;
}
```

---

## File Descriptions

### HTML Pages
| File | Purpose |
|------|---------|
| `index.html` | Landing page - redirects to amazon.html |
| `amazon.html` | Main shopping catalog page |
| `checkout.html` | Checkout and payment page |
| `orders.html` | Order history and management |
| `tracking.html` | Order tracking by ID |

### JavaScript Core Modules
| File | Purpose |
|------|---------|
| `scripts/amazon.js` | Product catalog logic and rendering |
| `scripts/checkout.js` | Checkout page logic and order placement |
| `scripts/orders.js` | Order history display logic |
| `scripts/tracking.js` | Order tracking functionality |
| `data/cart.js` | Shopping cart management |
| `data/products.js` | Product class and catalog |
| `data/orders.js` | Order storage and retrieval |
| `data/deliveryOptions.js` | Delivery speed/cost definitions |
| `scripts/utils/money.js` | Currency formatting utilities |

### CSS Styling
| File | Purpose |
|------|---------|
| `styles/shared/general.css` | Global styles (colors, fonts, layout) |
| `styles/shared/amazon-header.css` | Header component styling |
| `styles/pages/amazon.css` | Product page specific styles |
| `styles/pages/checkout/` | Checkout page styles |
| `styles/pages/orders.css` | Orders page styles |
| `styles/pages/tracking.css` | Tracking page styles |

---

## Learning Objectives

This project demonstrates proficiency in:

JavaScript Fundamentals
- ES6+ syntax (arrow functions, destructuring, template literals)
- DOM manipulation and event handling
- Asynchronous operations and timing

Object-Oriented Programming
- Class definitions and inheritance
- Encapsulation and abstraction
- Method overriding and polymorphism

Data Structures
- Arrays and array methods (map, filter, find)
- Objects and JSON
- LocalStorage API

Web Development
- HTML5 semantic markup
- CSS3 (Grid, Flexbox, Media Queries)
- Responsive design principles
- Accessibility considerations

Software Architecture
- Module system and organization
- Separation of concerns
- Design patterns implementation

Testing
- Unit testing with Jasmine
- Test-driven development concepts
- Debugging techniques

---

## Contributing

To contribute to this project:

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/your-feature`
3. **Make your changes** and ensure tests pass
4. **Commit with clear messages**: `git commit -m "Add feature: description"`
5. **Push to branch**: `git push origin feature/your-feature`
6. **Open a Pull Request** with description of changes

### Code Style Guidelines
- Use meaningful variable names
- Write self-documenting code
- Add comments for complex logic
- Follow consistent indentation (2 spaces)
- Use const/let instead of var
- Keep functions small and focused

---

## Future Improvements

### Short-term Enhancements
- [ ] Add product search and filtering functionality
- [ ] Implement discount codes and promo system
- [ ] Add product reviews and ratings UI
- [ ] Email notification simulation
- [ ] Quantity adjustment in cart preview
- [ ] Save for later functionality

### Medium-term Features
- [ ] User authentication and accounts
- [ ] Wishlist management
- [ ] Product recommendations algorithm
- [ ] Multiple payment method support
- [ ] Inventory management
- [ ] Customer service chat

### Long-term Goals
- [ ] Backend server integration (Node.js/Express)
- [ ] Database implementation (MongoDB/PostgreSQL)
- [ ] Real payment processing (Stripe/PayPal)
- [ ] Admin dashboard for inventory
- [ ] Mobile app version (React Native)
- [ ] Advanced analytics and reporting
- [ ] Multi-language support (i18n)
- [ ] Performance optimization (lazy loading, caching)

### Technical Debt
- [ ] Add comprehensive error handling
- [ ] Implement form validation
- [ ] Optimize bundle size
- [ ] Add performance monitoring
- [ ] Improve security (XSS prevention, CSRF tokens)
- [ ] Implement rate limiting
- [ ] Add loading states and animations

---

## Support & Contact

For questions or issues:
1. Check existing issues in the repository
2. Review the code comments and documentation
3. Test in different browsers
4. Check browser console for errors

---

## License

This project is available for educational and personal use.

---

## Acknowledgments

- Inspired by Amazon's user interface and experience
- Built with vanilla JavaScript (no frameworks)

---

**Last Updated:** June 2026

**Happy Coding!**
