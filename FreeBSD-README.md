# FreeBSD vs Linux: An Interactive Virtual Exhibit

An interactive web-based exhibit that explores **FreeBSD**, showcasing it's history, architecture, ecosystem, features, and real-world applications.

**Course:** CSARCH2 - S01  
**Group 2 Members:**
- Justin Ice David
- Gian Lorenzo Ortha
- Linus Carl Perdon
- Neil Justine Tan
- Khyle Villorente

# Overview

The **FreeBSD vs Linux: An Interactive Virtual Exhibit** is an platform designed to introduce users to the FreeBSD operating system while comparing it with Linux. Rather than presenting information as static documentation, the platform shows BSD's intricacies through an interactive web interface that encourages exploration and engagement.

Interactive components throughout the exhibit provide an engaging learning experience compared to traditional text-based resources, allowing individuals to better understand the nuances and strengths of FreeBSD.

# Motivation

Operating systems are fundamental to modern computing, yet many students and technology enthusiasts are primarily exposed to Linux while having limited awareness of FreeBSD and its ecosystem. Despite powering numerous production systems and enterprise infrastructure, FreeBSD remains somewhat underrepresented in learning resources.

Thus, through this platform, we are able to enable users to explore FreeBSD's intricacies, key features, and real-world applications while understanding how it compares to other operating systems like Linux.

# Tech Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| Runtime Environment | Node.js | v26.0.0 | Executes the development environment and build process. |
| Web Framework | Astro | v6.0 | Static site framework that delivers fast page loads while supporting interactive islands. |
| Content Format | MDX (`@astrojs/mdx`) | Latest | Allows exhibit content to be written in Markdown while embedding React components for interactive demonstrations. |
| Component Framework | React (`@astrojs/react`) | v19.2 | Powers dynamic client-side interactions such as terminal simulations, progress indicators, and interactive UI components without requiring full page reloads. |
| Styling | Tailwind CSS | v4.3 | Utility-first CSS framework used for responsive layouts, component styling, and animations. |
| Version Control | Git & GitHub | Latest | Source code management, collaboration, and project hosting. |

# Features

## Home Page

The landing page introduces visitors to the exhibit with a layout inspired by the FreeBSD branding. It serves as the starting point of the experience and provides navigation for the main content.

## What is FreeBSD?

Introduces visitors to FreeBSD with a concise overview of FreeBSD as a operating system and it core features and functionalities.

## Interactive History Timeline

Presents the evolution of FreeBSD through a chronological interactive timeline wheel that users can scroll along with.

**Features**
- Scrollable historical timeline
- Carousel-style event viewer
- Important historical releases and milestones
- Visual presentation of FreeBSD's development from 1993 to the present

## FreeBSD vs Linux Comparison

Provides an interactive comparison between FreeBSD and Linux to help users understand their similarities and differences.

**Features**
- Interactive Venn diagram
- Clickable comparison points
- Side-by-side feature comparison
- Highlights architectural differences, licensing models, ecosystem structure, package management, and operating system design
- Shared Unix concepts presented in the overlapping section

## Where is FreeBSD used?

Demonstrates how FreeBSD is used in industry through interactive company showcases.

**Features**
- Clickable information cards with company logos
- Real-world examples
- Industry case studies including:
  - Netflix
  - NetApp
  - pfSense
  - RG Nets

Selecting a company opens a modal containing a detailed explanation of how that organization leverages FreeBSD in production environments.

## Ports vs Packages Installation Simulator

Demonstrates the two primary software installation methods available in FreeBSD through a side-by-side simulation.

**Features**
- Parallel installation simulation
- Real-time execution visualization
- Live terminal output simulation
- Package installation progress indicators
- Comparison and explanation of:
  - **Ports Collection**
  - **Pkg Package Manager**

The simulator allows users to observe how each installation method behaves making it easier to understand the trade-offs between flexibility and installation speed.

## CLI Simulator

One of the exhibit's primary interactive components this simulator allows users to execute commands simultaneously on both FreeBSD and Linux environments.

**Features**
- Shared command input
- Parallel FreeBSD and Linux terminals
- Prepared command library
- Side-by-side output comparison
- Simulated command execution

The simulator demonstrates how both operating systems respond to common commands while highlighting implementation differences.

