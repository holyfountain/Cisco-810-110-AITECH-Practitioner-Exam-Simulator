window.QUESTION_BANK = [
  {
    "id": "questions-source.txt-1",
    "number": 1,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A financial institution wants to leverage an LLM to extract sensitive customer data from internal documents. The data privacy policy strictly prohibits sending any text outside the corporate network. Which deployment strategy meets this requirement while maintaining control over data sovereignty?",
    "options": [
      {
        "letter": "A",
        "text": "Multi-tenant SaaS API endpoint with TLS 1.3 encryption"
      },
      {
        "letter": "B",
        "text": "On-premises deployment of an open-source model using local hardware"
      },
      {
        "letter": "C",
        "text": "Hybrid cloud deployment utilizing public serverless endpoints"
      },
      {
        "letter": "D",
        "text": "Edge-compute deployment using a proprietary closed-source cloud API"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. On-premises deployment of an open-source model using local hardware is correct because it matches the model, retrieval, hosting, or infrastructure concept required in a scenario where a financial institution wants to leverage an LLM to extract sensitive customer data from internal documents. The data privacy policy strictly prohibits sending any text outside the corporate network.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-2",
    "number": 2,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "A developer notices that an LLM-powered internal network assistant generates highly erratic, creative, and unpredictable troubleshooting scripts when given the same input prompt multiple times. Which parameter should the developer modify to make the model's outputs predictable, deterministic, and identical?",
    "options": [
      {
        "letter": "A",
        "text": "Top-k probability filtering"
      },
      {
        "letter": "B",
        "text": "Max token length limits"
      },
      {
        "letter": "C",
        "text": "Temperature configuration to 0"
      },
      {
        "letter": "D",
        "text": "Context window scale"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. Temperature configuration to 0 is correct because it is the prompt design choice most likely to produce the requested behavior in a scenario where a developer notices that an LLM-powered internal network assistant generates highly erratic, creative, and unpredictable troubleshooting scripts when given the same input prompt multiple times.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-3",
    "number": 3,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "During an architectural review of a customer-facing AI chat agent, a security engineer flags a vulnerability where an external user could input a payload that tricks the model into executing system-level database queries via function calling. What is the most effective defense strategy against this?",
    "options": [
      {
        "letter": "A",
        "text": "Hashing all incoming prompt parameters using SHA-256"
      },
      {
        "letter": "B",
        "text": "Implementing strict output parsing and validation using schema constraints before executing functions"
      },
      {
        "letter": "C",
        "text": "Increasing the model's pre-training dataset size"
      },
      {
        "letter": "D",
        "text": "Encrypting the vector database at rest"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Implementing strict output parsing and validation using schema constraints before executing functions is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-4",
    "number": 4,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "An engineering team integrates an AI agent into their CI/CD pipeline to analyze code pull requests. The agent's primary task is to identify security vulnerabilities like SQL injections and cross-site scripting (XSS) before deployment. What type of tool classification does this AI implementation fall under?",
    "options": [
      {
        "letter": "A",
        "text": "Dynamic Application Security Testing (DAST)"
      },
      {
        "letter": "B",
        "text": "Automated AI-driven Static Application Security Testing (SAST)"
      },
      {
        "letter": "C",
        "text": "Container Runtime Image Scanning"
      },
      {
        "letter": "D",
        "text": "Infrastructure as Code (IaC) linting"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Automated AI-driven Static Application Security Testing (SAST) is the best choice because it is the engineering practice that directly addresses a scenario where an engineering team integrates an AI agent into their CI/CD pipeline to analyze code pull requests. The agent's primary task is to identify security vulnerabilities like SQL injections and cross-site scripting (XSS) before deployment.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-5",
    "number": 5,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "What is the primary architectural purpose of the Attention Mechanism within a Transformer-based Large Language Model?",
    "options": [
      {
        "letter": "A",
        "text": "To compress the model file size into smaller formats like INT8"
      },
      {
        "letter": "B",
        "text": "To dynamically calculate the contextual relationships and importance of tokens relative to all other tokens in a sequence"
      },
      {
        "letter": "C",
        "text": "To encrypt input texts into secure tokens before they hit public clouds"
      },
      {
        "letter": "D",
        "text": "To store long-term corporate memory instead of using a vector database"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. To dynamically calculate the contextual relationships and importance of tokens relative to all other tokens in a sequence is the best answer because it is the core model or infrastructure concept that resolves the concept being tested in the question.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-6",
    "number": 6,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "An administrator needs an LLM to classify network log messages into specific categories (e.g., Critical, Warning, Info). The base model struggles with accuracy when given just the raw log. To improve performance without fine-tuning, the administrator modifies the prompt to include three specific examples of logs and their correct target classifications. What prompt technique is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Zero-shot prompting"
      },
      {
        "letter": "B",
        "text": "Few-shot prompting"
      },
      {
        "letter": "C",
        "text": "Chain-of-Thought (CoT) prompting"
      },
      {
        "letter": "D",
        "text": "Meta-prompt engineering"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Few-shot prompting fits best here because the question is really about prompt structure and control, and that choice matches a scenario where an administrator needs an LLM to classify network log messages into specific categories (e. g. , Critical, Warning, Info). The base model struggles with accuracy when given just the raw log. To improve performance without fine-tuning, the administrator modifies the prompt to include three specific examples of logs and their correct target classifications.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-7",
    "number": 7,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A data science team is preparing a dataset to train an internal HR assistant model. They intentionally scrub attributes like gender, race, and age from the training corpus to prevent biased hiring recommendations. What core tenet of Cisco’s Responsible AI framework does this process directly support?",
    "options": [
      {
        "letter": "A",
        "text": "Accountability"
      },
      {
        "letter": "B",
        "text": "Fairness and Non-discrimination"
      },
      {
        "letter": "C",
        "text": "Translatability"
      },
      {
        "letter": "D",
        "text": "Intellectual Property Protection"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Fairness and Non-discrimination is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where a data science team is preparing a dataset to train an internal HR assistant model. They intentionally scrub attributes like gender, race, and age from the training corpus to prevent biased hiring recommendations.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-8",
    "number": 8,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "When using an AI code copilot to generate unit tests for an enterprise Java application, why is it critical for human developers to perform a validation check on the generated outputs?",
    "options": [
      {
        "letter": "A",
        "text": "AI copilot tools cannot generate syntactically correct code."
      },
      {
        "letter": "B",
        "text": "The copilot may introduce plausible-looking but non-existent methods or libraries, commonly known as hallucinations."
      },
      {
        "letter": "C",
        "text": "Unit tests generated by AI require a special runtime license from the compiler."
      },
      {
        "letter": "D",
        "text": "The copilot automatically deletes original source files if the test fails."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. The copilot may introduce plausible-looking but non-existent methods or libraries, commonly known as hallucinations is correct because it is the workflow or delivery practice most likely to solve the problem the prompt describes.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-9",
    "number": 9,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "In a Retrieval-Augmented Generation (RAG) architecture, what is the core role of a Vector Database?",
    "options": [
      {
        "letter": "A",
        "text": "It processes natural language instructions into floating-point math vectors."
      },
      {
        "letter": "B",
        "text": "It holds indexed high-dimensional vector embeddings to enable rapid semantic similarity searches."
      },
      {
        "letter": "C",
        "text": "It acts as the primary web crawler to find real-time internet data."
      },
      {
        "letter": "D",
        "text": "It compiles the final Python code generated by the LLM."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It holds indexed high-dimensional vector embeddings to enable rapid semantic similarity searches. fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind in a Retrieval-Augmented Generation (RAG) architecture, what is the core role of a Vector Database.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-10",
    "number": 10,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An enterprise application issues 50,000 API calls daily to an LLM provider. Each call contains a system instruction of 500 tokens and a user prompt of 100 tokens. The developer optimizes the architecture by moving the 500-token system instruction to an API-level cache layer that reduces the billed input size to 50 tokens per call. What is the daily token reduction achieved by this optimization?",
    "options": [
      {
        "letter": "A",
        "text": "15,000,000 tokens"
      },
      {
        "letter": "B",
        "text": "20,000,000 tokens"
      },
      {
        "letter": "C",
        "text": "22,500,000 tokens"
      },
      {
        "letter": "D",
        "text": "25,000,000 tokens"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. 22,500,000 tokens is correct because it matches the model, retrieval, hosting, or infrastructure concept required in a scenario where an enterprise application issues 50,000 API calls daily to an LLM provider. Each call contains a system instruction of 500 tokens and a user prompt of 100 tokens. The developer optimizes the architecture by moving the 500-token system instruction to an API-level cache layer that reduces the billed input size to 50 tokens per call.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-11",
    "number": 11,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An attacker compromises an enterprise vector database by injecting malicious text chunks filled with false information. As a result, when employees use the RAG-enabled chatbot, it outputs completely fabricated operational guidelines. Which type of security threat does this behavior represent?",
    "options": [
      {
        "letter": "A",
        "text": "Model Evasion"
      },
      {
        "letter": "B",
        "text": "Data Poisoning / Knowledge Corruption"
      },
      {
        "letter": "C",
        "text": "Prompt Leaking"
      },
      {
        "letter": "D",
        "text": "Denial of Service (DoS)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Data Poisoning / Knowledge Corruption is the best answer because it is the core model or infrastructure concept that resolves a scenario where an attacker compromises an enterprise vector database by injecting malicious text chunks filled with false information. As a result, when employees use the RAG-enabled chatbot, it outputs completely fabricated operational guidelines.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-12",
    "number": 12,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Which open architectural framework allows LLMs to interact standardizedly with disparate external tools, databases, and environments without writing custom APIs for every tool?",
    "options": [
      {
        "letter": "A",
        "text": "Model Quantization Protocol (MQP)"
      },
      {
        "letter": "B",
        "text": "Model Context Protocol (MCP)"
      },
      {
        "letter": "C",
        "text": "Retrieval-Augmented Compression (RAC)"
      },
      {
        "letter": "D",
        "text": "JSON Web Token (JWT)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Model Context Protocol (MCP) is the strongest answer because the scenario is testing agent control flow, and that option best reflects how the agent should behave.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-13",
    "number": 13,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "A developer wants an AI agent to automatically generate architectural documentation directly from a massive legacy repository containing hundreds of interconnected C++ source files. Which constraint represents the primary technological barrier to processing this entire codebase in a single LLM request?",
    "options": [
      {
        "letter": "A",
        "text": "The model's context window limit"
      },
      {
        "letter": "B",
        "text": "The temperature scale restriction"
      },
      {
        "letter": "C",
        "text": "Token serialization speeds"
      },
      {
        "letter": "D",
        "text": "The system's hardware cooling profile"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A. The model's context window limit is the best choice because it is the engineering practice that directly addresses a scenario where a developer wants an AI agent to automatically generate architectural documentation directly from a massive legacy repository containing hundreds of interconnected C++ source files.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-14",
    "number": 14,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "An engineer designs an emergency network triage agent. They want the agent to reason through a complex infrastructure failure step-by-step before outputting the final mitigation script, ensuring that logical errors can be easily audited. Which prompt technique should be utilized?",
    "options": [
      {
        "letter": "A",
        "text": "Role-based persona shifting"
      },
      {
        "letter": "B",
        "text": "Chain-of-Thought (CoT) prompting"
      },
      {
        "letter": "C",
        "text": "Negative prompting structures"
      },
      {
        "letter": "D",
        "text": "Context window padding"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Chain-of-Thought (CoT) prompting is correct because it is the prompt design choice most likely to produce the requested behavior in a scenario where an engineer designs an emergency network triage agent. They want the agent to reason through a complex infrastructure failure step-by-step before outputting the final mitigation script, ensuring that logical errors can be easily audited.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-15",
    "number": 15,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A Cisco customer implements an automated AI model to monitor network health. According to global compliance standards and AI safety frameworks, what mechanism must be in place if the model detects a critical outage and suggests a routing topology change?",
    "options": [
      {
        "letter": "A",
        "text": "The model must automatically apply the changes without notification."
      },
      {
        "letter": "B",
        "text": "A Human-in-the-Loop (HITL) approval step to validate the fix before deployment."
      },
      {
        "letter": "C",
        "text": "The model must scramble its baseline parameters to ensure anonymity."
      },
      {
        "letter": "D",
        "text": "An automated script to shut down the model permanently upon error discovery."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. A Human-in-the-Loop (HITL) approval step to validate the fix before deployment. is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-16",
    "number": 16,
    "sourceName": "questions-source.txt",
    "domain": "Data Research and Analysis",
    "officialDomain": "Domain 4: Data Research and Analysis",
    "text": "During automated data preparation, an AI system flags missing values and inconsistent formats across multiple data sources. This step occurs before analysis or modeling begins. Which task category is the AI primarily performing?",
    "options": [
      {
        "letter": "A",
        "text": "Feature engineering"
      },
      {
        "letter": "B",
        "text": "Data quality checking and cleaning"
      },
      {
        "letter": "C",
        "text": "Model evaluation"
      },
      {
        "letter": "D",
        "text": "Prompt optimization"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "The deciding issue here is during automated data preparation, an AI system flags missing values and inconsistent formats across multiple data sources. This step occurs before analysis or modeling begins, and B. Data quality checking and cleaning is the data preparation, analysis, or evaluation step that best fits it.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-17",
    "number": 17,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "What is the primary role of a context window in generative AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Enforcing ethical constraints"
      },
      {
        "letter": "B",
        "text": "Controlling model accuracy"
      },
      {
        "letter": "C",
        "text": "Defining maximum memory for a single interaction"
      },
      {
        "letter": "D",
        "text": "Limiting training data size"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. Defining maximum memory for a single interaction is the best answer because it is the core model or infrastructure concept that resolves the concept being tested in the question.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-18",
    "number": 18,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Security teams often restrict training or prompting AI models with sensitive customer data. This reduces risk but may limit usefulness. What is the primary trade-off being managed?",
    "options": [
      {
        "letter": "A",
        "text": "Performance versus privacy"
      },
      {
        "letter": "B",
        "text": "Capability breadth versus vendor lock-in"
      },
      {
        "letter": "C",
        "text": "Explainability versus automation"
      },
      {
        "letter": "D",
        "text": "Latency versus observability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A. Performance versus privacy is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-19",
    "number": 19,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Why is explainability particularly important when AI systems support human decision-making? Decision-makers must trust and understand recommendations before acting on them.",
    "options": [
      {
        "letter": "A",
        "text": "It guarantees lower error rates in every review workflow"
      },
      {
        "letter": "B",
        "text": "It enables informed oversight and challenge"
      },
      {
        "letter": "C",
        "text": "It replaces confidence thresholds with natural-language reasoning"
      },
      {
        "letter": "D",
        "text": "It removes the need for governance review before deployment"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It enables informed oversight and challenge is correct because it is the safeguard or governance control that best addresses the core requirement in this question.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-20",
    "number": 20,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "An AI practitioner is assessing threats unique to AI systems rather than traditional IT systems. They want to focus on risks introduced by generative capabilities. Which threat is AI-specific?",
    "options": [
      {
        "letter": "A",
        "text": "Network congestion"
      },
      {
        "letter": "B",
        "text": "Hardware failure"
      },
      {
        "letter": "C",
        "text": "Distributed denial-of-service"
      },
      {
        "letter": "D",
        "text": "Prompt injection"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rationaleCorrect": "D. Prompt injection is correct because it is the prompt design choice most likely to produce the requested behavior in a scenario where an AI practitioner is assessing threats unique to AI systems rather than traditional IT systems. They want to focus on risks introduced by generative capabilities.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-21",
    "number": 21,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Misinformation generated by AI systems poses reputational and operational risks. This risk increases when outputs are shared without verification. Which mitigation strategy best addresses this concern?",
    "options": [
      {
        "letter": "A",
        "text": "Human-in-the-loop validation"
      },
      {
        "letter": "B",
        "text": "Autonomous deployment without review"
      },
      {
        "letter": "C",
        "text": "Larger context windows"
      },
      {
        "letter": "D",
        "text": "Reduced logging"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A. Human-in-the-loop validation is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-22",
    "number": 22,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Bias in AI systems can lead to unfair or harmful outcomes, particularly when models are used in decision-support roles. Organizations must address this risk proactively. Which action most directly helps mitigate bias?",
    "options": [
      {
        "letter": "A",
        "text": "Increasing model size to improve statistical coverage"
      },
      {
        "letter": "B",
        "text": "Auditing training and input data for representation gaps"
      },
      {
        "letter": "C",
        "text": "Expanding the context window to expose more examples"
      },
      {
        "letter": "D",
        "text": "Removing audit trails so reviewers focus only on final outputs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Auditing training and input data for representation gaps is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where bias in AI systems can lead to unfair or harmful outcomes, particularly when models are used in decision-support roles. Organizations must address this risk proactively.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-23",
    "number": 23,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "When designing prompts for image and audio generation, practitioners often adjust structure differently than for text-only tasks. This is because multimodal outputs require clearer intent signaling. What is the main reason for this difference?",
    "options": [
      {
        "letter": "A",
        "text": "Multimodal models ignore constraints"
      },
      {
        "letter": "B",
        "text": "Token limits do not apply to images or audio"
      },
      {
        "letter": "C",
        "text": "Few-shot prompting is unsupported"
      },
      {
        "letter": "D",
        "text": "Non-text outputs require precise guidance on format and attributes"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rationaleCorrect": "D. Non-text outputs require precise guidance on format and attributes is the best answer because it is the core model or infrastructure concept that resolves when designing prompts for image and audio generation, practitioners often adjust structure differently than for text-only tasks. This is because multimodal outputs require clearer intent signaling.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-24",
    "number": 24,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Few-shot prompting is often recommended when working with specialized or domain-specific tasks. This technique relies on providing examples to guide the model’s behavior. Why do examples improve model performance in these scenarios?",
    "options": [
      {
        "letter": "A",
        "text": "They demonstrate desired patterns and structure"
      },
      {
        "letter": "B",
        "text": "They retrain the model dynamically"
      },
      {
        "letter": "C",
        "text": "They increase the model’s context window"
      },
      {
        "letter": "D",
        "text": "They reduce token consumption"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A. They demonstrate desired patterns and structure fits best here because the question is really about prompt structure and control, and that choice matches a scenario where few-shot prompting is often recommended when working with specialized or domain-specific tasks. This technique relies on providing examples to guide the model’s behavior.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-25",
    "number": 25,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Which use case is best suited for diffusion models rather than LLMs?",
    "options": [
      {
        "letter": "A",
        "text": "Sentiment analysis"
      },
      {
        "letter": "B",
        "text": "Image synthesis from noise"
      },
      {
        "letter": "C",
        "text": "Chat-based question answering"
      },
      {
        "letter": "D",
        "text": "Code refactoring"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Image synthesis from noise is correct because it matches the model, retrieval, hosting, or infrastructure concept required in the concept being tested in the question.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-26",
    "number": 26,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A data center engineer is building an on-premises compute cluster to handle simultaneous fine-tuning of multiple 70-billion parameter LLMs. The high-performance cluster utilizes multiple nodes, each equipped with 8x NVIDIA H100 GPUs. Which interconnect technology should be deployed between the physical server nodes to prevent network bandwidth bottlenecks during distributed training?",
    "options": [
      {
        "letter": "A",
        "text": "PCIe Gen 5 expansion busses"
      },
      {
        "letter": "B",
        "text": "NVLink bridges"
      },
      {
        "letter": "C",
        "text": "InfiniBand or RoCE (RDMA over Converged Ethernet) switches"
      },
      {
        "letter": "D",
        "text": "Standard Gigabit Ethernet loops"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. InfiniBand or RoCE (RDMA over Converged Ethernet) switches is the best answer because it is the core model or infrastructure concept that resolves a scenario where a data center engineer is building an on-premises compute cluster to handle simultaneous fine-tuning of multiple 70-billion parameter LLMs. The high-performance cluster utilizes multiple nodes, each equipped with 8x NVIDIA H100 GPUs.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-27",
    "number": 27,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "An architectural team is designing a multi-agent workflow for an automated IT Helpdesk. Agent A extracts information from a user's ticket, Agent B generates a terminal command script, and Agent C executes the command after human approval. If Agent B's output format fluctuates unpredictably, it breaks Agent C's parser. How should the developers programmatically enforce structural conformity?",
    "options": [
      {
        "letter": "A",
        "text": "Increase the system temperature to 1.0."
      },
      {
        "letter": "B",
        "text": "Wrap Agent B's generation using Structured Outputs (JSON Schema enforcement)."
      },
      {
        "letter": "C",
        "text": "Replace Agent B with a smaller, unquantized model."
      },
      {
        "letter": "D",
        "text": "Apply a vector similarity search on the prompt context."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Wrap Agent B's generation using Structured Outputs (JSON Schema enforcement). is the strongest answer because the scenario is testing agent control flow, and that option best reflects how the agent should behave.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-28",
    "number": 28,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A network security team tracks an ongoing threat vector where remote malicious users attempt to uncover the highly classified base instructions and secret operating guidelines originally programmed into a corporate AI gateway. What specific exploit variation are the attackers executing?",
    "options": [
      {
        "letter": "A",
        "text": "Training Data Extraction"
      },
      {
        "letter": "B",
        "text": "Prompt Leaking"
      },
      {
        "letter": "C",
        "text": "Vector Database DoS"
      },
      {
        "letter": "D",
        "text": "Direct Prompt Injection"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Prompt Leaking is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where a network security team tracks an ongoing threat vector where remote malicious users attempt to uncover the highly classified base instructions and secret operating guidelines originally programmed into a corporate AI gateway.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-29",
    "number": 29,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "An engineer uses an AI agent to automatically convert an old Python 2 script into Python 3 syntax. The script contains heavily nested loops and outdated external library dependencies. What technique should the engineer integrate into the prompt sequence to maximize the agent's code translation accuracy?",
    "options": [
      {
        "letter": "A",
        "text": "Supply representative before-and-after migration examples plus dependency notes."
      },
      {
        "letter": "B",
        "text": "Implement a self-correction feedback loop where the AI tests its own output against a compiler and iterates on error logs."
      },
      {
        "letter": "C",
        "text": "Constrain the model to emit only syntax-translated lines without running checks."
      },
      {
        "letter": "D",
        "text": "Force the output into markdown fenced blocks for readability."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Implement a self-correction feedback loop where the AI tests its own output against a compiler and iterates on error logs is correct because it is the workflow or delivery practice most likely to solve the problem the prompt describes.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-30",
    "number": 30,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "What is the primary technological benefit of utilizing KV (Key-Value) Caching in a production LLM inference server deployment?",
    "options": [
      {
        "letter": "A",
        "text": "It permanently modifies the core model weights based on user preferences."
      },
      {
        "letter": "B",
        "text": "It speeds up the generation of subsequent tokens by saving the past context's attention keys and values in memory."
      },
      {
        "letter": "C",
        "text": "It encrypts data streams traversing between local hosts and external AI APIs."
      },
      {
        "letter": "D",
        "text": "It automatically splits vector embeddings into multi-tenant sub-indices."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It speeds up the generation of subsequent tokens by saving the past context's attention keys and values in memory. fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind what is the primary technological benefit of utilizing KV (Key-Value) Caching in a production LLM inference server deployment.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-31",
    "number": 31,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "An enterprise network AI engine is granted access to live routing environments via tool-calling. When it receives a request to \"check network latency,\" the model outputs a specific JSON structured block containing {\"name\": \"ping_host\", \"arguments\": {\"ip\": \"10.0.0.1\"}}. What component of an agentic architecture interprets this JSON and sends the packet across the wire?",
    "options": [
      {
        "letter": "A",
        "text": "The Embedding Model"
      },
      {
        "letter": "B",
        "text": "The Tokenizer"
      },
      {
        "letter": "C",
        "text": "The Router Engine"
      },
      {
        "letter": "D",
        "text": "The Tool Execution Environment / Orchestrator"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "rationaleCorrect": "This scenario depends on agent behavior and control flow, and D. The Tool Execution Environment / Orchestrator is the option that best matches a scenario where an enterprise network AI engine is granted access to live routing environments via tool-calling. When it receives a request to \"check network latency,\" the model outputs a specific JSON structured block containing {\"name\": \"ping_host\", \"arguments\": {\"ip\": \"10. 0. 0. 1\"}}.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-32",
    "number": 32,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "An internal audit reveals that an AI model evaluating employee performances heavily penalizes workers who take parental or medical leave, despite those protection attributes being completely excluded from the dataset. The model learned this behavior implicitly through associated patterns like \"consecutive gaps in active email logs.\" This scenario describes which AI risk?",
    "options": [
      {
        "letter": "A",
        "text": "Explicit Data Poisoning"
      },
      {
        "letter": "B",
        "text": "Direct Prompt Hijacking"
      },
      {
        "letter": "C",
        "text": "Proxy Discrimination / Indirect Bias"
      },
      {
        "letter": "D",
        "text": "Inference Model Overclocking"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "In a scenario where an internal audit reveals that an AI model evaluating employee performances heavily penalizes workers who take parental or medical leave, despite those protection attributes being completely excluded from the dataset. The model learned this behavior implicitly through associated patterns like \"consecutive gaps in active email logs, C. Proxy Discrimination / Indirect Bias is the strongest fit because it adds the safeguard or oversight the situation is missing.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-33",
    "number": 33,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "A developer wants to utilize an LLM to generate an infrastructure configuration file for Cisco DNA Center. They want the output formatted strictly as valid JSON without any markdown formatting text, chatty preambles, or conversational introductions. Which approach guarantees this format?",
    "options": [
      {
        "letter": "A",
        "text": "Increasing model top-p filtering parameters to 1.0."
      },
      {
        "letter": "B",
        "text": "Setting system instructions to mandate JSON and enabling a native JSON-mode inference setting."
      },
      {
        "letter": "C",
        "text": "Running the prompt multiple times until the model complies."
      },
      {
        "letter": "D",
        "text": "Maximizing the model context window parameter space."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Setting system instructions to mandate JSON and enabling a native JSON-mode inference setting. fits best here because the question is really about prompt structure and control, and that choice matches a scenario where a developer wants to utilize an LLM to generate an infrastructure configuration file for Cisco DNA Center. They want the output formatted strictly as valid JSON without any markdown formatting text, chatty preambles, or conversational introductions.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-34",
    "number": 34,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Why is a standard SQL database generally poorly suited for performing semantic, context-aware document retrievals in a production enterprise RAG pipeline?",
    "options": [
      {
        "letter": "A",
        "text": "Standard SQL tables cannot attach metadata or source citations to passages."
      },
      {
        "letter": "B",
        "text": "SQL engines operate via exact character or keyword matches rather than multidimensional vector distance equations."
      },
      {
        "letter": "C",
        "text": "Standard SQL engines lack the authentication controls needed for enterprise RAG."
      },
      {
        "letter": "D",
        "text": "Relational systems cannot store more than one embedding vector per document."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. SQL engines operate via exact character or keyword matches rather than multidimensional vector distance equations is correct because it matches the model, retrieval, hosting, or infrastructure concept required in the concept being tested in the question.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-35",
    "number": 35,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "An AI operations framework processes 2,000 logs per minute. To lower runtime operational costs, an infrastructure engineer wants to pass log messages through an ultra-lightweight classification model (1 Billion parameters) first. If the log is deemed critical, it escalates to a high-capacity model (70 Billion parameters). What design pattern does this setup leverage?",
    "options": [
      {
        "letter": "A",
        "text": "Speculative Decoding"
      },
      {
        "letter": "B",
        "text": "Multi-Model Cascade / Model Routing"
      },
      {
        "letter": "C",
        "text": "Retrieval-Augmented Logic"
      },
      {
        "letter": "D",
        "text": "Context Ingestion Padding"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Multi-Model Cascade / Model Routing is correct because it aligns with the planning, tool-use, memory, or orchestration behavior required in a scenario where an AI operations framework processes 2,000 logs per minute. To lower runtime operational costs, an infrastructure engineer wants to pass log messages through an ultra-lightweight classification model (1 Billion parameters) first. If the log is deemed critical, it escalates to a high-capacity model (70 Billion parameters).",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-36",
    "number": 36,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "To prevent corporate developers from accidentally leaking proprietary Cisco IOS source code to public third-party LLM providers, which technology solution should a network administrator deploy at the enterprise network perimeter?",
    "options": [
      {
        "letter": "A",
        "text": "A standard Layer 4 stateful firewall block on all UDP connections"
      },
      {
        "letter": "B",
        "text": "An AI Gateway with Data Loss Prevention (DLP) regex filters and prompt interception capabilities"
      },
      {
        "letter": "C",
        "text": "A localized DHCP reservation pool policy change"
      },
      {
        "letter": "D",
        "text": "Symmetric hardware token generation modules"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. An AI Gateway with Data Loss Prevention (DLP) regex filters and prompt interception capabilities fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind to prevent corporate developers from accidentally leaking proprietary Cisco IOS source code to public third-party LLM providers, which technology solution should a network administrator deploy at the enterprise network perimeter.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-37",
    "number": 37,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "When deploying an open-source model like Llama-3 locally, a cloud engineer must allocate enough system memory. If an unquantized model has 8 billion parameters, and each parameter is represented as a 16-bit floating-point value (FP16 / 2 bytes), what is the absolute minimum amount of VRAM required just to load the model weights into memory?",
    "options": [
      {
        "letter": "A",
        "text": "4 GB"
      },
      {
        "letter": "B",
        "text": "8 GB"
      },
      {
        "letter": "C",
        "text": "16 GB"
      },
      {
        "letter": "D",
        "text": "32 GB"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. 16 GB is correct because it matches the model, retrieval, hosting, or infrastructure concept required in when deploying an open-source model like Llama-3 locally, a cloud engineer must allocate enough system memory.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-38",
    "number": 38,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "An enterprise development team is using an AI pipeline to auto-generate technical software reference documentation. The system operates by systematically reading raw application codebases, producing draft reference manuals, and publishing them directly to internal portals. Which risk factor must be audited closely during this pipeline?",
    "options": [
      {
        "letter": "A",
        "text": "The model modifying the production database schema dynamically"
      },
      {
        "letter": "B",
        "text": "Propagation of outdated technical guidelines or hallucinations into the published developer documentation"
      },
      {
        "letter": "C",
        "text": "Hardware cooling loop failures inside the edge terminal switches"
      },
      {
        "letter": "D",
        "text": "Compiler compilation license expirations on the documentation server"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "In a scenario where an enterprise development team is using an AI pipeline to auto-generate technical software reference documentation. The system operates by systematically reading raw application codebases, producing draft reference manuals, and publishing them directly to internal portals, B. Propagation of outdated technical guidelines or hallucinations into the published developer documentation is the strongest fit because it adds the safeguard or oversight the situation is missing.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-39",
    "number": 39,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "An autonomous AI agent encounters an unfamiliar error code while attempting to diagnose a software-defined network switch. Instead of failing immediately, the agent searches an internal knowledge base, reads a manual, adjusts its parameters, and tries a different sequence of debugging steps. Which architectural trait does this demonstrate?",
    "options": [
      {
        "letter": "A",
        "text": "Deterministic hardcoded execution"
      },
      {
        "letter": "B",
        "text": "Static sequence orchestration"
      },
      {
        "letter": "C",
        "text": "Dynamic adaptability and tool usage"
      },
      {
        "letter": "D",
        "text": "Basic prompt tokenization"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. Dynamic adaptability and tool usage makes the most sense here because it matches the engineering constraint the scenario is actually testing.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-40",
    "number": 40,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Under international AI compliance models and Cisco’s internal core risk framework, what documentation standard requires development teams to clearly declare a model's operational limitations, performance test baselines, training dataset breakdowns, and intended deployment constraints?",
    "options": [
      {
        "letter": "A",
        "text": "A Model Card / AI Factsheet"
      },
      {
        "letter": "B",
        "text": "A post-incident root-cause analysis report"
      },
      {
        "letter": "C",
        "text": "A software bill of materials for the training and serving stack"
      },
      {
        "letter": "D",
        "text": "An operational system telemetry log dump"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A. A Model Card / AI Factsheet is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in under international AI compliance models and Cisco’s internal core risk framework, what documentation standard requires development teams to clearly declare a model's operational limitations, performance test baselines, training dataset breakdowns, and intended deployment constraints.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-41",
    "number": 41,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "An engineering team is evaluating two different fine-tuned models for an automated network documentation summary tool. They want to programmatically score how well the model-generated summaries retain the factual essence of the source documentation without relying on expensive human reviewers. Which evaluation methodology should they implement?",
    "options": [
      {
        "letter": "A",
        "text": "Perplexity (PPL) verification"
      },
      {
        "letter": "B",
        "text": "LLM-as-a-Judge using structured rubrics"
      },
      {
        "letter": "C",
        "text": "Loss convergence charting"
      },
      {
        "letter": "D",
        "text": "Cosine similarity of raw tokens"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. LLM-as-a-Judge using structured rubrics is correct because it is the workflow or delivery practice most likely to solve the problem the prompt describes.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-42",
    "number": 42,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A developer is configuring a RAG pipeline that fetches data from thousands of network architecture PDFs. The retrieval engine works well for single sentences but completely loses context when paragraphs span across page boundaries. Which preprocessing step directly fixes this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Increasing model generation temperature"
      },
      {
        "letter": "B",
        "text": "Implementing recursive text splitting with a defined token overlap"
      },
      {
        "letter": "C",
        "text": "Compressing the PDFs into flat text strings without punctuation"
      },
      {
        "letter": "D",
        "text": "Switching from vector embeddings to exact keyword matches"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Implementing recursive text splitting with a defined token overlap fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind which preprocessing step directly fixes this issue.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-43",
    "number": 43,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A cloud defense analyst detects that an attacker is sending thousands of subtly altered prompt payloads to a public-facing classification model. The inputs contain nearly invisible pixel perturbations or character swaps designed to force the model into misclassifying a malicious file as safe. What specific type of AI attack is occurring?",
    "options": [
      {
        "letter": "A",
        "text": "Prompt Leaking"
      },
      {
        "letter": "B",
        "text": "Adversarial Example / Evasion Attack"
      },
      {
        "letter": "C",
        "text": "Data Poisoning"
      },
      {
        "letter": "D",
        "text": "Model Inversion"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Adversarial Example / Evasion Attack is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where a cloud defense analyst detects that an attacker is sending thousands of subtly altered prompt payloads to a public-facing classification model. The inputs contain nearly invisible pixel perturbations or character swaps designed to force the model into misclassifying a malicious file as safe.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-44",
    "number": 44,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "An enterprise development team integrates an AI agent into their deployment lifecycle to automate Infrastructure as Code (IaC) validations. The agent reads Terraform manifests and flags overly permissive AWS IAM security groups before deployment. What is the main structural advantage of using AI over standard rigid regex linters for this task?",
    "options": [
      {
        "letter": "A",
        "text": "AI guarantees policy-complete coverage with no false positives."
      },
      {
        "letter": "B",
        "text": "AI understands semantic context and complex configuration dependencies that regex rules miss."
      },
      {
        "letter": "C",
        "text": "AI can auto-remediate Terraform misconfigurations directly during the review step."
      },
      {
        "letter": "D",
        "text": "AI makes deterministic policy packs and approval gates unnecessary."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. AI understands semantic context and complex configuration dependencies that regex rules miss is correct because it is the workflow or delivery practice most likely to solve the problem the prompt describes.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-45",
    "number": 45,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An infrastructure architect notices that a production LLM application experiences severe latency spikes when many users query the chatbot at the same exact time. Upon inspection, the bottleneck is caused by the model processing the initial prompt text repeatedly for concurrent users. Which inference-side optimization technique addresses this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Model Quantization (INT4)"
      },
      {
        "letter": "B",
        "text": "Continuous Batching / PagedAttention"
      },
      {
        "letter": "C",
        "text": "Low-Rank Adaptation (LoRA)"
      },
      {
        "letter": "D",
        "text": "Context Window Compression"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Continuous Batching / PagedAttention fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind which inference-side optimization technique addresses this issue.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-46",
    "number": 46,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "An autonomous network triage agent uses a loop structure known as ReAct (Reasoning and Acting). During an ongoing incident, the agent encounters a broken interface link. What sequence of operations does the agent execute inside a standard ReAct loop iteration?",
    "options": [
      {
        "letter": "A",
        "text": "Encode -> Compress -> Decode"
      },
      {
        "letter": "B",
        "text": "Thought -> Action -> Observation"
      },
      {
        "letter": "C",
        "text": "Tokenize -> Cache -> Sample"
      },
      {
        "letter": "D",
        "text": "Embed -> Cluster -> Retrieve"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "This scenario depends on agent behavior and control flow, and B. Thought -> Action -> Observation is the option that best matches a scenario where an autonomous network triage agent uses a loop structure known as ReAct (Reasoning and Acting). During an ongoing incident, the agent encounters a broken interface link.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-47",
    "number": 47,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A financial institution deploys an AI model to automate loan approvals. European regulators audit the system and demand to know the exact mathematical weights and text variables that led to a specific user's application rejection. To comply with this regulatory demand, what framework must the AI system support?",
    "options": [
      {
        "letter": "A",
        "text": "High-Performance Compute (HPC) acceleration"
      },
      {
        "letter": "B",
        "text": "Explainable AI (XAI) / Model Interpretability"
      },
      {
        "letter": "C",
        "text": "Speculative Decoding"
      },
      {
        "letter": "D",
        "text": "Zero-shot prompting"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "In a scenario where a financial institution deploys an AI model to automate loan approvals. European regulators audit the system and demand to know the exact mathematical weights and text variables that led to a specific user's application rejection, B. Explainable AI (XAI) / Model Interpretability is the strongest fit because it adds the safeguard or oversight the situation is missing.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-48",
    "number": 48,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "When configuring an AI coding assistant across an enterprise, which strategy best mitigates the legal liability risk of the model spitting out copy-pasted, copyrighted open-source code fragments inside a commercial product?",
    "options": [
      {
        "letter": "A",
        "text": "Disabling retrieval from local repositories before code generation"
      },
      {
        "letter": "B",
        "text": "Enabling a code-citation or public-code matching filter in the assistant settings"
      },
      {
        "letter": "C",
        "text": "Limiting completions to short snippets under a fixed line threshold"
      },
      {
        "letter": "D",
        "text": "Setting the model's temperature to exactly 0"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Enabling a code-citation or public-code matching filter in the assistant settings is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-49",
    "number": 49,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "An AI practitioner is reviewing a validation report for a fine-tuned technical support model. The report lists a metric called ROUGE (Recall-Oriented Understudy for Gisting Evaluation). What does a high ROUGE score typically indicate?",
    "options": [
      {
        "letter": "A",
        "text": "The output uses a more diverse vocabulary than the reference text."
      },
      {
        "letter": "B",
        "text": "The model-generated text has high n-gram overlap with the ground-truth human reference text."
      },
      {
        "letter": "C",
        "text": "The model's training process has successfully converged to the lowest possible loss."
      },
      {
        "letter": "D",
        "text": "The response passed prompt-safety filtering with high confidence."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "This is the strongest answer because B. The model-generated text has high n-gram overlap with the ground-truth human reference text is the prompt technique or output control that best addresses a scenario where an AI practitioner is reviewing a validation report for a fine-tuned technical support model. The report lists a metric called ROUGE (Recall-Oriented Understudy for Gisting Evaluation).",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-50",
    "number": 50,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A developer wants to connect a local LLM to an internal database containing network telemetry logs. Instead of using a heavy vector database, they want the model to directly execute dynamically generated SQL commands to read the live database table securely. What security layer must sit between the model's output and the SQL engine?",
    "options": [
      {
        "letter": "A",
        "text": "A standard prompt-injection classification model"
      },
      {
        "letter": "B",
        "text": "An isolated read-only query execution environment with strict input sanitization"
      },
      {
        "letter": "C",
        "text": "A continuous fine-tuning pipeline"
      },
      {
        "letter": "D",
        "text": "A symmetric network hardware token router"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. An isolated read-only query execution environment with strict input sanitization is the best answer because it is the core model or infrastructure concept that resolves a scenario where a developer wants to connect a local LLM to an internal database containing network telemetry logs. Instead of using a heavy vector database, they want the model to directly execute dynamically generated SQL commands to read the live database table securely.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-51",
    "number": 51,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "A network engineer wants to secure an AI chat gateway from Indirect Prompt Injection. This threat occurs when an attacker hides malicious instructions inside an external asset that the AI reads while performing its duties. Which scenario represents this specific exploit vector?",
    "options": [
      {
        "letter": "A",
        "text": "A user directly typing \"ignore your rules\" into the chat box."
      },
      {
        "letter": "B",
        "text": "An attacker embedding an invisible prompt instruction into a public webpage that the AI scrapes during a RAG search."
      },
      {
        "letter": "C",
        "text": "A rogue employee altering the model's training parameters on local servers."
      },
      {
        "letter": "D",
        "text": "An API client overloading the gateway with millions of garbage tokens."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. An attacker embedding an invisible prompt instruction into a public webpage that the AI scrapes during a RAG search. fits best here because the question is really about prompt structure and control, and that choice matches a scenario where a network engineer wants to secure an AI chat gateway from Indirect Prompt Injection. This threat occurs when an attacker hides malicious instructions inside an external asset that the AI reads while performing its duties.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-52",
    "number": 52,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A data science team wants to adapt a massive foundational LLM to use a highly specific company acronym dictionary. They have limited compute budget and cannot afford to modify all 70 billion parameters of the base model. Which technique should they select to freeze the base weights and train a small, external adapter layer instead?",
    "options": [
      {
        "letter": "A",
        "text": "Full Parameter Fine-Tuning"
      },
      {
        "letter": "B",
        "text": "Parameter-Efficient Fine-Tuning (PEFT) using LoRA"
      },
      {
        "letter": "C",
        "text": "Model Quantization down to 2-bit integers"
      },
      {
        "letter": "D",
        "text": "Context Window Padding"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Parameter-Efficient Fine-Tuning (PEFT) using LoRA is correct because it matches the model, retrieval, hosting, or infrastructure concept required in a scenario where a data science team wants to adapt a massive foundational LLM to use a highly specific company acronym dictionary. They have limited compute budget and cannot afford to modify all 70 billion parameters of the base model.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-53",
    "number": 53,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An automated code migration tool uses an LLM to rewrite obsolete Perl code into structured Python. The code migration pipeline frequently fails because the Perl scripts are larger than the model's native context window input limit. What design pattern resolves this technical bottleneck?",
    "options": [
      {
        "letter": "A",
        "text": "Increasing model top-p parameters to 1.0"
      },
      {
        "letter": "B",
        "text": "Modularizing the code into functional blocks and processing them sequentially via a chunking workflow"
      },
      {
        "letter": "C",
        "text": "Lowering the model temperature configuration to 0"
      },
      {
        "letter": "D",
        "text": "Fine-tuning the model using unsupervised clustering datasets"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Modularizing the code into functional blocks and processing them sequentially via a chunking workflow is the best answer because it is the core model or infrastructure concept that resolves a scenario where an automated code migration tool uses an LLM to rewrite obsolete Perl code into structured Python. The code migration pipeline frequently fails because the Perl scripts are larger than the model's native context window input limit.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-54",
    "number": 54,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Why is a state management system (like a graph database or persistent memory state) critical in a multi-agent workflow that handles long-running software troubleshooting tasks?",
    "options": [
      {
        "letter": "A",
        "text": "It speeds up the tokenization of raw text inputs."
      },
      {
        "letter": "B",
        "text": "It allows multiple independent agents to read, update, and maintain a shared history of the problem context across execution steps."
      },
      {
        "letter": "C",
        "text": "It converts model weights from 16-bit to 4-bit configurations dynamically."
      },
      {
        "letter": "D",
        "text": "It ensures that the model operates deterministically without any temperature logic."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It allows multiple independent agents to read, update, and maintain a shared history of the problem context across execution steps. is the strongest answer because the scenario is testing agent control flow, and that option best reflects how the agent should behave.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-55",
    "number": 55,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Which core principle of Cisco's Responsible AI framework guarantees that automated systems have visible lines of ownership, and that human operators retain the final authority to override or correct automated system actions?",
    "options": [
      {
        "letter": "A",
        "text": "Scalability"
      },
      {
        "letter": "B",
        "text": "Accountability"
      },
      {
        "letter": "C",
        "text": "Contextuality"
      },
      {
        "letter": "D",
        "text": "Data Minimization"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Accountability is correct because it is the safeguard or governance control that best addresses the core requirement in this question.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-56",
    "number": 56,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "An engineering team is building a complex multi-agent system where a \"Supervisor Agent\" receives network trouble tickets and dynamically delegates sub-tasks to specialized worker agents (e.g., a BGP Expert Agent and an Interface Triage Agent). Which orchestration topology does this design represent?",
    "options": [
      {
        "letter": "A",
        "text": "Linear Chain topology"
      },
      {
        "letter": "B",
        "text": "Hub-and-Spoke / Hierarchical routing topology"
      },
      {
        "letter": "C",
        "text": "Decentralized Peer-to-Peer mesh topology"
      },
      {
        "letter": "D",
        "text": "Static Parallel voting topology"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Hub-and-Spoke / Hierarchical routing topology is correct because it aligns with the planning, tool-use, memory, or orchestration behavior required in a scenario where an engineering team is building a complex multi-agent system where a \"Supervisor Agent\" receives network trouble tickets and dynamically delegates sub-tasks to specialized worker agents (e. g. , a BGP Expert Agent and an Interface Triage Agent).",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-57",
    "number": 57,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "When building an enterprise RAG application using frameworks like LangChain or LlamaIndex, developers use a component called a Router. What is the primary operational task of a router within an orchestration pipeline?",
    "options": [
      {
        "letter": "A",
        "text": "It maps network IP packets between VLAN boundaries."
      },
      {
        "letter": "B",
        "text": "It dynamically analyzes an incoming user query and selects the most appropriate data tool or index to query (e.g., SQL database vs. Vector Vector store)."
      },
      {
        "letter": "C",
        "text": "It downscales model weight precision from FP16 to INT4 at runtime."
      },
      {
        "letter": "D",
        "text": "It compiles Python syntax into machine code."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It dynamically analyzes an incoming user query and selects the most appropriate data tool or index to query (e.g., SQL database vs. Vector Vector store). is the strongest answer because the scenario is testing agent control flow, and that option best reflects how the agent should behave.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-58",
    "number": 58,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A medical software vendor wants to use a cloud-hosted LLM to summarize clinical notes. To comply with strict data privacy mandates (like HIPAA), they deploy a proxy system that scans outgoing prompts, identifies Protected Health Information (PHI) such as patient names or medical ID numbers, and replaces them with generic placeholders (e.g., [PATIENT_A]) before sending the text to the cloud API. What is this security practice called?",
    "options": [
      {
        "letter": "A",
        "text": "Model Quantization"
      },
      {
        "letter": "B",
        "text": "Tokenization Layer Padding"
      },
      {
        "letter": "C",
        "text": "Data Pseudonymization / Masking"
      },
      {
        "letter": "D",
        "text": "Prompt Injection Interception"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. Data Pseudonymization / Masking is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where a medical software vendor wants to use a cloud-hosted LLM to summarize clinical notes. To comply with strict data privacy mandates (like HIPAA), they deploy a proxy system that scans outgoing prompts, identifies Protected Health Information (PHI) such as patient names or medical ID numbers, and replaces them with generic placeholders (e. g. , [PATIENT_A]) before sending the text to the cloud API.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-59",
    "number": 59,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "A developer wants an AI code assistant to refactor an asynchronous microservice written in Node.js. To get the highest quality refactored code block, the developer creates a prompt that outlines the exact performance constraints, details the structural layout of the current service, and appends a single comprehensive example of a perfectly refactored asynchronous pattern. What prompt methodology combination is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Zero-shot role shifting"
      },
      {
        "letter": "B",
        "text": "Context-augmented One-shot prompting"
      },
      {
        "letter": "C",
        "text": "Negative input filtering"
      },
      {
        "letter": "D",
        "text": "Speculative few-shot padding"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Context-augmented One-shot prompting is correct because it is the prompt design choice most likely to produce the requested behavior in a scenario where a developer wants an AI code assistant to refactor an asynchronous microservice written in Node. js. To get the highest quality refactored code block, the developer creates a prompt that outlines the exact performance constraints, details the structural layout of the current service, and appends a single comprehensive example of a perfectly refactored asynchronous pattern.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-60",
    "number": 60,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An AI operations center is deploying an open-source model on a multi-GPU server. They choose to split the model's architectural layers sequentially across separate GPUs, meaning GPU 1 processes layers 1–24, and then passes its intermediate activation states over to GPU 2 to process layers 25–48. What specific form of distributed parallel compute does this setup describe?",
    "options": [
      {
        "letter": "A",
        "text": "Tensor Parallelism (Intra-layer split)"
      },
      {
        "letter": "B",
        "text": "Pipeline Parallelism (Inter-layer split)"
      },
      {
        "letter": "C",
        "text": "Data Parallelism (Batch split)"
      },
      {
        "letter": "D",
        "text": "Fully Sharded Data Parallelism (FSDP)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Pipeline Parallelism (Inter-layer split) fits most directly because the question is testing the underlying model, retrieval, hosting, or systems concept behind what specific form of distributed parallel compute does this setup describe.",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-61",
    "number": 61,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "In an advanced multi-agent architecture, what is the main functional difference between a standard Stateless API tool call and a Stateful Agentic loop?",
    "options": [
      {
        "letter": "A",
        "text": "API tools require physical network hardware tokens; agentic loops do not."
      },
      {
        "letter": "B",
        "text": "API tools provide single-turn input/output execution, while agentic loops maintain continuous memory, self-reflect on tool outcomes, and run iteratively until a goal is achieved."
      },
      {
        "letter": "C",
        "text": "API tools can only return integer outputs; agentic loops can handle text variables."
      },
      {
        "letter": "D",
        "text": "Stateless API tools cannot be written in Python."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "This scenario depends on agent behavior and control flow, and B. API tools provide single-turn input/output execution, while agentic loops maintain continuous memory, self-reflect on tool outcomes, and run iteratively until a goal is achieved is the option that best matches a scenario where in an advanced multi-agent architecture, what is the main functional difference between a standard Stateless API tool call and a Stateful Agentic loop.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-62",
    "number": 62,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "An organization suffers a data breach when a developer copies a secret corporate API key directly into a prompt while debugging an automation script on a public AI playground website. The public model provider uses those prompt logs for public retraining, exposing the key to external users. Which security pillar was compromised?",
    "options": [
      {
        "letter": "A",
        "text": "Adversarial Evasion Resistance"
      },
      {
        "letter": "B",
        "text": "Multi-tenant Model Quantization"
      },
      {
        "letter": "C",
        "text": "Intellectual Property (IP) and Data Exfiltration Safeguards"
      },
      {
        "letter": "D",
        "text": "Algorithmic Explainability"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "In a scenario where an organization suffers a data breach when a developer copies a secret corporate API key directly into a prompt while debugging an automation script on a public AI playground website. The public model provider uses those prompt logs for public retraining, exposing the key to external users, C. Intellectual Property (IP) and Data Exfiltration Safeguards is the strongest fit because it adds the safeguard or oversight the situation is missing.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-63",
    "number": 63,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "An enterprise DevSecOps team configures an AI pipeline to auto-generate technical code comments for a legacy application. The team notices that while the text comments are highly coherent, the AI occasionally invents arbitrary framework features that don't exist in the project version. What evaluation metric should the team track to specifically measure the proportion of factual vs. hallucinated statements generated by the model?",
    "options": [
      {
        "letter": "A",
        "text": "Latency-per-token (LPT)"
      },
      {
        "letter": "B",
        "text": "BLEU score"
      },
      {
        "letter": "C",
        "text": "Faithfulness / Groundedness score (via LLM-as-a-Judge)"
      },
      {
        "letter": "D",
        "text": "Context window footprint ratio"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. Faithfulness / Groundedness score (via LLM-as-a-Judge) makes the most sense here because it matches the engineering constraint the scenario is actually testing.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-64",
    "number": 64,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "An engineer builds a network security agent that uses a Self-Correction design pattern. The agent generates a Cisco ASA firewall configuration template, runs an internal parsing validation tool on it, catches a syntax error, and then reads the error log to fix its own script before showing it to the human operator. Why is this loop fundamentally superior to a basic single-turn prompt execution?",
    "options": [
      {
        "letter": "A",
        "text": "It completely bypasses the token serialization stage."
      },
      {
        "letter": "B",
        "text": "It allows the system to autonomously catch and debug its own runtime logic errors before final delivery."
      },
      {
        "letter": "C",
        "text": "It reduces the total operational cost to zero."
      },
      {
        "letter": "D",
        "text": "It makes the model operate at 100% mathematical determinism without temperature controls."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It allows the system to autonomously catch and debug its own runtime logic errors before final delivery is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where an engineer builds a network security agent that uses a Self-Correction design pattern. The agent generates a Cisco ASA firewall configuration template, runs an internal parsing validation tool on it, catches a syntax error, and then reads the error log to fix its own script before showing it to the human operator.",
    "rationaleIncorrect": "The other options change the wrong prompt control, confuse prompting with another design choice, or would not reliably produce the requested behavior.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-65",
    "number": 65,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A developer wants to implement a advanced retrieval technique in LlamaIndex called Sentence Window Retrieval. How does this technique function to improve RAG performance?",
    "options": [
      {
        "letter": "A",
        "text": "It restricts the LLM context window space to exactly one sentence at a time to reduce server billing."
      },
      {
        "letter": "B",
        "text": "It retrieves a highly granular single-sentence chunk from the vector database for high similarity matching, but expands the text window to include surrounding sentences before passing it to the LLM context block."
      },
      {
        "letter": "C",
        "text": "It converts all incoming words into standard cryptographic hashes."
      },
      {
        "letter": "D",
        "text": "It uses a custom deep-learning router to skip text chunks completely."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It retrieves a highly granular single-sentence chunk from the vector database for high similarity matching, but expands the text window to include surrounding sentences before passing it to the LLM context block. is the best answer because it is the core model or infrastructure concept that resolves a scenario where a developer wants to implement a advanced retrieval technique in LlamaIndex called Sentence Window Retrieval.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-66",
    "number": 66,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A company establishes a corporate \"System Registry\" where all internal AI agents must be explicitly cataloged along with their approved API scopes, target actions, and data access clearings. Which core corporate governance objective is fulfilled by establishing this registry?",
    "options": [
      {
        "letter": "A",
        "text": "Maximizing speculative decoding velocity"
      },
      {
        "letter": "B",
        "text": "Asset Tracking, Visibility, and Risk Management across the AI landscape"
      },
      {
        "letter": "C",
        "text": "Eliminating the necessity for vector data embeddings"
      },
      {
        "letter": "D",
        "text": "Automating model bit-width downscaling pipelines"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Asset Tracking, Visibility, and Risk Management across the AI landscape is the best answer because the scenario turns on a security, privacy, or governance control, and this option is the one that directly provides it.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-67",
    "number": 67,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "When deploying LLM inference clusters at scale, what is the primary architectural limitation or disadvantage of using an extreme quantization approach, such as downscaling an open-source model's weights all the way from FP16 to 2-bit precision (INT2)?",
    "options": [
      {
        "letter": "A",
        "text": "The model's VRAM footprint scales up by four times."
      },
      {
        "letter": "B",
        "text": "Severe degradation of model reasoning capabilities, language syntax coherence, and overall intelligence metrics."
      },
      {
        "letter": "C",
        "text": "Complete loss of compatibility with standard Python runtimes."
      },
      {
        "letter": "D",
        "text": "Extreme increases in physical power consumption across the GPU chassis."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Severe degradation of model reasoning capabilities, language syntax coherence, and overall intelligence metrics is correct because it matches the model, retrieval, hosting, or infrastructure concept required in when deploying LLM inference clusters at scale, what is the primary architectural limitation or disadvantage of using an extreme quantization approach, such as downscaling an open-source model's weights all the way from FP16 to 2-bit precision (INT2).",
    "rationaleIncorrect": "The other options point to different model or infrastructure ideas, but they do not satisfy the specific technical requirement in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-68",
    "number": 68,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A DevOps team wants to use an AI engine to auto-generate comprehensive infrastructure blueprints for global enterprise data centers using JSON formats. To guarantee that the model outputs are programmatically parseable by downstream orchestrators without any conversational chatter, which setup should the team deploy?",
    "options": [
      {
        "letter": "A",
        "text": "Setting temperature to 1.0 and widening the top-p filter pool"
      },
      {
        "letter": "B",
        "text": "Enabling an explicit JSON Schema constraint in the model inference API parameters (Structured Outputs)"
      },
      {
        "letter": "C",
        "text": "Passing the entire document database into a context window padding array"
      },
      {
        "letter": "D",
        "text": "Forcing the model to run inside an offline Pipeline Parallel cluster"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. Enabling an explicit JSON Schema constraint in the model inference API parameters (Structured Outputs) is the best answer because it is the core model or infrastructure concept that resolves a scenario where a DevOps team wants to use an AI engine to auto-generate comprehensive infrastructure blueprints for global enterprise data centers using JSON formats.",
    "rationaleIncorrect": "The other options point to different engineering activities or unrealistic guarantees, but they do not solve the workflow constraint in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-69",
    "number": 69,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Within enterprise search architectures, what is the core functional relationship between a Retriever and a Reranker model?",
    "options": [
      {
        "letter": "A",
        "text": "The retriever downscales data weights, and the reranker trains new parameter vectors."
      },
      {
        "letter": "B",
        "text": "The retriever acts as a stateful agent, and the reranker functions as a stateless token parser."
      },
      {
        "letter": "C",
        "text": "The retriever runs a fast, coarse semantic search to fetch a large pool of candidate documents (e.g., top 50), and the reranker runs a slower, high-precision deep learning calculation to sort those 50 documents into the absolute best order for the LLM."
      },
      {
        "letter": "D",
        "text": "The retriever parses raw PDF documents, and the reranker builds SQL schemas."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "rationaleCorrect": "C. The retriever runs a fast, coarse semantic search to fetch a large pool of candidate documents (e.g., top 50), and the reranker runs a slower, high-precision deep learning calculation to sort those 50 documents into the absolute best order for the LLM. is the strongest answer because the scenario is testing agent control flow, and that option best reflects how the agent should behave.",
    "rationaleIncorrect": "The other options reference adjacent ideas, but they do not match the agent behavior, tool flow, or orchestration pattern being tested here.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-70",
    "number": 70,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A networking company is implementing an AI system to triage employee security clearances. Under standard algorithmic fairness and ethical AI frameworks, why must the engineering team explicitly avoid using a \"black-box\" deep learning model that offers zero explainability features for this specific task?",
    "options": [
      {
        "letter": "A",
        "text": "Unexplainable models require three times more network switches to run."
      },
      {
        "letter": "B",
        "text": "It prevents affected employees from understanding or auditing the logical justification behind a high-risk access rejection, violating corporate transparency and accountability guidelines."
      },
      {
        "letter": "C",
        "text": "Black-box models automatically broadcast prompt inputs to public internet search indexes."
      },
      {
        "letter": "D",
        "text": "Internal IT teams cannot verify token usage pricing scales without explainability matrices."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "B. It prevents affected employees from understanding or auditing the logical justification behind a high-risk access rejection, violating corporate transparency and accountability guidelines is correct because it is the control that best addresses the governance, safety, privacy, or fairness requirement in a scenario where a networking company is implementing an AI system to triage employee security clearances.",
    "rationaleIncorrect": "The other options do not add the governance, privacy, security, or fairness safeguard that this scenario requires.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-71",
    "number": 71,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An architect is choosing between a managed cloud LLM API and a locally hosted open-source model for an internal support assistant that handles regulated customer records. Which consideration most strongly favors local deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Lower need for prompt engineering because local models are more deterministic"
      },
      {
        "letter": "B",
        "text": "Greater control over data privacy, residency, and network boundaries"
      },
      {
        "letter": "C",
        "text": "Automatic access to the broadest model marketplace without vendor agreements"
      },
      {
        "letter": "D",
        "text": "Elimination of all infrastructure management and observability requirements"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "Greater control over data privacy, residency, and network boundaries is correct because it best matches the model capability, hosting, context-window, or retrieval concept described in the scenario.",
    "rationaleIncorrect": "The other options either confuse adjacent infrastructure or model concepts, overstate guarantees, or solve a different problem than the one in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-72",
    "number": 72,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A support engineer sends an incident bundle whose total tokens exceed the model's context window. What is the most likely technical implication?",
    "options": [
      {
        "letter": "A",
        "text": "The model automatically creates a fine-tuned adapter for the overflow content"
      },
      {
        "letter": "B",
        "text": "The application must chunk, summarize, or otherwise reduce the input before full processing"
      },
      {
        "letter": "C",
        "text": "The model reclassifies the request as an embedding job and bypasses generation"
      },
      {
        "letter": "D",
        "text": "The provider caches the entire overflow and resumes generation in a second hidden pass"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "The application must chunk, summarize, or otherwise reduce the input before full processing is correct because it best matches the model capability, hosting, context-window, or retrieval concept described in the scenario.",
    "rationaleIncorrect": "The other options either confuse adjacent infrastructure or model concepts, overstate guarantees, or solve a different problem than the one in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-73",
    "number": 73,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An engineer needs a single model workflow that can inspect UI screenshots, reason over network diagrams, and answer follow-up questions based on short text prompts. What capability is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Multimodal reasoning across text and visual inputs"
      },
      {
        "letter": "B",
        "text": "Static token compression with deterministic decoding"
      },
      {
        "letter": "C",
        "text": "Symbolic parsing with no latent representation layer"
      },
      {
        "letter": "D",
        "text": "Single-label classification with no conversational state"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Multimodal reasoning across text and visual inputs is correct because it best matches the model capability, hosting, context-window, or retrieval concept described in the scenario.",
    "rationaleIncorrect": "The other options either confuse adjacent infrastructure or model concepts, overstate guarantees, or solve a different problem than the one in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-74",
    "number": 74,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "In a Retrieval-Augmented Generation workflow, what is the primary role of document embeddings?",
    "options": [
      {
        "letter": "A",
        "text": "To compress the source corpus into a smaller archival format"
      },
      {
        "letter": "B",
        "text": "To represent content numerically so semantically related items can be retrieved by similarity"
      },
      {
        "letter": "C",
        "text": "To convert natural language into executable database transactions"
      },
      {
        "letter": "D",
        "text": "To force the LLM to cite only one chunk per answer"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "To represent content numerically so semantically related items can be retrieved by similarity is correct because it best matches the model capability, hosting, context-window, or retrieval concept described in the scenario.",
    "rationaleIncorrect": "The other options either confuse adjacent infrastructure or model concepts, overstate guarantees, or solve a different problem than the one in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-75",
    "number": 75,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Why might a team intentionally select a smaller specialized model from a model hub instead of the largest general-purpose model available?",
    "options": [
      {
        "letter": "A",
        "text": "Smaller models inherently remove hallucinations on narrow tasks"
      },
      {
        "letter": "B",
        "text": "They may provide a better tradeoff among latency, cost, and fit for the target workload"
      },
      {
        "letter": "C",
        "text": "Larger models cannot support multimodal inputs in production"
      },
      {
        "letter": "D",
        "text": "Specialized models eliminate the need for retrieval and guardrails entirely"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "They may provide a better tradeoff among latency, cost, and fit for the target workload is correct because it best matches the model capability, hosting, context-window, or retrieval concept described in the scenario.",
    "rationaleIncorrect": "The other options either confuse adjacent infrastructure or model concepts, overstate guarantees, or solve a different problem than the one in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-76",
    "number": 76,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A team is comparing two deployment options for a helpdesk summarization model. The cloud API is cheaper to start with and scales easily, while the local deployment offers lower data-exposure risk but higher operational overhead. What tradeoff is being evaluated most directly?",
    "options": [
      {
        "letter": "A",
        "text": "Hosting tradeoffs across cost, privacy, latency, and scalability"
      },
      {
        "letter": "B",
        "text": "Model distillation versus reinforcement learning tradeoffs"
      },
      {
        "letter": "C",
        "text": "Fine-tuning versus pretraining tradeoffs"
      },
      {
        "letter": "D",
        "text": "Batch inference versus speculative decoding tradeoffs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Hosting tradeoffs across cost, privacy, latency, and scalability is correct because it best matches the model capability, hosting, context-window, or retrieval concept described in the scenario.",
    "rationaleIncorrect": "The other options either confuse adjacent infrastructure or model concepts, overstate guarantees, or solve a different problem than the one in the prompt.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-77",
    "number": 77,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Which prompt pattern most directly establishes the model's role, the task boundaries, and the required output format before work begins?",
    "options": [
      {
        "letter": "A",
        "text": "Roles, instructions, and constraints"
      },
      {
        "letter": "B",
        "text": "Chunking, overlap, and reranking"
      },
      {
        "letter": "C",
        "text": "Quantization, pruning, and caching"
      },
      {
        "letter": "D",
        "text": "Embedding, indexing, and routing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Roles, instructions, and constraints is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-78",
    "number": 78,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "An operator refines a model prompt over three cycles by comparing outputs, clarifying requirements, and correcting ambiguity after each attempt. Which prompting approach is this?",
    "options": [
      {
        "letter": "A",
        "text": "Iterative prompting"
      },
      {
        "letter": "B",
        "text": "Zero-shot prompting"
      },
      {
        "letter": "C",
        "text": "Gradient-based fine-tuning"
      },
      {
        "letter": "D",
        "text": "Knowledge distillation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Iterative prompting is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-79",
    "number": 79,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Why is it useful to specify attributes such as composition, lighting, and style when prompting an image-generation model?",
    "options": [
      {
        "letter": "A",
        "text": "Because visual generation benefits from explicit constraints on non-text output attributes"
      },
      {
        "letter": "B",
        "text": "Because the model otherwise disables its safety filters automatically"
      },
      {
        "letter": "C",
        "text": "Because image prompts must include SQL-like syntax to be valid"
      },
      {
        "letter": "D",
        "text": "Because detailed prompts force the provider to retain no logs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "Because the model otherwise disables its safety filters automatically is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-80",
    "number": 80,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Which scenario best represents an indirect prompt injection attack?",
    "options": [
      {
        "letter": "A",
        "text": "A user enters a direct jailbreak attempt into the same chat session"
      },
      {
        "letter": "B",
        "text": "A hostile instruction is hidden in a retrieved webpage that the assistant later treats as source content"
      },
      {
        "letter": "C",
        "text": "A developer lowers the temperature in a production workflow"
      },
      {
        "letter": "D",
        "text": "A provider rotates API credentials during a maintenance window"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "rationaleCorrect": "A hostile instruction is hidden in a retrieved webpage that the assistant later treats as source content is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-81",
    "number": 81,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Which responsible AI principle is most directly reinforced when an organization defines clear ownership for an AI system and specifies who can override its decisions?",
    "options": [
      {
        "letter": "A",
        "text": "Accountability"
      },
      {
        "letter": "B",
        "text": "Compression efficiency"
      },
      {
        "letter": "C",
        "text": "Context persistence"
      },
      {
        "letter": "D",
        "text": "Output diversity"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Accountability is correct because it best matches the governance, privacy, fairness, or risk-control principle that directly addresses the scenario.",
    "rationaleIncorrect": "The other options touch adjacent AI concerns, but they do not address the specific governance or security control failure described in the question.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-82",
    "number": 82,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A company removes customer names, account numbers, and phone numbers from support transcripts before sending them to a third-party LLM provider. What control objective is this most directly supporting?",
    "options": [
      {
        "letter": "A",
        "text": "Data privacy and exposure reduction"
      },
      {
        "letter": "B",
        "text": "Response determinism and reproducibility"
      },
      {
        "letter": "C",
        "text": "Long-context summarization quality"
      },
      {
        "letter": "D",
        "text": "Autonomous agent planning accuracy"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Data privacy and exposure reduction is correct because it best matches the governance, privacy, fairness, or risk-control principle that directly addresses the scenario.",
    "rationaleIncorrect": "The other options touch adjacent AI concerns, but they do not address the specific governance or security control failure described in the question.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-83",
    "number": 83,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Why is AI-generated misinformation treated as a governance concern rather than only a model-quality issue?",
    "options": [
      {
        "letter": "A",
        "text": "Because plausible but false content can spread quickly and influence downstream decisions or users"
      },
      {
        "letter": "B",
        "text": "Because misinformation only occurs in locally hosted models with small context windows"
      },
      {
        "letter": "C",
        "text": "Because governance teams are responsible for GPU procurement and capacity planning"
      },
      {
        "letter": "D",
        "text": "Because misinformation automatically implies a data breach has already occurred"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Because plausible but false content can spread quickly and influence downstream decisions or users is correct because it best matches the governance, privacy, fairness, or risk-control principle that directly addresses the scenario.",
    "rationaleIncorrect": "The other options touch adjacent AI concerns, but they do not address the specific governance or security control failure described in the question.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-84",
    "number": 84,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Which activity best demonstrates enterprise AI governance in practice?",
    "options": [
      {
        "letter": "A",
        "text": "Maintaining policies, approvals, inventories, and risk reviews for AI use cases"
      },
      {
        "letter": "B",
        "text": "Disabling model logs to reduce storage cost"
      },
      {
        "letter": "C",
        "text": "Increasing temperature for creative exploration in regulated workflows"
      },
      {
        "letter": "D",
        "text": "Replacing all human review with final-answer automation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Maintaining policies, approvals, inventories, and risk reviews for AI use cases is correct because it best matches the governance, privacy, fairness, or risk-control principle that directly addresses the scenario.",
    "rationaleIncorrect": "The other options touch adjacent AI concerns, but they do not address the specific governance or security control failure described in the question.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-85",
    "number": 85,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "An internal model makes systematically worse recommendations for a subgroup because the training data underrepresents them. Which risk does this illustrate most directly?",
    "options": [
      {
        "letter": "A",
        "text": "Bias caused by unrepresentative training data"
      },
      {
        "letter": "B",
        "text": "Hallucination caused by insufficient context-window length"
      },
      {
        "letter": "C",
        "text": "Prompt leakage caused by missing output truncation"
      },
      {
        "letter": "D",
        "text": "Overfitting caused by vector-database corruption"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Bias caused by unrepresentative training data is correct because it best matches the governance, privacy, fairness, or risk-control principle that directly addresses the scenario.",
    "rationaleIncorrect": "The other options touch adjacent AI concerns, but they do not address the specific governance or security control failure described in the question.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-86",
    "number": 86,
    "sourceName": "questions-source.txt",
    "domain": "Data Research and Analysis",
    "officialDomain": "Domain 4: Data Research and Analysis",
    "text": "How can AI most usefully assist during exploratory data analysis (EDA)?",
    "options": [
      {
        "letter": "A",
        "text": "By surfacing candidate patterns, anomalies, and follow-up questions for analysts to verify"
      },
      {
        "letter": "B",
        "text": "By proving causal relationships without any statistical testing"
      },
      {
        "letter": "C",
        "text": "By replacing the need for raw-data inspection and source validation"
      },
      {
        "letter": "D",
        "text": "By guaranteeing that generated summaries are free from unsupported inference"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "By surfacing candidate patterns, anomalies, and follow-up questions for analysts to verify is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-87",
    "number": 87,
    "sourceName": "questions-source.txt",
    "domain": "Data Research and Analysis",
    "officialDomain": "Domain 4: Data Research and Analysis",
    "text": "Which task is the clearest example of AI-assisted automated data preparation?",
    "options": [
      {
        "letter": "A",
        "text": "Detecting missing values and standardizing inconsistent field formats across source files"
      },
      {
        "letter": "B",
        "text": "Expanding a model's context window for longer prompts"
      },
      {
        "letter": "C",
        "text": "Provisioning GPUs for inference autoscaling"
      },
      {
        "letter": "D",
        "text": "Registering external tools through MCP"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Detecting missing values and standardizing inconsistent field formats across source files is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-88",
    "number": 88,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "When using AI to analyze sensitive enterprise datasets, which safeguard is most important before analysis begins?",
    "options": [
      {
        "letter": "A",
        "text": "Applying access controls, masking, or similar exposure-prevention measures to sensitive fields"
      },
      {
        "letter": "B",
        "text": "Increasing output temperature so summaries become less repetitive"
      },
      {
        "letter": "C",
        "text": "Eliminating audit logs to reduce retention risk"
      },
      {
        "letter": "D",
        "text": "Converting every dataset into image form before processing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Applying access controls, masking, or similar exposure-prevention measures to sensitive fields is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-89",
    "number": 89,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "Which example best shows AI contributing across the software development lifecycle rather than only during coding?",
    "options": [
      {
        "letter": "A",
        "text": "Using AI for requirement drafting, prototype scaffolding, test support, and deployment readiness checks"
      },
      {
        "letter": "B",
        "text": "Using AI only after deployment to create release announcements"
      },
      {
        "letter": "C",
        "text": "Restricting AI to spreadsheet formatting for sprint metrics"
      },
      {
        "letter": "D",
        "text": "Replacing version control with prompt history and chat logs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Using AI for requirement drafting, prototype scaffolding, test support, and deployment readiness checks is correct because it best matches the software-delivery or workflow-automation practice most directly tied to the scenario.",
    "rationaleIncorrect": "The other options describe adjacent engineering activities, unrealistic guarantees, or actions that do not improve the workflow in the way the question asks.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-90",
    "number": 90,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "What is a realistic advantage of AI-assisted code generation during prototyping?",
    "options": [
      {
        "letter": "A",
        "text": "It accelerates first-pass scaffolding that engineers can then review and refine"
      },
      {
        "letter": "B",
        "text": "It guarantees production-safe code without testing or security review"
      },
      {
        "letter": "C",
        "text": "It removes the need to understand dependencies and runtime behavior"
      },
      {
        "letter": "D",
        "text": "It prevents all integration regressions by design"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It accelerates first-pass scaffolding that engineers can then review and refine is correct because it best matches the software-delivery or workflow-automation practice most directly tied to the scenario.",
    "rationaleIncorrect": "The other options describe adjacent engineering activities, unrealistic guarantees, or actions that do not improve the workflow in the way the question asks.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-91",
    "number": 91,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "Why is workflow monitoring important in AI-powered automation pipelines?",
    "options": [
      {
        "letter": "A",
        "text": "It helps teams detect output-quality issues, failures, latency changes, and cost drift over time"
      },
      {
        "letter": "B",
        "text": "It removes the need for logging and operational observability"
      },
      {
        "letter": "C",
        "text": "It guarantees that retrieval pipelines never return irrelevant documents"
      },
      {
        "letter": "D",
        "text": "It prevents agents from needing tool permissions or approval workflows"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It helps teams detect output-quality issues, failures, latency changes, and cost drift over time is correct because it best matches the software-delivery or workflow-automation practice most directly tied to the scenario.",
    "rationaleIncorrect": "The other options describe adjacent engineering activities, unrealistic guarantees, or actions that do not improve the workflow in the way the question asks.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-92",
    "number": 92,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "How does poor context-window management typically affect rapid prototyping workflows?",
    "options": [
      {
        "letter": "A",
        "text": "It can increase cost and latency while also causing relevant context to be dropped or over-compressed"
      },
      {
        "letter": "B",
        "text": "It guarantees lower cost because more context improves caching ratios automatically"
      },
      {
        "letter": "C",
        "text": "It only matters for multimodal image-generation systems"
      },
      {
        "letter": "D",
        "text": "It forces the provider to fine-tune the model on each request"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It can increase cost and latency while also causing relevant context to be dropped or over-compressed is correct because it best matches the software-delivery or workflow-automation practice most directly tied to the scenario.",
    "rationaleIncorrect": "The other options describe adjacent engineering activities, unrealistic guarantees, or actions that do not improve the workflow in the way the question asks.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-93",
    "number": 93,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "Which scenario best reflects AI improving code quality rather than merely generating code?",
    "options": [
      {
        "letter": "A",
        "text": "The assistant explains a stack trace, identifies a likely null-handling bug, and proposes a targeted patch"
      },
      {
        "letter": "B",
        "text": "The assistant creates a README title and project tagline for a demo repository"
      },
      {
        "letter": "C",
        "text": "The assistant compresses build artifacts before publication"
      },
      {
        "letter": "D",
        "text": "The assistant changes branch names to fit a team convention"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "The assistant explains a stack trace, identifies a likely null-handling bug, and proposes a targeted patch is correct because it best matches the software-delivery or workflow-automation practice most directly tied to the scenario.",
    "rationaleIncorrect": "The other options describe adjacent engineering activities, unrealistic guarantees, or actions that do not improve the workflow in the way the question asks.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-94",
    "number": 94,
    "sourceName": "questions-source.txt",
    "domain": "Development and Workflow Automation",
    "officialDomain": "Domain 5: Development and Workflow Automation",
    "text": "What is the clearest example of AI assisting during testing rather than during implementation?",
    "options": [
      {
        "letter": "A",
        "text": "Generating boundary-case unit test ideas from an API contract"
      },
      {
        "letter": "B",
        "text": "Rewriting a product requirement into a user story"
      },
      {
        "letter": "C",
        "text": "Summarizing a design meeting into action items"
      },
      {
        "letter": "D",
        "text": "Converting a diagram into a presentation slide deck"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Generating boundary-case unit test ideas from an API contract is correct because it best matches the software-delivery or workflow-automation practice most directly tied to the scenario.",
    "rationaleIncorrect": "The other options describe adjacent engineering activities, unrealistic guarantees, or actions that do not improve the workflow in the way the question asks.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-95",
    "number": 95,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "What most clearly differentiates an agentic AI workflow from a basic generative AI chatbot?",
    "options": [
      {
        "letter": "A",
        "text": "The agent can plan, invoke tools, track state, and iterate toward a goal across multiple steps"
      },
      {
        "letter": "B",
        "text": "The agent always produces shorter outputs because it compresses reasoning into embeddings"
      },
      {
        "letter": "C",
        "text": "The agent is limited to static FAQ responses to preserve determinism"
      },
      {
        "letter": "D",
        "text": "The agent cannot interact with systems outside the initial prompt context"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "The agent can plan, invoke tools, track state, and iterate toward a goal across multiple steps is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-96",
    "number": 96,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Which design principle is central to a capable autonomous AI agent?",
    "options": [
      {
        "letter": "A",
        "text": "Planning, acting, observing outcomes, and adapting subsequent steps"
      },
      {
        "letter": "B",
        "text": "Removing all tool feedback so the agent relies only on prior training"
      },
      {
        "letter": "C",
        "text": "Fixing the output format and prohibiting all branching behavior"
      },
      {
        "letter": "D",
        "text": "Restricting the agent to one-turn generation without memory or state"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Planning, acting, observing outcomes, and adapting subsequent steps is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-97",
    "number": 97,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "In the context of agentic AI, what is the practical purpose of Model Context Protocol (MCP) primitives?",
    "options": [
      {
        "letter": "A",
        "text": "They standardize how models and agents connect to tools, resources, and reusable prompt surfaces"
      },
      {
        "letter": "B",
        "text": "They compress neural network weights so larger models fit into local VRAM"
      },
      {
        "letter": "C",
        "text": "They replace approval workflows by turning agent output into implicit authorization"
      },
      {
        "letter": "D",
        "text": "They ensure retrieval systems never need embeddings or vector indexes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "They standardize how models and agents connect to tools, resources, and reusable prompt surfaces is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-98",
    "number": 98,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Why is human-in-the-loop (HITL) especially important for agentic workflows that can change operational systems?",
    "options": [
      {
        "letter": "A",
        "text": "It inserts approval or correction checkpoints before high-impact actions are finalized"
      },
      {
        "letter": "B",
        "text": "It guarantees that the agent no longer needs observability data or audit logs"
      },
      {
        "letter": "C",
        "text": "It removes the need for least-privilege permissions on connected tools"
      },
      {
        "letter": "D",
        "text": "It prevents the agent from using structured outputs or schemas"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It inserts approval or correction checkpoints before high-impact actions are finalized is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-99",
    "number": 99,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An agent collects asset information from one system, converts fields to match a CRM schema, and sends the transformed payload to a case-management API. Which capability is it exercising most directly?",
    "options": [
      {
        "letter": "A",
        "text": "Data transformation and mapping across systems"
      },
      {
        "letter": "B",
        "text": "Prompt injection through cross-domain retrieval"
      },
      {
        "letter": "C",
        "text": "Model quantization for lower inference cost"
      },
      {
        "letter": "D",
        "text": "Context-window extension through recursive chunking"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Data transformation and mapping across systems is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-100",
    "number": 100,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Which scenario best demonstrates orchestration in an agentic AI system?",
    "options": [
      {
        "letter": "A",
        "text": "A supervisor agent delegates subtasks to specialized workers and combines their outputs into a final result"
      },
      {
        "letter": "B",
        "text": "A model returns a single standalone summary from one prompt with no tool usage"
      },
      {
        "letter": "C",
        "text": "A vector database stores embeddings for later retrieval by a separate application"
      },
      {
        "letter": "D",
        "text": "A fine-tuning job updates weights using labeled examples offline"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A supervisor agent delegates subtasks to specialized workers and combines their outputs into a final result is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-101",
    "number": 101,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An operations engineer wants an LLM to produce only a JSON object containing `severity`, `owner`, and `next_step` fields for incident triage. Which prompt addition best reinforces that requirement before any downstream validation occurs?",
    "options": [
      {
        "letter": "A",
        "text": "A role declaration plus an explicit schema-like output constraint"
      },
      {
        "letter": "B",
        "text": "A request to \"be creative but concise\" in the final answer"
      },
      {
        "letter": "C",
        "text": "A note that the user prefers short paragraphs over bullet points"
      },
      {
        "letter": "D",
        "text": "A temperature increase to improve structural consistency"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A role declaration plus an explicit schema-like output constraint is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-102",
    "number": 102,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "A team is improving an internal assistant by adding three high-quality examples showing how raw alerts should be rewritten into executive-friendly summaries. Which prompting technique is this?",
    "options": [
      {
        "letter": "A",
        "text": "Few-shot prompting"
      },
      {
        "letter": "B",
        "text": "Reinforcement learning"
      },
      {
        "letter": "C",
        "text": "Distillation"
      },
      {
        "letter": "D",
        "text": "Quantization-aware tuning"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Few-shot prompting is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-103",
    "number": 103,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "What is the main benefit of chained prompting in a complex workflow?",
    "options": [
      {
        "letter": "A",
        "text": "It decomposes a task into intermediate steps that can be checked or refined separately"
      },
      {
        "letter": "B",
        "text": "It guarantees lower token usage than a single prompt in every case"
      },
      {
        "letter": "C",
        "text": "It removes the need for retrieval or external context"
      },
      {
        "letter": "D",
        "text": "It forces the model to reveal hidden reasoning tokens to the application"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It decomposes a task into intermediate steps that can be checked or refined separately is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-104",
    "number": 104,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An audio-generation workflow keeps producing outputs with the correct topic but the wrong style. What is the most appropriate prompt adjustment?",
    "options": [
      {
        "letter": "A",
        "text": "Add explicit style and format constraints for the target audio output"
      },
      {
        "letter": "B",
        "text": "Remove all constraints so the model has more freedom to generalize"
      },
      {
        "letter": "C",
        "text": "Replace the prompt with a vector embedding and skip generation"
      },
      {
        "letter": "D",
        "text": "Lower the API timeout to encourage concise results"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Add explicit style and format constraints for the target audio output is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-105",
    "number": 105,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Which scenario is the clearest example of a direct prompt injection attempt?",
    "options": [
      {
        "letter": "A",
        "text": "A user explicitly instructs the assistant to ignore prior rules and expose hidden instructions"
      },
      {
        "letter": "B",
        "text": "A malicious sentence is embedded in a PDF later indexed for retrieval"
      },
      {
        "letter": "C",
        "text": "A reranker incorrectly promotes a weak passage to the top of the candidate set"
      },
      {
        "letter": "D",
        "text": "A developer caches a system prompt for repeated requests"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A user explicitly instructs the assistant to ignore prior rules and expose hidden instructions is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-106",
    "number": 106,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Why is it risky to let retrieved documents overwrite the authority of system-level instructions in an enterprise assistant?",
    "options": [
      {
        "letter": "A",
        "text": "It increases the chance that untrusted retrieved content can steer the model's behavior"
      },
      {
        "letter": "B",
        "text": "It guarantees that output length will exceed the model context window"
      },
      {
        "letter": "C",
        "text": "It prevents the use of vector databases for future requests"
      },
      {
        "letter": "D",
        "text": "It disables JSON-mode responses at the API layer"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It increases the chance that untrusted retrieved content can steer the model's behavior is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-107",
    "number": 107,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Which mitigation is strongest when an LLM sometimes fabricates unsupported answers instead of acknowledging missing evidence?",
    "options": [
      {
        "letter": "A",
        "text": "Instruct the model to answer only from supplied evidence and explicitly state when evidence is insufficient"
      },
      {
        "letter": "B",
        "text": "Increase output token limits so the model has more room to speculate"
      },
      {
        "letter": "C",
        "text": "Remove the system prompt entirely to reduce instruction conflict"
      },
      {
        "letter": "D",
        "text": "Replace all retrieved context with one short summary paragraph"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Instruct the model to answer only from supplied evidence and explicitly state when evidence is insufficient is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-108",
    "number": 108,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "What is the clearest sign that a prompt is under-specified?",
    "options": [
      {
        "letter": "A",
        "text": "Different runs produce structurally inconsistent outputs for the same business task"
      },
      {
        "letter": "B",
        "text": "The provider returns usage metrics after each request"
      },
      {
        "letter": "C",
        "text": "The application stores responses in a database"
      },
      {
        "letter": "D",
        "text": "The model supports multimodal inputs"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Different runs produce structurally inconsistent outputs for the same business task is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-109",
    "number": 109,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An engineer wants a model to extract facts first, decide second, and justify third. Which prompt structure aligns best with that objective?",
    "options": [
      {
        "letter": "A",
        "text": "A staged prompt sequence with distinct intermediate tasks"
      },
      {
        "letter": "B",
        "text": "A single high-temperature request with no formatting constraints"
      },
      {
        "letter": "C",
        "text": "A retrieval-free completion with maximum randomness"
      },
      {
        "letter": "D",
        "text": "A model-hosting switch from cloud to local deployment"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A staged prompt sequence with distinct intermediate tasks is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-110",
    "number": 110,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "Which adjustment most directly improves reproducibility for a prompt-based classification workflow?",
    "options": [
      {
        "letter": "A",
        "text": "Lower the temperature and tighten label constraints"
      },
      {
        "letter": "B",
        "text": "Increase the top-p range and remove examples"
      },
      {
        "letter": "C",
        "text": "Expand the prompt with unrelated background context"
      },
      {
        "letter": "D",
        "text": "Rotate the prompt wording on each request"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Lower the temperature and tighten label constraints is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-111",
    "number": 111,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Why can overloading a prompt with loosely related background material reduce answer quality?",
    "options": [
      {
        "letter": "A",
        "text": "It can dilute relevant instructions and consume limited context-window space"
      },
      {
        "letter": "B",
        "text": "It forces the provider to retrain the base model for every call"
      },
      {
        "letter": "C",
        "text": "It disables safety policies applied at the API gateway"
      },
      {
        "letter": "D",
        "text": "It converts the task into a multimodal inference request automatically"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It can dilute relevant instructions and consume limited context-window space is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-112",
    "number": 112,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Which output control is most appropriate when an application must parse the model response programmatically?",
    "options": [
      {
        "letter": "A",
        "text": "Structured output constraints backed by validation"
      },
      {
        "letter": "B",
        "text": "Free-form narrative generation with a high creativity setting"
      },
      {
        "letter": "C",
        "text": "Allowing the model to choose any convenient format"
      },
      {
        "letter": "D",
        "text": "Removing all schema references from the prompt"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Structured output constraints backed by validation is correct because it best matches the prompt-design or grounding technique that most directly shapes the model behavior the question is asking about.",
    "rationaleIncorrect": "The other options may sound related, but they either adjust the wrong control, confuse prompting with architecture changes, or weaken the intended instruction pattern.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-113",
    "number": 113,
    "sourceName": "questions-source.txt",
    "domain": "Data Research and Analysis",
    "officialDomain": "Domain 4: Data Research and Analysis",
    "text": "An analyst is preparing incident data from three systems for a trend report. Device identifiers use different formats, timestamps are in mixed time zones, and some severity fields are blank. Which action should happen before drawing conclusions from the data?",
    "options": [
      {
        "letter": "A",
        "text": "Normalize identifiers, standardize timestamps, and resolve or flag missing values"
      },
      {
        "letter": "B",
        "text": "Increase the model temperature so inconsistent records are generalized automatically"
      },
      {
        "letter": "C",
        "text": "Fine-tune a summarization model before checking data quality issues"
      },
      {
        "letter": "D",
        "text": "Delete all rows with missing fields without first measuring the impact on coverage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Normalize identifiers, standardize timestamps, and resolve or flag missing values is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-114",
    "number": 114,
    "sourceName": "questions-source.txt",
    "domain": "Data Research and Analysis",
    "officialDomain": "Domain 4: Data Research and Analysis",
    "text": "A team wants to compare how often a support assistant hallucinated across two different prompt versions. What is the most defensible way to do that?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluate both versions against the same labeled test set and scoring rubric"
      },
      {
        "letter": "B",
        "text": "Let different reviewers use different criteria for each version to capture more perspectives"
      },
      {
        "letter": "C",
        "text": "Compare only the longest responses because longer answers contain more evidence"
      },
      {
        "letter": "D",
        "text": "Ask the model which version it believes is safer and accept its answer as the benchmark"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Evaluate both versions against the same labeled test set and scoring rubric is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-115",
    "number": 115,
    "sourceName": "questions-source.txt",
    "domain": "Data Research and Analysis",
    "officialDomain": "Domain 4: Data Research and Analysis",
    "text": "When building a retrieval corpus from internal manuals, what chunking outcome most directly improves downstream analysis quality?",
    "options": [
      {
        "letter": "A",
        "text": "Chunks preserve enough local context to remain meaningful while staying small enough for precise retrieval"
      },
      {
        "letter": "B",
        "text": "Chunks are made as large as possible so the retriever always returns full documents"
      },
      {
        "letter": "C",
        "text": "Chunks are grouped by file size rather than topic to simplify storage accounting"
      },
      {
        "letter": "D",
        "text": "Chunks remove headings and structure so all passages look statistically similar"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Chunks preserve enough local context to remain meaningful while staying small enough for precise retrieval is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-116",
    "number": 116,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "What is the clearest difference between a tool-using agent and a standard one-shot text generation workflow?",
    "options": [
      {
        "letter": "A",
        "text": "The agent can observe outcomes from tool calls and adjust its next action accordingly"
      },
      {
        "letter": "B",
        "text": "The agent always returns shorter outputs than a one-shot workflow"
      },
      {
        "letter": "C",
        "text": "The agent cannot be governed by policy because it is autonomous"
      },
      {
        "letter": "D",
        "text": "The agent never needs external context once deployed"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "The agent can observe outcomes from tool calls and adjust its next action accordingly is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-117",
    "number": 117,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Why is state management important in multi-step agentic workflows?",
    "options": [
      {
        "letter": "A",
        "text": "It allows the agent to track prior actions, intermediate results, and unresolved objectives"
      },
      {
        "letter": "B",
        "text": "It guarantees that every tool returns valid JSON without validation"
      },
      {
        "letter": "C",
        "text": "It removes the need for prompt design in later steps"
      },
      {
        "letter": "D",
        "text": "It prevents retrieval systems from returning stale documents"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It allows the agent to track prior actions, intermediate results, and unresolved objectives is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-118",
    "number": 118,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Which architecture most clearly demonstrates orchestration rather than simple generation?",
    "options": [
      {
        "letter": "A",
        "text": "A supervisor agent routes subtasks to specialist agents and merges their outputs"
      },
      {
        "letter": "B",
        "text": "A single LLM rewrites a paragraph into a shorter paragraph"
      },
      {
        "letter": "C",
        "text": "A vector store returns the top three similar passages for a query"
      },
      {
        "letter": "D",
        "text": "A fine-tuned model classifies tickets into one of four labels"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A supervisor agent routes subtasks to specialist agents and merges their outputs is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-119",
    "number": 119,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "In practical terms, what value does MCP provide to an agentic ecosystem?",
    "options": [
      {
        "letter": "A",
        "text": "A standardized interface for exposing tools, resources, and prompt surfaces to models and agents"
      },
      {
        "letter": "B",
        "text": "A new neural architecture for reducing hallucinations through weight sharing"
      },
      {
        "letter": "C",
        "text": "A compression layer that reduces token billing during long sessions"
      },
      {
        "letter": "D",
        "text": "A retrieval algorithm that replaces embeddings with deterministic indexes"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A standardized interface for exposing tools, resources, and prompt surfaces to models and agents is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-120",
    "number": 120,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "Why should high-impact agent actions usually require explicit human approval?",
    "options": [
      {
        "letter": "A",
        "text": "Because autonomous action can create operational or compliance risk if the agent is wrong"
      },
      {
        "letter": "B",
        "text": "Because HITL eliminates the need for audit logging and observability"
      },
      {
        "letter": "C",
        "text": "Because agents are unable to process structured data safely without human rewriting"
      },
      {
        "letter": "D",
        "text": "Because approval steps increase model creativity under constrained prompts"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Because autonomous action can create operational or compliance risk if the agent is wrong is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-121",
    "number": 121,
    "sourceName": "questions-source.txt",
    "domain": "Prompt Engineering",
    "officialDomain": "Domain 2: Prompt Engineering",
    "text": "An agent reads a CSV export, maps several columns to a CRM API schema, and submits the transformed payload. Which agent capability is most directly demonstrated?",
    "options": [
      {
        "letter": "A",
        "text": "Data transformation and mapping across systems"
      },
      {
        "letter": "B",
        "text": "Prompt injection detection through content hashing"
      },
      {
        "letter": "C",
        "text": "Context-window extension through recursive summarization"
      },
      {
        "letter": "D",
        "text": "Model compression through low-rank adaptation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Data transformation and mapping across systems is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-122",
    "number": 122,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "What is the main benefit of giving an agent access to specialized tools instead of expecting the base model to answer everything from its prior training?",
    "options": [
      {
        "letter": "A",
        "text": "Tools let the agent fetch current data, execute actions, or validate results externally"
      },
      {
        "letter": "B",
        "text": "Tools eliminate all need for prompts, instructions, or constraints"
      },
      {
        "letter": "C",
        "text": "Tools guarantee that the agent will never hallucinate"
      },
      {
        "letter": "D",
        "text": "Tools replace the need for permissions and access control"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Tools let the agent fetch current data, execute actions, or validate results externally is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-123",
    "number": 123,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Which example best illustrates observation inside a ReAct-style agent loop?",
    "options": [
      {
        "letter": "A",
        "text": "The agent receives a tool result and uses it to decide the next step"
      },
      {
        "letter": "B",
        "text": "The agent hides all intermediate outputs from its own controller"
      },
      {
        "letter": "C",
        "text": "The agent compresses model weights after each reasoning step"
      },
      {
        "letter": "D",
        "text": "The agent converts every response to embeddings before returning text"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "The agent receives a tool result and uses it to decide the next step is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-124",
    "number": 124,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "Why is least-privilege access important for connected agent tools?",
    "options": [
      {
        "letter": "A",
        "text": "It limits the blast radius if the agent misuses a tool or receives malicious instructions"
      },
      {
        "letter": "B",
        "text": "It ensures the agent can skip human approvals for privileged tasks"
      },
      {
        "letter": "C",
        "text": "It makes context windows effectively unlimited for sensitive workflows"
      },
      {
        "letter": "D",
        "text": "It allows the agent to self-certify compliance automatically"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It limits the blast radius if the agent misuses a tool or receives malicious instructions is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-125",
    "number": 125,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "Which failure mode is most likely when an agent lacks strong schema validation between tools?",
    "options": [
      {
        "letter": "A",
        "text": "Downstream systems receive malformed or semantically mismapped payloads"
      },
      {
        "letter": "B",
        "text": "The model loses its pretraining weights during inference"
      },
      {
        "letter": "C",
        "text": "The provider disables all external API access permanently"
      },
      {
        "letter": "D",
        "text": "The context window becomes larger than the model supports"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Downstream systems receive malformed or semantically mismapped payloads is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-126",
    "number": 126,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "What is the clearest reason to separate a planning role from an execution role in an agentic system?",
    "options": [
      {
        "letter": "A",
        "text": "It improves control and observability by distinguishing decision-making from action-taking"
      },
      {
        "letter": "B",
        "text": "It guarantees lower token cost than any single-agent design"
      },
      {
        "letter": "C",
        "text": "It prevents the need for retrieval, embeddings, or context management"
      },
      {
        "letter": "D",
        "text": "It ensures every output is deterministic without parameter tuning"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It improves control and observability by distinguishing decision-making from action-taking is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-127",
    "number": 127,
    "sourceName": "questions-source.txt",
    "domain": "Agentic AI",
    "officialDomain": "Domain 6: Agentic AI",
    "text": "An agent proposes a firewall change, runs a policy-check tool, sees a failure, and revises the plan before requesting approval. What does this best demonstrate?",
    "options": [
      {
        "letter": "A",
        "text": "A feedback loop using tool observations to refine behavior before final action"
      },
      {
        "letter": "B",
        "text": "A single-turn completion with no memory or state"
      },
      {
        "letter": "C",
        "text": "A pure retrieval workflow with no reasoning component"
      },
      {
        "letter": "D",
        "text": "A data-labeling pipeline for offline fine-tuning"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "A feedback loop using tool observations to refine behavior before final action is correct because it best matches the planning, orchestration, tool-use, or control concept that defines the agent behavior in the scenario.",
    "rationaleIncorrect": "The other options describe neighboring AI patterns, but they do not capture the agentic control, orchestration, or action model the question is testing.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-128",
    "number": 128,
    "sourceName": "questions-source.txt",
    "domain": "Generative AI Models",
    "officialDomain": "Domain 1: Generative AI Models",
    "text": "An engineer is analyzing a batch of model outputs and notices that some source documents were retrieved from outdated policy folders. What is the most useful next step?",
    "options": [
      {
        "letter": "A",
        "text": "Trace retrieval metadata and inspect whether stale documents were indexed or ranked too highly"
      },
      {
        "letter": "B",
        "text": "Lower the temperature so the retriever stops returning old documents"
      },
      {
        "letter": "C",
        "text": "Replace the vector database with a larger language model immediately"
      },
      {
        "letter": "D",
        "text": "Hide source citations from reviewers so they focus only on the final answer quality"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Trace retrieval metadata and inspect whether stale documents were indexed or ranked too highly is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-129",
    "number": 129,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "What is the strongest reason to separate training, validation, and test datasets when evaluating an AI workflow?",
    "options": [
      {
        "letter": "A",
        "text": "It reduces the risk of overstating quality by measuring on data already used for tuning decisions"
      },
      {
        "letter": "B",
        "text": "It guarantees that the deployed system will never drift after release"
      },
      {
        "letter": "C",
        "text": "It allows production prompts to bypass schema validation safely"
      },
      {
        "letter": "D",
        "text": "It removes the need to define an evaluation rubric in advance"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "It reduces the risk of overstating quality by measuring on data already used for tuning decisions is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  },
  {
    "id": "questions-source.txt-130",
    "number": 130,
    "sourceName": "questions-source.txt",
    "domain": "Ethics and Security",
    "officialDomain": "Domain 3: Ethics and Security",
    "text": "A reviewer wants to understand why one summarization workflow performs worse on security incidents than on routine service requests. Which analysis is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Segment results by scenario type and compare error patterns across those subsets"
      },
      {
        "letter": "B",
        "text": "Average all results together so outlier categories do not distract from the overall score"
      },
      {
        "letter": "C",
        "text": "Increase response length limits for every prompt and assume the gap will disappear"
      },
      {
        "letter": "D",
        "text": "Replace the benchmark with a single anecdotal example from a successful run"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "rationaleCorrect": "Segment results by scenario type and compare error patterns across those subsets is correct because it best matches the data-analysis or data-preparation activity that best matches the situation in the prompt.",
    "rationaleIncorrect": "The other options refer to different lifecycle stages, unrelated controls, or outcomes that do not solve the stated data-analysis problem.",
    "multiSelect": false
  }
];
