---
trigger: always_on
---

# Frontend UI & UX Standards (shadcn/ui Focus)

## 1. UI Architecture Principle
- **Component First**: All UI must be built using shadcn/ui components. If a component doesn't exist in the project, use the terminal to add it via `npx shadcn-ui@latest add [component]`.
- **Atomic Design**: Build small, reusable UI wrappers before integrating them into large forms or pages.
- **Consistency**: Maintain a unified look and feel by strictly adhering to the `tailwind.config.js` and CSS variables.

## 2. Shadcn/ui Implementation Rules
- **Direct Usage**: Always prefer standard shadcn/ui components over custom HTML/CSS.
- **Form Integration**: 
    - Use the `react-hook-form` + `zod` integration pattern provided by shadcn/ui.
    - Always include `<FormMessage />` for every input field to display Zod validation errors.
- **Interactive Feedback**:
    - **Buttons**: Must show a "loading" state (spinner or disabled) during API calls or form submission.
    - **Toasts**: Every successful action (e.g., "Password Changed") or critical error must trigger a `toast()` notification.

## 3. Visual & UX Standards
- **Validation UI**:
    - Errors must appear immediately after field validation fails (on blur or change, as per config).
    - Use the destructive color (red) for error messages and border highlights.
- **Responsive Design**: All components must be mobile-first and tested for responsiveness using Tailwind CSS classes.
- **Accessibility (A11y)**: Ensure all interactive elements have proper `aria-labels` and keyboard navigation support (built-in with shadcn/ui).

## 4. Coding Patterns
- **Tailwind Class Ordering**: Use a consistent order for Tailwind classes (e.g., Layout -> Box Model -> Typography -> Visuals).
- **Customization**: If a shadcn component needs modification, do it via the `cn()` utility or by wrapping it. Do not rewrite the base component unless absolutely necessary.
- **Icons**: Exclusively use `lucide-react` icons to match the shadcn aesthetic.

## 5. Verification Checklist for Agent
- [ ] Are all components pulled from shadcn/ui?
- [ ] Does the form use Zod for validation?
- [ ] Is there a Toast or feedback mechanism for the user?
- [ ] Does the UI look clean and consistent on both mobile and desktop?