# Task Delegation Strategy

We divided the main tasks into two: writng and the development of the website. We delegated two people to be in charge of writing the content for the webpages, and three people to be in charge of developing each page and its components. Splitting it this way made it easier for us to focus on one major task at a time rather than having everyone writing and developing at the same time.

# Design Process

The development of this project followed an iterative design process following research, validation, continuous feedback, and refinement. Each feedback we received built upon the previous one to ensure that both the educational content and user experience met the project's goals and feedback we received.

## 1. Research and Content Planning

The project began with extensive research on FreeBSD to establish an accurate foundation. Official documentation, academic references, and other verified sources were gone through

The gathered information was then organized into google docs before implementation to the website.

## 2. User Interface Mockups

Before implementation began, the group designed interface mockups using **Canva**. These mockups shared the overall branding and flow of interactive components of the exhibit.

The design phase focused on creating:

- A consistent FreeBSD-inspired visual theme
- Intuitive navigation between exhibit sections
- Responsive page layouts
- Placement of interactive simulations and educational content

## 3. Design Validation

The proposed designs and content structure were reviewed collaboratively by all group members to ensure consistency and accuracy.

The project also underwent feedback, grading, and consultation with **Sir Rog**, whose feedback helped improve the content and design.

This validation stage ensured that the platform aligned with both the project requirements and intended learning outcomes.

## 4. Platform Implementation

After the design was finalized, development followed using the selected technology stack.

This involved implementing the mockups with the following considerations for each feature:

- Responsive page layouts
- Interactive components
- Dynamic visualizations
- Modals for additional information
- Accurate simulations

## 5. Peer Feedback and Evaluation

Upon completion of functional prototypes, the platform was evaluated by each group member through informal usability testing.

Feedback focused on areas such as:

- Navigation clarity
- Readability of educational content
- Responsiveness of interactive components
- Visual consistency
- Ease of understanding comparisons and simulations

This stage helped identify usability issues that were not immediately apparent during development.

## 6. Iterative refinement

Based on the collected feedback, we continuously refined both the content and interface.

Improvements included:

- Enhancing the visual hierarchy of pages
- Improving the responsiveness of interactive elements
- Refining educational explanations for clarity
- Adjusting layouts and spacing for readability
- Optimizing animations and user interactions
- Correcting inconsistencies identified during testing

# Development Standards
Although the project team had not yet formally taken SWENG yet during development, the team adopted development practices to improve collaboration and avoid conflicts. These practices were introduced by one of the group members, who was already familiar with modern Git workflows.

## Git Branching Strategy

Rather than committing directly to the main branch, each member developed features on dedicated branches. This allowed multiple features to be worked on simultaneously without disrupting the stable codebase.

The branching workflow helped the team:

- Develop features independently
- Minimize merge conflicts
- Isolate bugs and unfinished work
- Keep the `main` branch stable throughout development

## Conventional Commit Messages
To keep the project's history organized and easy to understand, the team followed a consistent commit message format inspired by the Conventional Commits specification.

Examples include:

```text
feat: add <feature desc>
fix: change <fix desc>
```
## Pull Request Workflow
Completed features were merged into the `main` and `dev` branches through Pull Requests rather than direct merges.

Before merging, pull requests were used to:

- Review newly added features
- Identify potential issues and cross-check with the group
- Discuss implementation decisions
- Ensure compatibility with the existing codebase

# Group Takeaways (AHAs) on FreeBSD

Initially, we assumed that FreeBSD operated similarly to a standard linux distribution. After researching, we uncovered FreeBSD's direct lineage to the original UNIX. It was surprising to find out that FreeBSD was actually developed as a complete and unified system rather than just a kernel paired with some third party utilities. This learning inspired us to create the Interactive Venn Diagram of FreeBSD vs Linux which became necessary to visually untangle Linux assumptions and highlight FreeBSD’s unique architecture. 

Moreover, during our research for the history of how FreeBSD came to be it was interesting to learn how a lot of FreeBSD’s developments actually influenced or helped build a bunch of well known apps today. For example, the development of FreeBSD jails() which implemented virtualization of OS is what helped shape Docker which now allows programmers to avoid the hassle of tediously shipping their programs from one OS to another. Another example is how FreeBSD helped in powering Netflix’s Open Connect with the development of the sendfile() function, large packets are easily transmitted and sent over the network which allowed Netflix to create seamless streaming with less delays. These were interesting to me, especially because of how having an open-source program like this, is able to grow and influence other companies in developing their own code in relation to the advancements of FreeBSD. 

