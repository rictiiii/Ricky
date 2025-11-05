# SkyTab Onboarding: Reimagining Merchant Experience Across Lifecycle Stages

> How a state-aware onboarding system helped 11,000+ merchants launch faster, saving 4.7 days per merchant and driving 18,000+ feature adoptions

---

## Overview

**Role:** Product Designer
**Team:** [Add team members/stakeholders]
**Timeline:** [Add project duration]
**Platform:** Web (MX Hub)

### Impact At-a-Glance

- 🚀 **11,000+ merchants** successfully launched through Launch Center
- ⚡ **4.7 days faster** onboarding order confirmation process
- 🎯 **18,000+ VAS features** adopted by merchants in 2025
- ✅ **90% bug resolution rate** with velocity exceeding new bug reports (283 resolved, 29 open)

---

## Problem

### The Business Challenge

SkyTab merchants exist in vastly different states throughout their lifecycle—from pre-launch setup to mature operations—yet the MX Hub interface treated all merchants the same. This one-size-fits-all approach created friction, confusion, and missed opportunities for engagement at critical moments.

**Three distinct merchant states required different experiences:**

#### 🚀 State 1: Merchant is Launching
Merchants preparing for launch need to:
- Complete basic setup requirements
- Access critical launching information (scheduled install date, menu programming status)
- Connect with their Customer Success Manager (CSM)
- Handle pre-launch activities (rescheduling, file uploads, CSM coordination)

**Pain Point:** No clear path to required actions; launching information scattered and hard to find

#### ⚙️ State 2: Merchant Just Completed Setup (Pre-live)
Merchants who completed required setup but haven't gone live yet need to:
- Complete additional feature configuration
- Learn about the SkyTab system through tutorials
- Stay informed about SkyTab releases
- Prepare for launch day

**Pain Point:** No dashboard data available yet, but interface didn't guide merchants on what to do next

#### 📊 State 3: Merchant Has Been Live
Established merchants with operational systems need to:
- Access real-time data and dashboards
- Set up new features as they're released
- Configure features their business newly needs
- Continue learning about system capabilities
- Stay updated on releases

**Pain Point:** Dashboard existed but lacked depth; feature discovery was poor; status indicators missing

### The Opportunity

By creating a state-aware system that adapts to merchant lifecycle stages, we could:
- Reduce cognitive load by showing only relevant information
- Accelerate time-to-value for new merchants
- Improve feature adoption across all merchant segments
- Create a more engaging, helpful experience that grows with the merchant

---

## Research & Discovery

### Understanding Merchant Journeys

[Add details about your research process here, for example:]

**User Interviews:** [Number] interviews with merchants across all three lifecycle states revealed:
- Launching merchants felt overwhelmed by information not yet relevant to them
- Pre-live merchants were unsure what to do after completing initial setup
- Live merchants wanted more actionable insights from their data

**Data Analysis:** [Add any analytics or usage data you analyzed]
- [Finding 1]
- [Finding 2]
- [Finding 3]

**Competitive Analysis:** [If applicable, add how other POS or SaaS onboarding systems handle lifecycle states]

### Key Insights

1. **Context is everything:** Merchants need information that matches their current reality, not a generic view
2. **Launching is stressful:** Pre-launch merchants need reassurance and clear guidance
3. **The post-setup valley:** Merchants who complete setup but aren't live yet need engagement
4. **Dashboard = validation:** Live merchants want to see their data as proof the system is working
5. **Continuous learning:** All merchants need ongoing education, not just initial onboarding

---

## Design Strategy

### Guiding Principles

**1. State-Aware, Not State-Gated**
The interface adapts to merchant state but never blocks access to information. Merchants can always explore, but we guide them to what matters now.

**2. Progressive Disclosure**
Surface critical information first, then layer in additional capabilities as merchants are ready for them.

**3. Build Confidence Early**
Especially for launching merchants, every interaction should reduce anxiety and build confidence in the system.

