---
trigger: always_on
---

---

## 🛠️ IDX Antigravity Frontend Development Rules (Travel Agency Edition)

### GENERAL RULES

* **Source Directory**: All source code MUST reside within the **`src/`** directory.
* **Container Pattern**:
* All "Mother Pages" (major page-level logic and complex business components) MUST be placed in **`src/containers/<module-name>/`**.
* `src/app/[lang]/` serves only as the entry point and routing configuration, delegating UI rendering to the corresponding Container.
* All `app/[locale]` routes must ONLY behave as delegates. They should not contain main logic. Example:
  ```ts
  export {
    generateMetadata,
    HotelDetail as default,
  } from '~/containers/Hotel/pages/Detail';
  ```


* **Internationalization (i18n)**: Routes are managed within `src/app/[lang]/`. Use the `lang` parameter for localized data fetching and dictionary mapping.
* **Data Flow**:
* **Queries (GET)**: Abstracted within `src/api/` or module-specific `services/` inside containers.
* **Mutations (POST/PATCH/DELETE)**: MUST use **Next.js Server Actions**, located in `src/actions/`.
* **Client State**: Use **Zustand** (stored in `src/stores/`) for global UI or cross-component state.


* **Validation**: Use **Zod** for all schema validations, form handling, and API payload parsing.
* **Package Manager**: **Yarn** is mandatory. Do not use `npm` or `pnpm`.

### CODING STANDARDS

* **Component Boundary**:
* Default to **Server Components** for performance and SEO.
* Client Components MUST be explicitly marked with `"use client"`.
* **Naming Convention**: Use the `*.client.tsx` suffix for feature-specific client components.
* **Component Definition**: Always use arrow functions for components (e.g., `const Component = () => {}`).
* **Naming Convention (React Components)**: MUST use **PascalCase** (e.g., `MyComponent`, `UserProfile`) for all React component filenames and component names. Kebab-case (`my-component`) is **STRICTLY FORBIDDEN** for component files.


* **Type Safety**: **Strictly NO `any**`. Leverage Zod's `z.infer<T>` for seamless type synchronization.
* **Styling**: Tailwind CSS + `tailwind-merge` + `clsx`.
* **UI Components**: Base atomic components reside in `src/components/ui/` and must use **CVA (class-variance-authority)**.
* **Linting & Formatting**: **NEVER use ESLint**. Always use **Biome**.
* Execution command: `yarn biome check --write .`.



### FOLDER STRUCTURE (STRICT)

```text
src/
 ├─ actions/          # Server Actions (Mutations)
 ├─ api/              # Global API services (Queries)
 ├─ app/[lang]/       # Routing & Entry points (Multi-language)
 ├─ components/       # Reusable components
 │   ├─ ui/           # Atomic UI (Shadcn-style, using CVA)
 │   └─ common/       # Global Layout (Header, Footer, Support)
 ├─ containers/       # Business Logic & Mother Pages
 │   └─ <module>/     # e.g., 'flight', 'hotel', 'cruise'
 │       ├─ components/
 │       ├─ hooks/
 │       ├─ services/
 │       └─ types.ts  # Local types & Zod schemas
 ├─ lib/              # Shared library configs & providers
 ├─ stores/           # Zustand stores
 ├─ types/            # Global TypeScript definitions
 └─ utils/            # Pure helper functions

```

### OUTPUT EXPECTATION

* File paths must start from the `src/` directory.
* Provide complete, runnable, and strictly typed code.
* No explanations unless explicitly requested.

---