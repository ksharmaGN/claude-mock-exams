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

// Topic 2: Multi-Agent Orchestration (100 questions: #101-200)
// Answer Distribution: EXACTLY 25 A, 25 B, 25 C, 25 D (RANDOMLY SHUFFLED)

export const topic2Questions: Question[] = [
  // Question 101 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your customer service platform needs a supervisor agent that assigns tickets to specialized agents (billing, technical, account). When a ticket requires multiple specialties, which orchestration pattern enables the supervisor to coordinate sub-agents and synthesize their responses?',
    option_a: 'Shared context pattern to reduce API costs',
    option_b: 'Peer-to-peer mesh where all agents communicate directly',
    option_c: 'Orchestrator-worker pattern with centralized coordination',
    option_d: 'Multi-model ensemble running simultaneously',
    correct_answer: 'C',
    explanation: 'The orchestrator-worker pattern uses a coordinator (supervisor) agent to decompose complex tickets, route work to specialized agents (billing, technical, account), and synthesize their responses into cohesive customer replies.',
    difficulty: 'easy'
  },

  // Question 102 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your startup is building a market research tool using Claude Code Agent Teams with a research lead, data analyst, and report writer. How should responsibilities be divided?',
    option_a: 'Lead agent defines research strategy, then delegates data collection to analyst and report creation to writer',
    option_b: 'All three agents independently research different topics without coordination',
    option_c: 'Agents vote democratically on which research approach to take',
    option_d: 'Single generalist agent handles research, analysis, and writing sequentially',
    correct_answer: 'A',
    explanation: 'The delegation model in Agent Teams has a lead agent that plans the overall research strategy while specialist agents (analyst, writer) execute their domain-specific tasks, ensuring coordinated yet specialized work.',
    difficulty: 'medium'
  },

  // Question 103 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your e-commerce platform needs to analyze 1000 product reviews across multiple categories (electronics, clothing, home goods). Sequential processing takes 30 minutes. What is the key advantage of using parallel agents?',
    option_a: 'Lower API costs per review analyzed',
    option_b: 'Multiple category-specific agents execute concurrently, reducing total time to ~5 minutes',
    option_c: 'Simpler code structure than single-agent loops',
    option_d: 'Reduced token usage across all agents',
    correct_answer: 'B',
    explanation: 'Parallelization allows independent subtasks (analyzing different product categories) to be executed concurrently by specialized agents, significantly reducing overall completion time from 30 minutes to approximately 5 minutes.',
    difficulty: 'easy'
  },

  // Question 104 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your legal document review system has three specialized agents: contracts, compliance, and risk. During a complex merger review, the contracts agent keeps seeing compliance findings in its context, causing confusion. How should context isolation work?',
    option_a: 'All three agents share the same conversation history for collaboration',
    option_b: 'Agents can read each other\'s memory to stay informed',
    option_c: 'Context is merged every 10 minutes for synchronization',
    option_d: 'Each agent maintains its own isolated session thread, receiving only relevant handoff context',
    correct_answer: 'D',
    explanation: 'Each agent should maintain its own session thread with isolated context to prevent cross-contamination. The contracts agent should only see contract-specific context, not unrelated compliance findings, ensuring focused and accurate analysis.',
    difficulty: 'medium'
  },

  // Question 105 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your medical transcription service struggles with accuracy when a single generalist agent handles all specialties (cardiology, oncology, radiology). Quality scores are 75%. How should you redesign using the specialization pattern?',
    option_a: 'Let all agents learn from each other\'s mistakes over time',
    option_b: 'Have agents compete for transcription tasks to improve performance',
    option_c: 'Create domain-focused agents with specialty-specific medical terminology and context',
    option_d: 'Keep using generic agents but provide more training examples',
    correct_answer: 'C',
    explanation: 'The specialization pattern creates domain-focused agents (cardiology, oncology, radiology) with expert knowledge in their specific medical specialty, significantly improving accuracy over a generalist approach.',
    difficulty: 'easy'
  },

  // Question 106 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your customer support chatbot (Haiku-powered tier-1 agent) handles 85% of queries successfully. For complex cases requiring deep reasoning about product architecture, it fails. When should you implement the escalation pattern?',
    option_a: 'When queries exceed tier-1 capabilities, escalate to Sonnet-powered tier-2 agent with deeper expertise',
    option_b: 'Increase API rate limits for the Haiku agent to handle more requests',
    option_c: 'Escalate user privileges to access premium support',
    option_d: 'Upgrade infrastructure to run more Haiku instances',
    correct_answer: 'A',
    explanation: 'The escalation pattern routes complex queries that exceed the tier-1 Haiku agent\'s capabilities to a more capable tier-2 Sonnet agent with deeper reasoning abilities and product architecture knowledge.',
    difficulty: 'medium'
  },

  // Question 107 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your content pipeline has three agents: research agent gathers sources, synthesis agent creates draft, and editor agent polishes content. The editor keeps running before synthesis completes. What determines correct execution order?',
    option_a: 'Random selection based on agent availability',
    option_b: 'Chained linear dependencies: research → synthesis → editing',
    option_c: 'Alphabetical by agent name (editor, research, synthesis)',
    option_d: 'Whichever agent becomes available first',
    correct_answer: 'B',
    explanation: 'Sequential orchestration follows chained linear order based on task dependencies. The editor agent must wait for synthesis output, which requires research output first, ensuring proper information flow.',
    difficulty: 'easy'
  },

  // Question 108 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your software development agent team (architect, backend dev, frontend dev, QA) needs to coordinate on building a new feature. Tasks have complex dependencies (frontend needs API endpoints, QA needs completed code). What coordination mechanism is essential?',
    option_a: 'A physical Kanban board for daily standups',
    option_b: 'A visualization tool showing agent activity only',
    option_c: 'A dashboard tracking agent performance metrics',
    option_d: 'A shared task board tracking work items, dependencies, assignments, and completion status',
    correct_answer: 'D',
    explanation: 'A task board in Agent Teams provides centralized tracking of tasks, their dependencies (frontend depends on backend API), assignments (which agent owns what), and completion status, enabling coordinated workflow across specialized agents.',
    difficulty: 'medium'
  },

  // Question 109 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your data science team has three agents: @DataCollector gathers datasets, @Analyst performs analysis, @Visualizer creates charts. The Analyst needs to request specific data subsets from Collector. How should agents communicate?',
    option_a: 'Direct API calls between Analyst and Collector agents',
    option_b: 'Shared memory where Analyst reads Collector\'s thoughts',
    option_c: 'Explicit @DataCollector mentions with structured message requests',
    option_d: 'Automatic context sharing via agent telepathy',
    correct_answer: 'C',
    explanation: 'Agent Teams use explicit inter-agent messaging with @mentions (@DataCollector) and structured message passing, allowing Analyst to make clear, traceable requests for specific data subsets.',
    difficulty: 'medium'
  },

  // Question 110 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your documentation team uses Agent Teams with a researcher, writer, and editor working on the same project. The writer needs to access research files, and editor needs to modify draft documents. What resources are shared across agents?',
    option_a: 'Shared filesystem for documents and vault for API credentials',
    option_b: 'Only conversation history across all agents',
    option_c: 'API keys exclusively, no file access',
    option_d: 'Nothing - agents work in complete isolation',
    correct_answer: 'A',
    explanation: 'Agent Teams share filesystem (for collaborative file access to research and drafts) and vault (for secure credential storage), while maintaining isolated conversation contexts for each agent.',
    difficulty: 'easy'
  },

  // Question 111 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your code review coordinator agent is supposed to route code to security, performance, and testing specialists. Instead, it starts analyzing security vulnerabilities itself, missing critical performance issues. Why is this problematic?',
    option_a: 'Coordinators have limited capabilities compared to specialists',
    option_b: 'It violates Claude API terms of service',
    option_c: 'Cost optimization - coordinators should use cheaper models',
    option_d: 'Violates separation of concerns, causing the coordinator to miss its core routing responsibilities',
    correct_answer: 'D',
    explanation: 'The coordinator should focus exclusively on task decomposition, routing to specialists, and synthesizing results. Doing specialist work (security analysis) causes role confusion and prevents the coordinator from fulfilling its coordination duties, leading to workflow failures.',
    difficulty: 'medium'
  },

  // Question 112 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your market analysis system runs 5 agents in parallel analyzing different sectors. Agent analyzing tech stocks keeps seeing automotive stock context from previous runs, causing incorrect correlations. What is the benefit of fresh context per agent?',
    option_a: 'Lower memory usage across agent instances',
    option_b: 'Prevents context pollution from other agents, keeping tech agent focused on tech stocks only',
    option_c: 'Faster API responses due to smaller context windows',
    option_d: 'Automatic error recovery when context gets corrupted',
    correct_answer: 'B',
    explanation: 'Fresh context per agent prevents context pollution from other agents\' work (automotive data bleeding into tech analysis) and maintains each agent\'s focus on its specific task domain.',
    difficulty: 'medium'
  },

  // Question 113 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your legal document workflow has Agent A extract key clauses, then transfers work to Agent B for risk assessment. Agent B keeps failing because it lacks clause context. What is a proper handoff?',
    option_a: 'Transfer API credentials from Agent A to Agent B',
    option_b: 'Switch from Claude Sonnet to Claude Opus mid-task',
    option_c: 'Explicit transfer including extracted clauses, document context, and assessment requirements',
    option_d: 'Automatic failover from Agent A to Agent B on timeout',
    correct_answer: 'C',
    explanation: 'A handoff is the explicit transfer of work and necessary context from Agent A (extracted clauses, document type, jurisdiction) to Agent B (risk assessment agent), ensuring the receiving agent has everything needed to continue work.',
    difficulty: 'easy'
  },

  // Question 114 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your data pipeline has three worker agents (ingestion, transformation, validation). You allow direct worker-to-worker communication. Now validation sometimes messages ingestion to re-fetch data while transformation is mid-process, causing data inconsistency. What is the primary risk?',
    option_a: 'Creates coordination complexity, race conditions, and potential deadlocks between workers',
    option_b: 'Increases API costs from redundant agent-to-agent calls',
    option_c: 'Violates data security policies by exposing worker credentials',
    option_d: 'Reduces validation accuracy from direct messaging',
    correct_answer: 'A',
    explanation: 'Direct worker-to-worker communication creates coordination complexity (who controls the flow?), race conditions (transformation using old data while ingestion refetches), and potential deadlocks (circular dependencies), making the system unpredictable and hard to debug.',
    difficulty: 'medium'
  },

  // Question 115 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your research platform receives diverse queries: some need 2 agents (summary + analysis), others need 5 agents (translation + research + fact-check + synthesis + citation). Pre-coded workflows can\'t handle this variety. What does dynamic workflow orchestration (2025) enable?',
    option_a: 'Static predefined workflows for each query type',
    option_b: 'On-the-fly generation of custom orchestration based on query complexity and requirements',
    option_c: 'Manual workflow definition by operators for each query',
    option_d: 'Single-agent execution that adapts its approach',
    correct_answer: 'B',
    explanation: 'Dynamic workflow orchestration (2025) enables systems to analyze incoming queries and generate custom orchestration scripts on-the-fly, adapting agent count, routing, and coordination patterns based on specific task requirements.',
    difficulty: 'hard'
  },

  // Question 116 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your video production pipeline has 4 agents: script writer, voiceover generator, video editor, and quality checker. The video editor keeps running before voiceover completes, causing sync issues. How should task dependencies be managed?',
    option_a: 'Ignore dependencies and execute all agents in parallel for speed',
    option_b: 'Manual coordination where operators trigger each agent',
    option_c: 'Random execution order and hope dependencies resolve',
    option_d: 'Explicit dependency DAG: script → voiceover, script → editing, both → QA',
    correct_answer: 'D',
    explanation: 'Task dependencies should be explicitly tracked in a dependency graph with prerequisite enforcement. Video editing requires completed script (not voiceover), while QA requires both voiceover and editing to complete, ensuring correct execution order.',
    difficulty: 'medium'
  },

  // Question 117 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your financial report generation system uses 3 agents: data extractor, calculator, and formatter. The calculator sometimes outputs invalid JSON, breaking the formatter. When should validation occur in the workflow?',
    option_a: 'Validation is optional - only check final report quality',
    option_b: 'Manual inspection of calculator output by operators',
    option_c: 'Automated schema validation after each subtask before passing to next agent',
    option_d: 'User acceptance testing at the end only',
    correct_answer: 'C',
    explanation: 'Result validation in dynamic workflows automatically verifies that each subtask output (calculator JSON) meets requirements (valid schema, expected fields) before proceeding, preventing cascading failures to downstream agents.',
    difficulty: 'medium'
  },

  // Question 118 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your travel planning system has 3 specialist agents: flight finder suggests "Delta 123 $450", hotel agent suggests "Marriott $200/night", activity agent suggests "Museum tour $50". What is the coordinator\'s role in producing the final itinerary?',
    option_a: 'Combine outputs into coherent itinerary, reconcile timing conflicts, calculate total cost',
    option_b: 'Execute flight, hotel, and activity searches itself',
    option_c: 'Store the three agent outputs in database only',
    option_d: 'Forward three separate responses unchanged to user',
    correct_answer: 'A',
    explanation: 'The coordinator synthesizes results by combining outputs (flight + hotel + activities), reconciling conflicts (arrival time vs check-in), and creating a coherent unified itinerary rather than just forwarding raw specialist outputs.',
    difficulty: 'easy'
  },

  // Question 119 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your e-commerce platform has inventory and pricing specialist agents. The pricing agent starts writing inventory forecasts to the database, duplicating and conflicting with the inventory agent\'s work. Why avoid cross-domain writes?',
    option_a: 'Performance degradation from multiple database writers',
    option_b: 'Prevents scope creep, maintains clear ownership (inventory agent owns forecasts), avoids conflicts',
    option_c: 'API rate limitations prevent multiple agents writing',
    option_d: 'Database storage constraints require single writer',
    correct_answer: 'B',
    explanation: 'Avoiding cross-domain writes prevents scope creep (pricing agent doing inventory work), maintains clear expertise boundaries (inventory agent owns forecasting), and prevents data conflicts from multiple agents writing to same domain.',
    difficulty: 'medium'
  },

  // Question 120 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your enterprise document processing system needs to analyze 10,000 contracts simultaneously using 50+ specialized agents (contract law, real estate law, IP law, risk assessment, compliance, etc.). What is large fleet coordination (2025)?',
    option_a: 'Managing physical GPU servers for model hosting',
    option_b: 'Scaling a single generalist agent to handle more load',
    option_c: 'Managing a small team of 3-5 agents',
    option_d: 'Orchestrating 50+ specialized agents simultaneously with load balancing and dependency management',
    correct_answer: 'D',
    explanation: 'Large fleet coordination involves managing many agents (50+) simultaneously to handle complex, large-scale workflows efficiently, including load balancing across agent types and managing inter-agent dependencies at scale.',
    difficulty: 'hard'
  },

  // Question 121 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your medical diagnosis system has specialists in cardiology, neurology, and orthopedics. A patient presents with chest pain. Your coordinator keeps randomly assigning cases to orthopedics. How should routing work?',
    option_a: 'Random selection across all available specialists',
    option_b: 'Round-robin: cardiology, neurology, orthopedics, repeat',
    option_c: 'Analyze symptoms (chest pain) and route to appropriate specialist (cardiology)',
    option_d: 'First available specialist regardless of expertise',
    correct_answer: 'C',
    explanation: 'Routing decisions should intelligently match task requirements (chest pain symptoms) with appropriate agent specializations (cardiology expertise) for optimal diagnostic accuracy, not random or round-robin assignment.',
    difficulty: 'easy'
  },

  // Question 122 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your customer support system runs 3 agents concurrently handling different users. Agent A\'s troubleshooting events keep appearing in Agent B\'s logs, causing debugging confusion. What is the purpose of context-isolated event streams?',
    option_a: 'Separate event tracking per agent session (Agent A logs ≠ Agent B logs) for clear debugging',
    option_b: 'Reduce cloud storage costs by deduplicating events',
    option_c: 'Speed up event processing through merged streams',
    option_d: 'Merge all agent events into unified stream',
    correct_answer: 'A',
    explanation: 'Context-isolated event streams track events separately for each agent session, preventing interference (Agent A\'s events appearing in Agent B\'s logs) and enabling clear debugging of individual agent behaviors.',
    difficulty: 'medium'
  },

  // Question 123 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your competitive intelligence system needs to analyze 10 competitors (market position, product features, pricing, customer reviews) for a report due in 1 hour. Sequential processing takes 3 hours. When should you use the fan-out pattern?',
    option_a: 'Never - these tasks have dependencies requiring sequential execution',
    option_b: 'Now - spawn 10 agents to analyze each competitor independently in parallel',
    option_c: 'Never - single-agent workflows are more reliable',
    option_d: 'Never - always use sequential processing for consistency',
    correct_answer: 'B',
    explanation: 'The fan-out pattern is ideal when you have multiple independent subtasks (analyzing different competitors) that can be executed in parallel, reducing completion time from 3 hours to ~20 minutes.',
    difficulty: 'easy'
  },

  // Question 124 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your insurance claims system has agents for auto, health, and property claims, but they keep handling each other\'s claim types incorrectly (auto agent processing health claims). What best practice ensures effective specialization?',
    option_a: 'Make all agents identical so they can handle any claim',
    option_b: 'Minimize agent capabilities to prevent overlap',
    option_c: 'Random task assignment and learn from mistakes',
    option_d: 'Define clear domain boundaries (auto claims only) with focused system prompts for each specialty',
    correct_answer: 'D',
    explanation: 'Effective specialization requires clear domain boundaries (auto agent handles only auto claims) and focused system prompts that explicitly define each agent\'s expertise, terminology, and decision-making rules specific to their specialty.',
    difficulty: 'medium'
  },

  // Question 125 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your order fulfillment workflow has 4 agents: inventory check, payment processing, shipping, notification. The payment agent fails due to API timeout, but inventory was already reserved and shipping is ready. How should errors be handled?',
    option_a: 'All agents fail immediately - rollback inventory reservation and cancel shipping',
    option_b: 'Error cascades automatically through all agents',
    option_c: 'Coordinator isolates payment failure, decides whether to retry or cancel, manages rollback',
    option_d: 'Ignore payment failure and continue with shipping',
    correct_answer: 'C',
    explanation: 'Errors should be handled in isolation with the coordinator managing propagation. The coordinator evaluates the payment failure, decides on retry logic, and if necessary, orchestrates rollback (release inventory, cancel shipping) in a controlled manner.',
    difficulty: 'medium'
  },

  // Question 126 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your market research report requires: (1) survey 100 customers, (2) analyze 50 competitors, (3) review 200 social media posts, (4) compile regulatory landscape. Sequential execution takes 8 hours. What is subtask parallelization?',
    option_a: 'Break into 4 concurrent subtasks (surveys, competitors, social, regulatory) executed by different agents simultaneously',
    option_b: 'Execute all four tasks sequentially: surveys → competitors → social → regulatory',
    option_c: 'Single agent multitasks by switching between tasks',
    option_d: 'Manual splitting where operator assigns tasks to agents',
    correct_answer: 'A',
    explanation: 'Subtask parallelization breaks work into concurrent independent subtasks (surveys, competitor analysis, social monitoring, regulatory review) that execute in parallel by different specialized agents, reducing 8-hour sequential time to ~2 hours.',
    difficulty: 'easy'
  },

  // Question 127 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your content moderation system has separate agents for text, images, and video. The text moderation agent keeps seeing image analysis context, causing it to reference "red pixels" when moderating text-only posts. Why maintain separate conversation history per agent?',
    option_a: 'Reduce API costs by limiting context size',
    option_b: 'Prevent context confusion (image concepts bleeding into text analysis) and maintain domain focus',
    option_c: 'Required by Claude API terms of service',
    option_d: 'Optimize storage by deduplicating conversation history',
    correct_answer: 'B',
    explanation: 'Separate conversation history prevents context confusion (image analysis concepts like "red pixels" appearing in text moderation) and allows each agent to maintain laser focus on its specific domain expertise.',
    difficulty: 'medium'
  },

  // Question 128 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your loan approval workflow mysteriously routes some applications to wrong departments, causing delays. Automatic routing happens invisibly. What is the benefit of explicit handoffs?',
    option_a: 'Faster execution through optimized routing',
    option_b: 'Lower API costs from reduced coordination overhead',
    option_c: 'Simpler code without handoff logic',
    option_d: 'Clear audit trail showing "Credit Agent → Risk Agent at 10:23am with FICO=720" for accountability and debugging',
    correct_answer: 'D',
    explanation: 'Explicit handoffs provide clear accountability (who sent what to whom) and make workflow transitions traceable, enabling debugging of routing issues and compliance auditing of decision paths.',
    difficulty: 'medium'
  },

  // Question 129 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your clinical trial analysis system has three agents with identical system prompts: "You are a helpful assistant." The cardiology agent keeps analyzing oncology data incorrectly. How should system prompts differ?',
    option_a: 'All agents use identical generic prompts for consistency',
    option_b: 'No system prompts needed - agents learn from context',
    option_c: 'Cardiology: "You are a cardiolog expert..." vs Oncology: "You are an oncology expert..." with domain-specific terminology',
    option_d: 'Generic prompts work best to maintain flexibility',
    correct_answer: 'C',
    explanation: 'System prompts should be tailored to each agent\'s specific role (cardiologist vs oncologist) and domain expertise (cardiac terminology, treatment protocols vs cancer staging, chemotherapy regimens) for accurate specialized analysis.',
    difficulty: 'easy'
  },

  // Question 130 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your coordinator receives: "Analyze Q3 financial performance." It has specialist agents for revenue analysis, expense analysis, cash flow, and market comparison. What is the coordinator\'s decomposition role?',
    option_a: 'Break into subtasks: (1) revenue trends, (2) expense categories, (3) cash flow, (4) market benchmarks, route to specialists',
    option_b: 'Execute all financial analysis directly without specialists',
    option_c: 'Merge all requirements into single task for one agent',
    option_d: 'Delegate the decomposition decision to worker agents',
    correct_answer: 'A',
    explanation: 'The coordinator analyzes the complex task ("Q3 financial performance") and breaks it into manageable subtasks (revenue, expenses, cash flow, benchmarks) appropriate for specialist agents, ensuring comprehensive coverage.',
    difficulty: 'easy'
  },

  // Question 131 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your blog post workflow: (1) research agent finds sources, (2) writing agent uses sources to draft, (3) SEO agent optimizes draft. The SEO agent keeps running before draft exists. When should you use sequential orchestration over parallel?',
    option_a: 'Always prefer sequential for all workflows',
    option_b: 'Here - these tasks have strict dependencies (research → writing → SEO) requiring ordered execution',
    option_c: 'Never - always parallelize for speed',
    option_d: 'Only for single-agent workflows',
    correct_answer: 'B',
    explanation: 'Sequential orchestration is necessary when tasks have strict dependencies (SEO needs completed draft, draft needs research sources) requiring specific ordering to ensure each agent has required inputs.',
    difficulty: 'easy'
  },

  // Question 132 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your multi-agent customer service system is slow (3min average response vs 30sec target). You only monitor final response time. What monitoring is essential to diagnose the bottleneck?',
    option_a: 'Continue monitoring only final results',
    option_b: 'No monitoring needed - trust the system',
    option_c: 'Single aggregate metric (total time) is sufficient',
    option_d: 'Per-agent latency (routing:5s, billing:45s, tech:120s), handoff overhead:10s, completion rates:85%',
    correct_answer: 'D',
    explanation: 'Monitor per-agent performance (reveals tech agent is 120s bottleneck), coordination overhead (10s handoff time), task completion rates (15% failures need investigation), and handoff efficiency to identify optimization opportunities.',
    difficulty: 'medium'
  },

  // Question 133 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your approval workflow hangs: Agent A waits for Agent B\'s approval, but Agent B waits for Agent A\'s validation, creating circular dependency. Both agents wait indefinitely. How do you prevent deadlocks?',
    option_a: 'Allow circular dependencies - they resolve naturally',
    option_b: 'No prevention needed in well-designed systems',
    option_c: 'Avoid circular dependencies in workflow design + implement 60s timeout mechanisms',
    option_d: 'Use infinite retries until one agent gives up',
    correct_answer: 'C',
    explanation: 'Prevent deadlocks by avoiding circular dependencies in workflow design (A→B→C, never A→B→A) and implementing timeout mechanisms (60s timeout triggers error recovery) to detect and break deadlock conditions.',
    difficulty: 'medium'
  },

  // Question 134 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your radiology report system switches from one generalist agent (65% accuracy) to specialized agents for X-rays, MRIs, and CT scans (92% accuracy). Costs increased 20%, speed decreased 10%. What is the primary advantage of domain-focused agents?',
    option_a: 'Deep expertise in specific imaging modalities produces 27% higher diagnostic accuracy despite cost/speed trade-offs',
    option_b: 'Lower API costs through specialization',
    option_c: 'Faster response times through parallel processing',
    option_d: 'Simpler implementation with less code',
    correct_answer: 'A',
    explanation: 'Domain-focused agents develop deep expertise in specific areas (X-ray interpretation, MRI analysis, CT scan reading), producing significantly higher quality results (92% vs 65%) that justify modest cost/speed trade-offs.',
    difficulty: 'easy'
  },

  // Question 135 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your legal workflow hands off from research agent to contract drafting agent. Research agent\'s full context is 15,000 tokens (case history, precedents, statutes). Contract agent only needs 2,000 tokens (relevant precedents, key statutes). How should context be passed?',
    option_a: 'No context needed - drafting agent works independently',
    option_b: 'Pass only 2,000 tokens: relevant precedents and key statutes needed for drafting',
    option_c: 'Pass entire 15,000 token conversation history',
    option_d: 'Use global variables accessible to all agents',
    correct_answer: 'B',
    explanation: 'Handoffs should include only relevant context needed by the receiving agent (relevant precedents, key statutes) to complete its task, avoiding unnecessary token costs and context pollution from irrelevant information.',
    difficulty: 'medium'
  },

  // Question 136 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your document processing started at 100 docs/hour with one agent. Demand grew to 1,000 docs/hour. Vertical scaling (faster model) only reached 150 docs/hour. What is the scalability advantage of multi-agent systems?',
    option_a: 'Single agent optimizations to handle 1,000 docs/hour',
    option_b: 'Reduced memory usage enables more documents',
    option_c: 'Lower latency per document through caching',
    option_d: 'Horizontal scaling: add 10 parallel agents to process 1,000 docs/hour (100 each)',
    correct_answer: 'D',
    explanation: 'Multi-agent systems scale horizontally by adding more agent instances to handle increased workload in parallel (10 agents × 100 docs/hour = 1,000 docs/hour), whereas single-agent vertical scaling has hard limits.',
    difficulty: 'medium'
  },

  // Question 137 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your IT helpdesk coordinator receives: "Email not working on iPhone." Available specialists: Network (VPN/WiFi), Exchange (server issues), Mobile (device config). Random routing sends 33% to wrong specialist. What is the coordinator\'s routing responsibility?',
    option_a: 'Execute the troubleshooting directly without specialists',
    option_b: 'Random assignment - each specialist gets 33% of tickets',
    option_c: 'Analyze symptoms (iPhone email) → route to Mobile specialist (device configuration expertise)',
    option_d: 'Let specialists self-select by broadcasting to all',
    correct_answer: 'C',
    explanation: 'The coordinator must analyze task requirements ("Email not working on iPhone" suggests device configuration issue) and intelligently route to the appropriate specialist (Mobile agent with iOS expertise) based on symptom analysis.',
    difficulty: 'easy'
  },

  // Question 138 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your data pipeline allows worker agents (ingestion, transformation, validation) to message each other directly. Now you have debugging nightmares: validation asks transformation to re-run, but transformation already asked ingestion to refetch. Why is no cross-talk important?',
    option_a: 'Prevents uncontrolled interactions (validation→transformation→ingestion chains), simplifies coordination through hub-and-spoke',
    option_b: 'Reduces API costs from inter-agent messaging',
    option_c: 'Increases processing speed by reducing network hops',
    option_d: 'API limitation prevents direct agent-to-agent calls',
    correct_answer: 'A',
    explanation: 'Preventing direct worker-to-worker cross-talk simplifies coordination logic (all communication through coordinator hub) and prevents uncontrolled interaction chains that create race conditions and make debugging nearly impossible.',
    difficulty: 'medium'
  },

  // Question 139 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your product launch workflow has 5 agents: market research, pricing, marketing copy, competitor analysis, launch timeline. Research finishes first (20 min). When is the task complete?',
    option_a: 'When research finishes first at 20 minutes',
    option_b: 'When all 5 subtasks complete (60 min) and coordinator synthesizes comprehensive launch plan',
    option_c: 'When 60-minute timeout is reached',
    option_d: 'When any single agent reports done',
    correct_answer: 'B',
    explanation: 'Task completion requires all necessary subtasks (research, pricing, copy, competitor analysis, timeline) to finish and the coordinator to synthesize results into a coherent, comprehensive launch plan.',
    difficulty: 'easy'
  },

  // Question 140 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your coordinator keeps routing medical imaging tasks to the wrong specialists (sending X-rays to MRI agent). Agent capabilities exist only in developers\' heads. How should capabilities be documented?',
    option_a: 'No documentation needed - agents are self-describing',
    option_b: 'Code comments in implementation files only',
    option_c: 'Single README with high-level descriptions',
    option_d: 'Structured capability docs: "X-ray agent: strengths=bone fractures, limitations=soft tissue; MRI agent: strengths=soft tissue, limitations=cost"',
    correct_answer: 'D',
    explanation: 'Document each agent\'s capabilities with clear strengths and limitations (X-ray agent excels at bone fractures but not soft tissue), enabling the coordinator to make informed routing decisions.',
    difficulty: 'medium'
  },

  // Question 141 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your research team has @Researcher, @Analyst, and @Writer agents. Messages saying "analyze this data" go to all three agents, causing duplicate work. What is the benefit of @mentions?',
    option_a: 'Social features like in Slack for team bonding',
    option_b: 'User notifications about agent activity',
    option_c: 'Explicit targeting: "@Analyst analyze this data" routes to Analyst only, preventing duplicate work',
    option_d: 'Cosmetic labeling for prettier logs',
    correct_answer: 'C',
    explanation: '@mentions provide explicit agent targeting (@Analyst), ensuring messages reach only the intended recipient for directed communication, preventing broadcast messages that cause duplicate work across multiple agents.',
    difficulty: 'medium'
  },

  // Question 142 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your e-commerce order workflow has inventory agent failing to reserve stock (error: "DB timeout"). This is the 1st failure for this agent today. Previous timeout errors resolved on retry. Downstream agents (payment, shipping) are waiting. How should the coordinator handle this?',
    option_a: 'Evaluate: retry inventory agent once (transient timeout), if fails again reassign to backup, or escalate to manual review',
    option_b: 'Always retry with same inventory agent indefinitely',
    option_c: 'Fail entire order workflow immediately',
    option_d: 'Ignore inventory failure and continue to payment',
    correct_answer: 'A',
    explanation: 'The coordinator should evaluate the failure context (DB timeout, 1st occurrence, historical retry success) and decide on appropriate action: retry once for transient errors, reassign to backup agent if retry fails, or escalate to human review for persistent issues.',
    difficulty: 'medium'
  },

  // Question 143 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your healthcare agent team (patient intake, diagnosis, treatment planning) needs to access: EHR API credentials, HIPAA encryption keys, and patient PHI. Where should these be stored for multi-agent access?',
    option_a: 'Hardcoded API keys only in each agent',
    option_b: 'Shared vault with role-based access: all agents get credentials, only diagnosis/treatment access PHI',
    option_c: 'Backup storage system for disaster recovery',
    option_d: 'Logging facility for audit trails',
    correct_answer: 'B',
    explanation: 'The shared vault provides secure, controlled access to sensitive data (credentials, encryption keys, PHI) with role-based permissions, ensuring multiple agents can access what they need while maintaining security boundaries.',
    difficulty: 'easy'
  },

  // Question 144 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your customer support has tier-1 Haiku agent ($0.25/query) handling 90% of cases successfully. A complex query about microservices architecture integration arrives. Tier-1 provides incorrect answer. When should you escalate to tier-2 Sonnet agent ($4/query)?',
    option_a: 'Never escalate - keep costs low',
    option_b: 'Always use most capable Sonnet for all queries',
    option_c: 'Random escalation for 10% of queries',
    option_d: 'When query complexity (microservices integration) exceeds tier-1 capabilities (basic troubleshooting), despite cost increase',
    correct_answer: 'D',
    explanation: 'Escalate when current agent reaches its capability limits (Haiku can\'t handle architectural questions) or task complexity exceeds domain expertise, even if it increases costs from $0.25 to $4, because accuracy is critical.',
    difficulty: 'medium'
  },

  // Question 145 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your real estate valuation system has two agents: comparable sales agent estimates $450K, while market trends agent estimates $380K for the same property. Both have valid reasoning. What is the coordinator\'s role?',
    option_a: 'Ignore the conflict and skip valuation',
    option_b: 'Let agents negotiate directly until one concedes',
    option_c: 'Reconcile using weighted average ($420K), consider recency of comparables vs market momentum, make final decision',
    option_d: 'Always prefer first result ($450K) received',
    correct_answer: 'C',
    explanation: 'The coordinator must reconcile conflicting outputs ($450K vs $380K) by analyzing reasoning (recent comparables vs declining market), applying weighting logic, and making informed final decisions rather than ignoring conflicts or arbitrary selection.',
    difficulty: 'medium'
  },

  // Question 146 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your content system processes 1000 requests/day: 700 simple FAQs, 250 moderate articles, 50 complex research. Currently using Sonnet ($3/request) for all = $3000/day. How do you optimize costs?',
    option_a: 'Route FAQs to Haiku ($0.25), articles to Sonnet ($3), research to Opus ($15) = $825/day while maintaining quality',
    option_b: 'Always use cheapest Haiku for everything = $250/day',
    option_c: 'Single Sonnet agent for all tasks for simplicity',
    option_d: 'No optimization possible - costs are fixed',
    correct_answer: 'A',
    explanation: 'Optimize cost by matching agent capabilities to task requirements: simple FAQs don\'t need expensive models (Haiku sufficient), while complex research justifies premium models (Opus). Avoids overprovisioning Sonnet for FAQs and underprovisioning for research.',
    difficulty: 'medium'
  },

  // Question 147 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your workflow needs the analysis agent to send findings to the report agent. You implement: send_message({to: "report_agent", type: "analysis_complete", data: {findings: [...], confidence: 0.85}}). What is this pattern?',
    option_a: 'Simple context copying between agents',
    option_b: 'Structured message passing protocol with explicit recipient, type, and payload',
    option_c: 'Shared memory access between agents',
    option_d: 'File-based sharing via filesystem',
    correct_answer: 'B',
    explanation: 'Message passing is a structured communication protocol that enables explicit, controlled interaction through defined message format (recipient, type, payload), ensuring clear agent-to-agent communication contracts.',
    difficulty: 'easy'
  },

  // Question 148 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your DevOps agent team has all agents sharing identical tools: git, kubectl, aws-cli, database-query, slack-notify. The database specialist never uses kubectl. The Kubernetes specialist doesn\'t need database-query. How should tools be distributed?',
    option_a: 'All agents share identical toolset for consistency',
    option_b: 'No tools - agents work with Claude\'s built-in capabilities only',
    option_c: 'Random tool assignment to minimize dependencies',
    option_d: 'DB agent: database-query, backup-restore; K8s agent: kubectl, helm, docker; Notification agent: slack-notify, pagerduty',
    correct_answer: 'D',
    explanation: 'Each specialist should have domain-specific tools tailored to their expertise (DB agent gets database tools, K8s agent gets container orchestration tools), reducing complexity and security surface area.',
    difficulty: 'easy'
  },

  // Question 149 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your support system escalates 60% of queries from tier-1 Haiku ($0.25) to tier-2 Opus ($15). Analysis shows 45% of escalated queries were simple FAQs that Haiku could handle. Monthly cost: $180K vs expected $60K. What is the risk of overusing escalation?',
    option_a: 'Better results from using premium models',
    option_b: 'Faster completion from Opus\' speed',
    option_c: 'Unnecessary cost increase: $120K wasted on Opus for simple FAQs that Haiku handles at $0.25',
    option_d: 'Improved accuracy across all query types',
    correct_answer: 'C',
    explanation: 'Overusing escalation leads to unnecessarily using expensive agents (Opus at $15) for tasks that simpler agents could handle (Haiku at $0.25), tripling costs without quality improvement for simple queries.',
    difficulty: 'medium'
  },

  // Question 150 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your long-running multi-agent system spawns 50 agents/day but never terminates sessions. After 30 days, you have 1,500 zombie sessions consuming memory. How should session lifecycle be managed?',
    option_a: 'Create session → execute task → cleanup (close connections, release memory, log completion)',
    option_b: 'Never cleanup - sessions are lightweight',
    option_c: 'Share sessions indefinitely for reuse',
    option_d: 'Manual cleanup when operator remembers',
    correct_answer: 'A',
    explanation: 'Properly manage agent session lifecycle with explicit creation, execution, and cleanup (releasing resources, closing connections, clearing memory) to prevent resource leaks and zombie sessions.',
    difficulty: 'medium'
  },

  // Question 151 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your software build pipeline: (1) compile code, (2) run tests (needs compiled binary), (3) create Docker image (needs compiled binary), (4) deploy (needs Docker image and test results). Without dependency tracking, tests fail because compilation hasn\'t finished. What is the benefit?',
    option_a: 'Cosmetic organization in project management tool',
    option_b: 'Ensures compilation completes before tests/Docker, and both complete before deployment',
    option_c: 'No real benefit - manual coordination works',
    option_d: 'Just documentation for developers',
    correct_answer: 'B',
    explanation: 'Task dependency tracking ensures prerequisite tasks (compilation) complete successfully before dependent tasks (tests, Docker build) execute, preventing failures from missing inputs and ensuring correct workflow ordering.',
    difficulty: 'easy'
  },

  // Question 152 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your travel booking workflow: flight agent succeeds ($450), hotel agent succeeds ($600), car rental agent fails (no availability). Total booking is incomplete. How should coordinator handle this partial failure?',
    option_a: 'Fail entire workflow - cancel flight and hotel reservations',
    option_b: 'Ignore car rental failure - deliver partial booking',
    option_c: 'Continue to next task without adaptation',
    option_d: 'Assess: car rental is optional, offer booking with flight+hotel, or try alternative car rental locations',
    correct_answer: 'D',
    explanation: 'The coordinator should assess partial failure impact (is car essential?), consider alternatives (different locations, rideshare), and decide on graceful degradation (offer flight+hotel without car) or retry strategies based on business requirements.',
    difficulty: 'medium'
  },

  // Question 153 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your security scanning system has vulnerability agent and compliance agent. Vulnerability agent starts checking GDPR compliance. Compliance agent starts analyzing code vulnerabilities. Both produce inferior results outside their expertise. What is the purpose of specialization boundaries?',
    option_a: 'Artificial limitations to constrain agents',
    option_b: 'Cost reduction through simpler agents',
    option_c: 'Keep vulnerability agent focused on code security, compliance agent on regulatory requirements, preventing scope creep',
    option_d: 'Regulatory compliance requirement',
    correct_answer: 'C',
    explanation: 'Specialization boundaries maintain each agent\'s focus on their area of deep expertise (vulnerabilities vs compliance) and prevent scope creep that degrades quality when agents work outside their specialty.',
    difficulty: 'easy'
  },

  // Question 154 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your customer inquiry system has static workflow: all queries go to search→summarize→respond (3 agents). Simple FAQs waste time on search. Complex technical queries need additional fact-check agent. How do dynamic workflows differ?',
    option_a: 'Analyze query complexity at runtime: FAQs skip search (1 agent), technical queries add fact-checker (4 agents)',
    option_b: 'No difference from static orchestration',
    option_c: 'Dynamic workflows are always slower than static',
    option_d: 'Static workflows with fixed 3-agent pipeline for all queries',
    correct_answer: 'A',
    explanation: 'Dynamic workflows can adapt their structure and agent routing based on runtime conditions (query complexity analysis) and intermediate results (FAQ detection), optimizing the agent pipeline for each specific request.',
    difficulty: 'hard'
  },

  // Question 155 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your multi-agent system runs 100 agents. You only track "total agents deployed: 100". The system is slow but you can\'t identify why. What metrics indicate effective coordination?',
    option_a: 'Agent count (100) is sufficient metric',
    option_b: 'Task completion: 85%, parallelization efficiency: 3.2x speedup, handoff latency: 200ms avg, bottleneck agent: research (5min avg)',
    option_c: 'Token usage: 2.5M tokens/day is only metric needed',
    option_d: 'No metrics needed - system works or doesn\'t',
    correct_answer: 'B',
    explanation: 'Effective coordination requires measuring task completion rates (85% success), parallelization efficiency (3.2x speedup vs sequential), handoff latency (200ms overhead), and identifying bottlenecks (research agent taking 5min).',
    difficulty: 'medium'
  },

  // Question 156 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your order processing workflow fails. Single log shows: "Error: invalid payment". You can\'t determine which agent failed, what data was passed, or how it got there. How should errors be logged?',
    option_a: 'Don\'t log errors - too much data',
    option_b: 'Single aggregate log with "Error: invalid payment"',
    option_c: 'Only log coordinator activities',
    option_d: 'Per-agent logs: "Payment Agent: received amount=$-50 from Validation Agent at 10:23:45, error: negative amount invalid"',
    correct_answer: 'D',
    explanation: 'Log errors per agent with full context (payment agent failed), input data ($-50), handoff trail (from Validation Agent), and timestamp, enabling effective debugging of multi-agent orchestration issues.',
    difficulty: 'medium'
  },

  // Question 157 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your research coordinator receives "Analyze electric vehicle market". It starts researching Tesla sales figures itself instead of routing to specialist agents. What is the coordinator\'s proper responsibility?',
    option_a: 'Execute all research work directly',
    option_b: 'Monitor specialist agents passively without routing',
    option_c: 'Decompose into (Tesla, Rivian, BYD), route to specialists, synthesize findings - no actual research',
    option_d: 'Serve as backup when specialist agents fail',
    correct_answer: 'C',
    explanation: 'The coordinator decomposes tasks (identify manufacturers to analyze), routes to specialists (market analysts for each company), and synthesizes results into unified report, without performing specialist research work itself.',
    difficulty: 'easy'
  },

  // Question 158 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your loan approval orchestration fails in production. You only tested the complete end-to-end flow. Now you can\'t isolate whether the credit agent, risk agent, or coordinator routing logic failed. How should you test?',
    option_a: 'Unit test: credit agent alone, risk agent alone, routing logic alone; then integration test: full workflow',
    option_b: 'Only test final loan decision output',
    option_c: 'No testing needed - agents are reliable',
    option_d: 'Production testing only with real applications',
    correct_answer: 'A',
    explanation: 'Test individual agents (credit scoring, risk assessment) and coordination logic (routing, handoffs) separately with mocked dependencies, then perform integrated testing of the complete orchestration to catch both component and integration issues.',
    difficulty: 'medium'
  },

  // Question 159 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your competitive analysis has 5 agents each analyzing one competitor, outputting: "Company A: strong"; "Company B: weak"; "Company C: strong"; "Company D: moderate"; "Company E: strong". Simple concatenation produces confusing report. What is the benefit of synthesis?',
    option_a: 'Faster processing of agent outputs',
    option_b: 'Reconcile outputs into: "Market dominated by 3 strong players (A,C,E), opportunity in B\'s weakness, D is watchlist"',
    option_c: 'Lower token costs from shorter output',
    option_d: 'No difference - concatenation works fine',
    correct_answer: 'B',
    explanation: 'Result synthesis intelligently reconciles and combines outputs, identifying patterns (3 strong competitors), relationships (opportunity in weakness), and creating coherent unified narrative rather than simple disconnected concatenation.',
    difficulty: 'medium'
  },

  // Question 160 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your personalized email campaign: (1) analyze customer purchase history to find preferences, (2) generate product recommendations based on preferences, (3) write email using recommendations. You try parallel execution but recommendations are random without history. When is sequential appropriate?',
    option_a: 'Always prefer sequential for all workflows',
    option_b: 'Never use sequential - parallel is always better',
    option_c: 'Random choice based on availability',
    option_d: 'Here - recommendations need purchase history, email needs recommendations (chained dependencies)',
    correct_answer: 'D',
    explanation: 'Sequential orchestration is appropriate when task outputs must inform subsequent inputs (recommendations require analyzed preferences, email copy requires recommendations), creating a necessary information flow chain.',
    difficulty: 'easy'
  },

  // Question 161 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your order workflow: inventory agent finds product_id=123, quantity=2, price=$50. Payment agent needs this state. You use global shared_state variable. Race conditions occur when multiple orders run. How should state be managed?',
    option_a: 'Global shared state accessible to all agents',
    option_b: 'No state management - agents rediscover everything',
    option_c: 'Explicit handoff message: {product_id: 123, quantity: 2, price: 50, order_id: "ORD-789"}',
    option_d: 'Automatic state synchronization across all agents',
    correct_answer: 'C',
    explanation: 'Manage state through explicit transfer of necessary context during handoffs (structured message with product details and order ID), avoiding hidden shared state that causes race conditions in concurrent workflows.',
    difficulty: 'medium'
  },

  // Question 162 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your content system has "research" and "writing" agents with unclear boundaries. Both agents are researching and writing, producing duplicate work and conflicting drafts. What is the risk?',
    option_a: 'Agents overlap work (both research+write), create conflicts (competing drafts), waste resources (duplicate research)',
    option_b: 'Faster execution from redundancy',
    option_c: 'Better results from multiple perspectives',
    option_d: 'No risk - overlap is beneficial',
    correct_answer: 'A',
    explanation: 'Unclear specialization boundaries cause agents to overlap work (both doing research and writing), creating conflicts (competing draft versions), redundancy (duplicate research effort), and coordination problems.',
    difficulty: 'easy'
  },

  // Question 163 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your report generation workflow has 3 worker agents (data: 30s, analysis: 2min, visualization: 45s). Sometimes data agent hangs indefinitely. The entire workflow should complete in 5 minutes max. How should timeouts be configured?',
    option_a: 'No timeouts needed - agents will complete eventually',
    option_b: 'Workers: data=60s, analysis=3min, visualization=90s; coordinator: overall workflow=5min',
    option_c: 'Same 5min timeout for all agents and coordinator',
    option_d: 'Only coordinator needs 5min timeout',
    correct_answer: 'B',
    explanation: 'Workers need individual task timeouts (data=60s catches hangs early, analysis=3min allows processing, visualization=90s) while coordinator needs overall workflow timeout (5min) to manage total completion time.',
    difficulty: 'medium'
  },

  // Question 164 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your 10-agent workflow fails with "price calculation error". With shared context, all agents have mixed conversation history. You spend hours identifying which agent failed. What is the advantage of context isolation?',
    option_a: 'No advantage - shared context is better',
    option_b: 'Slower debugging from checking multiple contexts',
    option_c: 'More complex debugging infrastructure',
    option_d: 'Instantly identify pricing agent failed, review only its isolated conversation, find bug in 5 minutes',
    correct_answer: 'D',
    explanation: 'Context isolation makes it easier to trace issues to specific agents since their conversations are separate, enabling quick identification (pricing agent) and focused debugging (only its context) rather than searching through mixed shared context.',
    difficulty: 'easy'
  },

  // Question 165 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your orchestration has AgentA v2.1 (new message format: JSON) and AgentB v1.5 (old format: plain text). Handoffs fail with parsing errors. You don\'t track versions, making debugging impossible. How should you handle version mismatches?',
    option_a: 'Ignore versions - agents should be backward compatible',
    option_b: 'Always use oldest version for all agents',
    option_c: 'Track versions (A:v2.1, B:v1.5), detect incompatibility, add compatibility layer or upgrade B to v2.0',
    option_d: 'Random version selection per deployment',
    correct_answer: 'C',
    explanation: 'Track agent versions and ensure compatibility between agents to prevent orchestration issues. Detect mismatches (v2.1 vs v1.5 message format), implement compatibility layer (JSON↔text converter), or coordinate upgrades.',
    difficulty: 'hard'
  },

  // Question 166 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your mobile app development team (design, iOS, Android, backend, QA) struggles with coordination. Design starts before requirements complete. QA waits but doesn\'t know backend status. Tasks block each other. What is the purpose of a task board?',
    option_a: 'Centralized visibility: "Requirements: done", "Design: in-progress, blocked by API spec", "Backend: in-progress", "QA: waiting for backend+iOS"',
    option_b: 'Decorative Kanban board for stakeholder demos',
    option_c: 'Backup storage for task descriptions',
    option_d: 'User interface without functional value',
    correct_answer: 'A',
    explanation: 'The task board provides centralized tracking of tasks (requirements, design, dev, QA), their status (done/in-progress/waiting), assignments (which agent), and dependencies (design blocked by API spec), enabling coordinated workflow.',
    difficulty: 'easy'
  },

  // Question 167 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your data analysis specialist agent starts routing work to other agents and deciding workflow priorities instead of analyzing data. Quality of analysis drops to 60%. Why should specialists avoid coordinator responsibilities?',
    option_a: 'Cost reasons - coordination uses more tokens',
    option_b: 'Maintains separation: specialist focuses on deep analysis expertise, coordinator handles routing/orchestration',
    option_c: 'Performance impact from context switching',
    option_d: 'API limitation prevents dual roles',
    correct_answer: 'B',
    explanation: 'Specialists should focus on their domain expertise (data analysis) and maintain clear separation from coordination responsibilities (routing, prioritization), preventing role confusion that degrades specialist performance.',
    difficulty: 'medium'
  },

  // Question 168 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your single generalist agent handles customer queries: 75% accuracy, 60s avg response, can\'t scale beyond 100 queries/hour. After moving to multi-agent orchestration (routing + specialists): 90% accuracy, 30s avg, 500 queries/hour. How does multi-agent improve?',
    option_a: 'Always cheaper in all scenarios',
    option_b: 'Always faster in every case',
    option_c: 'Simpler code and easier maintenance',
    option_d: 'Better specialization (90% vs 75%), parallelism (30s vs 60s), scalability (500 vs 100/hour)',
    correct_answer: 'D',
    explanation: 'Multi-agent orchestration provides superior specialization (specialist expertise increases accuracy), enables parallelism (concurrent processing reduces latency), and offers better scalability (horizontal scaling handles 5x load).',
    difficulty: 'easy'
  },

  // Question 169 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your financial report workflow: analysis agent returns malformed data (missing revenue figures), summary agent returns incomplete text (no conclusion). Coordinator synthesizes anyway, producing garbage report for executives. What is the coordinator\'s quality control role?',
    option_a: 'No quality role - trust specialist agents',
    option_b: 'Blindly accept and synthesize all specialist outputs',
    option_c: 'Validate: "analysis must include revenue/profit/cash flow", "summary must have conclusion", reject invalid outputs',
    option_d: 'Only check formatting (bold/italics) before synthesis',
    correct_answer: 'C',
    explanation: 'The coordinator validates that specialist outputs meet quality requirements (completeness, required fields, logical consistency) before synthesizing final results, preventing garbage-in-garbage-out scenarios.',
    difficulty: 'medium'
  },

  // Question 170 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your sentiment analysis service processes 10,000 tweets/hour. Peak hours: 20,000/hour. You have budget for 50 agent instances max. Currently using 5 agents (underutilized), experiencing delays at peak. How should agent pool sizing be determined?',
    option_a: 'Workload: 10K avg, 20K peak; parallelism: tweets independent; constraints: 50 max → use 20 agents (handles peak with buffer)',
    option_b: 'Always use maximum 50 agents regardless of load',
    option_c: 'Single agent only for cost savings',
    option_d: 'Random sizing between 1-50',
    correct_answer: 'A',
    explanation: 'Size agent pools based on workload characteristics (10K avg, 20K peak), parallelism opportunities (independent tweets), and resource constraints (50 max budget), balancing cost vs performance.',
    difficulty: 'medium'
  },

  // Question 171 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your polling-based orchestration: coordinator checks every 1s if workers finished, wasting 80% CPU on empty polls. Workflows take 5min but coordinator polls 300 times. What is the benefit of event-driven orchestration?',
    option_a: 'Synchronous blocking for simpler code',
    option_b: 'Workers emit "task_complete" events, coordinator reacts instantly, zero polling waste, 99% CPU reduction',
    option_c: 'Slower execution from event overhead',
    option_d: 'No benefits over polling',
    correct_answer: 'B',
    explanation: 'Event-driven orchestration enables reactive, asynchronous coordination (workers emit completion events, coordinator listens) without resource-intensive polling (300 wasted checks), dramatically reducing CPU usage and improving responsiveness.',
    difficulty: 'hard'
  },

  // Question 172 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your payment processing agent occasionally fails to respond (network issues). Currently, workflow fails immediately on first error. 70% of failures resolve if retried. How should communication failures be handled?',
    option_a: 'Ignore failures and skip payment step',
    option_b: 'Crash entire system on first failure',
    option_c: 'Infinite retry until success',
    option_d: 'Retry with exponential backoff (1s, 2s, 4s, 8s), max 5 attempts, then fallback to backup payment agent',
    correct_answer: 'D',
    explanation: 'Handle communication failures with retry logic using exponential backoff (1s, 2s, 4s intervals) to avoid overwhelming failed service, limited attempts to prevent infinite loops, and fallback strategies (backup agent, alternative payment method).',
    difficulty: 'medium'
  },

  // Question 173 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your product launch team needs: market research, competitive analysis, pricing strategy, marketing materials, launch timeline. The lead agent executes all tasks itself instead of delegating. What is the lead agent\'s proper role in Agent Teams?',
    option_a: 'Execute all five tasks directly for control',
    option_b: 'Monitor specialist agents passively without planning',
    option_c: 'Plan: "Research→Analysis→Pricing→Materials→Timeline", delegate to specialist agents, synthesize final launch plan',
    option_d: 'Serve as backup when specialists are unavailable',
    correct_answer: 'C',
    explanation: 'The lead agent is responsible for planning the overall strategy (launch sequence, dependencies, priorities), delegating specific tasks to specialist agents (research, analysis, pricing), and synthesizing results into cohesive plan.',
    difficulty: 'easy'
  },

  // Question 174 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your multi-agent system uses single shared API key for all agents accessing customer database. Agent A is compromised. You can\'t determine which agent caused unauthorized access in audit logs. How should authentication be managed?',
    option_a: 'Per-agent credentials: agentA_key (read-only), agentB_key (write), agentC_key (admin) with scoped permissions',
    option_b: 'Share single credential across all agents for simplicity',
    option_c: 'No authentication - trust internal network',
    option_d: 'Hardcoded tokens in source code',
    correct_answer: 'A',
    explanation: 'Manage secure per-agent credentials with appropriate scoping (read/write/admin permissions) to maintain security (compromised agent has limited access), accountability (audit trail shows which agent), and least privilege principles.',
    difficulty: 'medium'
  },

  // Question 175 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your coordinator routes SQL query optimization to the Python agent instead of Database agent. It lacks capability declarations, so coordinator guesses based on agent names. 40% of tasks are misrouted. What is the purpose of capability declarations?',
    option_a: 'Marketing material for stakeholder presentations',
    option_b: 'Explicit capabilities: "DB Agent: PostgreSQL, MySQL, query optimization, indexing; Python Agent: data analysis, ML, scripting" enables accurate routing',
    option_c: 'No purpose - names are sufficient',
    option_d: 'Decorative metadata without function',
    correct_answer: 'B',
    explanation: 'Agent capability declarations explicitly document expertise (DB agent handles query optimization, Python agent handles ML), helping coordinator make informed routing decisions instead of guessing from names, reducing misrouting.',
    difficulty: 'easy'
  },

  // Question 176 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your data labeling processes 1000 images: 700 simple (cat/dog), 300 complex (medical scans). Using Opus ($15/image) for all = $15K. Using Haiku ($0.25/image) for all = $250 but 60% accuracy on complex images. How to balance cost and performance?',
    option_a: 'Always choose cheapest: Haiku for all ($250) despite accuracy loss',
    option_b: 'Always choose fastest/best: Opus for all ($15K) despite waste on simple images',
    option_c: 'Ignore trade-offs and hope for best',
    option_d: 'Simple→Haiku ($175), Complex→Opus ($4500) = $4675 total with maintained accuracy',
    correct_answer: 'D',
    explanation: 'Balance cost and performance by matching agent capabilities to task requirements: Haiku suffices for simple cat/dog (saves money), Opus needed for complex medical scans (ensures accuracy), avoiding over-provisioning (Opus for cats) or under-provisioning (Haiku for scans).',
    difficulty: 'medium'
  },

  // Question 177 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your coordinator agent handles routing, synthesis, AND executes complex data analysis itself. It becomes bottleneck: 90s processing time while specialist agents wait idle. Throughput drops from 100 to 20 tasks/hour. What is the benefit of limiting coordinator scope?',
    option_a: 'Artificial constraint with no value',
    option_b: 'Cost reduction from simpler coordinator',
    option_c: 'Limits coordinator to routing+synthesis (5s), eliminates bottleneck, restores 100 tasks/hour throughput',
    option_d: 'No benefit - coordinator should do everything',
    correct_answer: 'C',
    explanation: 'Limiting coordinator to coordination tasks (routing, synthesis) maintains focus, prevents it from becoming a performance bottleneck (90s→5s), and enables proper parallel execution where specialists work concurrently.',
    difficulty: 'medium'
  },

  // Question 178 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your multi-agent system measures all agents using "tasks/hour". Database agent shows 1000 tasks/hour (good), but produces 30% incorrect queries. Translation agent shows 50 tasks/hour (looks bad), but achieves 98% accuracy which is critical. How should performance be benchmarked?',
    option_a: 'DB agent: query correctness %, execution time; Translation: translation accuracy %, BLEU score; different metrics per specialization',
    option_b: 'Single global metric: tasks/hour for all agents',
    option_c: 'No benchmarking needed - agents self-optimize',
    option_d: 'Random sampling of 5% of agent outputs',
    correct_answer: 'A',
    explanation: 'Benchmark each agent type using domain-specific metrics appropriate to their specialization: DB agent needs correctness and performance, translation agent needs accuracy and quality scores, reflecting what matters for each role.',
    difficulty: 'medium'
  },

  // Question 179 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your payment processing workflow keeps failing. Investigation shows payment agent crashed 2 hours ago but coordinator still routes payments to it, causing 100% failure rate. What is the purpose of health checks?',
    option_a: 'Decorative monitoring dashboards',
    option_b: 'Detect payment agent crash, mark unhealthy, route to backup payment agent, preventing cascading failures',
    option_c: 'No purpose - manual monitoring is sufficient',
    option_d: 'Logging metrics for post-mortem analysis only',
    correct_answer: 'B',
    explanation: 'Health checks monitor agent availability (detect crashed payment agent), enable coordinator to route around failures (use backup agent), and prevent cascading failures from routing to unavailable agents.',
    difficulty: 'easy'
  },

  // Question 180 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your complex multi-agent loan approval system has 8 agents with no documentation. New developer spends 2 weeks understanding workflow. Production incident takes 4 hours to debug because error handling is unclear. How should workflows be documented?',
    option_a: 'No documentation - code is self-documenting',
    option_b: 'Code comments only',
    option_c: 'Single flow diagram without details',
    option_d: 'Flow diagram (8 agents, dependencies), role descriptions, handoff protocol (what data), error handling (retry logic, fallbacks)',
    correct_answer: 'D',
    explanation: 'Document workflows comprehensively: flow diagrams showing agent interactions and dependencies, detailed agent roles and responsibilities, handoff protocols specifying data formats, and error handling strategies including retry and fallback logic.',
    difficulty: 'easy'
  },

  // Question 181 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your inventory agent directly calls payment agent\'s internal method validateCard(). Payment agent change breaks inventory agent. Now you can\'t upgrade payment agent without coordinating inventory agent changes. What is the risk of tight coupling?',
    option_a: 'Better performance from direct method calls',
    option_b: 'Lower cost from reduced overhead',
    option_c: 'Reduces flexibility (coordinated upgrades), fragile system (changes cascade), difficult evolution (can\'t modify payment logic)',
    option_d: 'No risk - tight coupling is beneficial',
    correct_answer: 'C',
    explanation: 'Tight coupling reduces flexibility (can\'t independently upgrade agents), makes system fragile (internal changes break dependents), and makes changes difficult (payment method signature change requires inventory agent modification).',
    difficulty: 'medium'
  },

  // Question 182 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your research workflow: Agent A has 50,000 tokens of research findings. Agent B (report writer) only needs 3 key findings (500 tokens). Currently passing full 50K context → $12/request. How should context size be managed?',
    option_a: 'Extract 3 key findings (500 tokens) → pass summarized context to Agent B → reduce cost to $0.50/request',
    option_b: 'Always pass full 50,000 token history to every agent',
    option_c: 'No context passing - Agent B rediscovers findings',
    option_d: 'Random selection of 25% of context',
    correct_answer: 'A',
    explanation: 'Manage context size by passing only necessary information (3 key findings) to each agent and summarizing when appropriate (50K→500 tokens), dramatically reducing token costs while maintaining quality.',
    difficulty: 'medium'
  },

  // Question 183 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your synchronous system: coordinator calls Agent A, waits 30s (blocks), calls Agent B, waits 45s (blocks), calls Agent C, waits 20s. Total: 95s with coordinator idle during waits. What is the advantage of asynchronous execution?',
    option_a: 'Simpler code with sequential blocking calls',
    option_b: 'Launch A, B, C concurrently (non-blocking), coordinator handles results as ready, 45s total time, better CPU utilization',
    option_c: 'Lower API costs from async',
    option_d: 'No advantage - synchronous is equivalent',
    correct_answer: 'B',
    explanation: 'Asynchronous execution improves resource utilization (coordinator not blocked during waits) and system responsiveness (45s vs 95s total time) by avoiding blocking waits, enabling concurrent agent execution.',
    difficulty: 'medium'
  },

  // Question 184 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your fraud detection runs 3 agents: rule-based (flags transaction), ML model (approves), expert system (flags). Two flag fraud, one approves. You always use first result (rule-based=flag), missing 30% of legitimate transactions. How should competing results be reconciled?',
    option_a: 'Always use first result received',
    option_b: 'Random selection among three results',
    option_c: 'Ignore conflicts and skip review',
    option_d: 'Coordinator evaluates: 2 flags + 1 approve = require manual review; applies confidence scores and business rules',
    correct_answer: 'D',
    explanation: 'The coordinator should evaluate competing results (2 flags vs 1 approval) against defined criteria (confidence scores, majority vote, business risk tolerance) and reconcile intelligently (escalate to manual review for mixed results).',
    difficulty: 'medium'
  },

  // Question 185 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your microservices architecture deploys agents dynamically across 50 servers. Coordinator has hardcoded agent locations. When agents move/scale, routing breaks. What is the purpose of agent registration?',
    option_a: 'Legal compliance documentation',
    option_b: 'Marketing for agent marketplace',
    option_c: 'Service discovery: agents register capabilities+location, coordinator queries registry to find "SQL agent" → server-23:8080',
    option_d: 'No purpose - hardcoded locations work',
    correct_answer: 'C',
    explanation: 'Agent registration enables orchestration system to dynamically discover available agents (which are running), their capabilities (what they can do), and locations (where they are), enabling flexible routing as agents scale/move.',
    difficulty: 'hard'
  },

  // Question 186 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your booking workflow: flight agent fails (critical), hotel agent fails (important), restaurant agent fails (nice-to-have). Same failure handling for all agents causes either: all fail (losing flight+hotel), or all proceed (booking without required flight). How should failure impact continuation?',
    option_a: 'Flight failure: retry 3x then abort workflow; Hotel failure: try alternate agent or degrade to partial booking; Restaurant: continue without',
    option_b: 'Always fail entire workflow on any agent failure',
    option_c: 'Always continue regardless of which agent fails',
    option_d: 'No impact - ignore all failures',
    correct_answer: 'A',
    explanation: 'Agent failure handling depends on task criticality: critical tasks (flight) require retry then abort, important tasks (hotel) attempt substitution or graceful degradation, optional tasks (restaurant) can be skipped while continuing workflow.',
    difficulty: 'medium'
  },

  // Question 187 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your data pipeline assigns: "Process all customer records" to Agent A. After 2 hours processing 50K records, Agent A fails at record 35,426. You can\'t determine progress or resume. What is the benefit of atomic task assignments?',
    option_a: 'Slower execution from task overhead',
    option_b: 'Assign "Process records 0-10K", "10K-20K", etc. Clear completion (batch #3 done), easy recovery (resume at batch #4)',
    option_c: 'More complexity from managing many tasks',
    option_d: 'No benefit - large tasks are simpler',
    correct_answer: 'B',
    explanation: 'Atomic task assignments (discrete batches) have clear completion criteria (batch #3 = records 20K-30K completed), make failure recovery simpler (resume at batch #4 instead of full reprocess), and enable progress tracking.',
    difficulty: 'medium'
  },

  // Question 188 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your agent queue has: P1 (urgent fraud alert), P2 (routine report due in 1 hour, blocks deployment), P3 (nice-to-have analytics). First-come-first-served processes P3 first, delaying fraud response by 30 min. How should priorities be determined?',
    option_a: 'All equal priority - first-come-first-served',
    option_b: 'Random priority assignment',
    option_c: 'Strict first-come-first-served order',
    option_d: 'P1=critical+urgent (fraud), P2=high (blocks deployment), P3=low (analytics) based on business impact and dependencies',
    correct_answer: 'D',
    explanation: 'Determine priorities based on task urgency (fraud alert is time-sensitive), dependency chains (report blocks deployment), and business requirements (fraud detection is critical), ensuring optimal workflow sequencing.',
    difficulty: 'medium'
  },

  // Question 189 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your system receives 1000 requests/sec but agents process 100/sec. Without queues, 900 requests fail immediately. With work queues, requests buffer and process at 100/sec with manageable delay. What is the purpose of work queues?',
    option_a: 'Decorative visualization of agent activity',
    option_b: 'Logging mechanism for audit trails',
    option_c: 'Buffer burst traffic (1000 req/s), distribute evenly to agents (100/sec capacity), enable load balancing and async processing',
    option_d: 'No purpose - direct agent calls are sufficient',
    correct_answer: 'C',
    explanation: 'Work queues buffer tasks during traffic bursts, manage distribution to agents based on capacity, enable load balancing across agent pool, and support asynchronous processing for better throughput.',
    difficulty: 'easy'
  },

  // Question 190 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your research agent consumes 500K tokens analyzing a single document, costing $150 and taking 20 minutes, blocking other requests. No limits cause budget overruns ($50K/month vs $10K budget). How should resource limits be enforced?',
    option_a: 'Per-agent quotas: research=50K tokens max, 5min timeout, 100 API calls/hour; prevents runaway resource consumption',
    option_b: 'No limits needed - agents self-regulate',
    option_c: 'Global limit only: 1M tokens/day shared across all agents',
    option_d: 'Honor system - agents stay within guidelines',
    correct_answer: 'A',
    explanation: 'Enforce per-agent resource limits (token quotas, API call limits, execution time constraints) to prevent runaway consumption, ensure fair resource distribution, and maintain budget control.',
    difficulty: 'medium'
  },

  // Question 191 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your 20 agents each implement their own logging, authentication, error handling, and metrics. Code duplication is 80%. Adding new monitoring requires updating 20 agents. What is the role of agent middleware?',
    option_a: 'Not needed - agents should implement everything',
    option_b: 'Centralized middleware intercepts all requests: adds auth headers, logs requests/responses, tracks metrics, handles errors consistently',
    option_c: 'Task execution and business logic only',
    option_d: 'Storage layer for agent data',
    correct_answer: 'B',
    explanation: 'Agent middleware handles cross-cutting concerns (logging, authentication, monitoring, error handling) in centralized layer, eliminating duplication, ensuring consistency, and simplifying updates across all agents.',
    difficulty: 'hard'
  },

  // Question 192 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your sentiment analysis started with 1 agent instance (100 requests/hour). Demand grew to 1,000 requests/hour. Vertical scaling (faster server) only reached 150 requests/hour. How should orchestration scale?',
    option_a: 'Cannot scale - single instance limitation',
    option_b: 'Vertical scaling only - bigger server',
    option_c: 'Manual scaling - operator spawns agents',
    option_d: 'Horizontal: deploy 10 agent instances + load balancer = 1,000 requests/hour (100 each)',
    correct_answer: 'D',
    explanation: 'Scale horizontally by adding more agent instances (10x) and using load balancing to distribute work evenly, achieving linear scalability (10 agents × 100 req/hour = 1,000 req/hour).',
    difficulty: 'medium'
  },

  // Question 193 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your product comparison system: 10 agents each analyze competitor pricing. All 10 agents independently fetch the same market report (5min API call). Without caching: 50min total API time, $100 in duplicate calls. What is the benefit of result caching?',
    option_a: 'No benefit - fresh data is always needed',
    option_b: 'Slower performance from cache lookup overhead',
    option_c: 'First agent fetches report (5min, $10), cache serves other 9 agents instantly (0min, $0) = 5min total, $10 cost',
    option_d: 'Higher cost from maintaining cache infrastructure',
    correct_answer: 'C',
    explanation: 'Result caching avoids redundant work by reusing results (market report) when multiple agents need the same information, reducing API calls from 10 to 1, time from 50min to 5min, and cost from $100 to $10.',
    difficulty: 'medium'
  },

  // Question 194 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your single agent hits Claude API rate limit (50 req/min). You have 10 workflow requests arriving simultaneously, causing 80% failures (429 errors). How should multi-agent systems handle rate limiting?',
    option_a: 'Deploy 5 agent instances (each 50 req/min = 250 total), distribute 10 requests across pool, implement exponential backoff on 429s',
    option_b: 'Ignore rate limits and retry immediately',
    option_c: 'Single agent handles all - wait for capacity',
    option_d: 'No strategy - accept failures',
    correct_answer: 'A',
    explanation: 'Handle rate limiting by distributing requests across multiple agents (pooled capacity), implementing backoff strategies (exponential delay on 429 errors), and potentially using multiple API keys to increase total throughput.',
    difficulty: 'medium'
  },

  // Question 195 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your dynamic task "Translate 10-page technical manual: English→Japanese" arrives. You have: basic-translator (simple phrases), technical-translator (jargon), legal-translator (contracts). What is the purpose of capability negotiation?',
    option_a: 'Price bargaining between agents for lowest cost',
    option_b: 'Match requirements (technical manual, 10 pages, EN→JP) with technical-translator capabilities (jargon, medium docs, EN→JP)',
    option_c: 'Social interaction and team building',
    option_d: 'No purpose - assign randomly',
    correct_answer: 'B',
    explanation: 'Capability negotiation analyzes task requirements (technical content, document length, language pair) and matches with available agent capabilities (technical-translator has jargon expertise, medium doc handling, EN→JP support) to find optimal assignment.',
    difficulty: 'hard'
  },

  // Question 196 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your booking workflow: flight agent charges $500 (success), hotel agent reserves room (success), car rental agent fails. Customer\'s card is charged but booking incomplete. You need to undo flight and hotel. How should orchestration handle rollback?',
    option_a: 'No rollback support - manual customer refunds',
    option_b: 'Manual rollback - operator calls each agent',
    option_c: 'Ignore car failure - deliver partial booking',
    option_d: 'Compensating actions: call flight.cancel(), hotel.cancel() to rollback completed subtasks, refund customer automatically',
    correct_answer: 'D',
    explanation: 'Implement compensating actions (cancel flight, cancel hotel, issue refund) to rollback or undo completed subtasks when later tasks fail, maintaining system consistency and customer experience.',
    difficulty: 'hard'
  },

  // Question 197 - Answer: C
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your lead agent micromanages specialists: "fetch row 1, now row 2, format as JSON, use 2 decimal places..." Specialists sit idle waiting for instructions. Quality drops. What is the key principle for effective delegation?',
    option_a: 'Micromanage every step to ensure quality',
    option_b: 'No oversight - complete agent independence',
    option_c: 'Clear task: "Analyze Q3 sales data, output JSON summary", let specialist choose methods within boundaries (data access, format)',
    option_d: 'Constant intervention and detailed instructions',
    correct_answer: 'C',
    explanation: 'Effective delegation requires clear task definitions (what needs doing, output format, quality criteria) while giving agents autonomy to operate within defined boundaries (how to accomplish it), balancing control and empowerment.',
    difficulty: 'easy'
  },

  // Question 198 - Answer: A
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your 8-agent workflow fails. Logs show errors from Agent 5, but you can\'t trace: which agent called it, what data was passed, what happened before/after. Debugging takes 6 hours. How should observability be implemented?',
    option_a: 'Distributed tracing: correlation_id=ABC123 tracks request through all 8 agents, shows call chain, timing, data flow',
    option_b: 'No observability - agents are black boxes',
    option_c: 'Single log file with all agent outputs mixed',
    option_d: 'Manual inspection of each agent separately',
    correct_answer: 'A',
    explanation: 'Implement distributed tracing with correlation IDs to track workflows across agent interactions (Agent 2→5→7), showing call chains, timing, data payloads, and handoff context, enabling rapid debugging of complex orchestration.',
    difficulty: 'hard'
  },

  // Question 199 - Answer: B
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your manager says: "Add more agents to look impressive in our architecture diagram, maximize agent count to 50+, use newest AI features regardless of fit." What is the primary goal of multi-agent orchestration?',
    option_a: 'Maximize agent count for impressive demos (50+ agents)',
    option_b: 'Efficiently coordinate specialized agents (right number) to solve complex tasks requiring decomposition and expertise',
    option_c: 'Minimize costs only - use fewest possible agents',
    option_d: 'Use latest technology and maximum agents for innovation',
    correct_answer: 'B',
    explanation: 'The primary goal is efficiently coordinating the right number of specialized agents to solve complex tasks that genuinely benefit from decomposition (not arbitrary agent count), balancing quality, cost, and performance.',
    difficulty: 'easy'
  },

  // Question 200 - Answer: D
  {
    week: 2,
    domain: 'Agentic Architecture & Orchestration',
    topic: 'Multi-Agent Orchestration',
    question: 'Your orchestration pattern was designed in 2024. Now metrics show: coordinator is bottleneck (5s overhead), 30% of parallel tasks have dependencies (should be sequential), new Claude features enable better routing. How should patterns evolve?',
    option_a: 'Never change patterns - stability is paramount',
    option_b: 'Random changes to experiment with new ideas',
    option_c: 'Copy competitors\' orchestration patterns',
    option_d: 'Analyze metrics (5s coordinator overhead), learn from failures (dependency violations), adopt new capabilities (improved routing) to evolve',
    correct_answer: 'D',
    explanation: 'Orchestration patterns should evolve based on performance metrics (coordinator bottleneck), failure analysis (incorrect parallelization), and newly available capabilities (better routing features), continuously optimizing for real-world results.',
    difficulty: 'medium'
  },
];