**4. Data as Engagement**
For live merchants, make data instantly useful and actionable, not just informative.

### Strategic Decisions

#### Multi-State Wizard System
Created a dynamic wizard that changes content, tone, and actions based on merchant lifecycle state:
- **Pre-launch:** Task-oriented with deadlines and CSM information
- **Pre-live:** Education-focused with system tutorials
- **Live:** Dashboard-first with feature discovery

#### UI Refresh Rationale

**Updated Tile Ordering**
Reorganized information hierarchy to prioritize actions over information, placing urgent tasks at the top and contextual resources lower.

**Merged Intro Screens**
Combined redundant welcome flows into a single, contextual welcome that adapts to merchant state. This reduced initial clicks and got merchants to value faster.

**Illustration Background Changes**
Moved from generic backgrounds to state-specific illustrations that reinforce where merchants are in their journey—creating visual continuity and recognition.

**Removed Tooltips**
Eliminated tooltips in favor of clearer labels and in-context help. Tooltips were masking poor information architecture; better organization eliminated the need for explanatory overlays.

#### Welcome Back Prompt
For returning users, especially those who hadn't completed key tasks, we added a contextual "Welcome Back" screen that:
- Reminds merchants where they left off
- Highlights any time-sensitive actions
- Provides quick jumps to incomplete tasks

#### Divider Screens
Between major sections or state transitions, subtle divider screens help merchants understand they're moving to a new context—reducing cognitive dissonance and setting expectations.

#### Illustration System (Collaboration with Trey Ingram)
Worked with illustrator Trey Ingram to develop a cohesive illustration system that:
- Visually represents each merchant state
- Uses consistent style and color language
- Feels professional yet approachable
- Works across different screen sizes

---

## Design Process

### Iteration & Exploration

#### Phase 1: Flow Mapping
- Mapped all possible merchant states and transitions
- Identified decision points and branching logic
- Created flow diagrams for each of the three primary states

#### Phase 2: Error State Handling
Critical to the experience was handling edge cases gracefully:
- **Installation delays:** How to communicate schedule changes
- **Failed file uploads:** Clear error messages with next steps
- **Missing CSM information:** Fallback contact options
- **Data sync issues:** Transparent status indicators

We created comprehensive error state patterns that:
- Explain what happened in plain language
- Clearly state what the merchant needs to do
- Provide direct paths to resolution
- Don't blame the merchant

#### Phase 3: Mock Flows for Different Module Types
SkyTab has multiple feature modules (payments, inventory, reservations, etc.). Created specific onboarding flows for each module type:
- **Core features:** Required setup with step-by-step guidance
- **Optional features:** Discovery-focused with benefits explanation
- **Advanced features:** Assumes merchant familiarity, focuses on configuration

#### Phase 4: Dashboard Enhancement
For live merchants, the dashboard needed to be immediately useful:
- **Real data integration:** Connected to live merchant data
- **Status indicators:** At-a-glance system health
- **Actionable insights:** Not just metrics, but what to do about them
- **Learning materials:** Contextual help based on usage patterns

#### Phase 5: Review & Refinement
- Stacked all flow variations side-by-side for consistency review
- Ensured visual and interaction patterns were consistent
- Validated state transitions made logical sense
- Incorporated stakeholder feedback

### Collaboration

**With Trey Ingram (Illustrator):**
- Provided art direction and conceptual brief for each state
- Reviewed illustration drafts and provided feedback
- Ensured illustrations worked at different sizes
- Created guidelines for future illustration needs

**With Development Team:**
- Created detailed specs for state detection logic
- Defined data requirements for each view
- Documented interaction patterns and transitions
- Prioritized features for phased rollout

---

## Solution

### State-Adaptive Dashboard

The core of the solution is a dashboard that intelligently adapts to merchant lifecycle stage:

#### For Launching Merchants

**Primary Focus:** Task completion and preparation

