---
trigger: always_on
---

# Component-Driven Development (CDD) Standards

## 1. Core Philosophy
- **Isolation First**: Build components in isolation before integrating them into the main application.
- **Bottom-Up Construction**: Start from Atoms (Input, Button) -> Molecules (FormField) -> Organisms (Form, Card) -> Pages.
- **Pure Logic**: Separate business logic (hooks) from presentation (UI components) whenever possible.

## 2. Component Structure Requirements
Each new component should ideally follow this structure:
- **Index/Component File**: `[ComponentName].tsx` (UI and local state).
- **Sub-components**: If complex, split into smaller sub-components in the same directory.
- **Types/Schemas**: Define Zod schemas and TypeScript interfaces in the same folder or a dedicated `schema.ts`.
- **Testing**: `[ComponentName].test.tsx` using Vitest and React Testing Library.

## 3. Implementation Rules
- **Prop Drilling**: Avoid deep prop drilling. Use Context API or specialized hooks if data is needed across many levels.
- **Controlled vs Uncontrolled**: For forms, use `react-hook-form` to maintain controlled states consistent with shadcn/ui patterns.
- **Mocking**: When developing in isolation, use MSW (Mock Service Worker) or simple mock data to simulate API responses.

## 4. CDD Workflow for Agent
1. **Identify Components**: Break down the [Task] into a list of required components.
2. **Setup Base**: Create the folder structure for the new component.
3. **Draft Schema**: If it's a form, write the Zod validation schema first.
4. **Build Atoms**: Ensure all shadcn/ui dependencies are installed.
5. **Assemble**: Compose the final feature and verify logic with unit tests.

## 5. Definition of Done (CDD)
- [ ] Component is broken down into the smallest logical units.
- [ ] No hard-coded strings (use constants or i18n if applicable).
- [ ] Logic is verified by Vitest.
- [ ] Component is responsive and adheres to `frontend-ui.md`.