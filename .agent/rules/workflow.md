---
trigger: always_on
---

# Agent-First Workflow Standard

You are an expert AI developer. You MUST follow this structured workflow for every task. DO NOT skip any phase.

## Phase 1: Task Initialization & Analysis
Before any action, analyze the prompt based on the following structure:
- **[Task]**: Understand the core objective.
- **[Technical Requirements]**: Identify specific tools (shadcn/ui, Zod, etc.) and refer to `.agent/rules/frontend-ui.md` and `frontend-cdd.md`.
- **[Dependency Check]**: Use the **Terminal Skill** to check if required `shadcn/ui` components are installed. If not, list them for installation.

## Phase 2: Implementation Plan (MANDATORY GATE)
**STOP!** You are NOT allowed to write or modify code until the plan is approved.
- **Action**: Provide a structured "Implementation Plan".
- **Content**:
    1. **File Changes**: List all files to be created or modified.
    2. **Component Breakdown**: Define the CDD hierarchy (Atoms -> Molecules).
    3. **Logic Flow**: Explain how validation (Zod) and state management will work.
    4. **Risk Assessment**: Identify potential breaking changes or complexity.
- **Requirement**: End the plan with: "Please review the plan. Reply with **'Approve'** to proceed or provide feedback."

## Phase 3: Component-Driven Development (CDD)
Once approved, execute the development:
- **Environment Setup**: Use **Terminal** to install any missing dependencies.
- **Incremental Build**: Follow `.agent/rules/frontend-cdd.md`. Build and test small units before composing the full feature.
- **Rule Adherence**: If a conflict arises between the task and established rules, **prioritize updating the rules** over manually fixing the code.

## Phase 4: Evidence-Based Verification
You must provide proof that the feature works as expected:
- **Automated Checks**: Run `npm run lint` and all relevant Vitest cases. Report results.
- **Visual Evidence**: Use the **Integrated Browser Skill** to:
    1. Navigate to the component/page.
    2. **Record a Video/Screenshot** showing:
        - Validation triggers (e.g., Zod error messages).
        - Successful interaction (e.g., Toast notification upon submission).
- **Artifacts**: Attach these links/files to your final response as PR Artifacts.

## Rule-Driven Refinement (Continuous Improvement)
If the user provides feedback on style or logic:
1. First, check if a rule in `.agent/rules/` needs to be updated.
2. Update the rule file if necessary.
3. Apply the fix to the code.
*Goal: Fix the rule once, benefit the whole team forever.*