**Key Features:**
- Countdown to installation date (if scheduled)
- Task checklist with required vs. optional items
- Menu programming status indicator
- Direct CSM contact card with photo and information
- Quick actions: Reschedule installation, Upload menus, View requirements

**Design Details:**
- Task list prioritizes by urgency with visual indicators
- Progress bar shows completion percentage
- CSM card humanizes the relationship with direct contact options
- Illustrations show "preparation" theme

#### For Pre-Live Merchants

**Primary Focus:** Education and feature discovery

**Key Features:**
- "You're almost ready" encouragement message
- Additional setup wizard for optional features
- Tutorial library with video walkthroughs
- Release notes and what's new
- Community resources and support links

**Design Details:**
- More relaxed visual tone—no urgent deadlines
- Feature cards show benefits and estimated setup time
- Tutorial thumbnails with duration indicators
- Illustrations show "learning" theme

#### For Live Merchants

**Primary Focus:** Data, insights, and ongoing optimization

**Key Features:**
- Real-time dashboard with key metrics
  - Today's sales vs. yesterday
  - Transaction volume
  - Peak hours
  - Top-selling items
- System status indicators (all systems operational)
- Feature setup hub for new capabilities
- Learning center with advanced tutorials
- Release notes with feature highlights

**Design Details:**
- Data visualization uses color purposefully (green = up, red = down)
- Cards are scannable with large numbers and context
- Feature hub shows "New" badges on recently released features
- Status indicators use consistent iconography
- Illustrations show "success/operation" theme

### Multi-State Wizard

A wizard component that changes its content and structure based on merchant state:

**Wizard Structure:**
```
[Welcome/Context Screen]
→ [State-Specific Content]
→ [Next Steps]
```

**Adaptive Elements:**
- **Title and messaging:** Changes tone from directive (launching) to educational (pre-live) to informational (live)
- **Steps:** Different step counts and content per state
- **CTAs:** "Complete Setup" vs. "Learn More" vs. "View Dashboard"
- **Visual progression:** Progress indicators show different journey maps

### Error Handling Patterns

Created a comprehensive error pattern library:

**Error Message Structure:**
```
[Icon] [Clear error title]
[Plain language explanation of what happened]
[What the user needs to do next]
[Primary action button] [Secondary action button]
```

**Example:**
```
⚠️ Installation Date Needs Confirmation

Your scheduled installation date of March 15 is no longer available.
Please select a new date or contact your CSM for assistance.

[Choose New Date] [Contact CSM]
```

### Learning Materials Integration

Embedded learning throughout the experience:

- **Contextual tutorials:** Appear when merchant accesses a feature for the first time
- **Video library:** Organized by topic with search
- **Quick tips:** Bite-sized guidance appears in relevant sections
- **Release notes:** Shown prominently when new features launch

### Mobile Responsiveness

All flows and dashboards are fully responsive:
- Stack tile layouts on mobile
- Collapsible sections for better mobile navigation
- Touch-optimized interaction targets
- Simplified data visualizations for small screens

---

## Impact & Results

### Business Impact

**Scale & Merchant Success**

Since launch, the redesigned Launch Center has successfully onboarded **11,000+ merchants** through the state-aware system. This demonstrates that the multi-state approach not only works at scale but enables the business to grow merchant onboarding capacity without proportionally increasing support overhead.

**Onboarding Efficiency**

Reduced order confirmation time by **4.7 days**, directly accelerating time-to-revenue for both merchants and the business. This improvement came from:
- Clearer task prioritization showing merchants exactly what's needed
- Better CSM integration reducing back-and-forth communication delays
- Streamlined file upload and menu programming workflows
- Proactive error handling that prevents delays from escalating

This 4.7-day reduction multiplied across 11,000+ merchants represents significant business value in accelerated revenue realization and improved merchant satisfaction during the critical pre-launch period.

**Feature Adoption & Revenue Impact**

