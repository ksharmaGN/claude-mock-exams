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

// Topic 2: Multi-Agent Orchestration (100 questions)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic2Questions: Question[] = [
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
];
