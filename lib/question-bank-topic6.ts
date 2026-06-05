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
    question: 'What is the primary purpose of Plan Mode in Claude Code?',
    option_a: 'To execute code changes faster without any exploration',
    option_b: 'To replace the implementation phase entirely',
    option_c: 'To separate exploration and planning from execution, allowing analysis before making changes',
    option_d: 'To bypass user approval for code modifications',
    correct_answer: 'C',
    explanation: 'Plan Mode is a read-only exploration phase where Claude analyzes the codebase, drafts a plan, and waits for approval before making any changes. It separates thinking from doing through the Explore → Plan → Implement → Commit workflow.',
    difficulty: 'easy'
  },

  // Question 502 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which keyboard shortcut toggles Plan Mode in Claude Code?',
    option_a: 'Ctrl+P',
    option_b: 'Shift+Tab',
    option_c: 'Alt+P',
    option_d: 'Cmd+Shift+P',
    correct_answer: 'B',
    explanation: 'Shift+Tab toggles Plan Mode on and off. You can also activate it with the /plan command or claude --permission-mode plan from the CLI.',
    difficulty: 'easy'
  },

  // Question 503 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which tools can Claude use in Plan Mode?',
    option_a: 'Only Read and Grep',
    option_b: 'All tools including Write and Edit',
    option_c: 'Only Bash commands',
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
    option_b: 'Plan → Explore → Implement → Commit',
    option_c: 'Implement → Plan → Explore → Commit',
    option_d: 'Commit → Explore → Plan → Implement',
    correct_answer: 'A',
    explanation: 'The correct workflow is: 1) Explore (read relevant code), 2) Plan (create implementation plan), 3) Implement (execute the plan), 4) Commit (create commit and optional PR).',
    difficulty: 'easy'
  },

  // Question 505 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How do you edit a plan in Plan Mode?',
    option_a: 'Use the /edit-plan command',
    option_b: 'Type directly in the chat',
    option_c: 'Press Ctrl+G to open in text editor, then annotate/reorder/delete steps',
    option_d: 'Plans cannot be edited once created',
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
    option_b: 'Spend 80% on coding and 20% on planning',
    option_c: '80% of projects need Plan Mode, 20% don\'t',
    option_d: 'Use Plan Mode for 80% of features only',
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
    option_a: 'For all research and information gathering tasks',
    option_b: 'When searching for files in the codebase',
    option_c: 'For understanding documentation',
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
    option_a: 'Automatically executes all planned changes',
    option_b: 'Requests user approval for the plan',
    option_c: 'Deletes the current plan',
    option_d: 'Switches to a different planning mode',
    correct_answer: 'B',
    explanation: 'ExitPlanMode inherently requests user approval, so you should not use AskUserQuestion to additionally ask "Is this plan okay?" The approval is built into the tool.',
    difficulty: 'medium'
  },

  // Question 509 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which scenario is BEST suited for Plan Mode?',
    option_a: 'Fixing a typo in a comment',
    option_b: 'Renaming a single variable',
    option_c: 'Refactoring a complex multi-file authentication system',
    option_d: 'Adding a console.log statement',
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
    option_b: 'When working on unfamiliar code',
    option_c: 'When making multi-file changes',
    option_d: 'When conducting security audits',
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
    option_a: 'It makes immediate code changes',
    option_b: 'It skips the planning phase',
    option_c: 'It commits changes automatically',
    option_d: 'It allows understanding the current state before modifications without making changes',
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
    option_a: 'Implement and Commit',
    option_b: 'Explore and Plan',
    option_c: 'Plan and Implement',
    option_d: 'Only the Commit phase',
    correct_answer: 'B',
    explanation: 'The Explore and Plan phases (phases 1 & 2) are the cheapest in tokens but most valuable in outcome because they prevent costly mistakes during implementation.',
    difficulty: 'medium'
  },

  // Question 513 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What GitHub Action is used to integrate Claude Code into CI/CD pipelines?',
    option_a: 'actions/claude-code@v1',
    option_b: 'anthropic/claude-action@v1',
    option_c: 'anthropics/claude-code-action@v1',
    option_d: 'claude/github-action@v1',
    correct_answer: 'C',
    explanation: 'The official GitHub Action for Claude Code is anthropics/claude-code-action@v1, which should be added to your .github/workflows/ directory.',
    difficulty: 'easy'
  },

  // Question 514 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Where should you store the ANTHROPIC_API_KEY for GitHub Actions?',
    option_a: 'As a repository secret',
    option_b: 'Hardcoded in the workflow YAML file',
    option_c: 'In a public environment variable',
    option_d: 'In the README.md file',
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
    option_a: 'Only push events',
    option_b: 'Only pull_request events',
    option_c: 'Only issue_comment events',
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
    option_a: 'It stores API keys',
    option_b: 'It provides context automatically pulled into Claude\'s context in CI/CD',
    option_c: 'It replaces the workflow YAML file',
    option_d: 'It is only for local development',
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
    option_a: 'claude --headless',
    option_b: 'claude --auto',
    option_c: 'claude -p',
    option_d: 'claude --ci',
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
    option_b: 'Only pull-requests: read',
    option_c: 'Only contents: read',
    option_d: 'No permissions needed',
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
    option_a: 'Use vague prompts for flexibility',
    option_b: 'Always use the same generic prompt',
    option_c: 'Avoid giving any specific instructions',
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
    question: 'What is the recommended --max-turns setting for PR reviews in CI/CD?',
    option_a: '1-2 turns',
    option_b: '5-10 turns',
    option_c: '50-100 turns',
    option_d: 'Unlimited turns',
    correct_answer: 'B',
    explanation: 'For PR reviews, 5-10 turns is recommended to balance thoroughness with cost management. This prevents runaway costs while allowing adequate analysis.',
    difficulty: 'medium'
  },

  // Question 521 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which model is recommended for cost-effective CI/CD operations?',
    option_a: 'Always use Claude Opus for best quality',
    option_b: 'Use the oldest model available',
    option_c: 'Use Sonnet instead of Opus for cost management',
    option_d: 'Models don\'t matter for cost',
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
    option_b: 'ignore-errors: always',
    option_c: 'skip-failures: true',
    option_d: 'Error handling is not configurable',
    correct_answer: 'A',
    explanation: 'Using continue-on-error: true in workflow YAML allows the pipeline to continue even if Claude Code encounters an error, preventing complete pipeline failures.',
    difficulty: 'medium'
  },

  // Question 523 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why should you set timeout-minutes in GitHub Actions workflows?',
    option_a: 'It\'s not necessary',
    option_b: 'To make workflows run faster',
    option_c: 'To increase accuracy',
    option_d: 'To prevent runaway processes and control costs',
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
    option_a: 'Replacing all human code reviews entirely',
    option_b: 'Automated PR reviews as a multi-layered quality gate',
    option_c: 'Deploying applications to production',
    option_d: 'Managing server infrastructure',
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
    option_a: 'It completely replaces human review',
    option_b: 'It should be the only quality gate',
    option_c: 'It is NOT a replacement for human review but an additional multi-layered quality gate',
    option_d: 'It makes other testing tools unnecessary',
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
    option_b: 'Implement all features at once',
    option_c: 'Start with the most complex workflows first',
    option_d: 'Avoid starting with PR reviews',
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
    option_a: 'Only commenting on issues',
    option_b: 'Only reading issue descriptions',
    option_c: 'Nothing useful',
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
    option_a: 'Use the same configuration for all repositories',
    option_b: 'Use repository-specific configs and minimum required permissions',
    option_c: 'Grant maximum permissions always',
    option_d: 'Share API keys across all projects',
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
    option_a: 'Running existing tests',
    option_b: 'Deleting failing tests',
    option_c: 'Automatically generating tests for coverage gaps',
    option_d: 'Skipping test requirements',
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
    option_b: 'It cannot help with release notes',
    option_c: 'Only by manually writing each note',
    option_d: 'By deleting old release notes',
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
    option_a: '/audit',
    option_b: '/check-security',
    option_c: '/scan',
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
    option_a: 'Claude only reads code',
    option_b: 'Claude executes the plan created in the Plan phase',
    option_c: 'Claude creates a new plan',
    option_d: 'Claude skips to commit',
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
    option_a: 'It makes the code familiar automatically',
    option_b: 'It skips understanding the code',
    option_c: 'It allows thorough exploration before changes, preventing mistakes in unknown codebases',
    option_d: 'It only works with familiar code',
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
    option_b: 'claude --plan-mode',
    option_c: 'claude --enable-planning',
    option_d: 'claude -pm',
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
    option_a: 'Complex feature planning',
    option_b: 'Codebase exploration before changes',
    option_c: 'Security audits',
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
    option_a: 'To delete all work',
    option_b: 'To transition from planning to implementation with user approval',
    option_c: 'To restart the planning process',
    option_d: 'To cancel the entire task',
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
    option_a: 'pull_request: [opened]',
    option_b: 'pull_request: [updated]',
    option_c: 'pull_request: [opened, synchronize]',
    option_d: 'pull_request: [all]',
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
    option_b: 'Claude chooses not to make changes',
    option_c: 'The user manually blocks each change',
    option_d: 'There is no prevention mechanism',
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
    option_a: 'It creates a backup',
    option_b: 'It makes plans run faster',
    option_c: 'It is the only way to see the plan',
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
    option_a: '/.github/actions/',
    option_b: '/.github/workflows/',
    option_c: '/workflows/',
    option_d: '/actions/',
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
    option_a: 'Never set any limits',
    option_b: 'Run on every single commit',
    option_c: 'Trigger selectively and set --max-turns limits',
    option_d: 'Always use the most expensive model',
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
    option_b: 'Yes, always use it',
    option_c: 'Only on Tuesdays',
    option_d: 'It doesn\'t matter',
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
    option_a: 'Only saving files',
    option_b: 'Only creating git commits',
    option_c: 'Only creating PRs',
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
    option_a: 'Variable renames are impossible in Plan Mode',
    option_b: 'The scope is clear and can be described in one sentence, making planning overhead unnecessary',
    option_c: 'Plan Mode doesn\'t support variables',
    option_d: 'Variable renames always fail',
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
    option_a: 'It uses a faster computer',
    option_b: 'It skips testing',
    option_c: 'The context gathered during Explore and Plan phases enables more accurate and efficient execution',
    option_d: 'It makes random changes',
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
    option_b: 'Hard-code them in each repository',
    option_c: 'Share one API key in all repos',
    option_d: 'Store them in public files',
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
    option_a: 'Fixing a typo',
    option_b: 'Adding a comment',
    option_c: 'Renaming a file',
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
    option_a: 'They are completely unrelated',
    option_b: 'The /plan command is one of three ways to activate Plan Mode',
    option_c: '/plan is only for CI/CD',
    option_d: '/plan deactivates Plan Mode',
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
    option_a: 'CLAUDE.md is faster to execute',
    option_b: 'YAML files cannot contain instructions',
    option_c: 'CLAUDE.md provides project context automatically without cluttering workflow files',
    option_d: 'There is no benefit',
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
    option_b: 'Always use AskUserQuestion in addition',
    option_c: 'Create a custom approval tool',
    option_d: 'Skip approval entirely',
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
    option_a: 'comment',
    option_b: 'pull_request_comment',
    option_c: 'pr_comment',
    option_d: 'issue_comment',
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
    option_a: 'You have a simple typo to fix',
    option_b: 'You\'re uncertain about the best approach for a complex refactor',
    option_c: 'You need to add one log statement',
    option_d: 'You\'re renaming a variable',
    correct_answer: 'B',
    explanation: 'Uncertainty about the approach is a key indicator that Plan Mode would add value. The exploration and planning phases help clarify the best strategy before implementation.',
    difficulty: 'easy'
  },

  // Question 553 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How does Plan Mode handle multi-file changes?',
    option_a: 'It can only handle single files',
    option_b: 'It requires separate plans for each file',
    option_c: 'It explores all relevant files and creates a cohesive plan across multiple files',
    option_d: 'It randomly modifies files',
    correct_answer: 'C',
    explanation: 'Plan Mode excels at multi-file changes by exploring all relevant files during the Explore phase and creating a cohesive plan that coordinates changes across multiple files.',
    difficulty: 'medium'
  },

  // Question 554 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the recommended minimum permission level for GitHub Actions?',
    option_a: 'Minimum required permissions only',
    option_b: 'Maximum permissions always',
    option_c: 'No permissions',
    option_d: 'Random permissions',
    correct_answer: 'A',
    explanation: 'Security best practice dictates granting only the minimum required permissions. This follows the principle of least privilege and reduces security risks.',
    difficulty: 'easy'
  },

  // Question 555 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When conducting a security audit, should you use Plan Mode?',
    option_a: 'Never',
    option_b: 'Only for small codebases',
    option_c: 'Only on Fridays',
    option_d: 'Yes, it allows thorough exploration before suggesting security fixes',
    correct_answer: 'D',
    explanation: 'Security audits are an ideal use case for Plan Mode. The thorough exploration phase identifies security issues before suggesting fixes, preventing hasty changes that could introduce new vulnerabilities.',
    difficulty: 'easy'
  },

  // Question 556 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does the "synchronize" event mean in pull_request triggers?',
    option_a: 'Synchronizing with other repositories',
    option_b: 'Updates to existing pull requests (new commits pushed)',
    option_c: 'Synchronizing workflows',
    option_d: 'Time synchronization',
    correct_answer: 'B',
    explanation: 'The "synchronize" event triggers when new commits are pushed to an existing pull request, allowing workflows to run on PR updates.',
    difficulty: 'medium'
  },

  // Question 557 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How does Plan Mode relate to token efficiency?',
    option_a: 'It uses more tokens than direct execution',
    option_b: 'It has no impact on tokens',
    option_c: 'Explore and Plan phases are cheapest in tokens while preventing expensive implementation mistakes',
    option_d: 'It eliminates all token usage',
    correct_answer: 'C',
    explanation: 'While Plan Mode adds the Explore and Plan phases, these are cheap in tokens and prevent expensive mistakes during implementation that could require multiple costly revision cycles.',
    difficulty: 'hard'
  },

  // Question 558 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What happens if you try to use Write or Edit tools during Plan Mode?',
    option_a: 'The tools are blocked at the tool level and cannot execute',
    option_b: 'The changes are made immediately',
    option_c: 'Claude asks for permission each time',
    option_d: 'The plan is deleted',
    correct_answer: 'A',
    explanation: 'Write and Edit tools are explicitly blocked at the tool level during Plan Mode. They cannot execute, ensuring the planning phase remains read-only.',
    difficulty: 'easy'
  },

  // Question 559 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In CI/CD workflows, why use specific prompts rather than generic ones?',
    option_a: 'Generic prompts are more accurate',
    option_b: 'Specific prompts use fewer tokens',
    option_c: 'It doesn\'t matter',
    option_d: 'Specific prompts yield targeted, useful results; vague prompts produce generic feedback',
    correct_answer: 'D',
    explanation: 'Specific prompts in CI/CD produce targeted, actionable results tailored to your needs. Vague prompts result in generic feedback that provides little value.',
    difficulty: 'easy'
  },

  // Question 560 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the purpose of timeout-minutes in workflow configuration?',
    option_a: 'To make workflows complete faster',
    option_b: 'To prevent runaway processes and control costs by limiting maximum execution time',
    option_c: 'To increase accuracy',
    option_d: 'To sync with other workflows',
    correct_answer: 'B',
    explanation: 'timeout-minutes sets a maximum execution time, preventing runaway processes that could consume excessive resources and generate unexpected costs.',
    difficulty: 'medium'
  },

  // Question 561 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which of these is a valid CI/CD use case for Claude Code?',
    option_a: 'Replacing all developers',
    option_b: 'Managing databases',
    option_c: 'Automated test generation for coverage gaps',
    option_d: 'Server provisioning',
    correct_answer: 'C',
    explanation: 'Automated test generation is a common and valuable CI/CD use case. Claude Code can identify coverage gaps and generate appropriate tests to fill them.',
    difficulty: 'easy'
  },

  // Question 562 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When should repository-specific configurations be used in CI/CD?',
    option_a: 'Always - each repository should have its own configuration',
    option_b: 'Never - use one global configuration',
    option_c: 'Only for large repositories',
    option_d: 'Only for public repositories',
    correct_answer: 'A',
    explanation: 'Security and best practices require repository-specific configurations. Each repository has unique needs and security contexts that should not be shared.',
    difficulty: 'medium'
  },

  // Question 563 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the main goal of the Explore phase in Plan Mode?',
    option_a: 'To make as many changes as possible',
    option_b: 'To delete old code',
    option_c: 'To skip planning',
    option_d: 'To understand the current state of relevant code without making modifications',
    correct_answer: 'D',
    explanation: 'The Explore phase is focused on understanding the current state of the code through reading and analysis, without making any modifications. This understanding informs the Plan phase.',
    difficulty: 'easy'
  },

  // Question 564 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How should --max-turns be used in CI/CD?',
    option_a: 'Never set it',
    option_b: 'Set it based on task complexity (e.g., 5-10 for PR reviews) to control costs',
    option_c: 'Always set it to 1',
    option_d: 'Always set it to 1000',
    correct_answer: 'B',
    explanation: '--max-turns should be set based on task complexity to balance thoroughness with cost. For example, 5-10 turns is appropriate for PR reviews.',
    difficulty: 'medium'
  },

  // Question 565 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is a key advantage of using claude -p in automation?',
    option_a: 'It creates plans automatically',
    option_b: 'It skips all processing',
    option_c: 'It runs in headless mode suitable for scripting and CI/CD',
    option_d: 'It requires a GUI',
    correct_answer: 'C',
    explanation: 'claude -p runs in headless mode, making it suitable for automation, scripting, and CI/CD environments where no interactive UI is available.',
    difficulty: 'easy'
  },

  // Question 566 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why is Plan Mode valuable for refactoring tasks?',
    option_a: 'It allows exploration of code structure and dependencies before making changes',
    option_b: 'It automatically refactors everything',
    option_c: 'It skips testing',
    option_d: 'It makes random improvements',
    correct_answer: 'A',
    explanation: 'Refactoring benefits from Plan Mode because it allows thorough exploration of code structure, dependencies, and potential impacts before making any changes.',
    difficulty: 'medium'
  },

  // Question 567 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What should you do when starting Claude Code in CI/CD?',
    option_a: 'Implement all possible features immediately',
    option_b: 'Start with the most complex workflows',
    option_c: 'Avoid PR reviews initially',
    option_d: 'Start small with basic PR review (5 minutes), then add features incrementally',
    correct_answer: 'D',
    explanation: 'Best practice is starting small with basic PR review (about 5 minutes setup), validating it works, then incrementally adding more sophisticated features.',
    difficulty: 'easy'
  },

  // Question 568 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In Plan Mode, what does annotating a plan step allow you to do?',
    option_a: 'Nothing - annotations are ignored',
    option_b: 'Add notes, context, or modify the step\'s intent before execution',
    option_c: 'Delete the entire plan',
    option_d: 'Skip Plan Mode',
    correct_answer: 'B',
    explanation: 'When editing a plan with Ctrl+G, annotations allow you to add notes, context, or modify a step\'s intent, ensuring it aligns with your goals before execution.',
    difficulty: 'medium'
  },

  // Question 569 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Which tools can Claude use during the Explore phase of Plan Mode?',
    option_a: 'Only Write',
    option_b: 'Only Edit',
    option_c: 'Read, Grep, Glob, and Bash',
    option_d: 'No tools at all',
    correct_answer: 'C',
    explanation: 'During the Explore phase, Claude can use Read, Grep, Glob, and Bash for code analysis and exploration, but Write and Edit are blocked to maintain read-only status.',
    difficulty: 'easy'
  },

  // Question 570 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the relationship between Plan Mode and preventing mistakes?',
    option_a: 'Plan Mode prevents solving the wrong problem by enabling exploration before implementation',
    option_b: 'Plan Mode eliminates all possible mistakes',
    option_c: 'Plan Mode increases mistakes',
    option_d: 'Plan Mode has no effect on mistakes',
    correct_answer: 'A',
    explanation: 'Plan Mode prevents the costly mistake of "solving the wrong problem" by requiring exploration and understanding before implementation begins.',
    difficulty: 'medium'
  },

  // Question 571 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In GitHub Actions, why store ANTHROPIC_API_KEY as a secret?',
    option_a: 'It makes workflows run faster',
    option_b: 'It\'s required by GitHub',
    option_c: 'To make the workflow more complex',
    option_d: 'To protect the API key from exposure and unauthorized use',
    correct_answer: 'D',
    explanation: 'API keys must be stored as secrets to prevent exposure in logs, code, or to unauthorized users. This is critical for security and cost control.',
    difficulty: 'easy'
  },

  // Question 572 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does continue-on-error: true do in GitHub Actions?',
    option_a: 'It hides all errors',
    option_b: 'It allows the workflow to continue even if Claude Code encounters an error',
    option_c: 'It makes errors more likely',
    option_d: 'It stops the workflow immediately',
    correct_answer: 'B',
    explanation: 'continue-on-error: true allows the workflow to continue running even if Claude Code encounters an error, preventing complete pipeline failures from Claude-related issues.',
    difficulty: 'medium'
  },

  // Question 573 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When would you exit Plan Mode to implement changes?',
    option_a: 'Immediately without planning',
    option_b: 'Never',
    option_c: 'After exploring, creating a plan, and receiving user approval',
    option_d: 'Randomly during exploration',
    correct_answer: 'C',
    explanation: 'You exit Plan Mode to implement changes only after completing exploration, creating a detailed plan, and receiving user approval via ExitPlanMode.',
    difficulty: 'easy'
  },

  // Question 574 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What makes CI-based Claude Code different from human review?',
    option_a: 'CI-based Claude Code is an additional quality gate, not a replacement for human review',
    option_b: 'CI-based Claude Code replaces human review entirely',
    option_c: 'CI-based Claude Code is less thorough than linting',
    option_d: 'There is no difference',
    correct_answer: 'A',
    explanation: 'CI-based Claude Code serves as an additional quality gate alongside linting and testing. It explicitly does NOT replace human review but complements it.',
    difficulty: 'easy'
  },

  // Question 575 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How should you balance cost and quality in CI/CD workflows?',
    option_a: 'Always use the most expensive options',
    option_b: 'Never consider cost',
    option_c: 'Only focus on cost, ignore quality',
    option_d: 'Use selective triggers, --max-turns limits, and appropriate model selection (Sonnet vs Opus)',
    correct_answer: 'D',
    explanation: 'Balance cost and quality through selective triggering (not every commit), --max-turns limits, and choosing appropriate models (Sonnet for most tasks, Opus for complex ones).',
    difficulty: 'medium'
  },

  // Question 576 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does "opening a plan in a text editor with Ctrl+G" enable?',
    option_a: 'Automatic execution',
    option_b: 'Manual editing to reorder, annotate, or delete steps',
    option_c: 'Plan deletion only',
    option_d: 'Nothing - it\'s just for viewing',
    correct_answer: 'B',
    explanation: 'Ctrl+G opens the plan in a text editor where you can manually reorder steps, add annotations with context, or delete steps you don\'t want executed.',
    difficulty: 'medium'
  },

  // Question 577 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why might you use issue_comment triggers in GitHub Actions?',
    option_a: 'To delete issues',
    option_b: 'To prevent comments',
    option_c: 'To automate converting issues to PRs or respond to PR comments',
    option_d: 'To hide all comments',
    correct_answer: 'C',
    explanation: 'issue_comment triggers enable automation like converting issues to PRs or responding to specific PR comments with code reviews or implementations.',
    difficulty: 'medium'
  },

  // Question 578 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the primary benefit of the Plan phase over direct implementation?',
    option_a: 'It creates a clear strategy and gets user buy-in before execution',
    option_b: 'It skips implementation entirely',
    option_c: 'It makes random changes',
    option_d: 'It\'s slower with no benefits',
    correct_answer: 'A',
    explanation: 'The Plan phase creates a clear implementation strategy and gets user approval before any code changes, preventing wasted effort on wrong approaches.',
    difficulty: 'easy'
  },

  // Question 579 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In CI/CD, what is a recommended practice for triggering Claude Code workflows?',
    option_a: 'Trigger on every single file change',
    option_b: 'Never trigger automatically',
    option_c: 'Trigger randomly',
    option_d: 'Trigger selectively based on meaningful events (PR opened/updated, not every commit)',
    correct_answer: 'D',
    explanation: 'Selective triggering on meaningful events (like PR opened/synchronized) balances automation benefits with cost management, avoiding expensive runs on every minor commit.',
    difficulty: 'medium'
  },

  // Question 580 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What characterizes a task suitable for Plan Mode?',
    option_a: 'Simple, one-line changes',
    option_b: 'Uncertainty about approach, multi-file changes, or unfamiliar code',
    option_c: 'Only documentation updates',
    option_d: 'Tasks that can be described in one word',
    correct_answer: 'B',
    explanation: 'Plan Mode is suitable for tasks with uncertain approach, multi-file changes, or unfamiliar code where exploration before implementation provides significant value.',
    difficulty: 'medium'
  },

  // Question 581 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How does Plan Mode handle the read-only requirement?',
    option_a: 'By trusting Claude not to make changes',
    option_b: 'By user monitoring each action',
    option_c: 'By blocking Write and Edit tools at the tool level',
    option_d: 'It doesn\'t enforce read-only access',
    correct_answer: 'C',
    explanation: 'Plan Mode enforces read-only access by blocking Write and Edit tools at the tool level, making it technically impossible to modify code during planning.',
    difficulty: 'easy'
  },

  // Question 582 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the purpose of release notes automation in CI/CD?',
    option_a: 'To automatically generate release notes from commit history and PRs',
    option_b: 'To delete release notes',
    option_c: 'To prevent releases',
    option_d: 'To manually write every note',
    correct_answer: 'A',
    explanation: 'Release notes automation uses Claude Code to analyze commit history and PRs to automatically generate comprehensive, well-formatted release documentation.',
    difficulty: 'easy'
  },

  // Question 583 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why use minimum required permissions in GitHub Actions?',
    option_a: 'To make workflows slower',
    option_b: 'To increase complexity',
    option_c: 'It doesn\'t matter',
    option_d: 'To follow the principle of least privilege and reduce security risks',
    correct_answer: 'D',
    explanation: 'Minimum required permissions follow the principle of least privilege, reducing security risks by limiting what the workflow can access or modify.',
    difficulty: 'easy'
  },

  // Question 584 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What happens during the Plan phase?',
    option_a: 'Code is immediately modified',
    option_b: 'A detailed implementation plan is created based on exploration',
    option_c: 'All files are deleted',
    option_d: 'Nothing happens',
    correct_answer: 'B',
    explanation: 'During the Plan phase, Claude creates a detailed implementation plan based on the understanding gained during the Explore phase, without making any code changes.',
    difficulty: 'easy'
  },

  // Question 585 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When should you use Opus vs Sonnet in CI/CD?',
    option_a: 'Always use Opus',
    option_b: 'Always use Sonnet',
    option_c: 'Use Sonnet for most tasks, reserve Opus for complex tasks requiring maximum capability',
    option_d: 'Choose randomly',
    correct_answer: 'C',
    explanation: 'Sonnet should be used for most CI/CD tasks for cost efficiency. Reserve Opus for complex tasks that truly require maximum reasoning capability.',
    difficulty: 'medium'
  },

  // Question 586 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How does the 80/20 principle apply to development efficiency?',
    option_a: '80% time planning leads to 20% time executing, with better outcomes than rushing to code',
    option_b: '80% coding, 20% planning is optimal',
    option_c: 'It doesn\'t apply to development',
    option_d: 'Use 80% of features, ignore 20%',
    correct_answer: 'A',
    explanation: 'The 80/20 principle means investing 80% of effort in planning results in only 20% time needed for execution, with significantly better outcomes than rushing to code.',
    difficulty: 'hard'
  },

  // Question 587 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is test generation automation designed to address?',
    option_a: 'Deleting existing tests',
    option_b: 'Running tests faster',
    option_c: 'Preventing all testing',
    option_d: 'Identifying and filling coverage gaps automatically',
    correct_answer: 'D',
    explanation: 'Test generation automation identifies gaps in test coverage and automatically generates appropriate tests to fill those gaps, improving overall code quality.',
    difficulty: 'easy'
  },

  // Question 588 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What should you do before making complex multi-file changes?',
    option_a: 'Start coding immediately',
    option_b: 'Use Plan Mode to explore and plan the changes',
    option_c: 'Delete all files',
    option_d: 'Make random modifications',
    correct_answer: 'B',
    explanation: 'Before complex multi-file changes, use Plan Mode to explore dependencies, understand the codebase, and create a coordinated plan across all affected files.',
    difficulty: 'easy'
  },

  // Question 589 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How should CLAUDE.md be used in CI/CD?',
    option_a: 'It should be ignored',
    option_b: 'Only for local development',
    option_c: 'To provide automatic project context pulled into Claude during CI/CD runs',
    option_d: 'To store API keys',
    correct_answer: 'C',
    explanation: 'CLAUDE.md is automatically pulled into Claude\'s context during CI/CD runs, providing project-specific instructions and standards without modifying workflow files.',
    difficulty: 'medium'
  },

  // Question 590 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the recommended setup time for basic PR review in CI/CD?',
    option_a: 'About 5 minutes',
    option_b: 'Several days',
    option_c: 'Several hours',
    option_d: 'Several weeks',
    correct_answer: 'A',
    explanation: 'Basic PR review setup in CI/CD takes about 5 minutes, making it an easy starting point before adding more sophisticated features.',
    difficulty: 'easy'
  },

  // Question 591 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'Why is selective triggering important in CI/CD?',
    option_a: 'To make workflows more complex',
    option_b: 'To prevent automation',
    option_c: 'It\'s not important',
    option_d: 'To control costs and avoid unnecessary runs on every minor commit',
    correct_answer: 'D',
    explanation: 'Selective triggering controls costs by running Claude Code on meaningful events (like PR creation/updates) rather than every minor commit, which would be expensive and unnecessary.',
    difficulty: 'medium'
  },

  // Question 592 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What does ExitPlanMode indicate about the next phase?',
    option_a: 'Planning will restart',
    option_b: 'Implementation will begin after user approval',
    option_c: 'The task is abandoned',
    option_d: 'Nothing happens next',
    correct_answer: 'B',
    explanation: 'ExitPlanMode indicates that implementation will begin after user approval. It marks the transition from read-only planning to active code modification.',
    difficulty: 'easy'
  },

  // Question 593 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'In GitHub Actions, what does anthropics/claude-code-action@v1 do?',
    option_a: 'Deletes code',
    option_b: 'Only comments on PRs',
    option_c: 'Integrates Claude Code into GitHub Actions workflows',
    option_d: 'Manages repositories',
    correct_answer: 'C',
    explanation: 'anthropics/claude-code-action@v1 is the official GitHub Action that integrates Claude Code capabilities into GitHub Actions workflows for CI/CD automation.',
    difficulty: 'easy'
  },

  // Question 594 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What makes exploration "cheap in tokens"?',
    option_a: 'Reading and analyzing code uses fewer tokens than iterative implementation and fixes',
    option_b: 'It doesn\'t use any tokens',
    option_c: 'Tokens are free during exploration',
    option_d: 'Exploration uses more tokens than implementation',
    correct_answer: 'A',
    explanation: 'Exploration uses Read, Grep, and Glob which consume fewer tokens than iterative cycles of implementation, testing, fixing bugs, and revising - which would be needed without proper planning.',
    difficulty: 'hard'
  },

  // Question 595 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'When is Plan Mode overhead not justified?',
    option_a: 'For complex refactoring',
    option_b: 'For unfamiliar codebases',
    option_c: 'For security audits',
    option_d: 'For simple, clear tasks like fixing typos or renaming variables',
    correct_answer: 'D',
    explanation: 'Plan Mode overhead is not justified for simple, clear tasks like typos or variable renames where the scope is obvious and can be described in one sentence.',
    difficulty: 'medium'
  },

  // Question 596 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'How does Plan Mode prevent "solving the wrong problem"?',
    option_a: 'By making changes immediately',
    option_b: 'By requiring exploration and understanding before implementation',
    option_c: 'By skipping user input',
    option_d: 'It doesn\'t prevent this',
    correct_answer: 'B',
    explanation: 'Plan Mode prevents solving the wrong problem by requiring thorough exploration and understanding of requirements before any implementation begins.',
    difficulty: 'medium'
  },

  // Question 597 - Answer: C
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is a key security consideration in CI/CD workflows?',
    option_a: 'Share all secrets publicly',
    option_b: 'Grant maximum permissions',
    option_c: 'Repository-specific configs with minimum required permissions',
    option_d: 'Disable all security features',
    correct_answer: 'C',
    explanation: 'Key security practices include repository-specific configurations and granting only minimum required permissions, following the principle of least privilege.',
    difficulty: 'easy'
  },

  // Question 598 - Answer: A
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What role does CLAUDE.md play in maintaining clean workflows?',
    option_a: 'It stores project context separately, keeping workflow YAML files clean and focused',
    option_b: 'It replaces workflow files',
    option_c: 'It has no impact on workflow cleanliness',
    option_d: 'It makes workflows more complex',
    correct_answer: 'A',
    explanation: 'CLAUDE.md keeps workflow YAML files clean by storing project-specific context, instructions, and standards separately while still providing them automatically to Claude.',
    difficulty: 'medium'
  },

  // Question 599 - Answer: D
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the correct sequence for using Plan Mode effectively?',
    option_a: 'Implement → Commit → Explore → Plan',
    option_b: 'Plan → Commit → Explore → Implement',
    option_c: 'Commit → Plan → Implement → Explore',
    option_d: 'Explore → Plan → Get approval → Implement → Commit',
    correct_answer: 'D',
    explanation: 'The correct sequence is: Explore (understand code), Plan (create strategy), Get approval (via ExitPlanMode), Implement (execute plan), Commit (finalize changes).',
    difficulty: 'medium'
  },

  // Question 600 - Answer: B
  {
    week: 6,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Plan Mode & CI/CD',
    question: 'What is the ultimate goal of combining Plan Mode with CI/CD?',
    option_a: 'To eliminate all human involvement',
    option_b: 'To create a multi-layered quality system with automated planning, review, and human oversight',
    option_c: 'To make development slower',
    option_d: 'To increase costs unnecessarily',
    correct_answer: 'B',
    explanation: 'The goal is creating a comprehensive quality system where Plan Mode enables thoughtful changes, CI/CD provides automated quality gates, and human review remains the final authority - working together for better outcomes.',
    difficulty: 'hard'
  }
];