**18,000+ Value-Added Service (VAS) features** adopted by merchants in 2025 alone. This metric demonstrates the success of the state-aware feature discovery system:
- Live merchants discovered features through the enhanced dashboard feature hub
- Pre-live merchants explored optional features during the education phase
- The "New" badge system drove awareness of recently released capabilities

VAS feature adoption directly impacts recurring revenue, as many of these features represent additional monetization opportunities. The state-aware design made feature discovery contextual rather than overwhelming, leading to higher activation rates.

**Product Quality & Stability**

Maintained exceptional product quality with **283 bugs resolved** and only **29 remaining open**, achieving a 90% resolution rate. More importantly, **bug resolution velocity exceeds the rate of new bug reports**, indicating:
- A stable, well-architected system
- Comprehensive error state handling that prevents issues from reaching production
- Strong collaboration between design and engineering resulting in fewer implementation gaps
- Proactive quality management that addresses issues faster than they accumulate

This stability is critical for merchant trust, especially during the high-stress pre-launch period when technical issues can delay opening dates.

### User Impact

**Qualitative Feedback:**
[Add quotes from user testing or customer feedback, for example:]

> "I finally understand what I need to do before launch. Everything is right there." — Launching merchant

> "The dashboard makes me feel like I'm in control of my business." — Live merchant

> "I didn't realize SkyTab could do [feature X]. The new feature hub helped me discover it." — Live merchant

### By the Numbers: Total Impact

The redesigned MX Hub Launch Center has proven its value across multiple dimensions:

| Metric | Achievement |
|--------|-------------|
| **Merchants Launched** | 11,000+ through the new system |
| **Time Saved per Merchant** | 4.7 days reduction in order confirmation |
| **Cumulative Time Saved** | 51,700+ days (142 years) across all merchants |
| **Feature Adoptions** | 18,000+ VAS features activated |
| **Avg Features per Merchant** | 1.6 additional features adopted |
| **System Stability** | 90% bug resolution rate (283 resolved, 29 open) |
| **Quality Trend** | Resolution velocity exceeds new bug reports |

**What This Means:**

The 4.7-day reduction across 11,000+ merchants equals **51,700+ total days saved** in the onboarding process—time that translates directly to faster revenue realization and reduced merchant frustration during their critical launch period.

With 18,000+ VAS feature adoptions across 11,000+ merchants, we're seeing an average of **1.6 additional features** adopted per merchant—representing significant incremental revenue and demonstrating that the state-aware approach successfully drives feature discovery without overwhelming users.

---

## Learnings & Reflections

### What Worked Well

**1. State-Aware Architecture**
Designing for multiple states from the beginning, rather than bolting it on later, created a more cohesive system. The investment in mapping all states and transitions paid off in a more logical, predictable experience.

*Impact:* This architectural decision enabled the system to scale to 11,000+ merchants while maintaining clarity and reducing cognitive load—proving that complexity handled at the system level creates simplicity at the user level.

**2. Collaboration with Illustration**
Working closely with Trey Ingram on illustrations wasn't just about making things pretty—it was about creating visual anchors that helped merchants understand their journey. The illustrations became a communication tool, not just decoration.

*Impact:* Visual continuity across states helped merchants orient themselves, reducing confusion during transitions and contributing to the overall onboarding efficiency gains.

**3. Error State Prioritization**
Spending significant time on error states early prevented future technical debt. By designing comprehensive error handling upfront, we avoided the common pattern of "happy path design" that breaks down in real-world usage.

*Impact:* This focus on resilience contributed to our 90% bug resolution rate and the fact that resolution velocity exceeds new bug reports—the system was designed to handle problems gracefully from day one.

**4. Real Data Integration**
For live merchants, using real data in the dashboard (not just dummy data) was crucial. It validated the design decisions and revealed opportunities we wouldn't have seen with fake numbers.

