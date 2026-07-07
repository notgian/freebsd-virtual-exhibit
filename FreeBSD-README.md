# FreeBSD vs Linux: An Interactive Virtual Exhibit
CSARCH2 - S01 Project Proposal
Group 2: Justin Ice David, Gian Lorenzo Ortha, Linus Carl Perdon, Neil Justine Tan, Khyle Villorente

## Complete Theme Discussion

### What is FreeBSD?
This section will discuss FreeBSD, touching on both FreeBSD as a piece of software, and touch on the ecosystem surrounding it, such as its open source nature, or the community behind the FreeBSD project. A subsection will also briefly discuss the history of FreeBSD to give the readers an idea of the background of FreeBSD.

### What Does FreeBSD Have to Offer?
This section will go over a few of the features of FreeBSD and detail how they work, that these features do, and what these features can do. This includes, but is not limited to: ZFS, which is the filesystem that FreeBSD used; jails, which work like containers to isolate running processes; and ports and packages, which are two distinct methods that FreeBSD uses to distribute applications.

### FreeBSD vs Linux
This section will feature an interactive dual-terminal simulator that demonstrates the architectural differences and similarities between FreeBSD and Linux in real time. With their similarities in both environments as both are Unix-based systems,, some people may think that FreeBSD is a Linux distro, when it is actually an entirely independent operating system. To clear up this misconception, the simulator provides a shared command input bar positioned above parallel terminal windows. When a user runs a command from a prepared list of available commands, both environments will instantly generate side-by-side system logs and update virtual CPU meters. This allows visitors to actively compare and experience how both systems handle processing loads.

### Where Can We Find FreeBSD Today?
This section will discuss where FreeBSD is often used today. More than just providing a general answer, such as how FreeBSD is well-suited for server environments, we can provide a specific, real-life example when applicable. For example, in terms of server environments, we can cite Netflix as an example that uses FreeBSD for their content delivery network (FreeBSD Foundation, 2024).

## Tech Stack Plan
The table below outlines the project components, core technologies and their corresponding versions, and their applications that we selected for our team’s virtual exhibit.

| **Project Component** | **Technology** | **Version**                                    | **Application & Justification**                                                                                                                                          |
| :-------------------- | :------------- | :--------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Runtime Environment   | Node.js        | v26.0.0<br>(Required)                          | Required by the project specifications. Node.js serves as the foundation for running Astro and all tools during development and build.                                   |
| Web Framework         | Astro          | v6.0<br>(Required)                             | Required by the project specifications. Allows for fast loading of static content and hydrates the interactive components.                                               |
| Content Format        | MDX            | Managed<br>using<br>@astrojs/mdx<br>(Required) | Required by the project specifications. MDX allows the exhibit's written content to be in Markdown while embedding the React components directly inline within the page. |
| Component Framework   | React          | v19.2<br>Managed<br>using<br>@astrojs/react    | React manages component state such as the terminal input states,logs generation, and updates on the CPU usage / progress metrics dynamically without requiring a full page reload.
| Styling               | Tailwind CSS   | v4.3                                           | Tailwind CSS provides utility-first classes that streamline the styling of the components, animations, and overall exhibit layout with minimal custom CSS.               
| Version Control       | Github         | -                                              | Hosts the project repository forked from the provided astro.build template.                                                                                              |

Following the Tech Stack Plan, our Proposed Interactive Element is an Architectural Venn Diagram comparing FreeBSD with Linux. The planned User Experience (UX) and Technical Implementation of the interactive element is as follows:

### Rendering
The interactive terminal simulator is rendered directly in the MDX page. It is built as a separate component file and is imported directly into the .mdx file of the virtual exhibit.
### State Management
The dashboard will feature a global command input bar at the top, positioned above two parallel terminal cards that represent the FreeBSD and Linux environments side-by-side. React will be used for the state management to keep track of user input, dynamic rendering of text logs in the terminal displays,  and updating the animations of the bars and gauges,
- Each terminal area includes its own active progress bar and a visual CPU usage gauge widget that automatically runs an animation simulating the CPU response and progress as a command is being run.
- Output logs are dynamically displayed on each terminal when a user inputs any of the provided commands. Some common Linux and FreeBSD (i.e.echo, cd, lds, etc.) will also be made available, given some restrictions, to reward users who may want to explore a bit more. Additionally, output logs will include short descriptions at the end describing to the user what the command did,  how it might translate in a real-world application, and how the command being run differs when run on FreeBSD vs Linux.
### Styling 
Tailwind CSS will be utilized for styling of the overall interactive terminal, positioning, animations and other design elements that will be utilized in the development of the overall virtual exhibit.
