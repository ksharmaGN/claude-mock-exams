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

// Topic 3: Hooks, Workflows & Sessions (100 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic3Questions: Question[] = [
  // Question 201 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the fundamental difference between hooks and CLAUDE.md?',
    option_a: 'Hooks are optional, CLAUDE.md is mandatory',
    option_b: 'Hooks are deterministic and always execute, CLAUDE.md is advisory',
    option_c: 'Hooks are slower than CLAUDE.md',
    option_d: 'CLAUDE.md has priority over hooks',
    correct_answer: 'B',
    explanation: 'Hooks are deterministic and always execute when their events trigger, while CLAUDE.md contains advisory instructions that Claude may choose to follow.',
    difficulty: 'medium'
  },

  // Question 202 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which hook event fires before Claude processes a user request?',
    option_a: 'PreToolUse',
    option_b: 'PostToolUse',
    option_c: 'UserPromptSubmit',
    option_d: 'AgentHook',
    correct_answer: 'C',
    explanation: 'UserPromptSubmit fires before Claude processes the user\'s request, allowing for request validation or modification.',
    difficulty: 'easy'
  },

  // Question 203 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the maximum timeout for agent hooks?',
    option_a: '30 seconds',
    option_b: '45 seconds',
    option_c: '90 seconds',
    option_d: '60 seconds',
    correct_answer: 'D',
    explanation: 'Agent hooks have a 60-second timeout limit and can run for up to 50 turns.',
    difficulty: 'easy'
  },

  // Question 204 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What permission control can block tools even with --dangerously-skip-permissions?',
    option_a: 'deny',
    option_b: 'block',
    option_c: 'prevent',
    option_d: 'reject',
    correct_answer: 'A',
    explanation: 'The "deny" permission control blocks tools even when --dangerously-skip-permissions is used, providing absolute enforcement.',
    difficulty: 'medium'
  },

  // Question 205 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Where are hook configurations stored?',
    option_a: '.claude/hooks.json',
    option_b: '.claude/settings.json',
    option_c: '.claude/config.json',
    option_d: 'package.json',
    correct_answer: 'B',
    explanation: 'Hook configurations are stored in .claude/settings.json, which manages hooks and permissions settings.',
    difficulty: 'easy'
  },

  // Question 206 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which hook event is best for validation and blocking actions?',
    option_a: 'UserPromptSubmit',
    option_b: 'PostToolUse',
    option_c: 'PreToolUse',
    option_d: 'AgentHook',
    correct_answer: 'C',
    explanation: 'PreToolUse fires before actions execute, making it ideal for validation and blocking operations before they occur.',
    difficulty: 'medium'
  },

  // Question 207 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a session in Claude Code?',
    option_a: 'A single API call',
    option_b: 'A configuration file',
    option_c: 'A server connection',
    option_d: 'Conversation history including prompts, tool calls, and responses',
    correct_answer: 'D',
    explanation: 'Sessions represent the complete conversation history including prompts, tool calls, results, and responses, saved locally to disk.',
    difficulty: 'easy'
  },

  // Question 208 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which command continues a previous Claude session?',
    option_a: 'claude --continue',
    option_b: 'claude --restart',
    option_c: 'claude --reload',
    option_d: 'claude --reconnect',
    correct_answer: 'A',
    explanation: 'The claude --continue command resumes a previous session with its conversation history.',
    difficulty: 'easy'
  },

  // Question 209 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'When does CLAUDE.md get loaded?',
    option_a: 'On every tool call',
    option_b: 'At session start',
    option_c: 'Only when explicitly requested',
    option_d: 'After first user message',
    correct_answer: 'B',
    explanation: 'CLAUDE.md is automatically loaded at session start to provide context and instructions for the conversation.',
    difficulty: 'easy'
  },

  // Question 210 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the purpose of PostToolUse hooks?',
    option_a: 'Prevent tool execution',
    option_b: 'Validate inputs',
    option_c: 'Perform cleanup, testing, or formatting after completion',
    option_d: 'Initialize sessions',
    correct_answer: 'C',
    explanation: 'PostToolUse hooks run after tool completion, ideal for cleanup tasks, automated testing, or code formatting.',
    difficulty: 'medium'
  },

  // Question 211 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How many types of hooks are available in Claude Code?',
    option_a: '2 types',
    option_b: '3 types',
    option_c: '5 types',
    option_d: '4 types',
    correct_answer: 'D',
    explanation: 'There are 4 hook types: command hooks, HTTP hooks, prompt hooks, and agent hooks.',
    difficulty: 'easy'
  },

  // Question 212 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the maximum number of turns for agent hooks?',
    option_a: '50 turns',
    option_b: '100 turns',
    option_c: '25 turns',
    option_d: '75 turns',
    correct_answer: 'A',
    explanation: 'Agent hooks can run for up to 50 turns before timing out.',
    difficulty: 'easy'
  },

  // Question 213 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Where are session files stored?',
    option_a: 'On remote servers',
    option_b: 'Locally to disk',
    option_c: 'In cloud storage',
    option_d: 'In memory only',
    correct_answer: 'B',
    explanation: 'Sessions are saved locally to disk, not on remote servers, following Claude Code\'s file-based architecture.',
    difficulty: 'easy'
  },

  // Question 214 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What feature helps manage long conversation contexts in Sonnet 4.5 beta?',
    option_a: 'Auto-delete',
    option_b: 'Compression',
    option_c: 'Memory tool',
    option_d: 'Cache system',
    correct_answer: 'C',
    explanation: 'The Memory tool in Sonnet 4.5 beta helps manage conversation state and context across long sessions.',
    difficulty: 'medium'
  },

  // Question 215 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which folder contains hook scripts in the .claude directory?',
    option_a: 'scripts/',
    option_b: 'commands/',
    option_c: 'tools/',
    option_d: 'hooks/',
    correct_answer: 'D',
    explanation: 'Hook scripts are stored in the .claude/hooks/ folder within the project directory.',
    difficulty: 'easy'
  },

  // Question 216 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What can agent hooks do that other hook types cannot?',
    option_a: 'Spawn subagents with tool access',
    option_b: 'Modify files directly',
    option_c: 'Access external APIs',
    option_d: 'Cache responses',
    correct_answer: 'A',
    explanation: 'Agent hooks can spawn subagents with full tool access, running for up to 60 seconds and 50 turns.',
    difficulty: 'medium'
  },

  // Question 217 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What architectural approach does Claude Code use for state management?',
    option_a: 'Server-based state',
    option_b: 'File-based architecture',
    option_c: 'Database-backed sessions',
    option_d: 'Cloud-synchronized state',
    correct_answer: 'B',
    explanation: 'Claude Code uses a file-based architecture with no server-side state, storing everything locally.',
    difficulty: 'medium'
  },

  // Question 218 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which command resumes a specific named session?',
    option_a: 'claude --continue',
    option_b: 'claude --load',
    option_c: 'claude --resume',
    option_d: 'claude --open',
    correct_answer: 'C',
    explanation: 'The claude --resume command allows resuming a specific named session.',
    difficulty: 'easy'
  },

  // Question 219 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What replaced the legacy commands/ folder in .claude directory?',
    option_a: 'hooks/',
    option_b: 'scripts/',
    option_c: 'actions/',
    option_d: 'skills/',
    correct_answer: 'D',
    explanation: 'The skills/ folder containing SKILL.md files replaced the legacy commands/ folder.',
    difficulty: 'medium'
  },

  // Question 220 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What automation can be achieved with PostToolUse hooks?',
    option_a: 'Automatic linting, testing, and formatting after code changes',
    option_b: 'Preventing unauthorized tool use',
    option_c: 'Validating user inputs',
    option_d: 'Starting new sessions',
    correct_answer: 'A',
    explanation: 'PostToolUse hooks enable automation of linting, testing, and formatting workflows after tool completion.',
    difficulty: 'medium'
  },

  // Question 221 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How does session branching work in Claude Code?',
    option_a: 'Automatic branching every 10 messages',
    option_b: 'Manual branching to explore different conversation paths',
    option_c: 'Random branching for parallel processing',
    option_d: 'Branching is not supported',
    correct_answer: 'B',
    explanation: 'Session branching allows manually creating alternate conversation paths from a given point in history.',
    difficulty: 'medium'
  },

  // Question 222 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the relationship between hooks and permissions?',
    option_a: 'Hooks override all permissions',
    option_b: 'Permissions are independent of hooks',
    option_c: 'Hooks can enforce permissions that override --dangerously-skip-permissions',
    option_d: 'Permissions disable hooks',
    correct_answer: 'C',
    explanation: 'Hooks with "deny" permissions can enforce restrictions even when --dangerously-skip-permissions is used.',
    difficulty: 'hard'
  },

  // Question 223 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What happens to conversation history during context compaction?',
    option_a: 'All history is deleted',
    option_b: 'History is moved to external storage',
    option_c: 'History is encrypted',
    option_d: 'History is summarized to manage context window',
    correct_answer: 'D',
    explanation: 'Context compaction summarizes conversation history to efficiently manage the context window while preserving important information.',
    difficulty: 'medium'
  },

  // Question 224 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which hook type allows HTTP requests to external services?',
    option_a: 'HTTP hooks',
    option_b: 'Command hooks',
    option_c: 'Agent hooks',
    option_d: 'Prompt hooks',
    correct_answer: 'A',
    explanation: 'HTTP hooks enable making HTTP requests to external services during hook execution.',
    difficulty: 'easy'
  },

  // Question 225 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the primary use case for prompt hooks?',
    option_a: 'Execute shell commands',
    option_b: 'Modify or enhance prompts before processing',
    option_c: 'Store session data',
    option_d: 'Manage file permissions',
    correct_answer: 'B',
    explanation: 'Prompt hooks modify or enhance prompts before they are processed by Claude.',
    difficulty: 'medium'
  },

  // Question 226 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you organize multiple Claude sessions effectively?',
    option_a: 'Use numbered folders',
    option_b: 'Create separate projects',
    option_c: 'Use session naming conventions',
    option_d: 'Store in different drives',
    correct_answer: 'C',
    explanation: 'Session naming conventions help organize and identify different conversation threads effectively.',
    difficulty: 'easy'
  },

  // Question 227 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a key advantage of sub-agent architectures for state management?',
    option_a: 'Faster processing',
    option_b: 'Lower costs',
    option_c: 'Simpler code',
    option_d: 'Isolated contexts and specialized state handling',
    correct_answer: 'D',
    explanation: 'Sub-agent architectures provide isolated contexts with specialized state handling, improving modularity and reliability.',
    difficulty: 'hard'
  },

  // Question 228 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is stored in SKILL.md files?',
    option_a: 'Skill definitions and custom slash commands',
    option_b: 'Session histories',
    option_c: 'Hook configurations',
    option_d: 'Permission settings',
    correct_answer: 'A',
    explanation: 'SKILL.md files contain skill definitions and custom slash commands in the .claude/skills/ directory.',
    difficulty: 'easy'
  },

  // Question 229 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What happens when a PreToolUse hook returns an error?',
    option_a: 'The error is logged but tool executes',
    option_b: 'The tool execution is blocked',
    option_c: 'The session ends',
    option_d: 'The hook is disabled',
    correct_answer: 'B',
    explanation: 'When PreToolUse hooks return errors, the tool execution is blocked, preventing the action from proceeding.',
    difficulty: 'medium'
  },

  // Question 230 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which hook event is ideal for implementing audit logging?',
    option_a: 'UserPromptSubmit',
    option_b: 'PreToolUse',
    option_c: 'PostToolUse',
    option_d: 'AgentHook',
    correct_answer: 'C',
    explanation: 'PostToolUse is ideal for audit logging as it captures what actually happened after tool execution completes.',
    difficulty: 'medium'
  },

  // Question 231 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is required for a hook to be recognized by Claude Code?',
    option_a: 'Registration in package.json',
    option_b: 'API key configuration',
    option_c: 'Server deployment',
    option_d: 'Configuration in .claude/settings.json',
    correct_answer: 'D',
    explanation: 'Hooks must be configured in .claude/settings.json to be recognized and executed by Claude Code.',
    difficulty: 'easy'
  },

  // Question 232 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do sessions handle interruptions in Claude Code?',
    option_a: 'Sessions maintain continuity and can be resumed after interruptions',
    option_b: 'Sessions are lost on interruption',
    option_c: 'Sessions restart from beginning',
    option_d: 'Sessions require manual backup',
    correct_answer: 'A',
    explanation: 'Sessions maintain continuity across interruptions and can be seamlessly resumed using --continue or --resume.',
    difficulty: 'medium'
  },

  // Question 233 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What type of hook would you use to validate git commit messages?',
    option_a: 'HTTP hook',
    option_b: 'Command hook',
    option_c: 'Agent hook',
    option_d: 'Prompt hook',
    correct_answer: 'B',
    explanation: 'Command hooks execute shell commands, making them ideal for running git-related validation scripts.',
    difficulty: 'medium'
  },

  // Question 234 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the scope of tool access for agent hooks?',
    option_a: 'No tool access',
    option_b: 'Read-only tools',
    option_c: 'Full tool access',
    option_d: 'Limited to file operations',
    correct_answer: 'C',
    explanation: 'Agent hooks spawn subagents with full tool access, enabling complex automated workflows.',
    difficulty: 'medium'
  },

  // Question 235 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement automatic code formatting on save?',
    option_a: 'UserPromptSubmit hook',
    option_b: 'Agent hook',
    option_c: 'Prompt hook',
    option_d: 'PostToolUse hook with formatting command',
    correct_answer: 'D',
    explanation: 'PostToolUse hooks can automatically run formatting commands after file modifications are complete.',
    difficulty: 'medium'
  },

  // Question 236 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the primary benefit of deterministic hook execution?',
    option_a: 'Guaranteed enforcement of workflows and policies',
    option_b: 'Faster processing',
    option_c: 'Lower API costs',
    option_d: 'Simpler configuration',
    correct_answer: 'A',
    explanation: 'Deterministic execution ensures workflows and policies are always enforced, unlike advisory CLAUDE.md instructions.',
    difficulty: 'hard'
  },

  // Question 237 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What happens to session data when Claude Code exits?',
    option_a: 'All data is lost',
    option_b: 'Automatically saved to disk for later resumption',
    option_c: 'Must be manually saved',
    option_d: 'Uploaded to cloud',
    correct_answer: 'B',
    explanation: 'Session data is automatically saved to disk, enabling seamless resumption of conversations later.',
    difficulty: 'easy'
  },

  // Question 238 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which directory structure element is NOT part of .claude/?',
    option_a: 'settings.json',
    option_b: 'hooks/',
    option_c: 'sessions/',
    option_d: 'skills/',
    correct_answer: 'C',
    explanation: 'The .claude directory contains settings.json, hooks/, and skills/ folders, but sessions/ is not part of its structure.',
    difficulty: 'medium'
  },

  // Question 239 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can hooks improve code quality workflows?',
    option_a: 'By generating code automatically',
    option_b: 'By increasing processing speed',
    option_c: 'By reducing token usage',
    option_d: 'By automating linting, testing, and formatting on every change',
    correct_answer: 'D',
    explanation: 'Hooks automate quality checks like linting, testing, and formatting on every code change, ensuring consistent quality.',
    difficulty: 'medium'
  },

  // Question 240 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the relationship between hook events and the agentic loop?',
    option_a: 'Hooks fire at specific points during the agentic loop execution',
    option_b: 'Hooks replace the agentic loop',
    option_c: 'Hooks run independently of the agentic loop',
    option_d: 'Hooks disable the agentic loop',
    correct_answer: 'A',
    explanation: 'Hook events fire at specific points during agentic loop execution, enabling intervention at key moments.',
    difficulty: 'hard'
  },

  // Question 241 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a best practice for naming sessions?',
    option_a: 'Use random strings',
    option_b: 'Use descriptive names indicating purpose or context',
    option_c: 'Use date stamps only',
    option_d: 'Use single letters',
    correct_answer: 'B',
    explanation: 'Descriptive session names indicating purpose or context make sessions easier to find and resume later.',
    difficulty: 'easy'
  },

  // Question 242 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do HTTP hooks differ from command hooks?',
    option_a: 'HTTP hooks are faster',
    option_b: 'HTTP hooks use less memory',
    option_c: 'HTTP hooks make network requests to external services',
    option_d: 'HTTP hooks have no timeout',
    correct_answer: 'C',
    explanation: 'HTTP hooks make network requests to external services, while command hooks execute local shell commands.',
    difficulty: 'medium'
  },

  // Question 243 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the purpose of context window management in sessions?',
    option_a: 'Reduce costs only',
    option_b: 'Speed up processing',
    option_c: 'Improve accuracy',
    option_d: 'Prevent context overflow while maintaining conversation coherence',
    correct_answer: 'D',
    explanation: 'Context window management prevents overflow while maintaining conversation coherence through summarization and memory tools.',
    difficulty: 'medium'
  },

  // Question 244 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'When would you use an agent hook instead of a command hook?',
    option_a: 'When you need complex reasoning and tool orchestration',
    option_b: 'For simple file operations',
    option_c: 'To reduce execution time',
    option_d: 'For read-only operations',
    correct_answer: 'A',
    explanation: 'Agent hooks enable complex reasoning and tool orchestration through subagents, beyond simple command execution.',
    difficulty: 'hard'
  },

  // Question 245 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the file format for hook scripts?',
    option_a: 'JSON only',
    option_b: 'Executable scripts (shell, Python, etc.)',
    option_c: 'YAML only',
    option_d: 'Markdown only',
    correct_answer: 'B',
    explanation: 'Hook scripts can be executable scripts in any language (shell, Python, etc.) stored in .claude/hooks/.',
    difficulty: 'easy'
  },

  // Question 246 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How does session branching help with experimentation?',
    option_a: 'It speeds up processing',
    option_b: 'It reduces token costs',
    option_c: 'It allows exploring different approaches without losing original conversation',
    option_d: 'It automatically selects the best approach',
    correct_answer: 'C',
    explanation: 'Session branching allows experimenting with different approaches while preserving the original conversation path.',
    difficulty: 'medium'
  },

  // Question 247 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What capability do hooks provide that CLAUDE.md cannot?',
    option_a: 'Provide context to Claude',
    option_b: 'Suggest best practices',
    option_c: 'Document workflows',
    option_d: 'Enforce mandatory workflows and block operations',
    correct_answer: 'D',
    explanation: 'Hooks can enforce mandatory workflows and block operations, while CLAUDE.md only provides advisory guidance.',
    difficulty: 'medium'
  },

  // Question 248 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the recommended approach for complex workflow automation?',
    option_a: 'Combine multiple hook types (Pre, Post, Agent) strategically',
    option_b: 'Use only PreToolUse hooks',
    option_c: 'Avoid hooks entirely',
    option_d: 'Use CLAUDE.md instead',
    correct_answer: 'A',
    explanation: 'Complex workflows benefit from strategically combining different hook types (PreToolUse, PostToolUse, Agent hooks).',
    difficulty: 'hard'
  },

  // Question 249 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Where should sensitive hook configurations be stored?',
    option_a: 'In version control',
    option_b: 'In .claude/settings.json with appropriate .gitignore rules',
    option_c: 'In public repositories',
    option_d: 'In CLAUDE.md',
    correct_answer: 'B',
    explanation: 'Sensitive hook configurations should be in .claude/settings.json with proper .gitignore rules to prevent exposure.',
    difficulty: 'medium'
  },

  // Question 250 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the execution order when multiple hooks are configured for the same event?',
    option_a: 'Random order',
    option_b: 'Alphabetical order',
    option_c: 'Defined in settings.json configuration order',
    option_d: 'Reverse alphabetical order',
    correct_answer: 'C',
    explanation: 'Multiple hooks for the same event execute in the order defined in .claude/settings.json configuration.',
    difficulty: 'medium'
  },

  // Question 251 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you debug hook execution issues?',
    option_a: 'Hooks cannot be debugged',
    option_b: 'Only through Claude support',
    option_c: 'By removing all hooks',
    option_d: 'Check hook logs and test hooks independently',
    correct_answer: 'D',
    explanation: 'Hook execution issues can be debugged by examining hook logs and testing hooks independently outside Claude.',
    difficulty: 'medium'
  },

  // Question 252 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a key consideration when designing hook timeouts?',
    option_a: 'Balance between allowing sufficient processing time and preventing hangs',
    option_b: 'Always use maximum timeout',
    option_c: 'Always use minimum timeout',
    option_d: 'Timeouts are not configurable',
    correct_answer: 'A',
    explanation: 'Hook timeouts should balance allowing sufficient processing time while preventing indefinite hangs.',
    difficulty: 'hard'
  },

  // Question 253 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do prompt hooks modify the input to Claude?',
    option_a: 'They replace the user message entirely',
    option_b: 'They can augment, rewrite, or add context to prompts',
    option_c: 'They only validate syntax',
    option_d: 'They compress prompts',
    correct_answer: 'B',
    explanation: 'Prompt hooks can augment, rewrite, or add context to prompts before Claude processes them.',
    difficulty: 'medium'
  },

  // Question 254 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the relationship between skills and hooks?',
    option_a: 'Skills replace hooks',
    option_b: 'Hooks replace skills',
    option_c: 'They are complementary: skills provide commands, hooks provide automation',
    option_d: 'They cannot coexist',
    correct_answer: 'C',
    explanation: 'Skills and hooks are complementary: skills provide custom commands while hooks provide automated workflow enforcement.',
    difficulty: 'medium'
  },

  // Question 255 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement security policies using hooks?',
    option_a: 'Security policies cannot use hooks',
    option_b: 'Only through external tools',
    option_c: 'Using CLAUDE.md only',
    option_d: 'Use PreToolUse hooks with deny permissions to block unsafe operations',
    correct_answer: 'D',
    explanation: 'PreToolUse hooks with deny permissions can enforce security policies by blocking unsafe operations before execution.',
    difficulty: 'hard'
  },

  // Question 256 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What happens when a hook script exits with non-zero status?',
    option_a: 'The hook is considered failed and may block the operation',
    option_b: 'The script is retried automatically',
    option_c: 'The status is ignored',
    option_d: 'Claude Code crashes',
    correct_answer: 'A',
    explanation: 'Non-zero exit status indicates hook failure, which may block operations depending on the hook type and configuration.',
    difficulty: 'medium'
  },

  // Question 257 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do sessions support collaborative workflows?',
    option_a: 'Real-time collaboration only',
    option_b: 'Through session sharing and resumption',
    option_c: 'Through cloud synchronization',
    option_d: 'Sessions are single-user only',
    correct_answer: 'B',
    explanation: 'Sessions support collaboration through sharing saved session files that others can resume and continue.',
    difficulty: 'medium'
  },

  // Question 258 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the memory tool\'s role in session management?',
    option_a: 'Increases token limits',
    option_b: 'Stores sessions remotely',
    option_c: 'Helps maintain context across long conversations through summarization',
    option_d: 'Encrypts session data',
    correct_answer: 'C',
    explanation: 'The memory tool maintains context across long conversations by intelligently summarizing and preserving important information.',
    difficulty: 'medium'
  },

  // Question 259 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'Which hook type would you use to notify external systems of code changes?',
    option_a: 'Prompt hook',
    option_b: 'Command hook',
    option_c: 'Agent hook',
    option_d: 'HTTP hook',
    correct_answer: 'D',
    explanation: 'HTTP hooks can make network requests to notify external systems like CI/CD pipelines or monitoring services.',
    difficulty: 'medium'
  },

  // Question 260 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a best practice for hook error handling?',
    option_a: 'Provide clear error messages and logging for debugging',
    option_b: 'Silently ignore all errors',
    option_c: 'Always crash on errors',
    option_d: 'Disable error handling',
    correct_answer: 'A',
    explanation: 'Hooks should provide clear error messages and logging to facilitate debugging and understanding failures.',
    difficulty: 'medium'
  },

  // Question 261 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can hooks improve testing workflows?',
    option_a: 'By generating tests automatically',
    option_b: 'By running test suites automatically after code changes',
    option_c: 'By skipping tests',
    option_d: 'By replacing manual testing',
    correct_answer: 'B',
    explanation: 'PostToolUse hooks can automatically trigger test suites after code changes, ensuring continuous testing.',
    difficulty: 'easy'
  },

  // Question 262 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the advantage of file-based session storage?',
    option_a: 'Faster processing',
    option_b: 'Cloud synchronization',
    option_c: 'Complete privacy and local control over data',
    option_d: 'Unlimited storage',
    correct_answer: 'C',
    explanation: 'File-based storage provides complete privacy and local control, with no data sent to external servers.',
    difficulty: 'medium'
  },

  // Question 263 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do you pass data between different hook executions?',
    option_a: 'Hooks cannot share data',
    option_b: 'Through global variables only',
    option_c: 'Through API calls',
    option_d: 'Through files, environment variables, or session context',
    correct_answer: 'D',
    explanation: 'Hooks can share data through files, environment variables, or session context depending on the use case.',
    difficulty: 'hard'
  },

  // Question 264 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the purpose of the UserPromptSubmit hook event?',
    option_a: 'Intercept and process user input before Claude sees it',
    option_b: 'Execute after Claude responds',
    option_c: 'Block tool execution',
    option_d: 'Format output',
    correct_answer: 'A',
    explanation: 'UserPromptSubmit intercepts user input before Claude processes it, enabling validation or modification.',
    difficulty: 'medium'
  },

  // Question 265 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement code review workflows with hooks?',
    option_a: 'Hooks cannot help with code review',
    option_b: 'Use PostToolUse hooks to trigger automated code analysis and linting',
    option_c: 'Use only manual review',
    option_d: 'Disable hooks during review',
    correct_answer: 'B',
    explanation: 'PostToolUse hooks can automatically trigger code analysis, linting, and review tools after changes.',
    difficulty: 'medium'
  },

  // Question 266 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the impact of hooks on Claude Code performance?',
    option_a: 'Hooks always slow down execution significantly',
    option_b: 'Hooks have no performance impact',
    option_c: 'Hooks add execution time based on their complexity and operations',
    option_d: 'Hooks speed up all operations',
    correct_answer: 'C',
    explanation: 'Hooks add execution time proportional to their complexity and the operations they perform.',
    difficulty: 'medium'
  },

  // Question 267 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you version control hook configurations?',
    option_a: 'Version control is not possible',
    option_b: 'Use separate repositories',
    option_c: 'Manual backups only',
    option_d: 'Commit .claude/settings.json and hooks/ directory to git',
    correct_answer: 'D',
    explanation: 'Hook configurations in .claude/settings.json and hooks/ can be version controlled through git (with appropriate .gitignore for secrets).',
    difficulty: 'easy'
  },

  // Question 268 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a common use case for command hooks?',
    option_a: 'Running build scripts, linters, or formatters',
    option_b: 'Making HTTP requests',
    option_c: 'Spawning subagents',
    option_d: 'Modifying prompts',
    correct_answer: 'A',
    explanation: 'Command hooks commonly run build scripts, linters, formatters, and other shell commands as part of workflows.',
    difficulty: 'easy'
  },

  // Question 269 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do sessions handle very long conversations?',
    option_a: 'Conversations are limited to 100 messages',
    option_b: 'Through context summarization and memory tools',
    option_c: 'By deleting old messages automatically',
    option_d: 'By splitting into multiple sessions automatically',
    correct_answer: 'B',
    explanation: 'Long conversations are managed through context summarization and memory tools that preserve important information.',
    difficulty: 'medium'
  },

  // Question 270 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What permission level blocks tools regardless of command-line flags?',
    option_a: 'block',
    option_b: 'prevent',
    option_c: 'deny',
    option_d: 'reject',
    correct_answer: 'C',
    explanation: 'The "deny" permission level blocks tools even when --dangerously-skip-permissions is used.',
    difficulty: 'easy'
  },

  // Question 271 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement deployment hooks?',
    option_a: 'Deployment hooks are not supported',
    option_b: 'Through CLAUDE.md only',
    option_c: 'Using prompt hooks',
    option_d: 'Using PostToolUse hooks to trigger deployment scripts',
    correct_answer: 'D',
    explanation: 'PostToolUse hooks can trigger deployment scripts after successful code changes or builds.',
    difficulty: 'medium'
  },

  // Question 272 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the recommended way to test hooks before deployment?',
    option_a: 'Test hooks independently with sample inputs and edge cases',
    option_b: 'Test in production only',
    option_c: 'No testing needed',
    option_d: 'Wait for user reports',
    correct_answer: 'A',
    explanation: 'Hooks should be tested independently with sample inputs and edge cases before deployment to ensure reliability.',
    difficulty: 'medium'
  },

  // Question 273 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do agent hooks differ from the main Claude session?',
    option_a: 'No differences',
    option_b: 'Agent hooks run in isolated contexts with time and turn limits',
    option_c: 'Agent hooks have unlimited resources',
    option_d: 'Agent hooks cannot use tools',
    correct_answer: 'B',
    explanation: 'Agent hooks run in isolated contexts with specific time (60s) and turn (50) limits, separate from the main session.',
    difficulty: 'medium'
  },

  // Question 274 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the purpose of session naming conventions?',
    option_a: 'No specific purpose',
    option_b: 'Required by Claude Code',
    option_c: 'Organize and identify different conversation threads',
    option_d: 'Improve performance',
    correct_answer: 'C',
    explanation: 'Session naming conventions help organize and identify different conversation threads for easier management.',
    difficulty: 'easy'
  },

  // Question 275 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can hooks enhance CI/CD integration?',
    option_a: 'Hooks cannot integrate with CI/CD',
    option_b: 'Only through manual processes',
    option_c: 'By replacing CI/CD entirely',
    option_d: 'By triggering builds, tests, and deployments automatically',
    correct_answer: 'D',
    explanation: 'Hooks can enhance CI/CD by automatically triggering builds, tests, and deployments as part of the development workflow.',
    difficulty: 'medium'
  },

  // Question 276 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What happens to local variables in hook scripts between executions?',
    option_a: 'Variables are not persisted between hook executions',
    option_b: 'Variables persist automatically',
    option_c: 'Variables are stored in session',
    option_d: 'Variables are shared globally',
    correct_answer: 'A',
    explanation: 'Local variables in hook scripts are not persisted between executions; persistent data must be stored externally.',
    difficulty: 'medium'
  },

  // Question 277 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement compliance checks with hooks?',
    option_a: 'Compliance checks are not possible',
    option_b: 'Use PreToolUse hooks to validate against compliance rules',
    option_c: 'Use only manual checks',
    option_d: 'Use CLAUDE.md suggestions',
    correct_answer: 'B',
    explanation: 'PreToolUse hooks can validate operations against compliance rules before execution, blocking non-compliant actions.',
    difficulty: 'hard'
  },

  // Question 278 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the role of .claude/settings.json?',
    option_a: 'Store session history',
    option_b: 'Define custom commands',
    option_c: 'Configure hooks and permissions',
    option_d: 'Store API keys',
    correct_answer: 'C',
    explanation: '.claude/settings.json configures hooks and permissions for the Claude Code project.',
    difficulty: 'easy'
  },

  // Question 279 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do you handle hook failures gracefully?',
    option_a: 'Ignore all failures',
    option_b: 'Crash immediately',
    option_c: 'Disable hooks permanently',
    option_d: 'Implement error handling with clear messaging and fallback behavior',
    correct_answer: 'D',
    explanation: 'Hook failures should be handled with error handling, clear messaging, and defined fallback behavior.',
    difficulty: 'medium'
  },

  // Question 280 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a key benefit of sub-agent architectures?',
    option_a: 'Isolated contexts prevent state pollution between tasks',
    option_b: 'Unlimited processing time',
    option_c: 'Lower costs',
    option_d: 'Faster responses',
    correct_answer: 'A',
    explanation: 'Sub-agent architectures provide isolated contexts, preventing state pollution and enabling specialized handling.',
    difficulty: 'hard'
  },

  // Question 281 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you monitor hook execution in production?',
    option_a: 'Monitoring is not possible',
    option_b: 'Implement logging and metrics collection in hook scripts',
    option_c: 'Use only manual observation',
    option_d: 'Hooks self-monitor automatically',
    correct_answer: 'B',
    explanation: 'Hook execution should be monitored through logging and metrics collection implemented within hook scripts.',
    difficulty: 'medium'
  },

  // Question 282 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the purpose of context compaction in sessions?',
    option_a: 'Delete all history',
    option_b: 'Speed up processing',
    option_c: 'Manage context window by summarizing while preserving key information',
    option_d: 'Encrypt session data',
    correct_answer: 'C',
    explanation: 'Context compaction manages the context window by summarizing conversation history while preserving key information.',
    difficulty: 'medium'
  },

  // Question 283 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can hooks support multi-environment workflows?',
    option_a: 'Hooks work in single environment only',
    option_b: 'Through manual configuration only',
    option_c: 'Hooks cannot distinguish environments',
    option_d: 'Use environment variables and conditional logic in hooks',
    correct_answer: 'D',
    explanation: 'Hooks can support multi-environment workflows using environment variables and conditional logic.',
    difficulty: 'hard'
  },

  // Question 284 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the execution context of hook scripts?',
    option_a: 'Same working directory as Claude Code session',
    option_b: 'Random directory',
    option_c: 'System root directory',
    option_d: 'Home directory',
    correct_answer: 'A',
    explanation: 'Hook scripts execute in the same working directory as the Claude Code session, accessing project files.',
    difficulty: 'medium'
  },

  // Question 285 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do you pass parameters to hook scripts?',
    option_a: 'Parameters cannot be passed',
    option_b: 'Through environment variables or script arguments',
    option_c: 'Through global variables only',
    option_d: 'Through API calls',
    correct_answer: 'B',
    explanation: 'Parameters can be passed to hook scripts through environment variables or command-line arguments.',
    difficulty: 'medium'
  },

  // Question 286 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a best practice for hook script permissions?',
    option_a: 'Grant full system access',
    option_b: 'No permission restrictions',
    option_c: 'Follow principle of least privilege, grant minimal necessary permissions',
    option_d: 'Use maximum permissions always',
    correct_answer: 'C',
    explanation: 'Hook scripts should follow the principle of least privilege, receiving only minimal necessary permissions.',
    difficulty: 'medium'
  },

  // Question 287 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement rate limiting with hooks?',
    option_a: 'Rate limiting is automatic',
    option_b: 'Rate limiting is not possible',
    option_c: 'Use CLAUDE.md only',
    option_d: 'Track usage in hook scripts and block excessive operations',
    correct_answer: 'D',
    explanation: 'Rate limiting can be implemented by tracking usage in hook scripts and blocking operations that exceed limits.',
    difficulty: 'hard'
  },

  // Question 288 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the advantage of using hooks over post-processing scripts?',
    option_a: 'Hooks integrate seamlessly into the workflow and execute automatically',
    option_b: 'Hooks are faster',
    option_c: 'Hooks use less memory',
    option_d: 'Hooks are simpler to write',
    correct_answer: 'A',
    explanation: 'Hooks integrate seamlessly into the Claude Code workflow and execute automatically at appropriate times.',
    difficulty: 'medium'
  },

  // Question 289 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do you disable a specific hook temporarily?',
    option_a: 'Delete the hook script',
    option_b: 'Comment out or remove the hook from .claude/settings.json',
    option_c: 'Rename the hook file',
    option_d: 'Hooks cannot be disabled',
    correct_answer: 'B',
    explanation: 'Hooks can be temporarily disabled by commenting out or removing their configuration from .claude/settings.json.',
    difficulty: 'easy'
  },

  // Question 290 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the relationship between hook execution and API costs?',
    option_a: 'Hooks are free and have no cost impact',
    option_b: 'Hooks double API costs',
    option_c: 'Agent hooks consume API calls for subagent execution',
    option_d: 'Hooks reduce API costs',
    correct_answer: 'C',
    explanation: 'Agent hooks that spawn subagents consume API calls for their execution, impacting costs.',
    difficulty: 'medium'
  },

  // Question 291 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can hooks improve documentation workflows?',
    option_a: 'Hooks cannot help with documentation',
    option_b: 'By generating all documentation automatically',
    option_c: 'By deleting old documentation',
    option_d: 'By triggering documentation generation or validation after code changes',
    correct_answer: 'D',
    explanation: 'Hooks can trigger documentation generation or validation automatically after code changes to keep docs synchronized.',
    difficulty: 'medium'
  },

  // Question 292 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is a common pitfall when implementing hooks?',
    option_a: 'Creating hooks that are too slow or complex, blocking workflows',
    option_b: 'Using too many hook types',
    option_c: 'Naming hooks incorrectly',
    option_d: 'Installing too many hooks',
    correct_answer: 'A',
    explanation: 'A common pitfall is creating hooks that are too slow or complex, causing workflow delays or blocking.',
    difficulty: 'hard'
  },

  // Question 293 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do you share hook configurations across team members?',
    option_a: 'Hooks cannot be shared',
    option_b: 'Commit .claude/settings.json and hooks/ to version control',
    option_c: 'Email configuration files',
    option_d: 'Use cloud storage only',
    correct_answer: 'B',
    explanation: 'Hook configurations can be shared by committing .claude/settings.json and hooks/ directory to version control.',
    difficulty: 'easy'
  },

  // Question 294 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What security consideration is important for HTTP hooks?',
    option_a: 'No security considerations needed',
    option_b: 'HTTP hooks are always secure',
    option_c: 'Validate endpoints, use HTTPS, and protect credentials',
    option_d: 'Use HTTP only, never HTTPS',
    correct_answer: 'C',
    explanation: 'HTTP hooks should validate endpoints, use HTTPS for secure communication, and protect credentials properly.',
    difficulty: 'hard'
  },

  // Question 295 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can sessions help with debugging?',
    option_a: 'Sessions cannot help with debugging',
    option_b: 'By hiding error messages',
    option_c: 'By speeding up execution',
    option_d: 'By preserving complete conversation history for review and analysis',
    correct_answer: 'D',
    explanation: 'Sessions preserve complete conversation history, enabling thorough review and analysis for debugging.',
    difficulty: 'easy'
  },

  // Question 296 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the recommended approach for hook error reporting?',
    option_a: 'Clear, actionable error messages with context and resolution steps',
    option_b: 'Generic error messages only',
    option_c: 'No error messages',
    option_d: 'Error codes without explanation',
    correct_answer: 'A',
    explanation: 'Hook errors should include clear, actionable messages with context and suggested resolution steps.',
    difficulty: 'medium'
  },

  // Question 297 - Answer: B
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How do prompt hooks interact with CLAUDE.md?',
    option_a: 'They replace CLAUDE.md',
    option_b: 'They can augment or modify content before CLAUDE.md is processed',
    option_c: 'They ignore CLAUDE.md',
    option_d: 'They delete CLAUDE.md',
    correct_answer: 'B',
    explanation: 'Prompt hooks can augment or modify prompt content before CLAUDE.md instructions are processed.',
    difficulty: 'medium'
  },

  // Question 298 - Answer: C
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the impact of session branching on disk space?',
    option_a: 'No impact',
    option_b: 'Reduces disk usage',
    option_c: 'Creates additional session files, increasing storage requirements',
    option_d: 'Deletes original session',
    correct_answer: 'C',
    explanation: 'Session branching creates additional session files from branch points, increasing storage requirements.',
    difficulty: 'medium'
  },

  // Question 299 - Answer: D
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'How can you implement custom validation rules with hooks?',
    option_a: 'Validation is not possible with hooks',
    option_b: 'Use PostToolUse hooks only',
    option_c: 'Use agent hooks only',
    option_d: 'Use PreToolUse hooks to check conditions before allowing operations',
    correct_answer: 'D',
    explanation: 'PreToolUse hooks can implement custom validation rules, checking conditions before allowing operations to proceed.',
    difficulty: 'medium'
  },

  // Question 300 - Answer: A
  {
    week: 3,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Hooks, Workflows & Sessions',
    question: 'What is the ultimate goal of combining hooks, sessions, and workflows?',
    option_a: 'Create robust, automated, and repeatable development workflows with full traceability',
    option_b: 'Reduce code complexity',
    option_c: 'Minimize API usage',
    option_d: 'Speed up processing only',
    correct_answer: 'A',
    explanation: 'Combining hooks, sessions, and workflows creates robust, automated, repeatable development processes with full traceability.',
    difficulty: 'hard'
  },

];
