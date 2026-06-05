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

// Topic 1: Agentic Loops & Core API (101 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)
// ALL QUESTIONS TRANSFORMED TO SCENARIO-BASED, REAL-WORLD CONTEXTS

export const topic1Questions: Question[] = [
  // Question 1 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re building a code analysis tool where Claude needs to read files, identify issues, and suggest fixes iteratively until no more problems are found. Which pattern would enable Claude to autonomously perform these steps until the analysis is complete?',
    option_a: 'A single API call with all files pre-loaded to reduce costs',
    option_b: 'Multiple isolated API calls with manual coordination between each step',
    option_c: 'An agentic loop that allows Claude to iteratively use tools and refine reasoning until task completion',
    option_d: 'A simplified workflow that batches all operations into one request for faster responses',
    correct_answer: 'C',
    explanation: 'The agentic loop pattern enables Claude to iteratively use tools (reading files, analyzing code) and refine its reasoning until the task is complete, making it ideal for complex, multi-step analysis tasks.',
    difficulty: 'easy'
  },

  // Question 2 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your AI assistant is processing a complex data migration task. After each API response, you need to check if Claude wants to use more tools or if it\'s finished. What value of stop_reason indicates Claude needs to continue working?',
    option_a: 'end_turn',
    option_b: 'tool_use',
    option_c: 'max_tokens',
    option_d: 'refusal',
    correct_answer: 'B',
    explanation: 'When stop_reason equals "tool_use", it indicates Claude has requested tool execution and the loop should continue to execute those tools and send results back.',
    difficulty: 'easy'
  },

  // Question 3 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re monitoring your production agentic system\'s logs and notice a successful workflow just completed. Looking at the final API response, what stop_reason value indicates Claude finished naturally without needing additional tools?',
    option_a: 'end_turn',
    option_b: 'tool_use',
    option_c: 'pause_turn',
    option_d: 'max_tokens',
    correct_answer: 'A',
    explanation: 'The end_turn stop_reason signals that Claude has finished its response without needing additional tool execution, indicating successful task completion.',
    difficulty: 'easy'
  },

  // Question 4 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your document processing workflow suddenly stops mid-operation, and users complain the output is incomplete. Checking the API response, you see stop_reason: "max_tokens". What does this tell you about the failure?',
    option_a: 'All tool executions completed successfully',
    option_b: 'The user manually interrupted the process',
    option_c: 'The task completed as expected',
    option_d: 'Claude\'s response was truncated because it exceeded the maximum token limit',
    correct_answer: 'D',
    explanation: 'The max_tokens stop_reason indicates the response was cut off due to reaching the token limit, causing incomplete output that needs to be addressed by increasing the limit or optimizing the workflow.',
    difficulty: 'easy'
  },

  // Question 5 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re debugging an agentic workflow that\'s failing with a validation error. Claude requested three tool executions, but your code is having trouble matching the results back to the requests. Which field should you use to correctly link each tool_result to its corresponding tool_use block?',
    option_a: 'result_id',
    option_b: 'execution_id',
    option_c: 'tool_use_id',
    option_d: 'tool_name',
    correct_answer: 'C',
    explanation: 'The tool_use_id field must match between the tool_use block and its corresponding tool_result block to correctly link tool execution results.',
    difficulty: 'easy'
  },

  // Question 6 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During a deployment, your agentic system starts throwing API errors. You discover that when Claude requests multiple tools simultaneously, your code only returns results for some of them. What will happen when you send an incomplete set of tool_result blocks?',
    option_a: 'Claude will intelligently skip the missing tool and continue',
    option_b: 'The API will return a validation error rejecting the request',
    option_c: 'The loop will continue normally, treating missing results as null',
    option_d: 'Tool results are optional, so nothing bad happens',
    correct_answer: 'B',
    explanation: 'Every tool_use block must have a corresponding tool_result with matching tool_use_id, or the API will return a validation error.',
    difficulty: 'easy'
  },

  // Question 7 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re building a financial transaction system where Claude processes payment requests. For security, you need users to explicitly approve each transaction before it executes. Which stop_reason should you check for to implement this human-in-the-loop pattern?',
    option_a: 'pause_turn',
    option_b: 'end_turn',
    option_c: 'tool_use',
    option_d: 'stop_sequence',
    correct_answer: 'A',
    explanation: 'The pause_turn stop_reason indicates Claude wants user confirmation before proceeding, making it perfect for implementing human-in-the-loop patterns for sensitive operations.',
    difficulty: 'medium'
  },

  // Question 8 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'A user reports that when they ask Claude to help with certain prohibited content, the system stops working. Examining your logs, you see stop_reason: "refusal" in the API response. What does this indicate?',
    option_a: 'A tool failed to execute properly',
    option_b: 'The response exceeded the token limit',
    option_c: 'The agentic loop should continue to the next iteration',
    option_d: 'Claude declined to respond due to content safety policies',
    correct_answer: 'D',
    explanation: 'The refusal stop_reason signals that Claude declined to answer due to content policy or safety concerns, which should be handled gracefully in your application.',
    difficulty: 'easy'
  },

  // Question 9 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your production agentic system experienced a runaway loop last night that cost $500 in API charges and ran for 3 hours. Your CTO asks what safety controls you should implement. What combination provides the best protection against this happening again?',
    option_a: 'No special limits - the system should self-regulate',
    option_b: 'Only set max_tokens to prevent long responses',
    option_c: 'Implement both max_turns and max_budget_usd for comprehensive cost and iteration control',
    option_d: 'Only set max_turns to limit iterations',
    correct_answer: 'C',
    explanation: 'Combining max_budget_usd and max_turns provides defense-in-depth protection: max_turns prevents infinite loops, while max_budget_usd caps spending.',
    difficulty: 'medium'
  },

  // Question 10 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re building a research assistant that needs to gather information from multiple sources simultaneously. Looking at Claude\'s API response, you notice several tool_use blocks in a single response. Is this expected behavior?',
    option_a: 'No, this is an API error - only one tool per response is allowed',
    option_b: 'Yes, Claude can request multiple tool executions in a single response',
    option_c: 'Only if you have special enterprise permissions enabled',
    option_d: 'Only when using server-side tools',
    correct_answer: 'B',
    explanation: 'Claude can return multiple tool_use content blocks in a single response, allowing parallel tool execution for efficiency.',
    difficulty: 'medium'
  },

  // Question 11 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system keeps failing with "Invalid message format" errors. Reviewing the conversation history you\'re building, what alternating pattern must you follow to comply with the Messages API requirements?',
    option_a: 'user, assistant, user, assistant',
    option_b: 'assistant, user, assistant, user',
    option_c: 'user, user, assistant, assistant',
    option_d: 'Any order is acceptable as long as roles are specified',
    correct_answer: 'A',
    explanation: 'The Messages API requires strict role alternation starting with user: user, assistant, user, assistant.',
    difficulty: 'easy'
  },

  // Question 12 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'After executing the tools Claude requested, you need to send the results back to continue the agentic loop. How should you structure and add these tool results to your conversation history?',
    option_a: 'Replace the previous assistant message with the results',
    option_b: 'Merge the results directly into the existing tool_use message',
    option_c: 'Add them to the system prompt for the next iteration',
    option_d: 'Append a new user message containing tool_result content blocks',
    correct_answer: 'D',
    explanation: 'Tool results must be appended as a new user message containing tool_result content blocks, maintaining the user/assistant alternation pattern.',
    difficulty: 'easy'
  },

  // Question 13 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is evaluating whether to use client-side tools (executed in your infrastructure) versus server-side tools (executed by Anthropic). What\'s the fundamental difference in how these tools are executed?',
    option_a: 'Server-side tools execute faster due to better hardware',
    option_b: 'Client-side tools have lower API costs',
    option_c: 'Client-side tools are defined and executed by you, server-side tools run on Anthropic\'s infrastructure',
    option_d: 'There\'s no meaningful difference between them',
    correct_answer: 'C',
    explanation: 'Client-side tools are defined and executed by the user\'s code, while server-side tools are managed and executed by Anthropic infrastructure.',
    difficulty: 'medium'
  },

  // Question 14 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During an architecture review, your team is debating whether implementing agentic loops is worth the additional complexity. You reference LAB-Bench benchmark results. What performance improvement do agentic loops with tool use demonstrate on complex tasks?',
    option_a: '10-20% improvement',
    option_b: '50%+ improvement in complex task success rates',
    option_c: '5% improvement',
    option_d: 'No measurable improvement',
    correct_answer: 'B',
    explanation: 'LAB-Bench benchmarks show that agentic loops with tool use provide 50%+ improvement in task success rates for complex tasks.',
    difficulty: 'medium'
  },

  // Question 15 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Reviewing Claude\'s responses in your agentic workflow, you notice some responses contain both explanatory text and tool_use blocks. A junior developer asks if this is an error. What do you tell them?',
    option_a: 'This is normal - Claude can include both reasoning text and tool_use blocks in the same response',
    option_b: 'This is an error - responses should only contain tool_use blocks',
    option_c: 'This is an error - responses should only contain text blocks',
    option_d: 'This only happens when extended_thinking is enabled',
    correct_answer: 'A',
    explanation: 'Claude can include both text content blocks (for reasoning) and tool_use blocks in the same response, providing transparency into its decision-making.',
    difficulty: 'medium'
  },

  // Question 16 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your finance team just alerted you to an unexpected $2,000 API bill from last week. Investigating, you discover an agentic workflow entered an infinite loop processing a malformed input. What safety control did you forget to implement?',
    option_a: 'Response streaming for better performance',
    option_b: 'Input validation which would have prevented errors',
    option_c: 'Better error messages to help debugging',
    option_d: 'max_turns limit to prevent infinite loops and excessive costs',
    correct_answer: 'D',
    explanation: 'Without max_turns limits, agentic loops can run indefinitely, causing excessive API costs. This is a critical safety control for production systems.',
    difficulty: 'easy'
  },

  // Question 17 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re optimizing an agentic workflow that\'s hitting context limits after 8-10 iterations. The product manager asks why the context keeps growing. What do you explain is happening with each loop iteration?',
    option_a: 'Context size stays constant throughout the loop',
    option_b: 'Only tool results add to the context, messages are discarded',
    option_c: 'Each iteration accumulates messages, tool_use blocks, and tool_result blocks, growing the context',
    option_d: 'The context automatically shrinks after each iteration',
    correct_answer: 'C',
    explanation: 'Each loop iteration adds assistant messages with tool_use blocks and user messages with tool_result blocks, causing context to accumulate over time.',
    difficulty: 'medium'
  },

  // Question 18 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your long-running agentic workflow is hitting context window limits after 15 iterations. The system needs to run for 30+ iterations to complete complex tasks. What strategy should you implement to manage this context growth?',
    option_a: 'Ignore it - modern models have unlimited context',
    option_b: 'Periodically summarize earlier turns and prune conversation history',
    option_c: 'Restart the conversation from scratch every turn',
    option_d: 'Randomly delete messages until it fits',
    correct_answer: 'B',
    explanation: 'Summarizing earlier context and pruning conversation history prevents context window overflow while maintaining necessary information for task completion.',
    difficulty: 'medium'
  },

  // Question 19 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During testing, one of your tools occasionally times out when connecting to an external API. How should your agentic system communicate this failure to Claude so it can adapt its strategy?',
    option_a: 'Return a tool_result with is_error: true and descriptive error details',
    option_b: 'Skip returning any result for that tool',
    option_c: 'Restart the entire conversation from the beginning',
    option_d: 'Retry the tool indefinitely until it succeeds',
    correct_answer: 'A',
    explanation: 'Tool execution failures should be reported via tool_result blocks with is_error: true and descriptive error information, allowing Claude to understand what went wrong and adapt.',
    difficulty: 'easy'
  },

  // Question 20 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You configured custom stop sequences in your API request to handle special formatting requirements. Claude\'s response ends prematurely, and you see stop_reason: "stop_sequence" in the logs. What does this tell you happened?',
    option_a: 'Claude needs to use a tool and the loop should continue',
    option_b: 'The response hit the token limit',
    option_c: 'The loop should continue to the next iteration',
    option_d: 'Claude generated one of your custom stop sequences in its output',
    correct_answer: 'D',
    explanation: 'The stop_sequence stop_reason indicates Claude generated one of the custom stop sequences defined in your API request.',
    difficulty: 'medium'
  },

  // Question 21 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your research team wants to experiment with extended thinking in your agentic workflow to improve decision-making quality. They ask what effort levels are available to control the depth of reasoning. What options do you tell them?',
    option_a: 'basic, advanced, expert',
    option_b: 'minimal, standard, maximum',
    option_c: 'low, medium, high',
    option_d: 'Effort levels do not apply to extended thinking',
    correct_answer: 'C',
    explanation: 'Extended thinking supports effort levels (low, medium, high) that influence reasoning depth in agentic patterns.',
    difficulty: 'hard'
  },

  // Question 22 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Claude just requested execution of three different tools simultaneously: database_query, fetch_weather, and send_email. After executing all three, how should you structure the results you send back to Claude?',
    option_a: 'Only return the result for the first tool requested',
    option_b: 'Return one tool_result for each tool_use, ensuring tool_use_id values match',
    option_c: 'Merge all three results into a single tool_result block',
    option_d: 'Execute them sequentially only, never in parallel',
    correct_answer: 'B',
    explanation: 'Each tool_use requires its own tool_result with the correct tool_use_id, allowing parallel or sequential execution as appropriate.',
    difficulty: 'medium'
  },

  // Question 23 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your database query tool is returning large JSON blobs that Claude struggles to process effectively. The PM asks how you should format tool results to improve Claude\'s reasoning. What approach do you recommend?',
    option_a: 'Return structured, relevant data formatted for Claude to reason over effectively',
    option_b: 'Always return raw binary data for maximum compatibility',
    option_c: 'Dump complete raw HTML for full information',
    option_d: 'Compress everything into archived formats',
    correct_answer: 'A',
    explanation: 'Tool results should contain structured, relevant data formatted for Claude to effectively reason and make decisions.',
    difficulty: 'medium'
  },

  // Question 24 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Analyzing your agentic system\'s behavior, you notice Claude sometimes requests multiple tools in one response and sometimes just one. A colleague asks when Claude decides to use multiple tools. What do you explain?',
    option_a: 'Multiple tools are never allowed by the API',
    option_b: 'Only server-side tools can be requested in multiples',
    option_c: 'Multiple tools require a special API flag to be enabled',
    option_d: 'Claude uses multiple tools when gathering parallel information or executing independent operations',
    correct_answer: 'D',
    explanation: 'Claude uses multiple tools when operations can be performed in parallel or when gathering independent pieces of information efficiently.',
    difficulty: 'medium'
  },

  // Question 25 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your manager is comparing two approaches for a complex customer support automation project: single-turn API calls versus implementing agentic loops. What core advantage would you highlight for the agentic approach?',
    option_a: 'Agentic loops have significantly lower API costs',
    option_b: 'The code is much simpler to write and maintain',
    option_c: 'Agentic loops enable iterative tool use and reasoning refinement for complex multi-step tasks',
    option_d: 'Single API responses are always faster',
    correct_answer: 'C',
    explanation: 'Agentic loops enable iterative tool use and reasoning refinement, dramatically improving task completion for complex workflows that require multiple steps.',
    difficulty: 'easy'
  },

  // Question 26 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'A new developer on your team is implementing their first agentic loop and asks how to properly structure the conversation history they\'re building up. What guidance do you provide?',
    option_a: 'Store it as a flat list of text without role markers',
    option_b: 'Build an array of message objects with alternating user/assistant roles and content arrays',
    option_c: 'Encode it as JSON within the system prompt',
    option_d: 'Store it as binary data for efficiency',
    correct_answer: 'B',
    explanation: 'Conversation history must be an array of message objects with alternating user/assistant roles and content arrays.',
    difficulty: 'easy'
  },

  // Question 27 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system is throwing intermittent validation errors. You want to add robust validation before sending tool results to the API. What should you verify to prevent these errors?',
    option_a: 'Check that every tool_use_id has a matching tool_result and all IDs are correct',
    option_b: 'No validation is needed - the API handles everything',
    option_c: 'Only verify the data size is within limits',
    option_d: 'Only validate that the JSON is syntactically correct',
    correct_answer: 'A',
    explanation: 'Validate that every tool_use_id has a corresponding tool_result and all IDs match correctly to prevent API validation errors.',
    difficulty: 'medium'
  },

  // Question 28 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your DevOps team is setting up monitoring for the new agentic system before it goes to production. They ask what metrics are essential to track. What do you recommend?',
    option_a: 'Only monitor total token count',
    option_b: 'Only track error rates',
    option_c: 'Only measure API response times',
    option_d: 'Track loop iterations, token usage, costs, latency, and task success rates',
    correct_answer: 'D',
    explanation: 'Comprehensive monitoring of iterations, tokens, costs, latency, and success rates ensures healthy production systems and enables optimization.',
    difficulty: 'medium'
  },

  // Question 29 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You set max_budget_usd to $5.00 for a workflow, but during peak usage it\'s hitting this limit. What happens when an agentic loop reaches the max_budget_usd threshold?',
    option_a: 'The API continues but charges you the overage amount',
    option_b: 'You receive a warning but the loop continues',
    option_c: 'The loop terminates immediately with a budget exceeded error',
    option_d: 'The system automatically switches to a cheaper model',
    correct_answer: 'C',
    explanation: 'When max_budget_usd is exceeded, the API terminates the request to prevent uncontrolled spending.',
    difficulty: 'medium'
  },

  // Question 30 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Parsing Claude\'s responses in your agentic workflow, you need to identify when Claude is requesting tool execution. Which content block type indicates a tool execution request?',
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
    question: 'During a post-mortem for a runaway loop incident that cost the company $800, the team identifies mistakes in the initial implementation. What common mistake led to this expensive failure?',
    option_a: 'Not setting iteration limits (max_turns) and cost controls (max_budget_usd)',
    option_b: 'Providing access to too many different tools',
    option_c: 'Including system prompts in the configuration',
    option_d: 'Enabling streaming responses for real-time output',
    correct_answer: 'A',
    explanation: 'Failing to set max_turns and max_budget_usd limits is a common mistake that leads to runaway costs and infinite loops.',
    difficulty: 'easy'
  },

  // Question 32 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system integrates with a third-party API that occasionally goes down for maintenance. When Claude requests this tool during maintenance, how should you handle the unavailability?',
    option_a: 'Silently ignore the request and move on',
    option_b: 'Wait indefinitely until the service comes back online',
    option_c: 'Skip this tool and execute the next one instead',
    option_d: 'Return a tool_result with is_error: true explaining the service is temporarily unavailable',
    correct_answer: 'D',
    explanation: 'Report unavailability via tool_result with is_error: true, allowing Claude to understand the situation and adapt or choose alternatives.',
    difficulty: 'medium'
  },

  // Question 33 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re building a customer support bot that needs context from previous support sessions. A developer asks if you can include conversation history from earlier user sessions. What do you tell them?',
    option_a: 'No, conversation history can only include the current session',
    option_b: 'Only if you enable a special historical context flag',
    option_c: 'Yes, you can include messages from previous sessions to maintain context across interactions',
    option_d: 'Only the most recent 5 messages can be included',
    correct_answer: 'C',
    explanation: 'You can include messages from previous sessions in conversation history to maintain context across interactions.',
    difficulty: 'easy'
  },

  // Question 34 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re implementing the main loop logic for your agentic system. When you receive stop_reason: "end_turn" from the API, what should your loop control flow do?',
    option_a: 'Continue the loop and make another API call',
    option_b: 'Exit the loop - the task is complete or no tools are needed',
    option_c: 'Retry the same request',
    option_d: 'Wait for additional user input',
    correct_answer: 'B',
    explanation: 'end_turn indicates Claude has finished its response, signaling the loop should exit as the task is complete.',
    difficulty: 'easy'
  },

  // Question 35 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re designing the system prompt for an agentic code review tool. The product team asks what should be included in the system prompt to make the system effective. What do you recommend?',
    option_a: 'Clear task instructions, tool usage guidelines, and behavioral constraints',
    option_b: 'Nothing - system prompts are deprecated',
    option_c: 'Only the tool definitions',
    option_d: 'Only the conversation history',
    correct_answer: 'A',
    explanation: 'Effective system prompts include clear task instructions, tool usage guidelines, and behavioral constraints to guide Claude\'s behavior.',
    difficulty: 'medium'
  },

  // Question 36 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is evaluating server-side tools versus client-side tools for a latency-sensitive application. From an execution perspective, what key difference would impact your architecture decision?',
    option_a: 'There\'s no meaningful difference in execution',
    option_b: 'Server-side tools execute slower due to network overhead',
    option_c: 'Server-side tools cost more per execution',
    option_d: 'Server-side tools execute within Anthropic\'s infrastructure, not in your code',
    correct_answer: 'D',
    explanation: 'Server-side tools execute within Anthropic\'s infrastructure automatically, while client-side tools require user execution, which affects latency and architecture.',
    difficulty: 'medium'
  },

  // Question 37 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'One of your tools just encountered a database connection timeout. You need to inform Claude about this failure so it can decide how to proceed. What should your error tool_result include?',
    option_a: 'Just set is_error: true with no additional information',
    option_b: 'Only binary error codes for efficiency',
    option_c: 'is_error: true plus a human-readable error description explaining what went wrong',
    option_d: 'Full stack traces only',
    correct_answer: 'C',
    explanation: 'Error tool_results should include is_error: true and clear, descriptive error messages that Claude can understand and reason about.',
    difficulty: 'easy'
  },

  // Question 38 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is building a legal document analysis system that requires deep reasoning about complex regulations. When would you consider enabling extended thinking in this agentic workflow?',
    option_a: 'Never - extended thinking is incompatible with agentic loops',
    option_b: 'For the complex reasoning tasks that require deeper analysis of legal precedents and regulations',
    option_c: 'Enable it for every single iteration regardless of task complexity',
    option_d: 'Only when generating simple text summaries',
    correct_answer: 'B',
    explanation: 'Extended thinking is beneficial for complex reasoning tasks where deeper analysis improves decision-making, like analyzing legal documents.',
    difficulty: 'hard'
  },

  // Question 39 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'A junior developer is confused about how tool_use and tool_result blocks connect in your agentic system. They ask how the API knows which result corresponds to which tool request. What do you explain?',
    option_a: 'Each tool_use has a unique ID that must match exactly one tool_result via tool_use_id',
    option_b: 'There\'s no explicit relationship - the API infers it',
    option_c: 'Many tool_results can share the same tool_use_id',
    option_d: 'They\'re implicitly linked by the order they appear',
    correct_answer: 'A',
    explanation: 'Each tool_use block must have exactly one corresponding tool_result block, linked via tool_use_id.',
    difficulty: 'easy'
  },

  // Question 40 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Before deploying your agentic system to production, the QA team asks why you spent time creating detailed tool schemas with clear descriptions and examples. What do you explain is the benefit?',
    option_a: 'It\'s not important - Claude will figure it out',
    option_b: 'Only needed for legal compliance documentation',
    option_c: 'Only affects performance, not correctness',
    option_d: 'Well-defined schemas ensure Claude understands tool capabilities and uses them correctly',
    correct_answer: 'D',
    explanation: 'Well-defined tool schemas ensure Claude correctly understands and uses tools, preventing errors and improving task success.',
    difficulty: 'medium'
  },

  // Question 41 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic workflow is failing during integration testing. Claude requested four tools, but your code only returned tool_result blocks for three of them. What will the API do when it receives this incomplete response?',
    option_a: 'Claude will ignore the missing result and continue',
    option_b: 'The API assumes the missing tool succeeded',
    option_c: 'The API returns a validation error requiring all tool_use blocks to have results',
    option_d: 'It only checks for missing results on the second retry',
    correct_answer: 'C',
    explanation: 'The API validates that all tool_use_ids have corresponding tool_result blocks, returning an error if any are missing.',
    difficulty: 'medium'
  },

  // Question 42 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Analyzing your system\'s behavior, you notice Claude\'s tool choices in iteration 5 seem informed by results from iterations 2 and 3. How does conversation context affect Claude\'s subsequent tool selection decisions?',
    option_a: 'Tools are selected independently - previous context has no effect',
    option_b: 'Previous tool results and conversation history inform which tools Claude selects next',
    option_c: 'Only the immediately previous turn matters',
    option_d: 'Tool selection is randomized each turn',
    correct_answer: 'B',
    explanation: 'Claude considers full conversation history, including previous tool results, when deciding which tools to use next.',
    difficulty: 'medium'
  },

  // Question 43 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic workflow routinely runs 20-30 iterations, and token costs are becoming a concern. What strategy would help reduce token usage while maintaining system effectiveness?',
    option_a: 'Periodically summarize and compress earlier conversation turns',
    option_b: 'Never summarize - always keep complete history',
    option_c: 'Delete all previous messages after each iteration',
    option_d: 'Randomly sample messages to include',
    correct_answer: 'A',
    explanation: 'Periodic summarization and compression of earlier turns reduces token usage while preserving essential information.',
    difficulty: 'medium'
  },

  // Question 44 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system needs to adapt tool availability based on user permissions - admin users get additional tools that regular users don\'t. Can you change which tools are available between loop iterations?',
    option_a: 'No, tool definitions are locked at the first API call',
    option_b: 'Only by restarting the entire conversation',
    option_c: 'Only with special admin API permissions',
    option_d: 'Yes, dynamically add or remove tools based on context between API calls',
    correct_answer: 'D',
    explanation: 'Tool definitions can be modified between API calls, allowing dynamic tool availability based on context.',
    difficulty: 'medium'
  },

  // Question 45 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your production metrics show that 80% of workflow executions are hitting the max_turns limit without completing their tasks. What does this pattern indicate about your agentic system?',
    option_a: 'Everything is working perfectly',
    option_b: 'The system is responding very quickly',
    option_c: 'The loop needs optimization - likely better tool design or improved prompts',
    option_d: 'Token usage is well controlled',
    correct_answer: 'C',
    explanation: 'Regularly hitting max_turns without completing tasks indicates the loop needs better tool design, improved prompts, or architectural changes.',
    difficulty: 'medium'
  },

  // Question 46 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Claude just requested a tool called "get_quantum_data" that doesn\'t exist in your tool definitions. This is likely a hallucination. How should your error handling respond?',
    option_a: 'Silently ignore the request',
    option_b: 'Return an error tool_result explaining the tool does not exist',
    option_c: 'Automatically create the tool on the fly',
    option_d: 'Crash the application to alert developers',
    correct_answer: 'B',
    explanation: 'Return a tool_result with is_error: true explaining the tool doesn\'t exist, allowing Claude to understand and adapt.',
    difficulty: 'easy'
  },

  // Question 47 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your product manager notices that Claude sometimes includes explanatory text before using tools, like "I\'ll search the database for this information." They ask if this text serves a purpose or wastes tokens. What do you explain?',
    option_a: 'This reasoning text provides valuable transparency into Claude\'s decision-making process',
    option_b: 'This is required by the API and cannot be disabled',
    option_c: 'This text wastes tokens and should be eliminated',
    option_d: 'This only appears when debugging mode is enabled',
    correct_answer: 'A',
    explanation: 'Reasoning text alongside tool_use blocks provides visibility into Claude\'s thought process and why it\'s choosing specific tools.',
    difficulty: 'medium'
  },

  // Question 48 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Claude requested three tools: database_query, api_fetch, and file_read. You\'ve executed them and need to return the results. Your colleague asks if the tool_result blocks must be in the same order as the tool_use blocks. What do you tell them?',
    option_a: 'Yes, they must be in alphabetical order by tool name',
    option_b: 'Yes, random order will cause errors',
    option_c: 'Yes, they must be in reverse order from tool_use',
    option_d: 'No, any order works - they\'re matched by tool_use_id, not position',
    correct_answer: 'D',
    explanation: 'Tool results can be returned in any order since they\'re matched by tool_use_id, not position.',
    difficulty: 'medium'
  },

  // Question 49 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re creating tool definitions for your agentic system. A colleague suggests using minimal descriptions to save tokens. How would detailed tool descriptions affect Claude\'s performance?',
    option_a: 'No measurable impact on tool selection',
    option_b: 'Detailed descriptions add confusion',
    option_c: 'Clear, detailed descriptions help Claude select and use tools appropriately',
    option_d: 'Descriptions only affect error messages',
    correct_answer: 'C',
    explanation: 'Clear, detailed tool descriptions help Claude understand when and how to use each tool effectively.',
    difficulty: 'easy'
  },

  // Question 50 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic workflow has a max_turns set to 20, but you notice some tasks complete in just 3-4 iterations. Should you always run to the max_turns limit, or can you exit early?',
    option_a: 'Always run to max_turns to ensure completeness',
    option_b: 'Exit early when stop_reason is end_turn, max_tokens, or success conditions are met',
    option_c: 'Exit after the first tool use to minimize costs',
    option_d: 'Exit randomly to save costs',
    correct_answer: 'B',
    explanation: 'Terminate loops when stop_reason indicates completion (end_turn, max_tokens) or when success conditions are met.',
    difficulty: 'medium'
  },

  // Question 51 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system frequently uses the wrong tools for tasks. The engineering lead asks what you can do to improve tool selection accuracy. What approach would help most?',
    option_a: 'Provide clear examples in system prompts and create well-defined tool schemas with usage guidance',
    option_b: 'Add as many tools as possible to give Claude more options',
    option_c: 'Remove all tool descriptions to simplify',
    option_d: 'Use random tool selection instead',
    correct_answer: 'A',
    explanation: 'Clear examples in system prompts and well-defined tool schemas significantly improve tool selection accuracy.',
    difficulty: 'medium'
  },

  // Question 52 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your database query tool returns 50MB JSON files that blow through context limits. The system architect asks how you should handle large data in tool results. What approach do you recommend?',
    option_a: 'Base64 encode everything for efficiency',
    option_b: 'Always send raw binary data',
    option_c: 'Send the complete dataset every time',
    option_d: 'Summarize or chunk large data, providing structured excerpts relevant to the task',
    correct_answer: 'D',
    explanation: 'For large data, summarize key points or provide structured excerpts to manage token usage while maintaining usefulness.',
    difficulty: 'medium'
  },

  // Question 53 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re implementing a tool that needs to receive configuration settings including nested objects and arrays. A developer asks if tool_use parameters can handle complex JSON structures. What do you tell them?',
    option_a: 'No, only primitive types like strings and numbers are supported',
    option_b: 'Only arrays are supported, not objects',
    option_c: 'Yes, tools can receive complex nested JSON parameters with objects and arrays',
    option_d: 'Only flat string parameters are allowed',
    correct_answer: 'C',
    explanation: 'Tool parameters support complex nested JSON structures, allowing rich data to be passed.',
    difficulty: 'easy'
  },

  // Question 54 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'An agentic workflow failed in production and you\'re trying to debug why. What information would be most valuable for troubleshooting?',
    option_a: 'Only the final response Claude generated',
    option_b: 'Complete conversation history, stop_reasons for each turn, all tool calls, and their results',
    option_c: 'Only the error messages from failed tools',
    option_d: 'Only token count statistics',
    correct_answer: 'B',
    explanation: 'Complete conversation history with stop_reasons, all tool calls, and results provides comprehensive debugging information.',
    difficulty: 'medium'
  },

  // Question 55 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your finance team is concerned about API costs for your agentic system. You mention that prompt caching might help. How can prompt caching reduce costs in agentic workflows?',
    option_a: 'Cache static tool definitions and system prompts to avoid re-sending them each iteration',
    option_b: 'Prompt caching is incompatible with tool use',
    option_c: 'It only caches the final results',
    option_d: 'Caching is automatically disabled in agentic mode',
    correct_answer: 'A',
    explanation: 'Prompt caching can cache tool definitions and static system content, reducing token costs across iterations.',
    difficulty: 'hard'
  },

  // Question 56 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re setting up the initial state for a new agentic workflow. A junior engineer asks what the first message in the conversation should be. What do you tell them?',
    option_a: 'Start with a tool_use block',
    option_b: 'Start with an empty conversation',
    option_c: 'Start with an assistant message',
    option_d: 'Start with a user message containing the task description',
    correct_answer: 'D',
    explanation: 'Agentic loops typically start with a user message containing the task description.',
    difficulty: 'easy'
  },

  // Question 57 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is debating whether to execute tools synchronously (one at a time) or asynchronously (in parallel). The tech lead asks for your recommendation. What do you suggest?',
    option_a: 'Always execute tools synchronously for predictability',
    option_b: 'Always execute tools asynchronously for speed',
    option_c: 'It depends on the use case - independent tools can run in parallel, dependent ones sequentially',
    option_d: 'Tools cannot be executed asynchronously',
    correct_answer: 'C',
    explanation: 'Tool execution can be synchronous or asynchronous depending on requirements; independent tools can run in parallel for efficiency.',
    difficulty: 'medium'
  },

  // Question 58 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Claude needs to first query a database to get an ID, then use that ID to call an API. These tools have a dependency - the second needs data from the first. How should your agentic system handle this?',
    option_a: 'This isn\'t possible with agentic patterns',
    option_b: 'Execute them sequentially across loop iterations - return first result to Claude, let it request the second tool',
    option_c: 'Merge both operations into a single tool',
    option_d: 'Claude never makes dependent tool calls',
    correct_answer: 'B',
    explanation: 'Dependent tool calls are handled across loop iterations: execute tools, return results, let Claude make next calls based on those results.',
    difficulty: 'medium'
  },

  // Question 59 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re noticing Claude sometimes uses expensive API calls when cheaper alternatives would work. Your team asks how you can influence which tools Claude selects in different situations. What\'s the most effective approach?',
    option_a: 'Use the system prompt to provide guidance on when and how to use specific tools',
    option_b: 'Tool selection is random and cannot be influenced',
    option_c: 'The system prompt disables tool use entirely',
    option_d: 'System prompts only affect error handling',
    correct_answer: 'A',
    explanation: 'System prompts provide crucial guidance on tool usage patterns, helping Claude select appropriate tools for different scenarios.',
    difficulty: 'easy'
  },

  // Question 60 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your product team wants real-time visibility into Claude\'s reasoning as it works through complex tasks. They ask if streaming responses are compatible with agentic patterns. What do you tell them?',
    option_a: 'No, streaming disables tool functionality completely',
    option_b: 'Streaming only works for text generation, not tool use',
    option_c: 'Streaming is only available in development environments',
    option_d: 'Yes, streaming is fully supported and provides real-time visibility into reasoning and tool calls',
    correct_answer: 'D',
    explanation: 'Streaming works with agentic patterns, allowing real-time visibility into Claude\'s reasoning and tool calls.',
    difficulty: 'medium'
  },

  // Question 61 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During architecture review, a colleague questions why you\'re setting both max_turns AND max_budget_usd. They argue one should be sufficient. How do you justify using both controls?',
    option_a: 'You\'re right, they\'re redundant and one should be removed',
    option_b: 'Both are required by the API specification',
    option_c: 'Together they provide defense-in-depth: max_turns prevents excessive iterations, max_budget_usd caps spending',
    option_d: 'There\'s no benefit to setting both',
    correct_answer: 'C',
    explanation: 'Setting both limits provides layered protection: max_turns prevents excessive iterations, max_budget_usd prevents cost overruns.',
    difficulty: 'medium'
  },

  // Question 62 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your UX designer asks how users should experience your agentic workflow. Should they only see the final result, or is there value in showing intermediate steps?',
    option_a: 'Always hide the process and only show final results',
    option_b: 'Show intermediate tool calls and reasoning to provide transparency and build trust',
    option_c: 'Only show the final result, never the process',
    option_d: 'Only show errors, hide everything else',
    correct_answer: 'B',
    explanation: 'Showing intermediate tool calls and reasoning provides transparency, helps users understand progress, and builds trust.',
    difficulty: 'medium'
  },

  // Question 63 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'One of your tools occasionally hangs when calling a slow external API. Your system architect asks what timeout strategy you should implement. What\'s the best approach?',
    option_a: 'Implement reasonable timeouts and return tool_result with is_error: true when timeouts occur',
    option_b: 'Never set timeouts - tools should wait as long as needed',
    option_c: 'Wait indefinitely to ensure no data is lost',
    option_d: 'Retry forever until the tool succeeds',
    correct_answer: 'A',
    explanation: 'Implement reasonable timeouts for tool execution and report timeouts via tool_result with is_error: true.',
    difficulty: 'medium'
  },

  // Question 64 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your research team wants to enable extended thinking to improve reasoning quality in your agentic workflow that already uses tools. A developer asks if these features are compatible. What do you tell them?',
    option_a: 'No, extended thinking and tool use are mutually exclusive',
    option_b: 'Only in development mode',
    option_c: 'Only certain models support this combination',
    option_d: 'Yes, extended thinking can enhance tool selection and reasoning in agentic workflows',
    correct_answer: 'D',
    explanation: 'Extended thinking and tool use work together, with extended thinking improving reasoning for tool selection.',
    difficulty: 'hard'
  },

  // Question 65 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your file analysis tool just returned a 2MB JSON result. When you send this as a tool_result, the API request fails. What\'s happening and how should you fix it?',
    option_a: 'The API automatically truncates large results',
    option_b: 'Results are automatically compressed',
    option_c: 'The request fails due to context overflow - you need to manage result size by summarizing',
    option_d: 'Older messages are automatically removed to make room',
    correct_answer: 'C',
    explanation: 'If tool_result content causes context overflow, the API request fails. Applications must manage result size through summarization or chunking.',
    difficulty: 'medium'
  },

  // Question 66 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You notice Claude is calling your expensive API tool far too frequently - 20 times per workflow when 2-3 calls would suffice. How can you reduce this overuse?',
    option_a: 'Remove the tool entirely',
    option_b: 'Use system prompt guidance and tool descriptions to set expectations about when to use this tool',
    option_c: 'It\'s not possible to influence tool usage frequency',
    option_d: 'Randomly reject tool calls to reduce usage',
    correct_answer: 'B',
    explanation: 'System prompts and tool descriptions can guide usage frequency, helping Claude understand when tools should be used sparingly.',
    difficulty: 'medium'
  },

  // Question 67 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is building a complex workflow orchestration system where multiple AI agents coordinate to complete tasks. The architect asks how agentic loops relate to this broader orchestration vision. What do you explain?',
    option_a: 'Agentic loops provide the foundational pattern for building autonomous workflow orchestration',
    option_b: 'These are completely unrelated concepts',
    option_c: 'Workflow orchestration replaces the need for agentic loops',
    option_d: 'They conflict and cannot be used together',
    correct_answer: 'A',
    explanation: 'Agentic loops provide the foundational pattern for building more complex autonomous workflow orchestration systems.',
    difficulty: 'medium'
  },

  // Question 68 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During code review, you notice a colleague\'s code directly executes tools without validating the parameters Claude provided. Should you require parameter validation before execution?',
    option_a: 'No, Claude always sends valid parameters',
    option_b: 'Only validate in development, skip in production',
    option_c: 'Only validate parameters for external API calls',
    option_d: 'Yes, always implement parameter validation to catch unexpected inputs',
    correct_answer: 'D',
    explanation: 'Always validate tool_use parameters before execution to catch unexpected inputs and prevent errors.',
    difficulty: 'easy'
  },

  // Question 69 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your database tool returns poorly formatted data and Claude struggles to use it effectively. The PM asks how result formatting affects Claude\'s performance. What do you explain?',
    option_a: 'Formatting has no impact on Claude\'s reasoning',
    option_b: 'Formatting only affects execution performance',
    option_c: 'Well-structured, clear results significantly improve Claude\'s ability to understand and reason',
    option_d: 'Only JSON format is supported',
    correct_answer: 'C',
    explanation: 'Clear, well-structured tool results directly improve Claude\'s ability to understand outcomes and make informed decisions.',
    difficulty: 'medium'
  },

  // Question 70 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your external API tool is experiencing 50% failure rates during an outage. The system keeps retrying but fails every time. How should you implement graceful degradation?',
    option_a: 'Keep retrying indefinitely until success',
    option_b: 'Return descriptive error messages via tool_result and let Claude adapt or suggest alternatives',
    option_c: 'Crash the application to force manual intervention',
    option_d: 'Silently ignore the failures',
    correct_answer: 'B',
    explanation: 'Return clear error messages via tool_result blocks, allowing Claude to understand failures and adapt its approach.',
    difficulty: 'medium'
  },

  // Question 71 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your DevOps team is implementing logging for your production agentic system. They ask what should be logged to enable effective debugging and monitoring. What do you recommend?',
    option_a: 'Log every API call, tool use, tool result, and stop_reason for complete visibility',
    option_b: 'No logging is needed in production',
    option_c: 'Only log errors and failures',
    option_d: 'Only log successful completions',
    correct_answer: 'A',
    explanation: 'Comprehensive logging of API calls, tool uses, results, and stop_reasons enables debugging and optimization.',
    difficulty: 'easy'
  },

  // Question 72 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system handles both simple queries (2-3 iterations) and complex research tasks (20+ iterations). Can you adjust max_turns based on the task type, or must it be fixed?',
    option_a: 'max_turns must be identical for all tasks',
    option_b: 'You can only decrease it, never increase it',
    option_c: 'Dynamic adjustment is not supported',
    option_d: 'Yes, you can adjust max_turns based on task requirements and complexity',
    correct_answer: 'D',
    explanation: 'You can dynamically adjust max_turns between iterations based on task complexity or progress.',
    difficulty: 'medium'
  },

  // Question 73 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re designing a new set of tools for your agentic system. The team asks what principles should guide your tool design. What\'s most important?',
    option_a: 'Create as many tools as possible for maximum flexibility',
    option_b: 'Minimize effort by creating generic tools',
    option_c: 'Design clear, focused tools that solve specific problems with excellent descriptions',
    option_d: 'Create tools with the most complex parameters possible',
    correct_answer: 'C',
    explanation: 'Effective tools are clear, focused on specific problems, and have excellent descriptions that guide Claude\'s usage.',
    difficulty: 'easy'
  },

  // Question 74 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic workflow has three different valid approaches to solve a problem. A developer asks if you should force Claude to use a specific sequence. What do you recommend?',
    option_a: 'Force the specific sequence you prefer',
    option_b: 'Let Claude choose based on context and its reasoning',
    option_c: 'Use whichever sequence is shortest',
    option_d: 'Randomize the choice',
    correct_answer: 'B',
    explanation: 'When multiple valid approaches exist, Claude\'s reasoning allows it to choose the most appropriate path for the specific context.',
    difficulty: 'medium'
  },

  // Question 75 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Before deploying your new agentic system to production, the QA lead asks about your testing strategy. What comprehensive approach do you propose?',
    option_a: 'Test with various realistic scenarios, edge cases, and failure modes',
    option_b: 'Only test in production with real users',
    option_c: 'No testing is needed - Claude is reliable',
    option_d: 'Only test the happy path',
    correct_answer: 'A',
    explanation: 'Comprehensive testing including scenarios, edge cases, and failure modes ensures robust systems.',
    difficulty: 'easy'
  },

  // Question 76 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic workflow\'s conversation history is growing to 50+ messages, but only the most recent 20 are relevant to the current task. Can you strategically remove older messages to manage context size?',
    option_a: 'No, you must keep all history forever',
    option_b: 'You can only remove user messages',
    option_c: 'You can only remove tool results',
    option_d: 'Yes, you can strategically remove less relevant messages while preserving critical information',
    correct_answer: 'D',
    explanation: 'Strategic pruning of less relevant messages helps manage context size while preserving critical information.',
    difficulty: 'medium'
  },

  // Question 77 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'A junior developer is confused about when to exit the agentic loop versus when to ask for user approval. What\'s the key difference between stop_reason "end_turn" and "pause_turn"?',
    option_a: 'They mean the same thing',
    option_b: 'pause_turn indicates an error occurred',
    option_c: 'end_turn means Claude finished naturally, pause_turn means Claude wants explicit user approval',
    option_d: 'end_turn always requires tool execution',
    correct_answer: 'C',
    explanation: 'end_turn indicates natural completion, while pause_turn requests explicit user approval before continuing - crucial for sensitive operations.',
    difficulty: 'medium'
  },

  // Question 78 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your VP of Engineering is evaluating whether to invest in implementing agentic patterns across your product. They ask about benchmark evidence. What improvement do LAB-Bench results show for agentic loops?',
    option_a: 'No measurable improvement',
    option_b: '50%+ improvement in complex task success rates',
    option_c: '5% improvement',
    option_d: 'Performance actually decreases',
    correct_answer: 'B',
    explanation: 'LAB-Bench demonstrates that agentic loops provide 50%+ improvement in success rates for complex tasks.',
    difficulty: 'medium'
  },

  // Question 79 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'After months of running agentic workflows in production, the team does a retrospective on what made some systems successful and others fail. What factors are most critical for success?',
    option_a: 'Well-designed tools, clear system prompts, and appropriate safety limits working together',
    option_b: 'Simply having a large number of tools available',
    option_c: 'Optimizing purely for execution speed',
    option_d: 'Using the largest model available',
    correct_answer: 'A',
    explanation: 'Success depends on well-designed tools, effective prompts, and appropriate safety limits working together.',
    difficulty: 'easy'
  },

  // Question 80 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is implementing cost controls for your agentic system. A developer asks about the difference between max_turns and max_budget_usd. How do you explain what each one controls?',
    option_a: 'They\'re equivalent and serve the same purpose',
    option_b: 'max_turns is deprecated and should not be used',
    option_c: 'max_budget_usd is only available for premium tier customers',
    option_d: 'max_turns limits the number of loop iterations, max_budget_usd caps total spending',
    correct_answer: 'D',
    explanation: 'max_turns limits the number of loop iterations, while max_budget_usd limits total spending - they serve complementary purposes.',
    difficulty: 'easy'
  },

  // Question 81 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your database tool occasionally fails due to transient network issues. You\'re implementing retry logic to handle these failures. What retry strategy should you use?',
    option_a: 'Retry infinitely until success',
    option_b: 'Never retry - fail immediately',
    option_c: 'Implement exponential backoff with maximum retry limits',
    option_d: 'Only retry for server-side tools',
    correct_answer: 'C',
    explanation: 'Implement exponential backoff and maximum retry limits to handle transient failures without infinite loops.',
    difficulty: 'medium'
  },

  // Question 82 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'A new developer asks where the system prompt goes in your agentic conversation structure. They\'re confused because it doesn\'t seem to fit the user/assistant alternation. What do you explain?',
    option_a: 'System prompts are not supported in agentic patterns',
    option_b: 'System prompts are provided as a separate API parameter, not in the message history',
    option_c: 'System prompts must be the first message in the array',
    option_d: 'System prompts replace user messages',
    correct_answer: 'B',
    explanation: 'System prompts are provided as a separate parameter and persist across all turns, not as part of the message history.',
    difficulty: 'medium'
  },

  // Question 83 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your customer database tool returns records containing PII (personally identifiable information) like social security numbers. The security team asks how you should handle this sensitive data before sending it to Claude. What do you implement?',
    option_a: 'Filter and redact sensitive information before returning results to Claude',
    option_b: 'Always return the full unfiltered data',
    option_c: 'Encrypt all results before sending',
    option_d: 'Never use tools that access sensitive data',
    correct_answer: 'A',
    explanation: 'Filter and redact sensitive information from tool results before sending to Claude, maintaining security.',
    difficulty: 'medium'
  },

  // Question 84 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re building a banking application where Claude helps process transactions. Before executing any financial transaction, you need explicit human approval. When should your system check for and handle the pause_turn stop_reason?',
    option_a: 'Never - pause_turn is deprecated',
    option_b: 'On every single turn regardless of action',
    option_c: 'Only during debugging',
    option_d: 'For actions requiring explicit human approval, like financial transactions or sensitive operations',
    correct_answer: 'D',
    explanation: 'pause_turn is designed for actions requiring explicit human approval, such as sensitive operations like financial transactions.',
    difficulty: 'medium'
  },

  // Question 85 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You\'re creating tool schemas for a new agentic system. A product manager asks what should go into these schemas to maximize Claude\'s understanding. What elements do you include?',
    option_a: 'Just minimal function names',
    option_b: 'Make them as verbose as possible with every detail',
    option_c: 'Clear descriptions, well-defined parameter types, constraints, and usage examples',
    option_d: 'Code comments are sufficient',
    correct_answer: 'C',
    explanation: 'Tool schemas should have clear descriptions, well-defined parameter types, constraints, and optional usage examples.',
    difficulty: 'medium'
  },

  // Question 86 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During peak traffic, your agentic system starts failing with rate limit errors from the Anthropic API. What happens to your running loops when they hit these rate limits?',
    option_a: 'The loop continues unaffected',
    option_b: 'The API returns a rate limit error that your code should handle gracefully with retry logic',
    option_c: 'The system automatically retries infinitely',
    option_d: 'The loop pauses for 24 hours automatically',
    correct_answer: 'B',
    explanation: 'Rate limit errors are returned by the API and should be handled gracefully with retry logic and backoff.',
    difficulty: 'medium'
  },

  // Question 87 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your API tool sometimes returns plain text error messages and other times returns structured JSON data. A developer asks if tool_result content can handle both formats. What do you tell them?',
    option_a: 'Yes, tool_result content can be plain text, JSON, or structured data',
    option_b: 'No, only one format is allowed per tool',
    option_c: 'Only binary data is supported',
    option_d: 'Only plain text is allowed',
    correct_answer: 'A',
    explanation: 'tool_result content can be text, JSON, or structured data that Claude can parse and reason about.',
    difficulty: 'easy'
  },

  // Question 88 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team needs to force Claude to use a specific tool for certain workflows, while allowing automatic tool selection for others. The developer asks about the tool_choice parameter. What does it control?',
    option_a: 'It\'s not used in agentic patterns',
    option_b: 'It\'s only for debugging purposes',
    option_c: 'It\'s a deprecated parameter',
    option_d: 'It can force a specific tool, require any tool use, or allow automatic selection',
    correct_answer: 'D',
    explanation: 'tool_choice can force a specific tool, require any tool use, or allow auto selection based on Claude\'s reasoning.',
    difficulty: 'medium'
  },

  // Question 89 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your batch processing tool successfully processed 8 out of 10 records, but failed on 2 due to validation errors. How should you report this mixed result to Claude?',
    option_a: 'Only return the successful parts',
    option_b: 'Mark the entire operation as error with is_error: true',
    option_c: 'Return a comprehensive result detailing which operations succeeded and which failed with reasons',
    option_d: 'Retry all 10 operations',
    correct_answer: 'C',
    explanation: 'Return comprehensive results detailing which operations succeeded and failed, allowing Claude to reason about next steps.',
    difficulty: 'medium'
  },

  // Question 90 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Claude keeps requesting tools that don\'t exist in your system, like "get_future_predictions" or "access_private_database". What best practice helps prevent these tool hallucinations?',
    option_a: 'Disable all tools to prevent confusion',
    option_b: 'Provide accurate tool schemas with clear descriptions and validate all tool_use parameters',
    option_c: 'Use only generic tool names',
    option_d: 'Hide tool descriptions completely',
    correct_answer: 'B',
    explanation: 'Accurate tool schemas, clear descriptions, and parameter validation prevent Claude from hallucinating nonexistent tools.',
    difficulty: 'medium'
  },

  // Question 91 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your SRE team is implementing comprehensive monitoring for production agentic workflows. They ask how frequently key metrics should be captured. What do you recommend?',
    option_a: 'Log metrics every iteration including tokens, costs, and duration',
    option_b: 'Never log metrics - it adds too much overhead',
    option_c: 'Only log when errors occur',
    option_d: 'Only log at the start and end of workflows',
    correct_answer: 'A',
    explanation: 'Log metrics every iteration to enable detailed monitoring, debugging, and optimization.',
    difficulty: 'easy'
  },

  // Question 92 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team is evaluating server-side tools for a latency-sensitive real-time application. What key advantage do server-side tools provide compared to client-side tools?',
    option_a: 'They cost less per execution',
    option_b: 'They\'re more complex to implement',
    option_c: 'They offer no advantages',
    option_d: 'They execute within Anthropic\'s infrastructure, providing lower latency',
    correct_answer: 'D',
    explanation: 'Server-side tools execute within Anthropic infrastructure, providing lower latency and seamless integration.',
    difficulty: 'medium'
  },

  // Question 93 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic system is becoming complex, and new team members struggle to understand how it works. The engineering manager asks what documentation is essential for maintainability. What do you recommend?',
    option_a: 'No documentation needed - the code is self-explanatory',
    option_b: 'Just add code comments',
    option_c: 'Document the loop logic, tool schemas, error handling patterns, and monitoring approach',
    option_d: 'A simple README is sufficient',
    correct_answer: 'C',
    explanation: 'Comprehensive documentation of loop logic, tool schemas, error handling, and monitoring enables effective maintenance.',
    difficulty: 'easy'
  },

  // Question 94 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your slowest tool takes 5 seconds to execute, and workflows typically run 10 iterations. Users are complaining about slow response times. What do you explain about tool latency\'s effect on overall performance?',
    option_a: 'Tool latency has no impact on total runtime',
    option_b: 'High latency compounds across iterations, significantly impacting total runtime',
    option_c: 'Latency only affects API costs, not user experience',
    option_d: 'The system automatically optimizes latency',
    correct_answer: 'B',
    explanation: 'Tool latency compounds across loop iterations, making optimization critical for responsive systems.',
    difficulty: 'medium'
  },

  // Question 95 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your agentic workflow starts with a powerful expensive model for complex reasoning, then switches to a faster cheaper model for simple execution tasks. Is this model switching between iterations supported?',
    option_a: 'Yes, you can switch models between API calls to optimize for different needs',
    option_b: 'No, the model must remain constant throughout the workflow',
    option_c: 'Only with special enterprise permissions',
    option_d: 'Models switch automatically',
    correct_answer: 'A',
    explanation: 'You can use different models for different iterations, enabling cost optimization or capability adjustments.',
    difficulty: 'medium'
  },

  // Question 96 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'During a security audit, the team reviews your agentic tool implementation. What security consideration is most critical for tools that execute based on Claude\'s requests?',
    option_a: 'Security isn\'t a concern - the system is inherently secure',
    option_b: 'Only log successful operations',
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
    question: 'A product manager asks how Claude knows when a task is complete and it should stop requesting tools. What mechanism does Claude use to determine task completion?',
    option_a: 'Random selection after a few iterations',
    option_b: 'Claude always uses all available tools',
    option_c: 'Claude reasons about whether it has gathered sufficient information to complete the task',
    option_d: 'Only time-based limits determine completion',
    correct_answer: 'C',
    explanation: 'Claude uses reasoning to determine when sufficient information has been gathered, returning end_turn when complete.',
    difficulty: 'medium'
  },

  // Question 98 - Answer: B
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Claude just requested three tools: two database queries that don\'t depend on each other, and one API call that needs results from both queries. What execution pattern should you implement?',
    option_a: 'Never execute tools concurrently',
    option_b: 'Execute the two independent database queries in parallel, then run the dependent API call sequentially',
    option_c: 'Always execute strictly sequentially',
    option_d: 'Execute in random order',
    correct_answer: 'B',
    explanation: 'Execute independent tools in parallel for efficiency, but handle dependent tools sequentially.',
    difficulty: 'medium'
  },

  // Question 99 - Answer: A
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'You accidentally created tool_result blocks with mismatched tool_use_id values - they don\'t correspond to any of Claude\'s tool_use requests. What will happen when you send this to the API?',
    option_a: 'The API returns a validation error',
    option_b: 'Claude silently ignores the mismatched results',
    option_c: 'Results are automatically matched by position',
    option_d: 'Claude guesses which results belong to which tools',
    correct_answer: 'A',
    explanation: 'The API requires exact tool_use_id matching between tool_use and tool_result blocks, returning an error otherwise.',
    difficulty: 'easy'
  },

  // Question 100 - Answer: D
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your CTO is reviewing benchmark data to justify investment in agentic patterns for your engineering tools. They ask about SWE-bench results, which measure performance on real software engineering tasks. What improvement do agentic patterns demonstrate?',
    option_a: 'No improvement over single-turn approaches',
    option_b: 'Performance actually decreases',
    option_c: 'Minimal 5% improvement',
    option_d: 'Significant improvement in complex software engineering task completion',
    correct_answer: 'D',
    explanation: 'SWE-bench results demonstrate significant improvements when using agentic patterns for complex software engineering tasks.',
    difficulty: 'medium'
  },

  // Question 101 - Answer: C
  {
    week: 1,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Agentic Loops & Core API',
    question: 'Your team built an agentic workflow that completes tasks in 12 iterations on average. A colleague claims this proves the system is inefficient and should be optimized down to 3 iterations. How do you respond?',
    option_a: 'You\'re right - fewer iterations is always better',
    option_b: 'Iteration count is irrelevant to system quality',
    option_c: 'Multiple iterations enable thorough problem-solving; what matters is task success rate, not minimizing iterations',
    option_d: 'All workflows should complete in exactly the same number of iterations',
    correct_answer: 'C',
    explanation: 'The value of agentic loops is enabling iterative reasoning and tool use until task completion - iteration count should match task complexity, not be artificially minimized.',
    difficulty: 'medium'
  },
];
