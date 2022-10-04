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
  hh_m1,
  hh_m2,
  hh_m3,
  hh_mdemo,
  da_m1,
  da_m2,
  da_m3,
  g_m1,
  g_m2,
  g_m3,
  g_mdemo,
  s_m1,
  s_m2,
  s_m3,
  s_m4,
  s_m5,
  s_m6,
  s_m7,
  s_mdemo,
  e_m1,
  e_m2,
  e_m3,
  e_m4,
  e_m5,
  e_m6,
  i_m1,
  i_mdemo,
  cover_a1,
  cover_f1,
  cover_f2,
  cover_v1,
  cover_c1,
  cover_a2,
  cover_d,
  cover_hh,
  cover_da,
  cover_g,
  cover_s,
  cover_e,
  cover_i,
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
  {
    id: "6",
    articles: [
      {
        title: "Cross Cultural Impact Jam",
        cover: cover_hh,
        content: [
          {
            type: "p",
            p: "I participated in an Impact Jam hosted by Games for Change. The theme of the jam was 'Amplifying voices' and the challenge was to create a game that would help amplify the voices of people who are often misunderstood. I was in a team of 4 students, each from a different country, and we created a game called 'Healing Heart' in 10 days.",
          },
          {
            type: "p",
            p: "Our team secured the honorable mention for the most creative game. The game was featured on play.unity.com and raked in 3,000 views and 2,000 plays.",
          },
          { type: "h1", h1: "Goal and Alignment" },
          {
            type: "p",
            p: "Our goal was to create a game that encourages people to be more empathetic towards people whose speech is affected by a strong emotional state. The game has a fun mechanism which allows players to align their listening skills with the emotional state of the speaker, which when done successfully, the speaker appears human again.",
          },
          {
            type: "img",
            img: hh_m1,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "This game aims to amplify the voices of the people who feel alienated because their speech is highly vulnerable to strong emotions like anxiety, insecurity or sadness. And Healing Heart promotes the message of shifting the bias with empathetic listening and conditioning the use of kind words in these situations.",
          },
          {
            type: "img",
            img: hh_m2,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "h1",
            h1: "Contribution",
          },
          {
            type: "p",
            p: "I was the Co-Game Designer, 3D and UI Designer, I was responsible for the game design, user interface, and designing mechanics. I also contributed to the pitch deck, represented the team for media, and facilitated the final presentation of the game.",
          },
          {
            type: "img",
            img: hh_m3,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "Watch the playthrough of the game below!",
          },
          {
            type: "h2",
            h2: "Playthrough (2:08)",
          },
          {
            type: "vid",
            vid: hh_mdemo,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    articles: [
      {
        title: "Digital Activism Vol. 2",
        cover: cover_da,
        content: [
          {
            type: "p",
            p: "I was asked to design the cover for the book Digital Activism Vol. 2, a book that explores the intersection of technology and activism. The book is a collection of essays written by the students of Center for Digital Media, edited together by Dr. Rachel Ralph.",
          },
          {
            type: "h1",
            h1: "Design",
          },
          {
            type: "p",
            p: "I had a rough idea of how I wanted the design to look, so I sketched it out and created another graphic with the colors and shapes. Then I got feedback on the design before making some changes.",
          },
          {
            type: "img",
            img: da_m1,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "As you can see,  #Tag was changed to make sure that the idea we wanted to promote, actually resonated with the audience, and more importantly, was interpretted accurately.",
          },
          {
            type: "img",
            img: da_m2,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "Then I found some 3D assets to work with and started playing around with the design. I wanted to make sure that the design was simple, yet impactful. I also wanted to make sure that the design was not too busy, and that the text was readable. The result is the cover you see above, and below is a square version for social media.",
          },
          {
            type: "img",
            img: da_m3,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "",
          },
        ],
      },
    ],
  },
  {
    id: "8",
    articles: [
      {
        title: "The Sacred Grove",
        cover: cover_g,
        content: [
          {
            type: "p",
            p: "The Sacred Grove is a concept proposal for the installation of an Augmented Reality game to improve the waiting area experience of a corporate building. The game is designed to be a fun and engaging experience for the visitors, while also providing them with a sense of belonging and a sense of purpose.",
          },
          {
            type: "p",
            p: "The general idea of gameplay was to compliment the tree-like columns of the room and visualize its immediate surroundings into a forest reserve, with the aim of preserving the last living trees in the world.",
          },
          {
            type: "h1",
            h1: "Creating the Assets",
          },
          {
            type: "h2",
            h2: "The Tree",
          },
          {
            type: "p",
            p: "To fit into the concept the tree needed to be old and dense. Finding the right asset that fit the description was not so hard, but the next challenge was to make it look alive.",
          },
          { type: "img", img: g_m1, size: "md:w-[85%] xl:w-1/2 w-full" },
          {
            type: "p",
            p: " There was no actual wind or force wrap used here, to simulate the rustling of leaves, I separated the trunk from the leaves in 3Ds max and added a noise modifier on the leaves. While keeping the leaves and trunk grouped, I added a bend modifier ontop and animated it to simulate the effect of swaying. ",
          },
          {
            type: "h2",
            h2: "The Bird",
          },
          {
            type: "p",
            p: "Similarly I had to first find a fully textured and rigged bird, and fortunately I did. The interesting thing about the bird here is that it actually isn't moving in 3D space at all.",
          },
          { type: "img", img: g_m2, size: "md:w-[85%] xl:w-1/3 w-full" },
          {
            type: "p",
            p: " I animated the bird in Maya and exported out an image sequence, then I imported the image sequence in After Effects to animate the path and scale. This gives you more flexibility and control over the path of the bird. I would not advice to do this if the camera was not steady and the environment was 3D.",
          },
          {
            type: "h2",
            h2: "The Fruits",
          },
          {
            type: "p",
            p: "These forms were supposed to be installed physically on the columns which then disappear when viewed through the Augmented Reality game application.",
          },
          { type: "img", img: g_m3, size: "md:w-[85%] xl:w-1/2 w-full" },
          {
            type: "p",
            p: "The client gave me sketches and clay models to start with, after which I made the meshes in Zbrush and then refined them. Once we selected the final forms, I imported them in 3Ds max for final renders. The meshes are only box mapped, there was no time or need to unwrap them as they were not going to be up-close to the camera.",
          },
          { type: "h2", h2: "The Artefact (0:28)" },
          { type: "vid", vid: g_mdemo },
        ],
      },
    ],
  },
  {
    id: "9",
    articles: [
      {
        title: "Sharin",
        cover: cover_s,
        content: [
          {
            type: "p",
            p: "A live interactive invitation ceremony for a wedding, to simulate a tradition of relative families writing the kankotri invite card through a digital medium. Starting with an animated short video of concept story-line, followed by a set of 50 personalized videos for guests, all playing in a seamless manner.",
          },
          {
            type: "img",
            img: s_m1,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "This is the map of the final execution of this event. The presentation clicker glows when the button is pressed by a family member, triggering next video. There were two audio inputs used, one from the video itself as sound effects and another being an ambient soundtrack playing separately with it. As a result, audio never breaks the ambience even if the video itself is paused on the last frame each time.",
          },
          {
            type: "h1",
            h1: "Concept",
          },
          {
            type: "p",
            p: "The concept at play here is that the tree symbolizes the beginning of a new relationship. Reddish hue in the leaves indicates the essence of life, as it turns to become precious and eternal, depicted here by the color gold.",
          },
          { type: "vidauto", vid: s_m2 },
          {
            type: "p",
            p: " I decided for a hand drawn storybook style for the overall look, using some ornamental and flourishing elements to compliment the occasion. ",
          },
          {
            type: "h1",
            h1: "Story",
          },
          {
            type: "h2",
            h2: "The Flourish",
          },
          {
            type: "p",
            p: "There is an upward panning motion in this shot, which slowly reveals the elements in this scene. Additionally, there is an overlay of welcoming text with similar style animation.",
          },
          {
            type: "vidauto",
            vid: s_m3,
          },
          {
            type: "p",
            p: "The hierarchy of assets is complex, but mainly there are 3 aspects, the background, the tree, and the overlay. The background reveals itself with the use of an Alpha Matte, while the other two are using a Stroke Effect to achieve this. The tree itself has multiple layers that use the same technique with a delay.",
          },
          {
            type: "h2",
            h2: "The Journey",
          },
          {
            type: "p",
            p: "A Hummingbird carries the news to spread it across the world from a freshly bloomed flower on the tree.",
          },
          {
            type: "vidauto",
            vid: s_m4,
          },
          {
            type: "p",
            p: "The bird is a rig system, composed of 3D layers, made in After Effects itself. The wings are operating on a wiggle expression after defining the origin of each layer. The main body is a puppet mesh with pins that also operate on a wiggle expression. Once created, the rig system was animated as needed. The cards then fall out of the bags. The story is continued in the following section.",
          },
          {
            type: "h2",
            h2: "The Invitation",
          },
          {
            type: "p",
            p: "Cards are displayed on the screen with details of the upcoming events, the left side is for the groom's guests and the right side is for the bride's guests. For common schedules, a single card is shown. This was done using a plug-in for 3D in After Effects.",
          },
          {
            type: "vidauto",
            vid: s_m5,
          },
          {
            type: "p",
            p: "The last frame of this video there is a close-up of the logo, this serves as a transition for the next video in queue when the first family is called on stage. Please note the video is sped up by 4x for display purpose.",
          },
          {
            type: "h1",
            h1: "Interactive Ceremony",
          },
          {
            type: "h2",
            h2: "For the Groom's side",
          },
          {
            type: "p",
            p: "Once the first family is called on stage, the next video is triggered by them. Following the story, the card falls onto a table where the invitee's name is magically written, after an auspiscious tradition is performed.",
          },
          {
            type: "vidauto",
            vid: s_m6,
          },
          {
            type: "p",
            p: " The bird here is a different rig, created the same way as the other. For the feather I set the origin to it's end, and added a wiggle expression in its orientation, then drew a path to simulate the writing. The video pauses at a frame where the bird appears at rest to serve for the next transition. ",
          },
          {
            type: "h2",
            h2: "For the Bride's side",
          },
          {
            type: "p",
            p: "Upon announced, the second family approaches the stage to trigger the next video. Only this time, there are a few tweaks and additions to keep the seamlessness intact.",
          },
          {
            type: "vidauto",
            vid: s_m7,
          },
          {
            type: "p",
            p: "Then a second variation for Groom's card, without the card falling and the bird's entry, is then played for the next family. Finally, this brings us back to bride's video. Now a complete loop is formed. Production concludes by changing the text and tweaking feather path for each guest.",
          },
          {
            type: "h2",
            h2: "Full storyline and a taste of ceremony (2:16)",
          },
          {
            type: "vid",
            vid: s_mdemo,
          },
        ],
      },
    ],
  },
  {
    id: "10",
    articles: [
      {
        title: "Evokar",
        cover: cover_e,
        content: [
          {
            type: "p",
            p: "A smart package design solution that folds and assembles straight off the press. Using only corrugated cardboard to house lampshades for shipment, this design features a single joint on the outer box and an assembly of slotted interior forms to cushion the lamp shades and strengthen the structure of the box.",
          },
          { type: "img", img: e_m1, size: "md:w-[85%] xl:w-3/4 w-full" },
          {
            type: "p",
            p: "At first the lampshades were measured precisely from their molds, referencing their images in CAD software to get their shape and dimensions.",
          },
          {
            type: "h1",
            h1: "Design and Prototyping",
          },
          {
            type: "p",
            p: "The idea behind this design is to create a packaging solution that is easy to assemble and disassemble, and is also easy to store and transport.",
          },
          { type: "img", img: e_m2, size: "md:w-[85%] xl:w-3/4 w-full" },
          {
            type: "p",
            p: "The design is inspired by the origami art form, and the idea of folding and unfolding a box to create a structure that is both strong and light.",
          },
          {
            type: "img",
            img: e_m3,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "h1",
            h1: "Exterior Form",
          },
          {
            type: "p",
            p: "The boxes were classified into two categories based on the dimensions of the lamp shades. A few changes were made in design i.e. smaller top flaps and a heptagon base to account for better stability, while also keeping the form.",
          },
          {
            type: "img",
            img: e_m4,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "After the design was resolved, making the working drawings for cutting was the next step. Unwrapping the box gave us the result above, which was then modified to fit into the available material sheet.",
          },
          {
            type: "h1",
            h1: "Interior Forms",
          },
          {
            type: "p",
            p: "Once the box was ready, Interior forms were designed which served as a protection case for the lampshades. The horizontal disks prevent the box from bending or deforming and keep the product in place, while the vertical ribs hold the structure together.",
          },
          {
            type: "p",
            p: "To complete the assembly of the interior forms structure, there are 7 identical vertical pieces and 4 horizontal disks that follow the shape of the product.",
          },
          {
            type: "img",
            img: e_m5,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "The design of the interior forms above produced a lot of wastage, to counter this another option was designed, breaking the horizontal disks further into equal parts that locked onto two vertical ribs individually, This allowed for a lot less material waste but increased the cutting cost as well as labour.",
          },
          {
            type: "img",
            img: e_m6,
            size: "md:w-[85%] xl:w-3/4 w-full",
          },
          {
            type: "p",
            p: "Although this option was not used in the final production, the idea was worth mentioning and may be viable in other cases of mass production.",
          },
        ],
      },
    ],
  },
  {
    id: "11",
    articles: [
      {
        title: "Intensity",
        cover: cover_i,
        content: [
          {
            type: "p",
            p: "I produced a realistic video flythrough for a client that was opening a new gym in the city. The purpose was to visualize the space and also help promote the opening of the space by getting prospective customers familiar with the spaces they can work with in the gym.",
          },
          {
            type: "p",
            p: "This is a solo project and modelled, textured, lit, animated and rendered the flythrough.",
          },
          { type: "h1", h1: "Workflow" },
          { type: "img", img: i_m1, size: "md:w-[85%] xl:w-3/4 w-full" },
          {
            type: "p",
            p: "Rendering a video with proper quality checks can prevent unwanted result and a waste of time and resource. Due to this project, I learned to keep following things in mind before rendering: enabling motion blur, thoroughly checking a low quality preview render for issues like flickering and checking high quality preview render with periodic frame jumps to ensure quality in final output.",
          },
          { type: "h2", h2: "Flythrough (1:18)" },
          {
            type: "vid",
            vid: i_mdemo,
          },
        ],
      },
    ],
  },
];
