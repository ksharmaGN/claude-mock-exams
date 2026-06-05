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

// Topic 4: Tool Design & MCP (100 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic4Questions: Question[] = [
  // Question 301 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'When was the Model Context Protocol (MCP) open standard introduced?',
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
    question: 'What are the three core primitives in MCP?',
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
    question: 'What protocol does MCP use for communication?',
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
    question: 'Which transport methods does MCP support?',
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
    question: 'What authentication standard does MCP support?',
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
    question: 'What is the primary characteristic of MCP Tools primitive?',
    option_a: 'Read-only data access',
    option_b: 'Template generation',
    option_c: 'Cacheable content',
    option_d: 'Actions with side effects (create ticket, send message, run query)',
    correct_answer: 'D',
    explanation: 'Tools in MCP represent actions with side effects, such as creating tickets, sending messages, or running queries that modify state.',
    difficulty: 'easy'
  },

  // Question 307 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is the primary characteristic of MCP Resources primitive?',
    option_a: 'Data/content that is cacheable, read-only, with @ mention references',
    option_b: 'Actions that modify state',
    option_c: 'Reusable templates with parameters',
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
    question: 'What is the primary characteristic of MCP Prompts primitive?',
    option_a: 'Actions with side effects',
    option_b: 'Static documentation',
    option_c: 'Reusable templates with parameters',
    option_d: 'Read-only data sources',
    correct_answer: 'C',
    explanation: 'Prompts in MCP are reusable templates with parameters that can be dynamically filled to generate consistent instructions.',
    difficulty: 'easy'
  },

  // Question 309 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is THE MOST IMPORTANT factor in tool design for performance?',
    option_a: 'Tool naming conventions',
    option_b: 'Description quality - 3-4+ sentences explaining everything',
    option_c: 'Response size minimization',
    option_d: 'Schema complexity',
    correct_answer: 'B',
    explanation: 'Description quality is the most important factor in tool design. Descriptions should be 3-4+ sentences that explain everything about the tool, as this directly impacts Claude\'s ability to select and use the tool correctly.',
    difficulty: 'medium'
  },

  // Question 310 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How many sentences should a high-quality tool description contain?',
    option_a: '1 sentence is sufficient',
    option_b: '2 sentences maximum',
    option_c: 'As brief as possible',
    option_d: '3-4+ sentences explaining everything',
    correct_answer: 'D',
    explanation: 'Tool descriptions should contain 3-4+ sentences that explain everything about the tool, including its purpose, when to use it, and important details.',
    difficulty: 'easy'
  },

  // Question 311 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What should tool input schemas include for security?',
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
    question: 'What naming pattern should tools follow for clarity?',
    option_a: 'Short single words',
    option_b: 'Camel case only',
    option_c: 'Meaningful namespacing (github_list_prs, slack_send_message)',
    option_d: 'Numbered sequences',
    correct_answer: 'C',
    explanation: 'Tools should use meaningful namespacing patterns like "github_list_prs" or "slack_send_message" to clearly indicate the service and action.',
    difficulty: 'easy'
  },

  // Question 313 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should related operations be organized in tool design?',
    option_a: 'Create separate tools for each variation',
    option_b: 'Consolidate using an action parameter',
    option_c: 'Use different naming prefixes',
    option_d: 'Keep them completely independent',
    correct_answer: 'B',
    explanation: 'Related operations should be consolidated using an action parameter, reducing tool proliferation and improving organization.',
    difficulty: 'medium'
  },

  // Question 314 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What principle should guide tool response design?',
    option_a: 'Include all possible data',
    option_b: 'Maximize verbosity for clarity',
    option_c: 'Return raw API responses',
    option_d: 'High-signal only, semantic identifiers, minimal bloat',
    correct_answer: 'D',
    explanation: 'Tool responses should follow the high-signal principle: return only relevant information with semantic identifiers and minimal bloat to optimize token usage.',
    difficulty: 'medium'
  },

  // Question 315 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What should input schemas use for fields with fixed allowed values?',
    option_a: 'Enums to restrict to specific options',
    option_b: 'String type with no constraints',
    option_c: 'Pattern matching only',
    option_d: 'Free text fields',
    correct_answer: 'A',
    explanation: 'Input schemas should use enums for fields with fixed allowed values, providing clear constraints and better validation.',
    difficulty: 'easy'
  },

  // Question 316 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'When should you use min/max constraints in input schemas?',
    option_a: 'Never, they limit flexibility',
    option_b: 'Only for integers',
    option_c: 'To enforce valid ranges for numeric and string length parameters',
    option_d: 'Only in production environments',
    correct_answer: 'C',
    explanation: 'Min/max constraints should be used to enforce valid ranges for both numeric values and string lengths, improving input validation.',
    difficulty: 'easy'
  },

  // Question 317 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What should be included for complex tools to improve usage?',
    option_a: 'Longer descriptions only',
    option_b: 'input_examples showing typical usage patterns',
    option_c: 'Multiple alternative names',
    option_d: 'Deprecated parameters',
    correct_answer: 'B',
    explanation: 'Complex tools should include input_examples that demonstrate typical usage patterns, helping Claude understand how to use the tool correctly.',
    difficulty: 'medium'
  },

  // Question 318 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How can MCP servers notify clients of changes?',
    option_a: 'Polling only',
    option_b: 'Client must restart',
    option_c: 'Manual refresh required',
    option_d: 'Dynamic updates via list_changed notifications',
    correct_answer: 'D',
    explanation: 'MCP servers can send list_changed notifications to dynamically update clients when tools, resources, or prompts are added or modified.',
    difficulty: 'medium'
  },

  // Question 319 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is the recommended pattern for organizing MCP servers?',
    option_a: 'One MCP server per external system',
    option_b: 'One MCP server for all integrations',
    option_c: 'One MCP server per tool',
    option_d: 'Random distribution',
    correct_answer: 'A',
    explanation: 'The recommended pattern is one MCP server per external system (e.g., one for GitHub, one for Slack), providing clear organization and isolation.',
    difficulty: 'easy'
  },

  // Question 320 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How can MCP servers be shared across teams?',
    option_a: 'Cannot be shared',
    option_b: 'Local installation only',
    option_c: 'Remote servers enable shared team capabilities',
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
    question: 'What component in the Claude API enables MCP integration?',
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
    question: 'When should you mark an input field as optional versus required?',
    option_a: 'Make everything required for safety',
    option_b: 'Make everything optional for flexibility',
    option_c: 'Random choice based on preference',
    option_d: 'Required for essential parameters, optional for those with sensible defaults or conditional usage',
    correct_answer: 'D',
    explanation: 'Fields should be required only for essential parameters; mark as optional when there are sensible defaults or the field is conditionally needed.',
    difficulty: 'medium'
  },

  // Question 323 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What validation formats should be used for URL parameters in schemas?',
    option_a: 'format: "uri" with proper validation constraints',
    option_b: 'Plain string with no validation',
    option_c: 'Custom regex only',
    option_d: 'No specific format needed',
    correct_answer: 'A',
    explanation: 'URL parameters should use format: "uri" with proper validation constraints to ensure valid URLs are provided.',
    difficulty: 'easy'
  },

  // Question 324 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should nested objects be handled in input schemas?',
    option_a: 'Avoid nested objects entirely',
    option_b: 'Use string encoding',
    option_c: 'Define with proper type definitions and descriptions for each nested property',
    option_d: 'Use generic object type',
    correct_answer: 'C',
    explanation: 'Nested objects should be properly defined with type definitions and descriptions for each nested property to ensure clarity and validation.',
    difficulty: 'medium'
  },

  // Question 325 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'To which organization was MCP donated in December 2025?',
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
    question: 'What should tool descriptions focus on explaining?',
    option_a: 'Implementation details only',
    option_b: 'Code structure',
    option_c: 'Internal algorithms',
    option_d: 'Purpose, usage context, parameters, and expected outcomes',
    correct_answer: 'D',
    explanation: 'Tool descriptions should comprehensively explain the purpose, usage context, parameters, and expected outcomes to help Claude use them effectively.',
    difficulty: 'medium'
  },

  // Question 327 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should semantic identifiers be used in tool responses?',
    option_a: 'Use meaningful IDs/names that convey information about the entity',
    option_b: 'Use random UUIDs only',
    option_c: 'Use numeric sequences',
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
    question: 'What is the advantage of using action parameters for tool consolidation?',
    option_a: 'Increases number of available tools',
    option_b: 'Simplifies authentication',
    option_c: 'Reduces tool count while maintaining clear functionality separation',
    option_d: 'Improves caching only',
    correct_answer: 'C',
    explanation: 'Action parameters reduce tool count while maintaining clear functionality separation, making the tool set more manageable without losing capability.',
    difficulty: 'medium'
  },

  // Question 329 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'When designing MCP Resources, what makes them cacheable?',
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
    question: 'What is the primary use case for MCP Prompts primitive?',
    option_a: 'Database queries',
    option_b: 'File operations',
    option_c: 'API authentication',
    option_d: 'Creating reusable instruction templates that can be parameterized',
    correct_answer: 'D',
    explanation: 'MCP Prompts are designed for creating reusable instruction templates that can be parameterized, enabling consistent prompt patterns across use cases.',
    difficulty: 'easy'
  },

  // Question 331 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should email parameters be validated in input schemas?',
    option_a: 'Use format: "email" with proper constraints',
    option_b: 'Accept any string',
    option_c: 'Use custom validation function',
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
    question: 'What is the benefit of using @ mention references for Resources?',
    option_a: 'Improves security',
    option_b: 'Reduces API calls',
    option_c: 'Enables easy, intuitive referencing of resources in conversations',
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
    question: 'What transport is recommended for local MCP servers?',
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
    question: 'What transport method is recommended for remote MCP servers?',
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
    question: 'Why is "additionalProperties: false" important in input schemas?',
    option_a: 'Prevents injection of unexpected or malicious properties',
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
    question: 'How should format-sensitive parameters (dates, timestamps) be specified?',
    option_a: 'As plain strings',
    option_b: 'As numbers only',
    option_c: 'With specific format specifications and examples in the description',
    option_d: 'Without constraints',
    correct_answer: 'C',
    explanation: 'Format-sensitive parameters should have specific format specifications and examples in the description to ensure correct usage.',
    difficulty: 'medium'
  },

  // Question 337 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What should be minimized in tool responses to optimize token usage?',
    option_a: 'Semantic information',
    option_b: 'Bloat, redundancy, and unnecessary metadata',
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
    question: 'When should you create separate tools instead of consolidating with action parameters?',
    option_a: 'Always create separate tools',
    option_b: 'Never create separate tools',
    option_c: 'Based on naming preferences',
    option_d: 'When operations are fundamentally different or serve distinct use cases',
    correct_answer: 'D',
    explanation: 'Separate tools should be created when operations are fundamentally different or serve distinct use cases, even if they relate to the same system.',
    difficulty: 'medium'
  },

  // Question 339 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What makes a tool description high-quality according to MCP best practices?',
    option_a: 'Comprehensive explanation of purpose, parameters, behavior, and edge cases in 3-4+ sentences',
    option_b: 'Single sentence summary',
    option_c: 'Code examples only',
    option_d: 'Parameter list only',
    correct_answer: 'A',
    explanation: 'High-quality descriptions comprehensively explain purpose, parameters, behavior, and edge cases in 3-4+ sentences, enabling effective tool selection.',
    difficulty: 'medium'
  },

  // Question 340 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How do MCP Tools differ from MCP Resources?',
    option_a: 'No difference',
    option_b: 'Tools are read-only, Resources have side effects',
    option_c: 'Tools have side effects, Resources are read-only and cacheable',
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
    question: 'What notification type enables dynamic tool updates in MCP?',
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
    question: 'What should tool naming convey for maximum clarity?',
    option_a: 'Brevity only',
    option_b: 'Alphabetical ordering',
    option_c: 'Version numbers',
    option_d: 'Both the system/service and the specific action being performed',
    correct_answer: 'D',
    explanation: 'Tool naming should convey both the system/service (e.g., "github") and the specific action (e.g., "list_prs") for maximum clarity.',
    difficulty: 'easy'
  },

  // Question 343 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should parameter descriptions in input schemas be written?',
    option_a: 'Clear, detailed explanations of expected values, formats, and constraints',
    option_b: 'Single word labels',
    option_c: 'Code variable names only',
    option_d: 'Omitted if parameter name is clear',
    correct_answer: 'A',
    explanation: 'Parameter descriptions should provide clear, detailed explanations of expected values, formats, and constraints to guide proper usage.',
    difficulty: 'easy'
  },

  // Question 344 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is the primary advantage of MCP as an open standard?',
    option_a: 'Faster execution',
    option_b: 'Lower costs',
    option_c: 'Interoperability across different AI systems and tools',
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
    question: 'When should you use tool search integration with MCP?',
    option_a: 'Never, not supported',
    option_b: 'To help Claude discover and select from large tool catalogs',
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
    question: 'What schema type should be used to restrict string values to specific options?',
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
    question: 'What is the role of the MCP connector in Claude API?',
    option_a: 'Bridges Claude API with MCP servers to expose tools and resources',
    option_b: 'Stores tool configurations',
    option_c: 'Caches responses',
    option_d: 'Handles authentication only',
    correct_answer: 'A',
    explanation: 'The MCP connector bridges the Claude API with MCP servers, exposing tools and resources to Claude for use in conversations.',
    difficulty: 'medium'
  },

  // Question 348 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should error responses be designed in MCP tools?',
    option_a: 'Return generic error messages',
    option_b: 'Include full stack traces',
    option_c: 'Provide clear, actionable error messages with relevant context',
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
    question: 'What JSON Schema property helps document complex nested structures?',
    option_a: 'comments',
    option_b: 'description fields at all levels of nesting',
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
    question: 'When should you use Resources instead of Tools in MCP?',
    option_a: 'For all operations',
    option_b: 'For actions that modify state',
    option_c: 'For one-time operations',
    option_d: 'For read-only data that can be cached and referenced with @ mentions',
    correct_answer: 'D',
    explanation: 'Resources should be used for read-only data that can be cached and easily referenced with @ mentions, not for actions that modify state.',
    difficulty: 'easy'
  },

  // Question 351 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is a key benefit of using JSON-RPC 2.0 in MCP?',
    option_a: 'Standardized request/response format with built-in error handling',
    option_b: 'Smaller payload sizes',
    option_c: 'Faster than other protocols',
    option_d: 'Easier to debug',
    correct_answer: 'A',
    explanation: 'JSON-RPC 2.0 provides a standardized request/response format with built-in error handling, ensuring consistent communication patterns.',
    difficulty: 'medium'
  },

  // Question 352 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should pagination be handled in MCP tool responses?',
    option_a: 'Return all results always',
    option_b: 'Limit to first 10 items',
    option_c: 'Provide clear pagination parameters and metadata in responses',
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
    question: 'What should be included in tool descriptions to explain when to use the tool?',
    option_a: 'Technical implementation details',
    option_b: 'Use cases, scenarios, and appropriate contexts for invocation',
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
    question: 'What is the recommended approach for versioning MCP tools?',
    option_a: 'No versioning needed',
    option_b: 'Version in tool name only',
    option_c: 'Use semantic versioning in responses',
    option_d: 'Include version in tool metadata and handle backward compatibility',
    correct_answer: 'D',
    explanation: 'Tools should include version information in metadata and be designed with backward compatibility considerations for smooth evolution.',
    difficulty: 'hard'
  },

  // Question 355 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should rate limiting be communicated in MCP tool responses?',
    option_a: 'Include rate limit headers/metadata and clear error messages when limits are hit',
    option_b: 'Silently fail',
    option_c: 'Return empty results',
    option_d: 'No need to communicate rate limits',
    correct_answer: 'A',
    explanation: 'Rate limiting should be communicated through headers/metadata and clear error messages, allowing Claude to handle limits appropriately.',
    difficulty: 'medium'
  },

  // Question 356 - Answer: C
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What security consideration is important when designing tools that access user data?',
    option_a: 'Always allow full access',
    option_b: 'Disable all security',
    option_c: 'Implement proper authentication, authorization, and scope limiting',
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
    question: 'How should timeouts be handled in long-running MCP tool operations?',
    option_a: 'Use infinite timeouts',
    option_b: 'Implement reasonable timeouts with clear timeout error messages',
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
    question: 'What is the benefit of using specific types instead of generic objects in schemas?',
    option_a: 'Reduces code size',
    option_b: 'Improves caching',
    option_c: 'Faster execution',
    option_d: 'Better validation, clearer expectations, and improved tool selection',
    correct_answer: 'D',
    explanation: 'Specific types provide better validation, set clearer expectations, and help Claude select and use tools more effectively than generic objects.',
    difficulty: 'easy'
  },

  // Question 359 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should optional parameters with defaults be documented?',
    option_a: 'Clearly state the default value in the parameter description',
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
    question: 'What is the purpose of input_examples in complex tool schemas?',
    option_a: 'Required for all tools',
    option_b: 'Only for testing',
    option_c: 'Demonstrate typical usage patterns to improve Claude\'s understanding',
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
    question: 'When should you split a tool into multiple smaller tools?',
    option_a: 'Never split tools',
    option_b: 'When a tool tries to do too many unrelated things or has overly complex parameters',
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
    question: 'How should structured data be returned in tool responses?',
    option_a: 'As plain text strings',
    option_b: 'As CSV format',
    option_c: 'As XML',
    option_d: 'As properly typed JSON objects with clear schema',
    correct_answer: 'D',
    explanation: 'Structured data should be returned as properly typed JSON objects with clear schema, enabling reliable parsing and usage.',
    difficulty: 'easy'
  },

  // Question 363 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What makes MCP Resources cacheable by design?',
    option_a: 'They are read-only and content-addressed',
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
    question: 'How should boolean parameters be named in tool schemas?',
    option_a: 'Use generic names like "flag"',
    option_b: 'Use single letters',
    option_c: 'Use descriptive question-form names like "include_deleted" or "force_update"',
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
    question: 'What pattern should be used for tools that perform batch operations?',
    option_a: 'Multiple individual tool calls',
    option_b: 'Accept arrays with appropriate limits and clear batch semantics',
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
    question: 'How should idempotent operations be indicated in tool design?',
    option_a: 'Not necessary to indicate',
    option_b: 'Use special naming prefix',
    option_c: 'Return different status codes',
    option_d: 'Document idempotency behavior clearly in the tool description',
    correct_answer: 'D',
    explanation: 'Idempotency behavior should be clearly documented in the tool description, helping Claude understand if repeated calls are safe.',
    difficulty: 'medium'
  },

  // Question 367 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is the recommended way to handle API keys and secrets in MCP tools?',
    option_a: 'Use secure environment variables or OAuth flows, never in tool parameters',
    option_b: 'Pass in tool parameters',
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
    question: 'How should deprecation be handled for MCP tools?',
    option_a: 'Immediately remove deprecated tools',
    option_b: 'Keep deprecated tools forever',
    option_c: 'Mark as deprecated with migration guidance and sunset timeline',
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
    question: 'What is the advantage of using SSE (Server-Sent Events) for remote MCP servers?',
    option_a: 'Faster than HTTP',
    option_b: 'Enables server-to-client streaming and real-time updates',
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
    question: 'How should tools handle partial success in batch operations?',
    option_a: 'Fail entire batch on any error',
    option_b: 'Silently skip errors',
    option_c: 'Retry indefinitely',
    option_d: 'Return detailed results indicating success/failure for each item',
    correct_answer: 'D',
    explanation: 'Batch operations should return detailed results indicating success/failure for each item, allowing Claude to understand partial success scenarios.',
    difficulty: 'hard'
  },

  // Question 371 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is the purpose of the "description" field in schema properties?',
    option_a: 'Guides Claude on what values are expected and how to use each parameter',
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
    question: 'When should you use Prompts primitive instead of Tools in MCP?',
    option_a: 'For database operations',
    option_b: 'For API calls',
    option_c: 'For reusable instruction templates that guide Claude\'s behavior',
    option_d: 'For file operations',
    correct_answer: 'C',
    explanation: 'Prompts should be used for reusable instruction templates that guide Claude\'s behavior, not for executing actions or retrieving data.',
    difficulty: 'easy'
  },

  // Question 373 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should array parameters specify item constraints?',
    option_a: 'No constraints needed',
    option_b: 'Use "items" schema with type, minItems, maxItems, and uniqueItems where appropriate',
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
    question: 'What is a key consideration when designing tools for large result sets?',
    option_a: 'Return everything always',
    option_b: 'Limit to 10 results',
    option_c: 'Refuse large queries',
    option_d: 'Implement pagination, filtering, and streaming where appropriate',
    correct_answer: 'D',
    explanation: 'Large result sets should use pagination, filtering, and streaming where appropriate to manage token usage and performance.',
    difficulty: 'medium'
  },

  // Question 375 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should tools indicate required vs optional parameters in their schema?',
    option_a: 'Use the "required" array in JSON Schema to list required parameter names',
    option_b: 'Use naming conventions only',
    option_c: 'All parameters should be required',
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
    question: 'What is the benefit of using meaningful namespacing in tool names?',
    option_a: 'Shorter names',
    option_b: 'Easier to type',
    option_c: 'Immediately identifies the service/system and prevents naming conflicts',
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
    question: 'How should conditional parameters be handled in tool schemas?',
    option_a: 'Always make them required',
    option_b: 'Document dependencies and conditions clearly in descriptions',
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
    question: 'What should be included in tool responses to aid debugging?',
    option_a: 'Nothing extra',
    option_b: 'Full stack traces always',
    option_c: 'Internal variable states',
    option_d: 'Request IDs, timestamps, and relevant error context when appropriate',
    correct_answer: 'D',
    explanation: 'Tool responses should include request IDs, timestamps, and relevant error context when appropriate to aid debugging without exposing sensitive internals.',
    difficulty: 'medium'
  },

  // Question 379 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should units be specified for numeric parameters (e.g., time, size)?',
    option_a: 'Clearly in the parameter name and/or description (e.g., "timeout_seconds")',
    option_b: 'Assume default units',
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
    question: 'What is the recommended approach for handling tool configuration?',
    option_a: 'Hardcode all configuration',
    option_b: 'Pass configuration in every call',
    option_c: 'Use server-side configuration with environment variables and initialization',
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
    question: 'How should tools handle operations that may take a long time?',
    option_a: 'Block until complete',
    option_b: 'Return immediately with a job ID and provide status check mechanism',
    option_c: 'Increase timeout infinitely',
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
    question: 'What is important about consistency in tool design across an MCP server?',
    option_a: 'Not important',
    option_b: 'Only naming matters',
    option_c: 'Only schemas matter',
    option_d: 'Consistent naming, response formats, error handling, and parameter patterns',
    correct_answer: 'D',
    explanation: 'Consistency across naming, response formats, error handling, and parameter patterns makes the entire tool set easier to understand and use.',
    difficulty: 'medium'
  },

  // Question 383 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should tools communicate success vs failure?',
    option_a: 'Use consistent status indicators and structured error objects in responses',
    option_b: 'Use HTTP status codes only',
    option_c: 'Include "success" string in response',
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
    question: 'What makes a good example in input_examples?',
    option_a: 'Minimal example',
    option_b: 'Edge cases only',
    option_c: 'Realistic, common use case showing typical parameter combinations',
    option_d: 'Random values',
    correct_answer: 'C',
    explanation: 'Good input_examples show realistic, common use cases with typical parameter combinations that Claude is likely to encounter.',
    difficulty: 'easy'
  },

  // Question 385 - Answer: B
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should mutually exclusive parameters be handled?',
    option_a: 'Allow both simultaneously',
    option_b: 'Document mutual exclusivity clearly and validate server-side',
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
    question: 'What is the purpose of using pattern validation in string schemas?',
    option_a: 'Improve performance',
    option_b: 'Reduce size',
    option_c: 'Enable caching',
    option_d: 'Enforce format requirements like IDs, codes, or specific string structures',
    correct_answer: 'D',
    explanation: 'Pattern validation enforces format requirements for strings like IDs, codes, or specific structures, improving input quality.',
    difficulty: 'easy'
  },

  // Question 387 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should tools handle internationalization (i18n) concerns?',
    option_a: 'Accept locale parameters and return localized content where appropriate',
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
    question: 'What is the recommended strategy for tool testing during development?',
    option_a: 'No testing needed',
    option_b: 'Manual testing only',
    option_c: 'Automated tests for schema validation, error cases, and typical usage patterns',
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
    question: 'How should tools indicate the scope of their permissions or access?',
    option_a: 'Hide permission details',
    option_b: 'Clearly document in tool description what data/systems the tool can access',
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
    question: 'What is the benefit of using stdio transport for local MCP servers?',
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
    question: 'How should sensitive data in responses be handled?',
    option_a: 'Redact or omit sensitive data, returning only what is necessary',
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
    question: 'What should be considered when designing tools for multi-tenant systems?',
    option_a: 'Ignore tenancy',
    option_b: 'Use global configuration',
    option_c: 'Ensure proper tenant isolation and context passing in authentication',
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
    question: 'How should breaking changes be introduced to MCP tools?',
    option_a: 'Immediate replacement',
    option_b: 'Version the tool, maintain old version during transition, provide migration path',
    option_c: 'Silently update',
    option_d: 'No breaking changes allowed',
    correct_answer: 'B',
    explanation: 'Breaking changes should involve versioning the tool, maintaining the old version during transition, and providing a clear migration path.',
    difficulty: 'medium'
  },

  // Question 394 - Answer: D
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'What is the role of tool consolidation in managing large tool sets?',
    option_a: 'Increases complexity',
    option_b: 'Makes tools harder to use',
    option_c: 'No real benefit',
    option_d: 'Reduces cognitive load and improves tool discovery while maintaining functionality',
    correct_answer: 'D',
    explanation: 'Tool consolidation reduces cognitive load and improves tool discovery by reducing the number of tools while maintaining full functionality.',
    difficulty: 'medium'
  },

  // Question 395 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should retry logic be handled for transient failures?',
    option_a: 'Implement server-side retry with exponential backoff for transient errors',
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
    question: 'What should be logged for tool invocations in production?',
    option_a: 'Nothing, logging is unnecessary',
    option_b: 'Full parameter values including secrets',
    option_c: 'Request metadata, timing, errors, but redact sensitive parameters',
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
    question: 'How should tools handle backwards compatibility when adding new optional parameters?',
    option_a: 'Require all clients to update',
    option_b: 'New optional parameters should have sensible defaults and not affect existing behavior',
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
    question: 'What is a key consideration for tool performance monitoring?',
    option_a: 'Not necessary',
    option_b: 'Only monitor errors',
    option_c: 'Only monitor successes',
    option_d: 'Track latency, error rates, usage patterns, and resource consumption',
    correct_answer: 'D',
    explanation: 'Comprehensive tool performance monitoring should track latency, error rates, usage patterns, and resource consumption for optimization.',
    difficulty: 'medium'
  },

  // Question 399 - Answer: A
  {
    week: 4,
    domain: 'MCP & Tool Integrations',
    topic: 'Tool Design & MCP',
    question: 'How should tools handle concurrent access and race conditions?',
    option_a: 'Implement proper locking, optimistic concurrency, or document concurrency limitations',
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
    question: 'What is the ultimate goal of excellent tool design in MCP?',
    option_a: 'Minimize server code',
    option_b: 'Maximum feature count',
    option_c: 'Enable Claude to reliably select and use tools to accomplish complex tasks effectively',
    option_d: 'Reduce API calls',
    correct_answer: 'C',
    explanation: 'The ultimate goal of excellent tool design is enabling Claude to reliably select and use tools to accomplish complex tasks effectively through clear descriptions, well-designed schemas, and thoughtful responses.',
    difficulty: 'medium'
  }
];
