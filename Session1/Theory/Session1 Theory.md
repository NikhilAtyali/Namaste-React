## Namaste React Course by Akshay Saini
# _Chapter 01 - Inception_

## Q: What is Emmet?
A: Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.


## Q: Difference between a Library and Framework?
A: A library is a collection of packages that perform specific operations whereas a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.


## Q: What is CDN? Why do we use it?
A: A content delivery network (CDN) refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.

## Q: Why is React known as React?
A: React is named React because of its ability to react to changes in data.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name "React" was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
React is a JavaScript-based UI development library. Facebook and an open-source developer community run it.

## Q: What is crossorigin in script tag?
A: The `crossorigin` attribute is used in the `<script>` tag when including external scripts in a web page. It is specifically used for scripts loaded from different domains or origins. The attribute helps to control whether the browser should allow the loading of the script when the origin of the script does not match the origin of the document.

Here's how you might use it:

```html
<script src="https://example.com/script.js" crossorigin="anonymous"></script>
```

There are two possible values for the `crossorigin` attribute:

1. **anonymous**: This is the default value. When set to "anonymous," the browser will make a request for the script without sending any credentials (like cookies or HTTP authentication) along with the request. This is suitable for scripts that are intended to be publicly accessible and don't require authentication.

2. **use-credentials**: When set to "use-credentials," the browser includes credentials with the request, such as cookies or HTTP authentication. This is used when the script requires access to sensitive information on the server and the server is configured to allow credentials to be sent.

Including the `crossorigin` attribute is often necessary to prevent cross-origin issues, particularly when working with features like CORS (Cross-Origin Resource Sharing). It's a security feature to ensure that scripts are only loaded from trusted sources.
# _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: What is CORS
A: **CORS (Cross-Origin Resource Sharing):**

- **Purpose:** Security feature in web browsers to control cross-origin HTTP requests.
  
- **Same-Origin Policy:** Normally restricts requests to the same domain for security.
  
- **Implementation:** Servers include specific HTTP headers in responses.
  
- **Headers:**
  - **Origin Header:** Sent by the browser, indicating the origin of the requesting site.
  - **Access-Control-Allow-Origin Header:** Specifies which origins are permitted to access the resource.

- **Additional Headers:**
  - **Access-Control-Allow-Methods:** Specifies allowed HTTP methods.
  - **Access-Control-Allow-Headers:** Specifies allowed headers.
  - **Access-Control-Allow-Credentials:** Indicates whether credentials should be included.
  - **Access-Control-Expose-Headers:** Specifies which headers should be exposed to the response.

- **Usage:** Essential for secure cross-origin communication, common in API interactions.

- **Example:**
  ```
  Origin: https://example.com
  Access-Control-Allow-Origin: https://example.com
  ```

CORS facilitates a balance between security and the need for cross-origin data exchange in web development.


## Q: What is difference between React and ReactDOM?
A: `React` and `ReactDOM` are two different packages in the React ecosystem, each serving a specific purpose:

1. **React:**
   - **Purpose:** The `react` package is the core library for building user interfaces in React.
   - **Usage:** It provides the fundamental functionality of React, including components, JSX (JavaScript XML) syntax, and the virtual DOM (Document Object Model).
   - **Example:**
     ```jsx
     import React from 'react';

     const MyComponent = () => {
       return <div>Hello, React!</div>;
     };
     ```

2. **ReactDOM:**
   - **Purpose:** The `react-dom` package is responsible for rendering React components in the DOM (Document Object Model).
   - **Usage:** It provides methods for mounting React components into the DOM, updating them, and handling events.
   - **Example:**
     ```jsx
     import React from 'react';
     import ReactDOM from 'react-dom';

     const element = <div>Hello, React!</div>;

     // Render the React component into the DOM
     ReactDOM.render(element, document.getElementById('root'));
     ```
   - **Note:** While `react-dom` is commonly used for web applications, there are other renderers like `react-native` for mobile applications.

In summary, `React` is the core library for building UI components and managing their state, while `ReactDOM` is a specific package within the React ecosystem that focuses on the interaction between React and the DOM. When building web applications, you typically include both `react` and `react-dom` to leverage React's core features and to render components in the browser's DOM.

## Q: What is difference between react.development.js and react.production.js files via CDN?
: **React Development vs. Production Files via CDN:**

1. **Development Version (`react.development.js`):**
   - **Size:** Larger file.
   - **Minification:** Not minified.
   - **Error Messages:** Detailed, with component stack traces.
   - **Performance:** Includes checks for potential issues.
   - **Debugging:** Optimized for easy debugging (e.g., React DevTools).

   Example CDN link:
   ```html
   <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
   ```

2. **Production Version (`react.production.js`):**
   - **Size:** Smaller, minified, and often compressed.
   - **Error Messages:** Minimized for reduced bundle size.
   - **Performance:** Stripped of development-only checks.
   - **Debugging:** Emphasizes runtime performance over human readability.

   Example CDN link:
   ```html
   <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
   ```

**Best Practice:**
- **Development:** Use `react.development.js` for debugging and development.
- **Production:** Use `react.production.js` for optimized performance and reduced file size in production environments.

## Q: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process ) and don’t wait for anything.async scripts load in the background and run when ready. The DOM and other scripts don’t wait for them, and they don’t wait for anything.

Defer - means execute code after it's downloaded and browser finished DOM construction and rendering process.
The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
`async` and `defer` are attributes used in the `<script>` tag in HTML to control how scripts are downloaded and executed on a web page.

1. **`async`:**
   - **Purpose:** The `async` attribute is used to indicate that the script can be executed asynchronously. This means that the script will be downloaded in the background while the HTML document continues to be parsed, and the script will execute as soon as it is downloaded, even if the HTML parsing is not yet complete.
   - **Execution Timing:** The script will execute as soon as it's available, potentially before the HTML document is fully parsed.
   - **Use Case:** Useful for scripts that don't depend on the DOM or other scripts and can run independently.

   Example:
   ```html
   <script async src="example.js"></script>
   ```

2. **`defer`:**
   - **Purpose:** The `defer` attribute is used to indicate that the script should be executed after the HTML document has been fully parsed. It ensures that the script will be executed in the order they appear in the document.
   - **Execution Timing:** The script will be executed in order, after the HTML parsing is complete but before the `DOMContentLoaded` event.
   - **Use Case:** Useful when script execution depends on the DOM structure or when scripts need to be executed in a specific order.

   Example:
   ```html
   <script defer src="example.js"></script>
   ```

**Usage Note:**
- If a script has both `async` and `defer` attributes, the `async` attribute takes precedence, and the script will be executed asynchronously.
- It's common to use `defer` for scripts that need access to the DOM, and `async` for scripts that can run independently and don't rely on the DOM.

**Example:**
```html
<script defer src="script1.js"></script>
<script async src="script2.js"></script>
```

In this example, `script1.js` will be executed in order after the HTML parsing is complete, while `script2.js` will be downloaded asynchronously and executed as soon as it's available, possibly before `script1.js` or the HTML parsing is complete.