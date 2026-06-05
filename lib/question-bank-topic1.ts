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

// Topic 1: Agentic Loops & Core API (100 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic1Questions: Question[] = [
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
];
