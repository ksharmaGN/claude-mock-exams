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

// Topic 4: Tool Design & MCP (101 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic4Questions: Question[] = [
  // Question 301 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your team is researching when MCP became available for production use. When was the Model Context Protocol (MCP) open standard introduced?',
    option_a: 'January 2024',
    option_b: 'November 2024',
    option_c: 'December 2025',
    option_d: 'March 2023',
    correct_answer: 'B',
    explanation: 'MCP was introduced as an open standard in November 2024, and later donated to the Linux Foundation in December 2025.',
    difficulty: 'easy'
  },

  // Question 302 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re designing an MCP server architecture document. What are the three core primitives in MCP that should be included?',
    option_a: 'Functions, Variables, Constants',
    option_b: 'APIs, Webhooks, Events',
    option_c: 'Queries, Mutations, Subscriptions',
    option_d: 'Tools, Resources, Prompts',
    correct_answer: 'D',
    explanation: 'MCP defines three core primitives: Tools (actions with side effects), Resources (data/content), and Prompts (reusable templates).',
    difficulty: 'easy'
  },

  // Question 303 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re implementing an MCP server and need to choose the communication protocol. What protocol does MCP use?',
    option_a: 'JSON-RPC 2.0',
    option_b: 'GraphQL',
    option_c: 'REST',
    option_d: 'WebSocket',
    correct_answer: 'A',
    explanation: 'MCP uses JSON-RPC 2.0 protocol for communication between clients and servers.',
    difficulty: 'easy'
  },

  // Question 304 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your infrastructure team asks which transport methods they need to support for MCP. Which options should you recommend?',
    option_a: 'HTTP only',
    option_b: 'WebSocket only',
    option_c: 'stdio (local) and SSE/HTTP (remote)',
    option_d: 'gRPC only',
    correct_answer: 'C',
    explanation: 'MCP supports stdio for local transports and SSE/HTTP for remote transports, enabling both local and network-based communication.',
    difficulty: 'medium'
  },

  // Question 305 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re configuring authentication for an MCP server that will access user data. What authentication standard does MCP support?',
    option_a: 'JWT only',
    option_b: 'OAuth 2.0',
    option_c: 'Basic Auth',
    option_d: 'SAML',
    correct_answer: 'B',
    explanation: 'MCP supports OAuth 2.0 for authentication, providing industry-standard security for tool integrations.',
    difficulty: 'easy'
  },

  // Question 306 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You need to create a ticket management tool in MCP. Which primitive should you use for operations like "create ticket" or "update status"?',
    option_a: 'Resources for data access',
    option_b: 'Prompts for templates',
    option_c: 'Tools for cacheable content',
    option_d: 'Tools for actions with side effects (create ticket, send message, run query)',
    correct_answer: 'D',
    explanation: 'Tools in MCP represent actions with side effects, such as creating tickets, sending messages, or running queries that modify state.',
    difficulty: 'easy'
  },

  // Question 307 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your documentation library needs to be accessible via @ mentions. Which MCP primitive should you implement?',
    option_a: 'Resources - data/content that is cacheable, read-only, with @ mention references',
    option_b: 'Tools for state modification',
    option_c: 'Prompts for parameterized templates',
    option_d: 'Event handlers',
    correct_answer: 'A',
    explanation: 'Resources in MCP represent data or content that is cacheable, read-only, and can be referenced using @ mentions.',
    difficulty: 'easy'
  },

  // Question 308 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You want to create reusable code review templates with customizable parameters. Which MCP primitive fits this use case?',
    option_a: 'Tools for side effects',
    option_b: 'Resources for static docs',
    option_c: 'Prompts - reusable templates with parameters',
    option_d: 'Tools for read-only data sources',
    correct_answer: 'C',
    explanation: 'Prompts in MCP are reusable templates with parameters that can be dynamically filled to generate consistent instructions.',
    difficulty: 'easy'
  },

  // Question 309 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude frequently fails to use your newly created tool correctly. What is THE MOST IMPORTANT factor to improve to fix tool selection and usage?',
    option_a: 'Rename the tool with a shorter name',
    option_b: 'Expand the description to 3-4+ sentences explaining everything about when and how to use it',
    option_c: 'Reduce the response size',
    option_d: 'Simplify the schema by removing parameters',
    correct_answer: 'B',
    explanation: 'Description quality is the most important factor in tool design. Descriptions should be 3-4+ sentences that explain everything about the tool, as this directly impacts Claude\'s ability to select and use the tool correctly.',
    difficulty: 'medium'
  },

  // Question 310 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re reviewing a colleague\'s tool definition. The description is "Searches database." What improvement should you suggest?',
    option_a: 'Good enough - keep it brief',
    option_b: '2 sentences maximum to avoid verbosity',
    option_c: 'As brief as possible to save tokens',
    option_d: 'Expand to 3-4+ sentences explaining search capabilities, parameters, when to use it, and what it returns',
    correct_answer: 'D',
    explanation: 'Tool descriptions should contain 3-4+ sentences that explain everything about the tool, including its purpose, when to use it, and important details.',
    difficulty: 'easy'
  },

  // Question 311 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your security audit flags that tools could accept unexpected parameters. What schema property prevents malicious parameter injection?',
    option_a: 'additionalProperties: false',
    option_b: 'allowAny: true',
    option_c: 'strictMode: optional',
    option_d: 'validateInputs: false',
    correct_answer: 'A',
    explanation: 'Tool input schemas should include "additionalProperties: false" for security, preventing unexpected or malicious properties from being passed to the tool.',
    difficulty: 'medium'
  },

  // Question 312 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have tools for GitHub operations: list PRs, create PR, merge PR. What naming pattern provides maximum clarity?',
    option_a: 'listPRs, createPR, mergePR (camelCase)',
    option_b: 'list, create, merge (short single words)',
    option_c: 'github_list_prs, github_create_pr, github_merge_pr (service_action pattern)',
    option_d: 'tool1, tool2, tool3 (numbered)',
    correct_answer: 'C',
    explanation: 'Tools should use meaningful namespacing patterns like "github_list_prs" or "slack_send_message" to clearly indicate the service and action.',
    difficulty: 'easy'
  },

  // Question 313 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have 8 tools for database operations: list_tables, get_table, create_table, update_table, delete_table, describe_table, search_table, count_table. How should you reorganize them?',
    option_a: 'Keep as 8 separate tools for clarity',
    option_b: 'Consolidate into db_operations with an action parameter (list, get, create, update, delete, describe, search, count)',
    option_c: 'Rename with different prefixes',
    option_d: 'Keep them independent, no changes needed',
    correct_answer: 'B',
    explanation: 'Related operations should be consolidated using an action parameter, reducing tool proliferation and improving organization.',
    difficulty: 'medium'
  },

  // Question 314 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your API tool returns 5KB of metadata but only 200 bytes are actually used by Claude. What response design principle should you apply?',
    option_a: 'Include all possible data for completeness',
    option_b: 'Maximize verbosity for clarity',
    option_c: 'Return raw API responses unfiltered',
    option_d: 'Return high-signal only: strip metadata, use semantic identifiers, minimize bloat',
    correct_answer: 'D',
    explanation: 'Tool responses should follow the high-signal principle: return only relevant information with semantic identifiers and minimal bloat to optimize token usage.',
    difficulty: 'medium'
  },

  // Question 315 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has a "status" parameter that only accepts "open", "closed", or "pending". How should the schema define this?',
    option_a: 'Use enum: ["open", "closed", "pending"] to restrict options',
    option_b: 'String type with no constraints, rely on description',
    option_c: 'Pattern matching with regex',
    option_d: 'Free text field with validation logic',
    correct_answer: 'A',
    explanation: 'Input schemas should use enums for fields with fixed allowed values, providing clear constraints and better validation.',
    difficulty: 'easy'
  },

  // Question 316 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your search tool accepts a "limit" parameter. Users are requesting thousands of results, causing timeouts. What schema constraint should you add?',
    option_a: 'No constraints - users know what they need',
    option_b: 'Only validate integers, no range limits',
    option_c: 'Add min: 1, max: 100 to enforce valid ranges',
    option_d: 'Only in production, not development',
    correct_answer: 'C',
    explanation: 'Min/max constraints should be used to enforce valid ranges for both numeric values and string lengths, improving input validation.',
    difficulty: 'easy'
  },

  // Question 317 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your analytics query tool has complex filter syntax that Claude frequently gets wrong. What should you add to the schema?',
    option_a: 'Make the description longer',
    option_b: 'Add input_examples showing typical usage patterns',
    option_c: 'Create multiple alternative tool names',
    option_d: 'Add deprecated parameters for trial-and-error',
    correct_answer: 'B',
    explanation: 'Complex tools should include input_examples that demonstrate typical usage patterns, helping Claude understand how to use the tool correctly.',
    difficulty: 'medium'
  },

  // Question 318 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You add 5 new tools to your MCP server while Claude is running. How can Claude discover these new tools without restarting?',
    option_a: 'Not possible, requires client restart',
    option_b: 'Client must restart',
    option_c: 'Manual refresh command required',
    option_d: 'Server sends list_changed notifications to update clients dynamically',
    correct_answer: 'D',
    explanation: 'MCP servers can send list_changed notifications to dynamically update clients when tools, resources, or prompts are added or modified.',
    difficulty: 'medium'
  },

  // Question 319 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your company uses GitHub, Slack, Jira, and Salesforce. How should you organize MCP servers for these integrations?',
    option_a: 'Create one MCP server per external system (github-server, slack-server, jira-server, salesforce-server)',
    option_b: 'One mega MCP server with all integrations',
    option_c: 'One MCP server per individual tool',
    option_d: 'Distribute randomly across servers',
    correct_answer: 'A',
    explanation: 'The recommended pattern is one MCP server per external system (e.g., one for GitHub, one for Slack), providing clear organization and isolation.',
    difficulty: 'easy'
  },

  // Question 320 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your 50-person engineering team needs access to shared company tools. How can you deploy tools that all team members can access?',
    option_a: 'Cannot share tools across team',
    option_b: 'Each developer installs locally',
    option_c: 'Deploy remote MCP servers that enable shared team capabilities',
    option_d: 'Manual configuration per user',
    correct_answer: 'C',
    explanation: 'Remote MCP servers enable shared team capabilities, allowing organizations to deploy tools that all team members can access.',
    difficulty: 'medium'
  },

  // Question 321 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re integrating MCP servers with the Claude API. What component bridges Claude API with MCP servers?',
    option_a: 'MCP adapter',
    option_b: 'MCP connector',
    option_c: 'MCP bridge',
    option_d: 'MCP proxy',
    correct_answer: 'B',
    explanation: 'The MCP connector in the Claude API enables integration with MCP servers, allowing tools to be exposed to Claude.',
    difficulty: 'easy'
  },

  // Question 322 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has 10 parameters. Claude forgets to provide several. Which parameters should be marked as required?',
    option_a: 'All 10 for safety',
    option_b: 'None - make everything optional',
    option_c: 'Random selection based on importance',
    option_d: 'Only fields absolutely essential for operation; mark optional those with sensible defaults or conditional usage',
    correct_answer: 'D',
    explanation: 'Fields should be required only for essential parameters; mark as optional when there are sensible defaults or the field is conditionally needed.',
    difficulty: 'medium'
  },

  // Question 323 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your webhook tool accepts a callback_url parameter but Claude provides invalid URLs. What schema validation should you add?',
    option_a: 'format: "uri" with proper validation constraints',
    option_b: 'Plain string with no validation',
    option_c: 'Custom regex only',
    option_d: 'No format needed, rely on runtime errors',
    correct_answer: 'A',
    explanation: 'URL parameters should use format: "uri" with proper validation constraints to ensure valid URLs are provided.',
    difficulty: 'easy'
  },

  // Question 324 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool accepts configuration objects like {database: {host, port, name}, auth: {user, password}}. How should the schema handle this?',
    option_a: 'Flatten all parameters to avoid nesting',
    option_b: 'Use string encoding like "host:port:name"',
    option_c: 'Define nested structure with proper type definitions and descriptions for each property',
    option_d: 'Use generic object type without details',
    correct_answer: 'C',
    explanation: 'Nested objects should be properly defined with type definitions and descriptions for each nested property to ensure clarity and validation.',
    difficulty: 'medium'
  },

  // Question 325 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your team is presenting MCP\'s governance model. To which organization was MCP donated in December 2025?',
    option_a: 'Apache Foundation',
    option_b: 'Linux Foundation',
    option_c: 'Mozilla Foundation',
    option_d: 'OpenAI Foundation',
    correct_answer: 'B',
    explanation: 'MCP was donated to the Linux Foundation in December 2025, ensuring its continued development as an open standard.',
    difficulty: 'easy'
  },

  // Question 326 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude misuses your deployment tool, deploying to production instead of staging. What should your tool description focus on explaining?',
    option_a: 'Implementation details of the deployment script',
    option_b: 'Internal code structure',
    option_c: 'Algorithm complexity',
    option_d: 'Purpose, usage context (when to deploy to staging vs prod), required parameters, and expected outcomes',
    correct_answer: 'D',
    explanation: 'Tool descriptions should comprehensively explain the purpose, usage context, parameters, and expected outcomes to help Claude use them effectively.',
    difficulty: 'medium'
  },

  // Question 327 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool returns user IDs like "u_2x9k4j3h8s". How can you make these identifiers more helpful in responses?',
    option_a: 'Return semantic identifiers like "user_john_doe" or include username alongside ID',
    option_b: 'Use random UUIDs only',
    option_c: 'Use numeric sequences 1, 2, 3',
    option_d: 'Avoid identifiers entirely',
    correct_answer: 'A',
    explanation: 'Semantic identifiers should be meaningful IDs or names that convey information about the entity, improving response interpretability.',
    difficulty: 'medium'
  },

  // Question 328 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have file_read, file_write, file_delete, file_list, file_move, file_copy tools. What\'s the advantage of consolidating to file_operation with an action parameter?',
    option_a: 'Increases the tool count for better organization',
    option_b: 'Simplifies authentication',
    option_c: 'Reduces tool count from 6 to 1 while maintaining clear functionality separation',
    option_d: 'Only improves caching',
    correct_answer: 'C',
    explanation: 'Action parameters reduce tool count while maintaining clear functionality separation, making the tool set more manageable without losing capability.',
    difficulty: 'medium'
  },

  // Question 329 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your company documentation needs to be accessible but shouldn\'t change frequently. You want Claude to cache it. What makes MCP Resources cacheable?',
    option_a: 'They have side effects',
    option_b: 'They are read-only and their content is stable',
    option_c: 'They use OAuth 2.0',
    option_d: 'They are small in size',
    correct_answer: 'B',
    explanation: 'MCP Resources are cacheable because they are read-only and their content is stable, allowing for efficient reuse without repeated fetching.',
    difficulty: 'medium'
  },

  // Question 330 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your team has standard code review checklists that vary by project type (frontend, backend, mobile). What MCP primitive should you use?',
    option_a: 'Tools for executing reviews',
    option_b: 'Resources for static checklists',
    option_c: 'Tools for API authentication',
    option_d: 'Prompts - creating reusable instruction templates that can be parameterized by project type',
    correct_answer: 'D',
    explanation: 'MCP Prompts are designed for creating reusable instruction templates that can be parameterized, enabling consistent prompt patterns across use cases.',
    difficulty: 'easy'
  },

  // Question 331 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your email notification tool gets invalid email addresses from Claude. What schema validation should you add?',
    option_a: 'Use format: "email" with proper constraints',
    option_b: 'Accept any string, validate at runtime',
    option_c: 'Write custom validation function',
    option_d: 'No validation needed',
    correct_answer: 'A',
    explanation: 'Email parameters should use format: "email" with proper constraints to ensure valid email addresses are provided.',
    difficulty: 'easy'
  },

  // Question 332 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your knowledge base has thousands of documents. You want Claude to easily reference them in conversations. What\'s the benefit of using @ mention references for Resources?',
    option_a: 'Improves security',
    option_b: 'Reduces API calls',
    option_c: 'Enables easy, intuitive referencing of resources in conversations with natural @doc-name syntax',
    option_d: 'Decreases latency',
    correct_answer: 'C',
    explanation: '@ mention references enable easy, intuitive referencing of resources in conversations, making it natural to incorporate data into interactions.',
    difficulty: 'easy'
  },

  // Question 333 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re building an MCP server that runs on the same machine as Claude Code. What transport method provides the best performance?',
    option_a: 'HTTP',
    option_b: 'stdio',
    option_c: 'WebSocket',
    option_d: 'gRPC',
    correct_answer: 'B',
    explanation: 'stdio is the recommended transport for local MCP servers, providing efficient process-to-process communication.',
    difficulty: 'easy'
  },

  // Question 334 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your team is deploying an MCP server to AWS that will be accessed by developers across different offices. What transport method should you use?',
    option_a: 'stdio only',
    option_b: 'WebSocket only',
    option_c: 'gRPC',
    option_d: 'SSE/HTTP',
    correct_answer: 'D',
    explanation: 'SSE/HTTP is the recommended transport for remote MCP servers, enabling network-based communication across different machines.',
    difficulty: 'easy'
  },

  // Question 335 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'A security review flags that your tool could accept arbitrary parameters. Why is "additionalProperties: false" critical in your input schema?',
    option_a: 'Prevents injection of unexpected or malicious properties like __proto__ pollution',
    option_b: 'Improves performance',
    option_c: 'Reduces schema size',
    option_d: 'Enables caching',
    correct_answer: 'A',
    explanation: 'Setting "additionalProperties: false" prevents injection of unexpected or malicious properties, providing important security validation.',
    difficulty: 'medium'
  },

  // Question 336 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your scheduling tool accepts a "time" parameter. Claude provides "tomorrow", "2pm", "2024-01-15T14:00:00Z" - all causing parsing errors. How should you specify this parameter?',
    option_a: 'As plain string, handle all formats',
    option_b: 'As numbers (timestamps only)',
    option_c: 'Specify exact format: "ISO 8601 format only (YYYY-MM-DDTHH:mm:ssZ)" with examples in description',
    option_d: 'No constraints, flexible parsing',
    correct_answer: 'C',
    explanation: 'Format-sensitive parameters should have specific format specifications and examples in the description to ensure correct usage.',
    difficulty: 'medium'
  },

  // Question 337 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your API tool returns 10KB responses but only 500 bytes are relevant. Claude hits context limits frequently. What should you minimize?',
    option_a: 'Essential semantic information',
    option_b: 'Bloat, redundancy, unnecessary metadata - return only high-signal data',
    option_c: 'Error messages',
    option_d: 'Status indicators',
    correct_answer: 'B',
    explanation: 'Tool responses should minimize bloat, redundancy, and unnecessary metadata to optimize token usage while maintaining high signal.',
    difficulty: 'easy'
  },

  // Question 338 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have user_authentication (login/logout) and user_management (CRUD operations) as one tool. Users report Claude confuses when to use it. When should you split into separate tools?',
    option_a: 'Never split - keep consolidated',
    option_b: 'Always split every operation',
    option_c: 'Based on naming preferences',
    option_d: 'Split because authentication and management are fundamentally different use cases',
    correct_answer: 'D',
    explanation: 'Separate tools should be created when operations are fundamentally different or serve distinct use cases, even if they relate to the same system.',
    difficulty: 'medium'
  },

  // Question 339 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool is rarely selected correctly. What makes a tool description high-quality according to MCP best practices?',
    option_a: 'Comprehensive 3-4+ sentences covering: what it does, when to use it, key parameters, edge cases to consider',
    option_b: 'One sentence summary only',
    option_c: 'Code examples only',
    option_d: 'Parameter list without context',
    correct_answer: 'A',
    explanation: 'High-quality descriptions comprehensively explain purpose, parameters, behavior, and edge cases in 3-4+ sentences, enabling effective tool selection.',
    difficulty: 'medium'
  },

  // Question 340 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re explaining MCP to new developers. How do MCP Tools differ from MCP Resources?',
    option_a: 'No functional difference',
    option_b: 'Tools are read-only, Resources have side effects',
    option_c: 'Tools have side effects (create/update/delete), Resources are read-only and cacheable (fetch/read)',
    option_d: 'Tools are faster',
    correct_answer: 'C',
    explanation: 'Tools have side effects and perform actions, while Resources are read-only, cacheable data sources without side effects.',
    difficulty: 'easy'
  },

  // Question 341 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You add tools to your MCP server while Claude is connected. What notification type enables Claude to discover new tools without reconnecting?',
    option_a: 'tool_updated',
    option_b: 'list_changed',
    option_c: 'schema_modified',
    option_d: 'refresh_required',
    correct_answer: 'B',
    explanation: 'The list_changed notification enables dynamic updates, alerting clients when the list of tools, resources, or prompts has changed.',
    difficulty: 'easy'
  },

  // Question 342 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have tools named "send", "get", "list". Claude frequently selects the wrong tool. What should tool naming convey?',
    option_a: 'Brevity only',
    option_b: 'Alphabetical ordering',
    option_c: 'Version numbers',
    option_d: 'Both the system/service (e.g., "slack") and the specific action (e.g., "send_message"): slack_send_message',
    correct_answer: 'D',
    explanation: 'Tool naming should convey both the system/service (e.g., "github") and the specific action (e.g., "list_prs") for maximum clarity.',
    difficulty: 'easy'
  },

  // Question 343 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude provides wrong values for your tool\'s parameters. How should parameter descriptions be written?',
    option_a: 'Clear, detailed explanations of expected values, formats, constraints, and examples',
    option_b: 'Single word labels',
    option_c: 'Code variable names only',
    option_d: 'Omitted if parameter name is self-explanatory',
    correct_answer: 'A',
    explanation: 'Parameter descriptions should provide clear, detailed explanations of expected values, formats, and constraints to guide proper usage.',
    difficulty: 'easy'
  },

  // Question 344 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your company is evaluating MCP vs proprietary solutions. What is the primary advantage of MCP as an open standard?',
    option_a: 'Faster execution speed',
    option_b: 'Lower operational costs',
    option_c: 'Interoperability across different AI systems and tools, avoiding vendor lock-in',
    option_d: 'Simpler implementation',
    correct_answer: 'C',
    explanation: 'As an open standard, MCP enables interoperability across different AI systems and tools, preventing vendor lock-in.',
    difficulty: 'medium'
  },

  // Question 345 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your MCP server has 200+ tools. Claude struggles to find the right tool. When should you implement tool search integration?',
    option_a: 'Never, not supported',
    option_b: 'For large catalogs (50+ tools) to help Claude discover and select relevant tools efficiently',
    option_c: 'Only for debugging',
    option_d: 'Only in production',
    correct_answer: 'B',
    explanation: 'Tool search integration helps Claude discover and select appropriate tools from large catalogs, improving tool utilization at scale.',
    difficulty: 'medium'
  },

  // Question 346 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has a "priority" field that only accepts "low", "medium", or "high". What schema type restricts string values to these options?',
    option_a: 'pattern',
    option_b: 'format',
    option_c: 'oneOf',
    option_d: 'enum',
    correct_answer: 'D',
    explanation: 'The enum type should be used to restrict string (or other) values to a specific set of allowed options.',
    difficulty: 'easy'
  },

  // Question 347 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re integrating MCP into your Claude API application. What is the role of the MCP connector?',
    option_a: 'Bridges Claude API with MCP servers, exposing tools and resources to Claude',
    option_b: 'Stores tool configurations in cache',
    option_c: 'Only handles response caching',
    option_d: 'Handles authentication exclusively',
    correct_answer: 'A',
    explanation: 'The MCP connector bridges the Claude API with MCP servers, exposing tools and resources to Claude for use in conversations.',
    difficulty: 'medium'
  },

  // Question 348 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool fails silently, and Claude doesn\'t understand what went wrong. How should error responses be designed?',
    option_a: 'Return generic "Error occurred"',
    option_b: 'Include full stack traces',
    option_c: 'Provide clear, actionable error messages with context: what failed, why, and how to fix',
    option_d: 'Suppress all error details',
    correct_answer: 'C',
    explanation: 'Error responses should provide clear, actionable error messages with relevant context to help Claude understand and potentially recover from issues.',
    difficulty: 'medium'
  },

  // Question 349 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool accepts deeply nested configuration objects. Claude struggles to provide correct structure. What JSON Schema property helps?',
    option_a: 'comments',
    option_b: 'description fields at ALL levels of nesting, explaining each property',
    option_c: 'annotations',
    option_d: 'metadata',
    correct_answer: 'B',
    explanation: 'Description fields at all levels of nesting help document complex structures, ensuring each nested property is well explained.',
    difficulty: 'easy'
  },

  // Question 350 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You need to expose your API documentation. Should you use Tools or Resources in MCP?',
    option_a: 'Tools for all operations',
    option_b: 'Tools because documentation changes',
    option_c: 'Resources only for one-time operations',
    option_d: 'Resources because documentation is read-only, cacheable, and can be @mentioned',
    correct_answer: 'D',
    explanation: 'Resources should be used for read-only data that can be cached and easily referenced with @ mentions, not for actions that modify state.',
    difficulty: 'easy'
  },

  // Question 351 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re designing error handling for your MCP server. What is a key benefit of using JSON-RPC 2.0?',
    option_a: 'Standardized request/response format with built-in error handling structure',
    option_b: 'Smaller payload sizes than REST',
    option_c: 'Always faster than other protocols',
    option_d: 'Easier to debug than all alternatives',
    correct_answer: 'A',
    explanation: 'JSON-RPC 2.0 provides a standardized request/response format with built-in error handling, ensuring consistent communication patterns.',
    difficulty: 'medium'
  },

  // Question 352 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your database query tool returns 10,000 rows, exceeding context limits. How should pagination be handled?',
    option_a: 'Return all results always',
    option_b: 'Hard limit to first 10 items',
    option_c: 'Provide page_size and page_number parameters, return total_count and next_page_token in metadata',
    option_d: 'Avoid pagination entirely',
    correct_answer: 'C',
    explanation: 'Pagination should use clear parameters in requests and return metadata (like total count, next page token) in responses for proper handling of large datasets.',
    difficulty: 'medium'
  },

  // Question 353 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude uses your backup tool during active development instead of during maintenance windows. What should be included in the description?',
    option_a: 'Technical implementation details',
    option_b: 'Use cases: "Use during scheduled maintenance, not during active development" with context about when/why to invoke',
    option_c: 'Source code references',
    option_d: 'Performance benchmarks',
    correct_answer: 'B',
    explanation: 'Tool descriptions should include use cases, scenarios, and appropriate contexts to help Claude understand when to invoke the tool.',
    difficulty: 'medium'
  },

  // Question 354 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You need to update a tool\'s schema without breaking existing users. What is the recommended approach for versioning?',
    option_a: 'No versioning needed',
    option_b: 'Version in tool name only (tool_v1, tool_v2)',
    option_c: 'Use semantic versioning in responses only',
    option_d: 'Include version in tool metadata, maintain backward compatibility, provide migration path',
    correct_answer: 'D',
    explanation: 'Tools should include version information in metadata and be designed with backward compatibility considerations for smooth evolution.',
    difficulty: 'hard'
  },

  // Question 355 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool hits GitHub API rate limits. Claude keeps retrying immediately. How should rate limiting be communicated?',
    option_a: 'Include rate_limit_remaining, rate_limit_reset in metadata; return clear "Rate limit exceeded, retry after X seconds" errors',
    option_b: 'Silently fail',
    option_c: 'Return empty results',
    option_d: 'No need to communicate',
    correct_answer: 'A',
    explanation: 'Rate limiting should be communicated through headers/metadata and clear error messages, allowing Claude to handle limits appropriately.',
    difficulty: 'medium'
  },

  // Question 356 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool accesses customer PII. Security audit requires proper access controls. What security consideration is critical?',
    option_a: 'Allow full access for convenience',
    option_b: 'Disable all security features',
    option_c: 'Implement proper authentication, authorization, scope limiting (only access necessary data)',
    option_d: 'Use hardcoded credentials',
    correct_answer: 'C',
    explanation: 'Tools accessing user data must implement proper authentication, authorization, and scope limiting to ensure secure access control.',
    difficulty: 'easy'
  },

  // Question 357 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your data export tool sometimes takes 5+ minutes. Users report Claude appears to hang. How should timeouts be handled?',
    option_a: 'Use infinite timeouts to ensure completion',
    option_b: 'Implement reasonable timeouts (e.g., 60s) with clear "Operation timed out, consider using async job" error',
    option_c: 'Never use timeouts',
    option_d: 'Let the client handle all timeouts',
    correct_answer: 'B',
    explanation: 'Long-running operations should implement reasonable timeouts with clear error messages to prevent indefinite hangs and improve user experience.',
    difficulty: 'medium'
  },

  // Question 358 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your schema uses "object" type for all parameters. Claude frequently provides incorrect structures. What is the benefit of specific types?',
    option_a: 'Reduces code size',
    option_b: 'Improves caching',
    option_c: 'Faster execution',
    option_d: 'Better validation, clearer expectations, improved tool selection - Claude knows exactly what structure to provide',
    correct_answer: 'D',
    explanation: 'Specific types provide better validation, set clearer expectations, and help Claude select and use tools more effectively than generic objects.',
    difficulty: 'easy'
  },

  // Question 359 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has "limit" parameter that defaults to 10. Claude assumes no default exists. How should optional parameters with defaults be documented?',
    option_a: 'Clearly state in description: "Optional. Defaults to 10 if not specified."',
    option_b: 'Omit default information',
    option_c: 'Use separate documentation',
    option_d: 'Defaults should not be documented',
    correct_answer: 'A',
    explanation: 'Optional parameters with defaults should clearly state the default value in the description, helping users understand behavior when omitted.',
    difficulty: 'easy'
  },

  // Question 360 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your analytics tool has complex query syntax. Claude gets it wrong 50% of the time. What is the purpose of input_examples?',
    option_a: 'Required for all tools',
    option_b: 'Only for testing',
    option_c: 'Demonstrate typical usage: {"query": "revenue > 1000", "groupBy": "region", "timeRange": "last_30_days"}',
    option_d: 'Performance optimization',
    correct_answer: 'C',
    explanation: 'input_examples demonstrate typical usage patterns, helping Claude understand how to correctly construct inputs for complex tools.',
    difficulty: 'medium'
  },

  // Question 361 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your "manage_system" tool handles user CRUD, permissions, billing, notifications. Claude is confused when to use it. When should you split?',
    option_a: 'Never split tools',
    option_b: 'Split now - it tries to do too many unrelated things (users, billing, permissions are separate concerns)',
    option_c: 'Always prefer many small tools',
    option_d: 'Based on random preference',
    correct_answer: 'B',
    explanation: 'Tools should be split when they try to do too many unrelated things or have overly complex parameters, improving clarity and usability.',
    difficulty: 'medium'
  },

  // Question 362 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool returns CSV strings for structured data. Claude struggles to parse them reliably. How should structured data be returned?',
    option_a: 'As plain text strings',
    option_b: 'As CSV format',
    option_c: 'As XML',
    option_d: 'As properly typed JSON: {"users": [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]}',
    correct_answer: 'D',
    explanation: 'Structured data should be returned as properly typed JSON objects with clear schema, enabling reliable parsing and usage.',
    difficulty: 'easy'
  },

  // Question 363 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your API documentation changes rarely. You want aggressive caching. What makes MCP Resources cacheable by design?',
    option_a: 'They are read-only and content-addressed - same URI always returns same content',
    option_b: 'They use compression',
    option_c: 'They are small files',
    option_d: 'They use special headers',
    correct_answer: 'A',
    explanation: 'Resources are cacheable because they are read-only and content-addressed, meaning the same resource URI always returns the same content.',
    difficulty: 'medium'
  },

  // Question 364 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your schema has boolean "flag1", "flag2", "flag3". Claude asks "What does flag1 do?" How should booleans be named?',
    option_a: 'Use generic names like "flag"',
    option_b: 'Use single letters',
    option_c: 'Use descriptive question-form: "include_deleted", "force_update", "skip_validation"',
    option_d: 'Use numeric codes',
    correct_answer: 'C',
    explanation: 'Boolean parameters should use descriptive question-form names that clearly indicate what true/false means (e.g., "include_deleted").',
    difficulty: 'easy'
  },

  // Question 365 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool processes 1000 records. Individual calls timeout. What pattern should be used for batch operations?',
    option_a: 'Force multiple individual tool calls',
    option_b: 'Accept array of items with max limit (e.g., 100), return per-item success/failure status',
    option_c: 'Avoid batch operations',
    option_d: 'Use separate batch endpoints',
    correct_answer: 'B',
    explanation: 'Batch operation tools should accept arrays with appropriate limits and clear semantics about partial success/failure handling.',
    difficulty: 'medium'
  },

  // Question 366 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your upsert_user tool can be called multiple times safely. How should idempotent operations be indicated?',
    option_a: 'Not necessary to indicate',
    option_b: 'Use "idempotent_" naming prefix',
    option_c: 'Return different status codes',
    option_d: 'Document in description: "This operation is idempotent - repeated calls with same parameters have no additional effect"',
    correct_answer: 'D',
    explanation: 'Idempotency behavior should be clearly documented in the tool description, helping Claude understand if repeated calls are safe.',
    difficulty: 'medium'
  },

  // Question 367 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool schema requires an API key parameter that Claude fills with the actual key. Security audit fails. How should API keys be handled?',
    option_a: 'Use secure environment variables or OAuth flows server-side, never accept keys as tool parameters',
    option_b: 'Pass in tool parameters for flexibility',
    option_c: 'Hardcode in server',
    option_d: 'Include in responses',
    correct_answer: 'A',
    explanation: 'API keys and secrets should use secure environment variables or OAuth flows, never being passed as tool parameters or exposed in responses.',
    difficulty: 'easy'
  },

  // Question 368 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your old_api_call tool will be removed in 6 months. Users still depend on it. How should deprecation be handled?',
    option_a: 'Delete immediately without warning',
    option_b: 'Keep deprecated tools forever',
    option_c: 'Mark as deprecated in description, provide migration guide to new_api_call, announce sunset date',
    option_d: 'Silently change behavior',
    correct_answer: 'C',
    explanation: 'Deprecated tools should be marked with clear deprecation notices, migration guidance, and sunset timelines to enable smooth transitions.',
    difficulty: 'medium'
  },

  // Question 369 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your remote MCP server needs to push real-time notifications to Claude. What is the advantage of SSE?',
    option_a: 'Faster than HTTP',
    option_b: 'Enables server-to-client streaming and real-time updates without polling',
    option_c: 'Simpler than stdio',
    option_d: 'Better security',
    correct_answer: 'B',
    explanation: 'SSE enables server-to-client streaming and real-time updates, allowing MCP servers to push notifications and updates to clients.',
    difficulty: 'medium'
  },

  // Question 370 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your batch_update_users tool processes 50 users. 10 succeed, 40 fail. How should tools handle partial success?',
    option_a: 'Fail entire batch on any error',
    option_b: 'Silently skip errors',
    option_c: 'Retry indefinitely',
    option_d: 'Return detailed results: [{user_id: 1, status: "success"}, {user_id: 2, status: "failed", error: "..."}]',
    correct_answer: 'D',
    explanation: 'Batch operations should return detailed results indicating success/failure for each item, allowing Claude to understand partial success scenarios.',
    difficulty: 'hard'
  },

  // Question 371 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude provides wrong parameter values. You add detailed descriptions and Claude usage improves significantly. What is the purpose of description fields?',
    option_a: 'Guides Claude on expected values, formats, and how to use each parameter - directly impacts tool usage quality',
    option_b: 'Only for human documentation',
    option_c: 'Optional metadata',
    option_d: 'Performance hints',
    correct_answer: 'A',
    explanation: 'Description fields guide Claude on what values are expected and how to use each parameter, directly impacting tool usage quality.',
    difficulty: 'easy'
  },

  // Question 372 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You want to provide standard code review templates for different languages. Should you use Tools or Prompts?',
    option_a: 'Tools for database operations',
    option_b: 'Tools for executing reviews',
    option_c: 'Prompts - reusable instruction templates like "code-review-python" that guide Claude\'s review behavior',
    option_d: 'Resources for file operations',
    correct_answer: 'C',
    explanation: 'Prompts should be used for reusable instruction templates that guide Claude\'s behavior, not for executing actions or retrieving data.',
    difficulty: 'easy'
  },

  // Question 373 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool accepts "tags" array. Claude provides [1,1,1] or very long arrays. How should array parameters specify constraints?',
    option_a: 'No constraints needed',
    option_b: 'Use "items": {"type": "string"}, "minItems": 1, "maxItems": 10, "uniqueItems": true',
    option_c: 'Accept any array',
    option_d: 'Use string descriptions only',
    correct_answer: 'B',
    explanation: 'Array parameters should use "items" schema to specify type, along with minItems, maxItems, and uniqueItems constraints as appropriate.',
    difficulty: 'medium'
  },

  // Question 374 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your analytics query can return millions of rows. Claude hits context limits. What is a key consideration for large result sets?',
    option_a: 'Return everything always',
    option_b: 'Hard limit to 10 results',
    option_c: 'Refuse large queries',
    option_d: 'Implement pagination with page_size, support filtering by date/criteria, consider streaming for huge datasets',
    correct_answer: 'D',
    explanation: 'Large result sets should use pagination, filtering, and streaming where appropriate to manage token usage and performance.',
    difficulty: 'medium'
  },

  // Question 375 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude omits essential parameters from your tool. How should tools indicate which parameters are required vs optional?',
    option_a: 'Use the "required" array in JSON Schema: "required": ["api_key", "endpoint"]',
    option_b: 'Use naming conventions (param_required)',
    option_c: 'Make all parameters required',
    option_d: 'Documentation comments only',
    correct_answer: 'A',
    explanation: 'JSON Schema uses a "required" array to explicitly list which parameter names are required, providing clear validation.',
    difficulty: 'easy'
  },

  // Question 376 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have tools "send" and "send" from different services causing conflicts. What is the benefit of namespacing?',
    option_a: 'Shorter names',
    option_b: 'Easier to type',
    option_c: 'Immediately identifies service (slack_send vs email_send), prevents naming conflicts',
    option_d: 'Faster execution',
    correct_answer: 'C',
    explanation: 'Meaningful namespacing (e.g., "github_" prefix) immediately identifies the service and prevents naming conflicts across different systems.',
    difficulty: 'easy'
  },

  // Question 377 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has "user_id" OR "email" parameter - only one is required. Claude provides both or neither. How should conditional parameters be handled?',
    option_a: 'Always make them required',
    option_b: 'Document clearly: "Provide either user_id OR email (not both)" with validation details in description',
    option_c: 'Use separate tools',
    option_d: 'Avoid conditional logic',
    correct_answer: 'B',
    explanation: 'Conditional parameters should have their dependencies and conditions clearly documented in descriptions, helping Claude understand when they are needed.',
    difficulty: 'medium'
  },

  // Question 378 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Tool errors are difficult to trace across systems. What should be included in responses to aid debugging?',
    option_a: 'Nothing extra',
    option_b: 'Full stack traces always',
    option_c: 'Internal variable states',
    option_d: 'request_id for tracing, timestamp, error_code, and actionable error context',
    correct_answer: 'D',
    explanation: 'Tool responses should include request IDs, timestamps, and relevant error context when appropriate to aid debugging without exposing sensitive internals.',
    difficulty: 'medium'
  },

  // Question 379 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has "timeout" parameter. Claude provides "30" - seconds? milliseconds? How should units be specified?',
    option_a: 'Clearly in parameter name and description: "timeout_seconds - Timeout in seconds (default: 30)"',
    option_b: 'Assume default units (seconds)',
    option_c: 'Use separate unit parameter',
    option_d: 'No need to specify',
    correct_answer: 'A',
    explanation: 'Units should be clearly specified in parameter names and/or descriptions (e.g., "timeout_seconds") to prevent ambiguity.',
    difficulty: 'easy'
  },

  // Question 380 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude repeatedly provides database credentials in tool calls. What is the recommended approach for tool configuration?',
    option_a: 'Hardcode all configuration',
    option_b: 'Pass configuration in every call',
    option_c: 'Use server-side configuration with environment variables and initialization - never pass credentials',
    option_d: 'No configuration needed',
    correct_answer: 'C',
    explanation: 'Tool configuration should be handled server-side using environment variables and initialization, not passed in each call.',
    difficulty: 'medium'
  },

  // Question 381 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your data export takes 10 minutes. Claude waits and times out. How should long-running operations be handled?',
    option_a: 'Block until complete',
    option_b: 'Return immediately with job_id, provide check_job_status tool for polling',
    option_c: 'Increase timeout to infinity',
    option_d: 'Split into multiple synchronous calls',
    correct_answer: 'B',
    explanation: 'Long-running operations should return immediately with a job ID and provide a status check mechanism for async tracking.',
    difficulty: 'hard'
  },

  // Question 382 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your MCP server has inconsistent naming (some snake_case, some camelCase) and different error formats. What is important about consistency?',
    option_a: 'Not important',
    option_b: 'Only naming matters',
    option_c: 'Only schemas matter',
    option_d: 'Consistent naming (all snake_case), response formats, error handling, parameter patterns make tools predictable and easier to use',
    correct_answer: 'D',
    explanation: 'Consistency across naming, response formats, error handling, and parameter patterns makes the entire tool set easier to understand and use.',
    difficulty: 'medium'
  },

  // Question 383 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Claude can\'t tell if your tool succeeded or failed. How should tools communicate success vs failure?',
    option_a: 'Use consistent structure: {"success": true, "data": {...}} or {"success": false, "error": {...}}',
    option_b: 'HTTP status codes only (but MCP uses JSON-RPC)',
    option_c: 'Include "success" string somewhere',
    option_d: 'No explicit indication needed',
    correct_answer: 'A',
    explanation: 'Tools should use consistent status indicators and structured error objects in responses to clearly communicate success or failure.',
    difficulty: 'easy'
  },

  // Question 384 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re adding input_examples to your tool. What makes a good example?',
    option_a: 'Minimal example with no context',
    option_b: 'Edge cases only',
    option_c: 'Realistic, common use case: {"user": "john@example.com", "action": "reset_password", "notify": true}',
    option_d: 'Random test values',
    correct_answer: 'C',
    explanation: 'Good input_examples show realistic, common use cases with typical parameter combinations that Claude is likely to encounter.',
    difficulty: 'easy'
  },

  // Question 385 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool has "search_by_id" and "search_by_name" parameters. Claude provides both, causing errors. How should mutually exclusive parameters be handled?',
    option_a: 'Allow both simultaneously',
    option_b: 'Document: "Provide either search_by_id OR search_by_name (mutually exclusive)" and validate server-side',
    option_c: 'Use different tools',
    option_d: 'Ignore the issue',
    correct_answer: 'B',
    explanation: 'Mutually exclusive parameters should be clearly documented as such and validated server-side to prevent invalid combinations.',
    difficulty: 'medium'
  },

  // Question 386 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool accepts "ticket_id" in format "PROJ-1234". Claude provides "1234" or "proj1234". What validation should you add?',
    option_a: 'No validation needed',
    option_b: 'Will improve performance',
    option_c: 'Enable caching',
    option_d: 'Add pattern: "^[A-Z]+-\\d+$" to enforce format like PROJ-1234',
    correct_answer: 'D',
    explanation: 'Pattern validation enforces format requirements for strings like IDs, codes, or specific structures, improving input quality.',
    difficulty: 'easy'
  },

  // Question 387 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool serves users in multiple countries. How should internationalization (i18n) be handled?',
    option_a: 'Accept locale parameter (e.g., "en-US", "fr-FR"), return localized error messages and content',
    option_b: 'English only',
    option_c: 'Ignore i18n',
    option_d: 'Use automatic translation',
    correct_answer: 'A',
    explanation: 'Tools should accept locale parameters and return localized content where appropriate to support international users.',
    difficulty: 'medium'
  },

  // Question 388 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Before deploying your MCP server, what is the recommended testing strategy?',
    option_a: 'No testing needed',
    option_b: 'Manual testing only',
    option_c: 'Automated tests: schema validation, error cases (invalid params, auth failures), typical usage patterns',
    option_d: 'Production testing only',
    correct_answer: 'C',
    explanation: 'Tool development should include automated tests for schema validation, error cases, and typical usage patterns to ensure reliability.',
    difficulty: 'medium'
  },

  // Question 389 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your delete_database tool is very dangerous. How should tools indicate the scope of permissions?',
    option_a: 'Hide permission details',
    option_b: 'Clearly document: "This tool can DELETE entire databases. Use with extreme caution. Requires admin privileges."',
    option_c: 'Assume users know',
    option_d: 'Use cryptic abbreviations',
    correct_answer: 'B',
    explanation: 'Tools should clearly document in their description what data and systems they can access, ensuring transparency about permissions.',
    difficulty: 'easy'
  },

  // Question 390 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You\'re choosing between stdio and HTTP for a local MCP server. What is the benefit of stdio?',
    option_a: 'Better security than remote',
    option_b: 'Supports more features',
    option_c: 'Easier to debug',
    option_d: 'Low latency, simple process communication without network overhead',
    correct_answer: 'D',
    explanation: 'stdio transport provides low latency, simple process-to-process communication without network overhead, ideal for local servers.',
    difficulty: 'medium'
  },

  // Question 391 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your user_info tool returns password hashes and credit card numbers. Security audit fails. How should sensitive data be handled?',
    option_a: 'Redact or omit sensitive fields (passwords, credit cards, SSN) - only return necessary data',
    option_b: 'Include everything',
    option_c: 'Encrypt in response',
    option_d: 'Use obfuscation',
    correct_answer: 'A',
    explanation: 'Sensitive data should be redacted or omitted from responses, returning only what is necessary for the task at hand.',
    difficulty: 'easy'
  },

  // Question 392 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your SaaS tool serves 100 customers. Customer A can see Customer B\'s data through your tool. What must be implemented?',
    option_a: 'Ignore tenancy',
    option_b: 'Use global configuration',
    option_c: 'Ensure proper tenant isolation and context passing - validate tenant_id in authentication, scope all queries by tenant',
    option_d: 'Single tenant only',
    correct_answer: 'C',
    explanation: 'Multi-tenant tools must ensure proper tenant isolation and context passing through authentication to prevent data leakage.',
    difficulty: 'hard'
  },

  // Question 393 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool schema changed: required parameter "type" is now "category". Existing users break. How should breaking changes be introduced?',
    option_a: 'Immediate replacement',
    option_b: 'Create tool_v2 with new schema, maintain tool_v1 for 6 months with deprecation notice and migration guide',
    option_c: 'Silently update',
    option_d: 'No breaking changes allowed ever',
    correct_answer: 'B',
    explanation: 'Breaking changes should involve versioning the tool, maintaining the old version during transition, and providing a clear migration path.',
    difficulty: 'medium'
  },

  // Question 394 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You have 50 tools. Claude frequently selects wrong tools. What is the role of tool consolidation?',
    option_a: 'Increases complexity',
    option_b: 'Makes tools harder to use',
    option_c: 'No real benefit',
    option_d: 'Reduces cognitive load (50 → 20 tools), improves tool discovery while maintaining functionality through action parameters',
    correct_answer: 'D',
    explanation: 'Tool consolidation reduces cognitive load and improves tool discovery by reducing the number of tools while maintaining full functionality.',
    difficulty: 'medium'
  },

  // Question 395 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your API occasionally returns 503 Service Unavailable. Claude immediately fails. How should retry logic be handled?',
    option_a: 'Implement server-side retry with exponential backoff for transient 5xx errors (503, 504)',
    option_b: 'Never retry',
    option_c: 'Client must handle all retries',
    option_d: 'Retry infinitely',
    correct_answer: 'A',
    explanation: 'Server-side retry with exponential backoff should be implemented for transient errors to improve reliability without burdening the client.',
    difficulty: 'medium'
  },

  // Question 396 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your production tools have no visibility into usage or errors. What should be logged for tool invocations?',
    option_a: 'Nothing, logging is unnecessary',
    option_b: 'Full parameter values including API keys',
    option_c: 'Log: tool_name, request_id, timestamp, duration, success/failure, error_type, but redact sensitive parameters',
    option_d: 'Only errors',
    correct_answer: 'C',
    explanation: 'Production logging should include request metadata, timing, and errors while redacting sensitive parameters to maintain observability and security.',
    difficulty: 'medium'
  },

  // Question 397 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You add new optional parameter "include_metadata" to your tool. Existing users didn\'t update their code. How should backwards compatibility be handled?',
    option_a: 'Require all clients to update',
    option_b: 'New optional parameter defaults to false - existing behavior unchanged',
    option_c: 'Create new tool entirely',
    option_d: 'Break compatibility',
    correct_answer: 'B',
    explanation: 'New optional parameters should have sensible defaults that preserve existing behavior, maintaining backwards compatibility.',
    difficulty: 'easy'
  },

  // Question 398 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'You need to optimize your MCP server. What metrics are key for tool performance monitoring?',
    option_a: 'Not necessary',
    option_b: 'Only monitor errors',
    option_c: 'Only monitor successes',
    option_d: 'Track: latency (p50, p95, p99), error rate by type, usage patterns by tool, resource consumption (memory, CPU)',
    correct_answer: 'D',
    explanation: 'Comprehensive tool performance monitoring should track latency, error rates, usage patterns, and resource consumption for optimization.',
    difficulty: 'medium'
  },

  // Question 399 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your tool modifies shared resources. Two Claude instances call it simultaneously, causing data corruption. How should concurrency be handled?',
    option_a: 'Implement locking/optimistic concurrency control, or document "Not safe for concurrent use"',
    option_b: 'Ignore concurrency',
    option_c: 'Serialize all access globally',
    option_d: 'Let database handle everything',
    correct_answer: 'A',
    explanation: 'Tools should implement proper locking mechanisms, optimistic concurrency control, or clearly document concurrency limitations.',
    difficulty: 'hard'
  },

  // Question 400 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'After following all MCP best practices, what is the ultimate goal of excellent tool design?',
    option_a: 'Minimize server code',
    option_b: 'Maximum feature count',
    option_c: 'Enable Claude to reliably select the right tool and use it correctly to accomplish complex tasks',
    option_d: 'Reduce API calls',
    correct_answer: 'C',
    explanation: 'The ultimate goal of excellent tool design is enabling Claude to reliably select and use tools to accomplish complex tasks effectively through clear descriptions, well-designed schemas, and thoughtful responses.',
    difficulty: 'medium'
  },

  // Question 401 - Answer: A (new question)
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'Your database query tool often uses wrong table names. To improve tool selection accuracy, what should your schema prioritize?',
    option_a: 'Expand description to 3-4+ sentences listing valid tables, when to query each, and common query patterns',
    option_b: 'Shorter tool name',
    option_c: 'More parameters',
    option_d: 'Generic description',
    correct_answer: 'A',
    explanation: 'Description quality is paramount. Listing valid tables, their purposes, and typical usage patterns helps Claude select and use the tool correctly.',
    difficulty: 'medium'
  }
];
