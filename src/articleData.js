import {
  a_a1m1,
  a_a1m2,
  a_a1m3,
  a_a1m4,
  a_a1m5,
  a_a1m6,
  a_a1mdemo,
  a_a2m1,
  a_a2m2,
  a_a2m3,
  a_a2m4,
  a_a2m5,
  a_a2m6,
  f_a1m1,
  f_a1m2,
  f_a1m3,
  f_a1m4,
  f_a1m5,
  f_a1m6,
  f_a1mdemo,
  f_a2mdemo,
  v_m1,
  v_m2,
  v_m3,
  v_m4,
  v_mdemo,
  d_m1,
  d_m2,
  d_m3,
  d_m4,
  d_mdemo,
  c_m1,
  c_m2,
  c_m3,
  c_mdemo,
  cover_a1,
  cover_f1,
  cover_f2,
  cover_v1,
  cover_c1,
  cover_a2,
  cover_d,
} from "./assets/article.media/index";

export default [
  {
    id: "1",
    articles: [
      {
        title: "ALIVE Investigator: Falling Skies! (Remix)",
        cover: cover_a1,
        content: [
          {
            type: "p",
            p: "Challenges: Our team Skyfall was asked to build a product for iOS and work with TestFlight. We were asked to analyze the previous prototype and consider a way forward, and we chose to reprogram from scratch. We were also asked to develop a user data metrics collection module to store data in an online database.",
          },
          {
            type: "p",
            p: "My Roles: Project Manager, Scrum Master, 3D & UX Designer.",
          },
          {
            type: "p",
            p: "I was mainly responsible for Project management and Scrum duties. Although, I also helped out in art, design and implementation wherever opportunity presented itself. Why? Because like Selena Gomez, I can't keep my hands to myself.",
          },
          {
            type: "p",
            p: "Team: Aashay Mehta, Chelsea Chang, Lucy Hu, Shouyu Yang, Zhuoyun Wei",
          },
          {
            type: "img",
            img: a_a1m1,
            size: "w-full",
          },
          {
            type: "p",
            p: "So our goals were (1) making a scalable iOS Application for iPad Minis. (2) Developing the backend module for collecting data. (3) And running a usability test round to iterate on controls and UI.",
          },
          {
            type: "ol",
            ol: [
              "Our solution features the following:",
              "• A fully voice acted Prologue for setting the context.",
              "• 3 Playable characters with different gender and ethnicity.",
              "• A back-end data collection module.",
              "• 3 different user groups assigned by the game that gives feedback in different levels.",
              "• A detailed storyline with 5 possible conclusions.",
              "• Questing, item descriptions and item processing with computer and microscope.",
              "• Submitting evidence reports to Ada Lovelace with a text field that records additional comments.",
              "• Tested usability of features and iterated upon insights gained.",
              "• 8 animated NPCs, a fully developed environment, minimap, big map, quest description panels, ambient sound, zone names, etc. ",
            ],
          },
          {
            type: "h1",
            h1: "Process",
          },
          {
            type: "p",
            p: "At CDM, we take the agile approach. The first week was spent setting up communication channels, important links and documentation. This typically involved breaking the brief down, team kick-off, filling up team charter, setting up team email domain, blog setup, defining roles and agenda for the first client kick-off the following week.",
          },
          {
            type: "ol",
            ol: [
              "Constraints:",
              "1) Remote operation across two timezones: IST and PT due to COVID-19.",
              "2) 3 month duration for discovery, definition, design, implementation and one round of usability testing.",
              "3) Limited access to key devices needed for testing, due to COVID-19 restrictions.",
            ],
          },
          {
            type: "img",
            img: a_a1m2,
            size: "md:w-1/2 w-full",
          },
          {
            type: "p",
            p: "We used tools like Discord, Slack, Zoom, Notion and Miro predominantly. To bring synchronicity in asynchronous comm channels, I would set up bots for listening to music together and setting meeting reminders with links.",
          },
          {
            type: "img",
            img: a_a1m3,
            size: "md:w-1/2",
          },
          {
            type: "p",
            p: "For bringing orderly chaos to group brainstorming and design direction, I was using the Design Sprint process introduced by Jake Knapp of Google Ventures in the book 'Sprint - How to solve big problems in 5 days'.",
          },
          {
            type: "h1",
            h1: "Other Contributions",
          },
          {
            type: "p",
            p: "Besides facilitating meetings with the clients, weekly scrum management, facilitating sprints, UX wireframes, and documentation; I also storyboarded a lot, made 3D assets in Blender, and systems in Unity.",
          },
          {
            type: "vidauto",
            vid: a_a1m4,
          },
          {
            type: "p",
            p: "After our first client meeting, to kick off the storyline narrative and get Yes and No, I made this prototype of prologue. This was made 2nd week into the project and helped us raise questions and answer aspects of this particular piece of the entire project really early on.",
          },
          {
            type: "img",
            img: a_a1m5,
            size: "md:w-[85%] xl:w-3/4 w-[80%]",
          },
          {
            type: "p",
            p: "I made 3 of these characters from scratch and implemented them in Unity, using Mixamo for the rig, exporting for Unity, and using standard 3rd person controller for animations. I also concepted and modelled the science station below.",
          },
          {
            type: "img",
            img: a_a1m6,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          { type: "h2", h2: "Resulting Prototype (1:01)" },
          {
            type: "vid",
            vid: a_a1mdemo,
          },
        ],
      },
      {
        title: "Polishes, Bugfixes and new Additions",
        cover: cover_a2,
        content: [
          {
            type: "p",
            p: "I joined the ALIVE Research Team at UBC as a Game Developer after the previous term ended. I was asked to polish the game, fix bugs and add new features.",
          },
          {
            type: "ol",
            ol: [
              "• Add 3 more game characters,",
              "• Concept and develop a new character selection scene,",
              "• Concept and develop a title screen for the game,",
              "• Migrate server module to new domain,",
              "• Add new metrics for tracking,",
              "• Polish, bugfix, and publish iOS to TestFlight from a new Apple Developer ID.",
            ],
          },
          {
            type: "h1",
            h1: "Characters",
          },
          {
            type: "p",
            p: "Adding 3 more premade character assets to the game, bringing the total up to 6 characters.",
          },
          {
            type: "vidauto",
            vid: a_a2m1,
          },
          {
            type: "p",
            p: "I optimized 3 additional store bought characters and made them compatible for iOS performance. I also changed the character selection UI featuring a 3D character preview. The 3 existing characters were subjected to texture improvements as seen.",
          },
          {
            type: "h1",
            h1: "Apple Developer",
          },
          {
            type: "p",
            p: "While we were developing the prototype at CDM we used the school's Apple Developer account for testflight. ALIVE had to get its own developer account, which meant going through uploading the iOS build on TestFlight again. I got us a developer account and archived an iOS build using Xcode.",
          },
          {
            type: "p",
            p: "There were two tiny but important discoveries I had to implement before I got the archive working perfectly on the target device:",
          },
          {
            type: "ol",
            ol: [
              "(1) While trying to solve an invalid code error generated when the app was communicating to the fsd, I discovered netstandard2.0 is more iOS compatible than net45 in NuGet. Changing to netstandard2.0 fixed the issue.",
              "(2) Then I noticed the metrics were being uploaded from the editor but not devices. To fix this, I uninstalled NuGet all together and used a fork from github thats compatible with the IL2CPP assemblies.",
            ],
          },
          {
            type: "img",
            img: a_a2m2,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "And then finally the app worked and collected data as it was meant to.",
          },
          {
            type: "h1",
            h1: "New Features and Environment",
          },
          {
            type: "p",
            p: "I made some other big changes to the environment and gameplay to address some of the issues, and polishing the quality of visuals and gameplay experience.",
          },
          {
            type: "p",
            p: "An onboarding sequence for new players to get familiar to the game.",
          },
          {
            type: "vidauto",
            vid: a_a2m3,
          },
          {
            type: "p",
            p: "A teleportation feature for players to jump between locations quickly.",
          },
          {
            type: "vidauto",
            vid: a_a2m4,
          },
          {
            type: "p",
            p: "Revised the placement of trees, re-painted terrian, painted pathways and more animals.",
          },
          {
            type: "img",
            img: a_a2m5,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "Improved the texture of the Lab and populated the area with furniture and props.",
          },
          {
            type: "vidauto",
            vid: a_a2m6,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    articles: [
      {
        title: "Fire Investigation Simulator",
        cover: cover_f1,
        content: [
          {
            type: "p",
            p: "Team FlashoVR was tasked to build a serious fire investigation training game that would be used as an immersive educational and reviewing tool for Justice Institute of BC's students and instructors, specifically for their Fire Cause & Origin Level II class. Through this computer-based training experience, fire investigation trainees will be learning how to follow step-by-step safety and evidence collection protocols at the burn site.",
          },
          {
            type: "p",
            p: "My Roles: Scrum Master, 3D & UX Designer.",
          },
          {
            type: "p",
            p: "I was responsible for leading design sprints, assets pipeline technical direction, unity scene management and git control. My secondary roles were to produce realisitc 3D assets, design and iterate user experience, design and code solution systems with C# along with our part-time developer Ellen Brown.",
          },
          {
            type: "p",
            p: "Team: Aashay Mehta, Tom Hackett, Gini Choi, Al Kadivar, Karl Kanger, Chenjie Whatley, Ellen Brown.",
          },
          {
            type: "img",
            img: f_a1m1,
            size: "w-full",
          },
          {
            type: "ol",
            ol: [
              "Our main goals were to:",
              "(1) Minimize the cost of burning shipping containers to provide a life-like fire investigation scenario by better preparing the students for this practical test; ",
              "(2) Make it safe and repeatable for the students to practice and memorize the fire investigation protocol; ",
              "(3) Make it remotely accessible for students on and off campus to practice the theoritical aspect of Fire Cause & Origins Level I class before moving onto Level II.",
            ],
          },
          {
            type: "ol",
            ol: [
              "And our solution featured:",
              "• A good mechanism for fire investigation such as moving and digging objects.",
              "• A function for trainees to take photos as evidence and generate reports.",
              "• Data tracking for review and reflection.",
              "• A final package that can be easily installed and used in different physical settings.",
            ],
          },
          {
            type: "h1",
            h1: "Process",
          },
          {
            type: "p",
            p: "Again, at CDM we always go with the agile methodology, and beginning phases were just ripping the brief apart and researching.",
          },
          {
            type: "p",
            p: "For design sprints I relied heavily on SPRINT's methods for this project. There has been many inspirational moments with this team, this was a self motivated and self organizing dream team.",
          },
          {
            type: "p",
            p: "So we start by discovering the product's journey MAP first, since this would help us ask the right questions and get things cleared up with the stakeholders in the earlier stages.",
          },
          {
            type: "img",
            img: f_a1m2,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "Once we had that down, we moved on to ideating and brainstorming, one of my favorite methods to brainstorm solutions is the 4 step sketch. This is a great method for rapidly sketching out ideas and discussing over the most amount of ideas in a short amount of time. This ensures whatever we decide to vote on is extemely clear to the team before we devolve into prototyping the solution.",
          },
          {
            type: "img",
            img: f_a1m3,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "Somewhere down the line we had to meet up with subject matter experts to find out how exactly the room would look once it were on fire.",
          },
          { type: "img", img: f_a1m4, size: "md:w-[85%] xl:w-3/4 w-full" },
          {
            type: "p",
            p: "One of the biggest challenges were to understand the movement of heat and fire and align on it as a team and make sure we captured the experts' knowledge as well. In one meeting we decided to sketch in 3D to figure out where the fire damage and smoke damage would map out in the room.",
          },
          {
            type: "img",
            img: f_a1m5,
            size: "w-full",
          },
          {
            type: "p",
            p: "There was certainly a lot of different areas we were developing simultaneously, one might wonder, how does a big team of 7 people function with such clarity and keep track of all the various items we were developing simultaneously? Here's the answer, we would use Mind Maps with color coded stickies to depict which ideas were agreed upon, excluded, in progress and/or implemented.",
          },
          {
            type: "img",
            img: f_a1m6,
            size: "md:w-1/3 xl:w-1/4",
          },
          {
            type: "p",
            p: "And our team worked hard without compromising on fun along the way!",
          },
          {
            type: "h2",
            h2: "The Product Trailer (1:38)",
          },
          {
            type: "vid",
            vid: f_a1mdemo,
          },
          {
            type: "h1",
            h1: "Awards",
          },
          {
            type: "ol",
            ol: [
              "1. DFP CREATE Design Showcase's Impact Award (Gold)",
              "2. Best of category (Gold) 2021 WEB: Training / E-Learning",
            ],
          },
        ],
      },
      {
        title: "Object Rotation and Polishes",
        cover: cover_f2,
        content: [
          {
            type: "p",
            p: "I started a part-time contract as a Unity Developer after the previous term, and was asked to:",
          },
          {
            type: "ol",
            ol: [
              "• Redesign of the rotation system to use the screen view's rotational axes to rotate the objects so that it follows the cursor direction would make it more intuitive.",
              "• Two buttons to be added; one to replay the context video after its playback ends. one to be able to quit the game during video playback. In addition to these, the final screen to have a button to loop back to the main menu which allows the players to go through the context video once again before entering the simulation. ",
            ],
          },
          {
            type: "p",
            p: "I redesigned the object rotating solution, so that the object always uses the view's rotational axes. I changed the controls to accomodate for users without a middle mouse button, and changed the instructions graphics as well. ",
          },
          {
            type: "h2",
            h2: "Rotation Demo (0:23)",
          },
          {
            type: "vid",
            vid: f_a2mdemo,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    articles: [
      {
        title: "The Imitation Game",
        cover: cover_v1,
        content: [
          {
            type: "p",
            p: "The Imitation Game surveys the extraordinary uses (and abuses) of artificial intelligence (AI) in the production of contemporary visual culture. The exhibition follows a chronological narrative that first examines the development of artificial intelligence from the 1950s to the present. - Vancouver Artgallery",
          },
          {
            type: "p",
            p: "My Role: Work on the organization and production of digital assets for the Exhibition's projects connected with the Centre for Digital Media (CDM), including: (1) the Exhibition's AI Introduction Wall; (2) the Exhibition's associated digital publication; (3) other related parts of the Exhibition.",
          },
          {
            type: "p",
            p: "I also authored two installations that borrow from the pepper's ghost, intially these were supposed to be anamorphic optical illusions but ended up being plain optical illusions due to the millions of videos I was preparing. More below.",
          },
          {
            type: "p",
            p: "Team: I worked with senior curator Bruce Grenville and co-curator Glenn Entis, along with many talented personnels involved in creating, curating and installing the various moving parts of the entire exhibition. ",
          },
          {
            type: "h1",
            h1: "Pepper's Cone",
          },
          {
            type: "p",
            p: "One of the challenges I faced was to author CGI for stationary conical displays as described by Roxanne Luo in her paper for Pepper's Cone. I pulled the git repository posted by her and rendered footage suitable for a conical surface the unity project file was caliberated for.",
          },
          {
            type: "p",
            p: "Repo link: https://github.com/roxanneluo/Pepper-s-Cone-Unity",
          },
          {
            type: "img",
            img: v_m1,
            size: "w-3/4",
          },
          {
            type: "p",
            p: "Apart from my horrific camera quality, the imagery worked well when projected from iPads. However, it was not caliberated to use bigger screens, and due to a limited inventory of displays available for the exhibition, and the lack of available time for all the mathematical calculations needed to caliberate this imagery onto bigger custom built cones, we settled for the classic Pepper's Ghost approach for these installations.",
          },
          {
            type: "vidauto",
            vid: v_m2,
          },
          {
            type: "p",
            p: "The anamorphic videos were rendered and played back as a render texture in the pepper's cone unity project before capturing the footage to be played on the iPad.",
          },
          {
            type: "h1",
            h1: "Mountain of Assets",
          },
          {
            type: "p",
            p: "My main duty was sourcing, editing, looping and assisting curation of the digital media for exhibition displays. These pieces ranged widely from: documentaries, excerpts from movies, excerpts from interviews, playthroughs, promos, slideshows, and specially produced videos. With more than 50 total videos, special care was put into the design language of each genre.",
          },
          {
            type: "img",
            img: v_m3,
            size: "w-full",
          },
          {
            type: "p",
            p: "For example, a subtle shadow was added to subtitles in movie excerpts to improve legibility.",
          },
          {
            type: "img",
            img: v_m4,
            size: "w-3/4",
          },
          {
            type: "p",
            p: "Sometimes the assets would be iterated upon multiple times. So, to keep things clear and avoid any confusion among the team responsible for installation, I divided the asset directories and maintained a documentation with set guidelines.",
          },
          {
            type: "h2",
            h2: "GANs Illustrated (3:36)",
          },
          {
            type: "p",
            p: "This video graphic was co-authored by Glenn Entis, Isabella Pu and Adam Finkelstein. It illustrates how GANs aka Generative Adversarial Networks can be used to synthesize plausible imagery, in this case, of cats.",
          },
          {
            type: "p",
            p: "I had the humble opportunity to compile the audio and video together for this talented group of people.",
          },
          {
            type: "vid",
            vid: v_mdemo,
          },
        ],
      },
    ],
  },
  {
    id: "4",
    articles: [
      {
        title: "Digital Persuasion and Behaviour Change",
        cover: cover_d,
        content: [
          {
            type: "p",
            p: "The things I learnt from taking this course were incredibly eye opening. I learned not only the theories but practical applications of..",
          },
          {
            type: "ol",
            ol: [
              "• The two different characteristics exhibited by our thinking process. (Thinking, Fast and Slow)",
              "• Aristotle's rhetoric, its application and ethics in the digital applications. (Persuasive technology / Captology)",
              "• NUDGES, Choice Hacking, Cialdini's Principles, Optimal Experience (Flow), Octalysis, and more. ",
            ],
          },
          {
            type: "p",
            p: "I will be eternally grateful for this incredibly valuable and concentrated insight packed and given to me by Robyn Sussel. I believe every individual who wants to make Human Centric changes in the world should know, understand, and use these theories wisely.",
          },
          {
            type: "h1",
            h1: "The two systems (2:02)",
          },
          {
            type: "p",
            p: "One of the assignments were to:",
          },
          {
            type: "p",
            p: "'Create a script, image, graphic, storyboard or even short video/animation that demonstrates how system 1 and system 2 work and how they interact with each other.'",
          },
          {
            type: "vidauto",
            vid: d_m1,
          },
          {
            type: "p",
            p: "Video above is my representation of the two systems in my understanding. System 1 and 2 are conceptual divisions of our brain based on the behavioral characteristics they function on, as described by Daniel Kahneman in his book Thinking, Fast & Slow.",
          },
          {
            type: "p",
            p: "This video touches on a multiple observations Kahneman made during his research. The dialation of pupils when someone is focused, the response of the automatic system on simple tasks, its response on complex tasks, and its impact in evoking the logical behavior. It also shows the charicteristics of the logical brain, it's lazy attitude, how draining it is when evoked, and the craving of rewards after its use.",
          },
          {
            type: "h1",
            h1: "Transtheoretical Model of Change (2:18)",
          },
          {
            type: "p",
            p: "Similarly, one of the frameworks we learned for employing behavior change in technology were Transtheoretical model of change. To show my understanding of the stages of change, I created this video.",
          },
          {
            type: "vidauto",
            vid: d_m2,
          },
          {
            type: "p",
            p: "The video is about a person trying to quit smoking, and how learning the habits and interests of the person can be used for their benefit (in this case, healthcare). I try to show in this video how subtle persuasion affects the person in question, how targetted advertisements work in funneling and nudging those that are at different stages of desired change.",
          },
          {
            type: "h1",
            h1: "Project: A game that's a force for good",
          },
          {
            type: "p",
            p: "This project brief was set by Rare and Xbox games in the D&AD New Blood Awards 2021. The challenge:",
          },
          {
            type: "p",
            p: "'Rare want you to create a game that's a force for good, that not only makes players feel good but also does good and makes an impact on the world.'",
          },
          {
            type: "p",
            p: "I heavily relied on the idea that games can be used as a scientific, cultural and educational medium. BJ Fogg states in Captology: computers as persuasive media, games and simulations allow us to explore cause-and-effect relationships without consequences. This was the fountation of my big idea, and I wanted to allow people to: ",
          },
          {
            type: "ol",
            ol: [
              "• Explore the cause and effect of good and bad moods versus productivity,",
              "• Explore the cultural and scientific diversities in various personalities,",
              "• Reinforcing the behavior of gratefulness and inclusivity by providing them with a safe environment for rehearsal and rewarding them for it.",
              "• And most importantly -- making it a fun and social experience!",
            ],
          },
          {
            type: "img",
            img: d_m3,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "For designing the game I chose Octalysis as my main framework for onboarding and motivating action towards the desired behavior. I would use operant conditioning and intermittent reinforcement to nudge and reward the player when they perform a desired behavior.",
          },
          {
            type: "p",
            p: "This would not be a restricted environment but certainly an environment that allowed exploration of cause and effect of interactions with people and how it correlates with the productivity of entire community; Hopefully encouraging the development of empathy in my target audience.",
          },
          {
            type: "img",
            img: d_m4,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "If you're interested in knowing more about the design, check out the slide deck. Otherwise, below is a video prototype of how I imagine the onboarding phase to be. Many of the frameworks I learned in this class are applied in the video.",
          },
          { type: "h2", h2: "Game Onboarding Mockup" },
          {
            type: "vid",
            vid: d_mdemo,
          },
        ],
      },
    ],
  },
  {
    id: "5",
    articles: [
      {
        title: "Clockwork, A behavioral SaaS.",
        cover: cover_c1,
        content: [
          {
            type: "p",
            p: "For ambitious individuals and collaborators who struggle to achieve the state of flow while navigating through a storm of commitments and information, Clockwork is a cross-platform task management software that offloads the action items from your brain by chunking the tasks and setting reminders.",
          },
          {
            type: "p",
            p: "Unlike other task management systems which take time and effort to set up new workspaces, Clockwork structures complex choices, provides templates and thought polarizing visual models in a way that setting up workspaces feels as smooth and enjoyable as a road trip with Tesla autopilot.",
          },
          { type: "h1", h1: "Process" },
          {
            type: "p",
            p: "To explore the problem I was solving for, first I conducted some 1-on-1 interviews with people who struggled with this particular problem. I identified the following pain points in my process:",
          },
          {
            type: "ol",
            ol: [
              "1. Lack of personalized suggestions in overcoming obstacles and task completion.",
              "2. Time lost in training employees and handling hand-offs when employees quit.",
              "3. Lack of timely communication, vision alignment and clarity in actionable steps.",
              "4. Hard to keep track of all the moving parts when there are a lot of things to do.",
            ],
          },
          { type: "img", img: c_m1, size: "md:w-[85%] xl:w-3  /4 w-full" },
          {
            type: "p",
            p: "Then, I tested some hypotheses for validating customer value with cheap prototypes.",
          },
          { type: "img", img: c_m2, size: "md:w-[85%] xl:w-3/4 w-full" },
          {
            type: "p",
            p: "Based on the findings and insights gained from each interaction, I updated my lean canvas. And drafted a roadmap for my pitch presentation.",
          },
          { type: "img", img: c_m3, size: "md:w-[85%] xl:w-3/4 w-full" },
          {
            type: "p",
            p: "For more information on the research, market analysis, go to market plan and all such, check out the slide deck! Below is a video of a peek into the applications of the product.",
          },
          { type: "h2", h2: "Clockwork Demo (1:00)" },
          { type: "vid", vid: c_mdemo },
        ],
      },
    ],
  },
];
