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

// Topic 5: Claude Code Configuration (100 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic5Questions: Question[] = [
  // Question 401 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the recommended maximum line count for CLAUDE.md to ensure optimal performance?',
    option_a: '100-150 lines',
    option_b: '200-300 lines',
    option_c: '500-600 lines',
    option_d: 'No limit, add as much as needed',
    correct_answer: 'B',
    explanation: 'CLAUDE.md should be kept under 200-300 lines for optimal performance. Longer configuration files can impact context window efficiency.',
    difficulty: 'easy'
  },

  // Question 402 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which organizational pattern is recommended for structuring CLAUDE.md content?',
    option_a: 'Alphabetical ordering',
    option_b: 'Chronological ordering',
    option_c: 'Random ordering',
    option_d: 'WHY/WHAT/HOW pattern',
    correct_answer: 'D',
    explanation: 'The WHY/WHAT/HOW pattern is recommended for organizing CLAUDE.md content, providing context (why), definition (what), and implementation (how) in a logical flow.',
    difficulty: 'easy'
  },

  // Question 403 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What are the three standard locations for CLAUDE.md files?',
    option_a: '/etc/claude/, ~/claude/, ./claude/',
    option_b: '~/.claude/CLAUDE.md (global), ./CLAUDE.md (project), ./.claude/CLAUDE.local.md (personal)',
    option_c: '~/.config/claude.md, ./config.md, ./local.md',
    option_d: '/usr/share/claude/, ~/.claude/, ./claude.md',
    correct_answer: 'B',
    explanation: 'The three standard locations are: ~/.claude/CLAUDE.md (global), ./CLAUDE.md (project root), and ./.claude/CLAUDE.local.md (personal/local overrides).',
    difficulty: 'medium'
  },

  // Question 404 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the correct precedence order for CLAUDE.md files when multiple exist?',
    option_a: 'global > project > local',
    option_b: 'local > project > global',
    option_c: 'project > local > global',
    option_d: 'All are merged equally',
    correct_answer: 'B',
    explanation: 'The precedence order is local > project > global, meaning local configuration overrides project, which overrides global. This allows for increasing specificity.',
    difficulty: 'medium'
  },

  // Question 405 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What should CLAUDE.md be primarily used for?',
    option_a: 'Tone, style, domain knowledge, and general constraints',
    option_b: 'Specific task implementations and code',
    option_c: 'Database schemas and migrations',
    option_d: 'API keys and secrets',
    correct_answer: 'A',
    explanation: 'CLAUDE.md should contain tone, style preferences, domain knowledge, and general constraints - the "who you are" aspect. Specific tasks belong in skills, and secrets should never be in configuration files.',
    difficulty: 'easy'
  },

  // Question 406 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'According to progressive disclosure principles, where should highly specific task instructions go?',
    option_a: 'In CLAUDE.md for easy access',
    option_b: 'In settings.json',
    option_c: 'In individual skill files',
    option_d: 'In comments throughout the codebase',
    correct_answer: 'C',
    explanation: 'Progressive disclosure means universal content goes in CLAUDE.md, but specific task instructions should go in individual skill files. This keeps the main configuration lean and loads detailed context only when needed.',
    difficulty: 'medium'
  },

  // Question 407 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the user-level settings.json location?',
    option_a: '/etc/claude/settings.json',
    option_b: './.claude/settings.json',
    option_c: '~/.claude/settings.json',
    option_d: './settings.json',
    correct_answer: 'C',
    explanation: 'User-level settings.json is located at ~/.claude/settings.json and applies globally across all projects for that user.',
    difficulty: 'easy'
  },

  // Question 408 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which settings.json file should typically be gitignored?',
    option_a: '.claude/settings.local.json',
    option_b: '.claude/settings.json',
    option_c: '~/.claude/settings.json',
    option_d: 'None, all should be committed',
    correct_answer: 'A',
    explanation: '.claude/settings.local.json should be gitignored as it contains personal/machine-specific overrides that should not be shared with the team.',
    difficulty: 'easy'
  },

  // Question 409 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the precedence order for settings.json files?',
    option_a: 'user > project > local',
    option_b: 'local > project > user',
    option_c: 'project > local > user',
    option_d: 'All settings are merged with equal priority',
    correct_answer: 'B',
    explanation: 'Settings precedence is local > project > user, allowing increasingly specific configuration overrides at each level.',
    difficulty: 'medium'
  },

  // Question 410 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What configuration elements are typically stored in settings.json?',
    option_a: 'Only UI preferences',
    option_b: 'Only API keys',
    option_c: 'Permissions, additionalDirectories, experimental features',
    option_d: 'Code snippets and templates',
    correct_answer: 'C',
    explanation: 'settings.json contains structural configuration like permissions, additionalDirectories for monorepo access, and experimental feature flags. API keys should never be stored here.',
    difficulty: 'medium'
  },

  // Question 411 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the correct syntax for denying a permission in settings.json?',
    option_a: 'permissions.block: ["ToolName"]',
    option_b: 'permissions.deny: ["ToolName(content)"]',
    option_c: 'permissions.reject: {"tool": "ToolName"}',
    option_d: 'permissions.disallow: {ToolName: true}',
    correct_answer: 'B',
    explanation: 'The correct syntax is permissions.deny with patterns like "ToolName(content)" to deny specific tool operations.',
    difficulty: 'medium'
  },

  // Question 412 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the purpose of the additionalDirectories setting?',
    option_a: 'To create new directories',
    option_b: 'To delete old directories',
    option_c: 'To rename directories',
    option_d: 'To grant access to directories outside the project root in monorepos',
    correct_answer: 'D',
    explanation: 'additionalDirectories allows Claude Code to access directories outside the project root, which is essential for monorepo setups where related code exists in sibling directories.',
    difficulty: 'medium'
  },

  // Question 413 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which of the following is NOT a standard subdirectory within .claude/?',
    option_a: 'agents/',
    option_b: 'databases/',
    option_c: 'hooks/',
    option_d: 'skills/',
    correct_answer: 'B',
    explanation: 'The standard .claude subdirectories are agents/, hooks/, skills/, and rules/. There is no databases/ directory - database configuration would typically be in the project root or a config/ directory.',
    difficulty: 'easy'
  },

  // Question 414 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What was the former name of the skills/ directory?',
    option_a: 'commands/',
    option_b: 'tasks/',
    option_c: 'scripts/',
    option_d: 'actions/',
    correct_answer: 'A',
    explanation: 'The skills/ directory was formerly called commands/. This is now considered legacy, and skills/ is the preferred location.',
    difficulty: 'easy'
  },

  // Question 415 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Where should global skills be stored?',
    option_a: '/usr/share/claude/skills/',
    option_b: '/etc/claude/skills/',
    option_c: './skills/',
    option_d: '~/.claude/skills/',
    correct_answer: 'D',
    explanation: 'Global skills available across all projects should be stored in ~/.claude/skills/. Project-specific skills go in ./.claude/skills/.',
    difficulty: 'easy'
  },

  // Question 416 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the required filename for skill definition files?',
    option_a: 'SKILL.md',
    option_b: 'skill.json',
    option_c: 'config.md',
    option_d: 'README.md',
    correct_answer: 'A',
    explanation: 'Each skill directory must contain a SKILL.md file that defines the skill\'s name, description, and trigger conditions.',
    difficulty: 'easy'
  },

  // Question 417 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What three key elements should a SKILL.md file contain?',
    option_a: 'Author, version, changelog',
    option_b: 'Name, description, trigger conditions',
    option_c: 'Dependencies, installation, usage',
    option_d: 'License, contributors, roadmap',
    correct_answer: 'B',
    explanation: 'A SKILL.md file must contain the skill name, a clear description of what it does, and specific trigger conditions that determine when the skill should be invoked.',
    difficulty: 'medium'
  },

  // Question 418 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How can a skill be invoked?',
    option_a: 'Only via command line flags',
    option_b: 'Only automatically by Claude',
    option_c: 'Via the Skill tool or /skill command',
    option_d: 'By editing settings.json',
    correct_answer: 'C',
    explanation: 'Skills can be invoked explicitly via the Skill tool in the API or using the /skill slash command in the CLI.',
    difficulty: 'medium'
  },

  // Question 419 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You need to configure code review guidelines that apply to all your projects. Where should this go?',
    option_a: 'In each project\'s .claude/settings.json',
    option_b: 'In a project-specific skill',
    option_c: 'In ./CLAUDE.md in each project',
    option_d: '~/.claude/skills/code-review/SKILL.md',
    correct_answer: 'D',
    explanation: 'Since this is a specific task (code review) that applies globally across projects, it should be a global skill at ~/.claude/skills/code-review/SKILL.md.',
    difficulty: 'medium'
  },

  // Question 420 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your company has a specific writing style for documentation. Where is the BEST place to define this?',
    option_a: '~/.claude/CLAUDE.md for global application',
    option_b: 'In settings.json under a "style" key',
    option_c: 'In each project\'s skills/ directory',
    option_d: 'Hardcoded in the application',
    correct_answer: 'A',
    explanation: 'Writing style and tone are general behavioral guidelines that belong in CLAUDE.md. If it applies to all projects, it should be in the global ~/.claude/CLAUDE.md.',
    difficulty: 'medium'
  },

  // Question 421 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the relationship between CLAUDE.md and skills according to best practices?',
    option_a: 'They are interchangeable',
    option_b: 'CLAUDE.md is "who you are", skills are "what you can do"',
    option_c: 'CLAUDE.md is deprecated, use only skills',
    option_d: 'Skills are deprecated, use only CLAUDE.md',
    correct_answer: 'B',
    explanation: 'Best practice is: CLAUDE.md defines identity, tone, style, and general constraints ("who you are"), while skills define specific capabilities and task instructions ("what you can do").',
    difficulty: 'medium'
  },

  // Question 422 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You want to prevent Claude from using the Bash tool to run `rm -rf`. How should you configure this?',
    option_a: 'Add to permissions.deny: ["Bash(rm -rf)"] in settings.json',
    option_b: 'Write instructions in CLAUDE.md asking not to use rm -rf',
    option_c: 'Create a skill that blocks rm -rf',
    option_d: 'Add to .gitignore',
    correct_answer: 'A',
    explanation: 'Security restrictions on tool usage should be enforced through permissions.deny in settings.json with specific tool and content patterns like "Bash(rm -rf)".',
    difficulty: 'medium'
  },

  // Question 423 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which permission pattern would block ALL Bash tool usage?',
    option_a: 'permissions.deny: ["Bash(*)"]',
    option_b: 'permissions.deny: ["Bash"]',
    option_c: 'permissions.deny: ["*Bash*"]',
    option_d: 'permissions.deny: ["Bash(content)"]',
    correct_answer: 'D',
    explanation: 'The pattern "Bash(content)" blocks all Bash tool usage. The "content" keyword matches any content parameter passed to the tool.',
    difficulty: 'hard'
  },

  // Question 424 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'In a monorepo with packages/ and services/ directories, you\'re working in services/api/. How do you grant access to packages/?',
    option_a: 'Add "../packages" to .gitignore',
    option_b: 'Modify CLAUDE.md to mention packages/',
    option_c: 'Create a symlink',
    option_d: 'Add "../packages" to additionalDirectories in settings.json',
    correct_answer: 'D',
    explanation: 'Use the additionalDirectories setting in settings.json to grant access to directories outside the current project root, such as sibling directories in a monorepo.',
    difficulty: 'medium'
  },

  // Question 425 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You have global CLAUDE.md with "Use TypeScript", project CLAUDE.md with "Use JavaScript", and local CLAUDE.local.md with "Use Python". Which language will Claude use?',
    option_a: 'Python (local overrides all)',
    option_b: 'JavaScript (project is middle priority)',
    option_c: 'TypeScript (global is base)',
    option_d: 'All three (merged)',
    correct_answer: 'A',
    explanation: 'Local configuration has highest precedence (local > project > global), so Python from CLAUDE.local.md will be used.',
    difficulty: 'easy'
  },

  // Question 426 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is progressive disclosure in the context of Claude Code configuration?',
    option_a: 'Gradually revealing secrets over time',
    option_b: 'Incrementally loading project files',
    option_c: 'Starting with universal content in CLAUDE.md and loading specific details only when needed via skills',
    option_d: 'Showing configuration UI step by step',
    correct_answer: 'C',
    explanation: 'Progressive disclosure means keeping CLAUDE.md lean with universal content, and loading detailed, specific task instructions only when needed through skills. This optimizes context usage.',
    difficulty: 'medium'
  },

  // Question 427 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'A skill requires specific Python libraries. Where should these dependencies be documented?',
    option_a: 'In the skill\'s SKILL.md file or accompanying requirements.txt',
    option_b: 'In the global CLAUDE.md',
    option_c: 'In settings.json under "dependencies"',
    option_d: 'Dependencies are auto-detected, no documentation needed',
    correct_answer: 'A',
    explanation: 'Skills can have their own dependencies which should be documented in the SKILL.md file or in accompanying dependency files like requirements.txt in the skill directory.',
    difficulty: 'medium'
  },

  // Question 428 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What happens if you have conflicting deny permissions in user-level and project-level settings.json?',
    option_a: 'User-level permissions take precedence',
    option_b: 'Both are applied (union of restrictions)',
    option_c: 'Project-level permissions take precedence',
    option_d: 'An error is thrown',
    correct_answer: 'B',
    explanation: 'Permission denials are cumulative across all levels - both user-level and project-level restrictions are applied, creating a union of all denied operations.',
    difficulty: 'hard'
  },

  // Question 429 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which file should contain team-wide coding standards for a specific project?',
    option_a: '~/.claude/CLAUDE.md',
    option_b: './CLAUDE.md in the project root',
    option_c: './.claude/CLAUDE.local.md',
    option_d: './.claude/settings.local.json',
    correct_answer: 'B',
    explanation: 'Team-wide project-specific standards should be in ./CLAUDE.md at the project root, which is shared via version control and applies to all team members working on the project.',
    difficulty: 'easy'
  },

  // Question 430 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What should you do if your CLAUDE.md is growing beyond 300 lines?',
    option_a: 'Continue adding content, size doesn\'t matter',
    option_b: 'Delete less important sections',
    option_c: 'Extract specific task instructions into separate skills',
    option_d: 'Split into CLAUDE1.md and CLAUDE2.md',
    correct_answer: 'C',
    explanation: 'When CLAUDE.md grows too large, apply progressive disclosure by extracting specific, detailed task instructions into separate skill files, keeping CLAUDE.md focused on universal guidelines.',
    difficulty: 'medium'
  },

  // Question 431 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Can skills have their own tools and configuration?',
    option_a: 'No, skills can only contain markdown instructions',
    option_b: 'Yes, skills can have tools, dependencies, and configuration',
    option_c: 'Only global skills can have tools',
    option_d: 'Tools must be defined in settings.json',
    correct_answer: 'B',
    explanation: 'Skills can include their own tools, dependencies, and configuration files in addition to the SKILL.md definition, making them self-contained capability modules.',
    difficulty: 'medium'
  },

  // Question 432 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the purpose of the rules/ directory in .claude/?',
    option_a: 'To store additional constraints and guidelines',
    option_b: 'To define CSS styling rules',
    option_c: 'To configure linting rules',
    option_d: 'To set up firewall rules',
    correct_answer: 'A',
    explanation: 'The .claude/rules/ directory stores additional constraints and guidelines that supplement the main CLAUDE.md configuration.',
    difficulty: 'medium'
  },

  // Question 433 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your project uses a specific testing framework approach. Where should detailed testing instructions go?',
    option_a: 'In global CLAUDE.md',
    option_b: 'In settings.json',
    option_c: 'In project CLAUDE.md',
    option_d: 'In a project-specific testing skill at ./.claude/skills/testing/SKILL.md',
    correct_answer: 'D',
    explanation: 'Detailed, specific task instructions like testing procedures should be in a project-specific skill. This is more focused than general guidelines and benefits from progressive disclosure.',
    difficulty: 'medium'
  },

  // Question 434 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What\'s the difference between .claude/settings.json and .claude/settings.local.json?',
    option_a: 'No difference, they\'re aliases',
    option_b: 'settings.json is shared via git, settings.local.json is gitignored for personal overrides',
    option_c: 'settings.json is for production, settings.local.json is for development',
    option_d: 'settings.json is deprecated',
    correct_answer: 'B',
    explanation: '.claude/settings.json contains team-wide project settings and is committed to git, while .claude/settings.local.json is gitignored and contains personal/machine-specific overrides.',
    difficulty: 'easy'
  },

  // Question 435 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which configuration file would you use to define custom agents?',
    option_a: '.claude/skills/agents/SKILL.md',
    option_b: 'CLAUDE.md with agent definitions',
    option_c: 'Files in .claude/agents/ directory',
    option_d: 'settings.json with agents array',
    correct_answer: 'C',
    explanation: 'Custom agent definitions are stored in the .claude/agents/ directory, which is specifically designated for agent configuration.',
    difficulty: 'medium'
  },

  // Question 436 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the purpose of the hooks/ directory in .claude/?',
    option_a: 'Git hooks configuration',
    option_b: 'Lifecycle hooks for Claude Code operations',
    option_c: 'React hooks for UI',
    option_d: 'Webhook endpoints',
    correct_answer: 'B',
    explanation: 'The .claude/hooks/ directory contains lifecycle hooks that can execute at various points during Claude Code operations, such as before/after tool usage or conversation turns.',
    difficulty: 'medium'
  },

  // Question 437 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You want Claude to never write files to a specific directory. What\'s the most reliable approach?',
    option_a: 'Use permissions.deny with a Write tool pattern matching that directory',
    option_b: 'Ask nicely in CLAUDE.md',
    option_c: 'Create a skill that monitors writes',
    option_d: 'Set directory permissions at OS level only',
    correct_answer: 'A',
    explanation: 'For reliable enforcement, use permissions.deny in settings.json with a pattern like "Write(**/sensitive-dir/**)" to block Write tool usage for that directory.',
    difficulty: 'medium'
  },

  // Question 438 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which statement about configuration DRY (Don\'t Repeat Yourself) is correct?',
    option_a: 'Duplicate all settings in each file for safety',
    option_b: 'Only use one configuration file ever',
    option_c: 'Copy global settings to every project',
    option_d: 'Use hierarchy effectively - global for universal, project for specific, local for overrides',
    correct_answer: 'D',
    explanation: 'Keep configuration DRY by using the hierarchy properly: global for universal settings, project for project-specific needs, and local for personal overrides. Avoid duplicating content across levels.',
    difficulty: 'medium'
  },

  // Question 439 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What happens if a skill\'s SKILL.md file is missing or malformed?',
    option_a: 'Claude will auto-generate one',
    option_b: 'The skill will work with default settings',
    option_c: 'All skills will be disabled',
    option_d: 'The skill will not be recognized or available for use',
    correct_answer: 'D',
    explanation: 'A valid SKILL.md file is required for skill recognition. If it\'s missing or malformed, the skill will not be recognized or available for invocation.',
    difficulty: 'medium'
  },

  // Question 440 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You need to test experimental Claude Code features. Where should you enable these?',
    option_a: 'In CLAUDE.md with "enable experimental features"',
    option_b: 'In settings.json under experimental feature flags',
    option_c: 'In package.json',
    option_d: 'Via command-line flags only',
    correct_answer: 'B',
    explanation: 'Experimental features are enabled through feature flags in settings.json, which is the appropriate place for structural configuration options.',
    difficulty: 'easy'
  },

  // Question 441 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'When should you create a new skill versus adding to CLAUDE.md?',
    option_a: 'Always use skills, never CLAUDE.md',
    option_b: 'Always use CLAUDE.md, never skills',
    option_c: 'Random choice',
    option_d: 'Create a skill for specific, complex tasks; use CLAUDE.md for general tone, style, and constraints',
    correct_answer: 'D',
    explanation: 'Create skills for specific, complex tasks that benefit from detailed instructions and progressive disclosure. Use CLAUDE.md for general behavioral guidelines, tone, style, and universal constraints.',
    difficulty: 'medium'
  },

  // Question 442 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is a trigger condition in a SKILL.md file?',
    option_a: 'A JavaScript function that runs the skill',
    option_b: 'A description of when/how the skill should be invoked',
    option_c: 'A cron schedule for automatic execution',
    option_d: 'An API endpoint for skill activation',
    correct_answer: 'B',
    explanation: 'Trigger conditions in SKILL.md describe the circumstances or user requests that should cause the skill to be invoked, helping Claude decide when to use the skill.',
    difficulty: 'medium'
  },

  // Question 443 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Can you have both ~/.claude/skills/review/ and ./.claude/skills/review/ skills?',
    option_a: 'No, this causes a conflict error',
    option_b: 'Yes, but only one will be used randomly',
    option_c: 'No, global skills are disabled when project skills exist',
    option_d: 'Yes, project-level skill takes precedence over global',
    correct_answer: 'D',
    explanation: 'You can have skills with the same name at both global and project levels. The project-level skill takes precedence, following the same hierarchy as other configuration.',
    difficulty: 'hard'
  },

  // Question 444 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the recommended approach for documenting domain-specific terminology?',
    option_a: 'Add to CLAUDE.md in a glossary or domain knowledge section',
    option_b: 'Create a skill for each term',
    option_c: 'Put in settings.json as key-value pairs',
    option_d: 'Don\'t document, Claude knows everything',
    correct_answer: 'A',
    explanation: 'Domain-specific terminology and general domain knowledge belongs in CLAUDE.md, often in a dedicated glossary or domain knowledge section. This is general context, not task-specific.',
    difficulty: 'easy'
  },

  // Question 445 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which permission pattern would block reading any .env files?',
    option_a: 'permissions.deny: ["Read(.env)"]',
    option_b: 'permissions.deny: ["Read(*.env)"]',
    option_c: 'permissions.deny: ["Read(**/.env)"]',
    option_d: 'permissions.deny: ["Read(env)"]',
    correct_answer: 'C',
    explanation: 'The pattern "Read(**/.env)" blocks reading .env files in any directory. The **/ matches any directory path.',
    difficulty: 'hard'
  },

  // Question 446 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your team member has different code style preferences than the team. Where should their personal overrides go?',
    option_a: 'In the project ./CLAUDE.md (and merge conflicts)',
    option_b: 'In their ./.claude/CLAUDE.local.md (gitignored)',
    option_c: 'In ~/.claude/CLAUDE.md (affects all projects)',
    option_d: 'Create a new branch with different CLAUDE.md',
    correct_answer: 'B',
    explanation: 'Personal preferences that differ from team standards should go in ./.claude/CLAUDE.local.md, which is gitignored and provides local overrides for that specific project.',
    difficulty: 'medium'
  },

  // Question 447 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What\'s the best way to share a reusable skill across your organization?',
    option_a: 'Copy-paste into each project',
    option_b: 'Put in a shared Dropbox folder',
    option_c: 'Email the SKILL.md file',
    option_d: 'Create a skill package in a shared repository that teams can install to ~/.claude/skills/',
    correct_answer: 'D',
    explanation: 'Create a versioned skill package in a shared repository (like internal GitHub) that teams can install to their global ~/.claude/skills/ directory, enabling updates and maintenance.',
    difficulty: 'medium'
  },

  // Question 448 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which scenario violates security best practices?',
    option_a: 'Using permissions.deny to block dangerous operations',
    option_b: 'Gitignoring settings.local.json',
    option_c: 'Storing API keys in CLAUDE.md and committing to git',
    option_d: 'Using local CLAUDE.local.md for machine-specific paths',
    correct_answer: 'C',
    explanation: 'Never store API keys, secrets, or credentials in CLAUDE.md or any configuration file that\'s committed to version control. This violates fundamental security practices.',
    difficulty: 'easy'
  },

  // Question 449 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you handle machine-specific paths (like /Users/alice/data) in configuration?',
    option_a: 'Hardcode in project CLAUDE.md',
    option_b: 'Use absolute paths in settings.json',
    option_c: 'Put in CLAUDE.local.md or settings.local.json (gitignored)',
    option_d: 'Create a separate git branch per machine',
    correct_answer: 'C',
    explanation: 'Machine-specific paths should go in gitignored local configuration files (CLAUDE.local.md or settings.local.json) so they don\'t interfere with other team members\' environments.',
    difficulty: 'easy'
  },

  // Question 450 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You have a complex, multi-step code review process with specific checklists. What\'s the best configuration approach?',
    option_a: 'Write the entire process in CLAUDE.md',
    option_b: 'Put it in settings.json as JSON',
    option_c: 'Create a dedicated code-review skill with detailed instructions in SKILL.md',
    option_d: 'Don\'t configure it, explain each time',
    correct_answer: 'C',
    explanation: 'Complex, multi-step task procedures are perfect for skills. Create a code-review skill with detailed checklists and instructions, which loads only when needed (progressive disclosure).',
    difficulty: 'easy'
  },

  // Question 451 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What happens if additionalDirectories points to a non-existent path?',
    option_a: 'The directory is automatically created',
    option_b: 'An error may occur when attempting to access that directory',
    option_c: 'The setting is silently ignored',
    option_d: 'Claude Code fails to start',
    correct_answer: 'B',
    explanation: 'If additionalDirectories points to a non-existent path, errors will occur when attempting to access that directory. The path should exist and be accessible.',
    difficulty: 'medium'
  },

  // Question 452 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which is NOT a valid use case for skills?',
    option_a: 'Code review with specific checklists',
    option_b: 'Test generation with framework-specific patterns',
    option_c: 'Documentation generation with templates',
    option_d: 'Setting Claude\'s default response tone',
    correct_answer: 'D',
    explanation: 'Default response tone is a general behavioral guideline that belongs in CLAUDE.md, not in a skill. Skills are for specific, complex tasks, not general behavior.',
    difficulty: 'medium'
  },

  // Question 453 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your project has both CLAUDE.md and .claude/CLAUDE.local.md. The local file has a syntax error. What happens?',
    option_a: 'CLAUDE.md is used instead',
    option_b: 'Both files are ignored',
    option_c: 'The error may cause parsing issues or unexpected behavior',
    option_d: 'Claude auto-fixes the syntax error',
    correct_answer: 'C',
    explanation: 'A syntax error in any configuration file may cause parsing issues or unexpected behavior. Files are not automatically validated or fixed. It\'s important to ensure all configuration files are well-formed.',
    difficulty: 'medium'
  },

  // Question 454 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the purpose of using the WHY/WHAT/HOW pattern in CLAUDE.md?',
    option_a: 'To make the file alphabetically organized',
    option_b: 'To comply with markdown standards',
    option_c: 'To provide context (why), definition (what), and implementation (how) in logical flow',
    option_d: 'To enable syntax highlighting',
    correct_answer: 'C',
    explanation: 'The WHY/WHAT/HOW pattern organizes information logically: context and rationale (why), definition and description (what), and specific implementation details (how). This aids both human and AI comprehension.',
    difficulty: 'easy'
  },

  // Question 455 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Can skills call other skills?',
    option_a: 'No, skills cannot interact',
    option_b: 'Yes, but only in alphabetical order',
    option_c: 'Yes, skills can invoke other skills through the Skill tool',
    option_d: 'Only global skills can call project skills',
    correct_answer: 'C',
    explanation: 'Skills can invoke other skills using the Skill tool, allowing for composition of complex workflows from simpler skill components.',
    difficulty: 'hard'
  },

  // Question 456 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Where should you document which skills are available in a project?',
    option_a: 'In project README or documentation, not in CLAUDE.md',
    option_b: 'In CLAUDE.md with complete skill definitions',
    option_c: 'In settings.json under a "skills" array',
    option_d: 'No documentation needed, auto-discovery only',
    correct_answer: 'A',
    explanation: 'Available skills can be documented in README or project documentation for human reference, but skill definitions themselves live in SKILL.md files. Don\'t duplicate skill definitions in CLAUDE.md.',
    difficulty: 'medium'
  },

  // Question 457 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You want to enforce that Claude always runs tests before creating a PR. Where is this best configured?',
    option_a: 'In a PR skill or git hook, not in general CLAUDE.md',
    option_b: 'In global CLAUDE.md',
    option_c: 'In settings.json permissions',
    option_d: 'Hardcoded in the CI/CD pipeline only',
    correct_answer: 'A',
    explanation: 'Workflow requirements like "run tests before PR" are specific task constraints that belong in a PR skill or git hook, not in general CLAUDE.md guidelines.',
    difficulty: 'medium'
  },

  // Question 458 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which configuration file would you commit to version control?',
    option_a: '.claude/settings.local.json',
    option_b: '.claude/CLAUDE.local.md',
    option_c: '.claude/settings.json and ./CLAUDE.md',
    option_d: 'None, all should be gitignored',
    correct_answer: 'C',
    explanation: 'Team-wide configuration like .claude/settings.json and ./CLAUDE.md should be committed to share with the team. Local files (.local.json, .local.md) should be gitignored.',
    difficulty: 'easy'
  },

  // Question 459 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is a common anti-pattern in CLAUDE.md?',
    option_a: 'Including domain glossary',
    option_b: 'Specifying tone and style',
    option_c: 'Defining general constraints',
    option_d: 'Including detailed, step-by-step task instructions that should be in skills',
    correct_answer: 'D',
    explanation: 'A common anti-pattern is putting detailed, step-by-step task instructions in CLAUDE.md when they should be in dedicated skills. This bloats CLAUDE.md and reduces effectiveness of progressive disclosure.',
    difficulty: 'medium'
  },

  // Question 460 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How can you test if a permission denial is working correctly?',
    option_a: 'Attempt the denied operation and verify it\'s blocked',
    option_b: 'Check the settings.json syntax',
    option_c: 'Permissions are auto-validated, no testing needed',
    option_d: 'Run a linter on settings.json',
    correct_answer: 'A',
    explanation: 'The most reliable way to test permission denials is to actually attempt the denied operation and verify it\'s blocked with an appropriate error or refusal.',
    difficulty: 'medium'
  },

  // Question 461 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What\'s the relationship between CLAUDE.md and the system prompt?',
    option_a: 'They are the same thing',
    option_b: 'CLAUDE.md replaces the system prompt',
    option_c: 'CLAUDE.md content is added to the system prompt context',
    option_d: 'They are unrelated',
    correct_answer: 'C',
    explanation: 'CLAUDE.md content is incorporated into the system prompt context that Claude receives, augmenting the base instructions with project-specific guidance.',
    difficulty: 'medium'
  },

  // Question 462 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your project has specific security requirements. Where should these be documented?',
    option_a: 'Only in settings.json permissions',
    option_b: 'Only in CLAUDE.md',
    option_c: 'In a skill file',
    option_d: 'Combine approaches: high-level guidelines in CLAUDE.md, enforcement via settings.json permissions, specific procedures in security skill',
    correct_answer: 'D',
    explanation: 'Security requires a layered approach: high-level security awareness in CLAUDE.md, technical enforcement through settings.json permissions, and detailed security procedures in a dedicated security skill.',
    difficulty: 'hard'
  },

  // Question 463 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the recommended approach for version controlling skills?',
    option_a: 'Commit project skills to git, document versioning strategy in SKILL.md',
    option_b: 'Never version control skills',
    option_c: 'Use a separate skills repository only',
    option_d: 'Skills are auto-versioned',
    correct_answer: 'A',
    explanation: 'Project-specific skills in ./.claude/skills/ should be committed to version control along with the project. Document versioning and changelog in SKILL.md.',
    difficulty: 'medium'
  },

  // Question 464 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You have 10 projects that all use similar React patterns. Where should these guidelines live?',
    option_a: '~/.claude/CLAUDE.md for universal React guidelines, project-specific overrides in project ./CLAUDE.md',
    option_b: 'Copy-paste into each project\'s CLAUDE.md',
    option_c: 'In a shared network drive',
    option_d: 'In each project\'s package.json',
    correct_answer: 'A',
    explanation: 'Put universal React guidelines in global ~/.claude/CLAUDE.md to apply across all projects, with project-specific overrides in individual project ./CLAUDE.md files as needed.',
    difficulty: 'medium'
  },

  // Question 465 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the impact of overly verbose CLAUDE.md on performance?',
    option_a: 'No impact, longer is better',
    option_b: 'Only affects load time',
    option_c: 'Only affects memory usage',
    option_d: 'Consumes context window, reducing space for code analysis and reasoning',
    correct_answer: 'D',
    explanation: 'Verbose CLAUDE.md consumes valuable context window space that could be used for code analysis, reasoning, and tool responses. This is why 200-300 line limit is recommended.',
    difficulty: 'medium'
  },

  // Question 466 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Can you use environment variables in CLAUDE.md?',
    option_a: 'Yes, using ${VAR} syntax automatically',
    option_b: 'Yes, but only in code blocks',
    option_c: 'No, CLAUDE.md is pure markdown',
    option_d: 'CLAUDE.md is markdown, but you can reference environment variables conceptually in instructions',
    correct_answer: 'D',
    explanation: 'CLAUDE.md is markdown and doesn\'t have automatic environment variable substitution. However, you can write instructions that tell Claude to use environment variables when generating code.',
    difficulty: 'hard'
  },

  // Question 467 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What should you do when a skill becomes outdated?',
    option_a: 'Delete it immediately without documentation',
    option_b: 'Leave it forever for backwards compatibility',
    option_c: 'Update or deprecate it, document changes in SKILL.md',
    option_d: 'Skills auto-update from the internet',
    correct_answer: 'C',
    explanation: 'When a skill becomes outdated, update it to current best practices or deprecate it with clear documentation in SKILL.md, including migration guidance if it\'s being replaced.',
    difficulty: 'medium'
  },

  // Question 468 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you handle conflicting instructions between CLAUDE.md and a skill?',
    option_a: 'CLAUDE.md always wins',
    option_b: 'Skill always wins',
    option_c: 'Random selection',
    option_d: 'Design them to be complementary; skills provide specific task context that builds on CLAUDE.md general guidelines',
    correct_answer: 'D',
    explanation: 'Avoid conflicts by design: CLAUDE.md provides general behavioral guidelines, while skills provide specific task context. They should be complementary, not contradictory. Skills add specificity to general CLAUDE.md guidance.',
    difficulty: 'hard'
  },

  // Question 469 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is a primary benefit of the configuration hierarchy (global/project/local)?',
    option_a: 'Enables appropriate specificity at each level while avoiding duplication',
    option_b: 'Makes configuration more complex',
    option_c: 'Increases file count',
    option_d: 'Requires more disk space',
    correct_answer: 'A',
    explanation: 'The hierarchy enables appropriate specificity at each level: global for universal settings, project for team standards, local for personal preferences - all while avoiding duplication (DRY principle).',
    difficulty: 'medium'
  },

  // Question 470 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which permission pattern would block Claude from making git commits?',
    option_a: 'permissions.deny: ["git commit"]',
    option_b: 'permissions.deny: ["Bash(commit)"]',
    option_c: 'permissions.deny: ["Git(content)"]',
    option_d: 'permissions.deny: ["Bash(git commit)"]',
    correct_answer: 'D',
    explanation: 'To block git commits, deny the Bash tool with a pattern matching git commit commands: "Bash(git commit)" or more broadly "Bash(*commit*)".',
    difficulty: 'hard'
  },

  // Question 471 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your company has 3 development teams with different coding standards. What\'s the best configuration strategy?',
    option_a: 'One global CLAUDE.md with all teams\' standards',
    option_b: 'Each team has their own global ~/.claude/CLAUDE.md, shared project-level CLAUDE.md for cross-team projects',
    option_c: 'No configuration, explain standards each time',
    option_d: 'One massive skill file with all standards',
    correct_answer: 'B',
    explanation: 'Each team member can have their team\'s standards in their global ~/.claude/CLAUDE.md, while cross-team projects have shared project-level CLAUDE.md with common standards.',
    difficulty: 'hard'
  },

  // Question 472 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the purpose of keeping configuration "lean" in CLAUDE.md?',
    option_a: 'To save disk space',
    option_b: 'To reduce file count',
    option_c: 'For faster file I/O',
    option_d: 'To optimize context window usage and maintain Claude\'s focus on relevant information',
    correct_answer: 'D',
    explanation: 'Keeping CLAUDE.md lean optimizes context window usage, ensuring Claude has maximum space for code analysis and reasoning, while maintaining focus on truly relevant guidelines.',
    difficulty: 'medium'
  },

  // Question 473 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Can you use markdown formatting and code blocks in CLAUDE.md?',
    option_a: 'No, plain text only',
    option_b: 'Only headings, no code blocks',
    option_c: 'Yes, full markdown including code blocks, lists, headings, etc.',
    option_d: 'Only if you enable markdown in settings.json',
    correct_answer: 'C',
    explanation: 'CLAUDE.md supports full markdown formatting including headings, lists, code blocks, emphasis, links, etc. This helps organize and present information clearly.',
    difficulty: 'easy'
  },

  // Question 474 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What should you do if two skills have overlapping functionality?',
    option_a: 'Keep both, redundancy is good',
    option_b: 'Delete the older one immediately',
    option_c: 'Refactor to eliminate overlap - combine or clearly delineate their responsibilities',
    option_d: 'Randomly invoke one',
    correct_answer: 'C',
    explanation: 'Overlapping skills should be refactored to eliminate redundancy - either combine them into one comprehensive skill or clearly separate their responsibilities to avoid confusion.',
    difficulty: 'medium'
  },

  // Question 475 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You need to configure different behavior for development vs production environments. What\'s the best approach?',
    option_a: 'Put everything in CLAUDE.md with if/else logic',
    option_b: 'Use settings.local.json for dev-specific settings, document environment-aware patterns in CLAUDE.md',
    option_c: 'Create separate repositories',
    option_d: 'Hardcode environment detection in skills',
    correct_answer: 'B',
    explanation: 'Use settings.local.json for machine-specific dev settings, and document environment-aware patterns in CLAUDE.md. Skills can also have environment-specific instructions.',
    difficulty: 'hard'
  },

  // Question 476 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the risk of having too many highly specific instructions in CLAUDE.md?',
    option_a: 'File becomes too large to open',
    option_b: 'Git will reject it',
    option_c: 'Markdown rendering breaks',
    option_d: 'Claude may struggle to determine which specific instruction applies to current task, and context window is wasted',
    correct_answer: 'D',
    explanation: 'Too many specific instructions in CLAUDE.md wastes context window and can confuse Claude about which instruction applies. This is why specific tasks should use skills with progressive disclosure.',
    difficulty: 'medium'
  },

  // Question 477 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you structure a skill for a complex workflow with multiple steps?',
    option_a: 'Use clear sections in SKILL.md: overview, prerequisites, step-by-step instructions, examples, troubleshooting',
    option_b: 'One long paragraph with everything',
    option_c: 'Separate file for each step',
    option_d: 'Use only code comments',
    correct_answer: 'A',
    explanation: 'Structure complex workflow skills with clear sections: overview, prerequisites, detailed step-by-step instructions, examples, and troubleshooting. This makes the skill easy to follow and maintain.',
    difficulty: 'medium'
  },

  // Question 478 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'When should you use the .claude/rules/ directory?',
    option_a: 'Never, it\'s deprecated',
    option_b: 'For additional constraints that supplement CLAUDE.md but are organized separately',
    option_c: 'For JavaScript linting rules only',
    option_d: 'For database migration rules',
    correct_answer: 'B',
    explanation: 'The .claude/rules/ directory is for additional constraints and guidelines that supplement CLAUDE.md, particularly when you want to organize different types of rules in separate files.',
    difficulty: 'medium'
  },

  // Question 479 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is a good test to determine if something belongs in CLAUDE.md vs a skill?',
    option_a: 'If it\'s longer than 10 lines, use a skill',
    option_b: 'If it mentions code, use a skill',
    option_c: 'Ask: "Is this a general behavioral guideline or a specific task procedure?" Guidelines → CLAUDE.md, Tasks → skill',
    option_d: 'Randomly choose',
    correct_answer: 'C',
    explanation: 'Use this test: if it\'s a general behavioral guideline, tone, or constraint that applies broadly, it goes in CLAUDE.md. If it\'s a specific task procedure with detailed steps, it goes in a skill.',
    difficulty: 'medium'
  },

  // Question 480 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You want to share configuration between projects without duplication. What\'s the best strategy?',
    option_a: 'Put shared guidelines in ~/.claude/CLAUDE.md, project-specific details in each project\'s ./CLAUDE.md',
    option_b: 'Use symbolic links to one CLAUDE.md file',
    option_c: 'Copy-paste and manually keep in sync',
    option_d: 'Create a shared npm package',
    correct_answer: 'A',
    explanation: 'Leverage the hierarchy: shared universal guidelines in global ~/.claude/CLAUDE.md, project-specific additions in project ./CLAUDE.md. This avoids duplication while allowing project customization.',
    difficulty: 'easy'
  },

  // Question 481 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What happens if you have circular skill dependencies (skill A calls skill B, skill B calls skill A)?',
    option_a: 'Auto-resolved by Claude',
    option_b: 'Works fine, infinite skills are allowed',
    option_c: 'Only the first skill runs',
    option_d: 'May cause infinite loops or errors - should be avoided in skill design',
    correct_answer: 'D',
    explanation: 'Circular skill dependencies can cause infinite loops or errors and should be avoided in skill design. Skills should have clear, non-circular dependency relationships.',
    difficulty: 'hard'
  },

  // Question 482 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your project uses a custom build system. Where should build commands and procedures be documented?',
    option_a: 'In a build skill with detailed instructions, or in project README with reference in CLAUDE.md',
    option_b: 'Only in CLAUDE.md',
    option_c: 'Only in package.json scripts',
    option_d: 'In settings.json',
    correct_answer: 'A',
    explanation: 'Custom build procedures can go in a dedicated build skill (for complex workflows) or in project documentation (README) with a reference in CLAUDE.md. This keeps CLAUDE.md lean while providing access to details.',
    difficulty: 'medium'
  },

  // Question 483 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the recommended way to document skill usage examples?',
    option_a: 'No examples needed',
    option_b: 'Only in external documentation',
    option_c: 'In settings.json',
    option_d: 'Include examples section in SKILL.md showing typical invocations and expected outcomes',
    correct_answer: 'D',
    explanation: 'Include an examples section in SKILL.md showing typical invocations, inputs, and expected outcomes. This helps both humans understanding the skill and Claude using it effectively.',
    difficulty: 'easy'
  },

  // Question 484 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You need to temporarily disable a skill for debugging. What\'s the quickest approach?',
    option_a: 'Rename the skill directory or SKILL.md file temporarily',
    option_b: 'Delete the entire skill',
    option_c: 'Comment out the entire SKILL.md content',
    option_d: 'Add to settings.json deny permissions',
    correct_answer: 'A',
    explanation: 'Quickly disable a skill by renaming its directory (e.g., add .disabled suffix) or renaming SKILL.md to something like SKILL.md.disabled. This prevents recognition without deletion.',
    difficulty: 'medium'
  },

  // Question 485 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which statement about configuration maintenance is correct?',
    option_a: 'Configuration should be reviewed and updated regularly as project needs evolve',
    option_b: 'Configuration is set once and never changed',
    option_c: 'Only update configuration when things break',
    option_d: 'Configuration updates should happen daily',
    correct_answer: 'A',
    explanation: 'Configuration should be treated as living documentation that evolves with the project. Regular reviews help keep it relevant, accurate, and optimally sized.',
    difficulty: 'easy'
  },

  // Question 486 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the role of comments in settings.json?',
    option_a: 'Comments are not allowed in JSON',
    option_b: 'Only allowed at the file start',
    option_c: 'JSON5/JSONC comments can explain configuration choices and provide context',
    option_d: 'Comments must be in a separate .txt file',
    correct_answer: 'C',
    explanation: 'While standard JSON doesn\'t support comments, many tools support JSON5 or JSONC which allow comments. Use them to explain configuration choices, provide context, and document non-obvious settings.',
    difficulty: 'medium'
  },

  // Question 487 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you handle sensitive operations that need human oversight?',
    option_a: 'Use permissions.deny to block and require explicit user approval',
    option_b: 'Trust Claude completely',
    option_c: 'Only mention in CLAUDE.md to "be careful"',
    option_d: 'Write a skill that adds delays',
    correct_answer: 'A',
    explanation: 'For sensitive operations requiring human oversight (like destructive git operations, production deployments), use permissions.deny to block automatic execution and require explicit user approval.',
    difficulty: 'medium'
  },

  // Question 488 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the advantage of skill-based architecture over putting everything in CLAUDE.md?',
    option_a: 'Skills are faster to load',
    option_b: 'Skills use less disk space',
    option_c: 'Progressive disclosure: only load detailed instructions when needed, keeping context focused',
    option_d: 'Skills are easier to spell',
    correct_answer: 'C',
    explanation: 'Skills enable progressive disclosure - detailed task instructions are loaded only when that specific task is invoked, keeping the context window focused on relevant information and leaving more room for code analysis.',
    difficulty: 'medium'
  },

  // Question 489 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Your team is onboarding new members. What configuration documentation should you provide?',
    option_a: 'Nothing, let them figure it out',
    option_b: 'Document the configuration hierarchy, what goes where, and how to create local overrides',
    option_c: 'Only provide settings.json',
    option_d: 'Email them your personal CLAUDE.md',
    correct_answer: 'B',
    explanation: 'Provide documentation explaining the configuration hierarchy (global/project/local), what types of content go in each location, and how to create personal overrides without disrupting team settings.',
    difficulty: 'easy'
  },

  // Question 490 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Can you use wildcards in permission deny patterns?',
    option_a: 'No, exact matches only',
    option_b: 'Yes, patterns support wildcards like * and **',
    option_c: 'Only * for single character',
    option_d: 'Only in file paths, not tool names',
    correct_answer: 'B',
    explanation: 'Permission deny patterns support wildcards: * for any characters within a path segment, ** for any directory depth. E.g., "Write(**/*.env)" blocks writing .env files anywhere.',
    difficulty: 'medium'
  },

  // Question 491 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What should you do when migrating from commands/ to skills/ directory structure?',
    option_a: 'Delete everything and start over',
    option_b: 'Keep both forever',
    option_c: 'Move content to skills/, update references, document migration in README',
    option_d: 'Ignore skills/, keep using commands/',
    correct_answer: 'C',
    explanation: 'Migrate by moving content from commands/ to skills/, update any references, and document the migration in project README. Consider a transition period for team awareness.',
    difficulty: 'medium'
  },

  // Question 492 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'Which is a sign that you should refactor your configuration?',
    option_a: 'CLAUDE.md is under 100 lines',
    option_b: 'You have 2-3 well-defined skills',
    option_c: 'Settings are organized in hierarchy',
    option_d: 'CLAUDE.md is over 500 lines with many specific task instructions',
    correct_answer: 'D',
    explanation: 'CLAUDE.md over 500 lines, especially if filled with specific task instructions, is a sign to refactor. Extract specific tasks into skills and keep CLAUDE.md focused on general guidelines.',
    difficulty: 'easy'
  },

  // Question 493 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you validate that your configuration is working as intended?',
    option_a: 'Configuration auto-validates',
    option_b: 'Test with real Claude interactions - ask questions, invoke skills, test permissions',
    option_c: 'Use a JSON validator',
    option_d: 'Visual inspection only',
    correct_answer: 'B',
    explanation: 'Validate configuration through actual usage: interact with Claude, invoke skills, test that denied permissions are blocked, verify tone and style guidelines are followed. Real-world testing is most reliable.',
    difficulty: 'medium'
  },

  // Question 494 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the relationship between configuration and prompt engineering?',
    option_a: 'They are unrelated',
    option_b: 'Configuration is a form of persistent prompt engineering that applies across conversations',
    option_c: 'Configuration replaces prompt engineering',
    option_d: 'Prompt engineering replaces configuration',
    correct_answer: 'B',
    explanation: 'Configuration files like CLAUDE.md and skills are forms of persistent prompt engineering - they shape Claude\'s behavior across all conversations rather than requiring manual prompting each time.',
    difficulty: 'medium'
  },

  // Question 495 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'You have a skill that\'s project-specific but useful across multiple projects. What should you do?',
    option_a: 'Promote it to a global skill in ~/.claude/skills/, or create a shared skill repository',
    option_b: 'Keep duplicating it in each project',
    option_c: 'Put the entire skill in CLAUDE.md',
    option_d: 'Send it via email to each project',
    correct_answer: 'A',
    explanation: 'If a skill proves useful across projects, promote it to global (~/.claude/skills/) or better yet, create a shared skill repository that can be versioned and distributed across teams.',
    difficulty: 'medium'
  },

  // Question 496 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is a best practice for naming skills?',
    option_a: 'Use random names',
    option_b: 'Use single letters',
    option_c: 'Use clear, descriptive names that indicate the skill\'s purpose (e.g., code-review, test-gen, deploy-prod)',
    option_d: 'Use numbers only',
    correct_answer: 'C',
    explanation: 'Use clear, descriptive skill names that immediately convey purpose: code-review, test-generator, deploy-production, etc. This aids both human understanding and Claude\'s skill selection.',
    difficulty: 'easy'
  },

  // Question 497 - Answer: B
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you handle deprecated configuration options?',
    option_a: 'Delete immediately without warning',
    option_b: 'Document deprecation, provide migration path, maintain for transition period',
    option_c: 'Keep forever for backwards compatibility',
    option_d: 'Rename without documentation',
    correct_answer: 'B',
    explanation: 'Handle deprecation professionally: document what\'s deprecated, why, provide clear migration path, and maintain during a transition period. Update project documentation accordingly.',
    difficulty: 'medium'
  },

  // Question 498 - Answer: D
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is the ultimate goal of good Claude Code configuration?',
    option_a: 'Maximum file count',
    option_b: 'Longest possible CLAUDE.md',
    option_c: 'Most complex settings.json',
    option_d: 'Enable Claude to work effectively within your project\'s context while keeping configuration maintainable and focused',
    correct_answer: 'D',
    explanation: 'The goal is enabling Claude to work effectively within your project\'s specific context, standards, and constraints - while keeping configuration maintainable, focused, and appropriately sized for optimal performance.',
    difficulty: 'easy'
  },

  // Question 499 - Answer: C
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'How should you balance between configuration and user instructions in conversations?',
    option_a: 'Put everything in configuration, never give instructions',
    option_b: 'Never use configuration, always give manual instructions',
    option_c: 'Configuration for persistent patterns, in-conversation instructions for one-off specifics',
    option_d: 'Randomly choose each time',
    correct_answer: 'C',
    explanation: 'Use configuration for persistent patterns, standards, and repeated behaviors. Use in-conversation instructions for one-off specifics, exploratory tasks, or contextual details that don\'t belong in permanent config.',
    difficulty: 'medium'
  },

  // Question 500 - Answer: A
  {
    week: 5,
    domain: 'Claude Code Workflows & Configurations',
    topic: 'Claude Code Configuration',
    question: 'What is a key indicator of well-designed Claude Code configuration?',
    option_a: 'Team members can onboard quickly, Claude behaves consistently, and configuration is easy to maintain',
    option_b: 'Configuration files are as large as possible',
    option_c: 'Configuration changes daily',
    option_d: 'No one understands the configuration',
    correct_answer: 'A',
    explanation: 'Well-designed configuration enables quick team onboarding, consistent Claude behavior aligned with project needs, and easy maintenance. It strikes a balance between comprehensiveness and simplicity.',
    difficulty: 'medium'
  }
];