While looking up FreeBSD’s real-world applications too, we found a fun fact that (though it wasn’t part of the final output) that the OS for the PS4 and event he PS5 actually use FreeBSD as its base. I think this goes to show how FreeBSD’s underlying architecture really puts its performance and stability capabilities into perspective.

On the other hand, while developing the website we discovered that factoring in both mobile and desktop user interaction is important. For one group member, during their CCAPDEV class,their group didn’t really cater our website to mobile users and only had it designed for the desktop since it wasn’t part of our requirements. Since we wanted our website here to be compatible in mobile too, I learned that sometimes adjusting a specific layout for mobile-users and retaining its functionality is also important, even if it looks a bit different in comparison to how the desktop version may look.

Additionally, for another member, while creating the venn diagram, they learned the hard way how browsers render shapes and how they stack. Visually, they had intersecting circles, though technically they were transparent boxes that may have created “dead zones”, as it seemed to break my intended design in the first place, which was hover-state interactions. What it did was it was just always “on top” of whatever was supposed to be covering it. Our “aha moment” was when my groupmate said we didn’t really need to make it so complicated. We simply just changed the interaction from a hover reveal to something the user has to click on. We also made a separate container for the pop-up to display said information.

# Other Project Challenges and Insights
In terms of writing, we didn't really have that many challenges, other than the fact that information can be quite spread out in many different sources. Especially when it came to talking about some of the technical details of FreeBSD, one of the most used resources for FreeBSD is its documentation. Its documentation is surprisingly comprehensive yet easy to follow, covering everything from installing the operating system, to each and every one of its big and small features. Despite only viewing perhaps less than 2% of it, I already learned a lot of interesting things about FreeBSD and how it works.

One of the little challenges we had in the development part this project is that we all had nearly no knowledge on what astro is and how it works. Some of us have some knowledge and experience using React, but it is also somewhat limited. Generally, there was just a bit of a knowledge gap that we had to fill.

Luckily, it was not too much of a hassle because (1) a template for the project was already provided, and (2) due to the simple, static nature of the webpages we were making, it wasn't too much of a hassle setting up each page. Something interesting that we noticed that Astro does is to actually remove the hassle of having to manually create a route ourselves, and just make that route for us based on the filetree.

There was an relatively minor bug we discovered too before the mid-milestone submission, and that is none of the venn diagram details seemed to render in the right order. Specifically, the details of the outer points rendered behind the intersection portion. We suspected it wassomething to do with z-indexes and parent element z-index priorities, but after 1-2 hours of debugging, we just gave up and decided to change the approach, this time using a modal whose content changes per venn diagram point.

This was not too hard to do, but there was a lot of back and forth trying to figure out what would work, since it was not really planned and was just being spontaneously programmed as we went along. Eventually, we settled with a simple event dispatch, listener loop for opening the modal and setting its contents. In this implementation, the code for the modal was also separated into its own component(s) for easier management.

The modal apprach proved to be a good idea as it just made the implementatin easier, but also made it more mobile-friendly.

## Improving Website Design
To make the website look less flat (i.e. just cards filled with texts/paragraphs) we decided to improve the design and add more interactive features and animations for users. For the history page, we decided to add a functioning timeline wheel that moves and switches between years either through swiping (mobile) or through scrolling with a scroll wheel (desktop). Additionally, we decided to split up the information detailed on the info cards especially for years with multiple developments to improve readability and avoid overwhelming users with walls of texts. We also added images to break up walls of text and provide visual aid. In terms of the Where is FreeBSD Used Today page we decided to change the cards into logos and placed them in an infinitely looping carousel. This is also to avoid just walls of text and allows users to select one of the logos at a time and read up on how FreeBSD is used there. We also decided to add a progress bar on top of the page to indicate the user’s progression throughout the site (was set as a numbered version for mobile ex: 2/8). Some minor adjustments were just improving readability for the CLI page by changing the background color of the input box and providing a background on the ‘Try’ command, as well as adding shadow to page titles to make them stand out more against the background.

