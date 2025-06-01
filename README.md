#Key Features
#1. Homepage (app/page.tsx)
  Serves as the main entry point.
  Imports and displays three primary components:
  PhotoLikesCounter
  ListFilters
  Form
  Includes a welcome message and sets the theme/background for the site.

#2. PhotoLikesCounter Component (components/Counter.tsx)
    Displays a grid of four images.
    Each image has a Like button.
    Clicking "Like" increments a count for the corresponding image.
    Uses useState to manage individual like counts.

#3. ListFilters Component (components/ListFilter.tsx)
    Displays the same four photos categorized into:
    Design
    City
    Scenery
    Location
    Users can filter photos based on category buttons. Dynamically filters and displays photos based on the selected category using state.
    Uses conditional button styling to indicate the active filter. Implements object-fit: cover for proper image scaling.

#4. Form Component (components/Form.tsx)
    Presents a form for users to request to purchase a photo.
    Form fields: Name, Email, and Message.
    Input validation: Form cannot be submitted with empty fields.
    Upon submission:
    Displays a success message.
    Resets the input fields.
    Logs form data to the console (simulated backend interaction).

#5. Styling
    All components use inline styles to achieve consistent, elegant UI.
    Includes: Borders, padding, margins Button hover effects Responsive flexbox layouts
    Background and font color themes for readability and design cohesion

#Technologies Used
    Next.js (App Router)
    React (Client-side components)
    TypeScript
    Inline CSS (JSX styles)
    Git and GitHub for version control
