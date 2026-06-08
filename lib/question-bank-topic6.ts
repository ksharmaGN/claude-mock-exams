export interface Question {
  week?: number;
  domain: string;
  topic: string;
  question: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  correct_answer: string;
  explanation: string;
  difficulty?: string;
}

// Topic 6: Plan Mode & CI/CD (101 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 26 D (RANDOMLY SHUFFLED)

export const topic6Questions: Question[] = [
  // Question 501 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your team wants Claude to refactor a 10-file authentication module spanning user login, session management, and OAuth integration. Before writing code, you enable Plan Mode to:',
    option_a: 'Execute incremental changes across files for faster iteration cycles',
    option_b: 'Cache analysis results for subsequent planning sessions across the team',
    option_c: 'Analyze dependencies, draft a coordinated plan, and get approval before modifying files',
    option_d: 'Minimize token usage by skipping read-only exploration steps',
    correct_answer: 'C',
    explanation: 'Plan Mode is a read-only exploration phase where Claude analyzes the codebase, drafts a plan, and waits for approval before making any changes. It separates thinking from doing through the Explore → Plan → Implement → Commit workflow.',
    difficulty: 'easy'
  },

  // Question 502 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Mid-refactor on a complex payment processing module, you realize you should have used Plan Mode. What keyboard shortcut activates it without restarting your session?',
    option_a: 'Cmd+P to open the planning command palette interface',
    option_b: 'Shift+Tab to toggle plan mode on and off dynamically',
    option_c: 'Alt+Enter to enter review mode before continuing edits',
    option_d: 'Ctrl+Shift+R to refresh and restart with planning enabled',
    correct_answer: 'B',
    explanation: 'Shift+Tab toggles Plan Mode on and off. You can also activate it with the /plan command or claude --permission-mode plan from the CLI.',
    difficulty: 'easy'
  },

  // Question 503 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'During Plan Mode exploration of your microservices architecture, Claude attempts to analyze 15 service files. Which tools are available for this read-only exploration phase?',
    option_a: 'Read and Grep only for safer file system access',
    option_b: 'All standard tools to enable comprehensive analysis capabilities',
    option_c: 'Bash commands exclusively for maximum shell integration power',
    option_d: 'Read, Grep, Glob, and Bash but NOT Write or Edit',
    correct_answer: 'D',
    explanation: 'Plan Mode is read-only, so Claude can use Read, Grep, Glob, and Bash for exploration, but Write and Edit are blocked at the tool level to prevent modifications during planning.',
    difficulty: 'easy'
  },

  // Question 504 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What are the four phases of the Plan Mode workflow in order?',
    option_a: 'Explore → Plan → Implement → Commit',
    option_b: 'Plan → Explore → Review → Execute',
    option_c: 'Analyze → Draft → Validate → Deploy',
    option_d: 'Scan → Strategize → Build → Push',
    correct_answer: 'A',
    explanation: 'The correct workflow is: 1) Explore (read relevant code), 2) Plan (create implementation plan), 3) Implement (execute the plan), 4) Commit (create commit and optional PR).',
    difficulty: 'easy'
  },

  // Question 505 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your Plan Mode session generated a 20-step plan for database migration. Step 15 looks risky and you want to reorder steps 10-12. How do you edit the plan before execution?',
    option_a: 'Type /modify-plan in chat to trigger inline editing mode',
    option_b: 'Provide feedback in chat describing desired reordering operations',
    option_c: 'Press Ctrl+G to open in text editor, then annotate/reorder/delete steps',
    option_d: 'Use the --edit-plan CLI flag for command-line plan editing',
    correct_answer: 'C',
    explanation: 'You can edit plans by pressing Ctrl+G to open them in a text editor, where you can annotate, reorder, or delete steps before execution.',
    difficulty: 'medium'
  },

  // Question 506 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the "80/20 principle" in Plan Mode?',
    option_a: 'Spend 80% of effort on planning and 20% on supervising execution',
    option_b: 'Use plan mode for 80% of projects, skip for trivial 20%',
    option_c: 'Allocate 80% budget to exploration phase, 20% to implementation',
    option_d: 'Plan covers 80% of changes, remaining 20% handled ad-hoc',
    correct_answer: 'A',
    explanation: 'The 80/20 principle means investing 80% of your effort in thorough planning and only 20% in supervising the execution, which results in faster and more accurate implementation.',
    difficulty: 'medium'
  },

  // Question 507 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When should you use the ExitPlanMode tool?',
    option_a: 'For comprehensive research and exploratory analysis tasks',
    option_b: 'When completing file searches and documentation reviews',
    option_c: 'For understanding complex architectural patterns and dependencies',
    option_d: 'When the task requires planning implementation steps for code writing tasks',
    correct_answer: 'D',
    explanation: 'ExitPlanMode should only be used when the task requires planning implementation steps that will result in code changes. Don\'t use it for research, understanding, or file searching tasks.',
    difficulty: 'medium'
  },

  // Question 508 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does the ExitPlanMode tool inherently do?',
    option_a: 'Transitions immediately to implementation without additional confirmation',
    option_b: 'Requests user approval for the plan',
    option_c: 'Saves the current plan to file system for future reference',
    option_d: 'Enables write permissions for all subsequent tool calls',
    correct_answer: 'B',
    explanation: 'ExitPlanMode inherently requests user approval, so you should not use AskUserQuestion to additionally ask "Is this plan okay?" The approval is built into the tool.',
    difficulty: 'medium'
  },

  // Question 509 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your sprint includes: (1) fixing a typo in README, (2) renaming userId variable, (3) refactoring 10-file OAuth2 authentication with database migrations, (4) adding console.log to debug function. Which task REQUIRES Plan Mode?',
    option_a: 'Task 1 as documentation changes affect team understanding',
    option_b: 'Task 2 since variable renames can break multiple files',
    option_c: 'Task 3: Refactoring complex multi-file authentication system',
    option_d: 'Task 4 to ensure proper logging instrumentation placement',
    correct_answer: 'C',
    explanation: 'Complex multi-file changes like refactoring an authentication system benefit most from Plan Mode. Simple tasks like typos, variable renames, or adding log statements should skip planning for efficiency.',
    difficulty: 'easy'
  },

  // Question 510 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When should you SKIP Plan Mode?',
    option_a: 'When you can describe the required diff in one sentence and the scope is clear',
    option_b: 'When project timelines are tight and delivery speed is critical',
    option_c: 'When working with familiar patterns you have implemented before',
    option_d: 'When changes affect fewer than three files in the codebase',
    correct_answer: 'A',
    explanation: 'Skip Plan Mode for clear, simple changes that can be described in one sentence. Use it for unfamiliar code, multi-file changes, and security audits where planning prevents mistakes.',
    difficulty: 'medium'
  },

  // Question 511 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the main benefit of the Explore phase in Plan Mode?',
    option_a: 'Generates comprehensive code modification proposals for review',
    option_b: 'Creates detailed file system mapping for future operations',
    option_c: 'Validates existing code quality before starting implementation',
    option_d: 'Allows understanding the current state before modifications without making changes',
    correct_answer: 'D',
    explanation: 'The Explore phase is read-only and allows Claude to understand the current state of the code before any modifications. This prevents solving the wrong problem.',
    difficulty: 'easy'
  },

  // Question 512 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which phases of the Plan Mode workflow are described as "cheapest in tokens, most valuable in outcome"?',
    option_a: 'Plan and Implement as they directly produce code changes',
    option_b: 'Explore and Plan',
    option_c: 'Implement and Commit since they finalize deliverable work',
    option_d: 'Explore and Commit as bookends of the complete workflow',
    correct_answer: 'B',
    explanation: 'The Explore and Plan phases (phases 1 & 2) are the cheapest in tokens but most valuable in outcome because they prevent costly mistakes during implementation.',
    difficulty: 'medium'
  },

  // Question 513 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'DevOps team wants to add automated PR reviews to your GitHub Actions workflow. To integrate Claude Code into .github/workflows/pr-review.yml, use:',
    option_a: 'actions/claude-code-review@latest for official integration',
    option_b: 'anthropic/claude-ci-tools@v1 for complete CI/CD suite',
    option_c: 'anthropics/claude-code-action@v1',
    option_d: 'github/claude-integration@v1 via GitHub marketplace',
    correct_answer: 'C',
    explanation: 'The official GitHub Action for Claude Code is anthropics/claude-code-action@v1, which should be added to your .github/workflows/ directory.',
    difficulty: 'easy'
  },

  // Question 514 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Security audit found your ANTHROPIC_API_KEY hardcoded in .github/workflows/review.yml, visible in public commit history. This caused $5,000 in unauthorized API usage. Prevent this by storing the key:',
    option_a: 'As a repository secret (encrypted, not in version control)',
    option_b: 'In environment variables file (.env) excluded via .gitignore',
    option_c: 'Using GitHub Actions encrypted configuration store',
    option_d: 'In workflow-level environment configuration section',
    correct_answer: 'A',
    explanation: 'The ANTHROPIC_API_KEY should be stored as a repository secret for security. Never hardcode it in YAML files or expose it publicly.',
    difficulty: 'easy'
  },

  // Question 515 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which GitHub events are commonly used to trigger Claude Code in CI/CD?',
    option_a: 'pull_request [opened, reopened] for new code submissions',
    option_b: 'workflow_dispatch and schedule for manual and timed runs',
    option_c: 'push [main, develop] for branch-specific automation',
    option_d: 'pull_request [opened, synchronize], issue_comment, and push',
    correct_answer: 'D',
    explanation: 'Claude Code can be triggered on multiple events: pull_request (opened, synchronize), issue_comment, and push events, depending on the use case.',
    difficulty: 'medium'
  },

  // Question 516 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the purpose of CLAUDE.md in CI/CD workflows?',
    option_a: 'Stores workflow configuration and execution state between runs',
    option_b: 'Provides context automatically pulled into Claude\'s context in CI/CD',
    option_c: 'Defines repository-specific prompts for automated code generation',
    option_d: 'Contains team coding standards enforced during reviews',
    correct_answer: 'B',
    explanation: 'CLAUDE.md is automatically pulled into Claude\'s context during CI/CD runs, providing project-specific instructions and context without cluttering workflow files.',
    difficulty: 'medium'
  },

  // Question 517 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What flag should you use for headless/automation mode in Claude Code?',
    option_a: 'claude --batch for non-interactive batch processing',
    option_b: 'claude --silent to suppress all interactive prompts',
    option_c: 'claude -p',
    option_d: 'claude --headless for automated pipeline integration',
    correct_answer: 'C',
    explanation: 'Use claude -p for headless mode in automation and scripting contexts, including CI/CD pipelines.',
    difficulty: 'easy'
  },

  // Question 518 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which permissions are required in GitHub Actions workflow YAML for Claude Code?',
    option_a: 'pull-requests: write and contents: write',
    option_b: 'issues: write and actions: read for full integration',
    option_c: 'repository: write for comprehensive access across resources',
    option_d: 'workflows: write and checks: write for status reporting',
    correct_answer: 'A',
    explanation: 'Claude Code needs pull-requests: write and contents: write permissions to comment on PRs and make code changes in GitHub Actions.',
    difficulty: 'medium'
  },

  // Question 519 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is a best practice for prompts in CI/CD workflows?',
    option_a: 'Use concise prompts to minimize processing time per request',
    option_b: 'Standardize prompts across all repositories for consistency',
    option_c: 'Leverage template prompts to reduce maintenance overhead',
    option_d: 'Be specific - vague prompts lead to generic feedback, specific prompts yield useful results',
    correct_answer: 'D',
    explanation: 'Specific prompts in CI/CD produce useful, targeted results. Vague prompts result in generic feedback that provides little value.',
    difficulty: 'easy'
  },

  // Question 520 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'PR reviews in your GitHub Actions workflow are costing $50 per review due to excessive API calls. To reduce costs while maintaining quality, configure --max-turns to:',
    option_a: '2-3 turns for rapid feedback with minimal token usage',
    option_b: '5-10 turns (balanced cost and thoroughness)',
    option_c: '15-20 turns for comprehensive multi-pass analysis',
    option_d: '1-2 turns focusing on critical issues only',
    correct_answer: 'B',
    explanation: 'For PR reviews, 5-10 turns is recommended to balance thoroughness with cost management. This prevents runaway costs while allowing adequate analysis.',
    difficulty: 'medium'
  },

  // Question 521 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your CI/CD pipeline runs 200 PR reviews per week, each costing $8 with Opus. Monthly costs are $6,400. To reduce costs while maintaining quality, switch to:',
    option_a: 'Haiku for fast initial screening, escalating to Opus',
    option_b: 'Custom fine-tuned models for domain-specific review patterns',
    option_c: 'Use Sonnet instead of Opus for cost management (~50% savings)',
    option_d: 'Batch processing during off-peak hours for discounted rates',
    correct_answer: 'C',
    explanation: 'Sonnet is recommended over Opus for CI/CD to manage costs while still providing high-quality analysis. Opus should be reserved for complex tasks requiring maximum capability.',
    difficulty: 'easy'
  },

  // Question 522 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What error handling setting helps prevent CI/CD pipeline failures?',
    option_a: 'continue-on-error: true',
    option_b: 'fail-fast: false to allow other jobs to complete',
    option_c: 'allow-failures: true for non-critical validation steps',
    option_d: 'retry-on-error: 3 to handle transient failures',
    correct_answer: 'A',
    explanation: 'Using continue-on-error: true in workflow YAML allows the pipeline to continue even if Claude Code encounters an error, preventing complete pipeline failures.',
    difficulty: 'medium'
  },

  // Question 523 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Production deployment failed last night when a Claude Code GitHub Action ran for 3 hours analyzing a 50-file PR, costing $300 in API calls. Prevent this by:',
    option_a: 'Implementing file count limits before triggering Claude reviews',
    option_b: 'Splitting large PRs into smaller reviewable chunks automatically',
    option_c: 'Using faster models for initial screening of large changesets',
    option_d: 'Set timeout-minutes: 15 to prevent runaway processes and control costs',
    correct_answer: 'D',
    explanation: 'Setting timeout-minutes prevents runaway processes that could consume excessive resources and generate unexpected costs in CI/CD environments.',
    difficulty: 'medium'
  },

  // Question 524 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is a common use case for Claude Code in CI/CD?',
    option_a: 'Automated deployment orchestration across staging environments',
    option_b: 'Automated PR reviews as a multi-layered quality gate',
    option_c: 'Dynamic infrastructure provisioning based on code changes',
    option_d: 'Continuous integration test generation and execution',
    correct_answer: 'B',
    explanation: 'Claude Code is used for automated PR reviews as an additional quality gate alongside linting and testing, not as a replacement for human review.',
    difficulty: 'easy'
  },

  // Question 525 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which statement about CI-based Claude Code is correct?',
    option_a: 'Provides primary quality assurance replacing manual processes',
    option_b: 'Serves as the final approval gate before production deployment',
    option_c: 'It is NOT a replacement for human review but an additional multi-layered quality gate',
    option_d: 'Functions as the authoritative source for code standards enforcement',
    correct_answer: 'C',
    explanation: 'CI-based Claude Code is explicitly NOT a replacement for human review. It serves as an additional quality gate alongside linting, testing, and human oversight.',
    difficulty: 'easy'
  },

  // Question 526 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the recommended approach for adopting Claude Code in CI/CD?',
    option_a: 'Start small with basic PR review (5 minutes setup), then add features incrementally',
    option_b: 'Deploy comprehensive review framework covering all quality dimensions',
    option_c: 'Begin with complex security scanning before simpler checks',
    option_d: 'Integrate across all repositories simultaneously for consistency',
    correct_answer: 'A',
    explanation: 'The best practice is to start small with basic PR review (about 5 minutes to set up), then incrementally add features like security scanning and test generation.',
    difficulty: 'easy'
  },

  // Question 527 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What can you automate with Claude Code using issue_comment triggers?',
    option_a: 'Automatic issue categorization and priority assignment',
    option_b: 'Dynamic issue template generation based on project context',
    option_c: 'Scheduled issue cleanup and archival workflows',
    option_d: 'Issue-to-PR automation for small tasks',
    correct_answer: 'D',
    explanation: 'Using issue_comment triggers, you can automate converting small issues into PRs, where Claude Code reads the issue, implements the change, and creates a PR.',
    difficulty: 'medium'
  },

  // Question 528 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which security practice is important for Claude Code CI/CD?',
    option_a: 'Uniform security policies applied across all environments',
    option_b: 'Use repository-specific configs and minimum required permissions',
    option_c: 'Centralized credential management for simplified administration',
    option_d: 'Automated permission escalation for critical workflows',
    correct_answer: 'B',
    explanation: 'Security best practices include using repository-specific configurations and granting only the minimum required permissions. Never share API keys or grant excessive permissions.',
    difficulty: 'medium'
  },

  // Question 529 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is test generation automation in Claude Code CI/CD?',
    option_a: 'Executing existing test suites with enhanced coverage reporting',
    option_b: 'Optimizing test execution order for faster feedback loops',
    option_c: 'Automatically generating tests for coverage gaps',
    option_d: 'Migrating tests between testing frameworks automatically',
    correct_answer: 'C',
    explanation: 'Test generation automation uses Claude Code to identify coverage gaps and automatically generate tests to fill those gaps, improving overall test coverage.',
    difficulty: 'easy'
  },

  // Question 530 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How can Claude Code help with release notes?',
    option_a: 'Automating release notes generation from commit history and PRs',
    option_b: 'Validating semantic versioning compliance across releases',
    option_c: 'Generating changelog entries from issue tracker integration',
    option_d: 'Creating release branch protection rule configurations',
    correct_answer: 'A',
    explanation: 'Claude Code can automate release notes generation by analyzing commit history and PRs to create comprehensive, well-formatted release documentation.',
    difficulty: 'easy'
  },

  // Question 531 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What slash command is commonly used for security audits in CI/CD?',
    option_a: '/audit-security for comprehensive vulnerability scanning',
    option_b: '/scan-dependencies for third-party library analysis',
    option_c: '/check-compliance for regulatory requirement validation',
    option_d: '/security-review',
    correct_answer: 'D',
    explanation: 'The /security-review slash command is commonly used to trigger security audits in CI/CD workflows, analyzing code for security vulnerabilities.',
    difficulty: 'easy'
  },

  // Question 532 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In Plan Mode, what happens during the Implement phase?',
    option_a: 'Validates proposed changes against project constraints',
    option_b: 'Claude executes the plan created in the Plan phase',
    option_c: 'Generates detailed implementation documentation',
    option_d: 'Prepares file system for upcoming modifications',
    correct_answer: 'B',
    explanation: 'During the Implement phase, Claude executes the plan that was created and approved in the Plan phase. This execution is faster and more accurate because of the context gathered during planning.',
    difficulty: 'easy'
  },

  // Question 533 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why is Plan Mode particularly valuable for unfamiliar code?',
    option_a: 'Reduces cognitive load through automated code comprehension',
    option_b: 'Generates comprehensive documentation during exploration',
    option_c: 'Allows thorough exploration before changes, preventing mistakes in unknown codebases',
    option_d: 'Creates dependency graphs for easier navigation',
    correct_answer: 'C',
    explanation: 'Plan Mode is especially valuable for unfamiliar code because the Explore phase allows thorough understanding before making changes, preventing costly mistakes in unknown codebases.',
    difficulty: 'medium'
  },

  // Question 534 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the CLI command to activate Plan Mode from terminal?',
    option_a: 'claude --permission-mode plan',
    option_b: 'claude plan --interactive for terminal-based planning',
    option_c: 'claude --enable-planning for persistent planning mode',
    option_d: 'claude mode:plan for shortened command syntax',
    correct_answer: 'A',
    explanation: 'The CLI command to activate Plan Mode is claude --permission-mode plan. You can also use Shift+Tab in the UI or the /plan command.',
    difficulty: 'medium'
  },

  // Question 535 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which of these is NOT a valid reason to use Plan Mode?',
    option_a: 'Multi-repository changes requiring coordination',
    option_b: 'Architectural refactoring affecting core systems',
    option_c: 'Performance optimization requiring profiling analysis',
    option_d: 'Fixing a simple typo in documentation',
    correct_answer: 'D',
    explanation: 'Plan Mode should be skipped for simple tasks like fixing typos. It\'s valuable for complex planning, exploration, and security audits where the cost of mistakes is high.',
    difficulty: 'easy'
  },

  // Question 536 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does ExitPlanMode signal to Claude Code?',
    option_a: 'Saves the plan for later execution at user discretion',
    option_b: 'To transition from planning to implementation with user approval',
    option_c: 'Archives the planning session for audit trail purposes',
    option_d: 'Enables parallel execution of planned changes',
    correct_answer: 'B',
    explanation: 'ExitPlanMode signals the transition from planning to implementation and requests user approval for the plan. It marks the end of read-only exploration.',
    difficulty: 'medium'
  },

  // Question 537 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How should you configure GitHub Actions to trigger on PR updates?',
    option_a: 'pull_request: [created, updated, edited] for comprehensive coverage',
    option_b: 'pull_request_target: [synchronize] for secure fork handling',
    option_c: 'pull_request: [opened, synchronize]',
    option_d: 'workflow_run: [pull_request] for dependent workflow execution',
    correct_answer: 'C',
    explanation: 'To trigger on PR creation and updates, use pull_request: [opened, synchronize]. "opened" catches new PRs, "synchronize" catches updates to existing PRs.',
    difficulty: 'medium'
  },

  // Question 538 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What prevents Claude from making code changes during the Explore phase?',
    option_a: 'Write and Edit tools are blocked at the tool level in Plan Mode',
    option_b: 'File system is mounted read-only during exploration phase',
    option_c: 'API permissions are temporarily revoked for modification operations',
    option_d: 'User confirmation is required before any file system operations',
    correct_answer: 'A',
    explanation: 'In Plan Mode, Write and Edit tools are explicitly blocked at the tool level, making it impossible for Claude to make code changes during exploration, even accidentally.',
    difficulty: 'medium'
  },

  // Question 539 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the main advantage of editing a plan with Ctrl+G?',
    option_a: 'Enables collaborative editing with other team members',
    option_b: 'Provides version control integration for plan changes',
    option_c: 'Allows AI-assisted plan optimization and refinement',
    option_d: 'It allows fine-grained control to annotate, reorder, or delete steps before execution',
    correct_answer: 'D',
    explanation: 'Ctrl+G opens the plan in a text editor, giving you fine-grained control to annotate, reorder, or delete steps. This ensures the plan matches your exact intentions before execution.',
    difficulty: 'medium'
  },

  // Question 540 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In a GitHub Actions workflow, where is the workflow YAML file located?',
    option_a: '.ci/workflows/ for CI-specific configurations',
    option_b: '.github/workflows/',
    option_c: '.automation/github/ for organizational structure',
    option_d: 'workflows/ at repository root for simplicity',
    correct_answer: 'B',
    explanation: 'GitHub Actions workflow YAML files must be located in the .github/workflows/ directory at the repository root.',
    difficulty: 'easy'
  },

  // Question 541 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is a key principle for cost management in CI/CD with Claude Code?',
    option_a: 'Use caching strategies to minimize redundant processing',
    option_b: 'Schedule non-urgent reviews during off-peak hours',
    option_c: 'Trigger selectively and set --max-turns limits',
    option_d: 'Implement tiered review depth based on change size',
    correct_answer: 'C',
    explanation: 'Cost management requires selective triggering (not every commit) and setting --max-turns limits to prevent runaway costs while maintaining quality.',
    difficulty: 'medium'
  },

  // Question 542 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'If a task involves only reading and understanding code without changes, should you use ExitPlanMode?',
    option_a: 'No, because ExitPlanMode is only for tasks that will result in code changes',
    option_b: 'Yes, to formalize the exploration into a documented analysis',
    option_c: 'Yes, as it provides structured output of findings',
    option_d: 'No, unless the understanding will inform future implementation',
    correct_answer: 'A',
    explanation: 'ExitPlanMode should NOT be used for research or understanding tasks. It\'s specifically for tasks that will result in code changes requiring implementation.',
    difficulty: 'medium'
  },

  // Question 543 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does the Commit phase in Plan Mode workflow involve?',
    option_a: 'Validating changes against project quality standards',
    option_b: 'Synchronizing changes with remote repository',
    option_c: 'Generating comprehensive change documentation',
    option_d: 'Creating a descriptive commit and optionally a PR',
    correct_answer: 'D',
    explanation: 'The Commit phase involves creating a descriptive git commit of the changes and optionally creating a pull request for review.',
    difficulty: 'easy'
  },

  // Question 544 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why might you choose to skip Plan Mode for a variable rename?',
    option_a: 'Automated refactoring tools handle renames more reliably',
    option_b: 'The scope is clear and can be described in one sentence, making planning overhead unnecessary',
    option_c: 'Variable renames have low risk of introducing bugs',
    option_d: 'IDE support makes planning redundant for refactoring',
    correct_answer: 'B',
    explanation: 'Variable renames typically have clear scope and can be described in one sentence. The planning overhead would exceed the benefit for such simple, well-defined tasks.',
    difficulty: 'medium'
  },

  // Question 545 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What makes the implementation phase faster when using Plan Mode?',
    option_a: 'Parallel execution of independent code modifications',
    option_b: 'Optimized API calls reducing network latency overhead',
    option_c: 'The context gathered during Explore and Plan phases enables more accurate and efficient execution',
    option_d: 'Pre-validated changes require fewer safety checks',
    correct_answer: 'C',
    explanation: 'Implementation is faster and more accurate because the context gathered during Explore and Plan phases means Claude already understands the codebase and has a clear execution strategy.',
    difficulty: 'medium'
  },

  // Question 546 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How should API keys be managed across multiple repositories in CI/CD?',
    option_a: 'Use repository-specific secrets, not shared across all projects',
    option_b: 'Centralize in organization secrets with repository whitelisting',
    option_c: 'Implement key rotation policies with automated distribution',
    option_d: 'Use environment-specific keys with automated provisioning',
    correct_answer: 'A',
    explanation: 'Security best practice requires repository-specific secrets. Never share API keys across projects or hard-code them. Each repo should have its own secure secret management.',
    difficulty: 'medium'
  },

  // Question 547 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which scenario demonstrates Plan Mode preventing "solving the wrong problem"?',
    option_a: 'Optimizing slow database queries through index analysis',
    option_b: 'Resolving merge conflicts in feature branches',
    option_c: 'Updating dependencies to address security vulnerabilities',
    option_d: 'Exploring unfamiliar authentication code before refactoring to understand actual requirements',
    correct_answer: 'D',
    explanation: 'Plan Mode prevents solving the wrong problem by allowing exploration before changes. In unfamiliar code, this exploration reveals actual requirements before refactoring begins.',
    difficulty: 'hard'
  },

  // Question 548 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the relationship between Plan Mode and the /plan command?',
    option_a: '/plan creates new plan sessions, Plan Mode manages existing ones',
    option_b: 'The /plan command is one of three ways to activate Plan Mode',
    option_c: '/plan is the UI equivalent of Plan Mode CLI functionality',
    option_d: '/plan invokes Plan Mode with predefined configuration templates',
    correct_answer: 'B',
    explanation: 'The /plan command is one of three ways to activate Plan Mode, along with Shift+Tab and claude --permission-mode plan.',
    difficulty: 'easy'
  },

  // Question 549 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In CI/CD, what is the benefit of using CLAUDE.md over putting everything in workflow YAML?',
    option_a: 'CLAUDE.md supports richer formatting for complex instructions',
    option_b: 'Workflow YAML has strict size limits preventing verbose context',
    option_c: 'CLAUDE.md provides project context automatically without cluttering workflow files',
    option_d: 'CLAUDE.md enables version control of prompts independently',
    correct_answer: 'C',
    explanation: 'CLAUDE.md provides automatic project-specific context to Claude in CI/CD without cluttering workflow YAML files with lengthy instructions, maintaining cleaner and more maintainable workflows.',
    difficulty: 'medium'
  },

  // Question 550 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What should you do if you need to ask user approval when using ExitPlanMode?',
    option_a: 'Nothing - ExitPlanMode already requests approval; don\'t use AskUserQuestion',
    option_b: 'Combine both for enhanced confirmation workflow',
    option_c: 'Use AskUserQuestion first to pre-validate the approach',
    option_d: 'Delegate to ExitPlanMode for critical changes only',
    correct_answer: 'A',
    explanation: 'ExitPlanMode inherently requests user approval, so you should NOT additionally use AskUserQuestion to ask "Is this plan okay?" The approval mechanism is built in.',
    difficulty: 'medium'
  },

  // Question 551 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which GitHub Actions trigger event allows Claude Code to respond to PR comments?',
    option_a: 'pull_request_review to capture formal review submission events',
    option_b: 'pull_request_review_comment for inline code discussion responses',
    option_c: 'discussion_comment to handle threaded conversation interactions',
    option_d: 'issue_comment to trigger on all issue and PR comments',
    correct_answer: 'D',
    explanation: 'The issue_comment event triggers on comments in both issues and pull requests, allowing Claude Code to respond to PR comments and potentially automate tasks.',
    difficulty: 'medium'
  },

  // Question 552 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is a sign that Plan Mode would add value to your workflow?',
    option_a: 'Code changes span multiple dependent services',
    option_b: 'You\'re uncertain about the best approach for a complex refactor',
    option_c: 'Previous implementations had subtle integration bugs',
    option_d: 'Team members have different architectural preferences',
    correct_answer: 'B',
    explanation: 'Uncertainty about the approach is a key indicator that Plan Mode would add value. The exploration and planning phases help clarify the best strategy before implementation.',
    difficulty: 'easy'
  },

  // Question 553 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'During a complex database migration plan, you notice Step 8 should actually happen before Step 5. The best way to reorder these steps is:',
    option_a: 'Provide verbal feedback in chat asking Claude to reorder',
    option_b: 'Cancel the plan and restart from the beginning',
    option_c: 'Press Ctrl+G to open the plan in an editor and manually reorder the steps',
    option_d: 'Use the /reorder-plan command with step numbers',
    correct_answer: 'C',
    explanation: 'Ctrl+G opens the plan in a text editor where you can directly edit, reorder, annotate, or delete steps before execution begins.',
    difficulty: 'medium'
  },

  // Question 554 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your GitHub Actions workflow runs Claude Code reviews on every commit to main branch. This costs $2,000/month. To optimize costs without sacrificing coverage:',
    option_a: 'Trigger only on pull_request events, not every commit',
    option_b: 'Reduce --max-turns from 10 to 2 per review',
    option_c: 'Switch all reviews from Sonnet to Haiku',
    option_d: 'Only run reviews during business hours',
    correct_answer: 'A',
    explanation: 'Triggering on pull_request events rather than every commit provides adequate coverage while reducing the number of reviews, significantly lowering costs.',
    difficulty: 'medium'
  },

  // Question 555 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In Plan Mode, which combination of tools can Claude use during the Explore phase?',
    option_a: 'Only Read tool to prevent any system changes',
    option_b: 'Read, Grep, and Glob but never Bash commands',
    option_c: 'All tools including Write and Edit for comprehensive analysis',
    option_d: 'Read, Grep, Glob, and Bash (but Write and Edit are blocked)',
    correct_answer: 'D',
    explanation: 'During the Explore phase, Claude has access to Read, Grep, Glob, and Bash for comprehensive analysis, but Write and Edit tools are blocked to maintain read-only safety.',
    difficulty: 'easy'
  },

  // Question 556 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your team debates whether to use Plan Mode for adding error handling to a single 200-line service file. You should:',
    option_a: 'Always use Plan Mode for any code changes',
    option_b: 'Skip Plan Mode - this is a simple, single-file change with clear scope',
    option_c: 'Use Plan Mode to generate comprehensive error handling strategies',
    option_d: 'Use Plan Mode only if the file has dependencies',
    correct_answer: 'B',
    explanation: 'For simple, single-file changes with clear scope, Plan Mode adds unnecessary overhead. Save it for complex, multi-file changes or unfamiliar code.',
    difficulty: 'medium'
  },

  // Question 557 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What happens during the Plan phase of the Plan Mode workflow?',
    option_a: 'Claude immediately starts modifying files based on the request',
    option_b: 'Claude explores the codebase to understand current state',
    option_c: 'Claude creates a detailed implementation plan based on the exploration',
    option_d: 'Claude creates a git commit of the proposed changes',
    correct_answer: 'C',
    explanation: 'During the Plan phase, Claude takes the understanding gained from the Explore phase and creates a detailed, step-by-step implementation plan for user review.',
    difficulty: 'easy'
  },

  // Question 558 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your CI/CD pipeline uses Claude Code for PR reviews. To ensure the workflow doesn\'t hang indefinitely if Claude encounters an issue:',
    option_a: 'Set timeout-minutes: 15 in the workflow YAML',
    option_b: 'Use the --max-retries flag with value 3',
    option_c: 'Enable auto-cancel: true for long-running jobs',
    option_d: 'Configure circuit-breaker: 300s in the action',
    correct_answer: 'A',
    explanation: 'Setting timeout-minutes in the workflow YAML ensures that jobs don\'t run indefinitely, protecting against runaway processes and controlling costs.',
    difficulty: 'easy'
  },

  // Question 559 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'During the Commit phase of Plan Mode, what is the primary action?',
    option_a: 'Executing the implementation plan across affected files',
    option_b: 'Validating that all changes compile successfully',
    option_c: 'Running the test suite to ensure nothing broke',
    option_d: 'Creating a descriptive git commit and optionally a pull request',
    correct_answer: 'D',
    explanation: 'The Commit phase focuses on creating a well-formatted git commit message and optionally creating a PR for the implemented changes.',
    difficulty: 'easy'
  },

  // Question 560 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your GitHub Actions workflow stores the ANTHROPIC_API_KEY as a repository secret. In the workflow YAML, you reference it with:',
    option_a: '${{ env.ANTHROPIC_API_KEY }}',
    option_b: '${{ secrets.ANTHROPIC_API_KEY }}',
    option_c: '${{ vars.ANTHROPIC_API_KEY }}',
    option_d: '${{ config.ANTHROPIC_API_KEY }}',
    correct_answer: 'B',
    explanation: 'Repository secrets in GitHub Actions are accessed using the ${{ secrets.SECRET_NAME }} syntax.',
    difficulty: 'easy'
  },

  // Question 561 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your Plan Mode exploration reveals that refactoring the payment module will require changes to 8 different files across 3 microservices. The main value Plan Mode provides here is:',
    option_a: 'Faster execution through parallel file processing',
    option_b: 'Automatic dependency resolution and conflict detection',
    option_c: 'Coordinated understanding of cross-file dependencies before making changes',
    option_d: 'Reduced token costs through batched file analysis',
    correct_answer: 'C',
    explanation: 'Plan Mode\'s key value for complex, multi-file changes is the coordinated understanding of how changes will affect different parts of the system before any modifications begin.',
    difficulty: 'medium'
  },

  // Question 562 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the correct syntax to activate Plan Mode from the command line?',
    option_a: 'claude --permission-mode plan',
    option_b: 'claude --plan-mode enable',
    option_c: 'claude -plan',
    option_d: 'claude start --plan',
    correct_answer: 'A',
    explanation: 'The CLI flag to activate Plan Mode is --permission-mode plan. Other activation methods include Shift+Tab or /plan command.',
    difficulty: 'easy'
  },

  // Question 563 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your CI/CD pipeline has a Claude Code review step that sometimes provides vague feedback like "looks good" or "consider refactoring." To improve feedback quality:',
    option_a: 'Increase --max-turns to allow more analysis time',
    option_b: 'Switch from Sonnet to Opus for better analysis',
    option_c: 'Add continue-on-error: false to enforce strict reviews',
    option_d: 'Use specific, detailed prompts instead of vague ones like "review this code"',
    correct_answer: 'D',
    explanation: 'Specific prompts (e.g., "check for security vulnerabilities in authentication logic") yield targeted, useful feedback. Vague prompts produce vague results.',
    difficulty: 'medium'
  },

  // Question 564 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In the Plan Mode workflow, when does Claude transition from read-only to write operations?',
    option_a: 'Immediately after the Explore phase completes',
    option_b: 'During the Implement phase, after user approves the plan',
    option_c: 'Automatically when a plan reaches 10 steps',
    option_d: 'When the /execute command is issued in chat',
    correct_answer: 'B',
    explanation: 'Write operations begin in the Implement phase, but only after the user has reviewed and approved the plan generated during the Plan phase.',
    difficulty: 'medium'
  },

  // Question 565 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your team wants to use Claude Code to automatically fix linting errors in PRs. Which GitHub Actions trigger is most appropriate?',
    option_a: 'on: push to trigger on every commit',
    option_b: 'on: workflow_dispatch for manual triggering only',
    option_c: 'on: pull_request with types: [opened, synchronize]',
    option_d: 'on: schedule with cron: "0 0 * * *"',
    correct_answer: 'C',
    explanation: 'Using pull_request with [opened, synchronize] triggers the action when PRs are created or updated, perfect for automated PR-based fixes.',
    difficulty: 'medium'
  },

  // Question 566 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the relationship between CLAUDE.md and Claude Code in CI/CD?',
    option_a: 'CLAUDE.md content is automatically pulled into Claude\'s context during CI/CD runs',
    option_b: 'CLAUDE.md stores the GitHub Actions workflow configuration',
    option_c: 'CLAUDE.md is required for Claude Code to function',
    option_d: 'CLAUDE.md caches previous review results for faster processing',
    correct_answer: 'A',
    explanation: 'CLAUDE.md provides project-specific context that is automatically included in Claude\'s context during CI/CD, without cluttering workflow files.',
    difficulty: 'medium'
  },

  // Question 567 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'You\'re reviewing a Plan Mode plan that has 15 steps. Step 7 looks unnecessary. What action can you take before execution?',
    option_a: 'You cannot modify the plan once generated',
    option_b: 'Reject the entire plan and ask Claude to regenerate without Step 7',
    option_c: 'Provide feedback in chat and wait for Claude to regenerate',
    option_d: 'Press Ctrl+G to edit the plan and delete Step 7',
    correct_answer: 'D',
    explanation: 'Ctrl+G opens the plan in a text editor where you can delete, reorder, or annotate steps before approving execution.',
    difficulty: 'easy'
  },

  // Question 568 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'For Claude Code in GitHub Actions, which permissions are typically required?',
    option_a: 'No special permissions needed beyond repository read access',
    option_b: 'pull-requests: write and contents: write',
    option_c: 'admin: write for full repository access',
    option_d: 'issues: write and discussions: write',
    correct_answer: 'B',
    explanation: 'Claude Code needs pull-requests: write to comment on PRs and contents: write to access and potentially modify repository contents.',
    difficulty: 'easy'
  },

  // Question 569 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your startup wants to implement Claude Code for PR reviews but has a limited budget. What\'s the most cost-effective starting approach?',
    option_a: 'Deploy to all repositories with Opus for maximum quality',
    option_b: 'Implement comprehensive security scanning, test generation, and documentation updates',
    option_c: 'Start with basic PR review on one repo using Sonnet, then expand',
    option_d: 'Set up multi-region failover and advanced retry logic first',
    correct_answer: 'C',
    explanation: 'Start small with basic PR review on one repository using Sonnet (cost-effective), validate value, then incrementally expand scope and features.',
    difficulty: 'easy'
  },

  // Question 570 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When using issue_comment as a trigger in GitHub Actions, what capability does this enable?',
    option_a: 'Responding to PR comments and automating small tasks from issues',
    option_b: 'Automatically categorizing and labeling new issues',
    option_c: 'Generating weekly issue summaries for team standups',
    option_d: 'Migrating issues between different project boards',
    correct_answer: 'A',
    explanation: 'The issue_comment trigger enables responding to comments in issues and PRs, allowing automation like converting issue requests into PRs.',
    difficulty: 'medium'
  },

  // Question 571 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your Plan Mode session is analyzing a complex e-commerce checkout flow spanning 12 files. What is happening during the Explore phase?',
    option_a: 'Claude is generating code for all 12 files simultaneously',
    option_b: 'Claude is creating git commits for each file',
    option_c: 'Claude is running tests to validate the current implementation',
    option_d: 'Claude is reading files to understand dependencies and current state',
    correct_answer: 'D',
    explanation: 'The Explore phase is read-only - Claude reads and analyzes files to understand the current state and dependencies before creating any plan.',
    difficulty: 'easy'
  },

  // Question 572 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What flag should you use when running Claude Code in automated CI/CD pipelines?',
    option_a: 'claude --interactive for user input handling',
    option_b: 'claude -p for headless/non-interactive mode',
    option_c: 'claude --verbose for detailed logging output',
    option_d: 'claude --ci-mode for CI-specific optimizations',
    correct_answer: 'B',
    explanation: 'The -p flag runs Claude Code in headless mode, suitable for automation and CI/CD where no interactive input is available.',
    difficulty: 'easy'
  },

  // Question 573 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your CI/CD pipeline reviews PRs with Claude Code. To prevent runaway costs from extremely large PRs:',
    option_a: 'Set rate-limit: 100 in workflow configuration',
    option_b: 'Enable cost-cap: $50 per review',
    option_c: 'Configure timeout-minutes: 15 to limit execution time',
    option_d: 'Use file-count-limit: 50 to restrict analysis scope',
    correct_answer: 'C',
    explanation: 'Setting timeout-minutes prevents jobs from running too long, controlling both time and associated API costs for large PRs.',
    difficulty: 'medium'
  },

  // Question 574 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In Plan Mode, what indicates you should NOT use the ExitPlanMode tool?',
    option_a: 'The task is research or understanding without code changes',
    option_b: 'The plan has more than 10 steps',
    option_c: 'Multiple files will be modified during implementation',
    option_d: 'The code changes span multiple directories',
    correct_answer: 'A',
    explanation: 'ExitPlanMode is only for tasks that will result in code changes. Don\'t use it for research, documentation, or understanding tasks.',
    difficulty: 'medium'
  },

  // Question 575 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your GitHub Actions workflow for Claude Code PR reviews is failing with permission errors. You need:',
    option_a: 'actions: write and packages: write permissions',
    option_b: 'repository: admin level access for full control',
    option_c: 'workflows: write and checks: write permissions',
    option_d: 'pull-requests: write and contents: write permissions',
    correct_answer: 'D',
    explanation: 'Claude Code in GitHub Actions requires pull-requests: write (to comment) and contents: write (to access repository contents).',
    difficulty: 'easy'
  },

  // Question 576 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the recommended --max-turns setting for PR reviews in CI/CD?',
    option_a: '1-2 turns for fastest completion',
    option_b: '5-10 turns to balance thoroughness and cost',
    option_c: '20-30 turns for comprehensive analysis',
    option_d: 'Unlimited turns for maximum quality',
    correct_answer: 'B',
    explanation: '5-10 turns provides a good balance between thorough analysis and cost management for automated PR reviews.',
    difficulty: 'medium'
  },

  // Question 577 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your Plan Mode workflow is "Explore → Plan → Implement → Commit." After which phase can you edit the plan using Ctrl+G?',
    option_a: 'Only during the Explore phase before planning begins',
    option_b: 'At any phase including during implementation',
    option_c: 'After the Plan phase but before implementation begins',
    option_d: 'Only during the Commit phase for final adjustments',
    correct_answer: 'C',
    explanation: 'You can edit the plan after it\'s created (Plan phase) but before implementation begins. Use Ctrl+G to open and edit.',
    difficulty: 'medium'
  },

  // Question 578 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which statement about Claude Code in CI/CD is correct?',
    option_a: 'It serves as an additional quality gate, not a replacement for human review',
    option_b: 'It should replace all manual code reviews to save time',
    option_c: 'It only works for repositories with fewer than 100 files',
    option_d: 'It requires Enterprise tier GitHub accounts to function',
    correct_answer: 'A',
    explanation: 'Claude Code is an additional quality gate alongside linting, testing, and human review - not a replacement for human oversight.',
    difficulty: 'easy'
  },

  // Question 579 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'For cost management in CI/CD, which model is recommended for most PR reviews?',
    option_a: 'Always use Opus for maximum quality',
    option_b: 'Use Haiku for fastest and cheapest reviews',
    option_c: 'Rotate between models for diverse perspectives',
    option_d: 'Use Sonnet for balanced quality and cost',
    correct_answer: 'D',
    explanation: 'Sonnet provides a good balance of quality and cost for CI/CD PR reviews. Reserve Opus for complex analysis, use Haiku for simple filtering.',
    difficulty: 'easy'
  },

  // Question 580 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'During the Plan phase, you realize Claude misunderstood a requirement. Before proceeding to implementation, you should:',
    option_a: 'Let it proceed and fix issues during code review',
    option_b: 'Press Ctrl+G to edit the plan and correct the misunderstanding',
    option_c: 'Cancel and restart the entire Plan Mode session',
    option_d: 'Use /cancel-plan to reject and request a new plan',
    correct_answer: 'B',
    explanation: 'Use Ctrl+G to open and edit the plan, correcting any misunderstandings before implementation begins. This is more efficient than restarting.',
    difficulty: 'medium'
  },

  // Question 581 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the primary purpose of the "80/20 principle" in Plan Mode?',
    option_a: 'Use Plan Mode for 80% of projects, direct implementation for 20%',
    option_b: 'Allocate 80% budget to tools, 20% to planning',
    option_c: 'Invest 80% effort in planning, 20% in supervising execution',
    option_d: 'Complete 80% of work in Explore, 20% in Implement',
    correct_answer: 'C',
    explanation: 'The 80/20 principle means spending most effort on thorough planning (80%) and less on supervising the resulting execution (20%).',
    difficulty: 'medium'
  },

  // Question 582 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your CI/CD pipeline uses Claude Code with continue-on-error: true. What does this setting accomplish?',
    option_a: 'Pipeline continues even if Claude Code encounters errors',
    option_b: 'Claude Code retries failed operations automatically',
    option_c: 'Errors are logged but not displayed in UI',
    option_d: 'Failed reviews block PR merging',
    correct_answer: 'A',
    explanation: 'continue-on-error: true allows the pipeline to continue even if the Claude Code step fails, preventing complete pipeline failures.',
    difficulty: 'easy'
  },

  // Question 583 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When would you use the /plan command instead of Shift+Tab?',
    option_a: 'Only when using the CLI, not the UI',
    option_b: 'When you need more powerful planning capabilities',
    option_c: 'Never - Shift+Tab is always preferred',
    option_d: 'They both activate Plan Mode - use whichever is convenient',
    correct_answer: 'D',
    explanation: 'Both /plan command and Shift+Tab activate Plan Mode. Use whichever is more convenient for your workflow (third option: claude --permission-mode plan).',
    difficulty: 'easy'
  },

  // Question 584 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your team uses Claude Code for automated security scans in CI/CD. Which slash command would you use in prompts?',
    option_a: '/scan-security for comprehensive vulnerability detection',
    option_b: '/security-review for security-focused code analysis',
    option_c: '/audit for compliance and security checks',
    option_d: '/vulnerability-scan for automated penetration testing',
    correct_answer: 'B',
    explanation: 'The /security-review slash command is designed for security-focused code reviews and vulnerability detection in CI/CD.',
    difficulty: 'easy'
  },

  // Question 585 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In Plan Mode, Claude generates a plan with 20 steps for a complex refactor. You want to add a validation step between steps 10 and 11. You:',
    option_a: 'Cannot modify the plan - must reject and regenerate',
    option_b: 'Use /insert-step 10.5 to add the new step',
    option_c: 'Press Ctrl+G and manually add the step in the editor',
    option_d: 'Provide feedback and ask Claude to regenerate the plan',
    correct_answer: 'C',
    explanation: 'Press Ctrl+G to open the plan in a text editor where you can add, modify, reorder, or delete steps freely.',
    difficulty: 'medium'
  },

  // Question 586 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the main benefit of using Plan Mode for security audits?',
    option_a: 'Thorough exploration helps identify vulnerabilities without making risky changes during investigation',
    option_b: 'Security scans complete faster in Plan Mode',
    option_c: 'Plan Mode automatically fixes all identified vulnerabilities',
    option_d: 'Security findings are cached for future audits',
    correct_answer: 'A',
    explanation: 'Plan Mode\'s read-only Explore phase allows thorough security investigation without risk of accidentally introducing changes during the audit.',
    difficulty: 'medium'
  },

  // Question 587 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your GitHub Actions workflow triggers on both pull_request and issue_comment events. This dual triggering enables:',
    option_a: 'Faster PR reviews through parallel processing',
    option_b: 'Automatic PR creation from issue templates',
    option_c: 'Reduced API costs through event deduplication',
    option_d: 'Reviews on PR creation AND responses to PR comment requests',
    correct_answer: 'D',
    explanation: 'Triggering on both events allows automatic reviews when PRs are created/updated AND manual triggering via comments for additional review requests.',
    difficulty: 'medium'
  },

  // Question 588 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'During Plan Mode, ExitPlanMode is called but the user has already been asked "Is this plan okay?" via AskUserQuestion. This is:',
    option_a: 'Correct - double confirmation ensures user approval',
    option_b: 'Redundant - ExitPlanMode inherently requests approval',
    option_c: 'Required for plans with more than 15 steps',
    option_d: 'Necessary only when using Ctrl+G to edit plans',
    correct_answer: 'B',
    explanation: 'ExitPlanMode inherently requests user approval, so asking separately with AskUserQuestion is redundant and unnecessary.',
    difficulty: 'medium'
  },

  // Question 589 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the correct location for GitHub Actions workflow files?',
    option_a: '.workflows/ directory at repository root',
    option_b: 'workflows/ subdirectory alongside src/ and tests/',
    option_c: '.github/workflows/ directory',
    option_d: '.ci/workflows/ for CI-specific automation',
    correct_answer: 'C',
    explanation: 'GitHub Actions workflow YAML files must be located in the .github/workflows/ directory to be recognized and executed.',
    difficulty: 'easy'
  },

  // Question 590 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your Plan Mode session shows "Explore phase complete" after analyzing 25 files. The next phase will:',
    option_a: 'Create a detailed implementation plan based on the exploration',
    option_b: 'Begin executing changes across the analyzed files',
    option_c: 'Request user approval to proceed with modifications',
    option_d: 'Generate a git commit summarizing findings',
    correct_answer: 'A',
    explanation: 'After Explore completes, the Plan phase begins where Claude creates a detailed implementation plan based on the exploration insights.',
    difficulty: 'easy'
  },

  // Question 591 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'For CI/CD cost optimization, you should trigger Claude Code reviews:',
    option_a: 'On every commit to maximize coverage',
    option_b: 'Only on main branch merges',
    option_c: 'Every hour via scheduled cron jobs',
    option_d: 'Selectively on pull_request events, not every commit',
    correct_answer: 'D',
    explanation: 'Selective triggering on PR events rather than every commit provides adequate coverage while significantly reducing costs.',
    difficulty: 'medium'
  },

  // Question 592 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What happens when you press Shift+Tab during an active coding session?',
    option_a: 'It saves the current file and opens Plan Mode',
    option_b: 'It toggles Plan Mode on or off',
    option_c: 'It creates a new Plan Mode session in a separate window',
    option_d: 'It switches between Explore and Plan phases',
    correct_answer: 'B',
    explanation: 'Shift+Tab toggles Plan Mode on and off, allowing you to activate or deactivate it mid-session as needed.',
    difficulty: 'easy'
  },

  // Question 593 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your CI/CD pipeline needs to automatically generate release notes from PR history. Which automation is most suitable?',
    option_a: 'Security scanning via /security-review',
    option_b: 'Test generation via automated coverage analysis',
    option_c: 'Release notes generation from commit history and PR descriptions',
    option_d: 'Issue-to-PR conversion for automated fixes',
    correct_answer: 'C',
    explanation: 'Claude Code can analyze commit history and PR descriptions to automatically generate comprehensive, well-formatted release notes.',
    difficulty: 'easy'
  },

  // Question 594 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Plan Mode\'s Explore and Plan phases are described as "cheapest in tokens, most valuable in outcome" because:',
    option_a: 'They prevent costly implementation mistakes through upfront understanding',
    option_b: 'They use fewer API calls than direct implementation',
    option_c: 'They cache results for reuse across team members',
    option_d: 'They compress token usage through optimized prompting',
    correct_answer: 'A',
    explanation: 'While Explore and Plan use tokens, they prevent expensive mistakes during implementation, making them highly valuable relative to their cost.',
    difficulty: 'hard'
  },

  // Question 595 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In GitHub Actions, to prevent API key exposure in logs, you store ANTHROPIC_API_KEY:',
    option_a: 'In the workflow YAML file with encryption',
    option_b: 'In a .env file committed to the repository',
    option_c: 'As an environment variable in the runner config',
    option_d: 'As a repository secret accessed via ${{ secrets.ANTHROPIC_API_KEY }}',
    correct_answer: 'D',
    explanation: 'Repository secrets keep API keys encrypted and out of version control, accessed securely via ${{ secrets.SECRET_NAME }}.',
    difficulty: 'easy'
  },

  // Question 596 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the recommended approach for adopting Claude Code in CI/CD?',
    option_a: 'Implement all features (security, testing, docs) across all repos immediately',
    option_b: 'Start with basic PR review on one repo, validate, then expand incrementally',
    option_c: 'Begin with the most complex repository for maximum impact',
    option_d: 'Deploy simultaneously to all repositories for consistency',
    correct_answer: 'B',
    explanation: 'Start small with basic PR review on a single repo, validate the value, then incrementally expand scope and features. Avoid over-engineering.',
    difficulty: 'easy'
  },

  // Question 597 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Your Plan Mode session is at the Implement phase. Halfway through execution, you realize Step 8 should be skipped. You:',
    option_a: 'Cannot stop - must let implementation complete',
    option_b: 'Use /skip-step 8 to bypass that step',
    option_c: 'Should have edited the plan with Ctrl+G before implementation started',
    option_d: 'Press Ctrl+Z to undo and return to planning',
    correct_answer: 'C',
    explanation: 'Plans should be edited with Ctrl+G BEFORE implementation begins. Once implementation starts, it\'s too late to modify the plan safely.',
    difficulty: 'hard'
  },

  // Question 598 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which scenario best demonstrates when Plan Mode prevents "solving the wrong problem"?',
    option_a: 'Exploring unfamiliar codebase before refactoring to understand actual architecture',
    option_b: 'Adding logging to a function for debugging',
    option_c: 'Fixing a typo in documentation',
    option_d: 'Renaming a variable for clarity',
    correct_answer: 'A',
    explanation: 'Plan Mode\'s Explore phase reveals the actual architecture and requirements before changes begin, preventing solutions that don\'t address the real problem.',
    difficulty: 'medium'
  },

  // Question 599 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'For automated test generation in CI/CD, Claude Code can:',
    option_a: 'Only run existing tests, not create new ones',
    option_b: 'Generate tests only for JavaScript codebases',
    option_c: 'Replace manual testing entirely',
    option_d: 'Identify coverage gaps and automatically generate missing tests',
    correct_answer: 'D',
    explanation: 'Claude Code can analyze test coverage, identify gaps, and automatically generate tests to improve coverage, though human review is still important.',
    difficulty: 'medium'
  },

  // Question 600 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does CLAUDE.md enable in CI/CD workflows?',
    option_a: 'Stores encrypted API keys for secure access',
    option_b: 'Provides automatic project context without cluttering workflow YAML',
    option_c: 'Configures Claude Code execution parameters',
    option_d: 'Caches previous review results for faster processing',
    correct_answer: 'B',
    explanation: 'CLAUDE.md provides project-specific context that\'s automatically pulled into Claude\'s context, keeping workflow files clean and maintainable.',
    difficulty: 'easy'
  },

  // Question 601 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the ultimate goal of combining Plan Mode with CI/CD?',
    option_a: 'Maximize development automation coverage across the entire software lifecycle',
    option_b: 'Reduce time-to-market significantly through accelerated development velocity',
    option_c: 'Build multi-layered quality system with planning automation and human oversight',
    option_d: 'Standardize development practices consistently across distributed engineering teams',
    correct_answer: 'C',
    explanation: 'The goal is creating a comprehensive quality system where Plan Mode enables thoughtful changes, CI/CD provides automated quality gates, and human review remains the final authority - working together for better outcomes.',
    difficulty: 'hard'
  }
];