*Impact:* Data-driven insights helped drive the 18,000+ VAS feature adoptions by making the value of additional features immediately visible and contextual to each merchant's actual business performance.

**5. Streamlined Task Prioritization**
Reorganizing tile order and merging redundant intro screens created a more focused, action-oriented experience that guided merchants to what mattered most.

*Impact:* These seemingly small UX improvements contributed significantly to the 4.7-day reduction in order confirmation time—proving that information architecture and task prioritization have measurable business impact.

### Challenges & How We Addressed Them

**Challenge 1: Balancing Simplicity with Completeness**
With three distinct states, it was tempting to create three completely different interfaces. We had to find the balance between state-specific customization and overall system coherence.

**Solution:** Created a core layout and component library that stayed consistent across all states, but swapped content and tone. Merchants always knew where to find things, even as content changed.

**Challenge 2: Development Complexity**
The state-detection logic and dynamic content rendering added technical complexity.

**Solution:** Worked closely with engineering to define a clear data model for merchant states. Created detailed specs and prioritized features for phased rollout, allowing the team to build incrementally.

**Challenge 3: Illustration Timeline**
Custom illustrations required significant lead time, which could have delayed the project.

**Solution:** Launched initial version with simpler placeholder illustrations, then swapped in custom artwork in a follow-up release. This kept momentum while still achieving the visual quality we wanted.

### Future Opportunities

**1. Predictive Onboarding**
Use merchant data (industry, size, location) to predict which features they'll likely need and proactively suggest them.

**2. Peer Benchmarking**
For live merchants, show how their metrics compare to similar businesses, creating motivation and context.

**3. Adaptive Learning Paths**
Based on feature usage patterns, create personalized tutorial recommendations.

**4. In-App Messaging**
For time-sensitive notifications (installation changes, system updates), integrate in-app messaging rather than relying on email.

**5. Mobile-First Optimization**
While responsive, the experience was designed desktop-first. A mobile-first redesign could better serve merchants who manage their business on-the-go.

### Key Takeaway

The most important lesson from this project: **Design for the user's context, not your convenience.** It would have been easier to create one dashboard for all merchants, but it wouldn't have been better. By investing in understanding merchant lifecycle stages and adapting the experience accordingly, we created a system that truly serves merchants where they are—not where we wish they were.

The results validate this approach: 11,000+ merchants successfully onboarded, 4.7 days saved per merchant, and 18,000+ features adopted. These aren't just impressive numbers—they represent real merchants who got to their "aha moment" faster, opened their businesses sooner, and discovered capabilities that help them succeed.

Great design meets users in their moment of need. This project reinforced that personalization isn't just about adding someone's name to the screen—it's about understanding their goals, constraints, and context, then designing an experience that helps them succeed. When you get that right, the business impact follows.

---

## Design Artifacts

[Add screenshots, prototypes, or links here]

### Flows
- [Link to launching merchant flow]
- [Link to pre-live merchant flow]
- [Link to live merchant flow]
- [Link to error state flows]

### High-Fidelity Mockups
- [Dashboard variations by state]
- [Wizard screens]
- [Feature setup flows]
- [Mobile responsive views]

### Prototypes
- [Interactive prototype link]

### Design System Components
- [State-aware card component]
- [Multi-state wizard component]
- [Error message patterns]
- [Status indicator system]

---

## Technical Details

**Design Tools:** Figma
**Collaboration:** FigJam for flow mapping, Slack for daily sync
**Prototyping:** Figma prototypes for user testing
**Handoff:** Figma Dev Mode with detailed component specs

**Design System:** Built on existing SkyTab design system, extending it with new state-aware components and patterns.

---

## Credits & Acknowledgments

**Design:** [Your name]
**Illustrations:** Trey Ingram
**Product Management:** [PM name]
**Engineering:** [Engineering lead/team]
**User Research:** [If applicable]

---

## Related Work

[Link to other case studies or projects that complement this work]

---

*Last updated: [Date]*