## Developing Mobile Responsiveness
Mobile responsiveness and dynamic sizing was one of our main targets for development in the final output. While it wasn’t too difficult given that CSS has the `@media` functionality that makes dynamic sizing easy and allowed our cards to stack on top of each other with very little work in changing the CSS code, we did have to pay special attention in adjusting and fixing the History and  FreeBSD vs Linux pages to ensure they were rendered nicely.  
	
For rendering the History page in the mobile view, we decided to have the timeline wheel positioned above the information card as opposed to how the wide-screen website is rendered where the timeline wheel and the information card is drawn side-by-side. We decided to do this since having them side-by-side in mobile view makes the screen too tight causing the text and the card to overflow. 

For the FreeBSD vs Linux page we made it so that in mobile view, the Venn Diagram is rendered with a fixed size. This is to avoid the initial issue we had wherein when we were first adjusting the website to be mobile responsive, we realized that the Venn Diagram would easily get warped and all the interactable texts would overlap on top of each other. Rendering the Venn Diagram and the words inside with a fixed size ensured we had all of the text in the right place and the circles perfectly shaped and aligned.

## Timeline Problem
In redesigning the History page, we decided to add animations to make the feel of the page look smoother and look better visually. We also added an animation for the timeline wheel to make the page feel more interactive. To achieve that, we decided to add scrolling as a toggle for switching between years. While this works well for the desktop view, we learned that in mobile, it was difficult to read the information cards as the scrolling would toggle the year change, preventing users from reading the full information card and causing them to automatically transfer to the next year. To remedy this, we changed the scrolling trigger in mobile by modifying our touchMove function to detect swipes (left and right) rather than vertical scrolling when a change in year is triggered. This allowed mobile users to read the whole information card and then swipe left or right to move to the next/previous year. As we only implemented this change in mobile, desktop users are still able to view the website as normal and toggle the shift in years by using the scroll wheel.

## Ports vs Packages Display Problem
Initially, we had problems with displaying the terminal simulator (Port) and the graphic user interface (PKG). Starting with mobile compatibility, the strings in the compiler output were stretched past the screen width which led to breaking the page’s responsiveness on smaller screens. We fixed this by implementing CSS overflow constraints. Lastly, we encountered a responsive layout issue. When the window was enlarged, the terminal and GUI panels would abnormally resize. To fix it, we refactored the container to use flex instead of grid, we were able to utilize flex properties to ensure the 2 components were scaled smoothly and shared the screen space equally. 

## Venn Diagram z-index Dilemma
While it wasn’t really a big problem (or so we thought), the overlapping (middle part) of the circles was always being the one with the “highest” priority. We thought it was just a simple z-index issue, but upon debugging all the z-indexes, we found out it wasn’t that either. The solution we came up with was just to create a separate container not bound by the circles entirely.

# Declaration of AI Usage

Generative AI and LLMs were used to aid in the creation of this project primarily through the following means:

- learning libraries and frameworks
- ui/ux development
- reformatting of text and grammar suggestions

# References

