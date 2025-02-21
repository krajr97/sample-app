# SampleApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Vercel JSON

This ensures that Angular routes work correctly on Vercel.

## Design Architecture

-- index.ts for simplifying imports in each folder or module.

src
├── app
│   ├── core                   # Global services, guards, interceptors, and utilities
│   │   ├── guards             # Route guards (AuthGuard, RoleGuard, etc.)
│   │   ├── interceptors       # HTTP interceptors (AuthInterceptor, ErrorInterceptor)
│   │   ├── services           # Global/shared services (AuthService, ApiService)
│   │   ├── models             # TypeScript interfaces/types (User, Product, Order)
│   │   ├── utils              # Utility functions/helpers
│   │   ├── config.ts          # Global constants & environment-specific settings
│   │   ├── core.config.ts     # Core providers (provideHttpClient, provideAnimations)
│   │   └── index.ts
│   ├── shared                 # Reusable UI components, directives, and pipes
│   │   ├── components         # Common UI components (Button, Modal, Card)
│   │   ├── directives         # Custom directives (DebounceClick, LazyLoad)
│   │   ├── pipes              # Custom pipes (CurrencyFormat, DateFormat)
│   │   ├── shared.config.ts   # Shared providers (if needed)
│   │   └── index.ts
│   ├── features               # Feature modules (each feature has its own self-contained module)
│   │   ├── home               # Home feature
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   └── index.ts
│   │   ├── shop               # Shop feature (products, categories)
│   │   │   ├── shop.component.ts
│   │   │   ├── shop.component.html
│   │   │   ├── shop.component.scss
│   │   │   └── index.ts
│   │   ├── cart               # Shopping cart feature
│   │   ├── checkout           # Checkout process
│   │   ├── auth               # Authentication (Login, Register)
│   │   ├── account            # User account (Profile, Orders)
│   │   ├── admin              # Admin dashboard
│   │   ├── features.config.ts # Feature-level configurations
│   │   └── index.ts
│   ├── layout                 # Global layout components (Navbar, Sidebar, Footer)
│   │   ├── header             # Top Navbar
│   │   ├── footer             # Footer
│   │   ├── sidebar            # Sidebar (if applicable)
│   │   ├── layout.config.ts   # Provide layout-level services/components
│   │   └── index.ts
│   ├── styles                 # Global styles and themes
│   │   ├── themes             # Theme files (dark, light)
│   │   ├── mixins             # SCSS mixins
│   │   ├── variables.scss
│   │   ├── typography.scss
│   │   ├── animations.scss
│   │   └── global.scss
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.config.ts          # Application-wide providers
│   ├── app.routes.ts          # Application routes (Standalone)
│   ├── primeng-imports.ts     # PrimeNG imports
│   └── index.ts
├── assets                     # Static assets (images, fonts, icons)
│   ├── images
│   ├── icons
│   ├── fonts
│   ├── lottie                 # Lottie animations (if needed)
│   └── svg                    # SVG icons
├── environments               # Environment configurations
│   ├── environment.ts
│   ├── environment.prod.ts
│   ├── environment.staging.ts
│   └── environment.local.ts
├── index.html
├── main.ts                    # Bootstrap the standalone app
├── styles.scss                 # Global styles entry point
└── polyfills.ts