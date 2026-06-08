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

// Topic 3: Hooks, Workflows & Sessions (101 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 26 D (RANDOMLY SHUFFLED)

export const topic3Questions: Question[] = [
  // Question 201 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your DevOps team wants to ensure critical infrastructure scripts are validated before Claude executes them. You have CLAUDE.md with guidelines and hooks configured in settings.json. What is the fundamental difference in enforcement?',
    option_a: 'Hooks provide advisory validation suggestions that Claude evaluates contextually before proceeding',
    option_b: 'Hooks execute deterministically on every triggering event, while CLAUDE.md provides advisory guidance',
    option_c: 'Hooks batch execution until workflow completion to optimize performance overhead',
    option_d: 'CLAUDE.md instructions take precedence over hook enforcement when semantic conflicts occur',
    correct_answer: 'B',
    explanation: 'Hooks are deterministic and always execute when their events trigger, providing guaranteed enforcement. CLAUDE.md contains advisory instructions that Claude may choose to follow but cannot enforce workflows.',
    difficulty: 'medium'
  },

  // Question 202 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are building a compliance system that requires logging all user requests before Claude processes them. Which hook event should you implement?',
    option_a: 'PreToolUse - intercepts and validates tool parameters before individual execution',
    option_b: 'PostToolUse - captures and processes tool results after completion',
    option_c: 'UserPromptSubmit - intercepts and logs user input before Claude processing',
    option_d: 'AgentHook - spawns isolated subagent for asynchronous request monitoring',
    correct_answer: 'C',
    explanation: 'UserPromptSubmit fires before Claude processes the user\'s request, making it ideal for logging, validating, or modifying user input before processing begins.',
    difficulty: 'easy'
  },

  // Question 203 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your security team implements an agent hook that analyzes code complexity before allowing commits. The hook occasionally hangs on large files. What is the timeout limit you need to account for?',
    option_a: '30 seconds before the hook is automatically terminated',
    option_b: '45 seconds with graceful degradation after 30 seconds',
    option_c: '90 seconds for agent hooks, 60 seconds for command hooks',
    option_d: '60 seconds maximum, with support for up to 50 conversation turns',
    correct_answer: 'D',
    explanation: 'Agent hooks have a 60-second timeout limit and can run for up to 50 turns before being terminated.',
    difficulty: 'easy'
  },

  // Question 204 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'A developer on your team keeps using --dangerously-skip-permissions to bypass git push restrictions during late-night deployments. You need absolute enforcement that cannot be overridden. Which permission control should you use?',
    option_a: 'deny - blocks tools even with --dangerously-skip-permissions',
    option_b: 'block - prevents execution but can be overridden with flags',
    option_c: 'prevent - shows warnings but allows execution with confirmation',
    option_d: 'reject - queues operations for manual approval',
    correct_answer: 'A',
    explanation: 'The "deny" permission control blocks tools even when --dangerously-skip-permissions is used, providing absolute enforcement that cannot be bypassed.',
    difficulty: 'medium'
  },

  // Question 205 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You need to configure a PreToolUse hook that prevents Claude from deleting production database files. Where should this hook configuration be stored?',
    option_a: '.claude/hooks.json - dedicated hooks configuration file',
    option_b: '.claude/settings.json - centralized settings for hooks and permissions',
    option_c: '.claude/config.json - project-wide configuration file',
    option_d: 'package.json under claudeHooks section for npm integration',
    correct_answer: 'B',
    explanation: 'Hook configurations are stored in .claude/settings.json, which manages both hooks and permissions settings for the project.',
    difficulty: 'easy'
  },

  // Question 206 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team wants to prevent Claude from executing rm -rf commands on any directory containing "production" in its path. Which hook event provides the best interception point?',
    option_a: 'UserPromptSubmit - validates user intent before processing',
    option_b: 'PostToolUse - logs dangerous commands after they execute',
    option_c: 'PreToolUse - validates and blocks actions before execution',
    option_d: 'AgentHook - spawns a subagent to analyze command safety',
    correct_answer: 'C',
    explanation: 'PreToolUse fires before actions execute, making it ideal for validation and blocking dangerous operations before they can cause damage.',
    difficulty: 'medium'
  },

  // Question 207 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'During a 4-hour debugging session, Claude Code crashes. You want to resume exactly where you left off with all conversation history intact. What does a session represent in Claude Code?',
    option_a: 'A single API call with request and response data',
    option_b: 'A JSON configuration file defining project settings',
    option_c: 'An active WebSocket connection to Claude servers',
    option_d: 'Complete conversation history including prompts, tool calls, results, and responses saved to disk',
    correct_answer: 'D',
    explanation: 'Sessions represent the complete conversation history including prompts, tool calls, results, and responses, all saved locally to disk for resumption.',
    difficulty: 'easy'
  },

  // Question 208 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'After a system reboot interrupts your Claude session mid-refactoring, you need to continue the conversation. Which command resumes your most recent session?',
    option_a: 'claude --continue',
    option_b: 'claude --restart',
    option_c: 'claude --reload',
    option_d: 'claude --reconnect',
    correct_answer: 'A',
    explanation: 'The claude --continue command resumes the most recent session with its full conversation history.',
    difficulty: 'easy'
  },

  // Question 209 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You have project-specific coding standards documented in CLAUDE.md. When starting a new session, when does Claude receive these instructions?',
    option_a: 'On every tool call to ensure consistency',
    option_b: 'At session start when Claude first initializes',
    option_c: 'Only when explicitly requested via /load-standards command',
    option_d: 'After the first user message to preserve context window',
    correct_answer: 'B',
    explanation: 'CLAUDE.md is automatically loaded at session start to provide context and instructions for the entire conversation.',
    difficulty: 'easy'
  },

  // Question 210 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'After Claude modifies Python files, your team wants to automatically run black formatter and pytest. Which hook type enables this automation?',
    option_a: 'PreToolUse hooks to format before changes are made',
    option_b: 'UserPromptSubmit hooks to validate formatting requirements',
    option_c: 'PostToolUse hooks to run cleanup, testing, and formatting after completion',
    option_d: 'AgentHook to spawn a formatting subagent',
    correct_answer: 'C',
    explanation: 'PostToolUse hooks run after tool completion, making them ideal for cleanup tasks like automated testing, formatting, and linting.',
    difficulty: 'medium'
  },

  // Question 211 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are architecting a comprehensive workflow system with request validation, external API calls, prompt enhancement, and complex reasoning tasks. How many distinct hook types can you leverage?',
    option_a: '2 types: PreToolUse and PostToolUse',
    option_b: '3 types: command, HTTP, and validation hooks',
    option_c: '5 types: Pre, Post, User, Agent, and System hooks',
    option_d: '4 types: command hooks, HTTP hooks, prompt hooks, and agent hooks',
    correct_answer: 'D',
    explanation: 'Claude Code provides 4 hook types: command hooks (shell execution), HTTP hooks (network requests), prompt hooks (prompt modification), and agent hooks (subagent spawning).',
    difficulty: 'easy'
  },

  // Question 212 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your agent hook performs multi-step security validation involving several tool calls. You notice it sometimes fails with timeout errors. What is the maximum turn limit you need to design for?',
    option_a: '50 turns before the agent hook terminates',
    option_b: '100 turns with automatic extension if needed',
    option_c: '25 turns for agent hooks, 50 for main sessions',
    option_d: '75 turns with graceful degradation',
    correct_answer: 'A',
    explanation: 'Agent hooks can run for up to 50 turns before timing out.',
    difficulty: 'easy'
  },

  // Question 213 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your organization has strict data residency requirements prohibiting any conversation data from leaving your infrastructure. Where does Claude Code store session files?',
    option_a: 'On Anthropic\'s secure cloud servers with encryption',
    option_b: 'Locally to disk on your machine, never on remote servers',
    option_c: 'In cloud storage services specified in .claude/settings.json',
    option_d: 'In memory only, with optional cloud backup',
    correct_answer: 'B',
    explanation: 'Sessions are saved locally to disk on your machine, following Claude Code\'s file-based architecture with no server-side state.',
    difficulty: 'easy'
  },

  // Question 214 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are running a data migration session that has generated thousands of messages over 6 hours. Context is approaching the window limit. What Sonnet 4.5 beta feature helps manage this situation?',
    option_a: 'Auto-delete removes the oldest messages automatically',
    option_b: 'Compression reduces message size by 70% on average',
    option_c: 'Memory tool maintains conversation state across long sessions through summarization',
    option_d: 'Cache system offloads old messages to faster storage',
    correct_answer: 'C',
    explanation: 'The Memory tool in Sonnet 4.5 beta helps manage conversation state and context across long sessions through intelligent summarization.',
    difficulty: 'medium'
  },

  // Question 215 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You need to add a PreToolUse hook script that validates git commit messages against your company\'s conventional commits standard. Where should you place this script?',
    option_a: '.claude/scripts/ for executable validation scripts',
    option_b: '.claude/commands/ for commit-related commands',
    option_c: '.claude/tools/ for tool validation scripts',
    option_d: '.claude/hooks/ for hook implementation files',
    correct_answer: 'D',
    explanation: 'Hook scripts are stored in the .claude/hooks/ folder within the project directory.',
    difficulty: 'easy'
  },

  // Question 216 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your compliance workflow requires analyzing code changes, checking against 50+ rules, querying an external compliance API, and generating reports. Simple command hooks are too limited. What capability do agent hooks provide that other hook types cannot?',
    option_a: 'Spawn subagents with full tool access for complex multi-step reasoning',
    option_b: 'Directly modify files without going through the tool system',
    option_c: 'Access external APIs with OAuth authentication',
    option_d: 'Cache analysis results across multiple sessions',
    correct_answer: 'A',
    explanation: 'Agent hooks can spawn subagents with full tool access, enabling complex multi-step workflows that run for up to 60 seconds and 50 turns.',
    difficulty: 'medium'
  },

  // Question 217 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your security team asks: "Where is session state stored - on your servers or ours?" What is Claude Code\'s fundamental architectural approach to state management?',
    option_a: 'Server-based state synchronized across clients',
    option_b: 'File-based architecture with no server-side state',
    option_c: 'Database-backed sessions with local caching',
    option_d: 'Cloud-synchronized state with end-to-end encryption',
    correct_answer: 'B',
    explanation: 'Claude Code uses a file-based architecture with no server-side state, storing everything locally on disk.',
    difficulty: 'medium'
  },

  // Question 218 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You have multiple ongoing projects with Claude: "api-refactor", "database-migration", and "frontend-redesign". You want to continue the database migration session. Which command do you use?',
    option_a: 'claude --continue database-migration',
    option_b: 'claude --load database-migration',
    option_c: 'claude --resume database-migration',
    option_d: 'claude --open database-migration',
    correct_answer: 'C',
    explanation: 'The claude --resume <session-name> command resumes a specific named session.',
    difficulty: 'easy'
  },

  // Question 219 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are migrating an older Claude Code project to the latest version. The documentation mentions that .claude/commands/ is deprecated. What replaced this folder for custom functionality?',
    option_a: '.claude/hooks/ for all custom commands',
    option_b: '.claude/scripts/ for executable commands',
    option_c: '.claude/actions/ for custom actions',
    option_d: '.claude/skills/ containing SKILL.md files',
    correct_answer: 'D',
    explanation: 'The .claude/skills/ folder containing SKILL.md files replaced the legacy .claude/commands/ folder.',
    difficulty: 'medium'
  },

  // Question 220 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team wants to enforce code quality standards: ESLint must pass, Prettier must format, and unit tests must run after any code modification. What automation workflow should you implement?',
    option_a: 'PostToolUse hooks that automatically trigger linting, formatting, and test suites after code changes',
    option_b: 'PreToolUse hooks to prevent code changes that might fail quality checks',
    option_c: 'UserPromptSubmit hooks to validate user intent includes quality checks',
    option_d: 'CLAUDE.md instructions asking Claude to run quality checks',
    correct_answer: 'A',
    explanation: 'PostToolUse hooks enable automation of linting, testing, and formatting workflows that execute automatically after tool completion.',
    difficulty: 'medium'
  },

  // Question 221 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'During a debugging session, Claude suggests two different approaches to fix a race condition. You want to explore both approaches without losing either conversation thread. How does session branching work?',
    option_a: 'Automatic branching creates parallel sessions every 10 messages',
    option_b: 'Manual branching creates alternate conversation paths from a specific point',
    option_c: 'Random branching for A/B testing different solutions',
    option_d: 'Session branching is not supported, use separate sessions instead',
    correct_answer: 'B',
    explanation: 'Session branching allows manually creating alternate conversation paths from a given point in history, enabling exploration of different approaches.',
    difficulty: 'medium'
  },

  // Question 222 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'A developer argues: "We don\'t need hooks, we can just use --dangerously-skip-permissions when needed." What is the relationship between hooks and permissions that refutes this?',
    option_a: 'Hooks override all permissions, making flags irrelevant',
    option_b: 'Permissions operate independently of hooks',
    option_c: 'Hooks with "deny" permissions enforce restrictions even when --dangerously-skip-permissions is used',
    option_d: 'Permissions disable hooks automatically',
    correct_answer: 'C',
    explanation: 'Hooks with "deny" permissions can enforce restrictions that cannot be bypassed even when --dangerously-skip-permissions is used.',
    difficulty: 'hard'
  },

  // Question 223 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your data science team runs week-long analysis sessions with Claude. The context window fills up after 48 hours. What happens to conversation history during context compaction?',
    option_a: 'All history beyond 24 hours is permanently deleted',
    option_b: 'History is moved to external cold storage',
    option_c: 'History is encrypted but remains in full form',
    option_d: 'History is summarized to manage the context window while preserving key information',
    correct_answer: 'D',
    explanation: 'Context compaction summarizes conversation history to efficiently manage the context window while preserving important information.',
    difficulty: 'medium'
  },

  // Question 224 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'After Claude modifies code, you need to notify your CI/CD pipeline via a webhook to trigger builds. Which hook type should you implement?',
    option_a: 'HTTP hooks to make webhook requests to external services',
    option_b: 'Command hooks to execute curl commands',
    option_c: 'Agent hooks to spawn a subagent that handles notifications',
    option_d: 'Prompt hooks to add CI/CD instructions to prompts',
    correct_answer: 'A',
    explanation: 'HTTP hooks enable making HTTP requests to external services like CI/CD webhooks during hook execution.',
    difficulty: 'easy'
  },

  // Question 225 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team wants to automatically inject current sprint context from Jira into every Claude prompt. What is the primary use case for prompt hooks?',
    option_a: 'Execute shell commands to fetch sprint data',
    option_b: 'Modify or enhance prompts before Claude processes them',
    option_c: 'Store sprint data in session state',
    option_d: 'Manage file permissions for Jira integration',
    correct_answer: 'B',
    explanation: 'Prompt hooks modify or enhance prompts before they are processed by Claude, enabling dynamic context injection.',
    difficulty: 'medium'
  },

  // Question 226 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You run Claude sessions for bug fixes, feature development, code reviews, and refactoring. After 3 months, you have 200+ sessions. How can you organize these effectively?',
    option_a: 'Use numbered folders: session001, session002, etc.',
    option_b: 'Create separate Git repositories for each session type',
    option_c: 'Use descriptive session naming conventions: bugfix-auth-token, feature-user-dashboard',
    option_d: 'Store sessions on different drives by category',
    correct_answer: 'C',
    explanation: 'Session naming conventions like "bugfix-auth-token" or "feature-user-dashboard" help organize and identify different conversation threads effectively.',
    difficulty: 'easy'
  },

  // Question 227 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your architecture uses multiple agent hooks for different validation tasks: security scanning, performance analysis, and code style checking. What is a key advantage of this sub-agent architecture for state management?',
    option_a: 'Faster processing through parallel execution',
    option_b: 'Lower API costs through shared context',
    option_c: 'Simpler code with centralized state',
    option_d: 'Isolated contexts prevent state pollution and enable specialized handling',
    correct_answer: 'D',
    explanation: 'Sub-agent architectures provide isolated contexts with specialized state handling, improving modularity and preventing state pollution between tasks.',
    difficulty: 'hard'
  },

  // Question 228 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You created custom slash commands for your team: /deploy-staging, /run-tests, /analyze-performance. Where are these command definitions stored?',
    option_a: 'SKILL.md files in .claude/skills/ directory',
    option_b: 'Session history files with command metadata',
    option_c: 'Hook configuration in .claude/settings.json',
    option_d: 'Permission settings in .claude/permissions.json',
    correct_answer: 'A',
    explanation: 'SKILL.md files contain skill definitions and custom slash commands in the .claude/skills/ directory.',
    difficulty: 'easy'
  },

  // Question 229 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your PreToolUse hook checks if git commits include ticket numbers. A developer tries to commit without a ticket reference. What happens when the hook returns an error code?',
    option_a: 'The error is logged but the commit proceeds',
    option_b: 'The tool execution is blocked, preventing the commit',
    option_c: 'The session terminates immediately',
    option_d: 'The hook is disabled for the rest of the session',
    correct_answer: 'B',
    explanation: 'When PreToolUse hooks return errors, the tool execution is blocked, preventing the action from proceeding.',
    difficulty: 'medium'
  },

  // Question 230 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your compliance team requires a complete audit trail of every file operation: what was accessed, when, by whom, and what changed. Which hook event provides the most complete information for audit logging?',
    option_a: 'UserPromptSubmit - captures user intent before actions',
    option_b: 'PreToolUse - logs planned operations before execution',
    option_c: 'PostToolUse - logs actual operations and results after completion',
    option_d: 'AgentHook - comprehensive monitoring through subagents',
    correct_answer: 'C',
    explanation: 'PostToolUse is ideal for audit logging as it captures what actually happened after tool execution completes, including results and outcomes.',
    difficulty: 'medium'
  },

  // Question 231 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You created a hook script validate-commits.sh in .claude/hooks/ but Claude Code doesn\'t seem to execute it. What is required for Claude Code to recognize this hook?',
    option_a: 'Registration in package.json under claudeHooks section',
    option_b: 'API key configuration in .claude/credentials.json',
    option_c: 'Deployment to Claude\'s hook server',
    option_d: 'Configuration entry in .claude/settings.json',
    correct_answer: 'D',
    explanation: 'Hooks must be configured in .claude/settings.json to be recognized and executed by Claude Code.',
    difficulty: 'easy'
  },

  // Question 232 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'During a critical production incident, your laptop battery dies mid-session with Claude. After restarting, you need to continue the incident response exactly where you left off. How do sessions handle this interruption?',
    option_a: 'Sessions maintain continuity and can be resumed after interruptions with --continue or --resume',
    option_b: 'Sessions are lost on interruption, requiring manual recreation',
    option_c: 'Sessions restart from the beginning with history lost',
    option_d: 'Sessions require manual backup before interruptions',
    correct_answer: 'A',
    explanation: 'Sessions maintain continuity across interruptions and can be seamlessly resumed using --continue or --resume, preserving all conversation history.',
    difficulty: 'medium'
  },

  // Question 233 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team uses conventional commits (feat:, fix:, docs:). You want to validate commit messages match this format before allowing commits. What hook type should you implement?',
    option_a: 'HTTP hook to call a validation API',
    option_b: 'Command hook to execute a validation script',
    option_c: 'Agent hook to spawn a validation subagent',
    option_d: 'Prompt hook to inject commit message guidelines',
    correct_answer: 'B',
    explanation: 'Command hooks execute shell commands, making them ideal for running git-related validation scripts.',
    difficulty: 'medium'
  },

  // Question 234 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your agent hook needs to analyze code, query a database, run tests, and generate reports. What is the scope of tool access available to agent hooks?',
    option_a: 'No tool access, agent hooks run in isolated sandbox',
    option_b: 'Read-only tools for safety',
    option_c: 'Full tool access including Read, Write, Bash, and other tools',
    option_d: 'Limited to file operations only',
    correct_answer: 'C',
    explanation: 'Agent hooks spawn subagents with full tool access, enabling complex automated workflows with all available tools.',
    difficulty: 'medium'
  },

  // Question 235 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team wants code automatically formatted with Prettier every time Claude saves a file. How should you implement this?',
    option_a: 'UserPromptSubmit hook to validate formatting before operations',
    option_b: 'Agent hook to spawn a formatting subagent',
    option_c: 'Prompt hook to inject formatting instructions',
    option_d: 'PostToolUse hook that triggers Prettier after file modifications',
    correct_answer: 'D',
    explanation: 'PostToolUse hooks can automatically run formatting commands like Prettier after file modifications are complete.',
    difficulty: 'medium'
  },

  // Question 236 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your CTO asks: "Why use hooks instead of just documenting policies in CLAUDE.md?" What is the primary benefit of deterministic hook execution?',
    option_a: 'Guaranteed enforcement of workflows and policies, unlike advisory CLAUDE.md instructions',
    option_b: 'Faster processing with lower latency',
    option_c: 'Lower API costs through reduced token usage',
    option_d: 'Simpler configuration with less code',
    correct_answer: 'A',
    explanation: 'Deterministic execution ensures workflows and policies are always enforced, unlike advisory CLAUDE.md instructions that Claude may choose to follow.',
    difficulty: 'hard'
  },

  // Question 237 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You finish a debugging session and close Claude Code. Later that day, you need to reference the conversation history. What happens to session data when Claude Code exits?',
    option_a: 'All data is lost unless manually saved',
    option_b: 'Automatically saved to disk for later resumption',
    option_c: 'Must be manually exported before closing',
    option_d: 'Uploaded to Anthropic\'s cloud storage',
    correct_answer: 'B',
    explanation: 'Session data is automatically saved to disk when Claude Code exits, enabling seamless resumption of conversations later.',
    difficulty: 'easy'
  },

  // Question 238 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are documenting your project\'s .claude directory structure for new team members. Which of these folders is NOT part of the .claude directory?',
    option_a: 'settings.json - hook and permission configuration',
    option_b: 'hooks/ - hook script implementations',
    option_c: 'sessions/ - saved conversation history',
    option_d: 'skills/ - SKILL.md custom command definitions',
    correct_answer: 'C',
    explanation: 'The .claude directory contains settings.json, hooks/, and skills/ folders, but sessions are stored elsewhere, not in .claude/sessions/.',
    difficulty: 'medium'
  },

  // Question 239 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team struggles with inconsistent code quality: some commits have linting errors, others fail tests, and formatting varies. How can hooks systematically improve these workflows?',
    option_a: 'Generate perfect code automatically',
    option_b: 'Increase Claude\'s processing speed',
    option_c: 'Reduce token usage for quality checks',
    option_d: 'Automate linting, testing, and formatting on every code change',
    correct_answer: 'D',
    explanation: 'Hooks automate quality checks like linting, testing, and formatting on every code change, ensuring consistent quality enforcement.',
    difficulty: 'medium'
  },

  // Question 240 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are building a mental model of when hooks execute. How do hook events relate to Claude\'s agentic loop (thinking → tool selection → execution → response)?',
    option_a: 'Hooks fire at specific points during the agentic loop: before tools (PreToolUse), after tools (PostToolUse), etc.',
    option_b: 'Hooks replace the agentic loop entirely with custom logic',
    option_c: 'Hooks run independently in parallel to the agentic loop',
    option_d: 'Hooks disable the agentic loop when configured',
    correct_answer: 'A',
    explanation: 'Hook events fire at specific points during agentic loop execution, enabling intervention at key moments like before/after tool execution.',
    difficulty: 'hard'
  },

  // Question 241 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Three months into using Claude Code, you have 150 sessions. You need to quickly find "that session where we fixed the authentication bug in March." What naming practice would help?',
    option_a: 'Random strings like a3f7k9m2 for security',
    option_b: 'Descriptive names like "2024-03-bugfix-oauth-token-validation"',
    option_c: 'Date stamps only: "2024-03-15"',
    option_d: 'Single letters: A, B, C, D',
    correct_answer: 'B',
    explanation: 'Descriptive session names indicating purpose, date, and context make sessions easier to find and resume later.',
    difficulty: 'easy'
  },

  // Question 242 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You have both command hooks (running local scripts) and HTTP hooks (calling APIs). What is the fundamental difference in how HTTP hooks operate?',
    option_a: 'HTTP hooks execute 50% faster on average',
    option_b: 'HTTP hooks use less memory for operations',
    option_c: 'HTTP hooks make network requests to external services',
    option_d: 'HTTP hooks have no timeout limits',
    correct_answer: 'C',
    explanation: 'HTTP hooks make network requests to external services, while command hooks execute local shell commands.',
    difficulty: 'medium'
  },

  // Question 243 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your ML engineering team runs 8-hour sessions analyzing model performance. After 4 hours, Claude starts losing track of earlier decisions. What is the purpose of context window management in long sessions?',
    option_a: 'Reduce API costs only',
    option_b: 'Speed up Claude\'s response time',
    option_c: 'Improve answer accuracy through compression',
    option_d: 'Prevent context overflow while maintaining conversation coherence through summarization',
    correct_answer: 'D',
    explanation: 'Context window management prevents overflow while maintaining conversation coherence through summarization and memory tools.',
    difficulty: 'medium'
  },

  // Question 244 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You need to validate that npm packages being installed don\'t have known vulnerabilities. This requires querying a security database, analyzing package.json, checking CVEs, and generating a report. When would you use an agent hook instead of a simple command hook?',
    option_a: 'When you need complex reasoning, multi-step analysis, and tool orchestration',
    option_b: 'For simple file read operations',
    option_c: 'To reduce execution time for simple checks',
    option_d: 'For read-only security scanning',
    correct_answer: 'A',
    explanation: 'Agent hooks enable complex reasoning and tool orchestration through subagents, beyond what simple command execution can achieve.',
    difficulty: 'hard'
  },

  // Question 245 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You want to create a hook that runs a TypeScript validation script. What file format should your hook script be?',
    option_a: 'JSON configuration only',
    option_b: 'Executable scripts in any language (shell, Python, TypeScript, etc.)',
    option_c: 'YAML configuration only',
    option_d: 'Markdown documentation files',
    correct_answer: 'B',
    explanation: 'Hook scripts can be executable scripts in any language (shell, Python, TypeScript, etc.) stored in .claude/hooks/.',
    difficulty: 'easy'
  },

  // Question 246 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'During refactoring, Claude suggests two approaches: microservices vs. monolith. You want to explore both deeply without losing either conversation thread. How does session branching help with this experimentation?',
    option_a: 'Speeds up processing through parallel execution',
    option_b: 'Reduces token costs through shared context',
    option_c: 'Allows exploring different approaches while preserving the original conversation',
    option_d: 'Automatically selects the best approach using AI',
    correct_answer: 'C',
    explanation: 'Session branching allows experimenting with different approaches while preserving the original conversation path for comparison.',
    difficulty: 'medium'
  },

  // Question 247 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your manager asks: "We already have CLAUDE.md with detailed guidelines. Why implement hooks?" What capability do hooks provide that CLAUDE.md cannot?',
    option_a: 'Provide helpful context to Claude',
    option_b: 'Suggest development best practices',
    option_c: 'Document team workflows',
    option_d: 'Enforce mandatory workflows and block dangerous operations',
    correct_answer: 'D',
    explanation: 'Hooks can enforce mandatory workflows and block operations deterministically, while CLAUDE.md only provides advisory guidance that may be ignored.',
    difficulty: 'medium'
  },

  // Question 248 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You are designing a deployment workflow: validate code quality (Pre), run tests (Pre), deploy (allowed operation), verify deployment (Post), notify team (Post). What is the recommended approach?',
    option_a: 'Strategically combine multiple hook types (PreToolUse for validation, PostToolUse for verification, HTTP for notifications)',
    option_b: 'Use only PreToolUse hooks for everything',
    option_c: 'Avoid hooks and use CLAUDE.md instead',
    option_d: 'Use a single agent hook for all steps',
    correct_answer: 'A',
    explanation: 'Complex workflows benefit from strategically combining different hook types (PreToolUse for validation, PostToolUse for cleanup, HTTP for notifications).',
    difficulty: 'hard'
  },

  // Question 249 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hooks contain API keys for Slack notifications and database credentials for audit logging. A security audit asks where sensitive configurations should be stored. What is the secure approach?',
    option_a: 'Commit everything to version control for team sharing',
    option_b: 'Store in .claude/settings.json with appropriate .gitignore rules to prevent exposure',
    option_c: 'Share configurations in public repositories for convenience',
    option_d: 'Document credentials in CLAUDE.md',
    correct_answer: 'B',
    explanation: 'Sensitive hook configurations should be in .claude/settings.json with proper .gitignore rules to prevent credential exposure in version control.',
    difficulty: 'medium'
  },

  // Question 250 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You configured three PostToolUse hooks: format-code, run-tests, and notify-team. You need tests to run after formatting completes. How do you control execution order?',
    option_a: 'Hooks execute in random order for performance',
    option_b: 'Hooks execute in alphabetical order by name',
    option_c: 'Hooks execute in the order defined in .claude/settings.json',
    option_d: 'Hooks execute in reverse alphabetical order',
    correct_answer: 'C',
    explanation: 'Multiple hooks for the same event execute in the order defined in .claude/settings.json configuration.',
    difficulty: 'medium'
  },

  // Question 251 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your PostToolUse hook isn\'t triggering after git commits. You need to troubleshoot why. How can you debug hook execution issues?',
    option_a: 'Hooks cannot be debugged, they are black boxes',
    option_b: 'Contact Anthropic support as only they can debug hooks',
    option_c: 'Remove all hooks and start over',
    option_d: 'Check hook logs, test hooks independently outside Claude Code, verify configuration',
    correct_answer: 'D',
    explanation: 'Hook execution issues can be debugged by examining hook logs, testing hooks independently outside Claude, and verifying .claude/settings.json configuration.',
    difficulty: 'medium'
  },

  // Question 252 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your security scanning hook sometimes needs 45 seconds for large codebases but times out. When designing hook timeouts, what is the key consideration?',
    option_a: 'Balance between allowing sufficient processing time and preventing indefinite hangs',
    option_b: 'Always use the maximum 60-second timeout',
    option_c: 'Always use minimum timeout for speed',
    option_d: 'Timeouts are fixed and not configurable',
    correct_answer: 'A',
    explanation: 'Hook timeouts should balance allowing sufficient processing time for legitimate operations while preventing indefinite hangs from errors or infinite loops.',
    difficulty: 'hard'
  },

  // Question 253 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You want to automatically add "Ticket: JIRA-1234" context to every prompt based on your current git branch. How do prompt hooks modify Claude\'s input?',
    option_a: 'Replace the user message entirely',
    option_b: 'Augment, rewrite, or add context to prompts before processing',
    option_c: 'Only validate prompt syntax',
    option_d: 'Compress prompts to save tokens',
    correct_answer: 'B',
    explanation: 'Prompt hooks can augment, rewrite, or add context to prompts before Claude processes them, enabling dynamic context injection.',
    difficulty: 'medium'
  },

  // Question 254 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your .claude directory has both skills/ (custom commands) and hooks/ (automated workflows). A team member asks if they conflict. What is the relationship between skills and hooks?',
    option_a: 'Skills replace hooks in newer versions',
    option_b: 'Hooks replace skills entirely',
    option_c: 'They are complementary: skills provide commands, hooks provide automation',
    option_d: 'They cannot coexist in the same project',
    correct_answer: 'C',
    explanation: 'Skills and hooks are complementary: skills provide custom commands for Claude, while hooks provide automated workflow enforcement.',
    difficulty: 'medium'
  },

  // Question 255 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your security policy prohibits: deleting production databases, pushing to main without PR, accessing customer data files. How should you implement these security policies?',
    option_a: 'Security policies cannot use hooks',
    option_b: 'Use external security tools only',
    option_c: 'Document policies in CLAUDE.md only',
    option_d: 'Use PreToolUse hooks with deny permissions to block unsafe operations before execution',
    correct_answer: 'D',
    explanation: 'PreToolUse hooks with deny permissions can enforce security policies by blocking unsafe operations before execution, even when --dangerously-skip-permissions is used.',
    difficulty: 'hard'
  },

  // Question 256 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook script validate.sh exits with code 1 when validation fails. What happens when Claude Code receives this non-zero exit status?',
    option_a: 'The hook is considered failed and may block the operation depending on hook type',
    option_b: 'The script is retried automatically up to 3 times',
    option_c: 'The status is ignored and operation continues',
    option_d: 'Claude Code crashes with an error',
    correct_answer: 'A',
    explanation: 'Non-zero exit status indicates hook failure, which may block operations depending on the hook type and configuration.',
    difficulty: 'medium'
  },

  // Question 257 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your distributed team works across time zones. A developer in Japan creates a session debugging an issue, then hands off to a developer in London to continue. How do sessions support this collaborative workflow?',
    option_a: 'Real-time collaboration with simultaneous access only',
    option_b: 'Through session file sharing and resumption by different users',
    option_c: 'Through cloud synchronization with conflict resolution',
    option_d: 'Sessions are single-user only and cannot be shared',
    correct_answer: 'B',
    explanation: 'Sessions support collaboration through sharing saved session files that others can resume and continue, enabling asynchronous handoffs.',
    difficulty: 'medium'
  },

  // Question 258 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'During a 6-hour migration session, Claude occasionally forgets decisions made 2 hours ago. What role does the memory tool play in session management?',
    option_a: 'Increases the context window token limit',
    option_b: 'Stores sessions on Anthropic\'s servers',
    option_c: 'Maintains context across long conversations through intelligent summarization',
    option_d: 'Encrypts session data for security',
    correct_answer: 'C',
    explanation: 'The memory tool maintains context across long conversations by intelligently summarizing and preserving important information as the context window fills.',
    difficulty: 'medium'
  },

  // Question 259 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'When Claude pushes code, you want to trigger your CI/CD pipeline by calling https://ci.yourcompany.com/webhook/trigger. Which hook type is designed for this?',
    option_a: 'Prompt hook to add CI/CD instructions',
    option_b: 'Command hook running curl commands',
    option_c: 'Agent hook to manage CI/CD integration',
    option_d: 'HTTP hook to make network requests to external systems',
    correct_answer: 'D',
    explanation: 'HTTP hooks can make network requests to notify external systems like CI/CD pipelines, monitoring services, or webhooks.',
    difficulty: 'medium'
  },

  // Question 260 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook fails with "Permission denied" but the error message doesn\'t explain which file or why. What is a best practice for hook error handling?',
    option_a: 'Provide clear error messages with context, affected resources, and resolution steps',
    option_b: 'Silently ignore all errors to avoid disrupting workflows',
    option_c: 'Always crash immediately on any error',
    option_d: 'Disable error handling for performance',
    correct_answer: 'A',
    explanation: 'Hooks should provide clear error messages with context, affected resources, and suggested resolution steps to facilitate debugging.',
    difficulty: 'medium'
  },

  // Question 261 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team manually runs npm test after code changes, but tests are often forgotten. How can hooks improve your testing workflow?',
    option_a: 'Automatically generate comprehensive test suites',
    option_b: 'Automatically run test suites after code changes via PostToolUse hooks',
    option_c: 'Skip tests when they might fail',
    option_d: 'Replace manual testing entirely',
    correct_answer: 'B',
    explanation: 'PostToolUse hooks can automatically trigger test suites after code changes, ensuring tests are never forgotten.',
    difficulty: 'easy'
  },

  // Question 262 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your legal team asks: "Where is our conversation data stored when using Claude Code?" What is the advantage of file-based session storage?',
    option_a: 'Faster processing with server-side caching',
    option_b: 'Automatic cloud backup and disaster recovery',
    option_c: 'Complete privacy and local control with no data sent to external servers',
    option_d: 'Unlimited storage capacity in the cloud',
    correct_answer: 'C',
    explanation: 'File-based storage provides complete privacy and local control, with no conversation data sent to external servers beyond API calls.',
    difficulty: 'medium'
  },

  // Question 263 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your PreToolUse hook tracks how many times certain dangerous commands are attempted. Your PostToolUse hook needs this count to decide whether to send alerts. How can you pass data between different hook executions?',
    option_a: 'Hooks cannot share data between executions',
    option_b: 'Through global JavaScript variables only',
    option_c: 'Through HTTP API calls exclusively',
    option_d: 'Through files, environment variables, or session context',
    correct_answer: 'D',
    explanation: 'Hooks can share data through files, environment variables, or session context depending on the use case and persistence requirements.',
    difficulty: 'hard'
  },

  // Question 264 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You want to automatically append "[Internal Use Only]" to every user prompt to remind Claude this is a private session. What is the purpose of the UserPromptSubmit hook event?',
    option_a: 'Intercept and process user input before Claude sees it',
    option_b: 'Execute actions after Claude generates a response',
    option_c: 'Block dangerous tool executions',
    option_d: 'Format Claude\'s output for display',
    correct_answer: 'A',
    explanation: 'UserPromptSubmit intercepts user input before Claude processes it, enabling validation, modification, or augmentation of prompts.',
    difficulty: 'medium'
  },

  // Question 265 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team wants automated code reviews: after any code change, run ESLint, check cyclomatic complexity, verify test coverage. How can you implement this code review workflow?',
    option_a: 'Hooks cannot automate code review',
    option_b: 'Use PostToolUse hooks to trigger automated code analysis and linting tools',
    option_c: 'Use only manual review processes',
    option_d: 'Disable hooks during code review',
    correct_answer: 'B',
    explanation: 'PostToolUse hooks can automatically trigger code analysis, linting, and review tools after code changes are complete.',
    difficulty: 'medium'
  },

  // Question 266 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You notice Claude Code responses are slower after implementing 5 hooks. Your manager asks about performance impact. What is the accurate assessment?',
    option_a: 'Hooks always slow down execution by 200-300% regardless of complexity',
    option_b: 'Hooks have zero performance impact, they run in parallel',
    option_c: 'Hooks add execution time proportional to their complexity and operations',
    option_d: 'Hooks actually speed up all operations through optimization',
    correct_answer: 'C',
    explanation: 'Hooks add execution time proportional to their complexity and the operations they perform. Simple hooks add minimal overhead, complex hooks add more.',
    difficulty: 'medium'
  },

  // Question 267 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team wants to track hook configuration changes over time and share configurations across developers. How should you version control hook configurations?',
    option_a: 'Version control is not possible for hooks',
    option_b: 'Use separate Git repositories for hooks only',
    option_c: 'Manual backups to external drives only',
    option_d: 'Commit .claude/settings.json and hooks/ directory to Git (with .gitignore for secrets)',
    correct_answer: 'D',
    explanation: 'Hook configurations in .claude/settings.json and hooks/ can be version controlled through Git, with appropriate .gitignore rules for sensitive data.',
    difficulty: 'easy'
  },

  // Question 268 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'After Claude modifies files, you want to run: npm run build, eslint --fix, and prettier --write. What is a common use case for command hooks?',
    option_a: 'Running build scripts, linters, formatters, and other shell commands',
    option_b: 'Making HTTP requests to external APIs',
    option_c: 'Spawning intelligent subagents for analysis',
    option_d: 'Modifying prompts before processing',
    correct_answer: 'A',
    explanation: 'Command hooks commonly run build scripts, linters, formatters, and other shell commands as part of development workflows.',
    difficulty: 'easy'
  },

  // Question 269 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your data engineering team runs 3-day sessions analyzing petabyte-scale datasets with Claude. The context window fills after the first day. How do sessions handle very long conversations?',
    option_a: 'Conversations are hard-limited to 100 messages',
    option_b: 'Through context summarization and memory tools that preserve key information',
    option_c: 'By automatically deleting old messages without preservation',
    option_d: 'By automatically splitting into multiple sessions',
    correct_answer: 'B',
    explanation: 'Long conversations are managed through context summarization and memory tools that preserve important information while managing the context window.',
    difficulty: 'medium'
  },

  // Question 270 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'A junior developer keeps bypassing tool restrictions with --dangerously-skip-permissions. You need absolute enforcement. What permission level blocks tools regardless of any command-line flags?',
    option_a: 'block - prevents execution with confirmation prompts',
    option_b: 'prevent - shows warnings before blocking',
    option_c: 'deny - absolute block that ignores all override flags',
    option_d: 'reject - queues operations for approval',
    correct_answer: 'C',
    explanation: 'The "deny" permission level provides absolute blocking that ignores --dangerously-skip-permissions and all other override attempts.',
    difficulty: 'easy'
  },

  // Question 271 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'After successful test runs, you want to automatically deploy to staging by running ./deploy.sh staging. How can you implement deployment hooks?',
    option_a: 'Deployment hooks are not supported',
    option_b: 'Through CLAUDE.md documentation only',
    option_c: 'Using prompt hooks to add deployment instructions',
    option_d: 'Using PostToolUse hooks to trigger deployment scripts after successful operations',
    correct_answer: 'D',
    explanation: 'PostToolUse hooks can trigger deployment scripts automatically after successful operations like passing tests or builds.',
    difficulty: 'medium'
  },

  // Question 272 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Before deploying a new PreToolUse hook to production, you want to ensure it handles edge cases correctly. What is the recommended testing approach?',
    option_a: 'Test hooks independently with sample inputs, edge cases, and error conditions',
    option_b: 'Test in production only, hooks are simple',
    option_c: 'No testing needed, hooks are automatically validated',
    option_d: 'Wait for user reports to identify issues',
    correct_answer: 'A',
    explanation: 'Hooks should be tested independently with sample inputs, edge cases, and error conditions before deployment to ensure reliability.',
    difficulty: 'medium'
  },

  // Question 273 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You notice agent hooks have different context from your main Claude session. How do agent hooks differ from the main Claude session?',
    option_a: 'No differences, they share all context',
    option_b: 'Agent hooks run in isolated contexts with specific time (60s) and turn (50) limits',
    option_c: 'Agent hooks have unlimited resources',
    option_d: 'Agent hooks cannot use any tools',
    correct_answer: 'B',
    explanation: 'Agent hooks run in isolated contexts with specific time (60s) and turn (50) limits, separate from the main session.',
    difficulty: 'medium'
  },

  // Question 274 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your project has sessions named: "s1", "s2", "temp", "test", "asdf". Three months later, you can\'t remember what any session was about. What is the purpose of good session naming conventions?',
    option_a: 'No specific purpose, names are arbitrary',
    option_b: 'Required by Claude Code for session management',
    option_c: 'Organize and identify different conversation threads for easier management',
    option_d: 'Improve Claude\'s performance',
    correct_answer: 'C',
    explanation: 'Session naming conventions help organize and identify different conversation threads, making them easier to find and resume.',
    difficulty: 'easy'
  },

  // Question 275 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your CI/CD pipeline needs to: build on code changes, run tests on builds, deploy on passing tests, notify on deployments. How can hooks enhance this CI/CD integration?',
    option_a: 'Hooks cannot integrate with CI/CD systems',
    option_b: 'Only through manual triggers in CI/CD',
    option_c: 'By replacing the entire CI/CD pipeline',
    option_d: 'By automatically triggering builds, tests, and deployments as part of the workflow',
    correct_answer: 'D',
    explanation: 'Hooks can enhance CI/CD by automatically triggering builds, tests, and deployments as part of the development workflow.',
    difficulty: 'medium'
  },

  // Question 276 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook script sets VIOLATION_COUNT=5 during execution. The next hook execution, you try to read VIOLATION_COUNT but it\'s empty. What happens to local variables in hook scripts between executions?',
    option_a: 'Variables are not persisted between hook executions, use files or external storage',
    option_b: 'Variables persist automatically in memory',
    option_c: 'Variables are stored in session state automatically',
    option_d: 'Variables are shared globally across all hooks',
    correct_answer: 'A',
    explanation: 'Local variables in hook scripts are not persisted between executions; persistent data must be stored in files, databases, or other external storage.',
    difficulty: 'medium'
  },

  // Question 277 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your company\'s GDPR compliance requires blocking any operation that accesses files matching *customer-data* or *pii*. How can you implement these compliance checks?',
    option_a: 'Compliance checks cannot be automated with hooks',
    option_b: 'Use PreToolUse hooks to validate operations against compliance rules before execution',
    option_c: 'Use only manual review processes',
    option_d: 'Document rules in CLAUDE.md and trust Claude to follow them',
    correct_answer: 'B',
    explanation: 'PreToolUse hooks can validate operations against compliance rules before execution, blocking non-compliant actions automatically.',
    difficulty: 'hard'
  },

  // Question 278 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'A new team member asks: "What is .claude/settings.json for?" What is the role of this file?',
    option_a: 'Stores complete session history',
    option_b: 'Defines custom slash commands',
    option_c: 'Configures hooks and permissions for the project',
    option_d: 'Stores API keys and authentication tokens',
    correct_answer: 'C',
    explanation: '.claude/settings.json configures hooks and permissions for the Claude Code project.',
    difficulty: 'easy'
  },

  // Question 279 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your PostToolUse hook fails occasionally due to network timeouts when calling external APIs. How should you handle hook failures gracefully?',
    option_a: 'Ignore all failures silently',
    option_b: 'Crash immediately to alert developers',
    option_c: 'Disable hooks permanently after first failure',
    option_d: 'Implement error handling with clear messaging, logging, and fallback behavior',
    correct_answer: 'D',
    explanation: 'Hook failures should be handled with proper error handling, clear error messages, logging for debugging, and defined fallback behavior.',
    difficulty: 'medium'
  },

  // Question 280 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You run multiple agent hooks for different tasks: security scanning, performance analysis, code review. What is a key benefit of this sub-agent architecture?',
    option_a: 'Isolated contexts prevent state pollution between different validation tasks',
    option_b: 'Unlimited processing time for each subagent',
    option_c: 'Lower API costs through context sharing',
    option_d: 'Faster responses through parallel execution',
    correct_answer: 'A',
    explanation: 'Sub-agent architectures provide isolated contexts that prevent state pollution between tasks, enabling specialized handling for different validation needs.',
    difficulty: 'hard'
  },

  // Question 281 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hooks run in production but you have no visibility into success rates, execution times, or failure patterns. How can you monitor hook execution in production?',
    option_a: 'Monitoring is not possible for hooks',
    option_b: 'Implement logging and metrics collection in hook scripts, export to monitoring systems',
    option_c: 'Use only manual observation',
    option_d: 'Hooks automatically report metrics to Anthropic',
    correct_answer: 'B',
    explanation: 'Hook execution should be monitored through logging and metrics collection implemented within hook scripts, exported to monitoring systems like DataDog or Prometheus.',
    difficulty: 'medium'
  },

  // Question 282 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'After 8 hours of conversation, Claude\'s context window is full. You notice older messages being "compacted." What is the purpose of context compaction in sessions?',
    option_a: 'Permanently delete all history to free space',
    option_b: 'Speed up Claude\'s response time',
    option_c: 'Manage the context window by summarizing history while preserving key information',
    option_d: 'Encrypt session data for security',
    correct_answer: 'C',
    explanation: 'Context compaction manages the context window by summarizing conversation history while preserving key information and decisions.',
    difficulty: 'medium'
  },

  // Question 283 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team deploys to dev, staging, and production environments. Hooks need different behavior in each (strict in prod, lenient in dev). How can hooks support multi-environment workflows?',
    option_a: 'Hooks work in single environment only',
    option_b: 'Through manual configuration changes only',
    option_c: 'Hooks cannot distinguish between environments',
    option_d: 'Use environment variables and conditional logic in hook scripts',
    correct_answer: 'D',
    explanation: 'Hooks can support multi-environment workflows using environment variables (like NODE_ENV) and conditional logic to adjust behavior per environment.',
    difficulty: 'hard'
  },

  // Question 284 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook script needs to read ./config/settings.json. You wonder what directory the script runs from. What is the execution context of hook scripts?',
    option_a: 'Same working directory as the Claude Code session',
    option_b: 'Random temporary directory',
    option_c: 'System root directory (/)',
    option_d: 'User home directory (~)',
    correct_answer: 'A',
    explanation: 'Hook scripts execute in the same working directory as the Claude Code session, allowing access to project files with relative paths.',
    difficulty: 'medium'
  },

  // Question 285 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook needs to know which file Claude is about to modify. How do you pass parameters like file paths to hook scripts?',
    option_a: 'Parameters cannot be passed to hooks',
    option_b: 'Through environment variables or script command-line arguments',
    option_c: 'Through global variables only',
    option_d: 'Through HTTP API calls',
    correct_answer: 'B',
    explanation: 'Parameters can be passed to hook scripts through environment variables (like $CLAUDE_FILE_PATH) or command-line arguments.',
    difficulty: 'medium'
  },

  // Question 286 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook script accidentally has chmod 777 permissions allowing any user to modify it. What is a best practice for hook script permissions?',
    option_a: 'Grant full system access for flexibility',
    option_b: 'No permission restrictions needed',
    option_c: 'Follow principle of least privilege: grant minimal necessary permissions',
    option_d: 'Always use maximum permissions (777)',
    correct_answer: 'C',
    explanation: 'Hook scripts should follow the principle of least privilege, receiving only minimal necessary permissions to reduce security risks.',
    difficulty: 'medium'
  },

  // Question 287 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'To prevent abuse, you want to limit Claude to maximum 10 git push operations per hour. How can you implement rate limiting with hooks?',
    option_a: 'Rate limiting is automatically provided by Claude Code',
    option_b: 'Rate limiting is not possible with hooks',
    option_c: 'Use CLAUDE.md to request Claude limit pushes',
    option_d: 'Track operation counts in hook scripts and block when limits are exceeded',
    correct_answer: 'D',
    explanation: 'Rate limiting can be implemented by tracking operation counts in hook scripts (using files or databases) and blocking operations that exceed limits.',
    difficulty: 'hard'
  },

  // Question 288 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team currently runs a post-processing script manually after Claude sessions. What is the advantage of using hooks over manual post-processing scripts?',
    option_a: 'Hooks integrate seamlessly into the workflow and execute automatically at appropriate times',
    option_b: 'Hooks execute 10x faster than scripts',
    option_c: 'Hooks use 50% less memory',
    option_d: 'Hooks are simpler to write than bash scripts',
    correct_answer: 'A',
    explanation: 'Hooks integrate seamlessly into the Claude Code workflow and execute automatically at appropriate times, eliminating manual steps.',
    difficulty: 'medium'
  },

  // Question 289 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You want to temporarily disable your PostToolUse formatting hook while debugging. How do you disable a specific hook temporarily?',
    option_a: 'Delete the hook script file',
    option_b: 'Comment out or remove the hook entry from .claude/settings.json',
    option_c: 'Rename the hook script file',
    option_d: 'Hooks cannot be disabled once configured',
    correct_answer: 'B',
    explanation: 'Hooks can be temporarily disabled by commenting out or removing their configuration entry from .claude/settings.json.',
    difficulty: 'easy'
  },

  // Question 290 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your finance team asks about API costs. You have 5 agent hooks that spawn subagents. What is the relationship between hook execution and API costs?',
    option_a: 'Hooks are completely free and have no cost impact',
    option_b: 'Hooks double API costs regardless of type',
    option_c: 'Agent hooks consume API calls for subagent execution and reasoning',
    option_d: 'Hooks reduce API costs through optimization',
    correct_answer: 'C',
    explanation: 'Agent hooks that spawn subagents consume API calls for their execution and reasoning, impacting costs proportional to subagent complexity.',
    difficulty: 'medium'
  },

  // Question 291 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your documentation is out of sync with code. You want docs automatically updated when code changes. How can hooks improve documentation workflows?',
    option_a: 'Hooks cannot help with documentation',
    option_b: 'Hooks generate all documentation automatically from scratch',
    option_c: 'Hooks delete outdated documentation',
    option_d: 'Hooks trigger documentation generation or validation after code changes',
    correct_answer: 'D',
    explanation: 'Hooks can trigger documentation generation tools (like JSDoc, Sphinx) or validation scripts automatically after code changes to keep docs synchronized.',
    difficulty: 'medium'
  },

  // Question 292 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your team implemented a comprehensive security scanning hook that takes 90 seconds to run. Now all operations are painfully slow. What is a common pitfall when implementing hooks?',
    option_a: 'Creating hooks that are too slow or complex, blocking workflows unnecessarily',
    option_b: 'Using too many different hook types',
    option_c: 'Naming hooks with inconsistent conventions',
    option_d: 'Installing more than 3 hooks total',
    correct_answer: 'A',
    explanation: 'A common pitfall is creating hooks that are too slow or complex, causing workflow delays, timeouts, or blocking. Hooks should be optimized for speed.',
    difficulty: 'hard'
  },

  // Question 293 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You developed useful hooks for validating commits and running tests. How do you share these hook configurations across team members?',
    option_a: 'Hooks cannot be shared between team members',
    option_b: 'Commit .claude/settings.json and hooks/ directory to version control',
    option_c: 'Email configuration files to each team member',
    option_d: 'Use cloud storage services only',
    correct_answer: 'B',
    explanation: 'Hook configurations can be shared by committing .claude/settings.json and hooks/ directory to version control for team access.',
    difficulty: 'easy'
  },

  // Question 294 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your HTTP hook calls an external API with credentials. A security audit highlights several risks. What security consideration is important for HTTP hooks?',
    option_a: 'No security considerations needed',
    option_b: 'HTTP hooks are automatically secure',
    option_c: 'Validate endpoints, use HTTPS, protect credentials, verify certificates',
    option_d: 'Always use HTTP, never HTTPS for performance',
    correct_answer: 'C',
    explanation: 'HTTP hooks should validate endpoints, use HTTPS for secure communication, protect credentials (use environment variables, not hardcoding), and verify SSL certificates.',
    difficulty: 'hard'
  },

  // Question 295 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You fixed a bug two weeks ago but can\'t remember the exact approach. You want to review the conversation where you debugged it. How can sessions help with debugging?',
    option_a: 'Sessions cannot help with debugging',
    option_b: 'Sessions hide error messages for clarity',
    option_c: 'Sessions speed up execution to skip debugging',
    option_d: 'Sessions preserve complete conversation history for review and analysis',
    correct_answer: 'D',
    explanation: 'Sessions preserve complete conversation history, enabling thorough review and analysis of past debugging sessions to recall approaches and solutions.',
    difficulty: 'easy'
  },

  // Question 296 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your hook fails with "Error: validation failed" but developers don\'t know what to fix. What is the recommended approach for hook error reporting?',
    option_a: 'Clear, actionable error messages with context, affected resources, and resolution steps',
    option_b: 'Generic error messages only',
    option_c: 'No error messages to avoid confusion',
    option_d: 'Error codes without explanation',
    correct_answer: 'A',
    explanation: 'Hook errors should include clear, actionable messages with context (what failed), affected resources (which file/operation), and suggested resolution steps.',
    difficulty: 'medium'
  },

  // Question 297 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You have both CLAUDE.md (project guidelines) and a prompt hook (that injects current sprint context). How do prompt hooks interact with CLAUDE.md?',
    option_a: 'Prompt hooks replace CLAUDE.md entirely',
    option_b: 'Prompt hooks can augment or modify prompt content before CLAUDE.md is processed',
    option_c: 'Prompt hooks ignore CLAUDE.md completely',
    option_d: 'Prompt hooks delete CLAUDE.md content',
    correct_answer: 'B',
    explanation: 'Prompt hooks can augment or modify prompt content before CLAUDE.md instructions are processed, enabling dynamic context injection alongside static guidelines.',
    difficulty: 'medium'
  },

  // Question 298 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'You branched your main session into 5 different experimental approaches. Your disk space is running low. What is the impact of session branching on disk space?',
    option_a: 'No impact, branches share storage',
    option_b: 'Reduces disk usage through compression',
    option_c: 'Creates additional session files from branch points, increasing storage requirements',
    option_d: 'Deletes the original session to save space',
    correct_answer: 'C',
    explanation: 'Session branching creates additional session files from the branch point forward, increasing storage requirements proportional to conversation length after branching.',
    difficulty: 'medium'
  },

  // Question 299 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your company policy requires database migrations to be reviewed by a DBA and include rollback scripts. How can you implement these custom validation rules with hooks?',
    option_a: 'Custom validation is not possible with hooks',
    option_b: 'Use PostToolUse hooks to validate after execution',
    option_c: 'Use agent hooks exclusively',
    option_d: 'Use PreToolUse hooks to check conditions and block operations that violate rules',
    correct_answer: 'D',
    explanation: 'PreToolUse hooks can implement custom validation rules, checking conditions (like presence of rollback scripts, DBA approval) before allowing operations to proceed.',
    difficulty: 'medium'
  },

  // Question 300 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Your organization wants to achieve: automated quality enforcement, complete audit trails, reproducible development processes, and collaborative workflows. What is the ultimate goal of combining hooks, sessions, and workflows?',
    option_a: 'Create robust, automated, and repeatable development workflows with full traceability',
    option_b: 'Reduce code complexity in applications',
    option_c: 'Minimize API usage and costs',
    option_d: 'Speed up Claude\'s processing time',
    correct_answer: 'A',
    explanation: 'Combining hooks, sessions, and workflows creates robust, automated, repeatable development processes with full traceability, audit trails, and enforcement of organizational policies.',
    difficulty: 'hard'
  },

  // Question 301 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'During an incident, Claude accidentally executed rm -rf /production/database/. You want to ensure this can NEVER happen again. Which combination provides absolute prevention?',
    option_a: 'CLAUDE.md instructions + training developers',
    option_b: 'PostToolUse hooks to log deletions',
    option_c: 'UserPromptSubmit hooks to warn users',
    option_d: 'PreToolUse hook with "deny" permission checking for /production/ paths',
    correct_answer: 'D',
    explanation: 'PreToolUse hooks with "deny" permission provide absolute prevention by blocking dangerous operations before execution, regardless of --dangerously-skip-permissions flags.',
    difficulty: 'hard'
  },
];
