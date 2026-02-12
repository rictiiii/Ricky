// AI Chat Widget for Portfolio
(function() {
  'use strict';

  // Portfolio and resume data
  const portfolioData = `
ABOUT RICKY LIU:
Senior Product Designer with 10+ years of experience shipping complex B2B SaaS platforms. Specializes in design systems, user-centered workflows, and simplifying data-rich, regulated experiences across web, desktop, and mobile. Proven track record: +60% adoption, -40% escalations, 50% faster handoffs. Leverages AI technology and tools to enhance design efficiency. Currently at Shift4, helping 20,000+ businesses succeed.

EXPERIENCE:
- Shift4 - Senior Product Designer (Nov 2022 - Present, Remote)
  * Led design of Launch Control, core SaaS onboarding/compliance platform used by 20K+ merchants
  * Achieved 60% higher completion and 40% fewer escalations
  * Built and scaled Figma design system supporting 5+ squads, cutting handoff time by 50%
  * Designed SaaS solutions for kiosk and online ordering, reducing transaction times by 20%

- Station - UX Project Lead (Nov 2021 - Nov 2022, Long Beach, CA)
  * Designed real-time mobile diagnostics tools
  * Improved first-time task success by 48% and reduced task time by 30%
  * Standardized workflows/components, reducing QA cycles by 40%

- Henkel - Senior Visual Designer (Aug 2019 - Nov 2021, Culver City, CA)
  * Redesigned enterprise loyalty portal, boosting engagement by 25% and reducing bounce by 35%

FEATURED PROJECTS:
1. SkyTab Onboarding: State-aware onboarding system that helped 11,000+ merchants launch 4.7 days faster and drove 18,000+ feature adoptions. Transformed sales dashboard into merchant success hub with onboarding, feature discovery, and learning.

2. Shift4 Kiosk: Self-ordering kiosk that reduced order time by 30% and increased adoption by 20% through intuitive touch-first design.

3. Koto by Toyota: Automotive service platform combining e-commerce and digital key technology—45% more bookings and 82% digital key adoption.

EDUCATION:
- Certificate - UI/UX Design, University of California, Irvine (2021)
- MFA - Graphic Design, Otis College of Art and Design (2016)
- BFA - Digital Media Design, Beijing University of Technology (2014)

SKILLS:
- B2B SaaS/PaaS UX
- Design Systems (Figma: Variables, Components, Auto-layout)
- Data-Rich & Regulated Workflows
- User-Centered Research & Prototyping
- Multi-Platform UX (Web, Desktop/Kiosk, Mobile)
- Cross-Functional Collaboration (Tripod Model)
- AI technology and tools for design efficiency

CONTACT:
- Email: rickyliudesign@gmail.com
- Phone: (310) 634-4130
- LinkedIn: linkedin.com/in/ricky-liu-design
- Location: Remote (Los Angeles, CA)
`;

  let chatHistory = [];

  // Create chat widget HTML
  function createChatWidget() {
    const widgetHTML = `
      <div id="ai-chat-widget" class="ai-chat-widget">
        <button id="chat-toggle" class="chat-toggle" aria-label="Toggle AI Assistant">
          <span class="chat-emoji">💡</span>
          <span class="chat-badge">AI</span>
        </button>

        <div id="chat-panel" class="chat-panel">
          <div class="chat-header">
            <div class="chat-header-content">
              <div class="chat-avatar">
                <span class="chat-emoji">💡</span>
              </div>
              <div>
                <div class="chat-title">AI Assistant</div>
                <div class="chat-subtitle">Ask me about Ricky's work</div>
              </div>
            </div>
            <button id="chat-close" class="chat-close-btn" aria-label="Close chat">
              <span class="material-icons">close</span>
            </button>
          </div>

          <div id="chat-messages" class="chat-messages">
            <div class="chat-message bot-message">
              <div class="message-avatar">💡</div>
              <div class="message-content">
                <p>Hi! I'm an AI assistant that can answer questions about Ricky's experience, projects, and skills. What would you like to know?</p>
                <div class="quick-questions">
                  <button class="quick-question-btn">What projects has Ricky worked on?</button>
                  <button class="quick-question-btn">Tell me about Ricky's experience</button>
                  <button class="quick-question-btn">What are Ricky's key skills?</button>
                </div>
              </div>
            </div>
          </div>

          <div class="chat-input-container">
            <textarea
              id="chat-input"
              class="chat-input"
              placeholder="Ask me anything about Ricky's work..."
              rows="1"
            ></textarea>
            <button id="chat-send" class="chat-send-btn" aria-label="Send message">
              <span class="material-icons">arrow_upward</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
  }

  // Simple AI response generator based on keywords
  function generateResponse(question) {
    const lowerQuestion = question.toLowerCase();

    // Projects
    if (lowerQuestion.includes('project') || lowerQuestion.includes('work') || lowerQuestion.includes('portfolio')) {
      return `Ricky has worked on several impactful projects:

**SkyTab Onboarding** - A state-aware onboarding system that helped 11,000+ merchants launch 4.7 days faster and drove 18,000+ feature adoptions. It transformed a sales dashboard into a comprehensive merchant success hub.

**Shift4 Kiosk** - A self-ordering kiosk with intuitive touch-first design that reduced order time by 30% and increased adoption by 20%.

**Koto by Toyota** - An automotive service platform combining e-commerce and digital key technology, achieving 45% more bookings and 82% digital key adoption.

Would you like to know more about any specific project?`;
    }

    // Experience
    if (lowerQuestion.includes('experience') || lowerQuestion.includes('background') || lowerQuestion.includes('career')) {
      return `Ricky has 10+ years of product design experience:

**Current Role** - Senior Product Designer at Shift4 (Nov 2022 - Present), where he led the design of Launch Control, a core SaaS onboarding platform used by 20K+ merchants, achieving 60% higher completion and 40% fewer escalations.

**Previous Roles:**
- UX Project Lead at Station (2021-2022) - Designed mobile diagnostics tools, improving task success by 48%
- Senior Visual Designer at Henkel (2019-2021) - Redesigned enterprise loyalty portal, boosting engagement by 25%

He specializes in B2B SaaS platforms, design systems, and data-rich workflows.`;
    }

    // Skills
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('expertise') || lowerQuestion.includes('design system') || lowerQuestion.includes('figma')) {
      return `Ricky's key skills include:

**Design Systems** - Expert in Figma (Variables, Components, Auto-layout). Built and scaled design systems supporting 5+ squads, cutting handoff time by 50%.

**Core Expertise:**
- B2B SaaS/PaaS UX design
- Data-rich & regulated workflows
- User-centered research & prototyping
- Multi-platform UX (Web, Desktop/Kiosk, Mobile)
- Cross-functional collaboration (Tripod Model)
- AI technology and tools for design efficiency

He has a proven track record: +60% adoption, -40% escalations, 50% faster handoffs.`;
    }

    // Contact
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email') || lowerQuestion.includes('hire')) {
      return `You can reach Ricky at:

**Email:** rickyliudesign@gmail.com
**Phone:** (310) 634-4130
**LinkedIn:** linkedin.com/in/ricky-liu-design
**Location:** Remote (Los Angeles, CA)

Ricky is open to discussing product design opportunities, collaborations, and exploring how AI tools are shaping the future of design.`;
    }

    // Education
    if (lowerQuestion.includes('education') || lowerQuestion.includes('degree') || lowerQuestion.includes('study') || lowerQuestion.includes('school')) {
      return `Ricky's educational background:

- **Certificate in UI/UX Design** - University of California, Irvine (2021)
- **MFA in Graphic Design** - Otis College of Art and Design (2016)
- **BFA in Digital Media Design** - Beijing University of Technology (2014)

His education combines strong visual design fundamentals with specialized UX training.`;
    }

    // AI/Tools
    if (lowerQuestion.includes('ai') || lowerQuestion.includes('artificial intelligence') || lowerQuestion.includes('tool')) {
      return `Ricky leverages AI technology and tools to enhance design efficiency and explore innovative solutions. He's particularly interested in how AI is shaping the future of product design and creating more efficient workflows.

His work demonstrates measurable impact through data-driven design decisions and systematic approaches to complex problems.`;
    }

    // Results/Impact
    if (lowerQuestion.includes('result') || lowerQuestion.includes('impact') || lowerQuestion.includes('metric') || lowerQuestion.includes('outcome')) {
      return `Ricky has delivered impressive, measurable results:

**Overall Track Record:**
- +60% adoption rates
- -40% support escalations
- 50% faster design-to-dev handoffs

**Specific Projects:**
- Launch Control: 60% higher completion, 40% fewer escalations
- SkyTab Onboarding: 11,000+ merchants onboarded, 4.7 days faster launches, 18,000+ feature adoptions
- Shift4 Kiosk: 30% reduced order time, 20% increased adoption
- Station diagnostics: 48% improved task success, 30% reduced task time

His approach focuses on user-centered design that drives business results.`;
    }

    // Default response
    return `Based on the portfolio, here's what I can tell you:

Ricky is a Senior Product Designer with 10+ years of experience in B2B SaaS platforms. He currently works at Shift4, where he's designed systems used by 20,000+ merchants with proven results: +60% adoption, -40% escalations, and 50% faster handoffs.

You can ask me about:
- His projects (SkyTab Onboarding, Shift4 Kiosk, Koto by Toyota)
- His experience and career background
- His skills (design systems, Figma, user research)
- How to contact him
- His education

What would you like to know more about?`;
  }

  // Add message to chat
  function addMessage(content, isUser = false) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageHTML = `
      <div class="chat-message ${isUser ? 'user-message' : 'bot-message'}">
        ${!isUser ? '<div class="message-avatar">💡</div>' : ''}
        <div class="message-content">
          ${content.split('\n').map(line => {
            if (line.startsWith('**') && line.endsWith('**')) {
              return `<p><strong>${line.slice(2, -2)}</strong></p>`;
            }
            return line ? `<p>${line}</p>` : '';
          }).join('')}
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle sending message
  function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    addMessage(message, true);
    input.value = '';
    input.style.height = 'auto';

    // Simulate thinking
    setTimeout(() => {
      const response = generateResponse(message);
      addMessage(response, false);
    }, 500);
  }

  // Initialize widget
  function init() {
    createChatWidget();

    const toggle = document.getElementById('chat-toggle');
    const panel = document.getElementById('chat-panel');
    const close = document.getElementById('chat-close');
    const input = document.getElementById('chat-input');
    const send = document.getElementById('chat-send');

    // Toggle chat panel
    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.contains('open');
      if (isOpen) {
        panel.classList.remove('open');
        toggle.classList.remove('active');
      } else {
        panel.classList.add('open');
        toggle.classList.add('active');
        setTimeout(() => input.focus(), 300);
      }
    });

    // Close chat
    close.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.classList.remove('active');
    });

    // Send message
    send.addEventListener('click', sendMessage);

    // Send on Enter (Shift+Enter for new line)
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Auto-resize textarea
    input.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 120) + 'px';
    });

    // Quick questions
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-question-btn')) {
        const question = e.target.textContent;
        input.value = question;
        sendMessage();
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
