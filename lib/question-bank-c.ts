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

// Comprehensive question bank for Claude Certified Architect certification
// Topic 1: Agentic Loops & Core API (100 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)
// Generated using shuffle strategy: ['A']*25 + ['B']*25 + ['C']*25 + ['D']*25, then shuffled

export const questionBank: Question[] = [
  // Question 1 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the primary purpose of the agentic loop pattern?',
    option_a: 'To reduce API costs',
    option_b: 'To speed up responses',
    option_c: 'To enable iterative tool use and reasoning until task completion',
    option_d: 'To simplify code structure',
    correct_answer: 'C',
    explanation: 'The agentic loop pattern enables Claude to iteratively use tools and refine its reasoning until the task is complete, dramatically improving success rates on complex tasks.',
    difficulty: 'easy'
  },

  // Question 2 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the correct loop condition for continuing an agentic workflow?',
    option_a: 'while stop_reason == "end_turn"',
    option_b: 'while stop_reason == "tool_use"',
    option_c: 'while stop_reason == "max_tokens"',
    option_d: 'while stop_reason == "refusal"',
    correct_answer: 'B',
    explanation: 'The loop should continue while stop_reason equals "tool_use", indicating Claude needs to execute tools before proceeding.',
    difficulty: 'easy'
  },

  // Question 3 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Which stop_reason indicates Claude has completed its response naturally?',
    option_a: 'end_turn',
    option_b: 'tool_use',
    option_c: 'pause_turn',
    option_d: 'max_tokens',
    correct_answer: 'A',
    explanation: 'The end_turn stop_reason signals that Claude has finished its response without needing additional tool execution.',
    difficulty: 'easy'
  },

  // Question 4 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What does the stop_reason "max_tokens" indicate?',
    option_a: 'Tool execution completed',
    option_b: 'User interrupted',
    option_c: 'Task completed successfully',
    option_d: 'Response was truncated due to reaching the token limit',
    correct_answer: 'D',
    explanation: 'The max_tokens stop_reason indicates the response was cut off because it reached the specified maximum token limit.',
    difficulty: 'easy'
  },

  // Question 5 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Which field in tool_result blocks links them to the corresponding tool_use?',
    option_a: 'result_id',
    option_b: 'execution_id',
    option_c: 'tool_use_id',
    option_d: 'tool_name',
    correct_answer: 'C',
    explanation: 'The tool_use_id field must match the id from the corresponding tool_use block to correctly link tool execution results.',
    difficulty: 'easy'
  },

  // Question 6 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the consequence of not providing a tool_result for every tool_use?',
    option_a: 'Claude will skip that tool',
    option_b: 'The API will return a validation error',
    option_c: 'The loop will continue normally',
    option_d: 'Results are optional',
    correct_answer: 'B',
    explanation: 'Every tool_use block must have a corresponding tool_result with matching tool_use_id, or the API will return an error.',
    difficulty: 'easy'
  },

  // Question 7 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Which stop_reason requires explicit user approval before continuing?',
    option_a: 'pause_turn',
    option_b: 'end_turn',
    option_c: 'tool_use',
    option_d: 'stop_sequence',
    correct_answer: 'A',
    explanation: 'The pause_turn stop_reason indicates Claude wants user confirmation before proceeding, implementing a human-in-the-loop pattern.',
    difficulty: 'medium'
  },

  // Question 8 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What does the refusal stop_reason indicate?',
    option_a: 'Tool failed to execute',
    option_b: 'Token limit reached',
    option_c: 'Loop should continue',
    option_d: 'Claude declined to respond due to safety policies',
    correct_answer: 'D',
    explanation: 'The refusal stop_reason signals that Claude declined to answer due to content policy or safety concerns.',
    difficulty: 'easy'
  },

  // Question 9 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What safety limits should be set in production agentic loops?',
    option_a: 'No limits needed',
    option_b: 'Only max_tokens',
    option_c: 'Both max_turns and max_budget_usd for comprehensive protection',
    option_d: 'Only max_turns',
    correct_answer: 'C',
    explanation: 'Combining max_budget_usd and max_turns provides comprehensive cost control and prevents runaway loops.',
    difficulty: 'medium'
  },

  // Question 10 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can Claude return multiple tool_use blocks in a single response?',
    option_a: 'No, only one tool per response',
    option_b: 'Yes, multiple tool_use blocks can appear in one response',
    option_c: 'Only with special permissions',
    option_d: 'Only server-side tools',
    correct_answer: 'B',
    explanation: 'Claude can return multiple tool_use content blocks in a single response, allowing parallel tool execution.',
    difficulty: 'medium'
  },

  // Question 11 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the required message role alternation pattern in the Messages API?',
    option_a: 'user, assistant, user, assistant',
    option_b: 'assistant, user, assistant, user',
    option_c: 'user, user, assistant, assistant',
    option_d: 'Any order is acceptable',
    correct_answer: 'A',
    explanation: 'The Messages API requires strict role alternation starting with user: user, assistant, user, assistant.',
    difficulty: 'easy'
  },

  // Question 12 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should tool results be appended to the conversation?',
    option_a: 'Replace the previous assistant message',
    option_b: 'Merge with tool_use message',
    option_c: 'Add to system prompt',
    option_d: 'Add as a new user message with tool_result blocks',
    correct_answer: 'D',
    explanation: 'Tool results must be appended as a new user message containing tool_result content blocks.',
    difficulty: 'easy'
  },

  // Question 13 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What differentiates client-side tools from server-side tools?',
    option_a: 'Server-side tools are faster',
    option_b: 'Client-side tools cost less',
    option_c: 'Client-side tools are user-defined and executed, server-side run on Anthropic infrastructure',
    option_d: 'No difference',
    correct_answer: 'C',
    explanation: 'Client-side tools are defined and executed by the user, while server-side tools are managed by Anthropic infrastructure.',
    difficulty: 'medium'
  },

  // Question 14 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'According to LAB-Bench results, how much do agentic loops with tool use improve task success?',
    option_a: '10-20% improvement',
    option_b: '50%+ improvement in complex task success rates',
    option_c: '5% improvement',
    option_d: 'No measurable improvement',
    correct_answer: 'B',
    explanation: 'LAB-Bench benchmarks show that agentic loops with tool use provide 50%+ improvement in task success rates.',
    difficulty: 'medium'
  },

  // Question 15 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can Claude include both reasoning text and tool_use blocks in the same response?',
    option_a: 'Yes, text and tool_use blocks can be mixed',
    option_b: 'No, only tool_use blocks',
    option_c: 'No, only text blocks',
    option_d: 'Only with extended_thinking',
    correct_answer: 'A',
    explanation: 'Claude can include both text content blocks (for reasoning) and tool_use blocks in the same response.',
    difficulty: 'medium'
  },

  // Question 16 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the primary risk of not setting max_turns?',
    option_a: 'Slower performance',
    option_b: 'Reduced accuracy',
    option_c: 'Better results',
    option_d: 'Infinite loops and excessive costs',
    correct_answer: 'D',
    explanation: 'Without max_turns limits, agentic loops can run indefinitely, causing excessive API costs and potential infinite loops.',
    difficulty: 'easy'
  },

  // Question 17 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How does context size grow in an agentic loop?',
    option_a: 'It stays constant',
    option_b: 'Only tool results add context',
    option_c: 'It accumulates messages, tool_use blocks, and tool_result blocks per turn',
    option_d: 'Context shrinks automatically',
    correct_answer: 'C',
    explanation: 'Each loop iteration adds assistant messages with tool_use blocks and user messages with tool_result blocks, accumulating context.',
    difficulty: 'medium'
  },

  // Question 18 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended approach for managing context growth?',
    option_a: 'Ignore it - unlimited context',
    option_b: 'Summarize earlier turns and prune conversation history',
    option_c: 'Restart every turn',
    option_d: 'Delete random messages',
    correct_answer: 'B',
    explanation: 'Summarizing earlier context and pruning conversation history prevents context window overflow while maintaining necessary information.',
    difficulty: 'medium'
  },

  // Question 19 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you handle tool execution failures?',
    option_a: 'Return tool_result with is_error: true and error details',
    option_b: 'Skip returning result',
    option_c: 'Restart conversation',
    option_d: 'Retry indefinitely',
    correct_answer: 'A',
    explanation: 'Tool execution failures should be reported via tool_result blocks with is_error: true and descriptive error information.',
    difficulty: 'easy'
  },

  // Question 20 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What happens when stop_reason is "stop_sequence"?',
    option_a: 'Tool use is required',
    option_b: 'Token limit reached',
    option_c: 'Loop should continue',
    option_d: 'Claude encountered a custom stop sequence in its output',
    correct_answer: 'D',
    explanation: 'The stop_sequence stop_reason indicates Claude generated one of the custom stop sequences defined in the API request.',
    difficulty: 'medium'
  },

  // Question 21 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Which effort levels are supported in extended thinking for agentic loops?',
    option_a: 'basic, advanced, expert',
    option_b: 'minimal, standard, maximum',
    option_c: 'low, medium, high',
    option_d: 'Effort levels do not apply',
    correct_answer: 'C',
    explanation: 'Extended thinking supports effort levels (low, medium, high) that influence reasoning depth in agentic patterns.',
    difficulty: 'hard'
  },

  // Question 22 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should multiple tool_use blocks be handled?',
    option_a: 'Only execute the first one',
    option_b: 'Return one tool_result per tool_use with matching tool_use_id',
    option_c: 'Merge into one tool_result',
    option_d: 'Execute sequentially only',
    correct_answer: 'B',
    explanation: 'Each tool_use requires its own tool_result with the correct tool_use_id, allowing parallel or sequential execution.',
    difficulty: 'medium'
  },

  // Question 23 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended format for tool result content?',
    option_a: 'Structured, relevant data that Claude can reason over',
    option_b: 'Binary data only',
    option_c: 'Raw HTML dumps',
    option_d: 'Compressed archives',
    correct_answer: 'A',
    explanation: 'Tool results should contain structured, relevant data formatted for Claude to effectively reason and make decisions.',
    difficulty: 'medium'
  },

  // Question 24 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'When does Claude typically use multiple tools in one response?',
    option_a: 'Never allowed',
    option_b: 'Only for server-side tools',
    option_c: 'Only with special API flag',
    option_d: 'When gathering parallel information or executing independent operations',
    correct_answer: 'D',
    explanation: 'Claude uses multiple tools when operations can be performed in parallel or when gathering independent pieces of information.',
    difficulty: 'medium'
  },

  // Question 25 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the primary advantage of agentic loops over single-turn interactions?',
    option_a: 'Lower cost',
    option_b: 'Simpler code',
    option_c: 'Ability to use tools iteratively and refine reasoning for complex tasks',
    option_d: 'Faster response time',
    correct_answer: 'C',
    explanation: 'Agentic loops enable iterative tool use and reasoning refinement, dramatically improving task completion for complex workflows.',
    difficulty: 'easy'
  },

  // Question 26 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should conversation history be structured?',
    option_a: 'As a flat list without roles',
    option_b: 'As alternating user/assistant message objects with role and content',
    option_c: 'As JSON in system prompt',
    option_d: 'As binary data',
    correct_answer: 'B',
    explanation: 'Conversation history must be an array of message objects with alternating user/assistant roles and content arrays.',
    difficulty: 'easy'
  },

  // Question 27 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What validation should you perform before sending tool_result blocks?',
    option_a: 'Verify tool_use_id matches and all tool_use blocks have results',
    option_b: 'No validation needed',
    option_c: 'Only check data size',
    option_d: 'Only check JSON validity',
    correct_answer: 'A',
    explanation: 'Validate that every tool_use_id has a corresponding tool_result and all IDs match correctly to prevent API errors.',
    difficulty: 'medium'
  },

  // Question 28 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What metrics should you monitor in production agentic systems?',
    option_a: 'Only token count',
    option_b: 'Only error rate',
    option_c: 'Only API response time',
    option_d: 'Loop iterations, token usage, cost, latency, and success rate',
    correct_answer: 'D',
    explanation: 'Comprehensive monitoring of iterations, tokens, costs, latency, and success rates ensures healthy production systems.',
    difficulty: 'medium'
  },

  // Question 29 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What happens if max_budget_usd is exceeded?',
    option_a: 'API charges extra',
    option_b: 'Warning only',
    option_c: 'Loop terminates with budget exceeded error',
    option_d: 'Switches to cheaper model',
    correct_answer: 'C',
    explanation: 'When max_budget_usd is exceeded, the API terminates the request to prevent uncontrolled spending.',
    difficulty: 'medium'
  },

  // Question 30 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Which content block type is used to request tool execution?',
    option_a: 'tool_call',
    option_b: 'tool_use',
    option_c: 'tool_request',
    option_d: 'function_call',
    correct_answer: 'B',
    explanation: 'Assistant messages use tool_use content blocks to request tool execution with specified parameters.',
    difficulty: 'easy'
  },

  // Question 31 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is a common mistake when implementing agentic loops?',
    option_a: 'Not setting iteration limits and cost controls',
    option_b: 'Using too many tools',
    option_c: 'Including system prompts',
    option_d: 'Using streaming responses',
    correct_answer: 'A',
    explanation: 'Failing to set max_turns and max_budget_usd limits is a common mistake that leads to runaway costs.',
    difficulty: 'easy'
  },

  // Question 32 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you handle temporarily unavailable tools?',
    option_a: 'Ignore the request',
    option_b: 'Wait indefinitely',
    option_c: 'Skip to next tool',
    option_d: 'Return tool_result with is_error: true explaining unavailability',
    correct_answer: 'D',
    explanation: 'Report unavailability via tool_result with is_error: true, allowing Claude to adapt or choose alternatives.',
    difficulty: 'medium'
  },

  // Question 33 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can conversation history include messages from previous sessions?',
    option_a: 'No, only current session',
    option_b: 'Only with special flag',
    option_c: 'Yes, you can include historical context across sessions',
    option_d: 'Only recent 5 messages',
    correct_answer: 'C',
    explanation: 'You can include messages from previous sessions in conversation history to maintain context across interactions.',
    difficulty: 'easy'
  },

  // Question 34 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What does stop_reason "end_turn" signal for loop control?',
    option_a: 'Continue loop',
    option_b: 'Exit loop - task complete or no tools needed',
    option_c: 'Retry request',
    option_d: 'Wait for user',
    correct_answer: 'B',
    explanation: 'end_turn indicates Claude has finished its response, signaling the loop should exit.',
    difficulty: 'easy'
  },

  // Question 35 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What should the system prompt include for agentic systems?',
    option_a: 'Task instructions, tool usage guidelines, and behavioral constraints',
    option_b: 'Nothing - deprecated',
    option_c: 'Tool definitions only',
    option_d: 'Only conversation history',
    correct_answer: 'A',
    explanation: 'Effective system prompts include clear task instructions, tool usage guidelines, and behavioral constraints.',
    difficulty: 'medium'
  },

  // Question 36 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How do server-side tools differ in execution?',
    option_a: 'No difference',
    option_b: 'Slower execution',
    option_c: 'Higher cost',
    option_d: 'Execute within Anthropic infrastructure, not user code',
    correct_answer: 'D',
    explanation: 'Server-side tools execute within Anthropic\'s infrastructure automatically, while client-side tools require user execution.',
    difficulty: 'medium'
  },

  // Question 37 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What should error tool_result blocks include?',
    option_a: 'Just is_error: true',
    option_b: 'Binary error codes',
    option_c: 'is_error: true plus human-readable error description',
    option_d: 'Stack traces only',
    correct_answer: 'C',
    explanation: 'Error tool_results should include is_error: true and clear, descriptive error messages.',
    difficulty: 'easy'
  },

  // Question 38 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'When should you consider using extended thinking in agentic workflows?',
    option_a: 'Never - incompatible',
    option_b: 'For complex reasoning tasks requiring deeper analysis',
    option_c: 'Always enabled',
    option_d: 'Only for text generation',
    correct_answer: 'B',
    explanation: 'Extended thinking is beneficial for complex reasoning tasks where deeper analysis improves decision-making.',
    difficulty: 'hard'
  },

  // Question 39 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the relationship between tool_use and tool_result blocks?',
    option_a: 'One-to-one mapping via tool_use_id',
    option_b: 'No relationship required',
    option_c: 'Many-to-one only',
    option_d: 'Implicitly linked by order',
    correct_answer: 'A',
    explanation: 'Each tool_use block must have exactly one corresponding tool_result block, linked via tool_use_id.',
    difficulty: 'easy'
  },

  // Question 40 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Why validate tool schemas before production?',
    option_a: 'Not important',
    option_b: 'Only for legal compliance',
    option_c: 'Only for performance',
    option_d: 'To ensure Claude understands tool capabilities and uses them correctly',
    correct_answer: 'D',
    explanation: 'Well-defined tool schemas ensure Claude correctly understands and uses tools, preventing errors.',
    difficulty: 'medium'
  },

  // Question 41 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What happens with partial tool_result blocks (missing some tool_use_ids)?',
    option_a: 'Claude ignores missing',
    option_b: 'API assumes success',
    option_c: 'API returns validation error requiring all results',
    option_d: 'Only on second retry',
    correct_answer: 'C',
    explanation: 'The API validates that all tool_use_ids have corresponding tool_result blocks, returning an error if any are missing.',
    difficulty: 'medium'
  },

  // Question 42 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How does context affect subsequent tool choices?',
    option_a: 'No effect - independent',
    option_b: 'Previous tool results and conversation inform next tool selections',
    option_c: 'Only last turn matters',
    option_d: 'Random selection',
    correct_answer: 'B',
    explanation: 'Claude considers full conversation history, including previous tool results, when deciding which tools to use next.',
    difficulty: 'medium'
  },

  // Question 43 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What strategy helps manage token costs in long loops?',
    option_a: 'Periodically summarize and compress earlier conversation turns',
    option_b: 'Never summarize',
    option_c: 'Delete all previous messages',
    option_d: 'Random sampling',
    correct_answer: 'A',
    explanation: 'Periodic summarization and compression of earlier turns reduces token usage while preserving essential information.',
    difficulty: 'medium'
  },

  // Question 44 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can you modify tool definitions between loop iterations?',
    option_a: 'No, locked at first call',
    option_b: 'Only by restarting',
    option_c: 'Only with admin permissions',
    option_d: 'Yes, dynamically add/remove tools based on context',
    correct_answer: 'D',
    explanation: 'Tool definitions can be modified between API calls, allowing dynamic tool availability based on context.',
    difficulty: 'medium'
  },

  // Question 45 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What indicates your agentic loop needs optimization?',
    option_a: 'All tasks complete',
    option_b: 'Fast responses',
    option_c: 'Consistently hitting max_turns limit without task completion',
    option_d: 'Low token usage',
    correct_answer: 'C',
    explanation: 'Regularly hitting max_turns without completing tasks indicates the loop needs better tool design or prompts.',
    difficulty: 'medium'
  },

  // Question 46 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you handle requests for undefined tools?',
    option_a: 'Silently ignore',
    option_b: 'Return error tool_result explaining tool does not exist',
    option_c: 'Auto-create the tool',
    option_d: 'Crash application',
    correct_answer: 'B',
    explanation: 'Return a tool_result with is_error: true explaining the tool doesn\'t exist, allowing Claude to adapt.',
    difficulty: 'easy'
  },

  // Question 47 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the purpose of reasoning text alongside tool_use blocks?',
    option_a: 'Provides transparency into Claude\'s decision-making process',
    option_b: 'Required by API',
    option_c: 'Wastes tokens',
    option_d: 'Only for debugging',
    correct_answer: 'A',
    explanation: 'Reasoning text alongside tool_use blocks provides visibility into Claude\'s thought process.',
    difficulty: 'medium'
  },

  // Question 48 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'In what order should multiple tool_result blocks be returned?',
    option_a: 'Alphabetical by tool name',
    option_b: 'Random is fine',
    option_c: 'Reverse order from tool_use',
    option_d: 'Any order - matching by tool_use_id, not position',
    correct_answer: 'D',
    explanation: 'Tool results can be returned in any order since they\'re matched by tool_use_id, not position.',
    difficulty: 'medium'
  },

  // Question 49 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the impact of detailed tool descriptions?',
    option_a: 'No impact',
    option_b: 'Adds confusion',
    option_c: 'Helps Claude select and use tools appropriately',
    option_d: 'Only affects errors',
    correct_answer: 'C',
    explanation: 'Clear, detailed tool descriptions help Claude understand when and how to use each tool.',
    difficulty: 'easy'
  },

  // Question 50 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'When should you terminate an agentic loop early?',
    option_a: 'Never - run to max_turns',
    option_b: 'When stop_reason is end_turn, max_tokens, or success conditions met',
    option_c: 'After first tool use',
    option_d: 'Randomly to save costs',
    correct_answer: 'B',
    explanation: 'Terminate loops when stop_reason indicates completion or when success conditions are met.',
    difficulty: 'medium'
  },

  // Question 51 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How can you improve tool use accuracy?',
    option_a: 'Provide clear examples in system prompts and well-defined schemas',
    option_b: 'Add more tools',
    option_c: 'Remove all descriptions',
    option_d: 'Use random selection',
    correct_answer: 'A',
    explanation: 'Clear examples in system prompts and well-defined tool schemas significantly improve tool selection accuracy.',
    difficulty: 'medium'
  },

  // Question 52 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended way to pass large data via tool results?',
    option_a: 'Base64 encode everything',
    option_b: 'Send raw binary',
    option_c: 'Always send complete data',
    option_d: 'Summarize or chunk large data, provide structured excerpts',
    correct_answer: 'D',
    explanation: 'For large data, summarize key points or provide structured excerpts to manage token usage.',
    difficulty: 'medium'
  },

  // Question 53 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can tool_use parameters include complex nested objects?',
    option_a: 'No, only primitives',
    option_b: 'Only arrays',
    option_c: 'Yes, tools can receive complex JSON parameters',
    option_d: 'Only strings',
    correct_answer: 'C',
    explanation: 'Tool parameters support complex nested JSON structures, allowing rich data to be passed.',
    difficulty: 'easy'
  },

  // Question 54 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What debugging information is most useful when loops fail?',
    option_a: 'Only final response',
    option_b: 'Full conversation history, stop_reasons, tool calls, and results',
    option_c: 'Only error messages',
    option_d: 'Only token counts',
    correct_answer: 'B',
    explanation: 'Complete conversation history with stop_reasons, all tool calls, and results provides comprehensive debugging.',
    difficulty: 'medium'
  },

  // Question 55 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How does prompt caching interact with agentic loops?',
    option_a: 'Can cache tool definitions and system prompts to reduce costs',
    option_b: 'Incompatible with tool use',
    option_c: 'Only caches results',
    option_d: 'Disabled in agentic mode',
    correct_answer: 'A',
    explanation: 'Prompt caching can cache tool definitions and static system content, reducing token costs across iterations.',
    difficulty: 'hard'
  },

  // Question 56 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is a common pattern for agentic loop initialization?',
    option_a: 'Start with tool_use',
    option_b: 'Start with empty conversation',
    option_c: 'Start with assistant message',
    option_d: 'Start with user message containing task description',
    correct_answer: 'D',
    explanation: 'Agentic loops typically start with a user message containing the task description.',
    difficulty: 'easy'
  },

  // Question 57 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Should tool execution be synchronous or asynchronous?',
    option_a: 'Always synchronous',
    option_b: 'Always asynchronous',
    option_c: 'Depends on use case - both patterns are valid',
    option_d: 'Tools cannot be async',
    correct_answer: 'C',
    explanation: 'Tool execution can be synchronous or asynchronous depending on requirements; independent tools can run in parallel.',
    difficulty: 'medium'
  },

  // Question 58 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you handle dependent tool calls?',
    option_a: 'Not possible',
    option_b: 'Execute sequentially, providing results back to Claude between calls',
    option_c: 'Merge into single tool',
    option_d: 'Claude never makes dependent calls',
    correct_answer: 'B',
    explanation: 'Dependent tool calls are handled across loop iterations: execute tools, return results, let Claude make next calls.',
    difficulty: 'medium'
  },

  // Question 59 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What role does system prompt play in tool selection?',
    option_a: 'System prompt can guide when and how to use specific tools',
    option_b: 'No role - random selection',
    option_c: 'Disables tool use',
    option_d: 'Only for errors',
    correct_answer: 'A',
    explanation: 'System prompts provide crucial guidance on tool usage patterns, helping Claude select appropriate tools.',
    difficulty: 'easy'
  },

  // Question 60 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can agentic loops be used with streaming responses?',
    option_a: 'No, streaming disables tools',
    option_b: 'Only for text',
    option_c: 'Only in development',
    option_d: 'Yes, streaming is supported for agentic patterns',
    correct_answer: 'D',
    explanation: 'Streaming works with agentic patterns, allowing real-time visibility into Claude\'s reasoning and tool calls.',
    difficulty: 'medium'
  },

  // Question 61 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the benefit of setting both max_turns and max_budget_usd?',
    option_a: 'Redundant',
    option_b: 'Required by API',
    option_c: 'Provides defense-in-depth cost and iteration control',
    option_d: 'No benefit',
    correct_answer: 'C',
    explanation: 'Setting both limits provides layered protection: max_turns prevents excessive iterations, max_budget_usd prevents cost overruns.',
    difficulty: 'medium'
  },

  // Question 62 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you communicate tool progress to users?',
    option_a: 'Keep it hidden',
    option_b: 'Show intermediate tool calls and reasoning for transparency',
    option_c: 'Only show final result',
    option_d: 'Only show errors',
    correct_answer: 'B',
    explanation: 'Showing intermediate tool calls and reasoning provides transparency and helps users understand progress.',
    difficulty: 'medium'
  },

  // Question 63 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended approach for tool timeout handling?',
    option_a: 'Implement timeouts and return tool_result with is_error on timeout',
    option_b: 'No timeouts needed',
    option_c: 'Wait indefinitely',
    option_d: 'Retry forever',
    correct_answer: 'A',
    explanation: 'Implement reasonable timeouts for tool execution and report timeouts via tool_result with is_error: true.',
    difficulty: 'medium'
  },

  // Question 64 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can you combine extended thinking with tool use?',
    option_a: 'No, mutually exclusive',
    option_b: 'Only in development',
    option_c: 'Only for specific models',
    option_d: 'Yes, extended thinking can enhance tool selection and reasoning',
    correct_answer: 'D',
    explanation: 'Extended thinking and tool use work together, with extended thinking improving reasoning for tool selection.',
    difficulty: 'hard'
  },

  // Question 65 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What happens when tool_result content is too large?',
    option_a: 'API automatically truncates',
    option_b: 'Results are compressed',
    option_c: 'Error - request fails',
    option_d: 'Older messages auto-removed',
    correct_answer: 'C',
    explanation: 'If tool_result content causes context overflow, the API request fails. Applications must manage result size.',
    difficulty: 'medium'
  },

  // Question 66 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How can you prevent Claude from overusing certain tools?',
    option_a: 'Remove the tools',
    option_b: 'Use system prompt guidance and tool descriptions to set expectations',
    option_c: 'Not possible',
    option_d: 'Randomly reject calls',
    correct_answer: 'B',
    explanation: 'System prompts and tool descriptions can guide usage frequency, helping Claude understand when tools should be used sparingly.',
    difficulty: 'medium'
  },

  // Question 67 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the relationship between agentic loops and workflow orchestration?',
    option_a: 'Agentic loops are foundation for autonomous workflow orchestration',
    option_b: 'Unrelated concepts',
    option_c: 'Workflow replaces agentic loops',
    option_d: 'They conflict',
    correct_answer: 'A',
    explanation: 'Agentic loops provide the foundational pattern for building more complex autonomous workflow orchestration systems.',
    difficulty: 'medium'
  },

  // Question 68 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Should you validate tool_use parameters before execution?',
    option_a: 'No - Claude always sends valid params',
    option_b: 'Only in development',
    option_c: 'Only for external APIs',
    option_d: 'Yes - implement parameter validation to catch unexpected inputs',
    correct_answer: 'D',
    explanation: 'Always validate tool_use parameters before execution to catch unexpected inputs and prevent errors.',
    difficulty: 'easy'
  },

  // Question 69 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the impact of tool result formatting on Claude\'s reasoning?',
    option_a: 'No impact',
    option_b: 'Only affects performance',
    option_c: 'Well-structured, clear results improve Claude\'s ability to reason',
    option_d: 'Only JSON supported',
    correct_answer: 'C',
    explanation: 'Clear, well-structured tool results directly improve Claude\'s ability to understand outcomes and make decisions.',
    difficulty: 'medium'
  },

  // Question 70 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How do you implement graceful degradation when tools fail repeatedly?',
    option_a: 'Keep retrying forever',
    option_b: 'Return descriptive errors and let Claude adapt or suggest alternatives',
    option_c: 'Crash application',
    option_d: 'Silently ignore',
    correct_answer: 'B',
    explanation: 'Return clear error messages via tool_result blocks, allowing Claude to understand failures and adapt.',
    difficulty: 'medium'
  },

  // Question 71 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended logging strategy for production systems?',
    option_a: 'Log all API calls, tool uses, results, and stop_reasons',
    option_b: 'No logging needed',
    option_c: 'Only log errors',
    option_d: 'Only log successes',
    correct_answer: 'A',
    explanation: 'Comprehensive logging of API calls, tool uses, results, and stop_reasons enables debugging and optimization.',
    difficulty: 'easy'
  },

  // Question 72 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can you dynamically adjust max_turns based on task complexity?',
    option_a: 'No, must be fixed',
    option_b: 'Only decrease',
    option_c: 'Not supported',
    option_d: 'Yes, adjust limits based on task requirements and context',
    correct_answer: 'D',
    explanation: 'You can dynamically adjust max_turns between iterations based on task complexity or progress.',
    difficulty: 'medium'
  },

  // Question 73 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the primary goal when designing tools?',
    option_a: 'Maximum number of tools',
    option_b: 'Minimum effort',
    option_c: 'Clear, focused tools that solve specific problems with good descriptions',
    option_d: 'Most complex parameters',
    correct_answer: 'C',
    explanation: 'Effective tools are clear, focused on specific problems, and have excellent descriptions that guide Claude\'s usage.',
    difficulty: 'easy'
  },

  // Question 74 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you handle multiple valid tool sequences?',
    option_a: 'Force a specific sequence',
    option_b: 'Let Claude choose based on context and reasoning',
    option_c: 'Use shortest sequence',
    option_d: 'Randomize',
    correct_answer: 'B',
    explanation: 'When multiple valid approaches exist, Claude\'s reasoning allows it to choose the most appropriate path.',
    difficulty: 'medium'
  },

  // Question 75 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended testing approach for agentic loops?',
    option_a: 'Test with various scenarios, edge cases, and failure modes',
    option_b: 'Only test in production',
    option_c: 'No testing needed',
    option_d: 'Only happy path',
    correct_answer: 'A',
    explanation: 'Comprehensive testing including scenarios, edge cases, and failure modes ensures robust systems.',
    difficulty: 'easy'
  },

  // Question 76 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can conversation history be selectively pruned?',
    option_a: 'No, keep all history',
    option_b: 'Only remove user messages',
    option_c: 'Only remove tool results',
    option_d: 'Yes, strategically remove less relevant messages to manage context',
    correct_answer: 'D',
    explanation: 'Strategic pruning of less relevant messages helps manage context size while preserving critical information.',
    difficulty: 'medium'
  },

  // Question 77 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the key difference between end_turn and pause_turn?',
    option_a: 'No difference',
    option_b: 'pause_turn indicates error',
    option_c: 'end_turn completes naturally, pause_turn requires user approval',
    option_d: 'end_turn requires tools',
    correct_answer: 'C',
    explanation: 'end_turn indicates natural completion, while pause_turn requests explicit user approval before continuing.',
    difficulty: 'medium'
  },

  // Question 78 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How do agentic loops improve over single-turn in LAB-Bench?',
    option_a: 'No improvement',
    option_b: '50%+ improvement in complex task success rates',
    option_c: '5% improvement',
    option_d: 'Worse performance',
    correct_answer: 'B',
    explanation: 'LAB-Bench demonstrates that agentic loops provide 50%+ improvement in success rates for complex tasks.',
    difficulty: 'medium'
  },

  // Question 79 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the most critical factor for agentic loop success?',
    option_a: 'Well-designed tools, clear prompts, and appropriate limits',
    option_b: 'Number of tools',
    option_c: 'Speed of execution',
    option_d: 'Model size',
    correct_answer: 'A',
    explanation: 'Success depends on well-designed tools, effective prompts, and appropriate safety limits working together.',
    difficulty: 'easy'
  },

  // Question 80 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the primary difference between max_turns and max_budget_usd?',
    option_a: 'They are equivalent',
    option_b: 'max_turns is deprecated',
    option_c: 'max_budget_usd only for premium',
    option_d: 'max_turns limits iterations, max_budget_usd limits cost',
    correct_answer: 'D',
    explanation: 'max_turns limits the number of loop iterations, while max_budget_usd limits total spending.',
    difficulty: 'easy'
  },

  // Question 81 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'When implementing retry logic for failed tools, what should you consider?',
    option_a: 'Infinite retries',
    option_b: 'Never retry',
    option_c: 'Set exponential backoff and maximum retry limits',
    option_d: 'Only retry server-side',
    correct_answer: 'C',
    explanation: 'Implement exponential backoff and maximum retry limits to handle transient failures without infinite loops.',
    difficulty: 'medium'
  },

  // Question 82 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How does the Messages API handle system prompts in agentic contexts?',
    option_a: 'Not supported',
    option_b: 'System prompts are separate from message history',
    option_c: 'Must be first message',
    option_d: 'Replace user messages',
    correct_answer: 'B',
    explanation: 'System prompts are provided as a separate parameter and persist across all turns.',
    difficulty: 'medium'
  },

  // Question 83 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended way to handle sensitive data in tool results?',
    option_a: 'Filter and redact sensitive information before returning to Claude',
    option_b: 'Always return full data',
    option_c: 'Encrypt all results',
    option_d: 'Never use tools with sensitive data',
    correct_answer: 'A',
    explanation: 'Filter and redact sensitive information from tool results before sending to Claude, maintaining security.',
    difficulty: 'medium'
  },

  // Question 84 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'In what scenarios should you use pause_turn?',
    option_a: 'Never - deprecated',
    option_b: 'On every turn',
    option_c: 'Only for debugging',
    option_d: 'For actions requiring explicit human approval or sensitive operations',
    correct_answer: 'D',
    explanation: 'pause_turn is designed for actions requiring explicit human approval, such as sensitive operations.',
    difficulty: 'medium'
  },

  // Question 85 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you structure tool schemas for optimal understanding?',
    option_a: 'Minimal information',
    option_b: 'Maximum verbosity',
    option_c: 'Clear descriptions, parameter types, and usage examples',
    option_d: 'Code comments sufficient',
    correct_answer: 'C',
    explanation: 'Tool schemas should have clear descriptions, well-defined parameter types, and optional usage examples.',
    difficulty: 'medium'
  },

  // Question 86 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What happens when an agentic loop encounters a rate limit?',
    option_a: 'Loop continues',
    option_b: 'API returns rate limit error and loop should handle gracefully',
    option_c: 'Automatic infinite retry',
    option_d: 'Loop pauses 24 hours',
    correct_answer: 'B',
    explanation: 'Rate limit errors are returned by the API and should be handled gracefully with retry logic and backoff.',
    difficulty: 'medium'
  },

  // Question 87 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can tool_result blocks contain both text and structured data?',
    option_a: 'Yes, content can be text or structured JSON',
    option_b: 'No, only one type',
    option_c: 'Only binary data',
    option_d: 'Only plain text',
    correct_answer: 'A',
    explanation: 'tool_result content can be text, JSON, or structured data that Claude can parse and reason about.',
    difficulty: 'easy'
  },

  // Question 88 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the role of tool_choice parameter?',
    option_a: 'Not used in agentic patterns',
    option_b: 'Only for debugging',
    option_c: 'Deprecated parameter',
    option_d: 'Forces Claude to use a specific tool or auto mode',
    correct_answer: 'D',
    explanation: 'tool_choice can force a specific tool, require any tool use, or allow auto selection based on Claude\'s reasoning.',
    difficulty: 'medium'
  },

  // Question 89 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you handle partially successful tool execution?',
    option_a: 'Return only successful parts',
    option_b: 'Return is_error: true always',
    option_c: 'Return comprehensive result with success/failure details',
    option_d: 'Retry all operations',
    correct_answer: 'C',
    explanation: 'Return comprehensive results detailing which operations succeeded and failed, allowing Claude to reason about next steps.',
    difficulty: 'medium'
  },

  // Question 90 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What best practice helps prevent tool use hallucinations?',
    option_a: 'Disable all tools',
    option_b: 'Provide accurate tool schemas and validate tool_use parameters',
    option_c: 'Use only generic names',
    option_d: 'Hide descriptions',
    correct_answer: 'B',
    explanation: 'Accurate tool schemas, clear descriptions, and parameter validation prevent Claude from hallucinating nonexistent tools.',
    difficulty: 'medium'
  },

  // Question 91 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How frequently should agentic loop metrics be logged in production?',
    option_a: 'Every iteration with key metrics like tokens, costs, and duration',
    option_b: 'Never - adds overhead',
    option_c: 'Only on errors',
    option_d: 'Only at start and end',
    correct_answer: 'A',
    explanation: 'Log metrics every iteration to enable detailed monitoring, debugging, and optimization.',
    difficulty: 'easy'
  },

  // Question 92 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What advantage do server-side tools provide?',
    option_a: 'Higher cost',
    option_b: 'More complexity',
    option_c: 'No advantages',
    option_d: 'Lower latency through Anthropic infrastructure execution',
    correct_answer: 'D',
    explanation: 'Server-side tools execute within Anthropic infrastructure, providing lower latency and seamless integration.',
    difficulty: 'medium'
  },

  // Question 93 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How should you document agentic workflows for team maintenance?',
    option_a: 'No documentation',
    option_b: 'Code comments only',
    option_c: 'Document loop logic, tool schemas, error handling, and monitoring',
    option_d: 'README only',
    correct_answer: 'C',
    explanation: 'Comprehensive documentation of loop logic, tool schemas, error handling, and monitoring enables effective maintenance.',
    difficulty: 'easy'
  },

  // Question 94 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the impact of tool execution latency on performance?',
    option_a: 'No impact',
    option_b: 'High latency compounds across iterations, significantly impacting runtime',
    option_c: 'Only affects cost',
    option_d: 'Automatically optimized',
    correct_answer: 'B',
    explanation: 'Tool latency compounds across loop iterations, making optimization critical for responsive systems.',
    difficulty: 'medium'
  },

  // Question 95 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Can you use different models for different iterations?',
    option_a: 'Yes, you can switch models between API calls',
    option_b: 'No, model must remain constant',
    option_c: 'Only with special permissions',
    option_d: 'Models auto-switch',
    correct_answer: 'A',
    explanation: 'You can use different models for different iterations, enabling cost optimization or capability adjustments.',
    difficulty: 'medium'
  },

  // Question 96 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What security consideration is most important for agentic tools?',
    option_a: 'None - inherently secure',
    option_b: 'Only log successes',
    option_c: 'Disable all external tools',
    option_d: 'Validate and sanitize all tool parameters to prevent injection attacks',
    correct_answer: 'D',
    explanation: 'Always validate and sanitize tool parameters to prevent injection attacks and security vulnerabilities.',
    difficulty: 'easy'
  },

  // Question 97 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'How does Claude determine when to stop using tools?',
    option_a: 'Random selection',
    option_b: 'Always uses all tools',
    option_c: 'Based on reasoning about task completion and available information',
    option_d: 'Time-based limits only',
    correct_answer: 'C',
    explanation: 'Claude uses reasoning to determine when sufficient information has been gathered, returning end_turn.',
    difficulty: 'medium'
  },

  // Question 98 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What is the recommended pattern for concurrent tool execution?',
    option_a: 'Never execute concurrently',
    option_b: 'Execute independent tools in parallel, dependent tools sequentially',
    option_c: 'Always sequential',
    option_d: 'Random execution order',
    correct_answer: 'B',
    explanation: 'Execute independent tools in parallel for efficiency, but handle dependent tools sequentially.',
    difficulty: 'medium'
  },

  // Question 99 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'What happens if you provide tool_result blocks without matching tool_use_id?',
    option_a: 'The API returns a validation error',
    option_b: 'Claude ignores them',
    option_c: 'Results are auto-matched',
    option_d: 'Claude guesses correct tool',
    correct_answer: 'A',
    explanation: 'The API requires exact tool_use_id matching between tool_use and tool_result blocks, returning an error otherwise.',
    difficulty: 'easy'
  },

  // Question 100 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'In SWE-bench evaluations, what improvement do agentic patterns show?',
    option_a: 'No improvement',
    option_b: 'Worse performance',
    option_c: '5% improvement',
    option_d: 'Significant improvement in complex software engineering tasks',
    correct_answer: 'D',
    explanation: 'SWE-bench results demonstrate significant improvements when using agentic patterns for complex software engineering tasks.',
    difficulty: 'medium'
  },

  // ==================================================================================
  // TOPIC 2: MULTI-AGENT ORCHESTRATION (Questions 101-200)
  // Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)
  // Generated using shuffle strategy: ['A']*25 + ['B']*25 + ['C']*25 + ['D']*25, then shuffled
  // ==================================================================================

  // Question 101 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the primary purpose of the orchestrator-worker pattern in multi-agent systems?',
    option_a: 'To reduce API costs by sharing context',
    option_b: 'To enable all agents to communicate directly',
    option_c: 'To have a coordinator decompose tasks and route to specialized agents',
    option_d: 'To run multiple models simultaneously',
    correct_answer: 'C',
    explanation: 'The orchestrator-worker pattern uses a coordinator agent to decompose tasks and route work to specialized agents, ensuring efficient task distribution.',
    difficulty: 'easy'
  },

  // Question 102 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'In Claude Code Agent Teams, what is the delegation model?',
    option_a: 'Lead agent plans strategy while specialist agents execute specific tasks',
    option_b: 'All agents work independently without coordination',
    option_c: 'Agents vote on decisions democratically',
    option_d: 'Single agent handles all work',
    correct_answer: 'A',
    explanation: 'The delegation model in Agent Teams has a lead agent that plans the overall strategy while specialist agents execute their domain-specific tasks.',
    difficulty: 'medium'
  },

  // Question 103 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the key advantage of parallelization in multi-agent orchestration?',
    option_a: 'Lower cost per agent',
    option_b: 'Multiple independent subtasks executed concurrently for faster completion',
    option_c: 'Simpler code structure',
    option_d: 'Reduced token usage',
    correct_answer: 'B',
    explanation: 'Parallelization allows independent subtasks to be executed concurrently by different agents, significantly reducing overall completion time.',
    difficulty: 'easy'
  },

  // Question 104 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How does context isolation work in multi-agent sessions?',
    option_a: 'All agents share the same conversation history',
    option_b: 'Agents can read each other\'s memory',
    option_c: 'Context is merged at regular intervals',
    option_d: 'Each agent maintains its own session thread with isolated context',
    correct_answer: 'D',
    explanation: 'In multi-agent systems, each agent has its own session thread with isolated context, preventing cross-contamination of conversations.',
    difficulty: 'medium'
  },

  // Question 105 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the specialization pattern in multi-agent systems?',
    option_a: 'All agents learn from each other',
    option_b: 'Agents compete for tasks',
    option_c: 'Agents focus on specific domains with expert knowledge',
    option_d: 'Generic agents handle any task',
    correct_answer: 'C',
    explanation: 'The specialization pattern assigns domain-focused agents with expert knowledge to handle specific types of tasks.',
    difficulty: 'easy'
  },

  // Question 106 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the escalation pattern used for in multi-agent orchestration?',
    option_a: 'Consulting more capable agents when tasks exceed current agent abilities',
    option_b: 'Increasing API rate limits',
    option_c: 'Escalating user privileges',
    option_d: 'Upgrading infrastructure',
    correct_answer: 'A',
    explanation: 'The escalation pattern involves consulting more capable agents when a task exceeds the abilities of the current agent.',
    difficulty: 'medium'
  },

  // Question 107 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'In a sequential orchestration pattern, what determines the order of agent execution?',
    option_a: 'Random selection',
    option_b: 'Chained linear order based on task dependencies',
    option_c: 'Alphabetical by agent name',
    option_d: 'Agent availability',
    correct_answer: 'B',
    explanation: 'Sequential orchestration follows a chained linear order where each agent\'s output feeds into the next agent\'s input.',
    difficulty: 'easy'
  },

  // Question 108 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is a task board in Claude Code Agent Teams?',
    option_a: 'A physical whiteboard for planning',
    option_b: 'A visualization tool only',
    option_c: 'An agent performance dashboard',
    option_d: 'A shared task tracking system with dependencies and assignments',
    correct_answer: 'D',
    explanation: 'A task board in Agent Teams tracks tasks, their dependencies, assignments to agents, and completion status.',
    difficulty: 'medium'
  },

  // Question 109 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How do agents communicate in Claude Code Agent Teams?',
    option_a: 'Direct API calls between agents',
    option_b: 'Shared memory access',
    option_c: 'Inter-agent messaging using @mentions and message passing',
    option_d: 'Automatic telepathy',
    correct_answer: 'C',
    explanation: 'Agent Teams use explicit inter-agent messaging with @mentions and structured message passing for communication.',
    difficulty: 'medium'
  },

  // Question 110 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is shared in the Agent Teams sandbox?',
    option_a: 'Filesystem and vault access for collaboration',
    option_b: 'Conversation history only',
    option_c: 'API keys exclusively',
    option_d: 'Nothing - complete isolation',
    correct_answer: 'A',
    explanation: 'Agent Teams share filesystem and vault access, enabling agents to collaborate on files while maintaining conversation isolation.',
    difficulty: 'easy'
  },

  // Question 111 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Why should the coordinator agent avoid doing specialist work?',
    option_a: 'Coordinators have limited capabilities',
    option_b: 'It violates API terms',
    option_c: 'Cost optimization only',
    option_d: 'Maintains separation of concerns and prevents role confusion',
    correct_answer: 'D',
    explanation: 'The coordinator should focus on routing and synthesis, leaving specialist work to dedicated agents to maintain clear separation of concerns.',
    difficulty: 'medium'
  },

  // Question 112 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of fresh context per agent in parallel execution?',
    option_a: 'Lower memory usage',
    option_b: 'Prevents context pollution and maintains agent focus',
    option_c: 'Faster API responses',
    option_d: 'Automatic error recovery',
    correct_answer: 'B',
    explanation: 'Fresh context per agent prevents context pollution from other agents\' work and maintains each agent\'s focus on its specific task.',
    difficulty: 'medium'
  },

  // Question 113 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'In multi-agent systems, what is a handoff?',
    option_a: 'Transferring API credentials',
    option_b: 'Switching models mid-task',
    option_c: 'Explicit transfer of work from one agent to another with context',
    option_d: 'Automatic failover',
    correct_answer: 'C',
    explanation: 'A handoff is the explicit transfer of work and necessary context from one agent to another in the workflow.',
    difficulty: 'easy'
  },

  // Question 114 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the primary risk of worker-to-worker communication?',
    option_a: 'Creates coordination complexity and potential deadlocks',
    option_b: 'Increases API costs',
    option_c: 'Violates security policies',
    option_d: 'Reduces accuracy',
    correct_answer: 'A',
    explanation: 'Direct worker-to-worker communication creates coordination complexity, potential deadlocks, and makes the system harder to debug.',
    difficulty: 'medium'
  },

  // Question 115 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What does dynamic workflow orchestration enable (2025)?',
    option_a: 'Static predefined workflows only',
    option_b: 'On-the-fly orchestration script generation and adaptation',
    option_c: 'Manual workflow definition',
    option_d: 'Single-agent execution',
    correct_answer: 'B',
    explanation: 'Dynamic workflow orchestration (2025) enables systems to generate and adapt orchestration scripts on-the-fly based on task requirements.',
    difficulty: 'hard'
  },

  // Question 116 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should task dependencies be managed in multi-agent systems?',
    option_a: 'Ignore dependencies - execute all parallel',
    option_b: 'Manual coordination only',
    option_c: 'Random execution order',
    option_d: 'Explicit dependency tracking with prerequisite enforcement',
    correct_answer: 'D',
    explanation: 'Task dependencies should be explicitly tracked with prerequisite enforcement to ensure correct execution order.',
    difficulty: 'medium'
  },

  // Question 117 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is result validation in dynamic workflows?',
    option_a: 'Optional quality check',
    option_b: 'Manual inspection',
    option_c: 'Automated verification that subtask outputs meet requirements',
    option_d: 'User acceptance testing',
    correct_answer: 'C',
    explanation: 'Result validation in dynamic workflows automatically verifies that each subtask output meets the required specifications.',
    difficulty: 'medium'
  },

  // Question 118 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the coordinator\'s role in result synthesis?',
    option_a: 'Combine and reconcile outputs from multiple specialist agents',
    option_b: 'Execute all tasks',
    option_c: 'Store results only',
    option_d: 'Forward results unchanged',
    correct_answer: 'A',
    explanation: 'The coordinator synthesizes results by combining and reconciling outputs from multiple specialist agents into a coherent response.',
    difficulty: 'easy'
  },

  // Question 119 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Why avoid cross-domain writes in specialized agents?',
    option_a: 'Performance reasons',
    option_b: 'Prevents scope creep and maintains agent expertise boundaries',
    option_c: 'API limitations',
    option_d: 'Storage constraints',
    correct_answer: 'B',
    explanation: 'Avoiding cross-domain writes prevents scope creep and maintains clear expertise boundaries between specialized agents.',
    difficulty: 'medium'
  },

  // Question 120 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is large fleet coordination in 2025 orchestration?',
    option_a: 'Managing physical servers',
    option_b: 'Single agent scaling',
    option_c: 'Small team management',
    option_d: 'Coordinating many agents simultaneously for complex workflows',
    correct_answer: 'D',
    explanation: 'Large fleet coordination involves managing many agents simultaneously to handle complex, large-scale workflows efficiently.',
    difficulty: 'hard'
  },

  // Question 121 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should routing decisions be made in coordinator patterns?',
    option_a: 'Random agent selection',
    option_b: 'Round-robin distribution',
    option_c: 'Based on task requirements and agent specializations',
    option_d: 'First available agent',
    correct_answer: 'C',
    explanation: 'Routing decisions should match task requirements with appropriate agent specializations for optimal results.',
    difficulty: 'easy'
  },

  // Question 122 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of context-isolated event streams?',
    option_a: 'Separate event tracking per agent session without interference',
    option_b: 'Reduce storage costs',
    option_c: 'Speed up processing',
    option_d: 'Merge all events',
    correct_answer: 'A',
    explanation: 'Context-isolated event streams track events separately for each agent session, preventing interference and confusion.',
    difficulty: 'medium'
  },

  // Question 123 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'When should you use the fan-out pattern?',
    option_a: 'For sequential dependent tasks',
    option_b: 'When independent subtasks can be parallelized',
    option_c: 'For single-agent workflows',
    option_d: 'Never - always sequential',
    correct_answer: 'B',
    explanation: 'The fan-out pattern is ideal when you have multiple independent subtasks that can be executed in parallel.',
    difficulty: 'easy'
  },

  // Question 124 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What best practice ensures effective agent specialization?',
    option_a: 'Make all agents identical',
    option_b: 'Minimize agent capabilities',
    option_c: 'Random task assignment',
    option_d: 'Clear domain boundaries with focused system prompts',
    correct_answer: 'D',
    explanation: 'Effective specialization requires clear domain boundaries and focused system prompts that define each agent\'s expertise.',
    difficulty: 'medium'
  },

  // Question 125 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should errors in one agent affect other agents?',
    option_a: 'All agents should fail immediately',
    option_b: 'Errors should cascade',
    option_c: 'Isolated handling with coordinator managing error propagation',
    option_d: 'Ignore errors completely',
    correct_answer: 'C',
    explanation: 'Errors should be handled in isolation with the coordinator managing appropriate error propagation and recovery.',
    difficulty: 'medium'
  },

  // Question 126 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is subtask parallelization in dynamic workflows?',
    option_a: 'Breaking work into concurrent subtasks for parallel execution',
    option_b: 'Sequential task execution',
    option_c: 'Single agent multitasking',
    option_d: 'Manual task splitting',
    correct_answer: 'A',
    explanation: 'Subtask parallelization breaks work into concurrent subtasks that can be executed in parallel by different agents.',
    difficulty: 'easy'
  },

  // Question 127 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Why maintain separate conversation history per agent?',
    option_a: 'Cost reduction',
    option_b: 'Prevents context confusion and maintains agent-specific focus',
    option_c: 'API requirement',
    option_d: 'Storage optimization',
    correct_answer: 'B',
    explanation: 'Separate conversation history prevents context confusion and allows each agent to maintain focus on its specific domain.',
    difficulty: 'medium'
  },

  // Question 128 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of explicit handoffs over automatic routing?',
    option_a: 'Faster execution',
    option_b: 'Lower cost',
    option_c: 'Simpler code',
    option_d: 'Clear accountability and traceable workflow transitions',
    correct_answer: 'D',
    explanation: 'Explicit handoffs provide clear accountability and make workflow transitions traceable and debuggable.',
    difficulty: 'medium'
  },

  // Question 129 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent system prompts differ in multi-agent systems?',
    option_a: 'All agents use identical prompts',
    option_b: 'No system prompts needed',
    option_c: 'Tailored to each agent\'s role and domain expertise',
    option_d: 'Generic prompts work best',
    correct_answer: 'C',
    explanation: 'System prompts should be tailored to each agent\'s specific role, expertise, and responsibilities in the workflow.',
    difficulty: 'easy'
  },

  // Question 130 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the role of the coordinator in task decomposition?',
    option_a: 'Break complex tasks into manageable subtasks for specialists',
    option_b: 'Execute all subtasks directly',
    option_c: 'Merge all tasks into one',
    option_d: 'Delegate decomposition to workers',
    correct_answer: 'A',
    explanation: 'The coordinator analyzes complex tasks and breaks them into manageable subtasks appropriate for specialist agents.',
    difficulty: 'easy'
  },

  // Question 131 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'When should you use sequential orchestration over parallel?',
    option_a: 'Always prefer sequential',
    option_b: 'When tasks have dependencies or require ordered execution',
    option_c: 'Never use sequential',
    option_d: 'Only for single agents',
    correct_answer: 'B',
    explanation: 'Sequential orchestration is necessary when tasks have dependencies or require specific ordering.',
    difficulty: 'easy'
  },

  // Question 132 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What monitoring is essential for multi-agent systems?',
    option_a: 'Only final results',
    option_b: 'No monitoring needed',
    option_c: 'Single aggregate metric',
    option_d: 'Per-agent metrics, coordination overhead, and task completion rates',
    correct_answer: 'D',
    explanation: 'Monitor per-agent performance, coordination overhead, task completion rates, and handoff efficiency.',
    difficulty: 'medium'
  },

  // Question 133 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How do you prevent deadlocks in multi-agent coordination?',
    option_a: 'Allow circular dependencies',
    option_b: 'No prevention needed',
    option_c: 'Avoid circular dependencies and implement timeout mechanisms',
    option_d: 'Use infinite retries',
    correct_answer: 'C',
    explanation: 'Prevent deadlocks by avoiding circular dependencies and implementing appropriate timeout and recovery mechanisms.',
    difficulty: 'medium'
  },

  // Question 134 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the primary advantage of domain-focused agents?',
    option_a: 'Deep expertise in specific areas produces higher quality results',
    option_b: 'Lower API costs',
    option_c: 'Faster responses',
    option_d: 'Simpler implementation',
    correct_answer: 'A',
    explanation: 'Domain-focused agents develop deep expertise in specific areas, producing higher quality results than generalist agents.',
    difficulty: 'easy'
  },

  // Question 135 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should context be passed during handoffs?',
    option_a: 'No context needed',
    option_b: 'Include only relevant information needed for the receiving agent',
    option_c: 'Pass entire conversation history',
    option_d: 'Use global variables',
    correct_answer: 'B',
    explanation: 'Handoffs should include only the relevant context and information needed by the receiving agent to complete its task.',
    difficulty: 'medium'
  },

  // Question 136 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the scalability advantage of multi-agent systems?',
    option_a: 'Single agent handles more work',
    option_b: 'Reduced memory usage',
    option_c: 'Lower latency',
    option_d: 'Horizontal scaling through agent parallelization',
    correct_answer: 'D',
    explanation: 'Multi-agent systems scale horizontally by adding more specialized agents to handle increased workload in parallel.',
    difficulty: 'medium'
  },

  // Question 137 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the coordinator\'s responsibility for specialist routing?',
    option_a: 'Execute specialist work',
    option_b: 'Random assignment',
    option_c: 'Analyze task and select appropriate specialist based on requirements',
    option_d: 'Allow specialists to self-select',
    correct_answer: 'C',
    explanation: 'The coordinator must analyze each task and intelligently route it to the appropriate specialist based on task requirements.',
    difficulty: 'easy'
  },

  // Question 138 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Why is no cross-talk between workers important?',
    option_a: 'Simplifies coordination and prevents uncontrolled interactions',
    option_b: 'Reduces costs',
    option_c: 'Increases speed',
    option_d: 'API limitation',
    correct_answer: 'A',
    explanation: 'Preventing direct worker-to-worker cross-talk simplifies coordination logic and prevents uncontrolled interactions.',
    difficulty: 'medium'
  },

  // Question 139 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What defines task completion in multi-agent workflows?',
    option_a: 'First agent finishes',
    option_b: 'All required subtasks complete and coordinator synthesizes results',
    option_c: 'Timeout reached',
    option_d: 'Any agent reports done',
    correct_answer: 'B',
    explanation: 'Task completion requires all necessary subtasks to finish and the coordinator to synthesize results into a final output.',
    difficulty: 'easy'
  },

  // Question 140 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent capabilities be documented?',
    option_a: 'No documentation needed',
    option_b: 'Code comments only',
    option_c: 'Single README',
    option_d: 'Clear capability descriptions including strengths and limitations',
    correct_answer: 'D',
    explanation: 'Document each agent\'s capabilities, strengths, and limitations to help the coordinator make informed routing decisions.',
    difficulty: 'medium'
  },

  // Question 141 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of @mentions in Agent Teams?',
    option_a: 'Social features',
    option_b: 'User notifications',
    option_c: 'Explicit agent targeting for directed communication',
    option_d: 'Cosmetic labeling',
    correct_answer: 'C',
    explanation: '@mentions provide explicit agent targeting, ensuring messages reach the intended recipient for directed communication.',
    difficulty: 'medium'
  },

  // Question 142 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should failed subtasks be handled?',
    option_a: 'Coordinator decides retry, reassignment, or escalation',
    option_b: 'Always retry with same agent',
    option_c: 'Fail entire workflow',
    option_d: 'Ignore and continue',
    correct_answer: 'A',
    explanation: 'The coordinator should evaluate failed subtasks and decide whether to retry, reassign, or escalate based on the situation.',
    difficulty: 'medium'
  },

  // Question 143 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of the shared vault in Agent Teams?',
    option_a: 'Store API keys only',
    option_b: 'Secure shared access to sensitive data across agents',
    option_c: 'Backup storage',
    option_d: 'Logging facility',
    correct_answer: 'B',
    explanation: 'The shared vault provides secure, controlled access to sensitive data that multiple agents need to access.',
    difficulty: 'easy'
  },

  // Question 144 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'When should you escalate to a more capable agent?',
    option_a: 'Never escalate',
    option_b: 'Always use most capable',
    option_c: 'Random escalation',
    option_d: 'When current agent reaches capability limits or complexity exceeds expertise',
    correct_answer: 'D',
    explanation: 'Escalate when the current agent reaches its capability limits or task complexity exceeds its domain expertise.',
    difficulty: 'medium'
  },

  // Question 145 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the coordinator\'s role in conflict resolution?',
    option_a: 'Ignore conflicts',
    option_b: 'Let agents fight it out',
    option_c: 'Reconcile conflicting outputs and make final decisions',
    option_d: 'Always prefer first result',
    correct_answer: 'C',
    explanation: 'The coordinator must reconcile conflicting outputs from different agents and make informed final decisions.',
    difficulty: 'medium'
  },

  // Question 146 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How do you optimize cost in multi-agent systems?',
    option_a: 'Use appropriate agent capabilities for each task, avoid overprovisioning',
    option_b: 'Always use cheapest agents',
    option_c: 'Single agent only',
    option_d: 'No optimization possible',
    correct_answer: 'A',
    explanation: 'Optimize cost by matching agent capabilities to task requirements, avoiding overprovisioning expensive agents for simple tasks.',
    difficulty: 'medium'
  },

  // Question 147 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is message passing in multi-agent coordination?',
    option_a: 'Copying context',
    option_b: 'Structured communication protocol for agent interaction',
    option_c: 'Shared memory',
    option_d: 'File sharing',
    correct_answer: 'B',
    explanation: 'Message passing is a structured communication protocol that enables explicit, controlled interaction between agents.',
    difficulty: 'easy'
  },

  // Question 148 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent tools differ between specialists?',
    option_a: 'All agents share identical tools',
    option_b: 'No tools for specialists',
    option_c: 'Random tool assignment',
    option_d: 'Domain-specific tools tailored to each specialist\'s expertise',
    correct_answer: 'D',
    explanation: 'Each specialist should have domain-specific tools tailored to their expertise area for maximum effectiveness.',
    difficulty: 'easy'
  },

  // Question 149 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the risk of overusing the escalation pattern?',
    option_a: 'Better results',
    option_b: 'Faster completion',
    option_c: 'Unnecessary cost increase from using expensive agents for simple tasks',
    option_d: 'Improved accuracy',
    correct_answer: 'C',
    explanation: 'Overusing escalation leads to unnecessarily using expensive, capable agents for tasks that simpler agents could handle.',
    difficulty: 'medium'
  },

  // Question 150 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent session lifecycle be managed?',
    option_a: 'Create, execute, cleanup with proper resource management',
    option_b: 'Never cleanup sessions',
    option_c: 'Share sessions indefinitely',
    option_d: 'Manual management only',
    correct_answer: 'A',
    explanation: 'Properly manage agent session lifecycle with creation, execution, and cleanup to prevent resource leaks.',
    difficulty: 'medium'
  },

  // Question 151 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of task dependency tracking?',
    option_a: 'Cosmetic organization',
    option_b: 'Ensures prerequisites complete before dependent tasks execute',
    option_c: 'No real benefit',
    option_d: 'Just documentation',
    correct_answer: 'B',
    explanation: 'Task dependency tracking ensures that prerequisite tasks complete successfully before dependent tasks begin execution.',
    difficulty: 'easy'
  },

  // Question 152 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should the coordinator handle partial failures?',
    option_a: 'Fail entire workflow always',
    option_b: 'Ignore failures',
    option_c: 'Continue without adaptation',
    option_d: 'Assess impact and decide on retry, alternative approach, or graceful degradation',
    correct_answer: 'D',
    explanation: 'The coordinator should assess partial failure impact and decide on appropriate recovery: retry, alternative approach, or graceful degradation.',
    difficulty: 'medium'
  },

  // Question 153 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of agent specialization boundaries?',
    option_a: 'Artificial limitations',
    option_b: 'Cost reduction only',
    option_c: 'Maintain expertise focus and prevent scope creep',
    option_d: 'Compliance requirement',
    correct_answer: 'C',
    explanation: 'Specialization boundaries maintain each agent\'s focus on their area of expertise and prevent scope creep.',
    difficulty: 'easy'
  },

  // Question 154 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How do dynamic workflows differ from static orchestration?',
    option_a: 'Adapt workflow structure based on runtime conditions',
    option_b: 'No difference',
    option_c: 'Always slower',
    option_d: 'Fixed predefined paths',
    correct_answer: 'A',
    explanation: 'Dynamic workflows can adapt their structure and agent routing based on runtime conditions and intermediate results.',
    difficulty: 'hard'
  },

  // Question 155 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What metrics indicate effective multi-agent coordination?',
    option_a: 'Agent count only',
    option_b: 'Task completion rate, parallelization efficiency, handoff latency',
    option_c: 'Token usage only',
    option_d: 'No metrics needed',
    correct_answer: 'B',
    explanation: 'Effective coordination is measured by task completion rates, parallelization efficiency, and low handoff latency.',
    difficulty: 'medium'
  },

  // Question 156 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent errors be logged in orchestration?',
    option_a: 'Don\'t log errors',
    option_b: 'Single aggregate log',
    option_c: 'Only log coordinator',
    option_d: 'Per-agent error logs with context and handoff trail',
    correct_answer: 'D',
    explanation: 'Log errors per agent with context and handoff trail to enable effective debugging of orchestration issues.',
    difficulty: 'medium'
  },

  // Question 157 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the coordinator pattern\'s main responsibility?',
    option_a: 'Execute all work',
    option_b: 'Monitor only',
    option_c: 'Decompose, route, and synthesize without doing specialist work',
    option_d: 'Backup execution',
    correct_answer: 'C',
    explanation: 'The coordinator decomposes tasks, routes to specialists, and synthesizes results without performing specialist work itself.',
    difficulty: 'easy'
  },

  // Question 158 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should you test multi-agent orchestration?',
    option_a: 'Test individual agents and coordination logic separately, then integrated',
    option_b: 'Only test final output',
    option_c: 'No testing needed',
    option_d: 'Production testing only',
    correct_answer: 'A',
    explanation: 'Test individual agents and coordination logic separately, then perform integrated testing of the complete orchestration.',
    difficulty: 'medium'
  },

  // Question 159 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of result synthesis over result concatenation?',
    option_a: 'Faster processing',
    option_b: 'Intelligent reconciliation and coherent unified response',
    option_c: 'Lower cost',
    option_d: 'No difference',
    correct_answer: 'B',
    explanation: 'Result synthesis intelligently reconciles and combines outputs into a coherent response rather than simple concatenation.',
    difficulty: 'medium'
  },

  // Question 160 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'When is sequential orchestration more appropriate than parallel?',
    option_a: 'Always prefer sequential',
    option_b: 'Never use sequential',
    option_c: 'Random choice',
    option_d: 'When outputs from one task inform inputs to the next',
    correct_answer: 'D',
    explanation: 'Sequential orchestration is appropriate when task outputs need to inform or influence subsequent task inputs.',
    difficulty: 'easy'
  },

  // Question 161 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent state be managed across handoffs?',
    option_a: 'Global shared state',
    option_b: 'No state management',
    option_c: 'Explicit state transfer with necessary context',
    option_d: 'Automatic state synchronization',
    correct_answer: 'C',
    explanation: 'Manage state through explicit transfer of necessary context during handoffs, avoiding hidden shared state.',
    difficulty: 'medium'
  },

  // Question 162 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the risk of unclear specialization boundaries?',
    option_a: 'Agents overlap work and create conflicts',
    option_b: 'Faster execution',
    option_c: 'Better results',
    option_d: 'No risk',
    correct_answer: 'A',
    explanation: 'Unclear boundaries cause agents to overlap work, creating conflicts, redundancy, and coordination problems.',
    difficulty: 'easy'
  },

  // Question 163 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should timeout handling differ between coordinator and workers?',
    option_a: 'No timeouts needed',
    option_b: 'Workers have task timeouts, coordinator has overall workflow timeout',
    option_c: 'Same timeout for all',
    option_d: 'Only coordinator needs timeout',
    correct_answer: 'B',
    explanation: 'Workers need individual task timeouts while the coordinator needs an overall workflow timeout to manage completion.',
    difficulty: 'medium'
  },

  // Question 164 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the advantage of context isolation in debugging?',
    option_a: 'No advantage',
    option_b: 'Slower debugging',
    option_c: 'More complex',
    option_d: 'Easier to trace issues to specific agents',
    correct_answer: 'D',
    explanation: 'Context isolation makes it easier to trace issues to specific agents since their conversations are separate.',
    difficulty: 'easy'
  },

  // Question 165 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should you handle agent version mismatches in orchestration?',
    option_a: 'Ignore versions',
    option_b: 'Always use oldest',
    option_c: 'Track agent versions and ensure compatibility',
    option_d: 'Random version selection',
    correct_answer: 'C',
    explanation: 'Track agent versions and ensure compatibility between agents to prevent orchestration issues.',
    difficulty: 'hard'
  },

  // Question 166 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of a task board in coordination?',
    option_a: 'Centralized task tracking, status, and dependency management',
    option_b: 'Decoration',
    option_c: 'Backup storage',
    option_d: 'User interface only',
    correct_answer: 'A',
    explanation: 'The task board provides centralized tracking of tasks, their status, assignments, and dependencies for coordination.',
    difficulty: 'easy'
  },

  // Question 167 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Why should specialists avoid coordinator responsibilities?',
    option_a: 'Cost reasons',
    option_b: 'Maintains clear separation of concerns and role clarity',
    option_c: 'Performance impact',
    option_d: 'API limitation',
    correct_answer: 'B',
    explanation: 'Specialists should focus on their domain expertise, maintaining clear separation from coordination responsibilities.',
    difficulty: 'medium'
  },

  // Question 168 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How does multi-agent orchestration improve on single-agent approaches?',
    option_a: 'Always cheaper',
    option_b: 'Always faster',
    option_c: 'Simpler code',
    option_d: 'Better specialization, parallelism, and scalability',
    correct_answer: 'D',
    explanation: 'Multi-agent orchestration provides superior specialization, enables parallelism, and offers better scalability.',
    difficulty: 'easy'
  },

  // Question 169 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the coordinator\'s role in quality control?',
    option_a: 'No quality role',
    option_b: 'Blindly accept all results',
    option_c: 'Validate specialist outputs meet requirements before synthesis',
    option_d: 'Only check formatting',
    correct_answer: 'C',
    explanation: 'The coordinator validates that specialist outputs meet quality requirements before synthesizing final results.',
    difficulty: 'medium'
  },

  // Question 170 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent pool sizing be determined?',
    option_a: 'Based on workload, parallelism opportunities, and resource constraints',
    option_b: 'Always maximum agents',
    option_c: 'Single agent only',
    option_d: 'Random sizing',
    correct_answer: 'A',
    explanation: 'Size agent pools based on workload characteristics, parallelism opportunities, and available resource constraints.',
    difficulty: 'medium'
  },

  // Question 171 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of event-driven orchestration?',
    option_a: 'Synchronous blocking',
    option_b: 'Reactive, asynchronous coordination without polling',
    option_c: 'Slower execution',
    option_d: 'No benefits',
    correct_answer: 'B',
    explanation: 'Event-driven orchestration enables reactive, asynchronous coordination without resource-intensive polling.',
    difficulty: 'hard'
  },

  // Question 172 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent communication failures be handled?',
    option_a: 'Ignore failures',
    option_b: 'Crash system',
    option_c: 'Infinite retry',
    option_d: 'Retry with exponential backoff and fallback strategies',
    correct_answer: 'D',
    explanation: 'Handle communication failures with retry logic using exponential backoff and appropriate fallback strategies.',
    difficulty: 'medium'
  },

  // Question 173 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the role of the lead agent in Agent Teams?',
    option_a: 'Execute all tasks',
    option_b: 'Monitor only',
    option_c: 'Plan overall strategy and delegate to specialists',
    option_d: 'Backup agent',
    correct_answer: 'C',
    explanation: 'The lead agent is responsible for planning the overall strategy and delegating specific tasks to specialist agents.',
    difficulty: 'easy'
  },

  // Question 174 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent authentication be managed in multi-agent systems?',
    option_a: 'Secure per-agent credentials with appropriate scoping',
    option_b: 'Share single credential',
    option_c: 'No authentication',
    option_d: 'Hardcoded tokens',
    correct_answer: 'A',
    explanation: 'Manage secure per-agent credentials with appropriate scoping to maintain security and accountability.',
    difficulty: 'medium'
  },

  // Question 175 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of agent capabilities declaration?',
    option_a: 'Marketing material',
    option_b: 'Helps coordinator make informed routing decisions',
    option_c: 'No purpose',
    option_d: 'Decoration',
    correct_answer: 'B',
    explanation: 'Agent capability declarations help the coordinator make informed decisions about which agent to route tasks to.',
    difficulty: 'easy'
  },

  // Question 176 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should you balance cost and performance in multi-agent systems?',
    option_a: 'Always choose cheapest',
    option_b: 'Always choose fastest',
    option_c: 'Ignore trade-offs',
    option_d: 'Match agent capability to task requirements for optimal cost-performance',
    correct_answer: 'D',
    explanation: 'Balance cost and performance by matching agent capabilities to task requirements, avoiding over or under-provisioning.',
    difficulty: 'medium'
  },

  // Question 177 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of limiting coordinator scope?',
    option_a: 'Artificial constraint',
    option_b: 'Cost reduction',
    option_c: 'Maintains focus on coordination and prevents becoming a bottleneck',
    option_d: 'No benefit',
    correct_answer: 'C',
    explanation: 'Limiting coordinator to coordination tasks maintains focus and prevents it from becoming a performance bottleneck.',
    difficulty: 'medium'
  },

  // Question 178 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent performance be benchmarked?',
    option_a: 'Domain-specific metrics for each agent type',
    option_b: 'Single global metric',
    option_c: 'No benchmarking needed',
    option_d: 'Random sampling',
    correct_answer: 'A',
    explanation: 'Benchmark each agent type using domain-specific metrics appropriate to their specialization.',
    difficulty: 'medium'
  },

  // Question 179 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of agent health checks in orchestration?',
    option_a: 'Decoration',
    option_b: 'Monitor agent availability and route around failures',
    option_c: 'No purpose',
    option_d: 'Logging only',
    correct_answer: 'B',
    explanation: 'Health checks monitor agent availability and enable the coordinator to route around failed or unavailable agents.',
    difficulty: 'easy'
  },

  // Question 180 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should multi-agent workflows be documented?',
    option_a: 'No documentation',
    option_b: 'Code only',
    option_c: 'Single diagram',
    option_d: 'Flow diagrams, agent roles, handoff protocols, and error handling',
    correct_answer: 'D',
    explanation: 'Document workflows with flow diagrams, agent roles, handoff protocols, error handling, and coordination logic.',
    difficulty: 'easy'
  },

  // Question 181 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the risk of tight coupling between agents?',
    option_a: 'Better performance',
    option_b: 'Lower cost',
    option_c: 'Reduces flexibility and makes changes difficult',
    option_d: 'No risk',
    correct_answer: 'C',
    explanation: 'Tight coupling reduces flexibility, makes the system fragile, and makes changes to individual agents difficult.',
    difficulty: 'medium'
  },

  // Question 182 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should context size be managed across multiple agents?',
    option_a: 'Pass only necessary context, summarize when needed',
    option_b: 'Always pass full history',
    option_c: 'No context passing',
    option_d: 'Random context selection',
    correct_answer: 'A',
    explanation: 'Manage context size by passing only necessary information to each agent and summarizing when appropriate.',
    difficulty: 'medium'
  },

  // Question 183 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the advantage of asynchronous agent execution?',
    option_a: 'Simpler code',
    option_b: 'Better resource utilization and responsiveness',
    option_c: 'Lower cost',
    option_d: 'No advantage',
    correct_answer: 'B',
    explanation: 'Asynchronous execution improves resource utilization and system responsiveness by avoiding blocking waits.',
    difficulty: 'medium'
  },

  // Question 184 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should competing agent results be reconciled?',
    option_a: 'Always use first result',
    option_b: 'Random selection',
    option_c: 'Ignore conflicts',
    option_d: 'Coordinator evaluates and reconciles based on criteria',
    correct_answer: 'D',
    explanation: 'The coordinator should evaluate competing results against defined criteria and reconcile them intelligently.',
    difficulty: 'medium'
  },

  // Question 185 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of agent registration in orchestration systems?',
    option_a: 'Legal compliance',
    option_b: 'Marketing',
    option_c: 'Discover available agents and their capabilities',
    option_d: 'No purpose',
    correct_answer: 'C',
    explanation: 'Agent registration enables the orchestration system to discover available agents and their capabilities dynamically.',
    difficulty: 'hard'
  },

  // Question 186 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent failure impact workflow continuation?',
    option_a: 'Depends on criticality - retry, substitute, or graceful degradation',
    option_b: 'Always fail entire workflow',
    option_c: 'Always continue regardless',
    option_d: 'No impact',
    correct_answer: 'A',
    explanation: 'Agent failure handling depends on task criticality: retry critical tasks, substitute agents, or gracefully degrade.',
    difficulty: 'medium'
  },

  // Question 187 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of atomic task assignments?',
    option_a: 'Slower execution',
    option_b: 'Clear completion criteria and easier failure recovery',
    option_c: 'More complexity',
    option_d: 'No benefit',
    correct_answer: 'B',
    explanation: 'Atomic task assignments have clear completion criteria and make failure recovery simpler by isolating work units.',
    difficulty: 'medium'
  },

  // Question 188 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent priorities be determined?',
    option_a: 'All equal priority',
    option_b: 'Random priority',
    option_c: 'First-come-first-served',
    option_d: 'Based on task urgency, dependencies, and business requirements',
    correct_answer: 'D',
    explanation: 'Determine agent priorities based on task urgency, dependency chains, and business requirements for optimal workflow.',
    difficulty: 'medium'
  },

  // Question 189 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of agent work queues?',
    option_a: 'Decoration',
    option_b: 'Logging',
    option_c: 'Buffer and manage task distribution to agents',
    option_d: 'No purpose',
    correct_answer: 'C',
    explanation: 'Work queues buffer tasks and manage distribution to agents, enabling load balancing and asynchronous processing.',
    difficulty: 'easy'
  },

  // Question 190 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent resource limits be enforced?',
    option_a: 'Per-agent quotas for tokens, API calls, and execution time',
    option_b: 'No limits needed',
    option_c: 'Global limit only',
    option_d: 'Honor system',
    correct_answer: 'A',
    explanation: 'Enforce per-agent resource limits including token quotas, API call limits, and execution time constraints.',
    difficulty: 'medium'
  },

  // Question 191 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the role of agent middleware in orchestration?',
    option_a: 'Not needed',
    option_b: 'Cross-cutting concerns like logging, auth, and monitoring',
    option_c: 'Task execution',
    option_d: 'Storage only',
    correct_answer: 'B',
    explanation: 'Agent middleware handles cross-cutting concerns like logging, authentication, monitoring, and error handling.',
    difficulty: 'hard'
  },

  // Question 192 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent orchestration scale horizontally?',
    option_a: 'Cannot scale',
    option_b: 'Vertical scaling only',
    option_c: 'Manual scaling',
    option_d: 'Add more agent instances with load balancing',
    correct_answer: 'D',
    explanation: 'Scale horizontally by adding more agent instances and using load balancing to distribute work.',
    difficulty: 'medium'
  },

  // Question 193 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the benefit of result caching in multi-agent systems?',
    option_a: 'No benefit',
    option_b: 'Slower performance',
    option_c: 'Avoid redundant work when agents need same information',
    option_d: 'Higher cost',
    correct_answer: 'C',
    explanation: 'Result caching avoids redundant work by reusing results when multiple agents need the same information.',
    difficulty: 'medium'
  },

  // Question 194 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should multi-agent systems handle rate limiting?',
    option_a: 'Distribute requests across agents and implement backoff strategies',
    option_b: 'Ignore rate limits',
    option_c: 'Single agent handles all',
    option_d: 'No strategy needed',
    correct_answer: 'A',
    explanation: 'Handle rate limiting by distributing requests across agents and implementing appropriate backoff strategies.',
    difficulty: 'medium'
  },

  // Question 195 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the purpose of agent capability negotiation?',
    option_a: 'Price bargaining',
    option_b: 'Match task requirements with available agent capabilities',
    option_c: 'Social interaction',
    option_d: 'No purpose',
    correct_answer: 'B',
    explanation: 'Capability negotiation matches task requirements with available agent capabilities to find optimal assignments.',
    difficulty: 'hard'
  },

  // Question 196 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent orchestration handle rollback scenarios?',
    option_a: 'No rollback support',
    option_b: 'Manual rollback only',
    option_c: 'Ignore failures',
    option_d: 'Compensating actions for completed subtasks',
    correct_answer: 'D',
    explanation: 'Implement compensating actions to rollback or undo completed subtasks when later tasks fail.',
    difficulty: 'hard'
  },

  // Question 197 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the key principle for effective agent delegation?',
    option_a: 'Micromanage everything',
    option_b: 'No oversight',
    option_c: 'Clear task definition with autonomy within boundaries',
    option_d: 'Constant intervention',
    correct_answer: 'C',
    explanation: 'Effective delegation requires clear task definitions while giving agents autonomy to operate within defined boundaries.',
    difficulty: 'easy'
  },

  // Question 198 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should multi-agent observability be implemented?',
    option_a: 'Distributed tracing across agent interactions with correlation IDs',
    option_b: 'No observability needed',
    option_c: 'Single log file',
    option_d: 'Manual inspection',
    correct_answer: 'A',
    explanation: 'Implement distributed tracing with correlation IDs to track workflows across agent interactions and handoffs.',
    difficulty: 'hard'
  },

  // Question 199 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'What is the primary goal of multi-agent orchestration?',
    option_a: 'Maximize agent count',
    option_b: 'Efficiently coordinate specialized agents to solve complex tasks',
    option_c: 'Minimize costs only',
    option_d: 'Use latest technology',
    correct_answer: 'B',
    explanation: 'The primary goal is to efficiently coordinate specialized agents to solve complex tasks that benefit from decomposition.',
    difficulty: 'easy'
  },

  // Question 200 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'How should agent orchestration patterns evolve over time?',
    option_a: 'Never change patterns',
    option_b: 'Random changes',
    option_c: 'Copy competitors',
    option_d: 'Adapt based on metrics, failures, and new capabilities',
    correct_answer: 'D',
    explanation: 'Orchestration patterns should evolve based on performance metrics, failure analysis, and newly available capabilities.',
    difficulty: 'medium'
  },

  // ============================================
  // TOPIC 3: Hooks, Workflows & Sessions
  // Week 3 - 100 Questions
  // Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)
  // ============================================

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

  // ============================================================================
  // Topic 4: Tool Design & MCP (Model Context Protocol) - 100 Questions
  // Week 4 - Domain: MCP & Tool Integrations
  // Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)
  // Generated using shuffle strategy: ['A']*25 + ['B']*25 + ['C']*25 + ['D']*25, then shuffled
  // ============================================================================

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
  },

  // ========================================
  // TOPIC 5: Claude Code Configuration (100 questions)
  // Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)
  // ========================================

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