- A brief history of FreeBSD. (n.d.). https://docs-archive.freebsd.org/doc/2.1.5-RELEASE/usr/share/doc/handbook/handbook3.html
- Cruz, A. (2026). *Jails and containers*. Retrieved June 30, 2026, from https://docs.freebsd.org/en/books/handbook/jails
- FreeBSD Documentation Portal. (n.d.). *FreeBSD Documentation Portal*. https://docs.freebsd.org/en/books/handbook/introduction/
- FreeBSD Foundation. (2023, June). *FreeBSD timeline*. https://freebsdfoundation.org/wp-content/uploads/2023/06/FreeBSD_timeline.pdf
- FreeBSD Foundation. (2023, June 22). *Celebrating 30 Years of FreeBSD: Licensing*. https://freebsdfoundation.org/blog/celebrating-30-years-of-freebsd-licensing/
- FreeBSD Foundation. (2024a, March 18). *NetApp Case Study*. https://freebsdfoundation.org/netapp-case-study/
- FreeBSD Foundation. (2024b, May 1). *Netflix Case Study*. https://freebsdfoundation.org/netflix-case-study/
- FreeBSD Foundation. (2024c, November 5). *How RG Nets Uses FreeBSD to Build the Future of High-Performance Edge Networks*. https://freebsdfoundation.org/end-user-stories/rg-nets-case-study/
- FreeBSD Foundation. (2025, December 22). *What is FreeBSD?* https://freebsdfoundation.org/freebsd-project/what-is-freebsd/
- FreeBSD Project. (n.d.). *FreeBSD Manual Pages: limits(1)*. Retrieved July 2, 2026, from https://man.freebsd.org/cgi/man.cgi?query=limits&sektion=1&manpath=FreeBSD+15.1-RELEASE+and+Ports
- FreeBSD.software. (2026). *FreeBSD in Production: Who Uses It and Why*. Retrieved July 2, 2026, from https://www.freebsdsoftware.org/blog/who-uses-freebsd-production.html
- Geeks for Geeks. (2025). *What is Enterprise Linux?* Retrieved July 2, 2026, from https://www.geeksforgeeks.org/linux-unix/what-is-enterprise-linux/
- Geeks for Geeks. (2026). *Kernel in Operating System*. Retrieved July 1, 2026, from https://www.geeksforgeeks.org/operating-systems/kernel-in-operating-system/
- *Getting Started with pfSense Software*. (n.d.). https://www.pfsense.org/getting-started/
- HowStuffWorks. (2024). *Unix vs. Linux: Understanding the Core Differences and Similarities*. Retrieved July 2, 2026, from https://computer.howstuffworks.com/question246.htm
- Linux Vox. (2025). *Unix OS vs Linux: A Comprehensive Comparison*. Retrieved July 2, 2026, from https://linuxvox.com/blog/unix-os-vs-linux
- Linux Vox. (2026). *Linux Chroot Jail vs FreeBSD Jail: Key Differences, Security, Flexibility & Synonym Myths Explained*. Retrieved July 2, 2026, from https://linuxvox.com/blog/what-s-the-difference-between-a-linux-chroot-jail-and-a-freebsd-jail/
- Linux Vox. (2026). *Linux Licensing: An In-Depth Exploration*. Retrieved July 1, 2026, from https://linuxvox.com/blog/linux-is-distributed-under-which-license/
- Linux Vox. (2026). *Mastering Linux Configuration Files*. Retrieved July 2, 2026, from https://linuxvox.com/blog/linux-conf-files
- Mosyan, D. (2026). *Linux cgroups explained: How containers use it*. Retrieved July 2, 2026, from https://medium.com/@dmosyan/linux-cgroups-explained-how-containers-use-it-c99eebb8c9c6
- Prakash, A. (2023). *Linux Is Just a Kernel: What Does It Mean?* Retrieved July 1, 2026, from https://itsfoss.com/linux-kernel-os/
- Reuschling, B. (2026). *The Z File System (ZFS)*. Retrieved June 30, 2026, from https://docs.freebsd.org/en/books/handbook/zfs
- Taylor, R. (2025). *Linux Desktop Is Fragmented (and That's Not a Bad Thing)*. Retrieved July 1, 2026, from https://itsfoss.com/opinion/linux-fragmentation-as-positive/
- The FreeBSD Foundation. (n.d.). *About the Foundation*. Retrieved June 30, 2026, from https://freebsdfoundation.org/about-us/about-the-foundation
- The FreeBSD Project. (2025). *About FreeBSD*. Retrieved June 30, 2026, from https://www.freebsd.org/about
- The FreeBSD Project. (n.d.). *The FreeBSD Project Releases*. https://www.freebsd.org/releases/
- *Why FreeBSD? | pfSense Documentation*. (n.d.). https://docs.netgate.com/pfsense/en/latest/general/why-freebsd.html
- Ziaee, A. (2026). *Configuration, Services, Logging and Power Management*. Retrieved July 2, 2026, from https://docs.freebsd.org/en/books/handbook/config
- Ziaee, A. (2026). *Desktop Environments*. Retrieved July 2, 2026, from https://docs.freebsd.org/en/books/handbook/desktop
- Ziaee, A. (2026). *Installing Applications: Packages and Ports*. Retrieved July 2, 2026, from https://docs.freebsd.org/en/books/handbook/ports
- Ziaee, A. (2026). *Linux Binary Compatibility*. Retrieved June 30, 2026, from https://docs.freebsd.org/en/books/handbook/linuxemu
